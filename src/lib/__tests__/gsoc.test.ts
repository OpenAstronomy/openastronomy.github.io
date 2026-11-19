import { describe, it, expect } from "vitest";
import {
  formatMemberLink,
  getProjectCardRows,
  getProjectDetailRows,
  buildProjectMeta,
} from "../gsoc.ts";

type ProjectEntry = Parameters<typeof buildProjectMeta>[0];

// A `projects` collection entry with the required fields filled in.
const project = (data: Partial<ProjectEntry["data"]> = {}): ProjectEntry => ({
  id: "2026/sunpy/radiospectra",
  data: {
    name: "Radio Spectra",
    desc: "Improve radiospectra",
    difficulty: "medium",
    mentors: ["alice"],
    collaborating_projects: ["sunpy"],
    ...data,
  },
});

describe("formatMemberLink", () => {
  it("returns the member name and a slugified anchor href for a known key", () => {
    const result = formatMemberLink("sunpy");
    expect(result.label).toBe("SunPy");
    expect(result.href).toBe("/members/#sunpy");
  });

  it("slugifies multi-word member names for the href anchor", () => {
    const result = formatMemberLink("astronomy-commons");
    expect(result.href).toContain("#astronomy-data-commons");
  });

  it("returns the raw key with a null href for an unknown member", () => {
    const result = formatMemberLink("unknown-org");
    expect(result.label).toBe("unknown-org");
    expect(result.href).toBeNull();
  });
});

describe("buildProjectMeta", () => {
  it("takes the year and the page href from the entry id", () => {
    const meta = buildProjectMeta(project());
    expect(meta.year).toBe("2026");
    expect(meta.href).toBe("/gsoc/2026/sunpy/radiospectra/");
  });

  it("copies the required fields", () => {
    const meta = buildProjectMeta(project());
    expect(meta.name).toBe("Radio Spectra");
    expect(meta.desc).toBe("Improve radiospectra");
    expect(meta.difficulty).toBe("medium");
    expect(meta.mentors).toEqual(["alice"]);
  });

  it("copies list fields and resolves collaborators", () => {
    const meta = buildProjectMeta(
      project({
        initiatives: ["GSOC"],
        project_size: ["350 h (Large)"],
        tags: ["python"],
        collaborating_projects: ["sunpy", "unknown"],
        issues: ["https://github.com/x/y/issues/1"],
      }),
    );
    expect(meta.initiatives).toEqual(["GSOC"]);
    expect(meta.projectSize).toEqual(["350 h (Large)"]);
    expect(meta.tags).toEqual(["python"]);
    expect(meta.collaborators).toEqual([
      { label: "SunPy", href: "/members/#sunpy" },
      { label: "unknown", href: null },
    ]);
    expect(meta.issues).toEqual(["https://github.com/x/y/issues/1"]);
  });

  it("turns optional lists that are missing or left empty into []", () => {
    const meta = buildProjectMeta(project({ issues: null }));
    expect(meta.issues).toEqual([]);
    expect(meta.requirements).toEqual([]);
    expect(meta.projectSize).toEqual([]);
  });
});

describe("getProjectCardRows", () => {
  it("returns only filled summary rows", () => {
    const meta = buildProjectMeta(project({ tags: [] }));
    expect(getProjectCardRows(meta)).toEqual([
      { label: "Mentors", values: ["alice"] },
      { label: "Difficulty", values: ["medium"] },
    ]);
  });
});

describe("getProjectDetailRows", () => {
  it("uses the shared detail field ordering", () => {
    const meta = buildProjectMeta(
      project({
        difficulty: "high",
        initiatives: ["GSOC"],
        project_size: ["350 h"],
        tags: ["python"],
      }),
    );
    expect(getProjectDetailRows(meta)).toEqual([
      { label: "Difficulty", values: ["high"] },
      { label: "Initiatives", values: ["GSOC"] },
      { label: "Project size", values: ["350 h"] },
      { label: "Tags", values: ["python"] },
    ]);
  });
});
