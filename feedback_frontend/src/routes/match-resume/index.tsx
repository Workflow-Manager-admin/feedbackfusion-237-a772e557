import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ResumeUploader from "../../components/ResumeUploader";
import JobDescriptionInput from "../../components/JobDescriptionInput";
import SuggestionsDisplay from "../../components/SuggestionsDisplay";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorBanner from "../../components/ErrorBanner";

/**
 * Resume Matcher Page - allows user to upload a resume and job description, finds best matching keywords.
 */
export default component$(() => {
  const resumeText = useSignal("");
  const jobDesc = useSignal("");
  const suggestions = useSignal<string[]>([]);
  const result = useSignal<string | null>(null);
  const loading = useSignal(false);
  const error = useSignal<string | null>(null);

  // Dummy logic for demonstration; adapt to call backend if integration available
  const matchResume = $(() => {
    loading.value = true;
    result.value = null;
    error.value = null;
    setTimeout(() => {
      try {
        const resumeWords = resumeText.value.split(/\W/).map(w => w.toLowerCase());
        const jobWords = jobDesc.value.split(/\W/).map(w => w.toLowerCase());
        const overlap = jobWords.filter(
          (w, i) => w && resumeWords.includes(w) && jobWords.indexOf(w) === i
        );
        // Fake improvement suggestions
        suggestions.value = overlap.length
          ? ["Add more results-oriented verbs!", "Tailor your skills to match: " + overlap.slice(0,3).join(", ")]
          : ["Try adding more relevant keywords."];
        result.value = `Matched keywords: ${overlap.join(", ")}`;
      } catch (e: any) {
        error.value = "Matching failed!";
      }
      loading.value = false;
    }, 500);
  });

  // $()-wrap actual async file handling here (not inside child!)
  const handleFileUpload = $(async (file: File) => {
    const text = await file.text();
    resumeText.value = text;
  });

  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">Resume Matcher</span>
      </h1>
      <p>Paste your resume and a job description to find matching keywords.</p>
      {error.value && <ErrorBanner message={error.value} />}
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <ResumeUploader
            value={resumeText.value}
            onTextChange$={val => (resumeText.value = val)}
            onFileChange$={handleFileUpload}
          />
        </div>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <JobDescriptionInput
            value={jobDesc.value}
            onChange$={val => (jobDesc.value = val)}
          />
        </div>
      </div>
      <button
        class="button-dark"
        style={{ marginTop: 20 }}
        type="button"
        disabled={loading.value}
        onClick$={matchResume}
      >
        {loading.value ? <><LoadingSpinner /> Matching...</> : "Find Matches"}
      </button>
      {result.value && (
        <div style={{ marginTop: 24, color: "#18b6f6" }}>
          {result.value}
        </div>
      )}
      <SuggestionsDisplay suggestions={suggestions.value} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Match Resume | FeedbackFusion",
};
