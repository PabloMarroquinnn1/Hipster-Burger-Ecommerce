const MENU_ITEMS = [
  "Doble Doble",
  "Bacon Cheese",
  "Classic Cheese",
  "Torito",
  "Triple Smash",
  "Contrabando",
];

function Track() {
  return (
    <span className="flex items-center gap-10 pr-10 font-heading text-headline-md uppercase tracking-widest text-surface">
      {MENU_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-10">
          {item}
          <span className="text-primary">★</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="relative z-10">
      <div className="hazard-stripes h-2" aria-hidden="true" />
      <div className="marquee-strip bg-on-surface overflow-hidden py-4">
        <div className="marquee-track flex w-max">
          <Track />
          <Track />
        </div>
      </div>
      <div className="hazard-stripes h-2" aria-hidden="true" />
    </div>
  );
}
