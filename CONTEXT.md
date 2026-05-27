# Context

## Glossary

### Epic

A large unit of work that groups related Stories toward a single feature or goal. An Epic is considered **done** when all its child issues are closed. Epics are tracked as GitHub Issues using the "Epic" Issue Type.

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
