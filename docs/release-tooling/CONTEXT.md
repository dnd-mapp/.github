# Release Tooling

Shared vocabulary for how `dnd-mapp` repos tag, validate, and publish releases, and for the composite GitHub Actions that implement pieces of that process.

## Language

**Release**:
The GitHub Release and its mirroring "Announcements" Discussion, created together for a pushed `vX.Y.Z` tag. Distinct from _tagging_, the manual act of creating and pushing that tag (and, for `v1.x.y` versions, moving the floating `v1` tag), which triggers it but isn't part of it.
_Avoid_: using "release" to mean the tag push itself, that's "tagging"; "release" specifically means the GitHub Release/Discussion pair produced from it.

**Self-hosting** (a repo, for a release-tooling concern):
A repo consuming its own composite action, via `uses: ./`, for the one release-tooling concern it owns and implements. E.g. `action-validate-release-tag`'s own `release.yml` self-hosts tag validation.
_Avoid_: "self-releasing", too easily confused with cutting a release at all; self-hosting refers specifically to using one's own action for one's own concern.

**Cross-consumption**:
A repo calling one of the other release-tooling action repos externally (`uses: dnd-mapp/<repo>@<sha>`), for a concern it doesn't own itself. `action-setup-workspace` and `tsconfig` cross-consume all three release-tooling actions; each of the three action repos cross-consumes the other two for its own release.
_Avoid_: "dependency"/"depends on", too generic, doesn't capture that this is specifically about which repo owns which release-tooling concern.

## Relationships

- A **Release** is triggered by tagging, but tagging is not itself part of the Release.
- A repo either **self-hosts** or **cross-consumes** each of the three release-tooling concerns (tag validation, release-notes extraction, release creation) it needs; it never duplicates a concern's logic inline.
