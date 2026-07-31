"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useCartStore } from "@/stores/cart-store";

const STAGES = [
  { at: 0, label: "Pedido confirmado" },
  { at: 25, label: "En la plancha" },
  { at: 55, label: "En camino" },
  { at: 90, label: "¡Entregado!" },
];

const TRACKER_DURATION = 9;

export function OrderTracker() {
  const order = useCartStore((state) => state.lastOrder);
  const showInvoice = useCartStore((state) => state.showInvoice);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const controls = animate(0, 100, {
      duration: TRACKER_DURATION,
      ease: "easeInOut",
      onUpdate: setAnimatedProgress,
    });
    return () => controls.stop();
  }, [prefersReducedMotion]);

  const progress = prefersReducedMotion ? 100 : animatedProgress;

  if (!order) return null;

  const stage = [...STAGES].reverse().find((s) => progress >= s.at) ?? STAGES[0];

  return (
    <div className="flex flex-col items-center text-center py-10 px-2">
      <span className="font-label text-label-mono uppercase text-on-surface-variant tracking-widest">
        Pedido #{order.id}
      </span>
      <p className="mt-2 font-heading text-headline-md uppercase">{stage.label}</p>

      <div className="relative w-full mt-9 h-2 rounded-full bg-surface-variant">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
          style={{ width: `${progress}%` }}
        />
        <span
          className="absolute -top-3 text-xl leading-none"
          style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
          aria-hidden="true"
        >
          🍔
        </span>
      </div>

      <div className="flex justify-between w-full mt-3">
        {STAGES.map((s) => (
          <span
            key={s.label}
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              progress >= s.at ? "bg-primary" : "bg-surface-variant",
            )}
          />
        ))}
      </div>

      <p className="mt-8 max-w-[32ch] text-body-md text-on-surface-variant">
        Estimado real: 25–35 min. Te escribimos por WhatsApp para confirmar la entrega.
      </p>

      <Button type="button" variant="secondary" onClick={showInvoice} className="mt-8">
        Ver factura
      </Button>
    </div>
  );
}
