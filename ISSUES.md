# Faculty Meeting — Issues

> **Last Updated:** 2026-04-10

---

## Open

| ID | Priority | Title | Notes |
|----|----------|-------|-------|
| TEST-001 | P1 | Plugin install untested on clean config | Registered in settings.json but not yet cached/installed by plugin system. Need to verify in a fresh Claude Code session. |
| TEST-002 | P1 | ai-methodologist untested | Skill audit mode and AI advisory mode both need real-world testing. |
| TEST-003 | P1 | /faculty-meeting untested with live panel | Need to test auto-selection and manual --with mode with at least 3 built personas. |
| INFRA-001 | P1 | GitHub token rotation monitoring | Fine-grained PAT set in Vercel. Monitor for 502 errors in Vercel function logs which indicate token expiration. Set calendar reminder before expiry date. |
| FEAT-001 | P2 | Symlink maintenance for new personas | When new personas are built, `.claude/skills/` symlinks must be created manually. Consider automating in a build script. |

---

## Closed

| ID | Resolution | Date |
|----|------------|------|
| *None yet* | | |
