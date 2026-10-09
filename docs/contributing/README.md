# Contributing to dnd-mapp/.github

This page adds the details of `dnd-mapp/.github` to the [shared contributing guide](https://github.com/dnd-mapp/.github/blob/main/CONTRIBUTING.md). Read that guide first.

This repository holds the organization profile and the default community health files of D&D Mapp. GitHub applies most of its files to every repository without a file of its own, so a change here reaches the whole organization. Keep each change small and deliberate.

## Project layout

| Path                                     | Purpose                                                                         |
|:-----------------------------------------|:--------------------------------------------------------------------------------|
| `profile/README.md`                      | The organization profile that GitHub shows on the organization page             |
| `CONTRIBUTING.md`                        | The shared contributing guide for every D&D Mapp repository                     |
| `SECURITY.md`                            | The default security policy for every D&D Mapp repository                       |
| `SUPPORT.md`                             | The default support file for every D&D Mapp repository                          |
| `CODE_OF_CONDUCT.md`                     | The default code of conduct for every D&D Mapp repository                       |
| `GOVERNANCE.md`                          | The roles and decision model of D&D Mapp, which GitHub does not inherit         |
| `.github/PULL_REQUEST_TEMPLATE.md`       | The default pull request template for every D&D Mapp repository                 |
| `.github/FUNDING.yml`                    | The default funding file that adds the Sponsor button to every repository       |
| `.github/DISCUSSION_TEMPLATE/ideas.yml`  | The default discussion form for the Ideas category of every D&D Mapp repository |
| `.github/DISCUSSION_TEMPLATE/q-a.yml`    | The default discussion form for the Q&A category of every D&D Mapp repository   |
| `.github/ISSUE_TEMPLATE/<NN>-<type>.yml` | The default issue form per issue type, listed in the order of `<NN>`            |
| `.github/ISSUE_TEMPLATE/config.yml`      | Disables blank issues and links to Discussions and the security policy          |
| `.github/actions/ci/action.yaml`         | The checks that the pull request and push workflows run                         |
| `.github/actionlint.yaml`                | Declares the `ubuntu-26.04` runner label, which actionlint does not know yet    |

## Changing the shared contributing guide

GitHub shows the root `CONTRIBUTING.md` in every repository without a guide of its own, but it renders the file from this repository. A relative link in it resolves against `dnd-mapp/.github`, so use absolute links only. Refer to the files of other repositories in prose, such as `docs/contributing/README.md`.

Keep the guide to the rules that every repository shares. A rule that only some repositories follow goes in a short conditional section, such as the one for repositories with Docker, or in the `docs/contributing/README.md` of each repository.

## Checks

This repository runs only the [shared checks](https://github.com/dnd-mapp/.github/blob/main/CONTRIBUTING.md#checks): `format-check`, `lint-md`, and actionlint.

## Changelog and releases

Nothing in this repository is versioned or released, so it has no changelog. A change takes effect as soon as it merges into `main`.
