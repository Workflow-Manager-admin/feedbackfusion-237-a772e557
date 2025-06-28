import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/**
 * AI Cover Letter Generator Page - collects user data and (optionally) fetches generated letter from backend.
 */
export default component$(() => {
  const name = useSignal("");
  const role = useSignal("");
  const company = useSignal("");
  const skills = useSignal("");
  const loading = useSignal(false);
  const coverLetter = useSignal<string | null>(null);

  // Dummy logic for demo; replace with backend integration for real AI
  const generateCoverLetter = $(() => {
    loading.value = true;
    setTimeout(() => {
      coverLetter.value = `Dear ${company.value},

I am excited to apply for the ${role.value} role at your company. My experience with ${skills.value} will allow me to contribute meaningfully to your team.

Sincerely,
${name.value}
`;
      loading.value = false;
    }, 800);
  });

  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">AI Cover Letter</span>
      </h1>
      <p>Fill in the details and let our AI help draft your cover letter.</p>
      <div style={{maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16}}>
        <input
          placeholder="Your Name"
          value={name.value}
          onInput$={e => (name.value = (e.target as HTMLInputElement).value)}
        />
        <input
          placeholder="Position/Role"
          value={role.value}
          onInput$={e => (role.value = (e.target as HTMLInputElement).value)}
        />
        <input
          placeholder="Company"
          value={company.value}
          onInput$={e => (company.value = (e.target as HTMLInputElement).value)}
        />
        <input
          placeholder="Most Relevant Skills (comma-separated)"
          value={skills.value}
          onInput$={e => (skills.value = (e.target as HTMLInputElement).value)}
        />
        <button
          class="button-dark"
          style={{marginTop: 12}}
          disabled={loading.value}
          onClick$={generateCoverLetter}
        >
          {loading.value ? "Generating..." : "Generate Letter"}
        </button>
        {coverLetter.value && (
          <textarea
            style={{marginTop: 16, width: "100%", minHeight: 180, background: "#F3F3F3", padding: 12, color: "#222"}}
            readOnly
            value={coverLetter.value}
          />
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "AI Cover Letter | FeedbackFusion",
};
