import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { expectedVideos } from "../src/data/site.mjs";

const dist = new URL("../dist/", import.meta.url).pathname;
const expected = [...new Set([...expectedVideos.home, ...expectedVideos.ourwork])].sort();
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

const found = new Set();
for (const file of await htmlFiles(dist)) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(pattern)) found.add(match[0]);
}

const actual = [...found].sort();
const missing = expected.filter((url) => !found.has(url));
const extra = actual.filter((url) => !expected.includes(url));

if (missing.length || extra.length) {
  if (missing.length) console.error("[videos] Missing:", missing.join(", "));
  if (extra.length) console.error("[videos] Extra:", extra.join(", "));
  process.exitCode = 1;
} else {
  console.log("[videos] Exact YouTube manifest is present with no extras.");
}
