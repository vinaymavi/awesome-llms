# Publishing Guide

This guide explains how to publish and maintain skills and agents in the Awesome LLMs repository.

## Prerequisites

- GitHub account
- Git installed locally
- Familiarity with markdown and YAML
- Your skill or agent content ready

## Step 1: Prepare Your Content

### For Skills

Ensure you have:
- ✅ `SKILL.md` with complete documentation
- ✅ `README.md` with usage guide
- ✅ `assets/` folder with supporting materials (optional)
- ✅ All files follow the naming conventions and structure

### For Agents

Ensure you have:
- ✅ `[agent-name].agent.md` file
- ✅ `README.md` with documentation
- ✅ Configuration files if needed

## Step 2: Validate Your Submission

Before publishing, validate your work:

```bash
# Install dependencies
npm install

# Run validation scripts
npm run validate
npm run lint

# Check the generated index
npm run index
```

## Step 3: Fork and Clone

```bash
# Fork on GitHub first, then:
git clone https://github.com/your-username/awesome-llms.git
cd awesome-llms
git remote add upstream https://github.com/original-owner/awesome-llms.git
```

## Step 4: Create a Feature Branch

```bash
# For skills
git checkout -b skills/your-skill-name

# For agents
git checkout -b agents/your-agent-name

# For extensions
git checkout -b extensions/your-extension-name
```

## Step 5: Add Your Files

Copy your skill/agent/extension to the appropriate directory:

```bash
# Example for a skill
cp -r ~/path/to/your-skill skills/
```

Verify the structure:
```
skills/your-skill-name/
├── SKILL.md
├── README.md
└── assets/
    └── [supporting files]
```

## Step 6: Update Main README

Add your skill/agent to the Featured section in `README.md`:

```markdown
## Featured Skills

- **Your Skill Name** - Brief description of what it does
```

## Step 7: Commit and Push

```bash
# Stage your changes
git add skills/your-skill-name README.md

# Commit with a clear message
git commit -m "feat: add your-skill-name skill

- Brief description of what the skill does
- Key features
- Use cases"

# Push to your fork
git push origin skills/your-skill-name
```

## Step 8: Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill in the PR template:

```markdown
## Description
Brief description of your contribution

## Type of Change
- [ ] New Skill
- [ ] New Agent
- [ ] New Extension
- [ ] Documentation Update

## Checklist
- [ ] Documentation is complete
- [ ] Validation passes (`npm run validate`)
- [ ] No hardcoded paths or secrets
- [ ] Tested locally
- [ ] Follows project structure
- [ ] README includes usage examples

## Related Issues
Fixes #[issue number] (if applicable)
```

## Step 9: Respond to Review

Maintainers will review your submission. Be prepared to:
- Address questions about your contribution
- Make minor edits or improvements
- Provide additional examples or documentation

## Publishing Best Practices

### Documentation
- Write clear, concise descriptions
- Include practical examples
- Add troubleshooting sections
- Keep formatting consistent

### Code Quality
- Test thoroughly before submitting
- Use clear variable and function names
- Add helpful comments
- Handle edge cases

### Version Management

Tag releases following semantic versioning:

```bash
git tag -a v1.0.0 -m "Initial release"
git push upstream v1.0.0
```

### Maintenance

After publishing:
- Monitor for issues and questions
- Update documentation as needed
- Include version history in SKILL.md or README
- Consider backward compatibility for updates

## Distribution Channels

Once published, your skill/agent is available through:

1. **GitHub Repository** - Direct access and community discovery
2. **VS Code Marketplace** (if applicable for extensions)
3. **Community Collections** - Featured in discussions
4. **Social Media** - Shared through community channels

## Promotion

After publishing:

1. Add your link to [Awesome Copilot](https://github.com/github/awesome-copilot)
2. Share in [VS Code Discussions](https://github.com/microsoft/vscode-discussions)
3. Post in relevant communities and forums
4. Consider writing a blog post or article

## Troubleshooting

### Validation Fails
- Review error messages carefully
- Check YAML syntax
- Verify file structure matches templates
- See CONTRIBUTING.md for format requirements

### PR Not Merging
- Ensure all checks pass
- Address review comments promptly
- Check for conflicts with main branch
- Test changes locally again

## Getting Help

- **Questions?** Open a discussion or issue
- **Need guidance?** Check existing examples
- **Found a bug?** Report it on GitHub
- **Want feedback?** Ask in the PR comments

---

Thank you for contributing to Awesome LLMs! 🚀
