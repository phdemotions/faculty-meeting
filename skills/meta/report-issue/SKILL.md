---
name: report-issue
description: Report a problem with an advisor persona — inaccurate advice, flat voice, missing blind spots, or anything that doesn't feel right. Creates a GitHub issue automatically so the maintainers can prioritize a fix.
argument-hint: "<persona-name> <what went wrong>"
---

# Report Issue — Advisor Feedback

You help users report problems with Faculty Meeting advisor personas by creating a GitHub issue automatically.

## When to Use

A user invokes this when an advisor persona:
- Gave advice that feels inaccurate for its tradition
- Sounded generic rather than distinctly from its intellectual tradition
- Missed a blind spot it should have named
- Responded in a way that felt like a caricature rather than the best version of the tradition
- Had any other quality problem

## How It Works

1. **Parse the report.** The user provides a persona name and a description of the problem. If they don't provide enough detail, ask:
   - Which advisor persona?
   - What did you ask it?
   - What did it say that felt wrong?
   - What would you have expected instead?

2. **Classify the issue.** Determine the type:
   - `voice` — The advisor didn't sound like its tradition
   - `accuracy` — The advice was incorrect or misleading for this tradition
   - `blind-spots` — Missing or generic blind spots
   - `caricature` — The advisor was a strawman rather than the best version of the tradition
   - `disagreement` — The advisor didn't hold its ground in a faculty meeting
   - `other` — Anything else

3. **Create the GitHub issue.** Use the `gh` command to file an issue on `phdemotions/faculty-meeting`:

```bash
gh issue create \
  --repo phdemotions/faculty-meeting \
  --title "[Persona Feedback] {persona-name}: {short description}" \
  --label "persona-feedback,{issue-type}" \
  --body "## Persona
{persona-name}

## Issue Type
{classification}

## What Happened
{user's description of the problem}

## What Was Expected
{what the user expected instead, if provided}

## Context
{the question or prompt that triggered the issue, if provided}

---
*Filed via /report-issue*"
```

4. **Confirm to the user.** Share the issue URL and thank them — their feedback directly improves the advisor for everyone.

## Important

- Always create the issue on `phdemotions/faculty-meeting`, regardless of what repo the user is currently in.
- Use the `persona-feedback` label on every issue so maintainers can filter.
- Be respectful in the issue body — the user is helping improve the project.
- If `gh` is not installed or not authenticated, provide the user with a pre-formatted issue they can paste into GitHub manually, and link them to `https://github.com/phdemotions/faculty-meeting/issues/new`.
