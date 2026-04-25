import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import * as cheerio from "cheerio";

const dist = new URL("../dist/", import.meta.url).pathname;
const required = [
  "/HoM/",
  "/HoM/ourwork/",
  "/HoM/about/",
  "/HoM/privacy/",
  "/HoM/terms/",
  "/HoM/files/take-this-chemo.pdf",
  "mailto:fran@heroesofmedicine.org",
  "https://www.amazon.com/dp/B098CZ1MXF",
  "https://www.youtube.com/channel/UCMF0PELfJHyXTpz8n9fdz4Q",
];
const omittedRoutes = [
  "/joinus",
  "/forpatients",
  "/referapatient",
  "/donate",
  "/internship",
  "/copy-of-terms-and-conditions",
  "/copy-2-of-donate",
  "/copy-of-privacy-policy",
];
const omittedFiles = [
  "copy-of-terms-and-conditions/index.html",
  "copy-2-of-donate/index.html",
  "copy-of-privacy-policy/index.html",
];

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

const hrefs = new Set();
for (const file of await htmlFiles(dist)) {
  const html = await readFile(file, "utf8");
  const $ = cheerio.load(html);
  $("a[href]").each((_, element) => hrefs.add($(element).attr("href")));
}

let failures = 0;
for (const link of required) {
  if (![...hrefs].some((href) => href === link || href.startsWith(`${link}?`) || href.startsWith(`${link}#`))) {
    failures += 1;
    console.error(`[links] Missing required link: ${link}`);
  }
}

for (const href of hrefs) {
  for (const omitted of omittedRoutes) {
    if (href.includes(omitted)) {
      failures += 1;
      console.error(`[links] Omitted route still linked: ${href}`);
    }
  }
}

for (const file of await htmlFiles(dist)) {
  for (const omitted of omittedFiles) {
    if (file.endsWith(omitted)) {
      failures += 1;
      console.error(`[links] Omitted route still built: ${file}`);
    }
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log("[links] Required links are present and omitted routes are not linked.");
}
