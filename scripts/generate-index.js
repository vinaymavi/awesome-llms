#!/usr/bin/env node

/**
 * Index generator for Skills and Agents
 * Creates an index of all available skills and agents
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const SKILLS_DIR = path.join(__dirname, "../skills");
const AGENTS_DIR = path.join(__dirname, "../agents");

function parseYamlFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) {
      return null;
    }

    return yaml.load(frontmatterMatch[1]);
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return null;
  }
}

function generateIndex(dir, type) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const items = fs
    .readdirSync(dir)
    .filter((f) => fs.statSync(path.join(dir, f)).isDirectory());

  return items
    .map((item) => {
      const itemPath = path.join(dir, item);
      const ext = type === "skills" ? ".md" : ".agent.md";
      const metaFile =
        type === "skills"
          ? path.join(itemPath, "SKILL.md")
          : path.join(itemPath, `${item}${ext}`);

      if (!fs.existsSync(metaFile)) {
        return null;
      }

      const metadata = parseYamlFrontmatter(metaFile);
      return {
        ...metadata,
        path: `${type}/${item}`,
        id: item,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function main() {
  const skills = generateIndex(SKILLS_DIR, "skills");
  const agents = generateIndex(AGENTS_DIR, "agents");

  const index = {
    generated: new Date().toISOString(),
    skills: {
      total: skills.length,
      items: skills,
    },
    agents: {
      total: agents.length,
      items: agents,
    },
  };

  const indexPath = path.join(__dirname, "../INDEX.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

  console.log("✅ Index generated successfully");
  console.log(`  📦 ${skills.length} skill(s)`);
  console.log(`  🤖 ${agents.length} agent(s)`);
}

main();
