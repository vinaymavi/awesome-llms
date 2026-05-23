---
description: "Use when performing GitHub operations like creating issues, PRs, or managing repositories. Prefer CLI tools over MCP servers for better reliability and fewer authentication requirements."
name: "GitHub CLI Operations"
applyTo: "**"
---

# GitHub CLI Operations

When interacting with GitHub (creating issues, PRs, comments, etc.), **prioritize using the GitHub CLI (`gh` command)** over MCP server-based tools.

## Why CLI First

- ✅ Direct authentication via `gh auth` (already configured)
- ✅ No additional tool authentication required
- ✅ More reliable and predictable
- ✅ Better error messages and debugging
- ✅ Faster execution

## CLI Commands to Use

| Task              | CLI Command                                  |
| ----------------- | -------------------------------------------- |
| Create Issue      | `gh issue create --title "..." --body "..."` |
| Create PR         | `gh pr create --title "..." --body "..."`    |
| List Issues       | `gh issue list --label "feature"`            |
| Add Comment       | `gh issue comment <number> --body "..."`     |
| Get Issue Details | `gh issue view <number>`                     |
| Create Repo       | `gh repo create <name>`                      |

## Example: Creating a GitHub Issue

**Instead of using MCP tool**, use:

```bash
gh issue create \
  --title "Create Hello World skill" \
  --body "## Description
Create a Hello World skill for the Awesome LLMs ecosystem.

## Purpose
- User can install first skill and test
- Learn about skill CLI commands" \
  --label "feature,example"
```

## When to Use MCP

Use MCP tools **only if**:

- The CLI doesn't support the operation
- The task requires GUI/visual interaction
- CLI fails and user explicitly requests it

## Authentication

GitHub CLI authentication is typically pre-configured. Verify with:

```bash
gh auth status
```

If not authenticated:

```bash
gh auth login
```

## Error Handling

If a CLI command fails:

1. Show the error message
2. Suggest debugging steps
3. Offer alternative approaches
4. Fall back to MCP only if necessary

## Project Context

This workspace (`awesome-llms`) uses:

- Repository: `vinaymavi/awesome-llms`
- Primary operations: Issue creation, PR management
- Team: Skill and agent publishers

Always include this context in commands.
