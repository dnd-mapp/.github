# Context

## Glossary

### Epic

A large unit of work that groups related Stories toward a single feature or goal. An Epic is considered **done** when all its child issues are closed. Epics are tracked as GitHub Issues using the "Epic" Issue Type.

**Issue Type color:** purple — configured at the GitHub organization level, not per repository

**Required fields:** Goal (outcome statement), Acceptance Criteria (bullet checklist)
**Optional fields:** Background, Out of Scope, References
**Project fields:** Priority (P0 – P3), Target Quarter (Q1 YYYY format)
**Child issues:** tracked via GitHub native sub-issues
**Dependencies:** tracked via GitHub native "blocked by" / "blocking" relationships

**Statuses:**

- `Backlog` — exists but not actively being worked on
- `In Progress` — child issues are actively being worked on
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Epics are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Story

A user-facing unit of work that delivers a single slice of value to a specific persona. Stories are child issues of an Epic, tracked via GitHub native sub-issues.

**Issue Type color:** yellow — configured at the GitHub organization level, not per repository

**Format:** "As a [persona], I want [goal], so that [reason]."

**Required fields:** User Story (the formatted sentence), Acceptance Criteria (bullet checklist)
**Optional fields:** References
**Project fields:** Priority (P0–P3), Story Points (1, 2, 3, 5, 8, 13)

**Statuses:**

- `Backlog` — exists but not groomed or ready to be worked on
- `Ready` — groomed and actionable; can be picked up
- `In Progress` — actively being worked on
- `In Review` — implementation complete; PR open and under review
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Stories are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Story Points

A relative measure of **complexity, effort, and uncertainty** for a Story. Points are not time estimates — a 2 is twice as complex/uncertain as a 1, not "2 hours."

| Points | Meaning                                                            |
|--------|--------------------------------------------------------------------|
| **1**  | Trivial — well-understood, no unknowns, minimal work               |
| **2**  | Simple — clear solution, little effort, no surprises expected      |
| **3**  | Moderate — some thought required, solution is mostly known         |
| **5**  | Significant — meaningful work, a few unknowns or moving parts      |
| **8**  | Complex — multiple components involved, notable uncertainty        |
| **13** | Very complex — large scope or high uncertainty; consider splitting |

Valid values: 1, 2, 3, 5, 8, 13. A Story estimated at 13 is a signal it should be split, not a commitment to deliver it as-is.
