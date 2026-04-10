# Faculty Meeting

**Get research feedback from 40 different intellectual traditions — without leaving your terminal.**

You're a grad student or researcher. You have one advisor, maybe a small committee, and they all come from roughly the same tradition. Faculty Meeting gives you a panel of advisors from Harvard, CEIBS, Copenhagen, GIBS, the behavioral tradition, the critical tradition, the complexity tradition — each one arguing sincerely from their own perspective about *your* research question.

The point is **productive disagreement.** These advisors don't politely agree. They argue. They push back on each other's assumptions. They name their own blind spots. The friction is where the insight lives.

## What It Looks Like

Ask a single advisor:

```
/harvard-strategist What's the competitive dynamics story in my study of hospital M&A?
```

Or convene a panel that will argue about your question:

```
/faculty-meeting How should I study platform governance in Southeast Asian gig economies?
```

Or find which advisors fit your question best:

```
/find-advisor I'm studying family business succession in Mexican multinationals using interview data
```

Or ask about AI in your research, or audit any skill to keep it current:

```
/ai-methodologist Should I use LLMs to help code my qualitative interview data?
```

```
/ai-methodologist harvard-strategist
```

## Prerequisites

Faculty Meeting runs inside **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — Anthropic's AI coding agent that runs in your terminal. You need:

1. **Claude Code installed.** Follow the [official install guide](https://docs.anthropic.com/en/docs/claude-code/getting-started). It's a CLI tool — you run it in your terminal.
2. **A Claude account with access to Claude Code.** Claude Code requires a Max plan or API credits.
3. **Basic terminal comfort.** You'll run a few commands to install, but after that everything happens through natural language.

If you've never used Claude Code before: it's an AI assistant that lives in your terminal. You type natural language, it responds. Faculty Meeting adds slash commands (like `/faculty-meeting`) that invoke specific advisor personas.

## Install

### Option A: Plugin (recommended — auto-updates)

In any Claude Code session:

```
/plugin marketplace add phdemotions/faculty-meeting
/plugin install faculty-meeting
```

That's it. Skills are available immediately and update automatically when we push new personas or improvements.

### Option B: Manual (git clone)

```bash
git clone https://github.com/phdemotions/faculty-meeting.git
cd faculty-meeting
chmod +x install.sh
./install.sh
```

The install script symlinks skills into Claude Code's directory and auto-pulls the latest version each time you run it. Re-run `./install.sh` anytime to get updates.

## How to Use It

### Ask a specific advisor

Each advisor is a slash command. Type `/` followed by their ID and your question:

```
/cbs-critical Review the power assumptions in my draft on algorithmic management
```

```
/herbert-simon Is my decision-making model assuming too much rationality?
```

```
/gibs-pioneer What does base-of-pyramid strategy actually look like in my South African fintech study?
```

The advisor responds in their tradition's voice — with their framework, their questions, their blind spots.

### Convene a faculty meeting

`/faculty-meeting` auto-selects 3–5 advisors who will **productively disagree** about your question:

```
/faculty-meeting Should I use institutional theory or resource-based view to study SOE reform in Vietnam?
```

It picks advisors for maximum tension (not consensus), generates each perspective in their authentic voice, then synthesizes where they agree, where they diverge, and what new questions emerge.

You can also pick the panel yourself:

```
/faculty-meeting --with harvard-strategist,cbs-critical,gibs-pioneer
```

### Discover the right advisor

Not sure who to ask? `/find-advisor` matches your question to the best-fit personas:

```
/find-advisor I'm doing a qualitative study of how Nigerian tech startups navigate regulatory uncertainty
```

It returns a ranked list with explanations and suggests a panel composition for `/faculty-meeting`.

### Keep skills current

`/ai-methodologist` is the faculty member who never stops reading. Point it at any skill to get an audit and modernization recommendations:

```
/ai-methodologist ceibs-navigator
```

It checks current best practices for Claude Code skills, recent developments in the advisor's intellectual tradition, and whether the skill's voice and content have gone stale. It can also advise on AI in your research — whether to use LLMs for coding, how to disclose AI assistance, what your committee will expect.

## The Roster

### Currently Available

These advisors and meta-skills are built and ready to use:

| ID | Tradition | Lens |
|----|-----------|------|
| `harvard-strategist` | Harvard Business School | Case method, industry analysis, competitive strategy |
| `ceibs-navigator` | CEIBS (Shanghai) | China state-capitalism, guanxi, institutional duality |
| `gibs-pioneer` | GIBS (Johannesburg) | African markets, Ubuntu leadership, BOP strategy |
| `cbs-critical` | Copenhagen Business School | Critical management, institutional logics, power |
| `herbert-simon` | Historical Giant | Bounded rationality, satisficing, organizational design |

**Meta-skills:**

| ID | Purpose |
|----|---------|
| `/faculty-meeting` | Convene a panel of 3–5 advisors for productive disagreement |
| `/find-advisor` | Discover which advisors fit your question |
| `/ai-methodologist` | Audit skills for staleness, advise on AI in research |

### Coming Soon

35 more personas are planned across all regions and traditions. The full roster:

<details>
<summary>School-Branded (27 total — 4 built, 23 planned)</summary>

| Region | ID | School | Lens |
|--------|-----|--------|------|
| NA | `harvard-strategist` | Harvard Business School | Case method, industry analysis, competitive strategy |
| NA | `wharton-quant` | Wharton | Econometrics, financial modeling, operations research |
| NA | `chicago-economist` | Chicago Booth | Price theory, causal inference, rational choice |
| NA | `stanford-behavioralist` | Stanford GSB | Behavioral science, OB, identity, design thinking |
| NA | `kellogg-marketeer` | Kellogg | Marketing science, consumer behavior, experiments |
| NA | `mit-systems` | MIT Sloan | Systems dynamics, computational social science |
| NA | `columbia-pragmatist` | Columbia | Real options, platform economics, value investing |
| NA | `rotman-integrator` | Rotman | Integrative thinking, design of business |
| LATAM | `fgv-developmentalist` | FGV-EAESP | Institutional voids, development, informality |
| LATAM | `egade-family` | EGADE | Family enterprise, multi-Latinas, succession |
| EU | `insead-globalist` | INSEAD | Cross-cultural management, global teams |
| EU | `lbs-financier` | London Business School | Global finance, corporate governance |
| EU | `hec-brand` | HEC Paris | Luxury strategy, brand semiotics |
| EU | `iese-humanist` | IESE | Stakeholder capitalism, business ethics |
| EU | `rsm-sustainability` | RSM Erasmus | Sustainability, circular economy |
| EU | `cbs-critical` | Copenhagen BS | Critical management, institutional logics |
| EU | `oxford-ethicist` | Said (Oxford) | Responsible business, moral philosophy |
| EU | `mannheim-engineer` | Mannheim | Mittelstand, manufacturing, operations precision |
| APAC | `ceibs-navigator` | CEIBS | China state-capitalism, guanxi, institutional duality |
| APAC | `isb-complexity` | ISB | India institutional complexity, jugaad innovation |
| APAC | `nus-governance` | NUS | Asian family conglomerates, hub economies |
| APAC | `keio-craftsman` | Keio | Kaizen, monozukuri, lean, long-termism |
| APAC | `hkust-innovator` | HKUST | Chinese tech entrepreneurship |
| AFR | `gibs-pioneer` | GIBS | African markets, Ubuntu leadership, BOP strategy |
| AFR | `lagos-entrepreneur` | Lagos BS | West African informal economies |
| ME | `auc-bridge` | AUC | MENA business, Islamic finance |
| OCE | `agsm-integrator` | AGSM/UNSW | Asia-Pacific trade, resource economics |

</details>

<details>
<summary>Tradition-Branded (5 planned)</summary>

| ID | Tradition | Lens |
|----|-----------|------|
| `critical-theorist` | Critical Management Studies | Power, ideology, discourse |
| `feminist-org` | Feminist Organizational Theory | Gender, care labor, intersectionality |
| `indigenous-business` | Indigenous & Decolonial Business | Land-based economies, relational accountability |
| `islamic-finance` | Islamic Economics | Riba prohibition, risk-sharing, ethical finance |
| `complexity-scientist` | Complexity Economics | Emergence, agent-based models, non-equilibrium |

</details>

<details>
<summary>Historical Giants (8 total — 1 built, 7 planned)</summary>

| ID | Figure | Core Contribution |
|----|--------|-------------------|
| `herbert-simon` | Herbert A. Simon | Bounded rationality, satisficing, organizational design |
| `daniel-kahneman` | Daniel Kahneman | Prospect theory, heuristics & biases |
| `edith-penrose` | Edith Penrose | Resource-based view, firm growth |
| `peter-drucker` | Peter Drucker | Management as liberal art, knowledge worker |
| `ronald-coase` | Ronald Coase | Transaction costs, nature of the firm |
| `philip-kotler` | Philip Kotler | Marketing management, social marketing |
| `ck-prahalad` | C.K. Prahalad | Core competence, base of pyramid |
| `mary-parker-follett` | Mary Parker Follett | Collaborative management, power-with |

</details>

## Personal Advisors

The global roster gives you intellectual traditions. Personal advisors give you the specific people in your academic life — your dissertation chair, a recurring Reviewer 2, the methodologist whose judgment you trust, your department's unwritten culture.

```bash
# Create from the template
mkdir -p skills/personal/my-chair/references
cp skills/personal/TEMPLATE.md skills/personal/my-chair/SKILL.md

# Edit SKILL.md to match your advisor's actual thinking style, then re-run install
./install.sh
```

Personal advisors are **gitignored** — they stay on your machine and never get pushed to GitHub. They work alongside the global personas, including in `/faculty-meeting` panels.

See [skills/personal/TEMPLATE.md](skills/personal/TEMPLATE.md) for the full template and tips on making personal advisors accurate (including mining real feedback emails for patterns).

## Design Philosophy

1. **Productive disagreement, not consensus.** Advisors are selected and instructed to argue sincerely from their tradition. A faculty meeting where everyone agrees has failed.
2. **Each advisor seeks ground truth through their own lens.** They don't hedge or compromise. The researcher synthesizes — the advisors commit.
3. **Distinct voice.** If you read the output without seeing the name, you can tell which tradition it comes from.
4. **Honest about limits.** Every advisor names their blind spots. The critical theorist admits they're better at diagnosis than prescription. The Harvard strategist admits they center Western corporate forms.
5. **Not a caricature.** Each persona represents the best version of its tradition, not a strawman.

## How It's Built

Each persona is a pair of Markdown files:

```
skills/schools/harvard-strategist/
├── SKILL.md              # Identity, advisory protocol, voice, disagreement rules
└── references/
    └── tradition.md      # Deep intellectual tradition: lineage, methodology, blind spots
```

Metadata in `catalog.yaml` powers the matching engine — domain, methodology, region, theoretical tradition, and `contrasts-with` relationships that ensure panels produce genuine friction.

For the full architecture, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Contributing

Want to add a persona? See [CONTRIBUTING.md](CONTRIBUTING.md) for the process and [docs/ADDING-A-PERSONA.md](docs/ADDING-A-PERSONA.md) for the templates.

The quality bar: invoke your persona with a real research question, then put it in a `/faculty-meeting` with its `contrasts-with` peers. If it produces meaningfully different advice and you can tell which tradition it comes from without reading the name — it's ready.

## License

MIT
