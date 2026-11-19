/** RSS feed of news posts, kept at the old Jekyll URL `/feed.xml`. */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import site from "../data/site.json";

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

// Feed readers show a post outside this site, where a root-relative link or
// image path (`/gsoc/`) has nothing to resolve against.
const absoluteUrls = (html: string, base: URL | undefined) =>
  html.replace(
    /(href|src)="(\/[^"]*)"/g,
    (_match, attribute, path) => `${attribute}="${new URL(path, base).href}"`,
  );

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const posts = (await getCollection("posts"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 10);
  const items = posts.map((post) => {
    const link = new URL(`/news/${post.id}/`, siteUrl).href;
    return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <description>${escapeXml(absoluteUrls(post.rendered?.html ?? "", siteUrl))}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <description>${escapeXml(site.description)}</description>
    <link>${new URL("/", siteUrl).href}</link>
    <atom:link href="${new URL("/feed.xml", siteUrl).href}" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>
`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
};
