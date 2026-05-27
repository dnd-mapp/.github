# ADR 0001: Use a custom Project field for Target Quarter instead of GitHub Milestones

## Status
Accepted

## Context
Epics need a planning horizon — a way to express which quarter a piece of work is targeted for. GitHub Milestones are a natural candidate: they have a title, a due date, and a progress indicator.

## Decision
Use a custom `Target Quarter` field (format: `Q1 YYYY`) on the GitHub Project, scoped to the Epic Issue Type, rather than GitHub Milestones.

## Consequences
- **Target Quarter is scoped to Epics** — other issue types (Stories, Bugs) are not affected.
- **No per-repo setup required** — the field lives at the Project level, not per-repository.
- **Milestones remain available for versioned releases** — their intended semantic (a specific deliverable shipping) is preserved.
- Trade-off: Target Quarter is not visible on the issue list view outside of the Project board, whereas Milestones are. This is acceptable since Epics are primarily planned and tracked in the Project.
