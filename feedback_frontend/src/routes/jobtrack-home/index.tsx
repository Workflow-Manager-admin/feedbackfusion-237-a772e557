import { component$ } from "@builder.io/qwik";
import styles from "./jobtrack-home.module.css";

// PUBLIC_INTERFACE
export default component$(() => {
  return (
    <div class={styles.wrapper}>
      {/* Navbar */}
      <nav class={styles.navbar}>
        <div class={styles.logo}>
          <span class={styles.logoIcon}>🛤️</span>
          JobTrack <span class={styles.logoAccent}>AI</span>
        </div>
        <ul class={styles.navlinks}>
          <li><a href="#features">Features</a></li>
          <li><a href="#howitworks">How it Works</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/dashboard" class={styles.dashboardBtn}>Dashboard</a></li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section class={styles.hero}>
        <div class={styles.heroContent}>
          <h1>
            <span class={styles.highlight}>JobTrack AI</span>
          </h1>
          <p class={styles.subtitle}>
            Accelerate your job search with AI-driven tracking, resumes, applications, and feedback. Stay organized, stay ahead!
          </p>
          <div class={styles.ctaGroup}>
            <a href="/match-resume" class={styles.ctaPrimary}>Try Resume Matcher</a>
            <a href="/cover-letter" class={styles.ctaAlt}>Generate Cover Letter</a>
          </div>
        </div>
        <div class={styles.heroArt} aria-hidden="true" />
      </section>

      {/* Feature Grid */}
      <section class={styles.features} id="features">
        <h2 class={styles.featureTitle}>Key Features</h2>
        <div class={styles.grid}>
          <div class={styles.card}>
            <div class={styles.cardIcon}>🔍</div>
            <h3>AI Resume Matcher</h3>
            <p>
              Instantly match your resume to job descriptions and optimize your profile with actionable AI feedback.
            </p>
          </div>
          <div class={styles.card}>
            <div class={styles.cardIcon}>📝</div>
            <h3>Cover Letter Generator</h3>
            <p>
              Automatically generate tailored cover letters for every application in seconds with our smart AI tools.
            </p>
          </div>
          <div class={styles.card}>
            <div class={styles.cardIcon}>📊</div>
            <h3>Application Tracker</h3>
            <p>
              Keep track of all your job applications in one place—see status, feedback, due dates, and next steps.
            </p>
          </div>
          <div class={styles.card}>
            <div class={styles.cardIcon}>💬</div>
            <h3>AI Feedback Insights</h3>
            <p>
              Collect and analyze interview or recruiter feedback to continually improve each application.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class={styles.footer} id="contact">
        <div>
          <span class={styles.logoMini}>🛤️ <span class={styles.logoAccent}>JobTrack AI</span></span>
          <span class={styles.copyright}>
            &copy; {new Date().getFullYear()} JobTrackAI. All rights reserved.
          </span>
        </div>
        <div class={styles.madeby}>
          <a href="https://qwik.dev" target="_blank" rel="noopener" class={styles.powered}>Powered by Qwik</a>
        </div>
      </footer>
    </div>
  );
});
