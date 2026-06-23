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

      {/* Tarjetas de servicios principales — Brand Book: Egyptian Blue + Sunbeam Yellow */}
      <section className="py-[48px] bg-white border-b-2 border-primary">
        <div className="container mx-auto">
          <div className="mb-[32px]">
            <h2 className="font-title text-[48px] leading-[48px] tracking-[0.02em] text-primary uppercase">
              Nuestros <span className="bg-secondary px-[4px] py-[2px] border-2 border-primary text-primary shadow-hard-primary">Servicios</span>
            </h2>
            <p className="font-subtitle text-[20px] leading-[24px] tracking-[0.03em] text-primary/70 mt-[16px] max-w-[600px]">
              LOGÍSTICA HUMANA Y EFICIENTE PARA MAR DEL PLATA. CONECTAMOS TU NEGOCIO CON TODA LA CIUDAD.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
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
          </div>
        </div>
      </section>

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
