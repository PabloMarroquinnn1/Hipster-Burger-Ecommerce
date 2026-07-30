import { Button } from "@/components/ui/button";
import { StencilBadge } from "@/components/ui/badge";
import { AnimatedHeadline } from "./animated-headline";
import { HeroScene } from "./hero-scene";
import { Marquee } from "./marquee";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[80vh] flex flex-col overflow-hidden border-b-8 border-on-surface bg-primary text-on-primary"
    >
      <HeroScene />

      {/* Darken the right side so text stays legible over the 3D burger */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 45%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center px-margin-mobile md:px-margin-desktop py-16">
        <div className="w-full max-w-2xl flex flex-col gap-6">
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
            Smash burgers hechas a mano en plancha caliente: bordes crujientes, pan tostado en
            mantequilla y nada de vueltas. Servimos hasta que se acabe la carne del día.
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
      </div>

      <a
        href="#menu"
        className="relative z-10 self-center mb-7 flex flex-col items-center gap-2 text-on-primary/85 hover:text-on-primary font-label text-label-mono uppercase tracking-[0.24em]"
      >
        <span>Bajá y elegí</span>
        <span className="scroll-cue grid place-items-center w-9 h-9 rounded-full border-2 border-on-primary/60 text-sm">
          ↓
        </span>
      </a>

      <div className="absolute bottom-24 right-6 md:right-10 z-10">
        <StencilBadge className="tilt-heavy-right">Est. 2019</StencilBadge>
      </div>

      <Marquee />
    </section>
  );
}
