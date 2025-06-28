/**
 * Client-side form validation utilities.
 * Exported functions can be used for validating fields before submitting to backend.
 */

/**
 * PUBLIC_INTERFACE
 * Validate an email address (simple regex).
 */
export function validateEmail(email: string): boolean {
  // Simple email pattern, adjust as needed
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * PUBLIC_INTERFACE
 * Validate required string (non-empty and not just whitespace).
 */
export function validateRequired(val: string): boolean {
  return val != null && val.trim().length > 0;
}

/**
 * PUBLIC_INTERFACE
 * Validate feedback length (optional minimum).
 */
export function validateFeedbackLength(feedback: string, minLen = 10): boolean {
  return typeof feedback === "string" && feedback.trim().length >= minLen;
}

/**
 * PUBLIC_INTERFACE
 * Validate resume or job description content for a minimum number of non-empty words.
 */
export function validateTextContent(
  text: string,
  minWords = 10
): boolean {
  return typeof text === "string" &&
    text.trim().split(/\s+/).filter(Boolean).length >= minWords;
}
