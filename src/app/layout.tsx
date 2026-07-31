import type { Metadata } from "next";
import { Bebas_Neue, Work_Sans, Space_Grotesk } from "next/font/google";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { ScrollProgressIndicator } from "@/components/ui/scroll-progress-indicator";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartHydrator } from "@/components/cart/cart-hydrator";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading-sans",
  weight: "400",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label-sans",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMASHED — Smash Burgers",
  description:
    "Smash burgers hechas a mano en plancha caliente. Bordes crujientes, pan tostado, cero vueltas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${workSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-body-md text-on-surface">
        <GrainOverlay />
        <ScrollProgressIndicator />
        <CartHydrator />
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
