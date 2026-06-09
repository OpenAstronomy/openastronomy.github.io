# Contributing to openastronomy.github.io

This document captures the conventions used in this codebase. When adding or reviewing code, use these rules as the benchmark.

---

## Code style

### Naming

| Context                                       | Convention                                                  | Example                                 |
| --------------------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| JavaScript/TypeScript variables and functions | camelCase                                                   | `getPostSlug`, `seasonKey`              |
| TypeScript types and interfaces               | PascalCase                                                  | `ProjectMeta`, `MemberLink`             |
| Astro component files                         | PascalCase                                                  | `MemberCard.astro`, `ProjectCard.astro` |
| CSS class names                               | kebab-case                                                  | `gsoc-project-card`, `member-logo`      |
| Constants that are never reassigned           | UPPER_SNAKE_CASE only when a regex or truly global constant | `PROTOCOL_RE`                           |

### Function length

- Aim for **≤ 40 lines** per function.
- If a function grows beyond that, look for a named helper to extract.
- Long functions in `scripts/` are acceptable when they represent a single sequential workflow (e.g., the link-check crawl loop).

---

## Documentation

### `src/lib/` (`.ts` files)

Every **exported** symbol must have a JSDoc block describing what it does. Types live in the TypeScript signatures, so `@param`/`@returns` tags are not needed:

```ts
/**
 * Derives the URL slug for a post from its content collection entry.
 * Filenames follow `YYYY-MM-DD-my-title.md`; the date prefix is stripped.
 */
export const getPostSlug = (entry: PostEntry): string => { … };
```

Internal helpers (not exported) should have at least a brief inline comment if their purpose is not immediately obvious from the name.

### `src/components/` and `src/layouts/` (`.astro` files)

Prefer self-explanatory component names, prop names, and helper functions over file-level comments.
Add a short comment only when the component has a non-obvious contract, security assumption, or cross-component relationship.

### `scripts/` (`.mjs` files)

Scripts should expose testable helpers where practical.
Use comments for non-obvious parsing or process behavior, not for restating function names.

### Tests (`src/lib/__tests__/`)

No JSDoc is required in test files — test descriptions serve as documentation.

Add a brief inline comment when test setup is non-obvious (e.g. a mock helper or a tricky fixture).

---

## TypeScript vs JavaScript

- `src/lib/` is **TypeScript** (`.ts`); new helpers go there as `.ts` files.
- Astro component frontmatter uses TypeScript types inline where needed; avoid importing from Astro runtime packages inside `src/lib/` files (keeps them unit-testable without Astro's runtime).

---

## Tests

- Use **Vitest** (`npm test`).
- Test files live in `src/lib/__tests__/` and mirror the lib filename (e.g. `gsoc.ts` → `gsoc.test.ts`).
- One `describe` block per exported function.
- Each `describe` should cover:
  - The happy path
  - At least one edge case or boundary value
  - Null / undefined inputs where the function accepts optional parameters
- Astro components are not unit-tested; test the logic extracted into `src/lib/` instead.

---

## Astro components

- Keep frontmatter focused on **data fetching and transformation**. Move reusable logic into `src/lib/`.
- All internal links must use `fromSiteRoot(Astro.url.pathname, "/target/")` from `src/lib/relative-paths.ts`. Hardcoded absolute paths (`/foo/`) break on preview deployments.
- Format with Prettier and lint with ESLint before committing. Run locally before pushing:

  ```sh
  npm run format
  npm run lint:fix
  npm run lint:md:fix
  ```

---

## CI

This project uses **two CI systems intentionally** — they serve different purposes:

- **GitHub Actions** (`.github/workflows/ci.yml`) — quality gate for every push and pull request.
- **CircleCI** (`.circleci/config.yml`) — generates a preview URL for pull requests via the CircleCI artifact viewer. It runs `npm run build` and patches asset paths so the built HTML is viewable at the CircleCI artifact URL. It does not run tests or linting.

When updating the Node.js version or build command, update both CI configs.

### GitHub Actions jobs

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and pull request. Jobs run in parallel where possible:

| Job         | What it checks                                              |
| ----------- | ----------------------------------------------------------- |
| `format`    | Prettier format                                             |
| `lint`      | ESLint (warnings treated as errors) + Markdownlint          |
| `typecheck` | Astro type/content checks (`astro:check`)                   |
| `test`      | Unit tests (`npm test`)                                     |
| `build`     | Production build; output uploaded as a shared artifact      |
| `linkcheck` | Internal links and anchors, using the shared build artifact |

All jobs must pass before merging. The `linkcheck` job waits for `build` and all quality jobs.

---

## Adding GSoC content

GSoC project ideas live in `src/content/pages/gsoc/<year>/<suborg>/<file>.md`.

To add a new project idea:

1. Copy the template at `src/content/pages/gsoc/_project_template.md` to `src/content/pages/gsoc/<year>/<suborg>/<file>.md`.
2. Fill in the frontmatter. The schema is defined and validated in `src/content.config.ts` — the build fails on malformed fields.

For a new season, also:

1. Create `src/content/pages/gsoc/<year>/index.md` (the season page at `/gsoc/<year>/` is generated from it).
2. Add the season admins to `src/data/gsoc-admins.json`.
3. Update the current-year heading and the previous-editions list in `src/content/pages/gsoc/index.md`.
4. Update `src/data/universe/seasons.yml` with the season's posting windows and contributor feeds once contributors are selected (see `src/data/universe/README.md`).

Project cards, detail dialogs, and the mentors list are generated automatically from the project files; no route or layout changes are needed.

---

## Updating dependencies

This is a static site — npm packages only affect developers and CI, not end users. **Update once per GSoC cycle** (roughly every February before the season begins) rather than continuously.

GitHub Actions versions are kept up to date automatically via Dependabot (monthly). npm packages are updated manually:

```bash
# See what has newer versions available
npx npm-check-updates

# Bump all versions in package.json (still respects semver)
npx npm-check-updates -u

# Install the new versions and update the lock file
npm install

# Verify nothing broke
npm run build && npm test && npm run check && npm run format:check
```

If `npm install` reports a peer-dependency conflict that looks wrong (a plugin that does support the new version being rejected), the stale lock file is usually the cause — regenerate it:

```bash
rm -rf node_modules package-lock.json
npm install
```

Major-version bumps usually need migration steps; the error messages typically link the package's upgrade guide.

Commit both `package.json` and `package-lock.json` together. If `npm run build` or `npm test` fails after the update, check the changelog for the offending package and either fix the issue or pin that package back to the previous version.

The `overrides` field in `package.json` forces the `yaml` copy nested inside `yaml-language-server` (pulled in by `@astrojs/check`) to match our top-level `yaml` version, because older releases have a known vulnerability. When updating dependencies, check whether the override is still needed (`npm audit` after removing it).

**Security alerts**: if GitHub raises a Dependabot security alert for a specific npm package, fix that immediately regardless of the regular update schedule.
