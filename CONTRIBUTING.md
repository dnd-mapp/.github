# Contributing

Thank you for your interest in D&D Mapp.

This guide holds the rules that every [D&D Mapp repository](https://github.com/dnd-mapp) shares. GitHub shows it in each repository, so the link to it points here wherever you find it. Each repository keeps the rest in its own `docs/contributing/README.md`. Read both before your first change.

## How to contribute

Only the maintainers of D&D Mapp open pull requests. A pull request from a fork is closed with a request to open an issue instead.

Everyone is welcome to take part in other ways:

- Report a bug by opening an issue with the Bug form in the repository it concerns.
- Ask questions and share ideas in the Discussions of that repository, or in the [organization discussions](https://github.com/orgs/dnd-mapp/discussions) when they span repositories.
- Report a vulnerability privately, as the [security policy](https://github.com/dnd-mapp/.github/blob/main/SECURITY.md) describes.

The rest of this guide is written for maintainers.

## Issues

The [D&D Mapp project](https://github.com/orgs/dnd-mapp/projects/10) tracks the issues of every repository. Every issue has one of the five issue types of the organization, and the triager sets its issue fields.

### When to open an issue

Open an issue before you start on a Feature, a Bug, or any work that takes more than one sitting. This avoids work on changes that do not fit the goals of the repository, and the issue records why the change was made. A Task that fits one sitting and one pull request may go without an issue, as may a typo fix.

### Issue types

Pick the type by the kind of work. When it is unclear which type fits, the commit type of the main change decides.

| Type     | Use for                                                                                                        | Commit types                    |
|:---------|:---------------------------------------------------------------------------------------------------------------|:--------------------------------|
| Epic     | A larger outcome split into sub-issues, such as one change rolled out to several repositories                  | None of its own                 |
| Feature  | New or changed behavior that the users of a package, action, or application notice                             | `feat`                          |
| Bug      | Something that works differently from what its documentation or an earlier release promises                    | `fix`                           |
| Task     | Work that the users of a release do not notice, such as CI, documentation, tooling, performance, or a refactor | Every type but `feat` and `fix` |
| Research | A question to answer before work can start, which ends in a decision on the issue rather than a pull request   | None                            |

A vulnerability gets no public issue: report it as the security policy describes, and its fix flows as a Bug. Ideas and questions go to Discussions until a maintainer accepts an idea as a Feature.

GitHub does not limit which types may have sub-issues, so triage keeps these rules:

- Only an Epic has sub-issues. When an issue of another type turns out to need sub-issues, change its type to Epic.
- An Epic holds Features, Bugs, Tasks, and Research issues from any repository, such as one sub-issue per repository for a rollout. Epics do not nest.
- An Epic never closes through a pull request. Close it by hand once its sub-issues are closed and its Done when checks pass.
- A Research issue ends with the answer in a comment on the issue. A decision that changes how the repositories work then lands in a document through a follow-up Task, which the Done when section names.

### Issue forms

The "New issue" page of every repository without issue templates of its own offers one [issue form](https://github.com/dnd-mapp/.github/tree/main/.github/ISSUE_TEMPLATE) per type, and blank issues are disabled. The Bug form is meant for everyone, and the other four forms are meant for maintainers.

Each label of a form becomes a `###` heading in the issue body. Give an issue written by hand, such as one filed with `gh issue create`, the same `###` headings in the same order, so every body reads the same. The triager adds the sections in italics below and deletes the optional sections that hold `_No response_`.

| Type     | Body sections                                                                                                                               |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| Epic     | Why, What, Scope, Plan, Done when, Urgency                                                                                                  |
| Feature  | Why, What, Alternatives considered, _Out of scope_, Done when, Urgency                                                                      |
| Bug      | What happened, Expected behavior, Steps to reproduce, Project and version, Last version that worked, Environment, Impact, Logs, _Done when_ |
| Task     | Why, What, _Decisions_, Open questions, Manual steps, Done when, Urgency                                                                    |
| Research | Why, Questions, Approach, _Out of scope_, Done when, Urgency                                                                                |

### Issue fields

Issue forms cannot set issue fields, so no form asks for them. The triager sets them instead, guided by the Urgency answer of a form, or by the Impact answer of the Bug form.

| Field       | Pinned to                          | Meaning                                                                   |
|:------------|:-----------------------------------|:--------------------------------------------------------------------------|
| Priority    | Epic, Feature, Bug, Task, Research | How soon the work should start, judged by its value to users and the org  |
| Severity    | Bug                                | How badly a bug breaks the project                                        |
| Target date | Epic, Feature, Task, Research      | The date the work has to be done by, set only when an outside date exists |

Priority means the same for every type, so all types rank against each other in one Ready column.

| Priority | Meaning                                                                   |
|:---------|:--------------------------------------------------------------------------|
| Urgent   | Needed now: a release, an outside user, or most planned work waits on it. |
| High     | Needed soon: it unblocks planned work or answers a user's request.        |
| Medium   | Planned: worth doing once more pressing work is done.                     |
| Low      | Nice to have: done when nothing more valuable waits.                      |

| Severity | Meaning                                                                                           |
|:---------|:--------------------------------------------------------------------------------------------------|
| Blocker  | The project cannot do its main job and has no workaround, or data is lost or corrupted.           |
| Critical | A feature is broken, and the only workaround is unacceptably complex, such as pinning a release.  |
| Major    | A feature is broken or gives wrong results, and a workaround exists.                              |
| Minor    | An inconvenience or a cosmetic fault, such as a misleading message, while the results stay right. |

### Triage exit criteria

A new issue starts in Triage. These criteria are written rules that the triager checks, and no automation enforces them.

An issue moves to Backlog once its type is confirmed and its body holds the required sections of its form in order. A maintainer must also reproduce a Bug on the latest release or `main`. An issue that waits for answers from its reporter stays in Triage.

An issue moves to Ready once every issue that blocks it is closed, and Target date is set when an outside date exists. Each type adds its own checks:

| Type     | Fields that must be filled | Body checks                                                                                                                                                                                                      |
|:---------|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Epic     | Priority                   | Scope and Plan are written, and the first sub-issue (or the sub-issues of the first gate) exists with its blocked-by links.                                                                                      |
| Feature  | Priority                   | The approach in What is settled, the Done when checks can be run, and the work fits one pull request in one repository.                                                                                          |
| Bug      | Severity, Priority         | Done when is added, and the fix fits one pull request in one repository.                                                                                                                                         |
| Task     | Priority                   | The open questions are answered and moved into Decisions, the Done when checks can be run, and each manual step names who does it. The work fits one pull request in one repository, or one sitting without one. |
| Research | Priority                   | Each question names the decision it feeds, and Done when says where the answer goes and who approves it. The waiting issues are blocked by it, and the work fits one sitting.                                    |

### Pull order

Pull the next item from the top of Ready, sorted by Priority and then by Severity. Three rules fold the urgent cases into Priority:

- A Blocker Bug is always Urgent. An Urgent Blocker is the one item that may pass the WIP limit of In progress.
- A Task that blocks every merge or every release is Urgent, such as a broken required check.
- A Research issue has at least the Priority of the most urgent issue it blocks, since that issue cannot start before the answer.

Within one Priority, Severity puts the worse Bug first. Among items that tie on both fields, pull the one that has waited longest. An Epic is never pulled itself: its sub-issues are, each by its own Priority.

To move a Bug up or down the order, raise or lower its Priority rather than its Severity.

## The guide of each repository

Each repository keeps everything that this guide leaves out in `docs/contributing/README.md`. That file is the entry point for:

- The project layout.
- The checks that the repository runs on top of the shared ones.
- The changelog and the release steps, in a repository that publishes something.
- The details behind the sections on [Docker](#repositories-with-docker) and [frontend repositories](#frontend-repositories).

Other pages for contributors may sit next to it in `docs/contributing/`, and other docs may live elsewhere in `docs/` with a link from it.

Keep no `CONTRIBUTING.md` in the root, `.github/`, or `docs/` of a repository. GitHub shows that file instead of this guide.

## Development setup

The required Node.js and pnpm versions are set in `devEngines` in `package.json`. They are enforced through `engineStrict`, so installing with other versions fails.

Install the dependencies with:

```bash
pnpm install
```

Dependency versions live in the catalogs in `pnpm-workspace.yaml`, which uses `catalogMode: strict`. Add or bump versions there, and reference them in `package.json`. Use `catalog:` for the default catalog. Use the name of a named catalog, such as `catalog:prettier`, for a group of related packages when the repository has one.

Newly published releases are held back for three days through `minimumReleaseAge`. You may need to wait before you can bump to a very recent version.

Install [actionlint](https://github.com/rhysd/actionlint) to lint the workflows locally, for example with `brew install actionlint`. CI runs the version that `.github/actions/ci/action.yaml` pins.

## Git hooks

[Lefthook](https://lefthook.dev/) installs the Git hooks when you run `pnpm install`. The hooks are defined in `lefthook.yaml`. `pnpm-workspace.yaml` turns off the side-effects cache of pnpm, because a cached build of Lefthook skips the script that installs the hooks. If the hooks are still missing, install them with `pnpm exec lefthook install`.

| Hook         | Runs                                                                          | On                        |
|:-------------|:------------------------------------------------------------------------------|:--------------------------|
| `pre-commit` | Prettier and markdownlint-cli2 checks, and ESLint where the repository has it | The staged files          |
| `commit-msg` | commitlint                                                                    | The message of the commit |

The pre-commit hooks only check files. Run `pnpm run format` to fix formatting issues. In a repository with ESLint, which has a `lint-ts` script, run `pnpm exec eslint --fix` to apply the fixes that ESLint can make. Stage the result.

## Checks

Every repository has these checks, and CI runs them on each pull request:

```bash
pnpm run format-check
pnpm run lint-md
actionlint
```

The `format-check` script checks the formatting with Prettier, and `pnpm run format` fixes it. The `lint-md` script lints the Markdown files with markdownlint.

Most repositories add checks of their own, such as `lint-ts`, `typecheck`, `build`, or `test-ci`. Run the checks that `docs/contributing/README.md` lists as well, before you open a pull request.

## Code style

Follow the rules in `.editorconfig`.

- Use UTF-8 and LF line endings.
- Indent with 4 spaces, or 2 spaces in `package.json` and `pnpm-*.yaml`.
- End every file with a newline and trim trailing whitespace.

Follow these rules for prose, including Markdown files.

- Never hard wrap prose. Write each paragraph or list item on a single line.
- Use US spelling, for example "color" and "behavior".
- Keep every sentence at or under 40 words.
- Pretty print Markdown tables so the columns line up, with alignment markers on every separator line.

## Branches

Create a branch from `main` for each change. Name it `<type>/<short-description>` in lowercase with hyphens between words, for example `feat/add-button` or `fix/focus-ring-color`.

Use the same types as for commits.

## Commits

Write commit messages that follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The `commit-msg` hook enforces this with [`@dnd-mapp/config-commitlint`](https://github.com/dnd-mapp/config-commitlint).

```text
<type>(<optional scope>): <description>

<optional body>

<optional footers>
```

Keep the header and every line of the body at or under 72 characters. Use one of these types.

| Type       | Use for                                                                                |
|:-----------|:---------------------------------------------------------------------------------------|
| `feat`     | A new feature or capability for the users of the repository                            |
| `fix`      | A correction to behavior that differs from what its docs or an earlier release promise |
| `docs`     | Changes to documentation only                                                          |
| `style`    | Changes to formatting only, which do not alter the meaning                             |
| `refactor` | Changes to the code that neither fix a bug nor add a feature                           |
| `perf`     | Changes that improve performance                                                       |
| `test`     | Changes to tests only                                                                  |
| `build`    | Changes to the build, packaging, dependencies, or tooling                              |
| `ci`       | Changes to the CI workflows and actions                                                |
| `chore`    | Other maintenance that does not fit above                                              |
| `revert`   | A commit that reverts an earlier commit                                                |

Write the description in the imperative mood, such as "add the button". Mark a breaking change with `!` after the type or scope, such as `feat!: drop the legacy config`. Add a `BREAKING CHANGE:` footer that explains what users must do.

## Pull requests

- Keep each pull request to one change.
- Link the issue it addresses, with `Closes #<number>` for an issue it resolves.
- Use a title that follows the commit convention.
- Fill in the pull request template. Its hints say what each section is for.
- Update the changelog and the README in the same pull request when the change affects them.
- Turn on auto-merge once the pull request is open, with `gh pr merge <number> --auto --merge` or the "Enable auto-merge" button. It then merges as soon as it is approved and the checks pass.
- If auto-merge is off, the author merges the pull request once it is approved and the checks pass.
- Renovate merges its own minor and patch pull requests once the checks pass. A maintainer approves a major update from Renovate and turns on auto-merge for it.
- Update the branch when it falls behind `main`, because auto-merge waits until the branch is up to date. The update dismisses the approval, so the pull request needs a new review.

## Repositories with Docker

Install [Docker](https://docs.docker.com/get-started/get-docker/) in a repository with a `Dockerfile`, to lint the `Dockerfile` and to build the image locally. `docs/contributing/README.md` describes the image, its configuration, and how it is released.

## Frontend repositories

The `Design system` Figma file is the source of truth for how D&D Mapp looks. Design a change in Figma first, whether it is a new component or a new token value, and bring it into code after that. A design that only exists in code drifts away from the designs.

The design tokens come from the Figma variables, and [`@dnd-mapp/design-tokens`](https://github.com/dnd-mapp/design-tokens) publishes them. Take colors, spacing, radii, and text styles from the tokens, and only hard code a value when no token fits.

A repository whose tests run in a browser through [Playwright](https://playwright.dev/) also needs that browser. Install it after the dependencies:

```bash
pnpm exec playwright install chromium
```

`docs/contributing/README.md` holds the details, such as how to update the tokens or how to build and test a component.

## License

Every D&D Mapp repository is licensed under the MIT license in its `LICENSE` file. By contributing, you agree that your contributions are licensed under the same license.
