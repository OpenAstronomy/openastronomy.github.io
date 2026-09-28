/**
 * Builds render-ready season data for the universe-oa pages: fetches each
 * contributor's feed (`feeds.ts`) against a season's windows (the `seasons`
 * content collection) and computes per-window blog status.
 */
import { fetchFeed, getBlogUrl, type UniverseFeedPost } from "./feeds.ts";

export type UniverseDateRange = {
  start: Date;
  end: Date;
  optional?: boolean;
};

/** One season from `src/data/universe/seasons.yml`. */
export type UniverseSeasonConfig = {
  year: number;
  windows: UniverseDateRange[];
  contributors: { name: string; project: string; feed: string }[];
};

export type UniverseWindowStatus = UniverseDateRange & {
  status: "complete" | "missing" | "optional" | "pending";
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

export const buildUniverseSeason = async (season: UniverseSeasonConfig) => {
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
        windows: computeWindowStatuses(season.windows, feed.posts, now),
      };
    }),
  );

  students.sort((left, right) =>
    left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
  );

  return { year: season.year, generatedAt: now, students };
};
