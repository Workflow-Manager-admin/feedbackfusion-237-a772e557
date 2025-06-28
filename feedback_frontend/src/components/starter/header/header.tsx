import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

// Qwik provides Vite's public folder at root, so use "/logo.svg"
/**
 * Site-wide header for FeedbackFusion. On JobTrack AI (jobtrack-home), header should NOT be visible.
 * The logo and navigation links for Docs, Examples, Tutorials are intentionally omitted to avoid cross-app branding.
 */
export default component$(() => {
  return (
    <header class={styles.header}>
      {/* Header intentionally left blank for JobTrack AI pages or use as site shell only */}
      <div class={["container", styles.wrapper]}></div>
    </header>
  );
});
