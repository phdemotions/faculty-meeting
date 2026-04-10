# Contributing to Faculty Meeting

We welcome contributions — new personas, improvements to existing ones, and enhancements to the meta-skills.

## Adding a New Persona

See [docs/ADDING-A-PERSONA.md](docs/ADDING-A-PERSONA.md) for the full template and checklist.

The short version:

1. **Pick your persona.** Check `catalog.yaml` for planned personas, or propose a new one.
2. **Create the directory.** `skills/{category}/{persona-id}/` with `SKILL.md` and `references/tradition.md`.
3. **Write the SKILL.md.** Follow the existing pattern — identity, how they think, how they advise, what they value, what they push back on, voice description.
4. **Write the tradition.md.** Lineage, core commitments, methodology, evaluation criteria, signature questions, known blind spots, journal affinities, contrasts.
5. **Update catalog.yaml.** Set `status: built` and verify all metadata fields.
6. **Add the plugin symlink.** Create a symlink in `.claude/skills/` pointing to your skill directory (see [docs/ADDING-A-PERSONA.md](docs/ADDING-A-PERSONA.md) for details).
7. **Test it.** Invoke the persona with a real research question. Does the voice sound distinct? Does the advice differ meaningfully from other personas?
8. **Submit a PR.**

## Quality Criteria

A persona is done when:

- **Distinct voice** — Read the output without the persona name. Can you tell which tradition it comes from?
- **Genuine disagreement** — Put it in a `/faculty-meeting` with the advisors it's designed to disagree with (listed in its `contrasts-with` field in catalog.yaml). Do they produce meaningfully different advice?
- **Actionable** — Does the advice help a researcher make a concrete decision?
- **Honest about limits** — Are the blind spots specific enough that a user can decide when NOT to use this advisor?
- **Not a caricature** — Does it represent the best version of the tradition, not a strawman?

## Improving Existing Personas

If an advisor's voice feels flat, their blind spots are too generic, or their tradition description misses something important — open a PR. Improvements to existing personas are as valuable as new ones.

## Code of Conduct

This project represents intellectual traditions from around the world. We treat each tradition with respect and intellectual honesty. Personas should present the strongest version of their tradition's arguments, not strawmen.
