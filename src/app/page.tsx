import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { MenuSection } from "@/components/menu/menu-section";
import { StorySection } from "@/components/story/story-section";
import { LocationSection } from "@/components/location/location-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <StorySection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
