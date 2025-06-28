import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

/**
 * ResumeUploader: Upload a resume file or paste resume text.
 * Props:
 *   value: string  - The current resume text.
 *   onTextChange$: PropFunction<(text: string) => void> - Called on textarea change.
 *   onFileChange$?: PropFunction<(file: File) => void> - Called on file upload. (optional)
 */
// PUBLIC_INTERFACE
export default component$<{
  value: string;
  onTextChange$: PropFunction<(text: string) => void>;
  onFileChange$?: PropFunction<(file: File) => void>;
}>(({ value, onTextChange$, onFileChange$ }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ fontWeight: 500 }}>
        Resume
        <span style={{ marginLeft: 6 }}><img src="/upload-icon.svg" alt="Upload Icon" width={18} style={{verticalAlign: "middle"}} loading="lazy" /></span>
        <input
          type="file"
          accept=".pdf,.doc,.txt"
          style={{ display: "block", marginBottom: 10, marginTop: 4 }}
          onChange$={onFileChange$
            ? (e => {
                const inp = e.target as HTMLInputElement;
                if (inp.files && inp.files.length > 0) {
                  onFileChange$(inp.files[0]);
                }
              })
            : undefined}
        />
      </label>
      <textarea
        style={{ width: "100%", minHeight: 100, marginBottom: 4 }}
        placeholder="Paste resume here or upload a file above"
        value={value}
        onInput$={e => onTextChange$((e.target as HTMLTextAreaElement).value)}
      />
    </div>
  );
});
