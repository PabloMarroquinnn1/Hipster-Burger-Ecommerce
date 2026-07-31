"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StencilBadge, PriceMedallion } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/stores/cart-store";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { MenuItem } from "@/data/menu";

const TILTS = ["tilt-slight-right", "tilt-slight", "tilt-heavy-right", "tilt-heavy"];
const SPICE_LEVELS = 4;

type ProductCardProps = {
  item: MenuItem;
  index: number;
};

export function ProductCard({ item, index }: ProductCardProps) {
  const tilt = TILTS[index % TILTS.length];
  const addItem = useCartStore((state) => state.addItem);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative flex flex-col gap-4 bg-surface-container-lowest border-4 border-on-surface p-6",
        "hard-shadow hover:hard-shadow-red hover:-translate-x-1 hover:-translate-y-1",
        "transition-[transform,box-shadow] duration-300",
        item.variant === "stencil" && tilt,
      )}
    >
      {item.variant === "stencil" && (
        <div className="absolute -top-4 -left-4 z-10">
          <StencilBadge>{item.badge}</StencilBadge>
        </div>
      )}

      {item.variant === "image" && (
        <div className="-m-6 mb-0 [perspective:1000px] overflow-hidden border-b-4 border-on-surface relative">
          <div className="h-48 w-full bg-on-surface relative transition-transform duration-500 group-hover:[transform:scale(1.05)_rotateX(5deg)_rotateY(-5deg)]">
            <Image
              src="/images/cheeseburger-cutout.png"
              alt={`${item.name}: hamburguesa con queso derretido`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-2"
            />
          </div>
          <div className="absolute left-4 bottom-3 flex items-center gap-2 bg-on-surface/85 text-surface px-3 py-1.5 font-label text-label-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {item.badge}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 font-label text-label-mono uppercase text-primary">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1 h-px bg-surface-variant" />
        <span className="text-on-surface-variant">{item.category}</span>
      </div>

      <div className="flex justify-between items-start gap-4">
        <h3 className="font-heading text-headline-md uppercase leading-none max-w-[9ch]">
          {item.name}
        </h3>
        <PriceMedallion price={`Q${item.price}`} />
      </div>

      <p className="text-body-md text-on-surface-variant">{item.description}</p>

      {item.spiceLevel !== undefined && (
        <div className="flex items-center gap-2">
          <span className="font-label text-label-mono uppercase text-on-surface-variant">
            Nivel
          </span>
          <div className="flex gap-1">
            {Array.from({ length: SPICE_LEVELS }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={cn(
                  "w-6 h-1.5 rounded-full",
                  dotIndex < item.spiceLevel! ? "bg-primary" : "bg-surface-variant",
                )}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {item.ingredients.map((ingredient) => (
          <span
            key={ingredient}
            className="px-3 py-1 rounded-full border border-outline-variant text-xs uppercase tracking-wide text-on-surface-variant"
          >
            {ingredient}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-3 border-t border-surface-variant">
        <span className="font-label text-label-mono uppercase text-on-surface-variant">
          {item.eta}
        </span>
        <Button
          type="button"
          variant="primary"
          className="px-4 py-2 text-xs"
          onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
        >
          + Agregar
        </Button>
      </div>
    </motion.article>
  );
}
