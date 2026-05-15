import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { homePage, ourWorkPage } from "../src/data/site.mjs";

const dist = new URL("../dist/", import.meta.url).pathname;
const videoItems = [
  ...homePage.videos,
  ...ourWorkPage.categories.flatMap((category) => category.items),
  ...ourWorkPage.legacy.items,
  ...ourWorkPage.interviews.items,
];
const expected = [...new Set(videoItems.map((item) => item.url).filter(Boolean))].sort();
const pattern = /https:\/\/youtu\.be\/[A-Za-z0-9_-]+/g;

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

async function youtubeAvailable(url) {
  const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
  const oembedResponse = await fetch(oembed);
  if (!oembedResponse.ok) return `oEmbed returned ${oembedResponse.status}`;

  const id = new URL(url).pathname.split("/").filter(Boolean).pop();
  const thumbnailResponse = await fetch(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`, {
    method: "HEAD",
  });
  if (!thumbnailResponse.ok) return `thumbnail returned ${thumbnailResponse.status}`;

  return "";
}

let html = "";
for (const file of await htmlFiles(dist)) {
  html += await readFile(file, "utf8");
}

const found = new Set();
for (const match of html.matchAll(pattern)) found.add(match[0]);

let failures = 0;
const actual = [...found].sort();
const missing = expected.filter((url) => !found.has(url));
const extra = actual.filter((url) => !expected.includes(url));
const unavailableExpected = videoItems.filter((item) => !item.url).length;
const unavailableRendered = html.match(/data-video-state="unavailable"/g)?.length ?? 0;

if (missing.length) {
  failures += missing.length;
  console.error("[videos] Missing:", missing.join(", "));
}

if (extra.length) {
  failures += extra.length;
  console.error("[videos] Extra:", extra.join(", "));
}

if (unavailableRendered !== unavailableExpected) {
  failures += 1;
  console.error(`[videos] Expected ${unavailableExpected} unavailable cards, found ${unavailableRendered}.`);
}

for (const url of expected) {
  const error = await youtubeAvailable(url);
  if (error) {
    failures += 1;
    console.error(`[videos] Unavailable ${url}: ${error}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else if (expected.length > 0) {
  console.log("[videos] YouTube links are present and available.");
} else {
  console.log("[videos] All video cards are marked for reupload with no YouTube links.");
}
