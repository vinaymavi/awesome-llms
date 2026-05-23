# Awesome LLMs

A curated collection of **VSCode Skills**, **Agents**, and **Extensions** for enhanced development workflows powered by LLMs.

## About

This repository is a community-driven collection of reusable VSCode customizations designed to extend GitHub Copilot and other LLM-powered tools. Whether you're building domain-specific skills for code generation, creating custom agents for specialized tasks, or packaging extensions for broader use, this is your hub for discovery and contribution.

## What's Included

### 🎯 Skills
Reusable workflow modules that handle specific development tasks:
- **Domain-specific knowledge** packages (architecture, testing, deployment)
- **Workflow automations** for common patterns
- **Code templates and generators**
- **Documentation and guides**

### 🤖 Agents
Specialized autonomous agents for targeted development scenarios:
- **Code analysis and review agents**
- **Bug fixing and debugging agents**
- **Architecture and refactoring agents**
- **Testing and quality assurance agents**

### 🔧 Extensions
VSCode extensions that integrate with your favorite tools and platforms.

## Quick Start

### Discovering Skills and Agents

Browse the [Skills](./skills/) and [Agents](./agents/) directories to find what you need.

### Using a Skill

1. Copy the skill folder to your local VS Code extensions directory
2. Reference it in your agent instructions or use it via chat

### Contributing

Have a skill or agent you'd like to share? See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Project Structure

```
awesome-llms/
├── skills/                 # Reusable skill modules
│   └── [skill-name]/
│       ├── SKILL.md       # Skill definition and documentation
│       ├── README.md      # Usage guide
│       └── assets/        # Supporting files (templates, scripts)
├── agents/                # Custom agent definitions
│   └── [agent-name]/
│       ├── [agent-name].agent.md
│       └── README.md
├── extensions/            # VSCode extensions
│   └── [extension-name]/
├── docs/                  # General documentation
└── CONTRIBUTING.md        # Contribution guidelines
```

## Featured Skills

- **Architecture Blueprint Generator** - Analyze codebases and generate detailed architectural documentation
- **Code Tour** - Create CodeTour walkthroughs with persona-targeted step-by-step instructions
- **Documentation Writer** - Diátaxis-based technical documentation expert
- **Python Fact-Grounded Coding** - Python development grounded in runtime facts and Pylance diagnostics

## Best Practices

- **Clear Documentation**: Each skill and agent should have comprehensive README
- **Test Your Contributions**: Ensure skills/agents work as intended
- **Follow Templates**: Use provided templates for consistency
- **Semantic Versioning**: Tag releases appropriately

## Resources

- [VS Code Agent Documentation](https://code.visualstudio.com/docs)
- [GitHub Copilot Skills Guide](https://github.com/github/awesome-copilot)
- [CodeTour Extension](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) file for details.

## Community

- **Report Issues**: [GitHub Issues](https://github.com/yourusername/awesome-llms/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/awesome-llms/discussions)
- **Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

Made with ❤️ by the VS Code community
