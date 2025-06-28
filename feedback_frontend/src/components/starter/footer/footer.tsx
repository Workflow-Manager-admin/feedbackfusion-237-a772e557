import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <a href="/" class={styles.anchor} style={{ marginBottom: 10 }}>
          <img
            src="/logo.svg"
            alt="FeedbackFusion Logo"
            style={{ height: 32, width: "auto" }}
            width={110}
            height={32}
            loading="lazy"
          />
        </a>
        <span style={{ color: "#aaa", fontSize: "0.85em", marginBottom: 4 }}>
          &copy; {new Date().getFullYear()} FeedbackFusion | <span>{serverTime.value.date}</span>
        </span>
      </div>
    </footer>
  );
});
