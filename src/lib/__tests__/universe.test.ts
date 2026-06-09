import { describe, expect, it } from "vitest";
import type { UniverseFeedPost } from "../feeds.ts";
import type { UniverseDateRange } from "../universe-config.ts";
import { computeWindowStatuses } from "../universe.ts";

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
