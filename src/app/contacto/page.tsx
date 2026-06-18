import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ContactHero } from "@/components/contacto/ContactHero";
import { ContactInfo } from "@/components/contacto/ContactInfo";
import { BusinessHours } from "@/components/contacto/BusinessHours";
import { ContactForm } from "@/components/contacto/ContactForm";
import { ContactMap } from "@/components/contacto/ContactMap";

export const metadata: Metadata = {
  title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
  description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      
      <ContactHero />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <ContactInfo />
            <BusinessHours />
          </div>
          <ContactForm />
        </div>
      </section>

      <ContactMap />

      <Footer />
    </main>
  );
}
