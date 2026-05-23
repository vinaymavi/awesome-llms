# Template Skill - Usage Guide

## Quick Start

1. Copy this skill to your VS Code extensions directory
2. Reference it in your agent instructions
3. Use it via the chat interface

## Installation

### Option 1: Manual Installation

```bash
# Copy to local skills directory
cp -r template-skill ~/.vscode/extensions/
```

### Option 2: From Repository

```bash
# Clone and reference from repository
git clone https://github.com/yourusername/awesome-llms.git
# Update your VS Code settings to point to skills directory
```

## Usage Examples

### Example 1: Basic Usage

```
User: "Use the template skill to..."
Agent: [Skill executes and produces results]
```

### Example 2: Advanced Usage

```
User: "With the template skill, please..."
Agent: [Skill uses advanced features]
```

## Configuration

Update your `.instructions.md` or agent configuration:

```markdown
## Available Skills

- template-skill: Use this when you need to...
```

## FAQs

**Q: How do I know if this skill executed successfully?**
A: [Answer with observable indicators]

**Q: Can I customize the skill's behavior?**
A: [Explain customization options]

**Q: What should I do if I encounter an error?**
A: [Point to troubleshooting section or support]

## Support

- Check the main [SKILL.md](./SKILL.md) for technical details
- See [Troubleshooting](./SKILL.md#troubleshooting) section
- Open an issue on GitHub

## Related Skills

- [Another relevant skill]
- [Partner skill that works well together]
