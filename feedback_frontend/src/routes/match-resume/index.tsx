import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/**
 * Resume Matcher Page - allows user to upload a resume and job description, finds best matching keywords.
 */
export default component$(() => {
  const resumeText = useSignal("");
  const jobDesc = useSignal("");
  const result = useSignal<string | null>(null);
  const loading = useSignal(false);

  // Dummy logic for demonstration; adapt to call backend if integration available
  const matchResume = $(() => {
    loading.value = true;
    setTimeout(() => {
      const resumeWords = resumeText.value.split(/\W/).map(w => w.toLowerCase());
      const jobWords = jobDesc.value.split(/\W/).map(w => w.toLowerCase());
      const overlap = jobWords.filter(
        (w, i) => w && resumeWords.includes(w) && jobWords.indexOf(w) === i
      );
      result.value = `Matched keywords: ${overlap.join(", ")}`;
      loading.value = false;
    }, 500);
  });

  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">Resume Matcher</span>
      </h1>
      <p>Paste your resume and a job description to find matching keywords.</p>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <label>
            <b>Your Resume</b>
            <textarea
              style={{ width: "100%", minHeight: "120px" }}
              value={resumeText.value}
              onInput$={e =>
                (resumeText.value = (e.target as HTMLTextAreaElement).value)
              }
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <label>
            <b>Job Description</b>
            <textarea
              style={{ width: "100%", minHeight: "120px" }}
              value={jobDesc.value}
              onInput$={e =>
                (jobDesc.value = (e.target as HTMLTextAreaElement).value)
              }
            />
          </label>
        </div>
      </div>
      <button
        class="button-dark"
        style={{ marginTop: 20 }}
        type="button"
        disabled={loading.value}
        onClick$={matchResume}
      >
        {loading.value ? "Matching..." : "Find Matches"}
      </button>
      {result.value && (
        <div style={{ marginTop: 24, color: "#18b6f6" }}>
          {result.value}
        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Match Resume | FeedbackFusion",
};
