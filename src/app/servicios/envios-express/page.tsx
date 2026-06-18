import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ExpressHero } from "@/components/servicios/express/ExpressHero";
import { ExpressContent } from "@/components/servicios/express/ExpressContent";
import { ExpressPricingRanges } from "@/components/servicios/express/ExpressPricingRanges";
import { ExpressBenefits } from "@/components/servicios/express/ExpressBenefits";
import { UrgentScenarios } from "@/components/servicios/express/UrgentScenarios";

export const metadata: Metadata = {
  title: "Envíos Express y Cadetería en Mar del Plata | Entrega en 2hs",
  description: "Mensajería urbana instantánea y cadetería en moto en Mar del Plata. Entregas urgentes en menos de 2 horas con seguimiento en tiempo real y seguridad.",
};

export default function EnvíosExpressPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <ExpressHero />
      <ExpressContent />
      <ExpressPricingRanges />
      <ExpressBenefits />
      <UrgentScenarios />
      <Footer />
    </main>
  );
}
