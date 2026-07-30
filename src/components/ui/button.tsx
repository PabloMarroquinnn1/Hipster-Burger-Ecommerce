import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-label text-label-bold uppercase tracking-wide transition-transform";

const variants: Record<Variant, string> = {
  primary:
    "duct-tape-btn hard-shadow hover:hard-shadow-red bg-primary text-on-primary px-6 py-3",
  secondary:
    "rounded-full border-2 border-on-surface text-on-surface px-6 py-3 hover:bg-on-surface hover:text-surface",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { ...rest } = props as ButtonAsButton;
  return <button className={classes} {...rest} />;
}
