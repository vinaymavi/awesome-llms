# Hello World Skill

Beginner-friendly example skill for learning the Awesome LLMs skill ecosystem.

## Quick Start

1. Clone with GitHub CLI:
   ```bash
   gh repo clone vinaymavi/awesome-llms
   cd awesome-llms
   ```
2. Install the skill:
   ```bash
   cp -r skills/hello-world <your-local-skills-directory>/hello-world
   ```
3. Run it:
   - Unix/Linux/macOS: `sh assets/hello_world.sh`
   - Windows CMD: `assets\hello_world.bat`
   - PowerShell: `./assets/hello_world.ps1`
4. Confirm output: `Hello, World!`

## What this teaches

- Skill directory structure (`SKILL.md`, `README.md`, `assets/`)
- Python-first execution model
- OS fallback behavior when Python is unavailable

## Integration Guidance

- In VS Code/Copilot workflows, reference this skill by name: `hello-world`.
- GitHub Copilot CLI example:
  ```bash
  gh copilot suggest "Use the hello-world skill and print hello world"
  ```
- Use it as a starter template for building larger cross-platform skills.

## Files

- `SKILL.md` - Full skill definition and usage guidance
- `assets/hello_world.py` - Python Hello World implementation
- `assets/hello_world.sh` - Unix/Linux/macOS launcher with fallback
- `assets/hello_world.bat` - Windows CMD launcher with fallback
- `assets/hello_world.ps1` - PowerShell launcher with fallback

## Troubleshooting

See [SKILL.md](./SKILL.md#troubleshooting) for setup and runtime troubleshooting steps.
