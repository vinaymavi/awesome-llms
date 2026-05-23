#!/usr/bin/env node

/**
 * Validation script for Skills
 * Checks SKILL.md structure and frontmatter
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const SKILLS_DIR = path.join(__dirname, "../skills");

const requiredFields = ["name", "description"];
const requiredSections = ["Overview", "When to Use", "How to Use"];

function validateSkill(skillPath) {
  const skillMdPath = path.join(skillPath, "SKILL.md");
  const readmePath = path.join(skillPath, "README.md");
  const errors = [];
  const warnings = [];

  // Check if SKILL.md exists
  if (!fs.existsSync(skillMdPath)) {
    errors.push(`Missing SKILL.md in ${path.basename(skillPath)}`);
    return { errors, warnings };
  }

  // Check if README.md exists
  if (!fs.existsSync(readmePath)) {
    warnings.push(`Missing README.md in ${path.basename(skillPath)}`);
  }

  // Parse SKILL.md
  try {
    const content = fs.readFileSync(skillMdPath, "utf8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) {
      errors.push(
        `No YAML frontmatter found in ${path.basename(skillPath)}/SKILL.md`,
      );
      return { errors, warnings };
    }

    const frontmatter = yaml.load(frontmatterMatch[1]);

    // Validate required fields
    for (const field of requiredFields) {
      if (!frontmatter[field]) {
        errors.push(
          `Missing required field '${field}' in ${path.basename(skillPath)}/SKILL.md`,
        );
      }
    }

    // Validate sections
    const bodyContent = content.slice(frontmatterMatch[0].length);
    for (const section of requiredSections) {
      if (!bodyContent.includes(`## ${section}`)) {
        warnings.push(
          `Missing section '## ${section}' in ${path.basename(skillPath)}/SKILL.md`,
        );
      }
    }
  } catch (error) {
    errors.push(
      `Error parsing ${path.basename(skillPath)}/SKILL.md: ${error.message}`,
    );
  }

  return { errors, warnings };
}

function main() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.log("Skills directory not found. Creating...");
    fs.mkdirSync(SKILLS_DIR, { recursive: true });
    return;
  }

  const skills = fs
    .readdirSync(SKILLS_DIR)
    .filter((f) => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());

  if (skills.length === 0) {
    console.log("No skills found to validate.");
    return;
  }

  let totalErrors = 0;
  let totalWarnings = 0;

  console.log(`\n📋 Validating ${skills.length} skill(s)...\n`);

  skills.forEach((skill) => {
    const { errors, warnings } = validateSkill(path.join(SKILLS_DIR, skill));

    if (errors.length > 0 || warnings.length > 0) {
      console.log(`📁 ${skill}:`);
      errors.forEach((err) => {
        console.log(`  ❌ ${err}`);
        totalErrors++;
      });
      warnings.forEach((warn) => {
        console.log(`  ⚠️  ${warn}`);
        totalWarnings++;
      });
    } else {
      console.log(`✅ ${skill}`);
    }
  });

  console.log(
    `\n📊 Results: ${totalErrors} errors, ${totalWarnings} warnings\n`,
  );

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
