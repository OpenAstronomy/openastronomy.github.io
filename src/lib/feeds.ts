/**
 * RSS/Atom/RDF feed fetching and parsing for the universe-oa pages.
 *
 * Everything here is independent of the season config; see
 * `universe-config.ts` for that and `universe.ts` for the season builder.
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
  summary?: string;
};

export type ParsedFeed = {
  status: "ok" | "empty" | "unavailable";
  posts: UniverseFeedPost[];
  error?: string;
};

export const DEFAULT_TIMEOUT_MS = 6000;
const FEED_ACCEPT_HEADER = "application/rss+xml, application/xml, text/xml";

const xmlParser = new XMLParser({
  attributeNamePrefix: "@",
  ignoreAttributes: false,
  processEntities: true,
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

const pickLink = (value: unknown): string => {
  if (typeof value === "string") return value.trim();

  for (const entry of asArray(value)) {
    const record = asRecord(entry);
    if (!record) {
      const text = textValue(entry);
      if (text) return text;
      continue;
    }

    const href = textValue(record["@href"] ?? record["href"]);
    const rel = textValue(record["@rel"] ?? record["rel"]);
    if (href && (!rel || rel === "alternate")) return href;
  }

  return textValue(value);
};

const itemDate = (item: Record<string, unknown>) => {
  for (const key of [
    "published",
    "updated",
    "pubDate",
    "dc:date",
    "date",
    "created",
  ]) {
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

const feedItemsFromXml = (xml: string): Record<string, unknown>[] => {
  const parsed = asRecord(xmlParser.parse(xml));
  if (!parsed) return [];

  const rss = asRecord(parsed.rss);
  const channel = asRecord(rss?.channel);
  if (channel?.item) {
    return asArray(channel.item).flatMap((item) => {
      const record = asRecord(item);
      return record ? [record] : [];
    });
  }

  const atomFeed = asRecord(parsed.feed);
  if (atomFeed?.entry) {
    return asArray(atomFeed.entry).flatMap((item) => {
      const record = asRecord(item);
      return record ? [record] : [];
    });
  }

  const rdf = asRecord(parsed["rdf:RDF"] ?? parsed.RDF);
  if (rdf?.item) {
    return asArray(rdf.item).flatMap((item) => {
      const record = asRecord(item);
      return record ? [record] : [];
    });
  }

  return [];
};

export const parseFeedXml = (xml: string, feedUrl = ""): UniverseFeedPost[] => {
  const isMediumFeed = feedUrl.toLowerCase().includes("medium");

  return feedItemsFromXml(xml)
    .flatMap((item) => {
      if (isMediumFeed && !isRelevantMediumItem(item)) {
        return [];
      }

      const publishedAt = itemDate(item);
      const url = pickLink(item.link ?? item.id);
      if (!publishedAt || !url || !isHttpUrl(url)) return [];

      const title =
        textValue(item.title) ||
        itemSummary(item)?.slice(0, 60) ||
        "Untitled post";

      return [
        {
          title,
          url,
          publishedAt,
          summary: itemSummary(item),
        },
      ];
    })
    .sort(
      (left, right) => right.publishedAt.getTime() - left.publishedAt.getTime(),
    );
};

export const fetchFeed = async (
  feedUrl: string,
  fetcher: typeof fetch,
  timeoutMs: number,
): Promise<ParsedFeed> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetcher(feedUrl, {
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
