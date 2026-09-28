/**
 * Builds render-ready season data for the universe-oa pages: fetches each
 * contributor's feed (`feeds.ts`) against a season's windows (the `seasons`
 * content collection) and computes per-window blog status.
 */
import { fetchFeed, getBlogUrl, type UniverseFeedPost } from "./feeds.ts";
import type { Season } from "./seasons.ts";

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
