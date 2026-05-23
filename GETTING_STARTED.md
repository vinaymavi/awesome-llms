# Getting Started

Welcome to Awesome LLMs! This guide will help you get the project up and running quickly.

## ✅ First-Time Setup

### 1. Install Dependencies

```bash
npm install
```

This installs tools for validation, linting, and index generation.

### 2. Understand the Structure

```
awesome-llms/
├── skills/              # Reusable skills for VS Code
├── agents/              # Custom agents
├── extensions/          # VS Code extensions
├── docs/                # Documentation
├── scripts/             # Utility scripts
├── .github/             # GitHub templates and workflows
├── README.md            # Project overview
├── CONTRIBUTING.md      # How to contribute
└── package.json         # Dependencies and scripts
```

## 📚 Key Documentation

- **[README.md](../README.md)** - Project overview and featured items
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines
- **[PUBLISHING.md](docs/PUBLISHING.md)** - Step-by-step publishing guide
- **[SKILL_DEVELOPMENT.md](docs/SKILL_DEVELOPMENT.md)** - Advanced skill development

## 🚀 Quick Start

### To Add a New Skill

1. **Create folder**: `skills/your-skill-name/`
2. **Copy template**: Use `skills/TEMPLATE.md` as `SKILL.md`
3. **Create README**: Copy `skills/README.md` and customize
4. **Add assets**: Create `assets/` folder with templates/scripts
5. **Validate**: Run `npm run validate`
6. **Submit**: Follow [PUBLISHING.md](docs/PUBLISHING.md)

### To Add a New Agent

1. **Create folder**: `agents/your-agent-name/`
2. **Copy template**: Use `agents/TEMPLATE.agent.md`
3. **Create README**: Document the agent
4. **Validate**: Run `npm run validate`
5. **Submit**: Follow [PUBLISHING.md](docs/PUBLISHING.md)

## 🔧 Available Scripts

```bash
# Validate all skills and agents
npm run validate

# Lint markdown files
npm run lint

# Generate index of all skills/agents
npm run index
```

## 💡 Tips

### Before Starting Development
- [ ] Read [CONTRIBUTING.md](../CONTRIBUTING.md)
- [ ] Review existing [skills](../skills/) and [agents](../agents/)
- [ ] Check the templates in `skills/TEMPLATE.md` and `agents/TEMPLATE.agent.md`

### While Developing
- [ ] Keep documentation updated as you develop
- [ ] Test locally before submitting
- [ ] Use clear, descriptive names
- [ ] Include practical examples
- [ ] Consider edge cases

### Before Submitting
- [ ] Run `npm run validate`
- [ ] Run `npm run lint`
- [ ] Review your documentation one more time
- [ ] Test in VS Code
- [ ] Follow the PR template in `.github/pull_request_template.md`

## 🆘 Common Questions

**Q: What's the difference between a Skill and an Agent?**
A: 
- **Skills** are reusable workflow modules for specific tasks
- **Agents** are specialized autonomous modules that can handle complex scenarios

**Q: Can I submit both skills and agents?**
A: Absolutely! We encourage comprehensive contributions.

**Q: How long does review take?**
A: Typically 3-7 days depending on complexity and review bandwidth.

**Q: Can I update my submission after opening a PR?**
A: Yes! Just push new commits to the same branch.

**Q: Where can I get help?**
A: 
- Check existing [Issues](../../issues)
- Create a new [Discussion](../../discussions)
- Review documentation in `docs/`

## 🎯 Next Steps

1. Choose what you want to contribute (skill, agent, or extension)
2. Review the appropriate template and guide
3. Develop your contribution locally
4. Run validation scripts
5. Submit a PR following the guidelines
6. Respond to feedback during review
7. Celebrate your contribution! 🎉

## 📖 Resources

- [VS Code API Documentation](https://code.visualstudio.com/api)
- [GitHub Copilot Skills](https://github.com/github/awesome-copilot)
- [CodeTour Documentation](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Reference](https://yaml.org/refcard.html)

## 🤝 Community

- Open for questions, suggestions, and ideas
- Respect and inclusivity for all contributors
- All skill levels welcome

---

Ready to contribute? Start with [CONTRIBUTING.md](../CONTRIBUTING.md)!
