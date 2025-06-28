import { component$ } from "@builder.io/qwik";

/**
 * SuggestionsDisplay: Shows AI suggestions for resume improvement.
 * Props:
 *   suggestions: string[]
 */
 // PUBLIC_INTERFACE
export default component$<{ suggestions: string[] }>(({ suggestions }) => (
  <div style={{
    background: "#161A28",
    color: "#18b6f6",
    borderRadius: 10,
    padding: 14, margin: "10px 0"
  }}>
    <b>Suggestions:</b>
    <ul>
      {suggestions.length === 0 ? <li>No suggestions available.</li> :
        suggestions.map((s, i) => <li key={i}>{s}</li>)
      }
    </ul>
  </div>
));
