# Faculty Meeting — Issues

> **Last Updated:** 2026-04-12

---

## Open

| ID | Priority | Title | Notes |
|----|----------|-------|-------|
| TEST-002 | P1 | ai-methodologist untested | Skill audit mode and AI advisory mode both need real-world testing. |
| TEST-003 | P1 | /faculty-meeting untested with live panel | Need to test auto-selection and manual --with mode with at least 3 built personas. |
| INFRA-001 | P1 | GitHub token rotation monitoring | Fine-grained PAT set in Vercel. Monitor for 502 errors in Vercel function logs which indicate token expiration. Set calendar reminder before expiry date. |
| FEAT-001 | P2 | Symlink maintenance for new personas | When new personas are built, `.claude/skills/` symlinks must be created manually. Consider automating in a build script. |

---

## Closed

| ID | Resolution | Date |
|----|------------|------|
| TEST-001 | Plugin installed manually — all 4 registration files updated, plugin.json skills path bug fixed | 2026-04-12 |
