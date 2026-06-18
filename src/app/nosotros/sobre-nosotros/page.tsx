import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { CompanyValues } from "@/components/about/CompanyValues";
import { CompanyStory } from "@/components/about/CompanyStory";
import { TeamSection } from "@/components/about/TeamSection";
import { MissionVision } from "@/components/about/MissionVision";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Empresa de Logística Líder en Mar del Plata",
  description: "Conocé nuestra infraestructura y valores como la empresa de logística local referente en Mar del Plata. Transparencia, flota propia y compromiso total.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <AboutHero />
      <WhoWeAre />
      <CompanyValues />
      <CompanyStory />
      <TeamSection />
      <MissionVision />
      <Footer />
    </main>
  );
}
