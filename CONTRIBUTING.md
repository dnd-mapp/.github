# Contributing

Thank you for your interest in contributing to `dnd-mapp/.github`.

This repository holds the organization profile that GitHub shows on the [D&D Mapp organization page](https://github.com/dnd-mapp). Changes to it are small, so please keep each pull request to one change.

## Before you start

Open an [issue](https://github.com/dnd-mapp/.github/issues) to discuss any change beyond a typo fix before you send a pull request.

## Development setup

The required Node and pnpm versions are set in `devEngines` in `package.json`. They are enforced through `engineStrict`, so installing with other versions fails.

Install the dependencies with:

```bash
pnpm install
```

Dependency versions live in the catalogs in `pnpm-workspace.yaml`, which uses `catalogMode: strict`. Add or bump versions there and reference them in `package.json`. Use `catalog:` for the default catalog and a named catalog such as `catalog:prettier` for a group of tools.

Newly published releases are held back for three days through `minimumReleaseAge`. You may need to wait before you can bump to a very recent version.

Install [actionlint](https://github.com/rhysd/actionlint) to lint the workflows locally, for example with `brew install actionlint`. CI runs the version that `.github/actions/ci/action.yaml` pins.

## Git hooks

[Lefthook](https://lefthook.dev/) installs the Git hooks when you run `pnpm install`. The hooks are defined in `lefthook.yaml`. `pnpm-workspace.yaml` turns off the side-effects cache of pnpm, because a cached build of lefthook skips the script that installs the hooks. If the hooks are still missing, install them with `pnpm exec lefthook install`.

| Hook         | Runs                                  | On                        |
|:-------------|:--------------------------------------|:--------------------------|
| `pre-commit` | Prettier and markdownlint-cli2 checks | The staged files          |
| `commit-msg` | commitlint                            | The message of the commit |

The pre-commit hooks only check files. Run `pnpm run format` to fix formatting issues and stage the result.

## Project layout

| Path                               | Purpose                                                                      |
|:-----------------------------------|:-----------------------------------------------------------------------------|
| `profile/README.md`                | The organization profile that GitHub shows on the organization page          |
| `.github/PULL_REQUEST_TEMPLATE.md` | The default pull request template for every D&D Mapp repository              |
| `.github/FUNDING.yml`              | The default funding file that adds the Sponsor button to every repository    |
| `.github/actions/ci/action.yaml`   | The checks that the pull request and push workflows run                      |
| `.github/actionlint.yaml`          | Declares the `ubuntu-26.04` runner label, which actionlint does not know yet |

## Checking the repository

Check and format the repository with these commands. CI runs `format-check`, `lint-md`, and actionlint. Run them yourself before you open a pull request.

```bash
pnpm run format-check
pnpm run format
pnpm run lint-md
actionlint
```

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

Create a branch from `main` for each change. Name it `<type>/<short-description>` in lowercase with hyphens between words, for example `docs/update-profile` or `ci/pin-actionlint`.

Use the same types as for commits.

## Commits

Write commit messages that follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```text
<type>(<optional scope>): <description>
```

Use one of these types.

| Type       | Use for                                                                             |
|:-----------|:------------------------------------------------------------------------------------|
| `feat`     | New content on the organization profile, or a new default file for the organization |
| `fix`      | A correction to existing content                                                    |
| `docs`     | Changes to the documentation of this repository                                     |
| `refactor` | Changes that do not alter what GitHub shows                                         |
| `ci`       | Changes to the workflows of this repository                                         |
| `build`    | Changes to dependencies or tooling                                                  |
| `chore`    | Other maintenance that does not fit above                                           |

Write the description in the imperative mood, such as "add the contact email to the profile".

## Pull requests

- Keep each pull request to one change.
- Link the issue it addresses.
- Use a title that follows the commit convention.
- Fill in the pull request template. Its hints say what each section is for.
- If you have write access, turn on auto-merge once the pull request is open, with `gh pr merge <number> --auto --merge` or the "Enable auto-merge" button. It then merges as soon as it is approved and the checks pass.
- If auto-merge is off, the author merges the pull request once it is approved and the checks pass. A maintainer merges pull requests opened by a contributor without write access.
- Renovate merges its own minor and patch pull requests once the checks pass. A maintainer approves a major update from Renovate and turns on auto-merge for it.
- Update the branch when it falls behind `main`, because auto-merge waits until the branch is up to date. The update dismisses the approval, so the pull request needs a new review.

## License

By contributing, you agree that your contributions are licensed under the [MIT license](LICENSE).
