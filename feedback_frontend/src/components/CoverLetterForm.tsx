import { component$, useSignal, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

/**
 * CoverLetterForm: Collects cover letter info and generates a letter (mock logic by default).
 * Props:
 *   onGenerate$?: (formData) => Promise<string>
 */
// PUBLIC_INTERFACE
export default component$<{ onGenerate$?: PropFunction<(data: any) => Promise<string>> }>(
  (props) => {
    const name = useSignal("");
    const role = useSignal("");
    const company = useSignal("");
    const skills = useSignal("");
    const result = useSignal<string | null>(null);
    const loading = useSignal(false);

    // $-wrapped Qwik event handler: props not referenced, all signals are serializable
    const handleGenerate$ = $(async () => {
      loading.value = true;
      result.value = null;

      let letter: string;
      if (props.onGenerate$) {
        letter = await props.onGenerate$({
          name: name.value,
          role: role.value,
          company: company.value,
          skills: skills.value,
        });
      } else {
        letter = `Dear ${company.value},

I am excited to apply for the ${role.value} role at your company. My experience with ${skills.value} will allow me to contribute meaningfully to your team.

Sincerely,
${name.value}`;
      }
      result.value = letter;
      loading.value = false;
    });

    return (
      <div style={{
        maxWidth: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
        <input placeholder="Your Name"
               value={name.value}
               onInput$={e => (name.value = (e.target as HTMLInputElement).value)} />
        <input placeholder="Position/Role"
               value={role.value}
               onInput$={e => (role.value = (e.target as HTMLInputElement).value)} />
        <input placeholder="Company"
               value={company.value}
               onInput$={e => (company.value = (e.target as HTMLInputElement).value)} />
        <input placeholder="Most Relevant Skills (comma-separated)"
               value={skills.value}
               onInput$={e => (skills.value = (e.target as HTMLInputElement).value)} />
        <button class="button-dark"
                disabled={loading.value}
                onClick$={handleGenerate$}>
          {loading.value ? (
            <>
              <img src="/ai-icon.svg" alt="AI" width={18} style={{marginRight: 6, verticalAlign: "middle"}} loading="lazy" /> Generating...
            </>
          ) : (
            <>
              <img src="/ai-icon.svg" alt="AI" width={18} style={{marginRight: 6, verticalAlign: "middle"}} loading="lazy" /> Generate Letter
            </>
          )}
        </button>
        {result.value && (
          <textarea
            style={{
              marginTop: 16, width: "100%",
              minHeight: 180, background: "#F3F3F3",
              padding: 12, color: "#222"
            }}
            readOnly
            value={result.value}
          />
        )}
      </div>
    );
  }
);
