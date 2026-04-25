import { readFile } from "node:fs/promises";
import { join } from "node:path";
import * as cheerio from "cheerio";
import {
  aboutPage,
  commonContent,
  footerLinks,
  homePage,
  navItems,
  ourWorkPage,
  policyPages,
} from "../src/data/site.mjs";

const dist = new URL("../dist/", import.meta.url);
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const forbiddenText = [
  "Climb for Cancer",
  "Google Analytics",
  "credit card number",
  "registered user",
  "marital status",
  "REFUND POLICY",
];

async function pageText(route) {
  const file =
    route === "/" ? join(dist.pathname, "index.html") : join(dist.pathname, route, "index.html");
  const html = await readFile(file, "utf8");
  const $ = cheerio.load(html);
  $("script, style").remove();
  return normalize($("body").text());
}

function addPageChrome(expected) {
  for (const item of navItems) expected.push(item.label);
  for (const item of footerLinks) expected.push(item.label);
  expected.push(commonContent.copyright);
}

const checks = new Map();

{
  const expected = [];
  addPageChrome(expected);
  expected.push(...homePage.hero.paragraphs);
  expected.push(...homePage.hero.ctas.map((item) => item.label));
  for (const item of homePage.storyGrid) expected.push(item.person, item.heading);
  for (const item of homePage.videos) {
    expected.push(item.eyebrow, item.title);
    if (item.person) expected.push(item.person);
    if (item.description) expected.push(item.description);
  }
  expected.push(homePage.heroJourney.title, ...homePage.heroJourney.paragraphs, homePage.heroJourney.credit);
  expected.push(...homePage.quote.lines, homePage.quote.credit);
  checks.set("/", expected);
}

{
  const expected = [];
  addPageChrome(expected);
  expected.push(ourWorkPage.intro.title, ...ourWorkPage.intro.paragraphs);
  expected.push(...ourWorkPage.anchors.map((item) => item.label));
  for (const category of ourWorkPage.categories) {
    expected.push(category.title);
    for (const item of category.items) expected.push(item.title, item.person);
  }
  expected.push(ourWorkPage.legacy.title);
  for (const item of ourWorkPage.legacy.items) expected.push(item.title, item.description);
  expected.push(ourWorkPage.interviews.title);
  for (const item of ourWorkPage.interviews.items) expected.push(item.title, item.person, item.quote);
  expected.push(
    ourWorkPage.takeThisChemo.title,
    ourWorkPage.takeThisChemo.subtitle,
    ourWorkPage.takeThisChemo.description,
    ourWorkPage.takeThisChemo.checkItOut.label,
    ourWorkPage.takeThisChemo.availability,
    ourWorkPage.takeThisChemo.availabilitySubtitle,
    ourWorkPage.takeThisChemo.buy.label,
    ...ourWorkPage.quote.lines,
    ourWorkPage.quote.credit,
    ourWorkPage.quote.subcredit,
  );
  checks.set("/ourwork", expected);
}

{
  const expected = [];
  addPageChrome(expected);
  expected.push(aboutPage.titleText);
  for (const section of aboutPage.sections) {
    expected.push(section.title);
    if (section.subtitle) expected.push(section.subtitle);
    expected.push(...section.paragraphs);
  }
  expected.push(
    aboutPage.contact.title,
    aboutPage.contact.subtitle,
    aboutPage.contact.emailLine,
    aboutPage.contact.success,
    ...aboutPage.quote.lines,
    aboutPage.quote.credit,
  );
  checks.set("/about", expected);
}

for (const page of policyPages) {
  const expected = [];
  addPageChrome(expected);
  expected.push(page.heading, page.subtitle, ...page.paragraphs);
  checks.set(page.route.replace(/\/$/, ""), expected);
}

let failures = 0;

for (const [route, expected] of checks) {
  const text = await pageText(route === "/" ? "/" : route.slice(1));
  for (const raw of expected.filter(Boolean)) {
    const needle = normalize(raw);
    if (!text.includes(needle)) {
      failures += 1;
      console.error(`[content] Missing on ${route}: ${needle}`);
    }
  }
  for (const raw of forbiddenText) {
    const needle = normalize(raw);
    if (text.includes(needle)) {
      failures += 1;
      console.error(`[content] Obsolete text still present on ${route}: ${needle}`);
    }
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log("[content] All expected copied text is present.");
}
