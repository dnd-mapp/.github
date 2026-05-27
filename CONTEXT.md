# Context

## Glossary

### Epic

A large unit of work that groups related Stories toward a single feature or goal. An Epic is considered **done** when all its child issues are closed. Epics are tracked as GitHub Issues using the "Epic" Issue Type.

**Issue Type color:** purple — configured at the GitHub organization level, not per repository

**Required fields:** Goal (outcome statement), Acceptance Criteria (bullet checklist)
**Optional fields:** Background, Out of Scope, References
**Organization fields:** Priority (P0 – P3)
**Project fields:** Target Quarter (Iteration field — configured per project with a start date and duration in weeks or days)
**Child issues:** tracked via GitHub native sub-issues
**Dependencies:** tracked via GitHub native "blocked by" / "blocking" relationships

**Statuses:**

- `Backlog` — exists but not actively being worked on
- `In Progress` — child issues are actively being worked on
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Epics are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Story

A user-facing unit of work that delivers a single slice of value to a specific persona. Stories are typically child issues of an Epic, tracked via GitHub native sub-issues. A Story without a parent Epic is allowed as an exception — if orphan Stories become frequent, it is a signal that a new Epic is needed.

**Issue Type color:** yellow — configured at the GitHub organization level, not per repository

**Format:** "As a [persona], I want [goal], so that [reason]."

**Required fields:** User Story (the formatted sentence), Acceptance Criteria (bullet checklist)
**Optional fields:** References
**Organization fields:** Priority (P0–P3), Story Points (1, 2, 3, 5, 8, 13)

**Statuses:**

- `Backlog` — exists but not groomed or ready to be worked on
- `Ready` — groomed and actionable; can be picked up
- `In Progress` — actively being worked on
- `In Review` — implementation complete; PR open and under review
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Stories are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Task

A concrete, implementation-level unit of work that is always a child of a Story. Tasks are technical steps taken by a developer to fulfil a Story — they are not user-facing and do not deliver value on their own.

**Issue Type color:** blue — configured at the GitHub organization level, not per repository

**Required fields:** Description (what to do and relevant technical context)
**Optional fields:** References
**Organization fields:** none — the parent Story owns priority and estimation

**Statuses:**

- `Backlog` — created but not yet being worked on
- `In Progress` — actively being implemented
- `In Review` — implementation complete; PR open and under review
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Tasks are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Bug

A defect or unintended behavior in the application. Bugs are standalone work items — they are not required to be children of a Story or Epic, though they may reference related issues in their References field.

**Issue Type color:** red — configured at the GitHub organization level, not per repository

**Required fields:** Steps to Reproduce, Expected Behavior, Actual Behavior, Environment / Version
**Optional fields:** Severity (S0–S3), Logs / Screenshots, References
**Organization fields:** Priority (P0–P3), Severity (S0–S3)

**Severity scale:**

| Level  | Meaning                                                               |
|:------:|:----------------------------------------------------------------------|
| **S0** | Data loss, corruption, or complete feature failure with no workaround |
| **S1** | Core flow broken; workaround exists but is painful                    |
| **S2** | Degraded experience; reasonable workaround available                  |
| **S3** | Cosmetic or minor issue; does not impact functionality                |

**Statuses:**

- `Backlog` — reported but not yet triaged or reproduced; not actionable
- `Ready` — triaged, reproduced, and understood; can be picked up
- `In Progress` — actively being fixed
- `In Review` — fix complete; PR open and under review
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Bugs are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Spike

A time-boxed investigation into an unknown or risk that is blocking or informing future work. A Spike produces a concrete artifact — a written findings document, a decision, or a proof-of-concept.

**Issue Type color:** orange — configured at the GitHub organization level, not per repository

**Required fields:** Question (what the Spike is trying to answer), Deliverable (what concrete artifact will be produced)
**Optional fields:** References
**Organization fields:** Priority (P0–P3), Time Box (days)

**Spikes are standalone** — they are not required to be children of an Epic or Story. A Spike may optionally reference a parent Epic in its References field.

**Statuses:**

- `Backlog` — exists but not yet groomed or actionable
- `Ready` — Question and Deliverable are clearly defined; can be picked up
- `In Progress` — investigation actively underway
- `Done` — closed; close reason (Completed / Not Planned / Duplicate) carries the nuance

Canceled Spikes are closed as "Not planned" and move to `Done`. There is no separate Canceled status.

### Priority

The relative urgency of a work item, used for ordering and triage. Applied to Epic, Story, and Bug. Not applicable to Task — the parent Story owns priority.

| Level  | Meaning                                                     |
|:------:|:------------------------------------------------------------|
| **P0** | Drop everything — blocking critical path or a live incident |
| **P1** | High priority — must be addressed this quarter              |
| **P2** | Normal priority — planned and scheduled                     |
| **P3** | Low priority — nice to have, no firm commitment             |

### Story Points

A relative measure of **complexity, effort, and uncertainty** for a Story. Points are not time estimates — a 2 is twice as complex/uncertain as a 1, not "2 hours."

| Points | Meaning                                                            |
|:------:|:-------------------------------------------------------------------|
| **1**  | Trivial — well-understood, no unknowns, minimal work               |
| **2**  | Simple — clear solution, little effort, no surprises expected      |
| **3**  | Moderate — some thought required, solution is mostly known         |
| **5**  | Significant — meaningful work, a few unknowns or moving parts      |
| **8**  | Complex — multiple components involved, notable uncertainty        |
| **13** | Very complex — large scope or high uncertainty; consider splitting |

Valid values: 1, 2, 3, 5, 8, 13. A Story estimated at 13 is a signal it should be split, not a commitment to deliver it as-is.
