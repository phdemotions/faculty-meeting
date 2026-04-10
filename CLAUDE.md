# Faculty Meeting — Project Context

> A Claude Code plugin providing 40 research advisor personas from global business school traditions, intellectual movements, and foundational thinkers.

## What This Is

Faculty Meeting is an open-source Claude Code plugin. Each persona is a pair of Markdown files (SKILL.md + references/tradition.md) that instruct Claude to advise from a specific intellectual tradition. The `/faculty-meeting` meta-skill orchestrates multi-perspective panels that argue sincerely about a research question.

## Repo Structure

```
skills/
  schools/       — 27 school-branded personas (harvard-strategist, ceibs-navigator, etc.)
  traditions/    — 5 tradition-branded personas (critical-theorist, feminist-org, etc.)
  giants/        — 8 historical figures (herbert-simon, edith-penrose, etc.)
  meta/          — Orchestrator skills (faculty-meeting, find-advisor, ai-methodologist)
  personal/      — User's private advisors (gitignored)
catalog.yaml     — Machine-readable metadata index for all personas
.claude-plugin/  — Plugin distribution manifests
```

## Key Conventions

- Every persona SKILL.md must include an "In a Faculty Meeting" section enforcing sincere disagreement
- Every tradition.md must cover: Lineage, Core Commitments, Methodology, Evaluation Criteria, Signature Questions, Known Blind Spots, Journal Affinities, Contrasts With
- `catalog.yaml` tracks `status: built` vs `status: planned` for all personas
- Personal advisors in `skills/personal/` are gitignored and never committed
- Skill names are lowercase-hyphenated: `{school-shortname}-{lens}` for schools, figure names for giants

## When Contributing

1. Follow the template in `docs/ADDING-A-PERSONA.md`
2. Update `catalog.yaml` with `status: built` when a persona is complete
3. Test: invoke with a real research question, then run in a `/faculty-meeting` with `contrasts-with` peers
4. The quality bar: distinct voice, genuine disagreement, actionable advice, honest blind spots, not a caricature
