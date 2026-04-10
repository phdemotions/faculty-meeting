# Architecture

How Faculty Meeting's matching and orchestration works.

## Components

```
catalog.yaml          → Machine-readable metadata for all personas
skills/*/SKILL.md     → Advisory persona definition + protocol
skills/*/references/  → Deep tradition context (tradition.md)
skills/meta/          → Orchestrator and utility skills (faculty-meeting, find-advisor, ai-methodologist)
```

## Matching Engine

The `/faculty-meeting` and `/find-advisor` meta-skills use `catalog.yaml` to select and rank personas. The matching works across four dimensions:

### 1. Domain Match

Each persona has a `domains` field listing their areas of expertise. The matcher scores overlap between the research question's domain and the persona's domains.

### 2. Methodology Match

Each persona has a `methodology` field listing their preferred research approaches. A qualitative researcher studying family businesses benefits from advisors who work with qualitative methods — but also from quantitative voices that will push their design.

### 3. Region Match

Each persona has a `region` field. Regional match matters when the research has a geographic context — studying Chinese SOEs benefits from `ceibs-navigator`; studying African mobile money benefits from `gibs-pioneer`.

### 4. Theoretical Tradition Match

Each persona has a `theoretical-traditions` field. When the research uses or engages with a specific theoretical lens, advisors from that tradition (or traditions that challenge it) are more relevant.

## Panel Selection

`/faculty-meeting` doesn't just pick the most relevant advisors — it picks the most **productively diverse** set. After scoring for relevance, it uses two signals to ensure disagreement:

### contrasts-with

Each persona lists 2–3 other personas they are known to disagree with. The matcher preferentially includes at least one contrasting pair.

### Methodological Distance

Even without explicit `contrasts-with` relationships, advisors with different methodological approaches (qualitative vs. quantitative, critical vs. positivist, case-study vs. experimental) are more likely to generate useful friction.

## Persona Status

Each persona in `catalog.yaml` has a `status` field:

- `built` — SKILL.md and tradition.md are complete. Available for use.
- `planned` — Metadata exists but the persona hasn't been written yet. Appears in `/find-advisor` recommendations but cannot be loaded by `/faculty-meeting`.

## File Reference Protocol

Each SKILL.md ends with `@references/tradition.md`, which tells Claude Code to load the tradition file when the skill is invoked. This keeps the SKILL.md focused on advisory protocol while giving the model deep tradition context.

## Extension Points

### Adding Papers (Future)

The `tradition.md` files are designed to eventually include a `## Key Works` section with specific foundational papers. This is deferred to avoid hallucination risk. When added, papers will require verifiable citations (DOI or exact reference).

### Domain-Specific Variants (Future)

`catalog.yaml` supports sub-entries for specialized variants (e.g., a B2B-focused `kellogg-marketeer`). The architecture is ready; no variants exist yet.

### Conversation Memory (Future)

A `calibration/<persona-id>/` directory structure exists for per-session advisor memory. Not implemented yet.
