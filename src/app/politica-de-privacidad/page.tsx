import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LegalHero } from "@/components/legal/LegalHero";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Política de Privacidad | Envios DosRuedas",
  description: "Conoce cómo Envios DosRuedas protege y gestiona tus datos personales. Nuestra política de privacidad detalla la información que recopilamos y su uso.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <LegalHero 
        title="Política de Privacidad" 
        description="En Envios DosRuedas, tu confianza es nuestra prioridad. Aquí te explicamos cómo protegemos y utilizamos tu información personal con total transparencia."
      />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
