# .github 🛡️

Central repository for the **dnd-mapp** organization's community health files, global GitHub Actions, and shared documentation.

## 📌 Overview

This repository serves as the administrative hub for the `dnd-mapp` organization. It houses organization-wide configurations, issue templates, and profile READMEs to ensure a consistent experience across all of our projects.

Files located here are automatically applied to all repositories within the organization unless overridden by a repository-specific version.

## 🗂️ Repository Structure

*   `./workflow-templates/`: Shared GitHub Action templates for CI/CD consistency.
*   `./ISSUE_TEMPLATE/`: Standardized templates for bug reports, feature requests, and support.
*   `./profile/`: Contains the `README.md` that appears on the `dnd-mapp` organization profile page.
*   `CONTRIBUTING.md`: Global guidelines for contributing to our projects.
*   `CODE_OF_CONDUCT.md`: Our standards for community behavior.
*   `SECURITY.md`: Instructions on how to report security vulnerabilities.

## 🚀 Usage

### Global Templates

The templates defined in this repository are automatically picked up by other repos in the organization. If you want to add a new organization-wide issue template, add it to the `ISSUE_TEMPLATE` directory here.

### Overriding Defaults

If a specific project requires a unique configuration (e.g., a different `CONTRIBUTING.md`), you can create that file within that specific repository's `.github/` folder to override these global defaults.

## 🤝 Contributing

Since these files affect the entire organization, changes to this repository should be handled with care:

1. **Open an Issue**: Discuss the proposed change or addition.
2. **Pull Request**: Submit your changes for review.
3. **Review**: At least one organization maintainer must approve changes before merging.

---

*Maintained by the dnd-mapp team.*
