/**
 * Faculty Meeting — Feedback Endpoint
 *
 * Accepts diagnostic-quality persona feedback from researchers (via Claude)
 * and creates GitHub issues automatically. The researcher never needs a
 * GitHub account, CLI tools, or any technical knowledge.
 *
 * PRIVACY: Issues contain ZERO information about the researcher's work.
 * No research questions, no draft text, no topic details. Only the
 * advisor's performance is described. Researcher identity is limited to
 * an anonymous UUID for correlating multiple reports.
 *
 * Environment variables (set in Vercel dashboard):
 *   GITHUB_TOKEN   — Personal access token with `repo` scope for phdemotions/faculty-meeting
 *   FEEDBACK_SECRET — Shared secret to prevent abuse (optional)
 */

const REPO_OWNER = "phdemotions";
const REPO_NAME = "faculty-meeting";
const GITHUB_API = "https://api.github.com";

const VALID_ISSUE_TYPES = [
  "voice",
  "accuracy",
  "blind-spots",
  "caricature",
  "disagreement",
  "coverage",
  "wrong-lens",
  "other",
];

const VALID_SEVERITIES = ["critical", "major", "minor"];

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate shared secret
  const feedbackSecret = process.env.FEEDBACK_SECRET;
  if (feedbackSecret) {
    const provided = req.headers["x-feedback-secret"] || req.body?.secret;
    if (provided !== feedbackSecret) {
      return res.status(403).json({ error: "Invalid secret" });
    }
  }

  const {
    persona,
    issue_type,
    severity,
    mode,
    panel_members,
    question_type,
    how_advisor_failed,
    what_tradition_should_do,
    likely_fix_location,
    researcher_id,
    // Legacy fields (still accepted for backward compatibility)
    what_happened,
    what_expected,
  } = req.body || {};

  // Validate required fields
  const description = how_advisor_failed || what_happened;
  if (!persona || !description) {
    return res.status(400).json({
      error: "Missing required fields: persona, how_advisor_failed",
    });
  }

  // Validate enums
  const type = VALID_ISSUE_TYPES.includes(issue_type) ? issue_type : "other";
  const sev = VALID_SEVERITIES.includes(severity) ? severity : "major";

  // Build the title — advisor performance only, no researcher details
  const titleSummary = truncate(how_advisor_failed || what_happened, 60);
  const title = `[Persona Feedback] ${persona}: ${titleSummary}`;

  // Build the diagnostic issue body — strictly about advisor performance
  const bodyParts = [];

  bodyParts.push(`## Persona\n${persona}`);
  bodyParts.push(`## Issue Type\n${type} | Severity: ${sev}`);

  // Mode
  if (mode === "panel" && panel_members) {
    bodyParts.push(`## Mode\nFaculty meeting panel with: ${panel_members}`);
  } else if (mode) {
    bodyParts.push(`## Mode\n${mode === "solo" ? "Solo advisor" : mode}`);
  }

  // Generic question type — NO actual research details
  if (question_type) {
    bodyParts.push(`## Question Type\n${question_type}`);
  }

  // How the advisor failed — the core diagnostic
  if (how_advisor_failed) {
    bodyParts.push(`## How the Advisor Failed\n${how_advisor_failed}`);
  } else if (what_happened) {
    bodyParts.push(`## What Happened\n${what_happened}`);
  }

  // What the tradition should have done
  if (what_tradition_should_do) {
    bodyParts.push(
      `## What the Tradition Should Have Done\n${what_tradition_should_do}`
    );
  } else if (what_expected) {
    bodyParts.push(`## What Was Expected\n${what_expected}`);
  }

  // Where to fix it
  if (likely_fix_location) {
    bodyParts.push(`## Likely Fix Location\n${likely_fix_location}`);
  }

  // Anonymous researcher ID — for correlation only
  if (researcher_id) {
    bodyParts.push(`## Researcher\nAnonymous ID: \`${researcher_id}\``);
  }

  bodyParts.push("---\n*Filed automatically via advisor feedback check*");

  const body = bodyParts.join("\n\n");

  // Build labels
  const labels = ["persona-feedback", type];
  if (sev === "critical") labels.push("critical");

  // Create the GitHub issue
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return res
      .status(500)
      .json({ error: "Server misconfigured: missing GitHub token" });
  }

  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({ title, body, labels }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("GitHub API error:", response.status, error);
      return res.status(502).json({
        error: "Failed to create issue on GitHub",
        detail: response.status,
      });
    }

    const issue = await response.json();

    return res.status(201).json({
      success: true,
      message: "Feedback submitted — thank you.",
      issue_number: issue.number,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function truncate(str, max) {
  if (!str) return "";
  const clean = str.replace(/\n/g, " ").trim();
  return clean.length <= max ? clean : clean.slice(0, max - 1) + "…";
}
