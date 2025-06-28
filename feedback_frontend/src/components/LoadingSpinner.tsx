import { component$ } from "@builder.io/qwik";

/**
 * LoadingSpinner: Circling indicator for loading states.
 */
// PUBLIC_INTERFACE
export default component$(() => (
  <span style={{
    display: "inline-block",
    width: 32, height: 32,
    verticalAlign: "middle"
  }}>
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle
        cx="16" cy="16" r="14"
        stroke="#18b6f6"
        stroke-width="4"
        fill="none"
        stroke-dasharray="44"
        stroke-dashoffset="10"
        style={{ opacity: 0.5 }}
      />
      <circle
        cx="16" cy="16" r="14"
        stroke="#ac7ff4"
        stroke-width="4"
        fill="none"
        stroke-dasharray="24"
        stroke-dashoffset="2"
        style={{ opacity: 1 }}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </span>
));
