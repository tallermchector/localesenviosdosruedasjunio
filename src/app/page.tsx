import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import dynamic from "next/dynamic";
import { Footer } from "@/components/sections/Footer";

const CorporateSolutions = dynamic(() => import("@/components/sections/CorporateSolutions").then(mod => mod.CorporateSolutions));
const CapabilitiesSlider = dynamic(() => import("@/components/sections/CapabilitiesSlider").then(mod => mod.CapabilitiesSlider));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const SocialGallery = dynamic(() => import("@/components/sections/SocialGallery").then(mod => mod.SocialGallery));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
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
