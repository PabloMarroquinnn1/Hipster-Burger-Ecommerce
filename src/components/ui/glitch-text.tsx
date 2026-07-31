import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlitchTextProps = {
  as?: "span" | "div";
  className?: string;
  children: ReactNode;
};

/** Shared wrapper for the chromatic-aberration hover effect (see .glitch-hover in globals.css). */
export function GlitchText({ as: Tag = "span", className, children }: GlitchTextProps) {
  return <Tag className={cn("glitch-hover", className)}>{children}</Tag>;
}
