"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

function useCountUp(target: number, active: boolean, reduced: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, target, {
      duration: reduced ? 0 : 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [active, target, reduced]);

  return value;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const display = useCountUp(value, isInView, prefersReducedMotion);

  return (
    <div ref={ref}>
      <div className="font-heading text-5xl leading-none text-primary">
        {display}
        {suffix}
      </div>
      <div className="mt-1.5 text-xs uppercase tracking-wide text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}
