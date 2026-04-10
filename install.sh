#!/usr/bin/env bash
set -euo pipefail

# Faculty Meeting — Installer & Updater
# Symlinks persona skills into your Claude Code skills directory.
# Pulls latest changes automatically when run.
#
# Usage:
#   git clone https://github.com/phdemotions/faculty-meeting.git
#   cd faculty-meeting
#   ./install.sh
#
# Recommended: Use the plugin system instead for auto-updates:
#   /plugin marketplace add phdemotions/faculty-meeting
#   /plugin install faculty-meeting

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_DIR="${HOME}/.claude/skills"
VERSION=$(cat "${REPO_DIR}/VERSION" 2>/dev/null || echo "unknown")

# Check if Claude Code is installed
if [ ! -d "${HOME}/.claude" ]; then
  echo "Faculty Meeting — Setup"
  echo "======================"
  echo ""
  echo "Claude Code doesn't appear to be installed yet."
  echo "Faculty Meeting runs inside Claude Code (Anthropic's AI terminal agent)."
  echo ""
  echo "To install Claude Code:"
  echo "  https://docs.anthropic.com/en/docs/claude-code/getting-started"
  echo ""
  echo "After installing Claude Code, re-run this script."
  exit 1
fi

echo "Faculty Meeting v${VERSION}"
echo "=========================="
echo ""

# Auto-update: pull latest if this is a git repo with a remote
if [ -d "${REPO_DIR}/.git" ]; then
  if git -C "${REPO_DIR}" remote get-url origin &>/dev/null; then
    echo "Checking for updates..."
    old_head=$(git -C "${REPO_DIR}" rev-parse HEAD 2>/dev/null)

    if git -C "${REPO_DIR}" pull --ff-only --quiet 2>/dev/null; then
      new_head=$(git -C "${REPO_DIR}" rev-parse HEAD 2>/dev/null)
      new_version=$(cat "${REPO_DIR}/VERSION" 2>/dev/null || echo "unknown")

      if [ "${old_head}" != "${new_head}" ]; then
        echo "  Updated to v${new_version} (${new_head:0:7})"
        VERSION="${new_version}"
      else
        echo "  Already up to date."
      fi
    else
      echo "  Could not auto-update (you may have local changes). Continuing with current version."
    fi
    echo ""
  fi
fi

echo "Source:      ${REPO_DIR}/skills"
echo "Destination: ${SKILLS_DIR}"
echo ""

# Ensure the Claude Code skills directory exists
mkdir -p "${SKILLS_DIR}"

# Track counts
installed=0
skipped=0
updated=0

# Install all persona categories (global + personal)
for category in schools traditions giants meta personal; do
  category_dir="${REPO_DIR}/skills/${category}"

  if [ ! -d "${category_dir}" ]; then
    continue
  fi

  for persona_dir in "${category_dir}"/*/; do
    [ -d "${persona_dir}" ] || continue

    persona_name="$(basename "${persona_dir}")"
    skill_file="${persona_dir}SKILL.md"

    # Only install personas that have a SKILL.md
    if [ ! -f "${skill_file}" ]; then
      continue
    fi

    target="${SKILLS_DIR}/${persona_name}"

    if [ -L "${target}" ]; then
      # Symlink already exists — check if it points to the right place
      existing="$(readlink "${target}")"
      if [ "${existing}" = "${persona_dir%/}" ]; then
        skipped=$((skipped + 1))
        continue
      else
        rm "${target}"
        ln -s "${persona_dir%/}" "${target}"
        echo "  Updated:   ${persona_name}"
        updated=$((updated + 1))
      fi
    elif [ -e "${target}" ]; then
      echo "  Skipping:  ${persona_name} (non-symlink already exists at ${target})"
      skipped=$((skipped + 1))
      continue
    else
      ln -s "${persona_dir%/}" "${target}"
      echo "  Installed: ${persona_name}"
      installed=$((installed + 1))
    fi
  done
done

echo ""
echo "Done. ${installed} new, ${updated} updated, ${skipped} unchanged."

# Check for personal advisors
personal_count=0
for p in "${REPO_DIR}/skills/personal"/*/SKILL.md; do
  [ -f "$p" ] && personal_count=$((personal_count + 1))
done 2>/dev/null

echo ""
echo "Available skills:"
echo "  /faculty-meeting <question>      — Convene a multi-perspective advisory panel"
echo "  /find-advisor <question>         — Discover which advisors fit your question"
echo "  /ai-methodologist <skill-name>   — Audit and modernize a skill with current best practices"
echo "  /harvard-strategist <question>   — Ask a specific advisor directly"
if [ "${personal_count}" -gt 0 ]; then
  echo "  + ${personal_count} personal advisor(s)"
fi
echo ""
echo "Tip: For auto-updates, use the plugin system instead:"
echo "  /plugin marketplace add phdemotions/faculty-meeting"
echo ""
echo "Create personal advisors: cp skills/personal/TEMPLATE.md skills/personal/my-advisor/SKILL.md"
echo "To uninstall, remove the symlinks from ${SKILLS_DIR}"
