/**
 * Formatters: helper functions for formatting dates and text for display.
 */

/**
 * PUBLIC_INTERFACE
 * Format a timestamp/date-string as a readable string (e.g., "2023-05-01 12:34").
 * ISO strings and millisecond timestamps supported.
 */
export function formatDate(dateInput: string | number | Date): string {
  let date: Date;
  if (typeof dateInput === "string" || typeof dateInput === "number") {
    date = new Date(dateInput);
  } else {
    date = dateInput;
  }
  if (isNaN(date.getTime())) return String(dateInput);
  // Format: "YYYY-MM-DD HH:mm"
  return `${date.getFullYear()}-${(date.getMonth()+1)
    .toString().padStart(2,"0")}-${date.getDate()
    .toString().padStart(2,"0")} ${date.getHours()
    .toString().padStart(2,"0")}:${date.getMinutes()
    .toString().padStart(2,"0")}`;
}

/**
 * PUBLIC_INTERFACE
 * Capitalize the first character of a string.
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * PUBLIC_INTERFACE
 * Truncate text with ellipsis if it exceeds maxLen.
 */
export function truncateText(text: string, maxLen = 64): string {
  if (typeof text !== "string" || text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + "…";
}

