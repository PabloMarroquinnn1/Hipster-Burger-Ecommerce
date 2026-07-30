import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const sizes = {
  "display-xl": "text-display-xl",
  "headline-lg": "text-headline-lg-mobile md:text-headline-lg",
  "headline-md": "text-headline-md",
} as const;

type HeadingProps = {
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function Heading({ as: Tag = "h2", size = "headline-lg", className, children }: HeadingProps) {
  return (
    <Tag className={cn("font-heading uppercase leading-none", sizes[size], className)}>
      {children}
    </Tag>
  );
}

type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <div
      className={cn(
        "font-label text-label-mono uppercase tracking-[0.28em] text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
