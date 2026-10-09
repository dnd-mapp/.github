# Security policy

This policy applies to every [D&D Mapp repository](https://github.com/dnd-mapp) without a security policy of its own.

## Supported versions

Security fixes go into:

- The latest release of each package and action.
- The `main` branch of each application, and of each repository without a release yet.

The repositories keep no maintenance branches, so older releases receive no fixes. Upgrade to the latest release to get a fix.

## Reporting a vulnerability

Never report a vulnerability in a public issue, discussion, or pull request.

Report it through [GitHub private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) instead: open the Security tab of the affected repository and select "Report a vulnerability". When that does not suit you, email [security@dndmapp.nl.eu.org](mailto:security@dndmapp.nl.eu.org).

Include as much of the following as you can:

- The affected repository, and the release or commit you tested.
- A description of the vulnerability and its impact.
- The steps to reproduce it, or a proof of concept.
- A suggested fix, when you have one.

## What to expect

The maintainers aim for these response times on a best-effort basis:

- A first reply within 7 days.
- An assessment within 30 days, which says whether the report is accepted and what happens next.

A fix ships in a normal release of the affected repository. A GitHub Security Advisory then announces the vulnerability and credits you as the reporter.

## Scope

This policy covers the code in the D&D Mapp repositories. Report a vulnerability in a third-party dependency to the upstream project that maintains it.
