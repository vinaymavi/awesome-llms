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
- Install your first skill and verify your setup quickly
- Learn how to run skill scripts from terminal/CLI environments
- Understand how to reference installed skills in VS Code or Copilot CLI workflows

## How to Use

### Step 1: Install the skill

Using GitHub CLI (recommended for first-time users):

```bash
gh repo clone vinaymavi/awesome-llms
cd awesome-llms
```

Then copy this directory into your local skills path:

```bash
cp -r skills/hello-world <your-local-skills-directory>/hello-world
```

### Step 2: Run on your platform

- Unix/Linux/macOS:
  ```bash
  sh assets/hello_world.sh
  ```
- Windows CMD:
  ```bat
  assets\hello_world.bat
  ```
- PowerShell:
  ```powershell
  ./assets/hello_world.ps1
  ```

### Step 3: Verify the output

Expected terminal output:

```text
Hello, World!
```

## Practical Example

```text
Input: Run the Hello World skill from terminal.
Process: Script checks Python first, then falls back to native shell echo output.
Output: Hello, World!
```

### Copilot CLI integration example

```bash
gh copilot suggest "Use the hello-world skill and print hello world"
```

## Requirements

- **VS Code Version**: 1.85.0 or later
- **Languages**: Python (preferred), shell/cmd/PowerShell fallback supported
- **External Tools**: None required for fallback paths

## Troubleshooting

### Python is installed but not detected
**Solution**: Confirm `python` or `python3` is available in `PATH` and rerun the platform script.

### Script permission denied on Unix/macOS
**Solution**: Run `chmod +x assets/hello_world.sh` and retry.

### PowerShell execution policy blocks script
**Solution**: Run with `powershell -ExecutionPolicy Bypass -File .\assets\hello_world.ps1`.

## Best Practices

1. Keep skill scripts small and focused on one behavior.
2. Prefer Python for portable logic and provide clear shell fallbacks.
3. Document expected output so new users can quickly verify success.

## Version History

- **1.0.0** (2026-05-23): Initial Hello World skill release.
