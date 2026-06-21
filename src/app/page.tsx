import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import dynamic from "next/dynamic";
import { Footer } from "@/components/sections/Footer";
import SlaBanner from '@/components/sections/SlaBanner';
import ServiceCard from '@/components/sections/ServiceCard';

const CorporateSolutions = dynamic(() => import("@/components/sections/CorporateSolutions").then(mod => mod.CorporateSolutions));
const CapabilitiesSlider = dynamic(() => import("@/components/sections/CapabilitiesSlider").then(mod => mod.CapabilitiesSlider));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const SocialGallery = dynamic(() => import("@/components/sections/SocialGallery").then(mod => mod.SocialGallery));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SlaBanner />
      <ServiceCard
        title="ENVÍOS LOWCOST"
        subtitle="LOGÍSTICA E-COMMERCE"
        description="Retiramos en tu local de Mar del Plata (Friuli 1972) con corte a las 13:00 hs para entregas rápidas en la ciudad. Ideal para e-commerce que buscan optimizar costos de envío y mantener la confianza del cliente."
      />

      <ServiceCard
        title="FLEX EXPRESS"
        subtitle="SERVICIO PREMIUM"
        description="Retiramos hasta las 15:00 hs. Máxima prioridad y velocidad para tus entregas urgentes en Mar del Plata. Gestioná todo el ciclo de vida de tus envíos desde una única plataforma con soporte prioritario."
      />

      <ServiceCard
        title="DISTRIBUCIÓN NACIONAL"
        subtitle="ALIANZA ESTRATÉGICA"
        description="Envíos a todo el país mediante nuestra red de transportes asociados. Consolidá tus paquetes en nuestra base y accede a tarifas competitivas para distribuir tus productos a cada rincón de Argentina."
      />
      <Hero />
      <Vision />
      <Services />
      <CTA />
      <CorporateSolutions />
      <CapabilitiesSlider />
      <Testimonials />
      <FAQ />
      <SocialGallery />
      <Footer />
    </main>
  );
}
