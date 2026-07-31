import { Eyebrow, Heading } from "@/components/ui/heading";
import { MENU_ITEMS } from "@/data/menu";
import { ProductCard } from "./product-card";

export function MenuSection() {
  return (
    <section id="menu" className="bg-surface px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12 pb-4 border-b-8 border-on-surface">
        <div>
          <Eyebrow>El letrero</Eyebrow>
          <Heading as="h2" size="headline-lg" className="mt-3">
            Nuestro menú
          </Heading>
        </div>
        <p className="max-w-[34ch] text-body-md text-on-surface-variant">
          Todas van con pan brioche tostado, cebolla en la plancha y salsa de la casa. Papas
          aparte, siempre.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {MENU_ITEMS.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
