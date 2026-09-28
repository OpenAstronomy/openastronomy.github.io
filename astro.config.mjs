import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://openastronomy.org",
  trailingSlash: "always",
  outDir: "html",
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
