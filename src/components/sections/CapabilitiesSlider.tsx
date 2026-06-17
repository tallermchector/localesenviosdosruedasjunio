"use client";

import { Bolt, Microchip, ShieldHalf, ChartLine } from "lucide-react";

const caps = [
  { title: "Ruteo Inteligente", icon: <Bolt className="w-8 h-8" />, desc: "Optimización en tiempo real de rutas de entrega para minimizar tiempos y costos operativos." },
  { title: "Integración API", icon: <Microchip className="w-8 h-8" />, desc: "Conexión directa con tu tienda online para automatizar la gestión de despachos sin fricción." },
  { title: "Seguridad Extrema", icon: <ShieldHalf className="w-8 h-8" />, desc: "Protocolos estrictos de custodia de mercadería y seguros de cobertura total para tu tranquilidad." },
  { title: "Métricas en Vivo", icon: <ChartLine className="w-8 h-8" />, desc: "Dashboard analítico con datos precisos de performance y tiempos de entrega en tiempo real." }
];

export function CapabilitiesSlider() {
  return (
    <section className="slider-section py-24 bg-primary text-white">
      <div className="container mx-auto px-8">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center bg-white/10 text-white border border-white/30 px-5 py-2 rounded-full font-subheadline text-[1.2rem] tracking-wider font-bold">CAPACIDADES DINÁMICAS</div>
          <h2 className="text-white font-headline">SOLUCIONES A MEDIDA</h2>
          <p className="text-white opacity-90 max-w-[700px]">Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10">
          {caps.map((c, i) => (
            <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_23%] snap-start bg-white/5 border border-white/10 p-12 transition-all duration-300 hover:bg-white/10 hover:-translate-y-[10px] hover:border-accent hover:shadow-2xl relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              <div className="cap-icon w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-115 group-hover:rotate-12 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                {c.icon}
              </div>
              <h3 className="text-accent text-[1.6rem] mb-4 font-headline uppercase">{c.title}</h3>
              <p className="text-white opacity-90 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
