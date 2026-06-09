import { describe, it, expect } from "vitest";
import {
  normalizeArray,
  formatMemberLink,
  getProjectCardRows,
  getProjectDetailRows,
  parseProjectId,
  buildProjectMeta,
} from "../gsoc.ts";

describe("normalizeArray", () => {
  it("returns an array value as-is after trimming", () => {
    expect(normalizeArray(["python", "rust"])).toEqual(["python", "rust"]);
  });

  it("wraps a scalar string in an array", () => {
    expect(normalizeArray("python")).toEqual(["python"]);
  });

  it("returns an empty array for null/undefined/empty string", () => {
    expect(normalizeArray(null)).toEqual([]);
    expect(normalizeArray(undefined)).toEqual([]);
    expect(normalizeArray("")).toEqual([]);
  });

  it("filters out placeholder values (case-insensitive)", () => {
    expect(normalizeArray(["python", "none", "N/A", "null"])).toEqual([
      "python",
    ]);
  });

  it("trims whitespace and filters blank values", () => {
    expect(normalizeArray(["  python  ", " rust ", "   "])).toEqual([
      "python",
      "rust",
    ]);
  });

  it("coerces numbers to strings", () => {
    expect(normalizeArray(42)).toEqual(["42"]);
  });
});

const memberLookup = {
  sunpy: { name: "SunPy" },
  astropy: { name: "Astropy" },
};
const pathInfo = { year: "2026", suborg: "sunpy", fileSlug: "radiospectra" };

describe("formatMemberLink", () => {
  it("returns the member name and a slugified anchor href for a known key", () => {
    const result = formatMemberLink("sunpy", memberLookup, "/gsoc/2025/");
    expect(result.label).toBe("SunPy");
    expect(result.href).toBe("../../members/#sunpy");
  });

  it("matches member keys case-insensitively", () => {
    const result = formatMemberLink("SunPy", memberLookup, "/gsoc/2025/");
    expect(result.label).toBe("SunPy");
    expect(result.href).toContain("#sunpy");
  });

  it("slugifies multi-word member names for the href anchor", () => {
    const lookup = { aetheria: { name: "Astronomy Data Commons" } };
    const result = formatMemberLink("aetheria", lookup, "/");
    expect(result.href).toContain("#astronomy-data-commons");
  });

  it("returns the raw key with a null href for an unknown member", () => {
    const result = formatMemberLink("unknown-org", memberLookup, "/");
    expect(result.label).toBe("unknown-org");
    expect(result.href).toBeNull();
  });
});

describe("parseProjectId", () => {
  it("parses a 4-segment project id", () => {
    expect(parseProjectId("gsoc/2026/sunpy/radiospectra")).toEqual({
      year: "2026",
      suborg: "sunpy",
      fileSlug: "radiospectra",
    });
  });

  it("returns null for a season id", () => {
    expect(parseProjectId("gsoc/2025")).toBeNull();
  });

  it("returns null for a top-level gsoc page", () => {
    expect(parseProjectId("gsoc/background")).toBeNull();
  });

  it("returns null for a non-gsoc id", () => {
    expect(parseProjectId("about/team")).toBeNull();
  });
});

describe("buildProjectMeta", () => {
  it("uses the `name` field when set", () => {
    const meta = buildProjectMeta(
      { name: "Radio Spectra" },
      pathInfo,
      memberLookup,
      "/",
    );
    expect(meta.name).toBe("Radio Spectra");
    expect(meta.anchor).toBe("radio-spectra");
  });

  it("falls back to the file slug when `name` missing", () => {
    const meta = buildProjectMeta({}, pathInfo, memberLookup, "/");
    expect(meta.name).toBe("radiospectra");
  });

  it("builds a relative href to the standalone project page", () => {
    const meta = buildProjectMeta({}, pathInfo, memberLookup, "/gsoc/2026/");
    expect(meta.href).toBe("../../gsoc/2026/sunpy/radiospectra/");
  });

  it("normalises array fields and resolves collaborators", () => {
    const meta = buildProjectMeta(
      {
        mentors: ["alice"],
        initiatives: "GSOC",
        project_size: ["350 h (Large)"],
        tags: ["python", "none"],
        collaborating_projects: ["sunpy", "unknown"],
        issues: "https://github.com/x/y/issues/1",
      },
      pathInfo,
      memberLookup,
      "/",
    );
    expect(meta.mentors).toEqual(["alice"]);
    expect(meta.initiatives).toEqual(["GSOC"]);
    expect(meta.projectSize).toEqual(["350 h (Large)"]);
    expect(meta.tags).toEqual(["python"]);
    expect(meta.collaborators).toEqual([
      { label: "SunPy", href: "./members/#sunpy" },
      { label: "unknown", href: null },
    ]);
    expect(meta.issues).toEqual(["https://github.com/x/y/issues/1"]);
  });

  it("adds difficulty when present", () => {
    const meta = buildProjectMeta(
      { difficulty: "medium" },
      pathInfo,
      memberLookup,
      "/",
    );
    expect(meta.difficulty).toBe("medium");
  });
});

describe("getProjectCardRows", () => {
  it("returns only filled summary rows", () => {
    const meta = buildProjectMeta(
      {
        mentors: ["alice"],
        difficulty: "medium",
        tags: [],
      },
      pathInfo,
      memberLookup,
      "/",
    );
    expect(getProjectCardRows(meta)).toEqual([
      { label: "Mentors", values: ["alice"] },
      { label: "Difficulty", values: ["medium"] },
    ]);
  });
});

describe("getProjectDetailRows", () => {
  it("uses the shared detail field ordering", () => {
    const meta = buildProjectMeta(
      {
        difficulty: "high",
        initiatives: ["GSOC"],
        project_size: ["350 h"],
        tags: ["python"],
      },
      pathInfo,
      memberLookup,
      "/",
    );
    expect(getProjectDetailRows(meta)).toEqual([
      { label: "Difficulty", values: ["high"] },
      { label: "Initiatives", values: ["GSOC"] },
      { label: "Project size", values: ["350 h"] },
      { label: "Tags", values: ["python"] },
    ]);
  });
});
