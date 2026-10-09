# Governance

This page describes how D&D Mapp makes decisions: who maintains the repositories, who may open pull requests, and how someone becomes a maintainer. It applies to every [D&D Mapp repository](https://github.com/dnd-mapp).

## Roles

### Maintainers

The maintainers are the human members of the `reviewers` team of the D&D Mapp organization on GitHub. D&D Mapp has a single maintainer today, [NoNamer777](https://github.com/NoNamer777).

The maintainers:

- Review and merge pull requests.
- Cut releases.
- Triage the issues on the [D&D Mapp project](https://github.com/orgs/dnd-mapp/projects/10).
- Manage the organization settings and the membership of its teams.
- Create new repositories, following the [checklist for new repositories](docs/new-repository.md).

### Contributors

Everyone who opens an issue or takes part in Discussions is a contributor. The [contributing guide](CONTRIBUTING.md#how-to-contribute) describes where each kind of contribution goes.

Only maintainers open pull requests. A pull request from a fork is closed with a pointer to open an issue instead. This is a policy rather than a setting, since GitHub cannot turn off forking for a public repository.

### dnd-mapp-bot

[`dnd-mapp-bot`](https://github.com/dnd-mapp-bot) is a second account of NoNamer777 and a member of the `reviewers` team. It exists only to review the pull requests that agents open in the name of NoNamer777, since GitHub does not let anyone approve their own pull request. It is not a separate maintainer and makes no decisions of its own.

## Agent-written contributions

Contributions written by an AI agent are welcome. The human who opens the pull request answers for it as for their own work, and it gets the same review as any other pull request.

Keep an agent-written pull request small where possible and focused on one intent. It follows the [contributing guide](CONTRIBUTING.md) like any other pull request.

## Decisions

Proposals happen in issues and Discussions, in the repository they concern or in the [organization discussions](https://github.com/orgs/dnd-mapp/discussions) when they span repositories. Anyone may comment on a proposal.

NoNamer777 has the final say on every decision. Once the `reviewers` team has at least two human maintainers, decisions move to lazy consensus among the maintainers. A proposal is then accepted when no maintainer objects to it within 7 days.

## Disagreements

Resolve a technical disagreement in the issue or Discussion where it came up, under the decision model above.

Report a conduct problem as the [code of conduct](CODE_OF_CONDUCT.md#reporting-an-issue) describes, by email to [conduct@dndmapp.nl.eu.org](mailto:conduct@dndmapp.nl.eu.org). Never raise it in a public issue, Discussion, or pull request.

## Becoming a maintainer

Maintainers join by invitation only. The maintainers invite someone based on their record of good issues, reviews, and activity in Discussions.
