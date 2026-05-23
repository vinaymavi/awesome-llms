---
name: hello-world
description: Beginner-friendly first skill that prints Hello World with Python-first execution and OS fallbacks
categories: [beginner, learning, examples]
metadata:
  difficulty: beginner
  tags: [hello-world, onboarding, cli, vscode, copilot]
---

# Hello World Skill

## Overview

This beginner skill is a first hands-on example for the Awesome LLMs ecosystem.
It teaches the expected skill file structure, basic script execution, and cross-platform compatibility.

### Key Features

- Python-first execution using `assets/hello_world.py`
- Built-in fallback behavior for systems without Python
- Script support for Unix/Linux/macOS (`.sh`), Windows CMD (`.bat`), and PowerShell (`.ps1`)

## When to Use

Use this skill when you want to:

- Verify your skill installation is working correctly
- Get a quick "Hello, World!" output to test your setup
- Learn how installed skills work with VS Code Copilot Chat
- Practice using skills with natural language prompts

## How to Use

### Installation

Install this skill using GitHub CLI:

```bash
gh skills install vinaymavi/awesome-llms hello-world
```

### Invoke the Skill

Once installed, use any of these prompts in VS Code Copilot Chat or GitHub Copilot CLI:

- **Simple command**: "Run Hello World"
- **Skill reference**: "Run Hello World Skill"
- **Contextual prompts**:
  - "Hello World from Skills"
  - "Hello World from VS Code Skills"
  - "Use the hello-world skill"
  - "Execute hello-world"

### Example Copilot Chat Interaction

**Prompt**: "Run Hello World"

**Output**:

```text
Hello, World!
```

The skill automatically:

1. Checks if Python is available and runs `hello_world.py`
2. Falls back to your platform's native shell if Python isn't available
3. Returns the greeting in your terminal

### Verify the Output

Expected terminal output:

```text
Hello, World!
```

## Requirements

- **VS Code Version**: 1.85.0 or later (with GitHub Copilot Chat)
- **GitHub Copilot**: Installed and authenticated
- **Languages**: Python (preferred), or shell/cmd/PowerShell available on your system
- **External Tools**: None required; falls back to native system commands if Python unavailable

## Installation Requirements

- **GitHub CLI**: `gh` command-line tool installed and authenticated
- Command: `gh skills` support (requires latest GitHub CLI version)

## Troubleshooting

### Skill not recognized in Copilot Chat

**Solution**: Verify the skill is properly installed with `gh skills list` and ensure VS Code is reloaded.

### Python is installed but not detected

**Solution**: The skill automatically detects Python in your PATH. If unavailable, the shell fallback is used. Restart your terminal and try again.

### No output when invoking the skill

**Solution**:

1. Check that GitHub Copilot Chat is active in VS Code
2. Verify the skill was installed: `gh skills list`
3. Try using a specific prompt variant listed in the "Invoke the Skill" section
4. Restart VS Code and retry

### Skill installation fails

**Solution**:

- Ensure `gh` CLI is authenticated: `gh auth status`
- Update GitHub CLI to latest version: `gh upgrade`
- Check your internet connection and repository access

## Best Practices

1. Keep skill scripts small and focused on one behavior.
2. Prefer Python for portable logic and provide clear shell fallbacks.
3. Document expected output so new users can quickly verify success.

## Version History

- **1.0.0** (2026-05-23): Initial Hello World skill release.
