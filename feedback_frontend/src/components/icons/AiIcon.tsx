import { component$ } from "@builder.io/qwik";

/**
 * AI Icon component that renders ai-icon.svg from public.
 */
// PUBLIC_INTERFACE
export const AiIcon = component$<{ size?: number }>(({ size = 22 }) => (
  <img
    src="/ai-icon.svg"
    alt="AI Icon"
    width={size}
    height={size}
    loading="lazy"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
));
