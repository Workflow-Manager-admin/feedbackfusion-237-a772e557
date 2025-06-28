import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FeedbackBox from "../../components/FeedbackBox";
import LoadingSpinner from "../../components/LoadingSpinner";

/**
 * Feedback Analyzer Page - analyzes pasted feedback for sentiment/summary (mocked AI).
 */
export default component$(() => {
  const userFeedback = useSignal("");
  const analyzing = useSignal(false);
  const analysis = useSignal<{ sentiment: string; summary: string } | null>(null);

  // Dummy AI analysis; swap with backend call if available
  const analyze = $(() => {
    analyzing.value = true;
    setTimeout(() => {
      let sentiment = "neutral";
      const summary = userFeedback.value.slice(0, 90) + "...";
      if (/love|great|excellent|awesome|fantastic/.test(userFeedback.value))
        sentiment = "positive";
      if (/hate|bad|terrible|poor|awful/.test(userFeedback.value))
        sentiment = "negative";
      analysis.value = {
        sentiment,
        summary
      };
      analyzing.value = false;
    }, 750);
  });

  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">Feedback Analyzer</span>
      </h1>
      <p>Enter feedback to analyze its sentiment and get a summary.</p>
      <textarea
        style={{ width: "100%", maxWidth: 520, minHeight: 100, margin: "0 auto", display: "block" }}
        placeholder="Paste feedback here..."
        value={userFeedback.value}
        onInput$={e =>
          (userFeedback.value = (e.target as HTMLTextAreaElement).value)
        }
      />
      <button
        class="button-dark"
        style={{marginTop: 18}}
        disabled={analyzing.value || !userFeedback.value}
        onClick$={analyze}
      >
        {analyzing.value ? (
          <>
            <img src="/ai-icon.svg" alt="AI" width={18} style={{marginRight: 5, verticalAlign: "middle"}} loading="lazy" />
            <LoadingSpinner /> Analyzing...
          </>
        ) : (
          <>
            <img src="/ai-icon.svg" alt="AI" width={18} style={{marginRight: 5, verticalAlign: "middle"}} loading="lazy" />
            Analyze
          </>
        )}
      </button>
      {analysis.value && (
        <FeedbackBox
          sentiment={analysis.value.sentiment}
          summary={analysis.value.summary}
        />
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Feedback Analyzer | FeedbackFusion",
};
