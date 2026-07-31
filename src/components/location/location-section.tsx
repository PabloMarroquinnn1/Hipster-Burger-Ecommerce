import { Button } from "@/components/ui/button";
import { Eyebrow, Heading } from "@/components/ui/heading";

const HOURS = [
  { day: "Lunes", time: "Cerrado" },
  { day: "Martes a jueves", time: "5:00 pm – 10:00 pm" },
  { day: "Viernes y sábado", time: "12:00 pm – 11:30 pm" },
  { day: "Domingo", time: "12:00 pm – 9:00 pm" },
];

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-90.6250%2C14.4960%2C-90.5450%2C14.5560&layer=mapnik&marker=14.5261%2C-90.5875";

export function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="bg-on-surface text-surface px-margin-mobile md:px-margin-desktop py-16 md:py-24"
    >
      <div className="mb-13">
        <Eyebrow>Pasá a comer</Eyebrow>
        <Heading as="h2" size="headline-lg" className="mt-3">
          Villa Nueva, Guatemala
        </Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-11 items-start">
        <div>
          <h3 className="font-heading text-2xl uppercase tracking-widest text-primary mb-4">
            Horarios
          </h3>
          <dl className="flex flex-col">
            {HOURS.map(({ day, time }) => (
              <div
                key={day}
                className="flex justify-between gap-4 py-3.5 border-b border-surface/15"
              >
                <dt>{day}</dt>
                <dd className={time === "Cerrado" ? "text-surface/55" : undefined}>{time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-2 text-surface/85">
            <div className="font-heading text-base uppercase tracking-widest text-surface">
              Dirección
            </div>
            <div>
              Calzada Real a Villa Nueva, zona 4
              <br />
              Villa Nueva, Guatemala
            </div>
            <div>Entrega propia en un radio de 5 km.</div>
          </div>

          <Button href="#menu" variant="primary" className="mt-8">
            Armar mi pedido →
          </Button>
        </div>

        <div className="border-4 border-surface rounded-[26px] overflow-hidden bg-surface-container">
          <iframe
            title="Mapa de Villa Nueva, Guatemala"
            src={MAP_EMBED_URL}
            className="w-full h-[460px] border-0 [filter:saturate(0.85)_contrast(1.05)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
