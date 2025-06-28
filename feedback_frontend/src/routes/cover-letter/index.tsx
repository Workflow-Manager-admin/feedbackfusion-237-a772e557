import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CoverLetterForm from "../../components/CoverLetterForm";

/**
 * AI Cover Letter Generator Page - collects user data and (optionally) fetches generated letter from backend.
 */
export default component$(() => {
  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">AI Cover Letter</span>
      </h1>
      <p>Fill in the details and let our AI help draft your cover letter.</p>
      <CoverLetterForm />
    </div>
  );
});

export const head: DocumentHead = {
  title: "AI Cover Letter | FeedbackFusion",
};
