import { component$ } from "@builder.io/qwik";
// Removed: import { useServerTimeLoader } from "../../../routes/layout";
// Removed: import styles from "./footer.module.css";

export default component$(() => {
  // Removed: const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span
          style={{
            fontWeight: 700,
            color: "#18b6f6",
            fontSize: "1.03rem",
            marginBottom: 6,
            letterSpacing: "-0.012em",
          }}
        >
          🛤️ JobTrack <span style={{ color: "#ac7ff4" }}>AI</span>
        </span>
        <span style={{ color: "#aaa", fontSize: "0.85em", marginBottom: 4 }}>
          &copy; {new Date().getFullYear()} JobTrack AI. All rights reserved.
        </span>
      </div>
    </footer>
  );
});
