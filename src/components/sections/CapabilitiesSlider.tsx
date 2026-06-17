
"use client";

import { Zap, Microchip, ShieldCheck, BarChart3 } from "lucide-react";

const caps = [
  {
    title: "Ruteo Inteligente",
    desc: "Optimización en tiempo real para minimizar tiempos and costos.",
    icon: <Zap />
  },
  {
    title: "Integración API",
    desc: "Conexión directa con tu tienda online sin fricciones.",
    icon: <Microchip />
  },
  {
    title: "Seguridad Extrema",
    desc: "Protocolos estrictos de custodia y seguros de cobertura total.",
    icon: <ShieldCheck />
  },
  {
    title: "Métricas en Vivo",
    desc: "Dashboard analítico con datos precisos de performance.",
    icon: <BarChart3 />
  }
];

export function CapabilitiesSlider() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 mb-16">
        <div className="section-header space-y-4">
          <div className="section-badge border-white/20 text-white bg-white/10">Capacidades Dinámicas</div>
          <h2 className="text-5xl text-white font-headline">Soluciones a Medida</h2>
          <p className="text-xl text-white/70 max-w-2xl">
            Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.
          </p>
        </div>
      </div>

      <div className="flex gap-8 px-4 overflow-x-auto pb-8 scrollbar-hide md:justify-center">
        {caps.map((cap, i) => (
          <div key={i} className="min-w-[300px] md:min-w-0 md:flex-1 bg-white/5 border border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-accent hover:-translate-y-2 transition-all duration-300 group relative">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
              {cap.icon}
            </div>
            <h3 className="text-2xl font-headline text-accent">{cap.title}</h3>
            <p className="text-white/80">{cap.desc}</p>
            <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
