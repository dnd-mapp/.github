# Contributing to D&D Mapp

First off, thank you for your interest in D&D Mapp! We appreciate your support in making our tools better for the tabletop community.

To maintain the quality of our projects and ensure a smooth development process, please follow these guidelines.

## Code of Conduct

By participating in this organization, you agree to abide by our [Code of Conduct](https://github.com/dnd-mapp/.github/tree/main?tab=coc-ov-file). Please report any unacceptable behavior to [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com).

## How Can I Contribute?

**Please note:** At this time, the D&D Mapp organization is **not accepting Pull Requests from outside contributors**.

However, we value your feedback and ideas! You can contribute by opening issues in the relevant repositories for the following:

### Reporting Bugs

* **Search Existing Issues:** Before opening a new issue, please check if the bug has already been reported.
* **Be Detailed:** Include steps to reproduce the bug, what you expected to happen, and what actually happened.
* **Environment Info:** Include relevant details like your browser, OS, or version of the tool you are using.

### Suggesting Enhancements

* **Describe the Feature:** Explain the "what" and the "why." How would this benefit users of D&D Mapp?
* **Provide Context:** If possible, include mockups or examples of how the feature might look or work.

### General Feedback

* If you have questions or general feedback that doesn't fit into a bug or feature request, feel free to open a "Question" or "Discussion" issue.

## Internal Development Standards

*For maintainers and internal contributors:*

### Environment Setup

We use [Mise](https://mise.jdx.dev/) to manage our runtime versions (Node.js, etc.) and [pnpm](https://pnpm.io/) as our package manager.

```bash
# Ensure tools are installed
mise install

# Install dependencies
pnpm install
```

### Linting & Formatting

To ensure consistency across the organization, we use `eslint`, `stylelint`, `markdownlint`, and `prettier`. Please ensure your editor is configured to use these or run the project's linting scripts before committing:

```bash
pnpm run lint
```

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps us maintain a clear and readable history.

* Example: `feat(api): add new map layer support`
* Example: `fix(ui): resolve alignment issue on mobile`

### Release Process

Our release process is automated via a release pipeline.

1. **Manual Changelog:** Before triggering a release, the `CHANGELOG.md` must be manually updated to include all "Unreleased" changes.
2. **Trigger:** Once the changelog is ready and merged, the release pipeline can be manually triggered to deploy the new version.

## License

Projects within the D&D Mapp organization are licensed under the **MIT License**. You can find the full license text in our [LICENSE file](https://github.com/dnd-mapp/.github/tree/main?tab=MIT-1-ov-file).

By suggesting changes or reporting issues, you agree that your feedback may be used to improve the software under this license.
