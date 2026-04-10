/**
 * Faculty Meeting — Feedback Endpoint
 *
 * Accepts persona feedback from researchers (via Claude) and creates
 * GitHub issues automatically. The researcher never needs a GitHub
 * account, CLI tools, or any technical knowledge.
 *
 * Environment variables (set in Vercel dashboard):
 *   GITHUB_TOKEN   — Personal access token with `repo` scope for phdemotions/faculty-meeting
 *   FEEDBACK_SECRET — Shared secret to prevent abuse (included in requests from Claude)
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
    what_happened,
    what_expected,
    researcher_words,
    context,
    researcher_id,
  } = req.body || {};

  // Validate required fields
  if (!persona || !what_happened) {
    return res.status(400).json({
      error: "Missing required fields: persona, what_happened",
    });
  }

  // Validate issue type
  const type = VALID_ISSUE_TYPES.includes(issue_type) ? issue_type : "other";

  // Build the issue body
  const title = `[Persona Feedback] ${persona}: ${truncate(what_happened, 60)}`;

  const bodyParts = [
    `## Persona\n${persona}`,
    `## Issue Type\n${type}`,
    `## What Happened\n${what_happened}`,
  ];

  if (what_expected) {
    bodyParts.push(`## What Was Expected\n${what_expected}`);
  }

  if (researcher_words) {
    bodyParts.push(`## Researcher's Words\n> ${researcher_words}`);
  }

  if (context) {
    bodyParts.push(`## Context\n${context}`);
  }

  if (researcher_id) {
    bodyParts.push(`## Researcher\nAnonymous ID: \`${researcher_id}\``);
  }

  bodyParts.push("---\n*Filed automatically via advisor feedback check*");

  const body = bodyParts.join("\n\n");

  // Create the GitHub issue
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return res.status(500).json({ error: "Server misconfigured: missing GitHub token" });
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
        body: JSON.stringify({
          title,
          body,
          labels: ["persona-feedback", type],
        }),
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
