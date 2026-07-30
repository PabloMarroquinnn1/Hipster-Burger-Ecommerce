"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#historia", label: "Historia" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="sticky top-0 z-50 bg-surface border-b-[6px] border-on-surface">
      <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4">
        <button
          type="button"
          className="md:hidden text-on-surface"
          aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <a
          href="#top"
          className="font-heading text-headline-md md:text-headline-lg text-primary tracking-widest uppercase"
        >
          Smashed
        </a>

        <nav className="hidden md:flex items-center gap-8 font-label text-label-bold uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative text-on-surface hover:text-primary transition-colors"
          aria-label="Abrir carrito"
        >
          <ShoppingBag size={28} />
          <span
            className={cn(
              "tilt-slight-right absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center border-2 border-on-surface bg-primary text-on-primary font-label text-label-bold",
              cartCount === 0 && "hidden",
            )}
          >
            {cartCount}
          </span>
        </button>
      </div>

      {mobileNavOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-margin-mobile pb-6 font-label text-label-bold uppercase tracking-widest border-t-2 border-on-surface pt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileNavOpen(false)}
              className="text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
