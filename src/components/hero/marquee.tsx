const MENU_ITEMS = [
  "Doble Doble",
  "Bacon Cheese",
  "Classic Cheese",
  "Torito",
  "La Trama",
];

function Track() {
  return (
    <span className="flex items-center gap-8 pr-8 font-heading text-headline-md uppercase tracking-widest text-surface">
      {MENU_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8">
          {item}
          <span className="text-primary">★</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="relative z-10 bg-on-surface border-t-[3px] border-surface overflow-hidden py-3">
      <div className="marquee-track flex w-max">
        <Track />
        <Track />
      </div>
    </div>
  );
}
