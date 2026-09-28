import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://openastronomy.org",
  trailingSlash: "always",
  outDir: "html",
  build: {
    format: "directory",
  },
  prefetch: true,
  vite: {
    server: {
      watch: {
        ignored: ["**/.history/**", "**/html/**"],
      },
    },
  },
});
