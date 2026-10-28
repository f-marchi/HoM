import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import * as cheerio from "cheerio";
import { homePage, ourWorkPage } from "../src/data/site.mjs";
import { youtubeVideoId } from "../src/components/url.js";

const dist = new URL("../dist/", import.meta.url).pathname;
const workItems = [
  ...ourWorkPage.categories.flatMap((category) => category.items),
  ...ourWorkPage.legacy.items,
  ...ourWorkPage.community.items,
  ...ourWorkPage.interviews.items,
];
const videoItems = [...homePage.videos, ...workItems];
const expected = new Map(videoItems.map((item) => [item.url, item]));
const videoUrl = /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{11}$/;
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`[videos] ${message}`);
}

for (const item of videoItems) {
  if (!videoUrl.test(item.url) || !item.title || !item.person || !item.description) {
    fail(`Incomplete video entry: ${item.title}`);
  }
}
if (homePage.videos.length !== 2 || workItems.length !== 17 || expected.size !== 17 ||
    new Set(workItems.map((item) => item.url)).size !== 17) {
  fail("Expected two homepage placements and 17 unique videos on Our Work.");
}
if (failures) process.exit(1);

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

for (const file of await htmlFiles(dist)) {
  const $ = cheerio.load(await readFile(file, "utf8"));
  const items = file === join(dist, "index.html") ? homePage.videos
    : file === join(dist, "ourwork/index.html") ? workItems : [];
  const cards = $(".video-card");
  if (cards.length !== items.length || $("iframe").length !== items.length) {
    fail(`Incorrect video count in ${file}.`);
  }
  cards.each((index, element) => {
    const item = items[index];
    if (!item) return;
    const card = $(element);
    const player = card.find("iframe");
    const src = `https://www.youtube-nocookie.com/embed/${youtubeVideoId(item.url)}?playsinline=1&rel=0`;
    if (card.attr("data-video-source") !== item.url ||
        card.find("a.text-link").attr("href") !== item.url ||
        player.length !== 1 || player.attr("src") !== src ||
        player.attr("title") !== `${item.title} | ${item.person}` ||
        player.attr("loading") !== "lazy" || !player.is("[allowfullscreen]") ||
        player.attr("referrerpolicy") !== "strict-origin-when-cross-origin") {
      fail(`Player or link mismatch: ${item.title} in ${file}.`);
    }
  });
  $("a[href^='https://youtu.be/']").each((_, element) => {
    const href = $(element).attr("href");
    if (!expected.has(href)) fail(`Unexpected YouTube link: ${href}`);
  });
  if ($("[data-video-state='unavailable']").length || /reupload/i.test($("body").text())) {
    fail(`Obsolete reupload state in ${file}.`);
  }
}

for (const [url, item] of expected) {
  try {
    const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) {
      fail(`${item.title}: oEmbed returned ${response.status}.`);
      continue;
    }
    const metadata = await response.json();
    if (metadata.title !== `${item.title} | ${item.person}` ||
        metadata.author_url.toLowerCase() !== ourWorkPage.intro.channel.href.toLowerCase()) {
      fail(`YouTube title or channel mismatch: ${item.title}`);
    }
  } catch (error) {
    fail(`${item.title}: ${error.message}`);
  }
}

if (failures) {
  process.exitCode = 1;
} else {
  console.log("[videos] All 17 videos have matching embeds, links, and YouTube metadata.");
}
