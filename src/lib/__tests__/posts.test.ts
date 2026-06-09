import { describe, it, expect } from "vitest";
import { getPostSlug, getPostDateParts, getPostUrl } from "../posts.ts";

const makeEntry = (id: string, data: { date?: string | Date } = {}) =>
  ({ id, data }) as { id: string; data: { date: string | Date } };

describe("getPostSlug", () => {
  it("strips the YYYY-MM-DD prefix from a dated filename", () => {
    expect(getPostSlug(makeEntry("2024-03-15-my-post"))).toBe("my-post");
  });

  it("handles multi-word slugs separated by hyphens", () => {
    expect(getPostSlug(makeEntry("2024-03-15-hello-world-post"))).toBe(
      "hello-world-post",
    );
  });

  it("returns the base filename unchanged when there is no date prefix", () => {
    expect(getPostSlug(makeEntry("about-us"))).toBe("about-us");
  });

  it("normalises underscores to hyphens", () => {
    expect(getPostSlug(makeEntry("2024-01-01-some_post"))).toBe("some-post");
  });

  it("lowercases the result", () => {
    expect(getPostSlug(makeEntry("2024-01-01-MyPost"))).toBe("mypost");
  });

  it("uses the last path segment when id contains directories", () => {
    expect(getPostSlug(makeEntry("posts/2024-03-15-deep-post"))).toBe(
      "deep-post",
    );
  });
});

describe("getPostDateParts", () => {
  it("returns UTC year/month/day from a Date object", () => {
    const entry = makeEntry("foo", {
      date: new Date("2024-03-05T00:00:00Z"),
    });
    expect(getPostDateParts(entry)).toMatchObject({
      year: "2024",
      month: "03",
      day: "05",
    });
  });

  it("pads single-digit months and days with leading zeros", () => {
    const entry = makeEntry("foo", {
      date: new Date("2024-01-07T00:00:00Z"),
    });
    const { month, day } = getPostDateParts(entry);
    expect(month).toBe("01");
    expect(day).toBe("07");
  });

  it("accepts a date string", () => {
    const entry = makeEntry("foo", { date: "2023-11-20" });
    expect(getPostDateParts(entry).year).toBe("2023");
  });
});

describe("getPostUrl", () => {
  it("builds a /year/month/day/slug/ URL", () => {
    const entry = makeEntry("2024-03-15-my-post", {
      date: new Date("2024-03-15T00:00:00Z"),
    });
    expect(getPostUrl(entry)).toBe("/2024/03/15/my-post/");
  });
});
