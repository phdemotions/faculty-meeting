# Faculty Meeting

**Your dissertation committee only sees your work through one lens. What if you could hear from forty?**

Faculty Meeting gives you a panel of research advisors drawn from the world's major intellectual traditions — Harvard's case-method strategists, Copenhagen's critical theorists, GIBS's African management scholars, CEIBS's China-strategy navigators, and foundational thinkers like Herbert Simon. Each one reads your research question and responds from their tradition, with their frameworks, their standards, and their honest blind spots.

The point is **productive disagreement.** These advisors don't politely agree with each other. They argue. A Harvard strategist says "show me the competitive dynamics"; a Copenhagen critical scholar responds "whose interests does that framing serve?"; a GIBS pioneer asks "does your theory survive contact with a context where those institutions don't exist?" The friction between them is where the insight lives.

You — the researcher — hear all sides and decide.

## What You Get

You type a research question. Here's what comes back.

**Ask a single advisor** and get feedback in their tradition's voice:

```
You:  /harvard-strategist What's the competitive dynamics story in my study of hospital M&A?

HBS:  Assessment: You have a clear empirical setting but you're underspecifying the unit
      of analysis. Are you studying the acquiring firm's strategy, the target's vulnerability,
      or the industry dynamics that make consolidation attractive? These are different questions
      with different theoretical homes...

      Key Questions:
      1. What does the value chain look like in this market, and where does M&A change it?
      2. Are you tracking competitive response from non-acquiring rivals?
      ...
```

**Convene a faculty meeting** and get 3–5 advisors arguing about your question:

```
You:  /faculty-meeting Should I use institutional theory or resource-based view
      to study SOE reform in Vietnam?

Panel: harvard-strategist, ceibs-navigator, cbs-critical

[Each advisor gives their full assessment in their own voice, then:]

Synthesis:
  Where they agree: All three insist you cannot study SOE reform without
  specifying the state's role — it is not "context," it is the phenomenon.

  Where they diverge: Harvard frames this as competitive repositioning under
  institutional change. CEIBS argues the institutional duality (market logic +
  state logic) IS the research question, not background. CBS asks whose interests
  "reform" serves and whether the word itself smuggles in a neoliberal assumption.

  Productive tension: The disagreement between CEIBS and CBS is the most
  generative — is "institutional navigation" a neutral description or a
  euphemism for elite capture?
```

**Find the right advisor** when you're not sure who to ask:

```
You:  /find-advisor I'm studying family business succession in Mexican multinationals

Top matches:
  1. egade-family — EGADE (Monterrey Tech). Specializes in exactly this: Latin American
     family enterprises, multi-Latinas, succession dynamics. [Planned — not yet available]
  2. harvard-strategist — Would frame succession as a general management and governance
     question. Strong on the strategic implications, weaker on family dynamics.
  ...
```

## What You Need

Faculty Meeting is a plugin for **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — an AI assistant made by Anthropic that you interact with by typing natural language. It can read your files, search the web, and use specialized tools like Faculty Meeting's advisor personas.

Claude Code runs in two ways — pick whichever you prefer:
- **The Claude Code IDE** — A desktop app where you chat with Claude alongside your project files
- **The terminal** — A command-line interface for those comfortable with a terminal

**To get started you need:**

1. **Claude Code** — Install it by following [Anthropic's setup guide](https://docs.anthropic.com/en/docs/claude-code/getting-started). It takes about 5 minutes.
2. **A Claude subscription** — Claude Code requires a [Max plan](https://claude.ai) (~$100/month) or API credits. There is no free tier for Claude Code.

> **On cost:** We know $100/month is real money on a grad student stipend. If you're evaluating whether it's worth it: Claude Code is useful far beyond Faculty Meeting — it can help with literature searches, data analysis, writing, and coding. Faculty Meeting is one of many things it can do. Some universities provide institutional access — check with your IT department.

## Install

### Option A: Plugin (recommended — auto-updates)

Once Claude Code is running, type:

```
/plugin marketplace add phdemotions/faculty-meeting
/plugin install faculty-meeting
```

That's it. The advisors are available immediately, and you'll automatically get new personas and improvements as we release them.

### Option B: Manual

If you prefer to manage updates yourself:

```bash
git clone https://github.com/phdemotions/faculty-meeting.git
cd faculty-meeting
./install.sh
```

The install script checks for updates automatically each time you run it.

## Available Advisors

### Ready to Use Now

| Command | Tradition | What They Bring |
|---------|-----------|-----------------|
| `/harvard-strategist` | Harvard Business School | Case method reasoning, industry analysis, competitive strategy. Asks "show me the firm, show me the industry." |
| `/ceibs-navigator` | CEIBS (Shanghai) | China's state-capitalism interface, institutional duality, guanxi. Stress-tests Western frameworks against Chinese evidence. |
| `/gibs-pioneer` | GIBS (Johannesburg) | African emerging markets, Ubuntu leadership, base-of-pyramid strategy. Challenges deficit framing, centers African agency. |
| `/cbs-critical` | Copenhagen Business School | Critical management studies, institutional logics, power. Asks "whose interests does this framing serve?" |
| `/herbert-simon` | Historical Giant | Bounded rationality, satisficing, organizational design. Asks "are you assuming optimization? What if actors satisfice instead?" |

### Meta-Tools

| Command | What It Does |
|---------|--------------|
| `/faculty-meeting` | Picks 3–5 advisors who will disagree productively about your question. You can also choose the panel: `/faculty-meeting --with harvard-strategist,cbs-critical,gibs-pioneer` |
| `/find-advisor` | Describes your question and returns a ranked list of the best-fit advisors with explanations. |
| `/ai-methodologist` | The faculty member who never stops reading. Advises on AI in your research (LLMs for lit review, AI disclosure norms, what your committee expects). Can also audit any advisor for staleness. |

### 35 More Coming

We're building toward 40 advisors spanning every major region and intellectual tradition. The full planned roster is below — we're prioritizing based on community interest.

<details>
<summary>Full planned roster (click to expand)</summary>

**North America:** `wharton-quant` (econometrics, financial modeling), `chicago-economist` (price theory, causal inference), `stanford-behavioralist` (behavioral science, identity), `kellogg-marketeer` (marketing science, experiments), `mit-systems` (systems dynamics, technology strategy), `columbia-pragmatist` (real options, platform economics), `rotman-integrator` (integrative thinking, wicked problems)

**Latin America:** `fgv-developmentalist` (institutional voids, development), `egade-family` (family enterprise, multi-Latinas)

**Europe:** `insead-globalist` (cross-cultural management), `lbs-financier` (global finance, governance), `hec-brand` (luxury strategy, brand semiotics), `iese-humanist` (stakeholder capitalism, ethics), `rsm-sustainability` (circular economy, ESG), `oxford-ethicist` (moral philosophy in business), `mannheim-engineer` (German manufacturing, operations)

**Asia-Pacific:** `isb-complexity` (India institutional complexity), `nus-governance` (Asian family conglomerates), `keio-craftsman` (kaizen, lean, long-termism), `hkust-innovator` (Chinese tech entrepreneurship)

**Africa & Middle East:** `lagos-entrepreneur` (West African informal economies), `auc-bridge` (MENA business, Islamic finance)

**Oceania:** `agsm-integrator` (Asia-Pacific trade, resource economics)

**Intellectual Traditions:** `critical-theorist`, `feminist-org`, `indigenous-business`, `islamic-finance`, `complexity-scientist`

**Historical Giants:** `daniel-kahneman`, `edith-penrose`, `peter-drucker`, `ronald-coase`, `philip-kotler`, `ck-prahalad`, `mary-parker-follett`

</details>

## Personal Advisors

The global roster gives you intellectual traditions. But what about the specific people in your academic life — the dissertation chair who always asks about boundary conditions, the Reviewer 2 who obsesses over endogeneity, the methodologist whose judgment you trust?

You can create **personal advisors** modeled on real people. They respond in that person's voice and style, and you can include them in faculty meeting panels alongside the global advisors.

Personal advisors stay on your machine — they're never uploaded or shared.

To create one, see the step-by-step guide in [skills/personal/TEMPLATE.md](skills/personal/TEMPLATE.md). The key insight: mine your old feedback emails for patterns. The phrases your chair actually uses are worth more than any generic description.

## How the Disagreement Works

This is the core design decision and it's worth explaining.

Every advisor in Faculty Meeting is explicitly instructed to **hold their ground.** When convened in a panel, they don't hedge, they don't split the difference, and they don't converge on comfortable consensus. They argue sincerely from their tradition because that's how you find the productive tensions in your research question.

The Harvard strategist won't say "CBS makes a good point about power." They'll say "CBS is asking the wrong question — the phenomenon here is competitive, not political, and here's why the evidence supports that reading." And CBS will respond with exactly why Harvard's framing conceals what matters most.

The synthesis section maps the terrain of disagreement. It doesn't resolve it. **You** resolve it — you're the researcher, and now you've heard the strongest version of each argument.

This is how real intellectual progress works. Not agreement. Friction.

## Design Principles

1. **Not a caricature.** Each persona represents the best version of its tradition. The Chicago economist isn't a strawman free-market ideologue — they're a rigorous scholar who takes price theory seriously as a lens.
2. **Honest about limits.** Every advisor names their blind spots. The Harvard strategist admits they center Western corporate forms. The critical theorist admits they're better at diagnosis than prescription.
3. **Actionable.** The advice helps you make a concrete decision — which theory, which method, which journal, how to frame your contribution.
4. **Globally representative.** Not just Harvard and Wharton. African, Asian, Latin American, and Middle Eastern traditions are first-class voices with equal standing.

## Contributing

Want to add a persona or improve one? See [CONTRIBUTING.md](CONTRIBUTING.md) for the process and [docs/ADDING-A-PERSONA.md](docs/ADDING-A-PERSONA.md) for the full template.

The quality bar: invoke your persona with a real research question, then put it in a `/faculty-meeting` with its `contrasts-with` peers. If it produces meaningfully different advice and you can tell which tradition it comes from without reading the name — it's ready.

## License

MIT
