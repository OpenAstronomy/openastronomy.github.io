import { describe, expect, it } from "vitest";
import {
  loadUniverseConfig,
  resolveUniverseYear,
  validateUniverseConfig,
} from "../universe-config.ts";

const date = (value: string) => new Date(value);

describe("validateUniverseConfig", () => {
  const validConfig = {
    seasons: [
      {
        year: 2026,
        windows: [
          { start: "2026-05-01", end: "2026-05-25", optional: true },
          { start: "2026-05-25", end: "2026-06-08" },
        ],
        contributors: [
          {
            name: "student",
            project: "astropy",
            feed: "https://example.com/feed.xml",
          },
        ],
      },
    ],
  };

  it("accepts the configured seasons file", () => {
    expect(() => loadUniverseConfig()).not.toThrow();
  });

  it("rejects missing first optional window", () => {
    expect(() =>
      validateUniverseConfig({
        ...validConfig,
        seasons: [
          {
            ...validConfig.seasons[0],
            windows: [
              { start: "2026-05-01", end: "2026-05-25" },
              { start: "2026-05-25", end: "2026-06-08" },
            ],
          },
        ],
      }),
    ).toThrow("first window must set optional: true");
  });

  it("ignores archive season windows", () => {
    expect(() =>
      validateUniverseConfig({
        seasons: [
          validConfig.seasons[0],
          {
            year: 2025,
            windows: [{ start: "not-a-date", end: "2025-06-01" }],
            contributors: [
              {
                name: "archive-student",
                project: "astropy",
                feed: "https://example.com/archive.xml",
              },
            ],
          },
        ],
      }),
    ).not.toThrow();
  });

  it("rejects invalid contributor data", () => {
    expect(() =>
      validateUniverseConfig({
        ...validConfig,
        seasons: [
          {
            ...validConfig.seasons[0],
            contributors: [
              {
                name: "student",
                project: "astropyy",
                feed: "not-a-url",
              },
            ],
          },
        ],
      }),
    ).toThrow(/project "astropyy"|feed must be an HTTP\(S\) URL/);
  });
});

describe("resolveUniverseYear", () => {
  it("uses the requested year when configured", () => {
    expect(resolveUniverseYear([2026, 2025], date("2026-06-01"), 2025)).toBe(
      2025,
    );
  });

  it("defaults to the latest configured year not after the current year", () => {
    expect(resolveUniverseYear([2027, 2026, 2025], date("2026-06-01"))).toBe(
      2026,
    );
  });
});
