import { component$, PropFunction } from "@builder.io/qwik";

/**
 * JobDescriptionInput: Input for job description.
 * Props:
 *   value: string
 *   onChange$: (value: string) => void
 */
 // PUBLIC_INTERFACE
export default component$<{
  value: string;
  onChange$: PropFunction<(val: string) => void>;
}>(({ value, onChange$ }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={{ fontWeight: 500 }}>
      Job Description
      <textarea
        style={{ width: "100%", minHeight: 100, marginTop: 4 }}
        placeholder="Paste job description here"
        value={value}
        onInput$={e => onChange$((e.target as HTMLTextAreaElement).value)}
      />
    </label>
  </div>
));
