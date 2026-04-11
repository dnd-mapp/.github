# Mise Configuration Guide

This document describes how [mise-en-place (mise)](https://mise.jdx.dev/) should be configured across repositories in the **dnd-mapp** organization.

## What is mise?

`mise` is a polyglot tool version manager used to ensure every developer on the team works with identical runtime and tooling versions. Rather than relying on globally installed (and potentially mismatched) tools, mise resolves the required versions for each repository directly from its `package.json`.

All active repositories in this organization require `mise` as a prerequisite for local development.

---

## Managed Tools

All Node.js-based repositories in this organization manage the following tools through mise:

| Tool    | Purpose                         |
|:--------|:--------------------------------|
| Node.js | JavaScript / TypeScript runtime |
| pnpm    | Package manager                 |

---

## Global mise Configuration

No per-repository `mise.toml` or `.tool-versions` file is needed. Instead, mise is configured globally to treat `package.json` as an idiomatic version file for the managed tools. This is done by setting `idiomatic_version_file_enable_tools` in the global mise configuration file (`~/.config/mise/config.toml`):

```toml
[settings]
idiomatic_version_file_enable_tools = ["node", "pnpm"]
```

With this setting in place, mise automatically resolves:

- the **Node.js** version from the `engines.node` field in `package.json`
- the **pnpm** version from the `packageManager` field in `package.json`

Because all version information lives exclusively in `package.json`, there is no risk of version drift between mise config and the package manifest.

---

## Installing mise

Follow the [official getting started guide](https://mise.jdx.dev/getting-started.html) to install mise on your machine.

---

## Local Setup Workflow

Once mise is installed and configured, the setup flow for any repository in this organization is:

```bash
git clone https://github.com/dnd-mapp/<repo-name>.git
cd <repo-name>
mise install     # Installs the correct Node.js and pnpm versions from package.json
pnpm install     # Installs project dependencies
```

`mise install` reads the tool versions from `package.json` and provisions them into mise's local toolchain. No global version changes are made to your system.

---

## Relationship to `package.json` Engine Constraints

All repositories declare engine constraints in `package.json` as a second layer of enforcement via the `engines`, `devEngines`, and `packageManager` fields. The `devEngines` configuration uses `onFail: "error"`, which means pnpm will hard-fail if the active Node.js or pnpm version does not satisfy the declared constraint. `mise` is the recommended way to satisfy these constraints, and since it reads directly from `package.json`, the two are always in sync.

---

## CI/CD Integration

In GitHub Actions, tool setup is handled by the shared composite action [`.github/actions/setup-tools`](../.github/actions/setup-tools/action.yaml). It does **not** use mise directly — instead it uses the official `pnpm/action-setup` and `actions/setup-node` actions, with `node-version-file: 'package.json'` to read the required Node.js version from the `engines.node` field.

This means `package.json` is the single source of truth for both local development (via mise) and CI.

---

## Troubleshooting

**`mise: command not found`**

Mise is not installed or not activated in your current shell. Follow the install steps above and reload your shell.

**`pnpm: This version of pnpm requires at least Node.js ...`**

Your active Node.js version does not satisfy the constraint. Run `mise install` in the repo root to switch to the correct version.

**`ERR_PNPM_BAD_PM_VERSION`**

The active pnpm version does not match `packageManager` in `package.json`. Run `mise install` to activate the correct pnpm version.

**mise is not picking up the versions from `package.json`**

Ensure `idiomatic_version_file_enable_tools` is set correctly in `~/.config/mise/config.toml`. You can verify what mise currently resolves by running:

```bash
mise current
```
