/** RSS feed of news posts, kept at the old Jekyll URL `/feed.xml`. */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import site from "../data/site.json";
import redirects from "../data/legacy-redirects.json";

// Posts from the Jekyll site keep their old .html URL as the GUID, so feed
// readers do not show them as new again.
const legacyUrlFor = (url: string) =>
  Object.entries(redirects).find(
    ([from, to]) => to === url && from.endsWith(".html"),
  )?.[0];

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const posts = (await getCollection("posts"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 10);
  const items = posts.map((post) => {
    const url = `/news/${post.id}/`;
    const link = new URL(url, siteUrl).href;
    const legacy = legacyUrlFor(url);
    const guid = legacy
      ? `<guid isPermaLink="false">${new URL(legacy, siteUrl).href}</guid>`
      : `<guid isPermaLink="true">${link}</guid>`;
    return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <description>${escapeXml(post.rendered?.html ?? "")}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <link>${link}</link>
      ${guid}
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
