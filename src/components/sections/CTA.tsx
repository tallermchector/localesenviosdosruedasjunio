
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'cta-bg');

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white text-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage?.imageUrl || ""} 
          alt="CTA background"
          fill
          className="object-cover opacity-20 scale-110 animate-[zoom_25s_linear_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-slate-950/90 to-primary/80" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent rounded-full px-6 py-1 font-subheadline text-xl border border-accent/40">
            ¡Empezá Ahora!
          </div>
          
          <h2 className="text-5xl md:text-6xl text-white font-headline">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>
          
          <p className="text-xl text-white/80 font-medium">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de los expertos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="brutalist-button h-16 text-2xl px-10">
              <Phone className="w-6 h-6" /> Contactanos por WhatsApp
            </Button>
            <Button variant="outline" className="secondary-button h-16 text-2xl px-10 border-white text-white hover:bg-white hover:text-primary">
              <Calculator className="w-6 h-6" /> Ver Tarifas 2026
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
            {["Confianza local comprobada", "Innovación en última milla", "Flota de motos dedicada"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
