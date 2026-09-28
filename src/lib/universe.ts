/**
 * Builds render-ready season data for the universe-oa pages: fetches each
 * contributor's feed (`feeds.ts`) against a season's windows (the `seasons`
 * content collection) and computes per-window blog status.
 */
import { fetchFeed, getBlogUrl, type UniverseFeedPost } from "./feeds.ts";
import type { CollectionEntry } from "astro:content";

export type Season = CollectionEntry<"seasons">["data"] & { year: number };

const FILE = "src/data/universe/seasons.yml";

/**
 * Seasons from the `seasons` collection, newest first. Fails the build on
 * what the schema cannot see: the file's keys and whether the current
 * season has posting periods.
 */
export const sortSeasons = (
  entries: { id: string; data: CollectionEntry<"seasons">["data"] }[],
): Season[] => {
  // The file() loader only logs YAML errors, so fail loudly here instead.
  if (!entries.length) {
    throw new Error(
      `No seasons loaded from ${FILE} (empty file, YAML syntax error or a repeated year).`,
    );
  }
  const bad = entries.find((entry) => !/^\d{4}$/.test(entry.id));
  if (bad) throw new Error(`${FILE}: key "${bad.id}" must be a 4-digit year.`);

  const seasons = entries
    .map((entry) => ({ year: Number(entry.id), ...entry.data }))
    .sort((a, b) => b.year - a.year);
  // Worded without "window": Astro adds a misleading browser-API hint to
  // any error that mentions it.
  if (!seasons[0].windows.length) {
    throw new Error(
      `${FILE}: the current season (${seasons[0].year}) has no posting periods.`,
    );
  }
  return seasons;
};

export type UniverseDateRange = {
  start: Date;
  end: Date;
  optional?: boolean;
};

export type UniverseWindowStatus = UniverseDateRange & {
  // "unknown": the feed could not be fetched, so there is nothing to judge.
  status: "complete" | "missing" | "optional" | "pending" | "unknown";
};

export type UniverseStudent = {
  name: string;
  project: string;
  blogUrl: string | null;
  feedStatus: "ok" | "empty" | "unavailable";
  feedError?: string;
  posts: UniverseFeedPost[];
  windows: UniverseWindowStatus[];
};

export const computeWindowStatuses = (
  ranges: UniverseDateRange[],
  posts: UniverseFeedPost[],
  now = new Date(),
): UniverseWindowStatus[] =>
  ranges.map((range) => {
    const hasPost = posts.some(
      (post) =>
        post.publishedAt.getTime() > range.start.getTime() &&
        post.publishedAt.getTime() <= range.end.getTime(),
    );

    let status: UniverseWindowStatus["status"] = "missing";
    if (hasPost) status = "complete";
    else if (range.optional) status = "optional";
    else if (now.getTime() <= range.end.getTime()) status = "pending";

    return { ...range, status };
  });

/** Window statuses for one contributor; all "unknown" if the feed failed. */
export const contributorWindows = (
  ranges: UniverseDateRange[],
  feed: { status: string; posts: UniverseFeedPost[] },
  now = new Date(),
): UniverseWindowStatus[] =>
  feed.status === "unavailable"
    ? ranges.map((range) => ({ ...range, status: "unknown" }))
    : computeWindowStatuses(ranges, feed.posts, now);

export const buildUniverseSeason = async (season: Season) => {
  const now = new Date();
  const students: UniverseStudent[] = await Promise.all(
    season.contributors.map(async ({ name, feed: feedUrl, project }) => {
      const feed = await fetchFeed(feedUrl);
      return {
        name,
        project,
        blogUrl: getBlogUrl(feedUrl, feed.posts),
        feedStatus: feed.status,
        feedError: feed.error,
        posts: feed.posts,
        windows: contributorWindows(season.windows, feed, now),
      };
    }),
  );

  students.sort((left, right) =>
    left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
  );

  return { year: season.year, generatedAt: now, students };
};
