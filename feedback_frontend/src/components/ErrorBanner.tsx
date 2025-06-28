import { component$ } from "@builder.io/qwik";

/**
 * ErrorBanner: Shows error messages in a visible colored bar.
 * Props:
 *   message: string
 */
 // PUBLIC_INTERFACE
export default component$<{ message: string }>(({ message }) => (
  <div style={{
    background: "#e63946",
    color: "white",
    borderRadius: 8,
    padding: "10px 18px",
    marginBottom: 12,
    fontWeight: 500
  }}>
    <span style={{ marginRight: 8 }}>⚠️</span>
    {message}
  </div>
));
