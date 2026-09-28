/**
 * Redirect stubs for URLs from the old Jekyll site (frozen list in
 * `src/data/legacy-redirects.json`). An endpoint rather than Astro's
 * `redirects` config so `/news.html` is emitted as a file, not a directory.
 */
import type { APIRoute } from "astro";
import redirects from "../data/legacy-redirects.json";

export const getStaticPaths = () =>
  Object.entries(redirects).map(([from, to]) => ({
    params: { legacy: from.slice(1).replace(/\/$/, "/index.html") },
    props: { to },
  }));

export const GET: APIRoute = ({ props, site }) => {
  const to = new URL(props.to, site).href;
  return new Response(
    `<!doctype html>
<meta charset="utf-8">
<title>Redirecting to ${to}</title>
<meta http-equiv="refresh" content="0;url=${props.to}">
<script>
  // Keep #fragments (the meta refresh drops them); read the target from the
  // meta tag so the CircleCI preview's path rewrite applies here too.
  var target = document.querySelector("meta[http-equiv=refresh]").content;
  location.replace(target.slice(target.indexOf("url=") + 4) + location.hash);
</script>
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<a href="${props.to}">Redirecting to ${to}</a>
`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
};
