import { component$ } from "@builder.io/qwik";

/**
 * FeedbackBox: Shows feedback analysis, sentiment, and summary.
 * Props:
 *   sentiment: string
 *   summary: string
 */
 // PUBLIC_INTERFACE
export default component$<{ sentiment?: string; summary?: string }>(
  ({ sentiment, summary }) => (
    <div style={{
      background: "#181C31", color: "#18b6f6",
      borderRadius: 10, padding: 18, margin: "16px 0"
    }}>
      <b>Sentiment:</b> {sentiment || "–"} <br />
      <b>Summary:</b> {summary || "–"}
    </div>
  )
);
