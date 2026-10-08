# Contributing

Thank you for your interest in D&D Mapp.

This guide holds the rules that every [D&D Mapp repository](https://github.com/dnd-mapp) shares. GitHub shows it in each repository, so the link to it points here wherever you find it. Each repository keeps the rest in its own `docs/contributing/README.md`. Read both before your first change.

## How to contribute

Only the maintainers of D&D Mapp open pull requests. A pull request from a fork is closed with a request to open an issue instead.

Everyone is welcome to take part in other ways:

- Report a bug or propose a change by opening an issue in the repository it concerns.
- Ask questions and share ideas in the Discussions of that repository, or in the [organization discussions](https://github.com/orgs/dnd-mapp/discussions) when they span repositories.

The rest of this guide is written for maintainers.

## Before you start

Open an issue to discuss any change beyond a typo fix before you open a pull request. This avoids work on changes that do not fit the goals of the repository. The [D&D Mapp project](https://github.com/orgs/dnd-mapp/projects/10) tracks the issues of every repository.

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

| Type       | Use for                                                      |
|:-----------|:-------------------------------------------------------------|
| `feat`     | A new feature or capability for the users of the repository  |
| `fix`      | A correction to existing behavior or content                 |
| `docs`     | Changes to documentation only                                |
| `style`    | Changes to formatting only, which do not alter the meaning   |
| `refactor` | Changes to the code that neither fix a bug nor add a feature |
| `perf`     | Changes that improve performance                             |
| `test`     | Changes to tests only                                        |
| `build`    | Changes to the build, packaging, dependencies, or tooling    |
| `ci`       | Changes to the CI workflows and actions                      |
| `chore`    | Other maintenance that does not fit above                    |
| `revert`   | A commit that reverts an earlier commit                      |

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
