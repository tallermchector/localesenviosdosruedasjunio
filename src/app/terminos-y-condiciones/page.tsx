import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LegalHero } from "@/components/legal/LegalHero";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Envios DosRuedas",
  description: "Lee los términos y condiciones del servicio de Envios DosRuedas. Al utilizar nuestros servicios, aceptas nuestras políticas y procedimientos.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <LegalHero 
        title="Términos y Condiciones" 
        description="Las reglas del juego. Al usar nuestros servicios, aceptas estos términos. Te recomendamos leerlos detenidamente."
      />
      <TermsContent />
      <Footer />
    </main>
  );
}
