# Agent instructions

## Project

This repository is `dnd-mapp/.github`, the special repository that GitHub reads for the organization profile. GitHub shows `profile/README.md` on the organization page. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the layout, the checks, and the commit and branch conventions.

- Keep `profile/README.md` short and free of a repository list. The organization page already lists the repositories.
- `.github/PULL_REQUEST_TEMPLATE.md` is the default pull request template for every dnd-mapp repository. Follow its hints when you write a pull request description here. The forms in `.github/DISCUSSION_TEMPLATE/` are the default discussion category forms, and each file name must equal the slug of its category, `ideas` or `q-a`. Add other default community health files, issue templates, or reusable workflows only when asked. Each repository keeps its own `CONTRIBUTING.md` and `CODEOWNERS`, and the shared Renovate preset lives in `dnd-mapp/config-renovate`.
- Nothing in this repository is versioned or released. Do not add a changelog, a version bump, or release workflows.
- Run `format-check`, `lint-md`, and `actionlint` before you commit.
