import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://openastronomy.org",
  trailingSlash: "always",
  outDir: "html",
  integrations: [sitemap()],
  // Downloaded during the build and served from this site, so visitors make
  // no request to Google. Head.astro adds the @font-face rules.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fira Sans",
      cssVariable: "--font-fira-sans",
      weights: [400, 600, 700],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Helvetica", "Arial", "sans-serif"],
    },
  ],
  vite: {
    server: {
      watch: {
        ignored: ["**/.history/**", "**/html/**"],
      },
    },
  },
});
