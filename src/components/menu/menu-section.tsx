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
      <div className="mb-14 pb-6 border-b-8 border-on-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading as="h2" size="headline-lg">
            Nuestro menú
          </Heading>
          <span className="tilt-slight-right hard-shadow inline-block mt-4 border-2 border-on-primary bg-primary text-on-primary font-label text-label-bold uppercase px-4 py-2">
            Puro sabor. Cero bull.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[46ch] text-body-lg text-on-surface-variant"
        >
          Todas van con pan brioche tostado, cebolla en la plancha y salsa de la casa. Papas
          aparte, siempre — así nunca se aguadan.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {MENU_ITEMS.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
