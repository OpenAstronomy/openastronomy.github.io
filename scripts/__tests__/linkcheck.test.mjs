import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  extractLinksAndAnchors,
  parseMode,
  resolveInternal,
  runInternalCheck,
} from "../linkcheck.mjs";

let tempDirs = [];

const makeRoot = () => {
  const root = mkdtempSync(path.join(tmpdir(), "oa-linkcheck-"));
  tempDirs.push(root);
  return root;
};

const writeHtml = (root, relativePath, html) => {
  const file = path.join(root, relativePath);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
  return file;
};

afterEach(() => {
  for (const dir of tempDirs) rmSync(dir, { recursive: true, force: true });
  tempDirs = [];
});

describe("parseMode", () => {
  it("accepts the internal mode", () => {
    expect(parseMode("internal")).toBe("internal");
  });

  it("rejects external mode", () => {
    expect(() => parseMode("external")).toThrow(
      "External link checking has been removed",
    );
  });
});

describe("extractLinksAndAnchors", () => {
  it("finds href, src, srcset, id, and name values", () => {
    const html = `
      <a href="./page/">Page</a>
      <img src="./image.png" srcset="./small.png 1x, ./large.png 2x">
      <h2 id="target">Target</h2>
      <a name="legacy"></a>
    `;
    const result = extractLinksAndAnchors(html);
    expect(result.links).toEqual([
      "./page/",
      "./image.png",
      "./small.png",
      "./large.png",
    ]);
    expect([...result.anchors]).toEqual(["target", "legacy"]);
  });
});

describe("resolveInternal", () => {
  it("resolves relative directory links to index.html", () => {
    const root = makeRoot();
    const current = writeHtml(root, "a/index.html", "");
    const target = resolveInternal("../b/#target", current, root);

    expect(target.file).toBe(path.join(root, "b", "index.html"));
    expect(target.anchor).toBe("target");
    expect(target.urlPath).toBe("/b/");
  });
});

describe("runInternalCheck", () => {
  it("passes existing internal links and anchors", () => {
    const root = makeRoot();
    writeHtml(root, "index.html", '<a href="./page/#target">Page</a>');
    writeHtml(root, "page/index.html", '<h2 id="target">Target</h2>');

    expect(runInternalCheck({ rootPath: root, rootLabel: "html" })).toEqual({
      failures: [],
      scanned: 1,
    });
  });

  it("reports missing anchors", () => {
    const root = makeRoot();
    writeHtml(root, "index.html", '<a href="./page/#missing">Page</a>');
    writeHtml(root, "page/index.html", '<h2 id="target">Target</h2>');

    const result = runInternalCheck({ rootPath: root, rootLabel: "html" });
    expect(result.failures).toEqual([
      {
        source: "html/",
        target: "html/page/#missing",
        kind: "anchor",
      },
    ]);
  });
});
