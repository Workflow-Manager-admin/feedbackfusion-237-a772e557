import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // Feedback form state
  const name = useSignal("");
  const email = useSignal("");
  const feedback = useSignal("");
  const submitting = useSignal(false);
  const submitResult = useSignal<string | null>(null);

  // Submits feedback to the Flask backend
  const submitFeedback = $(async () => {
    submitting.value = true;
    submitResult.value = null;
    try {
      const res = await fetch("http://localhost:3001/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          feedback: feedback.value,
        }),
      });
      if (!res.ok) {
        submitResult.value = "Error submitting feedback!";
      } else {
        submitResult.value = "Feedback submitted! Thank you.";
        name.value = "";
        email.value = "";
        feedback.value = "";
      }
    } catch (e: any) {
      submitResult.value = "Submission failed: " + e.message;
    } finally {
      submitting.value = false;
    }
  });

  return (
    <div class="container container-center" style={{maxWidth: 680, margin: "0 auto"}}>
      <h1>
        Welcome to <span class="highlight">FeedbackFusion</span>
      </h1>
      <p>
        Leave your feedback and help us improve! Explore job search tools and check the dashboard for submitted feedback.
      </p>

      <div style={{background: "#181C31", borderRadius: 14, padding: 24, margin: "30px 0"}}>
        <h2 style={{marginTop: 0}}>Submit Feedback</h2>
        <div style={{display: "flex", flexDirection: "column", gap: 14, marginBottom: 14}}>
          <input
            placeholder="Your Name"
            value={name.value}
            onInput$={e => (name.value = (e.target as HTMLInputElement).value)}
          />
          <input
            placeholder="Your Email"
            value={email.value}
            onInput$={e => (email.value = (e.target as HTMLInputElement).value)}
          />
          <textarea
            placeholder="Describe your experience or ideas..."
            value={feedback.value}
            style={{minHeight: 90}}
            onInput$={e => (feedback.value = (e.target as HTMLTextAreaElement).value)}
          />
        </div>
        <button
          class="button-dark"
          style={{width: "fit-content"}}
          disabled={submitting.value || !feedback.value || !name.value}
          type="button"
          onClick$={submitFeedback}
        >
          {submitting.value ? "Submitting..." : "Send Feedback"}
        </button>
        {submitResult.value && (
          <div style={{marginTop: 14, color: submitResult.value.startsWith("Error") ? "red" : "#18b6f6"}}>
            {submitResult.value}
          </div>
        )}
      </div>
      <div style={{display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center"}}>
        <a href="/dashboard" class="button button-dark">Admin Dashboard</a>
      </div>
      <div style={{ marginTop: 38, fontSize: "0.85rem", color: "#aaa" }}>
        Powered by Qwik & Flask | &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "FeedbackFusion – Landing Page",
  meta: [
    {
      name: "description",
      content: "User feedback system and admin dashboard.",
    },
  ],
};
