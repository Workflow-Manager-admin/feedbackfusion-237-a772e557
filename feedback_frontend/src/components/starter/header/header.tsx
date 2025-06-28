import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

// Qwik provides Vite's public folder at root, so use "/logo.svg"
export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="FeedbackFusion">
            <img
              src="/logo.svg"
              style={{ height: 50, width: "auto", display: "block" }}
              alt="FeedbackFusion Logo"
              loading="eager"
              width={143}
              height={50}
            />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.dev/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.dev/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.dev/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
