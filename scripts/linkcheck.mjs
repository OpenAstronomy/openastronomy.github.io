import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_ROOT = "html";

const HREF_RE = /\s(?:href|src)=['"]([^'"]+)['"]/gi;
const SRCSET_RE = /\ssrcset=['"]([^'"]+)['"]/gi;
const ID_RE = /\s(?:id|name)=['"]([^'"]+)['"]/gi;

export const parseMode = (value = "internal") => {
  if (value === "internal") return value;
  throw new Error(
    "External link checking has been removed. Only internal links and anchors are checked.",
  );
};

export const collectHtmlFiles = (dir, out = []) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(full, out);
    else if (entry.name.toLowerCase().endsWith(".html")) out.push(full);
  }
  return out;
};

const matchAll = (re, html, sink) => {
  let match;
  re.lastIndex = 0;
  while ((match = re.exec(html)) !== null) if (match[1]) sink(match[1].trim());
};

export const extractLinksAndAnchors = (html) => {
  const links = [];
  const anchors = new Set();

  matchAll(HREF_RE, html, (value) => links.push(value));
  matchAll(SRCSET_RE, html, (raw) => {
    for (const part of raw.split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url) links.push(url);
    }
  });
  matchAll(ID_RE, html, (value) => anchors.add(value));

  return { links, anchors };
};

export const parseFile = (file, cache = new Map()) => {
  if (cache.has(file)) return cache.get(file);
  const data = extractLinksAndAnchors(readFileSync(file, "utf8"));
  cache.set(file, data);
  return data;
};

export const isSkippable = (link) => {
  if (!link || link === "#") return true;
  const lower = link.toLowerCase();
  if (lower.startsWith("javascript:") || lower.startsWith("data:")) {
    return true;
  }
  return /^(mailto:|tel:|irc:|ftp:|https?:\/\/)/i.test(link);
};

export const resolveInternal = (link, current, rootPath) => {
  const [pathPartRaw, hashPart = ""] = link.split("#");
  const pathPart = pathPartRaw.split("?")[0];
  let anchor;
  try {
    anchor = decodeURIComponent(hashPart);
  } catch {
    anchor = hashPart;
  }

  if (!pathPart) return { file: current, anchor };
  if (pathPart.startsWith("//")) return null;

  let rel;
  if (pathPart.startsWith("/")) {
    rel = pathPart.slice(1);
  } else {
    const currentRel = path
      .relative(rootPath, current)
      .split(path.sep)
      .join("/");
    rel = path.posix.normalize(
      path.posix.join(path.posix.dirname(currentRel), pathPart),
    );
  }

  if (!rel) {
    return { file: path.join(rootPath, "index.html"), anchor, urlPath: "/" };
  }

  const direct = path.join(rootPath, rel);
  if (pathPart.endsWith("/")) {
    return {
      file: path.join(direct, "index.html"),
      anchor,
      urlPath: `/${rel}`,
    };
  }
  if (path.extname(rel) || (existsSync(direct) && statSync(direct).isFile())) {
    return { file: direct, anchor, urlPath: `/${rel}` };
  }
  return {
    file: path.join(direct, "index.html"),
    anchor,
    urlPath: `/${rel}/`,
  };
};

export const showSource = (file, rootPath, rootLabel) => {
  const rel = path.relative(rootPath, file).split(path.sep).join("/");
  if (rel === "index.html") return `${rootLabel}/`;
  if (rel.endsWith("/index.html")) {
    return `${rootLabel}/${rel.slice(0, -"index.html".length)}`;
  }
  return `${rootLabel}/${rel}`;
};

export const showTarget = ({ file, anchor, urlPath }, rootPath, rootLabel) => {
  const base = urlPath
    ? `${rootLabel}${urlPath}`
    : `${rootLabel}/${path.relative(rootPath, file).split(path.sep).join("/")}`;
  return anchor ? `${base}#${anchor}` : base;
};

const reportFailures = (failures, scanned, startTime) => {
  const grouped = new Map();
  for (const failure of failures) {
    if (!grouped.has(failure.source)) grouped.set(failure.source, []);
    grouped.get(failure.source).push(failure);
  }
  for (const [source, items] of grouped) {
    console.error(source);
    for (const failure of items) {
      console.error(
        `  [${failure.kind === "anchor" ? "ANCHOR" : "404"}] ${failure.target}`,
      );
    }
  }
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(3);
  console.error(
    `ERROR: Detected ${failures.length} broken links. Scanned ${scanned} links in ${elapsed} seconds.`,
  );
};

const reportSuccess = (scanned, startTime) => {
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(3);
  console.log(`OK: Scanned ${scanned} links in ${elapsed} seconds.`);
};

export const runInternalCheck = ({ rootPath, rootLabel }) => {
  const cache = new Map();
  const failures = [];
  let scanned = 0;

  for (const file of collectHtmlFiles(rootPath)) {
    const source = showSource(file, rootPath, rootLabel);
    for (const link of parseFile(file, cache).links) {
      if (isSkippable(link)) continue;
      const target = resolveInternal(link, file, rootPath);
      if (!target) continue;
      scanned++;
      if (!existsSync(target.file)) {
        failures.push({
          source,
          target: showTarget(target, rootPath, rootLabel),
          kind: "missing",
        });
      } else if (target.anchor && target.file.toLowerCase().endsWith(".html")) {
        const { anchors } = parseFile(target.file, cache);
        if (!anchors.has(target.anchor)) {
          failures.push({
            source,
            target: showTarget(target, rootPath, rootLabel),
            kind: "anchor",
          });
        }
      }
    }
  }

  return { failures, scanned };
};

export const main = async (argv = process.argv, env = process.env) => {
  const startTime = Date.now();
  try {
    parseMode(argv[2] ?? "internal");
    const rootInput = env.LINKCHECK_ROOT ?? DEFAULT_ROOT;
    const rootPath = path.resolve(rootInput);
    const rootLabel = rootInput.replace(/\\/g, "/");

    if (!existsSync(rootPath)) {
      throw new Error(
        `Build output "${rootLabel}" missing. Run "npm run build".`,
      );
    }

    console.log(`Scanning internal links in ${rootLabel}`);
    const result = runInternalCheck({ rootPath, rootLabel });

    if (result.failures.length) {
      reportFailures(result.failures, result.scanned, startTime);
      return 1;
    }
    reportSuccess(result.scanned, startTime);
    return 0;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
};

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  process.exitCode = await main();
}
