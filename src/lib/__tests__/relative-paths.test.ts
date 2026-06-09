import { describe, it, expect } from "vitest";
import {
  getRelativeRoot,
  fromSiteRoot,
  localizeHref,
} from "../relative-paths.ts";

describe("getRelativeRoot", () => {
  it("returns ./ for the root path", () => {
    expect(getRelativeRoot("/")).toBe("./");
  });

  it("returns ../ for a one-segment path", () => {
    expect(getRelativeRoot("/members/")).toBe("../");
  });

  it("returns ../../ for a two-segment path", () => {
    expect(getRelativeRoot("/gsoc/2025/")).toBe("../../");
  });

  it("returns ../../../ for a three-segment path", () => {
    expect(getRelativeRoot("/a/b/c/")).toBe("../../../");
  });

  it("defaults to ./ when pathname is omitted", () => {
    expect(getRelativeRoot()).toBe("./");
  });

  it("ignores query strings when counting depth", () => {
    expect(getRelativeRoot("/members/?q=foo")).toBe("../");
  });

  it("ignores hash fragments when counting depth", () => {
    expect(getRelativeRoot("/members/#section")).toBe("../");
  });
});

describe("fromSiteRoot", () => {
  it("builds a relative path from the root", () => {
    expect(fromSiteRoot("/members/", "/css/style.css")).toBe(
      "../css/style.css",
    );
  });

  it("returns the relative root alone when targetPath is empty", () => {
    expect(fromSiteRoot("/members/", "")).toBe("../");
  });

  it("strips leading slashes from the target before appending", () => {
    expect(fromSiteRoot("/", "/members/")).toBe("./members/");
  });

  it("works from a deeply nested page", () => {
    expect(fromSiteRoot("/gsoc/2025/sunpy/", "/members/")).toBe(
      "../../../members/",
    );
  });
});

describe("localizeHref", () => {
  it("returns fragment-only hrefs unchanged", () => {
    expect(localizeHref("/page/", "#section")).toBe("#section");
  });

  it("returns external https:// URLs unchanged", () => {
    expect(localizeHref("/page/", "https://example.com")).toBe(
      "https://example.com",
    );
  });

  it("returns protocol-relative //example.com URLs unchanged", () => {
    expect(localizeHref("/page/", "//example.com")).toBe("//example.com");
  });

  it("returns mailto: links unchanged", () => {
    expect(localizeHref("/page/", "mailto:hi@example.com")).toBe(
      "mailto:hi@example.com",
    );
  });

  it("converts absolute-path hrefs to relative", () => {
    expect(localizeHref("/gsoc/2025/", "/members/")).toBe("../../members/");
  });

  it("returns relative hrefs unchanged", () => {
    expect(localizeHref("/page/", "other-page/")).toBe("other-page/");
  });

  it("returns an empty string for an empty href", () => {
    expect(localizeHref("/page/", "")).toBe("");
  });
});
