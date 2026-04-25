import { defineConfig, devices } from "@playwright/test";

const nodeCommand = process.env.PW_NODE_BIN || "node";

export default defineConfig({
  testDir: "tests",
  timeout: 30_000,
  webServer: {
    command: `${nodeCommand} ./node_modules/astro/bin/astro.mjs preview --host 127.0.0.1 --port 4321`,
    url: "http://127.0.0.1:4321/",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://127.0.0.1:4321/",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "chromium-mobile", use: { ...devices["Pixel 5"] } },
  ],
});
