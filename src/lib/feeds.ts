/**
 * RSS/Atom feed fetching and parsing for the universe-oa pages.
 *
 * Everything here is independent of the season config; see `universe.ts`
 * for the season builder.
 */
import { XMLParser } from "fast-xml-parser";
import {
  asArray,
  asRecord,
  isHttpUrl,
  parseDateValue,
  stripHtml,
  textValue,
} from "./parse-utils.ts";

export type UniverseFeedPost = {
  title: string;
  url: string;
  publishedAt: Date;
};

export type ParsedFeed = {
  status: "ok" | "empty" | "unavailable";
  posts: UniverseFeedPost[];
  error?: string;
};

const TIMEOUT_MS = 6000;
const FEED_ACCEPT_HEADER = "application/rss+xml, application/xml, text/xml";

const xmlParser = new XMLParser({
  attributeNamePrefix: "@",
  ignoreAttributes: false,
  processEntities: true,
  // Decode HTML entities such as &#8217; that WordPress puts in titles.
  htmlEntities: true,
  textNodeName: "#text",
  trimValues: true,
});

export const formatFeedHttpError = (response: Response) => {
  const cloudflareChallenge =
    response.headers.get("cf-mitigated")?.toLowerCase() === "challenge";
  return `HTTP ${response.status}${cloudflareChallenge ? " (Cloudflare challenge)" : ""}`;
};

const GSOC_PATTERN =
  /\b(?:gsoc\d*|google\s+summer\s+of\s+code|openastronomy)\b/i;

const isRelevantMediumItem = (item: Record<string, unknown>) =>
  [
    ...asArray(item.category).map(textValue),
    textValue(item.title),
    itemSummary(item),
    stripHtml(textValue(item["content:encoded"] ?? item.content)),
  ].some((text) => GSOC_PATTERN.test(text ?? ""));

/** RSS <link> text or Atom <link href> (never rel="self" and friends). */
const pickLink = (value: unknown): string => {
  for (const entry of asArray(value)) {
    const record = asRecord(entry);
    if (!record) {
      const text = textValue(entry);
      if (text) return text;
      continue;
    }
    const href = textValue(record["@href"]);
    const rel = textValue(record["@rel"]);
    if (href && (!rel || rel === "alternate")) return href;
    if (!href && textValue(record["#text"])) return textValue(record["#text"]);
  }
  return "";
};

/** RSS 2.0 <guid>, which is a permalink unless isPermaLink="false". */
const permalinkGuid = (value: unknown): string =>
  textValue(asRecord(value)?.["@isPermaLink"]) === "false"
    ? ""
    : textValue(value);

/**
 * The post URL: the item's link (resolved against the feed URL when
 * relative), else a permalink <guid> that is already a full http(s) URL.
 */
const itemUrl = (item: Record<string, unknown>, feedUrl: string): string => {
  const link = pickLink(item.link) || pickLink(item.id);
  if (link) {
    try {
      return new URL(link, feedUrl || undefined).href;
    } catch {
      return "";
    }
  }
  const guid = permalinkGuid(item.guid);
  return isHttpUrl(guid) ? guid : "";
};

const itemDate = (item: Record<string, unknown>) => {
  for (const key of ["published", "updated", "pubDate"]) {
    const date = parseDateValue(item[key]);
    if (date) return date;
  }
  return null;
};

const itemSummary = (item: Record<string, unknown>) => {
  for (const key of ["summary", "description", "content", "content:encoded"]) {
    const summary = stripHtml(textValue(item[key]));
    if (summary) return summary.slice(0, 240);
  }
  return undefined;
};

/**
 * Items of an RSS 2.0 channel or an Atom feed. Throws for anything else (an
 * HTML error page, a parked domain) so the feed counts as unavailable.
 */
const feedItemsFromXml = (xml: string): Record<string, unknown>[] => {
  const parsed = asRecord(xmlParser.parse(xml));
  if (!parsed?.rss && !parsed?.feed) throw new Error("Not an RSS or Atom feed");
  const items =
    asRecord(asRecord(parsed?.rss)?.channel)?.item ??
    asRecord(parsed?.feed)?.entry;
  return asArray(items).flatMap((item) => {
    const record = asRecord(item);
    return record ? [record] : [];
  });
};

export const parseFeedXml = (xml: string, feedUrl = ""): UniverseFeedPost[] => {
  const isMediumFeed = feedUrl.toLowerCase().includes("medium");

  return feedItemsFromXml(xml)
    .flatMap((item) => {
      if (isMediumFeed && !isRelevantMediumItem(item)) {
        return [];
      }

      const publishedAt = itemDate(item);
      const url = itemUrl(item, feedUrl);
      if (!publishedAt || !url || !isHttpUrl(url)) return [];

      const title =
        textValue(item.title) ||
        itemSummary(item)?.slice(0, 60) ||
        "Untitled post";

      return [{ title, url, publishedAt }];
    })
    .sort(
      (left, right) => right.publishedAt.getTime() - left.publishedAt.getTime(),
    );
};

export const fetchFeed = async (feedUrl: string): Promise<ParsedFeed> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(feedUrl, {
      headers: { Accept: FEED_ACCEPT_HEADER },
      signal: controller.signal,
    });

    if (!response.ok) {
      return {
        status: "unavailable",
        posts: [],
        error: formatFeedHttpError(response),
      };
    }

    const posts = parseFeedXml(await response.text(), feedUrl);
    return {
      status: posts.length > 0 ? "ok" : "empty",
      posts,
    };
  } catch (error) {
    return {
      status: "unavailable",
      posts: [],
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
};

export const getBlogUrl = (
  feedUrl: string,
  posts: UniverseFeedPost[],
): string | null => {
  const sourceUrl = posts[0]?.url || feedUrl;
  if (!isHttpUrl(sourceUrl)) return null;
  try {
    const url = new URL(sourceUrl);
    const parts = url.pathname.split("/").filter(Boolean);
    const first = parts[0] ?? "";

    if (url.hostname.includes("medium")) {
      const handle = parts.find((part) => part.startsWith("@"));
      if (handle) return `${url.origin}/${handle}`;
    }
    if (url.hostname === "dev.to") {
      const feedIndex = parts.findIndex(
        (part) => part.toLowerCase() === "feed",
      );
      const username = feedIndex >= 0 ? parts[feedIndex + 1] : first;
      if (username) return `${url.origin}/${username}`;
    }

    const blogIndex = parts.findIndex((part) => part.toLowerCase() === "blog");
    if (blogIndex >= 0) {
      return `${url.origin}/${parts.slice(0, blogIndex + 1).join("/")}/`;
    }

    return url.origin;
  } catch {
    return null;
  }
};
