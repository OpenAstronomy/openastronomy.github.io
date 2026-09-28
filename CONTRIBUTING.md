# Contributing to openastronomy.github.io

Most contributions are content (GSoC project ideas, posts and data files); see [Adding GSoC content](#adding-gsoc-content). The rest of this file is for code changes.

---

## Code

- Put logic in `src/lib/` as TypeScript, with a Vitest test in `src/lib/__tests__/` for anything with branches, parsing or dates. Keep Astro runtime imports out of `src/lib/` so the tests run without Astro.
- Keep `.astro` frontmatter to data fetching and small transformations.
- Comment what is not obvious from the code (a contract, a security assumption, a workaround).
- Naming: camelCase for variables and functions, PascalCase for types and `.astro` components, kebab-case for CSS classes.
- Write internal links as root-relative paths with a trailing slash (`/members/`). The CircleCI preview rewrites them (`scripts/circleci-preview.sh`).
- Before pushing, run:

  ```sh
  npm run format
  npm run lint:fix
  npm run lint:md:fix
  npm test
  ```

---

## CI

This project uses **two CI systems intentionally** — they serve different purposes:

- **GitHub Actions** (`.github/workflows/ci.yml`) — quality gate for pull requests and pushes to `main`, and the deploy to GitHub Pages.
- **CircleCI** (`.circleci/config.yml`) — generates a preview URL for pull requests via the CircleCI artifact viewer. It runs `npm run build` and rewrites links so the built HTML is browsable at the artifact URL. It does not run tests or linting.

When changing the build command, update both CI configs. GitHub Actions reads the Node.js version from `.nvmrc`; CircleCI uses the `cimg/node:lts` image.

### GitHub Actions jobs

GitHub Actions (`.github/workflows/ci.yml`) runs on pull requests and pushes to `main`. One `build` job runs, in order: Prettier, ESLint (warnings are errors), markdownlint, `astro check`, unit tests, the production build, and a lychee check of internal links and anchors. It must pass before merging. On `main` in the upstream repository, a `deploy` job then publishes the build to GitHub Pages.

---

## Adding GSoC content

GSoC project ideas live in `src/content/pages/gsoc/<year>/<suborg>/<file>.md`.

To add a new project idea:

1. Copy the template at `src/content/pages/gsoc/_project_template.md` to `src/content/pages/gsoc/<year>/<suborg>/<file>.md`.
2. Fill in the frontmatter. The schema is defined and validated in `src/content.config.ts` — the build fails on malformed fields.

For a new season, also:

1. Add the season admins to `src/data/gsoc-admins.json`. This also creates the season page at `/gsoc/<year>/`.
2. Update the current-year heading and the previous-editions list in `src/content/pages/gsoc/index.md`.
3. Update `src/data/universe/seasons.yml` with the season's posting windows and contributor feeds once contributors are selected (see `src/data/universe/README.md`).

Project cards, project pages, and the mentors list are generated automatically from the project files; no route or layout changes are needed.

---

## Adding a news post

Create `src/content/posts/YYYY-MM-DD-slug.md` with this frontmatter:

```yaml
---
title: "My post title"
date: 2026-09-27
summary: "One sentence about the post."
---
```

`title` and `date` are required. `summary` is optional but should always be set: it is the text shown for the post on `/news/` and the page's meta description. The post is published at `/YYYY/MM/DD/slug/`, with the date taken from `date` and the slug from the file name. It also appears in `/feed.xml`.

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

TypeScript stays on 6.x until `@astrojs/check` and `typescript-eslint` accept 7.x (their peer ranges stop at 6).

Commit both `package.json` and `package-lock.json` together. If `npm run build` or `npm test` fails after the update, check the changelog for the offending package and either fix the issue or pin that package back to the previous version.

**Security alerts**: if GitHub raises a Dependabot security alert for a specific npm package, fix that immediately regardless of the regular update schedule. With "Dependabot security updates" enabled in the repository settings, Dependabot opens the fix PR itself (`.github/dependabot.yml`).
