# Contributing to Awesome LLMs

Thank you for your interest in contributing! This document provides guidelines and instructions for submitting skills, agents, and extensions.

## Before You Start

- Review existing [skills](./skills/) and [agents](./agents/) to avoid duplication
- Ensure your contribution aligns with the project's quality standards
- Read through this entire document

## Contribution Types

### 1. Adding a New Skill

**What is a Skill?**
A skill is a reusable workflow module that handles specific development tasks. Skills are self-contained packages with documentation and optional supporting assets.

**Steps:**

1. Create a folder in `skills/` with your skill name (use kebab-case)
2. Create a `SKILL.md` file with the following structure:

```markdown
---
name: your-skill-name
description: Brief description of what your skill does
categories: [category1, category2]  # e.g., testing, documentation, refactoring
metadata:
  difficulty: beginner|intermediate|advanced
  tags: [tag1, tag2]
---

# Your Skill Name

## Overview
Detailed explanation of your skill's purpose and capabilities.

## When to Use
Explain the scenarios and use cases for this skill.

## How to Use
Step-by-step instructions for using the skill.

## Example
Provide a concrete example of the skill in action.

## Requirements
List any dependencies or prerequisites.

## Configuration
If applicable, explain configuration options.
```

3. Create a `README.md` with:
   - Quick start guide
   - Detailed usage instructions
   - FAQ or troubleshooting tips

4. Add supporting files in an `assets/` folder:
   - Templates
   - Scripts
   - Example code
   - Configuration files

5. Update the main [README.md](./README.md) to feature your skill

### 2. Adding a New Agent

**What is an Agent?**
An agent is a specialized autonomous module that handles targeted development scenarios.

**Steps:**

1. Create a folder in `agents/` with your agent name
2. Create an `[agent-name].agent.md` file following VS Code agent format
3. Create a `README.md` with documentation
4. Include any supporting configuration files

### 3. Adding an Extension

Extensions follow standard VSCode extension guidelines. Create a folder in `extensions/` and include:
- `package.json`
- `extension.js` or TypeScript source
- `README.md`
- `LICENSE`

## Quality Standards

### Documentation
- [ ] Clear, concise descriptions of purpose and functionality
- [ ] Step-by-step usage instructions
- [ ] Working examples
- [ ] Troubleshooting section (if applicable)

### Code Quality
- [ ] Follows style conventions of the language
- [ ] No hardcoded paths or credentials
- [ ] Handles edge cases and errors gracefully
- [ ] Includes comments for complex logic

### Testing
- [ ] Tested in your local VS Code environment
- [ ] Works with the documented versions of dependencies
- [ ] No breaking changes introduced

## Submission Process

1. **Fork the repository** and create a feature branch
   ```bash
   git checkout -b skills/my-awesome-skill
   ```

2. **Add your files** following the structure above

3. **Validate your submission**
   ```bash
   npm run validate
   npm run lint
   ```

4. **Commit with clear messages**
   ```bash
   git commit -m "Add new skill: my-awesome-skill"
   ```

5. **Push to your fork**
   ```bash
   git push origin skills/my-awesome-skill
   ```

6. **Open a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots/examples if applicable
   - Link to your skill's documentation

## PR Review Checklist

Your PR will be reviewed for:
- [ ] Completeness of documentation
- [ ] Code quality and readability
- [ ] Adherence to project structure
- [ ] Uniqueness and value to the community
- [ ] Proper formatting and syntax

## Code of Conduct

Be respectful, inclusive, and constructive. We're building a community resource, and all contributors are valued.

## Questions?

- Check existing issues and discussions
- Open a new [discussion](../../discussions)
- Review [VS Code documentation](https://code.visualstudio.com/docs)

## Recognition

Contributors are recognized in:
- The main README
- Monthly contributor spotlights
- Release notes

Thank you for contributing! 🎉
