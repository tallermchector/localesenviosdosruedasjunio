
"use client";

import { CheckCircle2, Phone, Calculator, Bolt } from "lucide-react";

export function CTA() {
  return (
    <section className="cta-section relative py-32 bg-primary text-white text-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 animate-slow-zoom" 
        style={{ 
          backgroundImage: "url('resources/aDC-m8qZ91F4iv1AmrW_vS')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="cta-wrapper max-w-[800px] mx-auto border border-white/10 p-16 bg-gradient-to-br from-primary/80 to-[#0f172a]/90 backdrop-blur-md rounded-[20px] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.5),0_25px_50px_rgba(0,0,0,0.4)]">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/40 px-5 py-2 rounded-full font-subheadline text-[1.2rem] tracking-wider mb-6">
            <Bolt className="w-5 h-5" /> ¡Empezá Ahora!
          </div>
          
          <h2 className="text-white my-6 font-headline text-[3.5rem]">¿Listo para escalar la logística de tu E-Commerce?</h2>
          <p className="text-white text-[1.2rem] mb-10 opacity-90">Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="btn btn-primary">
              <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/brands/whatsapp.svg" className="w-6 h-6 fill-current" /> Contactanos por WhatsApp
            </a>
            <a href="/tarifas" className="btn btn-secondary">
              <Calculator className="w-6 h-6" /> Ver Tarifas 2026
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
            {["Confianza local comprobada", "Innovación constante en última milla", "Motocicletas dedicadas"].map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-[0.95rem] opacity-80 hover:opacity-100 hover:text-accent hover:-translate-y-[3px] transition-all cursor-default">
                <CheckCircle2 className="w-5 h-5 text-accent" /> {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
