import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { MenuSection } from "@/components/menu/menu-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
      </main>
      <Footer />
    </>
  );
}
