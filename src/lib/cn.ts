import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge doesn't know about our custom @theme tokens (globals.css) —
 * without this it can't tell "text-on-primary" (a color) apart from
 * "text-label-bold" (a font size) and drops one of them as a false conflict.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        "primary",
        "on-primary",
        "primary-container",
        "secondary",
        "on-secondary",
        "tertiary",
        "on-tertiary",
        "error",
        "on-error",
        "background",
        "surface",
        "surface-container-lowest",
        "surface-container-low",
        "surface-container",
        "surface-container-high",
        "surface-variant",
        "inverse-surface",
        "inverse-on-surface",
        "on-surface",
        "on-surface-variant",
        "outline",
        "outline-variant",
        "cream",
      ],
      text: [
        "display-xl",
        "headline-lg",
        "headline-lg-mobile",
        "headline-md",
        "body-lg",
        "body-md",
        "label-bold",
        "label-mono",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
