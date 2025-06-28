/**
 * API utilities for interaction with the Flask backend.
 * 
 * Contains POST /match-resume and additional endpoint helpers.
 * Updates the base URL as needed for deployment.
 */

// PUBLIC_INTERFACE
const API_BASE_URL = "http://localhost:3001";

// Helper to handle common fetch logic and error extraction
async function fetchJson<T = any>(
  url: string,
  options: RequestInit
): Promise<T> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      let errMsg = `Error: ${res.status}`;
      try {
        const err = await res.json();
        if (err && err.error) errMsg = err.error;
      } catch (e) {
        // Ignore error while parsing error details
      }
      throw new Error(errMsg);
    }
    const data: T = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "API call failed");
  }
}

/**
 * PUBLIC_INTERFACE
 * POST /match-resume — Submits resume/job description to backend for matching.
 * @param body {object} - Should contain: { resume: string, job_description: string }
 * @returns Matching result from backend.
 */
export async function matchResumeAPI(body: {
  resume: string;
  job_description: string;
}): Promise<{ matched_keywords: string[]; suggestions?: string[]; error?: string }> {
  return fetchJson(`${API_BASE_URL}/match-resume`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });
}

/**
 * PUBLIC_INTERFACE
 * POST /submit — Submit feedback form.
 * @param body {object} - Should contain: { name: string, email: string, feedback: string }
 */
export async function submitFeedbackAPI(body: {
  name: string;
  email: string;
  feedback: string;
}): Promise<{ message?: string; error?: string }> {
  return fetchJson(`${API_BASE_URL}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

/**
 * PUBLIC_INTERFACE
 * GET /feedback — Fetches all feedback entries.
 */
export async function getFeedbackAPI(): Promise<any[]> {
  return fetchJson(`${API_BASE_URL}/feedback`, { method: "GET" });
}

// You can add other backend endpoint wrappers here.
