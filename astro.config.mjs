import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://openastronomy.org",
  trailingSlash: "always",
  outDir: "html",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/.history/**", "**/html/**"],
      },
    },
  },
});
