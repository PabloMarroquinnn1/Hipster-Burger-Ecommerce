const FOOTER_LINKS = [
  { href: "#ubicacion", label: "Locations" },
  { href: "#historia", label: "Hours" },
  { href: "#top", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-asymmetric-offset border-t-8 border-primary bg-on-surface flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop py-12 gap-8">
      <div className="font-heading text-headline-md text-surface uppercase">Smashed</div>

      <div className="flex gap-4 font-label text-label-mono uppercase text-surface-variant">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="tilt-slight hard-shadow font-label text-label-mono uppercase text-primary bg-surface px-4 py-2">
        ©2026 SMASHED BURGER CO. NO BULL, JUST SMASH.
      </div>
    </footer>
  );
}
