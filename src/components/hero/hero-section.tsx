import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StencilBadge } from "@/components/ui/badge";
import { AnimatedHeadline } from "./animated-headline";
import { Marquee } from "./marquee";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden border-b-8 border-on-surface bg-primary text-on-primary"
    >
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 bg-on-surface px-4 py-2 font-label text-label-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-surface animate-pulse" />
            <span>Guatemala · Smash Burgers</span>
          </div>

          <AnimatedHeadline
            words={["Carne", "aplastada,", "queso", "derretido."]}
            highlightIndex={2}
            className="text-display-xl tracking-tight drop-shadow-[8px_8px_0_rgba(26,28,28,1)]"
          />

          <p className="max-w-[46ch] text-body-lg text-on-primary/90">
            Carne molida a diario, aplastada en plancha ardiendo hasta que el borde se pone
            crujiente y oscuro. Sin fórmulas raras, sin carne congelada: la que no se vende hoy,
            no se sirve mañana.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#menu"
              variant="primary"
              className="relative overflow-hidden pulse-cta bg-on-surface hard-shadow-lg hover:hard-shadow-red text-lg"
            >
              <span className="cta-shine" aria-hidden="true" />
              <span className="relative">Ordenar ahora</span>
              <span className="relative">→</span>
            </Button>
            <Button
              href="#menu"
              variant="secondary"
              className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary"
            >
              Ver el menú
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="tilt-slight-right relative aspect-[4/5] sm:aspect-square rounded-[28px] overflow-hidden border-4 border-on-surface hard-shadow-lg">
            <Image
              src="/images/hero-hamburger.jpg"
              alt="Smash burger recién hecho, con queso derretido y borde crujiente"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-4 sm:-left-8">
            <StencilBadge className="tilt-heavy-right">Est. 2019</StencilBadge>
          </div>
        </div>
      </div>

      <a
        href="#menu"
        className="relative z-10 self-center mx-auto mb-7 flex flex-col items-center gap-2 text-on-primary/85 hover:text-on-primary font-label text-label-mono uppercase tracking-[0.24em] w-fit"
      >
        <span>Bajá y elegí</span>
        <span className="scroll-cue grid place-items-center w-9 h-9 rounded-full border-2 border-on-primary/60 text-sm">
          ↓
        </span>
      </a>

      <Marquee />
    </section>
  );
}
