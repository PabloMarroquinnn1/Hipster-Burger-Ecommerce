import { Eyebrow, Heading } from "@/components/ui/heading";
import { MENU_ITEMS } from "@/data/menu";
import { StatCounter } from "./stat-counter";

export function StorySection() {
  return (
    <section id="historia" className="bg-surface-container-lowest px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div className="relative">
          <div className="aspect-square rounded-[30px] border-4 border-on-surface bg-gradient-to-br from-primary-container to-on-surface" />
          <div className="tilt-heavy-right absolute -right-6 -bottom-8 w-40 h-40 rounded-full bg-primary text-on-primary border-4 border-surface hard-shadow flex items-center justify-center text-center p-5 font-heading uppercase leading-tight">
            Desde 2019 en la misma esquina
          </div>
        </div>

        <div>
          <Eyebrow>Historia</Eyebrow>
          <Heading as="h2" size="headline-lg" className="mt-3">
            Empezamos con una plancha prestada
          </Heading>
          <p className="mt-6 max-w-[48ch] text-body-lg text-on-surface-variant">
            Una plancha de segunda mano, un toldo rojo y un cuaderno para apuntar los pedidos. Los
            primeros meses vendíamos tres cosas: carne, queso y pan. Nos costó entender que eso ya
            era suficiente.
          </p>
          <p className="mt-5 max-w-[48ch] text-body-lg text-on-surface-variant">
            Hoy el cuaderno sigue ahí, pero el letrero es más grande. Molemos la carne cada
            mañana, aplastamos a mano y cerramos cuando se acaba. Ni un gramo congelado.
          </p>

          <blockquote className="mt-10 border-l-[6px] border-primary pl-6 font-heading text-2xl uppercase leading-tight">
            &ldquo;Si la plancha no truena cuando cae la carne, no está lista.&rdquo;
          </blockquote>

          <div className="mt-11 grid grid-cols-3 gap-6">
            <StatCounter value={MENU_ITEMS.length} label="Hamburguesas en carta" />
            <StatCounter value={100} suffix="%" label="Carne molida del día" />
            <StatCounter value={7} label="Años en Villa Nueva" />
          </div>
        </div>
      </div>
    </section>
  );
}
