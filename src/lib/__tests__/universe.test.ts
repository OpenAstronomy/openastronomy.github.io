import { describe, expect, it } from "vitest";
import type { UniverseFeedPost } from "../feeds.ts";
import type { UniverseDateRange } from "../universe.ts";
import {
  computeWindowStatuses,
  contributorWindows,
  sortSeasons,
} from "../universe.ts";

const date = (value: string) => new Date(value);

describe("computeWindowStatuses", () => {
  const ranges: UniverseDateRange[] = [
    {
      start: date("2026-05-01T00:00:00Z"),
      end: date("2026-05-15T00:00:00Z"),
      optional: true,
    },
    { start: date("2026-05-15T00:00:00Z"), end: date("2026-06-01T00:00:00Z") },
    { start: date("2026-06-01T00:00:00Z"), end: date("2026-06-15T00:00:00Z") },
  ];
  const posts: UniverseFeedPost[] = [
    {
      title: "Post",
      url: "https://example.com/post",
      publishedAt: date("2026-05-10T00:00:00Z"),
    },
  ];

  it("marks complete, missing, and pending windows", () => {
    const statuses = computeWindowStatuses(
      ranges,
      posts,
      date("2026-06-08T00:00:00Z"),
    );

    expect(statuses.map((window) => window.status)).toEqual([
      "complete",
      "missing",
      "pending",
    ]);
  });

  it("marks a missing optional window as optional", () => {
    const statuses = computeWindowStatuses(
      ranges,
      [],
      date("2026-06-08T00:00:00Z"),
    );

    expect(statuses.map((window) => window.status)).toEqual([
      "optional",
      "missing",
      "pending",
    ]);
  });
});

describe("contributorWindows", () => {
  const ranges: UniverseDateRange[] = [
    { start: date("2026-05-01T00:00:00Z"), end: date("2026-05-15T00:00:00Z") },
  ];

  it("marks every window unknown when the feed could not be fetched", () => {
    expect(
      contributorWindows(ranges, { status: "unavailable", posts: [] }).map(
        (window) => window.status,
      ),
    ).toEqual(["unknown"]);
  });

  it("computes statuses from posts when the feed was fetched", () => {
    expect(
      contributorWindows(
        ranges,
        { status: "empty", posts: [] },
        date("2026-06-01T00:00:00Z"),
      ).map((window) => window.status),
    ).toEqual(["missing"]);
  });
});

describe("sortSeasons", () => {
  const windows = [
    {
      start: date("2026-05-01T00:00:00Z"),
      end: date("2026-05-15T00:00:00Z"),
      optional: true,
    },
  ];
  const season = (id: string, withWindows = true) => ({
    id,
    data: { windows: withWindows ? windows : [], contributors: [] },
  });

  it("returns seasons newest first with their year", () => {
    expect(
      sortSeasons([season("2025"), season("2026")]).map((s) => s.year),
    ).toEqual([2026, 2025]);
  });

  it("fails when no seasons were loaded", () => {
    expect(() => sortSeasons([])).toThrow("No seasons loaded");
  });

  it("fails on a key that is not a 4-digit year", () => {
    expect(() => sortSeasons([season("gsoc2026")])).toThrow(
      'key "gsoc2026" must be a 4-digit year',
    );
  });

  it("fails when the current season has no posting periods", () => {
    expect(() => sortSeasons([season("2025"), season("2026", false)])).toThrow(
      "current season (2026) has no posting periods",
    );
  });
});
