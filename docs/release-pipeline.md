# Release Pipeline

This document is the authoritative reference for the dnd-mapp release system. It covers how releases are triggered, how versions are validated, how artefacts are published, and how the shared GitHub Actions infrastructure is structured.

## Overview

The release system follows a two-phase, event-driven architecture:

1. **Version Bump** (manual) — a maintainer triggers the `Release` workflow via the GitHub UI. The shared pipeline validates inputs, bumps `package.json`, updates `CHANGELOG.md`, and commits the result.
2. **Publish** (automatic) — the commit from phase 1 triggers `publish-release.yaml`, which creates a signed git tag and a GitHub Release. For Docker and npm repos a second event (the tag push) triggers the actual artefact publish.

All shared logic lives in the [`dnd-mapp/.github`](https://github.com/dnd-mapp/.github) repository as reusable workflows and composite actions. Consumer repos are thin wrappers that delegate to this shared infrastructure.

---

## Consumer Repositories

| Repository       | Published artefact |
|:-----------------|:-------------------|
| `auth-server`    | Docker image       |
| `dnd-mapp`       | Docker image       |
| `email-service`  | Docker image       |
| `shared-backend` | npm package        |
| `shared-ui`      | npm package        |
| `shared-utils`   | npm package        |

---

## Workflows in Every Consumer Repo

Each consumer repo contains five workflows:

| Workflow               | Trigger                        | Purpose                                                                |
|:-----------------------|:-------------------------------|:-----------------------------------------------------------------------|
| `pull-request.yaml`    | `pull_request`                 | CI — format check, lint, tests                                         |
| `push-main.yaml`       | push to `main`                 | CI + CD (Docker repos push a `dev` image; npm repos run CI only)       |
| `release.yaml`         | `workflow_dispatch`            | Entry point for a release — calls the shared release workflow          |
| `publish-release.yaml` | push to `main` or `release/**` | Creates git tag and GitHub Release when `package.json` version changes |
| `push-tag.yaml`        | push matching `v*`             | CI + publish Docker image or npm package                               |

---

## End-to-End Release Flow

### Step 1 — Prepare the changelog

Before triggering a release, update `CHANGELOG.md` in the target repo. Move all changes from `## [Unreleased]` into a new entry (or leave them under `[Unreleased]` — the pipeline stamps the version automatically during the bump step). Merge this change to `main`.

### Step 2 — Trigger the Release workflow

Go to the repo's **Actions** tab → **Release** → **Run workflow**. Provide two inputs:

| Input           | Required             | Options                                                               |
|:----------------|:---------------------|:----------------------------------------------------------------------|
| `version`       | yes                  | `major` `minor` `patch` `premajor` `preminor` `prepatch` `prerelease` |
| `prerelease-id` | no (default: `none`) | `alpha` `beta` `rc` `none`                                            |

The workflow calls the shared `release.yaml` from `dnd-mapp/.github`, passing the inputs and the repo's `AUTH_APP_ID` / `AUTH_APP_PRIVATE_KEY` secrets.

### Step 3 — Bump version (shared `release.yaml`)

The shared workflow runs the `bump-version` composite action, which performs these steps in order:

1. **Validate** — input-shape rules (1–9) and branch-state rules (A–C) are checked. The workflow fails fast if any rule is violated.
2. **Calculate** — `semver.inc()` computes the new version from the current `package.json` version, the `version` input, and the `prerelease-id`.
3. **Create release branch** — for prerelease bumps a `release/vX.Y.Z` branch is created from `main`. Stable bumps commit directly to `main`.
4. **Update changelog** — for prerelease bumps a watermark comment is inserted/updated in the `[Unreleased]` section; for stable bumps `[Unreleased]` is renamed to `[X.Y.Z] - YYYY-MM-DD` and a fresh `[Unreleased]` section is added.
5. **Commit `package.json`** — the updated manifest is committed to the target branch via the GitHub Contents API using the bot identity.

### Step 4 — Publish release (shared `publish-release.yaml`)

The commit from step 3 to `main` or `release/**` triggers `publish-release.yaml` in the consumer repo, which calls the shared workflow of the same name. That workflow:

1. Compares the current `package.json` version with `HEAD~1`. If unchanged, the job is skipped.
2. Runs the `publish-release` composite action:
   - Creates a **signed annotated git tag** (`vX.Y.Z`) via the Octokit API.
   - Creates a **GitHub Release** with notes extracted from `CHANGELOG.md`.
   - For **stable releases on a `release/**` branch**: merges the release branch into `main` and deletes it.

### Step 5 — Publish artefact (`push-tag.yaml`)

The new tag triggers `push-tag.yaml`:

- Runs CI.
- **Docker repos** — generates version tags (`generate-tags.mjs`), then calls the shared `docker-build` action to build a multi-platform image and push it to Docker Hub.
- **npm repos** — calls the shared `publish-npm-package` action. The dist-tag is derived from the current branch name: `release/vX.Y.Z` → tag `vX`; `main` → tag `latest`.

---

## Stable vs Prerelease

|                                  | Stable (`major`/`minor`/`patch`)           | Prerelease (`premajor`/`preminor`/`prepatch`/`prerelease`)       |
|:---------------------------------|:-------------------------------------------|:-----------------------------------------------------------------|
| Release branch                   | Not created — commits to `main`            | `release/vX.Y.Z` created from `main`                             |
| CHANGELOG                        | `[Unreleased]` stamped with version + date | Watermark `<!-- prerelease: vX.Y.Z -->` inserted                 |
| GitHub Release `prerelease` flag | `false`                                    | `true`                                                           |
| Post-release branch action       | —                                          | Release branch merged to `main` and deleted on final stable bump |
| Docker tag                       | e.g. `1`, `1.2`, `1.2.3`, `latest`         | e.g. `1.2.3-rc.0`                                                |
| npm dist-tag                     | `latest`                                   | e.g. `v1` (from branch name)                                     |

### Stable release when a release branch exists

If a `release/**` branch is active, triggering `Release` from **`main`** with a stable version type will fail with **Rule B**. To publish the stable release, trigger the `Release` workflow from the **`release/**` branch itself** in the GitHub UI. The pipeline will bump to stable, commit to that branch, and `publish-release.yaml` will then merge it into `main` automatically.

---

## Versioning Rules

All rules are enforced by `validateRelease()` in [`src/branch-validator/branch-validator.ts`](../src/branch-validator/branch-validator.ts). A violation causes the `Validate branch` step to fail immediately.

### Input validation (Rules 1–9)

| Rule | Description                                                                                                                  |
|:-----|:-----------------------------------------------------------------------------------------------------------------------------|
| 1    | Starting a prerelease track (`premajor`/`preminor`/`prepatch`) requires an explicit `prerelease-id` — `none` is not allowed. |
| 2    | `prerelease` bump is only valid when the current version is already a prerelease.                                            |
| 4    | On the `premajor` track, next version must be `prerelease` or `major`.                                                       |
| 5    | On the `preminor` track, next version must be `prerelease`, `minor`, or `premajor`.                                          |
| 6    | On the `prepatch` track, next version must be `prerelease`, `patch`, `preminor`, or `premajor`.                              |
| 7–9  | The prerelease identifier can only move forward: `alpha` → `beta` → `rc` → stable (`none`).                                  |

Escalating the track (e.g. `preminor` → `premajor`) resets the identifier and allows starting back from `alpha`.

### Branch state rules (A–C)

| Rule | Description                                                                                                     |
|:-----|:----------------------------------------------------------------------------------------------------------------|
| A    | Cannot start a new prerelease track from a `release/**` branch. Use `prerelease` to continue the current track. |
| B    | Cannot create a stable release from `main` while a `release/**` branch is active.                               |
| C    | Only one `release/**` branch is allowed at a time.                                                              |

---

## Shared Composite Actions

All actions are located in `.github/actions/` in the `dnd-mapp/.github` repository.

| Action                | Responsibility                                                                                                |
|:----------------------|:--------------------------------------------------------------------------------------------------------------|
| `setup-tools`         | Installs Node.js and pnpm                                                                                     |
| `ci`                  | Runs format check, ESLint, Markdownlint, build artifact check, and Vitest                                     |
| `configure-git-bot`   | Generates a GitHub App installation token and configures git identity                                         |
| `bump-version`        | Validates inputs → calculates version → creates branch → updates changelog → commits `package.json`           |
| `update-changelog`    | Inserts/updates the prerelease watermark or stamps the stable version with a date                             |
| `publish-release`     | Creates a signed annotated tag, creates the GitHub Release, and merges the release branch for stable releases |
| `docker-build`        | Builds a multi-platform Docker image and pushes it to Docker Hub                                              |
| `publish-npm-package` | Publishes the npm package with a dist-tag derived from the current branch name                                |

---

## TypeScript Modules

The automation logic is implemented as TypeScript modules under `src/` in the `dnd-mapp/.github` repository. Entry-point scripts in `src/scripts/` import these modules and are bundled with esbuild into self-contained `.mjs` files committed to each composite action's `dist/` directory. Bundling inlines all source modules and npm dependencies so consumer repos need no `node_modules/` of their own to run the scripts.

| Module              | Key exports                                                                               |
|:--------------------|:------------------------------------------------------------------------------------------|
| `branch-validator`  | `validateRelease()` — enforces all SemVer and branch-state rules                          |
| `version-bumper`    | `bumpVersion()`, `deriveReleaseBranchName()`, `writePackageVersion()`                     |
| `branch-manager`    | `createReleaseBranch()`, `mergeReleaseBranch()`, `deleteReleaseBranch()`, `commitFiles()` |
| `changelog-manager` | `insertOrUpdateWatermark()`, `stampStableVersion()`, `extractPrereleaseDelta()`           |
| `release-publisher` | `publishRelease()` — creates signed tag and GitHub Release via Octokit                    |
| `github-client`     | `createGithubClient()` — thin Octokit wrapper                                             |

---

## Authentication

All git-mutating operations (commits, tag creation, branch management) use a short-lived **GitHub App installation token** rather than a personal access token. Each consumer repo stores two secrets:

- `AUTH_APP_ID` — the numeric GitHub App ID
- `AUTH_APP_PRIVATE_KEY` — the App's RSA private key

The `configure-git-bot` action generates a token from these secrets at runtime and configures the git identity to the App's bot user (`[bot]@users.noreply.github.com`).

---

## CHANGELOG Format

All repos follow the [Keep a Changelog](https://keepachangelog.com/) format. The pipeline expects and produces the following structure:

```markdown
## [Unreleased]

### Added

- Description of an unreleased change

<!-- prerelease: v1.2.0 -->

---

## [1.1.0] - 2026-04-18

### Added

- Description of a released change
```

**Prerelease watermark** (`<!-- prerelease: v1.2.0 -->`) marks the boundary of changes included in the current prerelease. On each subsequent prerelease bump the watermark is updated in-place. When the stable release is triggered, all watermark comments are removed and the `[Unreleased]` heading is replaced with the versioned heading and today's date.
