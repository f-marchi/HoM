import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://f-marchi.github.io",
  base: "/HoM",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
