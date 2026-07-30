import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type StencilBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function StencilBadge({ children, className }: StencilBadgeProps) {
  return (
    <span
      className={cn(
        "stencil-badge inline-block bg-on-surface text-on-primary font-label text-label-bold px-3 py-1",
        className,
      )}
    >
      {children}
    </span>
  );
}

type PriceMedallionProps = {
  price: string;
  className?: string;
};

export function PriceMedallion({ price, className }: PriceMedallionProps) {
  return (
    <span
      className={cn(
        "price-medallion flex-none w-[70px] h-[70px] grid place-items-center rounded-full bg-primary text-on-primary font-heading text-2xl",
        className,
      )}
    >
      {price}
    </span>
  );
}
