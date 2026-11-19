import { describe, expect, it } from "vitest";
import { formatDate } from "../dates.ts";

describe("formatDate", () => {
  it("formats a date as short month, day and year", () => {
    expect(formatDate(new Date("2026-06-01"))).toBe("Jun 1, 2026");
  });

  it("uses the UTC day, whatever the local time zone", () => {
    expect(formatDate(new Date("2026-06-01T23:59:59Z"))).toBe("Jun 1, 2026");
    expect(formatDate(new Date("2026-06-02T00:00:00Z"))).toBe("Jun 2, 2026");
  });
});
