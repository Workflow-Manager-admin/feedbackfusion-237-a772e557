import { component$ } from "@builder.io/qwik";

/**
 * Upload Icon component that renders upload-icon.svg from public.
 */
// PUBLIC_INTERFACE
export const UploadIcon = component$<{ size?: number }>(({ size = 22 }) => (
  <img
    src="/upload-icon.svg"
    alt="Upload Icon"
    width={size}
    height={size}
    loading="lazy"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
));
