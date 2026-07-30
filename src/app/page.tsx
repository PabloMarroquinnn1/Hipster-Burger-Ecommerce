import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { StencilBadge, PriceMedallion } from "@/components/ui/badge";
import { Heading, Eyebrow } from "@/components/ui/heading";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="flex-1 bg-surface px-margin-mobile md:px-margin-desktop py-16">
        <Eyebrow>Design system shell</Eyebrow>
        <Heading as="h1" size="headline-lg" className="text-on-surface mt-3">
          Feature 1 en marcha
        </Heading>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button variant="primary">Ordenar ahora</Button>
          <Button variant="secondary">Ver el menú</Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-10">
          <StencilBadge>Classic</StencilBadge>
          <PriceMedallion price="Q40" />
        </div>
      </main>

      <Footer />
    </>
  );
}
