import { component$, useVisibleTask$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

type FeedbackEntry = {
  id: number;
  name: string;
  email: string;
  feedback: string;
  date: string;
  sentiment?: string;
  summary?: string;
};

/**
 * Dashboard Page - lets admin view/filter feedback entries from backend API.
 */
export default component$(() => {
  const entries = useSignal<FeedbackEntry[]>([]);
  const fetchError = useSignal<string | null>(null);
  const query = useSignal("");
  const fetching = useSignal(false);

  // Initial data load on mount; do not use $() here due to serialization!
  useVisibleTask$(async () => {
    fetching.value = true;
    fetchError.value = null;
    try {
      const response = await fetch(
        // Adjust URL as needed for deployment
        "http://localhost:3001/feedback"
      );
      if (!response.ok) throw new Error("Failed to load data");
      const data = await response.json();
      entries.value = Array.isArray(data) ? data : [];
    } catch (e: any) {
      fetchError.value = e.message || String(e);
    }
    fetching.value = false;
  });

  const reload = $(async () => {
    fetching.value = true;
    fetchError.value = null;
    try {
      const response = await fetch(
        // Adjust URL as needed for deployment
        "http://localhost:3001/feedback"
      );
      if (!response.ok) throw new Error("Failed to load data");
      const data = await response.json();
      entries.value = Array.isArray(data) ? data : [];
    } catch (e: any) {
      fetchError.value = e.message || String(e);
    }
    fetching.value = false;
  });

  const filteredEntries = () =>
    entries.value.filter(
      e =>
        e.name.toLowerCase().includes(query.value.toLowerCase()) ||
        e.email.toLowerCase().includes(query.value.toLowerCase()) ||
        e.feedback.toLowerCase().includes(query.value.toLowerCase()) ||
        (e.sentiment?.toLowerCase().includes(query.value.toLowerCase()) ?? false)
    );

  return (
    <div class="container container-center">
      <h1>
        <span class="highlight">Feedback Dashboard</span>
      </h1>
      <div style={{ marginBottom: 14 }}>
        <input
          style={{ maxWidth: 320 }}
          value={query.value}
          onInput$={e =>
            (query.value = (e.target as HTMLInputElement).value)
          }
          placeholder="Filter by keyword, name, sentiment..."
        />
        <button
          class="button-dark"
          style={{marginLeft: 10}}
          type="button"
          onClick$={reload}
          disabled={fetching.value}
        >
          {fetching.value ? "Loading..." : "Reload"}
        </button>
      </div>
      {fetchError.value && (
        <div style={{ color: "red", marginBottom: 8 }}>
          Error: {fetchError.value}
        </div>
      )}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", background: "#181C31", color: "white" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th>Sentiment</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries().map((fb, i) => (
              <tr key={fb.id || fb.date || i}>
                <td>{new Date(fb.date).toLocaleString()}</td>
                <td>{fb.name}</td>
                <td>{fb.email}</td>
                <td>{fb.feedback}</td>
                <td>{fb.sentiment || ""}</td>
                <td>{fb.summary || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredEntries().length === 0 && (
          <div style={{ color: "#18b6f6", marginTop: 28 }}>
            No feedback entries found.
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Dashboard | FeedbackFusion",
};
