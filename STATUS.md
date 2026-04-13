# Faculty Meeting — Status

> **Last Updated:** 2026-04-12
> **Phase:** Phase 1 Complete + Feedback Infrastructure
> **Build:** Clean — all systems deployed and verified

---

## Current State

| Attribute | Value |
|-----------|-------|
| **Version** | 0.1.0 |
| **Build Status** | Phase 1 complete + feedback endpoint live |
| **Personas Built** | 5 of 40 (harvard-strategist, ceibs-navigator, gibs-pioneer, cbs-critical, herbert-simon) |
| **Meta-Skills** | 4 (faculty-meeting, find-advisor, ai-methodologist, report-issue) |
| **Distribution** | Plugin installed globally — `faculty-meeting@phdemotions-faculty-meeting`, auto-updates via GitHub SHA |
| **Feedback Endpoint** | https://faculty-meeting.vercel.app/api/feedback — live, verified |
| **Open Issues** | P0: 0, P1: 3, P2: 1, P3: 0 |
| **Stack** | Claude Code plugin (.md skills), YAML catalog, shell installer, Vercel serverless |
| **GitHub** | phdemotions/faculty-meeting (public) |

---

## What's Done

### 2026-04-12 — Plugin Installation

- [x] Fixed bug in `.claude-plugin/plugin.json` — skills path was `./.claude/skills/` (wrong), corrected to `./skills/`
- [x] Manually installed plugin into Claude Code globally: marketplaces/, cache/, known_marketplaces.json, installed_plugins.json
- [x] Plugin registered as `faculty-meeting@phdemotions-faculty-meeting` — available across all projects
- [x] Auto-update configured: Claude Code tracks `gitCommitSha` and pulls from `phdemotions/faculty-meeting` on startup
- [ ] Restart Claude Code required to activate in running sessions

### 2026-04-10 (Session 3) — Feedback Infrastructure + Privacy

- [x] Added feedback check to all 5 persona SKILL.md files (warm end-of-response prompt)
- [x] Added feedback check to /faculty-meeting orchestrator (after synthesis)
- [x] Rewrote /report-issue as conversational handler (researcher never invokes directly)
- [x] Built Vercel feedback endpoint (api/feedback.js) — accepts POST, creates GitHub issues
- [x] Three-tier fallback: endpoint → gh CLI → local save with auto-drain
- [x] Anonymous researcher ID system (~/.faculty-meeting/researcher-id)
- [x] Deployed to Vercel, connected GitHub repo for auto-deploys
- [x] Created fine-grained GitHub PAT (Issues R/W only, scoped to phdemotions/faculty-meeting)
- [x] Privacy-first issue template: ZERO researcher details, only advisor performance diagnostics
- [x] Diagnostic-quality issues: severity, mode, question type (generic), how advisor failed, what tradition should have done, likely SKILL.md fix location
- [x] Updated templates (ADDING-A-PERSONA.md, TEMPLATE.md) with feedback check
- [x] Updated README feedback section (conversational, no /report-issue command shown)
- [x] Added GitHub token rotation instructions to PLAN.md
- [x] Convened faculty meeting on "Reading the Room" feature — consensus: build continuous calibration, not frustration detection
- [x] Added `wrong-lens` issue type (CBS recommendation — researcher can report tradition mismatch, not just persona bugs)

### 2026-04-10 (Session 2) — Phase 1 Polish

- [x] Rewrote README for grad students (prerequisites, cost transparency, examples)
- [x] Fixed Claude Code description (IDE + terminal, not terminal-only)
- [x] Built /report-issue meta-skill (initial version)
- [x] Audit fixes across all documentation

### 2026-04-10 (Session 1) — Phase 1 Build

- [x] Full directory structure, catalog.yaml (40 personas)
- [x] 5 personas built with SKILL.md + tradition.md
- [x] 3 meta-skills (faculty-meeting, find-advisor, ai-methodologist)
- [x] Plugin distribution, install.sh, personal advisor system
- [x] All documentation (README, CONTRIBUTING, ADDING-A-PERSONA, PHILOSOPHY, ARCHITECTURE)

---

## Blockers

*None currently.*

---

## Upcoming

| Task | Priority |
|------|----------|
| Build continuous advisory calibration ("Reading the Room" — not frustration detection) | P1 |
| Phase 2: Build ~15 core personas (NA, EU, APAC, LATAM, traditions, giants) | P1 |
| Test /faculty-meeting with 3-4 diverse compositions | P1 |
| Test /ai-methodologist audit on built personas | P1 |
| Test plugin in next session (confirm skills appear in autocomplete) | P1 |
| Phase 3: Complete full 40-persona roster | P2 |
| Phase 4: Final polish, GitHub release, git tag v0.1.0 | P3 |

---

## Recent Sessions

| Date | Summary |
|------|---------|
| 2026-04-12 | Plugin installed globally — fixed plugin.json skills path bug, registered in all 4 Claude Code plugin files |
| 2026-04-10 | Session 3: Feedback infrastructure — Vercel endpoint, privacy-first diagnostics, three-tier fallback, faculty meeting on frustration detection |
| 2026-04-10 | Session 2: README rewrite, /report-issue, audit fixes |
| 2026-04-10 | Session 1: Phase 1 complete — 5 personas, 3 meta-skills, plugin distribution, personal advisors |
