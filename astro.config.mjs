import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://openastronomy.org",
  trailingSlash: "always",
  outDir: "html",
  redirects: {
    "/Universe_OA/": "/universe-oa/",
    "/Universe_OA/archive/": "/universe-oa/archive/",
  },
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
