"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { MENU_ITEMS } from "@/data/menu";
import { ProductCard } from "./product-card";

export function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-surface px-margin-mobile md:px-margin-desktop py-16 md:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12 pb-4 border-b-8 border-on-surface">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading as="h2" size="headline-lg">
            Nuestro menú
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start md:items-end gap-4"
        >
          <span className="hidden md:inline-block tilt-slight-right hard-shadow border-2 border-on-primary bg-primary text-on-primary font-label text-label-mono uppercase px-3 py-1.5">
            Puro sabor. Cero bull.
          </span>
          <p className="max-w-[34ch] text-body-md text-on-surface-variant">
            Todas van con pan brioche tostado, cebolla en la plancha y salsa de la casa. Papas
            aparte, siempre.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {MENU_ITEMS.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
