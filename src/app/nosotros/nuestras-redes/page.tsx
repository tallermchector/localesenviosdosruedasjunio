import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { SocialHero } from "@/components/social/SocialHero";
import { SocialConnect } from "@/components/social/SocialConnect";
import { SocialFeed } from "@/components/social/SocialFeed";
import { SocialBenefits } from "@/components/social/SocialBenefits";
import { NewsletterSignup } from "@/components/social/NewsletterSignup";

export const metadata: Metadata = {
  title: "Nuestras Redes | Comunidad de Emprendedores en Mar del Plata",
  description: "Unite a la comunidad de Envíos DosRuedas. Seguinos en redes sociales para novedades logísticas, consejos para PyMEs y canales de contacto oficial.",
};

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <SocialHero />
      <SocialConnect />
      <SocialFeed />
      <SocialBenefits />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
