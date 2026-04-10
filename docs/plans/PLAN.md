# Faculty Meeting — Build Plan

> A library of Claude Code persona skills representing top business school academics, intellectual traditions, and historical giants as research advisors. Open-source, globally diverse, community-extensible.

**Repo:** `faculty-meeting`
**Location:** `~/developer/faculty-meeting/`
**Distribution:** Standalone GitHub repo — clone, symlink, use.

---

## Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Naming | School IDs only (`harvard-strategist`) | Clear, memorable, no character-name baggage |
| Tiering | All personas equal | No gatekeeping — every tradition has value |
| Journal depth | General traditions now | Specific papers risk hallucination; architecture supports adding later |
| Historical giants | Included as first-class category | Different from school personas — foundational thinkers, timeless lenses |
| Distribution | Standalone repo + install script | Lowest barrier; no MCP plugin overhead |
| Skill format | Matches Josh's existing audit skill pattern | SKILL.md + references/ subdirectory per persona |

---

## Persona Roster

### School-Branded (27 personas)

**North America (8)**
| ID | School | Lens |
|----|--------|------|
| `harvard-strategist` | Harvard Business School | Case method, industry analysis, competitive strategy, general management |
| `wharton-quant` | Wharton (UPenn) | Econometrics, financial modeling, operations research, data-driven decisions |
| `chicago-economist` | Chicago Booth | Price theory, causal inference, rational choice, efficient markets, skepticism |
| `stanford-behavioralist` | Stanford GSB | Behavioral science, OB, identity, entrepreneurship, design thinking |
| `kellogg-marketeer` | Kellogg (Northwestern) | Marketing science, consumer behavior, experimental design, negotiation |
| `mit-systems` | MIT Sloan | Systems dynamics, computational social science, technology strategy, operations |
| `columbia-pragmatist` | Columbia Business School | Real options, media/platform economics, value investing, pragmatic theory |
| `rotman-integrator` | Rotman (Toronto) | Integrative thinking, design of business, wicked problems, opposable mind |

**Latin America (2)**
| ID | School | Lens |
|----|--------|------|
| `fgv-developmentalist` | FGV-EAESP (Sao Paulo) | Institutional voids, Latin American development, informality, state capacity |
| `egade-family` | EGADE (Monterrey Tech) | Family enterprise, emerging market strategy, multi-Latinas, succession |

**Europe (8)**
| ID | School | Lens |
|----|--------|------|
| `insead-globalist` | INSEAD | Cross-cultural management, global teams, identity across borders |
| `lbs-financier` | London Business School | Global finance, corporate governance, European regulation |
| `hec-brand` | HEC Paris | Luxury strategy, brand management, semiotics of consumption |
| `iese-humanist` | IESE (Barcelona) | Stakeholder capitalism, business ethics, purpose-driven organizations |
| `rsm-sustainability` | RSM Erasmus (Rotterdam) | Sustainability, circular economy, stakeholder governance |
| `cbs-critical` | Copenhagen Business School | Critical management studies, institutional logics, organizing alternatives |
| `oxford-ethicist` | Said Business School (Oxford) | Responsible business, social enterprise, moral philosophy in management |
| `mannheim-engineer` | Mannheim Business School | German Mittelstand, manufacturing excellence, operations precision |

**Asia-Pacific (5)**
| ID | School | Lens |
|----|--------|------|
| `ceibs-navigator` | CEIBS (Shanghai) | China state-capitalism interface, guanxi, institutional duality |
| `isb-complexity` | ISB (Hyderabad) | India institutional complexity, jugaad innovation, base-of-pyramid |
| `nus-governance` | NUS Business School (Singapore) | Asian family conglomerates, cross-border governance, hub economies |
| `keio-craftsman` | Keio Business School (Tokyo) | Kaizen, monozukuri, lean management, long-termism, quiet innovation |
| `hkust-innovator` | HKUST Business School | Chinese tech entrepreneurship, innovation under institutional constraint |

**Africa & Middle East (3)**
| ID | School | Lens |
|----|--------|------|
| `gibs-pioneer` | GIBS (Johannesburg) | African emerging markets, base-of-pyramid strategy, Ubuntu leadership |
| `lagos-entrepreneur` | Lagos Business School | West African informal economies, entrepreneurship in constraint |
| `auc-bridge` | AUC School of Business (Cairo) | MENA business, Islamic finance, bridging tradition and modernity |

**Oceania (1)**
| ID | School | Lens |
|----|--------|------|
| `agsm-integrator` | AGSM/UNSW (Sydney) | Asia-Pacific trade integration, resource economics, Indigenous business |

### Tradition-Branded (5 personas)

| ID | Tradition | Lens |
|----|-----------|------|
| `critical-theorist` | Critical Management Studies | Power, ideology, discourse, whose interests does this research serve? |
| `feminist-org` | Feminist Organizational Theory | Gender, care labor, embodiment, invisibilized work, intersectionality |
| `indigenous-business` | Indigenous & Decolonial Business | Land-based economies, relational accountability, non-extractive models |
| `islamic-finance` | Islamic Economics | Riba prohibition, risk-sharing, maqasid al-shariah, ethical finance |
| `complexity-scientist` | Complexity Economics (Santa Fe) | Emergence, agent-based models, non-equilibrium thinking, adaptation |

### Historical Giants (8 personas)

| ID | Figure | Core Contribution |
|----|--------|-------------------|
| `herbert-simon` | Herbert A. Simon (1916-2001) | Bounded rationality, satisficing, administrative behavior, decision-making |
| `daniel-kahneman` | Daniel Kahneman (1934-2024) | Prospect theory, heuristics & biases, System 1/System 2, behavioral economics |
| `edith-penrose` | Edith Penrose (1914-1996) | Resource-based view, theory of firm growth, productive resources |
| `peter-drucker` | Peter Drucker (1909-2005) | Management as liberal art, knowledge worker, MBO, effectiveness |
| `ronald-coase` | Ronald Coase (1910-2013) | Transaction costs, nature of the firm, institutional economics |
| `philip-kotler` | Philip Kotler (b. 1931) | Modern marketing, marketing management framework, social marketing |
| `ck-prahalad` | C.K. Prahalad (1941-2010) | Core competence, base of pyramid, co-creation, strategic intent |
| `mary-parker-follett` | Mary Parker Follett (1868-1933) | Collaborative management, power-with vs power-over, integrative solutions |

---

## Skill Architecture

### Per-Persona Structure

```
skills/schools/harvard-strategist/
├── SKILL.md           # Frontmatter + instructions + advisory protocol
└── references/
    └── tradition.md   # Deep description of intellectual tradition
```

### SKILL.md Anatomy

```markdown
---
name: harvard-strategist
description: Research advisor embodying Harvard Business School's intellectual tradition — case method reasoning, industry analysis, competitive strategy, and general management. Invoke for strategic framing, industry-level thinking, or when research needs positioning within the strategy conversation.
argument-hint: "<your research question, design problem, or paper draft>"
---

# Advisory Persona — Harvard Business School

[Identity section]
[How to advise — the protocol]
[Argument handling]
```

### references/tradition.md Anatomy

```markdown
# Intellectual Tradition — Harvard Business School

## Lineage
[Key thinkers who shaped this school's approach]

## Core Commitments
[What this tradition believes about how business knowledge is generated]

## Methodology
[Preferred research approaches and why]

## Evaluation Criteria
[What counts as strong vs. weak evidence in this tradition]

## Signature Questions
[The questions this school always asks of any research]

## Known Blind Spots
[What this lens tends to miss — keeps the advisor honest]

## Journal Affinities
[Which FT50/UTD24/ABDC journals align with this worldview]

## Contrasts With
[Which other traditions would push back, and on what]
```

### Metadata in catalog.yaml

```yaml
personas:
  harvard-strategist:
    category: school
    school: Harvard Business School
    region: [north-america]
    methodology: [case-study, qualitative, mixed-methods, field-research]
    domains: [strategy, leadership, general-management, industry-analysis]
    theoretical-traditions: [competitive-advantage, industry-structure, dynamic-capabilities]
    journal-affinities: [SMJ, HBR, AMR, AMJ, OS]
    contrasts-with: [chicago-economist, cbs-critical, complexity-scientist]
```

---

## Meta-Skills

### /faculty-meeting

The orchestrator. Two modes:

**Auto mode** (default):
1. Read user's question
2. Parse catalog.yaml metadata
3. Score all personas on relevance (region + domain + methodology match)
4. From relevant set, pick 3-5 that **maximally disagree** (using `contrasts-with` + methodological distance)
5. For each selected persona, read their SKILL.md + tradition.md
6. Generate each perspective in that advisor's voice
7. Synthesize: where do they agree? Where do they diverge? What are the productive tensions?

**Manual mode** (`/faculty-meeting --with chicago-economist,ceibs-navigator,gibs-pioneer`):
1. Load specified personas
2. Generate each perspective
3. Synthesize tensions

### /find-advisor

Discovery skill:
1. User describes research question, domain, methodology, region
2. Score all personas in catalog.yaml
3. Return ranked list with 1-line explanation of why each fits
4. Suggest a faculty-meeting composition

---

## Repo Structure

```
faculty-meeting/
├── README.md
├── CONTRIBUTING.md
├── LICENSE                          # MIT
├── install.sh                       # Symlinks into ~/.claude/skills/
├── catalog.yaml                     # Machine-readable persona index
├── skills/
│   ├── schools/
│   │   ├── harvard-strategist/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       └── tradition.md
│   │   ├── wharton-quant/
│   │   ├── chicago-economist/
│   │   ├── stanford-behavioralist/
│   │   ├── kellogg-marketeer/
│   │   ├── mit-systems/
│   │   ├── columbia-pragmatist/
│   │   ├── rotman-integrator/
│   │   ├── fgv-developmentalist/
│   │   ├── egade-family/
│   │   ├── insead-globalist/
│   │   ├── lbs-financier/
│   │   ├── hec-brand/
│   │   ├── iese-humanist/
│   │   ├── rsm-sustainability/
│   │   ├── cbs-critical/
│   │   ├── oxford-ethicist/
│   │   ├── mannheim-engineer/
│   │   ├── ceibs-navigator/
│   │   ├── isb-complexity/
│   │   ├── nus-governance/
│   │   ├── keio-craftsman/
│   │   ├── hkust-innovator/
│   │   ├── gibs-pioneer/
│   │   ├── lagos-entrepreneur/
│   │   ├── auc-bridge/
│   │   └── agsm-integrator/
│   ├── traditions/
│   │   ├── critical-theorist/
│   │   ├── feminist-org/
│   │   ├── indigenous-business/
│   │   ├── islamic-finance/
│   │   └── complexity-scientist/
│   ├── giants/
│   │   ├── herbert-simon/
│   │   ├── daniel-kahneman/
│   │   ├── edith-penrose/
│   │   ├── peter-drucker/
│   │   ├── ronald-coase/
│   │   ├── philip-kotler/
│   │   ├── ck-prahalad/
│   │   └── mary-parker-follett/
│   └── meta/
│       ├── faculty-meeting/
│       │   └── SKILL.md
│       └── find-advisor/
│           └── SKILL.md
├── calibration/
│   └── update-log.md
└── docs/
    ├── plans/
    │   └── PLAN.md                  # This file
    ├── PHILOSOPHY.md
    ├── ADDING-A-PERSONA.md          # Template + contribution guide
    └── ARCHITECTURE.md              # How metadata/matching works
```

---

## Build Phases

### Phase 1: Architecture & Validation (This Session)

> Goal: Get the pattern right with 5 diverse personas before scaling.

- [ ] **1.1** Create repo directory structure (all directories, empty)
- [ ] **1.2** Write the persona SKILL.md template (the gold standard format all personas follow)
- [ ] **1.3** Write the tradition.md template
- [ ] **1.4** Build catalog.yaml schema with entries for all planned personas (metadata only, even for unbuilt ones — marks them `status: planned`)
- [ ] **1.5** Build `harvard-strategist` (school persona — North America)
- [ ] **1.6** Build `ceibs-navigator` (school persona — Asia-Pacific)
- [ ] **1.7** Build `gibs-pioneer` (school persona — Africa)
- [ ] **1.8** Build `cbs-critical` (school persona — Europe, critical tradition)
- [ ] **1.9** Build `herbert-simon` (historical giant)
- [ ] **1.10** Build `/faculty-meeting` meta-skill
- [ ] **1.11** Build `/find-advisor` meta-skill
- [ ] **1.12** Write `install.sh`
- [ ] **1.13** Write `README.md`
- [ ] **1.14** Write `CONTRIBUTING.md` + `docs/ADDING-A-PERSONA.md`
- [ ] **1.15** Init git repo

### Phase 2: Core Expansion

> Goal: Fill out enough personas to make faculty-meeting genuinely multi-perspective.

- [ ] **2.1** Build remaining North America: `wharton-quant`, `chicago-economist`, `stanford-behavioralist`, `kellogg-marketeer`, `mit-systems`
- [ ] **2.2** Build Europe core: `insead-globalist`, `iese-humanist`, `oxford-ethicist`
- [ ] **2.3** Build Asia-Pacific: `isb-complexity`, `keio-craftsman`
- [ ] **2.4** Build Latin America: `fgv-developmentalist`
- [ ] **2.5** Build Historical Giants: `daniel-kahneman`, `edith-penrose`, `mary-parker-follett`
- [ ] **2.6** Build Traditions: `critical-theorist`, `feminist-org`
- [ ] **2.7** Update catalog.yaml status for all built personas
- [ ] **2.8** Test faculty-meeting with 3-4 diverse compositions

### Phase 3: Full Roster

> Goal: Complete all 40 personas.

- [ ] **3.1** Build remaining North America: `columbia-pragmatist`, `rotman-integrator`
- [ ] **3.2** Build remaining Europe: `lbs-financier`, `hec-brand`, `rsm-sustainability`, `mannheim-engineer`
- [ ] **3.3** Build remaining Asia-Pacific: `nus-governance`, `hkust-innovator`
- [ ] **3.4** Build remaining Africa/ME: `lagos-entrepreneur`, `auc-bridge`
- [ ] **3.5** Build Oceania: `agsm-integrator`
- [ ] **3.6** Build remaining Latin America: `egade-family`
- [ ] **3.7** Build remaining Giants: `peter-drucker`, `ronald-coase`, `philip-kotler`, `ck-prahalad`
- [ ] **3.8** Build remaining Traditions: `indigenous-business`, `islamic-finance`, `complexity-scientist`
- [ ] **3.9** Complete catalog.yaml — all entries `status: built`

### Phase 4: Polish & Ship

> Goal: GitHub-ready.

- [ ] **4.1** Write `docs/PHILOSOPHY.md`
- [ ] **4.2** Write `docs/ARCHITECTURE.md`
- [ ] **4.3** Test install.sh on clean config
- [ ] **4.4** Final README polish with usage examples
- [ ] **4.5** Add LICENSE (MIT)
- [ ] **4.6** Create GitHub repo, initial commit, push
- [ ] **4.7** Share / announce

---

## Quality Criteria

A persona skill is **done** when:

1. **Distinct voice** — If you read the output without seeing the persona name, you can tell which tradition it comes from
2. **Genuine disagreement** — Put it in a faculty-meeting with its `contrasts-with` peers and they produce meaningfully different advice
3. **Actionable** — The advice helps a researcher make a concrete decision (which theory, which method, which journal, how to frame)
4. **Honest about limits** — The blind spots section is specific enough that a user can decide when NOT to use this advisor
5. **Not a caricature** — It represents the best version of the tradition, not a strawman

---

## Open Architecture Notes

### Future: Specific Paper Knowledge
The `tradition.md` files are designed to eventually include a `## Key Works` section with specific foundational papers. Not now — hallucination risk is real. When we add this:
- Papers must be verifiable (DOI or exact citation)
- Limit to ~10-15 foundational works per tradition, not a bibliography
- Community PRs adding papers require citation verification

### Future: Domain-Specific Variants
A `kellogg-marketeer` who specializes in B2B vs. consumer might eventually warrant sub-variants. The architecture supports this via catalog.yaml sub-entries. Not needed now.

### Future: Conversation Memory
Personas could remember prior advisory sessions. This requires a `calibration/<persona-id>/` directory for per-session notes. Architecture is there; implementation is not.
