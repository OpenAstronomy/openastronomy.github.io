/**
 * Builds render-ready season data for the universe-oa pages: fetches each
 * contributor's feed (`feeds.ts`) against the configured season windows
 * (`universe-config.ts`) and computes per-window blog status.
 */
import {
  DEFAULT_TIMEOUT_MS,
  fetchFeed,
  getBlogUrl,
  type ParsedFeed,
  type UniverseFeedPost,
} from "./feeds.ts";
import {
  loadUniverseConfig,
  resolveUniverseYear,
  type UniverseDateRange,
} from "./universe-config.ts";

export type UniverseWindowStatus = UniverseDateRange & {
  status: "complete" | "missing" | "optional" | "pending";
};

export type UniverseStudent = {
  name: string;
  project: string;
  feedUrl: string;
  blogUrl: string | null;
  feedStatus: "ok" | "empty" | "unavailable";
  feedError?: string;
  latestPostAt: Date | null;
  posts: UniverseFeedPost[];
  windows: UniverseWindowStatus[];
};

export type UniverseSeason = {
  seasonKey: string;
  year: number;
  generatedAt: Date;
  students: UniverseStudent[];
  dateRanges: UniverseDateRange[];
  availableYears: number[];
  totals: {
    complete: number;
    missing: number;
    optional: number;
    pending: number;
    feedsOk: number;
    feedsUnavailable: number;
  };
};

type BuildUniverseSeasonOptions = {
  year?: number;
  now?: Date;
  fetcher?: typeof fetch;
  timeoutMs?: number;
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

export const buildUniverseSeason = async ({
  year,
  now = new Date(),
  fetcher = fetch,
  timeoutMs = DEFAULT_TIMEOUT_MS,
}: BuildUniverseSeasonOptions = {}): Promise<UniverseSeason> => {
  const { seasons, availableYears } = loadUniverseConfig();
  const resolvedYear = resolveUniverseYear(availableYears, now, year);
  const seasonKey = `gsoc${resolvedYear}`;
  const season = seasons[resolvedYear];
  const ranges = season?.dateRanges ?? [];

  const students = await Promise.all(
    (season?.contributors ?? []).map(async (contributor) => {
      const { name, feedUrl, project } = contributor;
      const feed: ParsedFeed = feedUrl
        ? await fetchFeed(feedUrl, fetcher, timeoutMs)
        : {
            status: "unavailable",
            posts: [],
            error: "Missing RSS feed URL",
          };

      return {
        name,
        project,
        feedUrl,
        blogUrl: feedUrl ? getBlogUrl(feedUrl, feed.posts) : null,
        feedStatus: feed.status,
        feedError: feed.error,
        latestPostAt: feed.posts[0]?.publishedAt ?? null,
        posts: feed.posts,
        windows: computeWindowStatuses(ranges, feed.posts, now),
      };
    }),
  );

  students.sort((left, right) =>
    left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
  );

  const totals: UniverseSeason["totals"] = {
    complete: 0,
    missing: 0,
    optional: 0,
    pending: 0,
    feedsOk: 0,
    feedsUnavailable: 0,
  };
  for (const student of students) {
    if (student.feedStatus === "ok") totals.feedsOk += 1;
    if (student.feedStatus === "unavailable") totals.feedsUnavailable += 1;
    for (const window of student.windows) totals[window.status] += 1;
  }

  return {
    seasonKey,
    year: resolvedYear,
    generatedAt: now,
    students,
    dateRanges: ranges,
    availableYears,
    totals,
  };
};
