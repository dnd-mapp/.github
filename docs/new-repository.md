# Creating a repository

This checklist holds every step a maintainer takes after creating a repository in the D&D Mapp organization, in order. Only maintainers create repositories, as the [governance](https://github.com/dnd-mapp/.github/blob/main/GOVERNANCE.md#maintainers) describes.

The organization is on the GitHub Free plan, so organization rulesets are not available. A code security configuration covers the security features, but the rulesets, the check-run failure thresholds, the issue workflows, and the access of the apps and secrets need setting up in each repository. A missed step fails silently: a new issue never reaches the project, or a pull request merges without code scanning gating it.

The [core steps](#core-steps) apply to every repository. A section per kind of repository follows them, and each starts with the condition under which it applies. The [audit](#audit) at the end lists the call that checks each setting.

The commands use `gh` and read the name of the new repository from a shell variable. Set it first:

```bash
repo=<name>
```

## Core steps

### 1. Create the repository

Create a public repository with a short description. Leave out the README, license, and `.gitignore` that GitHub offers, since the [shared files](#6-push-the-shared-files) bring their own.

```bash
gh repo create "dnd-mapp/$repo" --public --description "<description>"
```

Add topics that describe the project with `gh repo edit "dnd-mapp/$repo" --add-topic <topic>,<topic>`.

### 2. Set the general settings

Turn off the wiki, turn on Discussions, allow merge commits only, and turn on auto-merge, branch updates, and branch deletion after a merge:

```bash
gh api --method PATCH "repos/dnd-mapp/$repo" \
    -F has_wiki=false \
    -F has_discussions=true \
    -F allow_merge_commit=true \
    -F allow_squash_merge=false \
    -F allow_rebase_merge=false \
    -F allow_auto_merge=true \
    -F allow_update_branch=true \
    -F delete_branch_on_merge=true \
    -f merge_commit_title=MERGE_MESSAGE \
    -f merge_commit_message=PR_TITLE
```

The organization sets the Actions permissions of every repository: SHA pinning required, read-only `GITHUB_TOKEN`, and workflows allowed to approve pull requests. Leave the Actions settings of the repository alone.

### 3. Give the reviewers team access

`CODEOWNERS` assigns every file to the `reviewers` team, so the team needs write access. Give access through the team only, and add no direct collaborators.

```bash
gh api --method PUT "orgs/dnd-mapp/teams/reviewers/repos/dnd-mapp/$repo" -f permission=push
```

### 4. Remove the default labels

No D&D Mapp repository has labels, since the issue types and issue fields replace them. Delete the labels that GitHub adds to a new repository:

```bash
gh label list --repo "dnd-mapp/$repo" --json name --jq '.[].name' | while read -r name; do
    gh label delete "$name" --repo "dnd-mapp/$repo" --yes
done
```

### 5. Trim the discussion categories

Every repository has the same three discussion categories: Announcements for the release posts, and Ideas and Q&A for the [default discussion forms](https://github.com/dnd-mapp/.github/tree/main/.github/DISCUSSION_TEMPLATE). Delete the General, Polls, and Show and tell categories that GitHub adds, on the discussion categories page of the repository: `https://github.com/dnd-mapp/<name>/discussions/categories`. The API cannot change discussion categories.

### 6. Push the shared files

Push the first commit straight to `main`, before the [rulesets](#9-add-the-core-rulesets) require pull requests. Copy these files from the repository named for each, and change only what the table says:

| File                                         | Copy from                                                                                                                     | Change                                                                            |
|:---------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|
| `.github/workflows/issue-opened.yaml`        | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github/workflows)                                                  | Nothing                                                                           |
| `.github/workflows/issue-closed.yaml`        | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github/workflows)                                                  | Nothing                                                                           |
| `.github/workflows/pull-request.yaml`        | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github/workflows)                                                  | Add the jobs of the repository                                                    |
| `.github/workflows/push-main.yaml`           | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github/workflows)                                                  | Copy it from `config-markdown` instead in a repository that [releases](#releases) |
| `.github/actions/ci/action.yaml`             | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github/actions/ci)                                                 | Add the checks of the repository                                                  |
| `.github/actionlint.yaml`                    | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github)                                                            | Nothing                                                                           |
| `.github/CODEOWNERS`                         | [`.github`](https://github.com/dnd-mapp/.github/tree/main/.github)                                                            | Nothing                                                                           |
| `renovate.json`                              | [`config-markdown`](https://github.com/dnd-mapp/config-markdown)                                                              | Add rules that only this repository needs                                         |
| `lefthook.yaml`                              | [`.github`](https://github.com/dnd-mapp/.github), or [`config-eslint`](https://github.com/dnd-mapp/config-eslint) with ESLint | Nothing                                                                           |
| `commitlint.config.ts`                       | [`.github`](https://github.com/dnd-mapp/.github)                                                                              | Nothing                                                                           |
| `.editorconfig`, `.gitattributes`, `LICENSE` | [`.github`](https://github.com/dnd-mapp/.github)                                                                              | Nothing                                                                           |
| `.prettierrc.ts`, `.markdownlint-cli2.yaml`  | [`.github`](https://github.com/dnd-mapp/.github)                                                                              | Nothing                                                                           |
| `docs/contributing/README.md`                | The repository of the same kind, such as `config-markdown` for an npm package                                                 | Write it for this repository                                                      |

The checks and the Git hooks also need the `format`, `format-check`, and `lint-md` scripts, and the devDependencies they run. Copy them from the `package.json` of `.github`, and their versions from the `commitlint`, `markdown`, and `prettier` catalogs in its `pnpm-workspace.yaml`.

The `pull-request.yaml` and `push-main.yaml` workflows run a job named `CI`, which the [core rulesets](#9-add-the-core-rulesets) require. Keep that name.

`renovate.json` comes from `config-markdown` rather than `.github`, because it extends the latest major version of the shared preset. Renovate updates the version in every repository after that.

### 7. Give the apps access

Two GitHub Apps of the organization work on selected repositories only. Add the new repository to both on the [installed apps page](https://github.com/organizations/dnd-mapp/settings/installations), under Configure and then Repository access:

| App        | Used for                                                                                                                 |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------|
| `dnd-mapp` | Adds new issues to the project in `issue-opened.yaml`, and opens release pull requests and tags in the release workflows |
| `renovate` | Opens the dependency updates and the Dependency Dashboard                                                                |

Install Renovate after the shared files are on `main`. It then reads the copied `renovate.json` and skips its onboarding pull request.

### 8. Share the organization secret and variable

The workflows sign in as the `dnd-mapp` app with an organization secret and an organization variable. Both are shared with selected repositories only, so add the new repository to each:

```bash
id=$(gh api "repos/dnd-mapp/$repo" --jq .id)
gh api --method PUT "orgs/dnd-mapp/actions/secrets/GH_APP_PRIVATE_KEY/repositories/$id"
gh api --method PUT "orgs/dnd-mapp/actions/variables/GH_APP_CLIENT_ID/repositories/$id"
```

### 9. Add the core rulesets

Copy the two rulesets of `.github`, which protect the default branch:

| Ruleset                | Rules                                                                                                                                                                           |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default branch         | No deletion or force push, signed commits, the `CI` check up to date with `main`, and CodeQL results with security alerts at Medium or higher and alerts at Errors and warnings |
| Default branch reviews | A pull request with one approval from a code owner after the last push, merged with a merge commit. Renovate may bypass it through a pull request                               |

```bash
gh api "repos/dnd-mapp/.github/rulesets" --jq '.[].id' | while read -r id; do
    gh api "repos/dnd-mapp/.github/rulesets/$id" --jq '{name, target, enforcement, conditions, rules, bypass_actors}' |
        gh api --method POST "repos/dnd-mapp/$repo/rulesets" --input - --jq .name
done
```

When a job other than `CI` must pass before a merge, add it to the required status checks of the Default branch ruleset, as `ui` does with `Build Storybook`.

### 10. Check code security

The "D&D Mapp default" [code security configuration](https://github.com/dnd-mapp/.github/issues/23) is the default for new public repositories. It turns on private vulnerability reporting, Dependabot alerts, secret scanning with push protection, and code scanning default setup. Check that it is attached and enforced:

```bash
gh api "repos/dnd-mapp/$repo/code-security-configuration" --jq '{status, name: .configuration.name}'
```

When it is missing, attach it on the [code security configurations page](https://github.com/organizations/dnd-mapp/settings/security_products) of the organization.

Default setup starts once the first commit holds code in a language that CodeQL supports. The organization recommends the extended query suite for it. Check that default setup is configured with that suite:

```bash
gh api "repos/dnd-mapp/$repo/code-scanning/default-setup" --jq '{state, query_suite}'
```

When the suite is `default`, switch it with `gh api --method PATCH "repos/dnd-mapp/$repo/code-scanning/default-setup" -f query_suite=extended`.

### 11. Set the check-run failure thresholds

The CodeQL check run of a pull request fails on its own thresholds, apart from the ruleset. Set them to match the Default branch ruleset on the Advanced Security settings page of the repository, `https://github.com/dnd-mapp/<name>/settings/security_analysis`. Under Code Security and then Protection rules, set the check runs failure threshold:

| Setting                        | Value               |
|:-------------------------------|:--------------------|
| Security alert severity level  | Medium or higher    |
| Standard alert severity level  | Errors and warnings |

The REST API has no endpoint for these thresholds, so check them on the same page.

## Releases

Follow this section when the repository publishes versions as `vX.Y.Z` tags and GitHub Releases. The release workflows open the release pull request and create the tag as the `dnd-mapp` app, so the [core steps](#core-steps) already gave them access.

1. Copy the six release rulesets of `config-markdown`. They reserve the `chore/release-*` branches and the creation of stable tags for the release workflows, protect those tags, and block every other tag.

    ```bash
    gh api "repos/dnd-mapp/config-markdown/rulesets" --jq '.[] | select(.name | startswith("Default branch") | not) | .id' | while read -r id; do
        gh api "repos/dnd-mapp/config-markdown/rulesets/$id" --jq '{name, target, enforcement, conditions, rules, bypass_actors}' |
            gh api --method POST "repos/dnd-mapp/$repo/rulesets" --input - --jq .name
    done
    ```

2. Turn on immutable releases, so a published release and its tag cannot change:

    ```bash
    gh api --method PUT "repos/dnd-mapp/$repo/immutable-releases"
    ```

3. Copy `push-main.yaml` from `config-markdown` instead of `.github`, since its `tag` job tags the merged release pull request. Copy `prepare-release.yaml` from `config-markdown` as well.
4. Copy `release.yaml` from `config-renovate` when the release only creates a GitHub Release. The sections below name the copy for a package or an image.
5. Add a `CHANGELOG.md` in the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format, and describe the release steps in `docs/contributing/README.md`, as `config-markdown` does.

## npm packages

Follow this section, after the one on [releases](#releases), when the repository publishes a package to npm.

1. Copy `release.yaml` from `config-markdown`. Its `publish` job stages the package with provenance from the `npm` environment, which GitHub creates on the first run.
2. Set the homepage of the repository to the package page: `gh repo edit "dnd-mapp/$repo" --homepage "https://www.npmjs.com/package/@dnd-mapp/<package>"`.
3. On npmjs.com, add a trusted publisher to the settings of the package: GitHub Actions, the organization `dnd-mapp`, the repository, the workflow `release.yaml`, and the environment `npm`. The workflow has no npm token, so publishing fails without it.
4. Run the release within 2 days of adding the trusted publisher. A new configuration expires unless a publish through it succeeds within 2 days, and an expired one must be deleted and created again. npm cannot edit a trusted publisher, so the same window applies when you recreate the one of an existing package.

## Docker

Follow this section, after the one on [releases](#releases), when the repository publishes an image to Docker Hub, as `api-content` does.

1. Share the Docker Hub credentials of the organization with the repository, using the `id` from [step 8](#8-share-the-organization-secret-and-variable):

    ```bash
    for secret in DOCKERHUB_TOKEN_READ DOCKERHUB_TOKEN_WRITE DOCKERHUB_TOKEN_DELETE; do
        gh api --method PUT "orgs/dnd-mapp/actions/secrets/$secret/repositories/$id"
    done
    gh api --method PUT "orgs/dnd-mapp/actions/variables/DOCKERHUB_USERNAME/repositories/$id"
    ```

2. Copy `release.yaml`, `pull-request-closed.yaml`, and `.github/actions/docker` from `api-content`. Its [Docker guide](https://github.com/dnd-mapp/api-content/blob/main/docs/docker.md) describes the token that each job uses.

## GitHub Pages

Follow this section when the repository deploys a site to GitHub Pages, as `ui` does with its Storybook.

1. Copy the deploy jobs and actions from `ui`, which push each build to a folder of the `gh-pages` branch. Its [contributing guide](https://github.com/dnd-mapp/ui/blob/main/docs/contributing/README.md) describes them.
2. Once the first deploy has created the `gh-pages` branch, serve Pages from its root:

    ```bash
    gh api --method POST "repos/dnd-mapp/$repo/pages" -f 'source[branch]=gh-pages' -f 'source[path]=/'
    ```

    GitHub creates the `github-pages` environment, limited to the `gh-pages` branch.

3. Add the build job of the site to the required status checks of the Default branch ruleset, as `ui` does with `Build Storybook`.

## Audit

Each item names the call that shows a setting, so the same calls can compare an existing repository with this checklist. Compare the output with the reference repository: `.github` for the core steps, `config-markdown` for releases and npm packages, `api-content` for Docker, and `ui` for GitHub Pages.

- General settings: `gh api "repos/dnd-mapp/$repo" --jq '{has_wiki, has_discussions, allow_merge_commit, allow_squash_merge, allow_rebase_merge, allow_auto_merge, allow_update_branch, delete_branch_on_merge, merge_commit_title, merge_commit_message}'`.
- Team access: `gh api "repos/dnd-mapp/$repo/teams" --jq '.[] | "\(.slug): \(.permission)"'`.
- Direct collaborators: `gh api "repos/dnd-mapp/$repo/collaborators?affiliation=direct" --jq '.[].login'`, which prints nothing.
- Labels: `gh label list --repo "dnd-mapp/$repo"`, which prints nothing.
- Shared files: `gh api "repos/dnd-mapp/$repo/git/trees/main?recursive=1" --jq '.tree[] | "\(.sha) \(.path)"'`, whose blob SHAs match the source of each identical file.
- App access: the [installed apps page](https://github.com/organizations/dnd-mapp/settings/installations). The token of `gh` cannot list the repositories of an installation.
- Organization secrets: `gh api "repos/dnd-mapp/$repo/actions/organization-secrets" --jq '.secrets[].name'`.
- Organization variables: `gh api "repos/dnd-mapp/$repo/actions/organization-variables" --jq '.variables[].name'`.
- Rulesets: `gh api "repos/dnd-mapp/$repo/rulesets" --jq '.[].id'`, then `gh api "repos/dnd-mapp/$repo/rulesets/<id>"` for the rules of each.
- Code security configuration: `gh api "repos/dnd-mapp/$repo/code-security-configuration" --jq '{status, name: .configuration.name}'`.
- Code scanning default setup: `gh api "repos/dnd-mapp/$repo/code-scanning/default-setup" --jq '{state, query_suite}'`.
- Check-run failure thresholds: the Advanced Security settings page of the repository. The REST API has no endpoint for them.
- Discussion categories: `gh api graphql -f query='query($name: String!) {repository(owner: "dnd-mapp", name: $name) {discussionCategories(first: 10) {nodes {slug}}}}' -F name="$repo" --jq '.data.repository.discussionCategories.nodes[].slug'`, which prints `announcements`, `ideas`, and `q-a`.
- Environments: `gh api "repos/dnd-mapp/$repo/environments" --jq '.environments[].name'`.
- Immutable releases: `gh api "repos/dnd-mapp/$repo/immutable-releases" --jq .enabled`.
- Pages: `gh api "repos/dnd-mapp/$repo/pages" --jq '{build_type, source}'`.
