"use client";

import { Bolt, Clock, Box, Truck, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Envíos Express",
    badge: "ALTA PRIORIDAD",
    icon: <Bolt className="w-8 h-8" />,
    desc: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    href: "/servicios/envios-express",
    cta: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    icon: <Clock className="w-8 h-8" />,
    desc: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
    href: "/servicios/envios-lowcost",
    cta: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex",
    icon: <Box className="w-8 h-8" />,
    desc: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde.",
    href: "/servicios/enviosflex",
    cta: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    icon: <Truck className="w-8 h-8" />,
    desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada.",
    href: "/servicios/plan-emprendedores",
    cta: "Hablar con un asesor"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="section-badge mb-4">
            <Bolt className="w-5 h-5 text-accent fill-accent animate-pulse" /> Soluciones Inteligentes
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-primary mt-2">
            Nuestros <span className="text-secondary relative inline-block">
              Servicios
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-accent/80 -z-10 animate-slide-line origin-left" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-[700px] mt-6 leading-relaxed font-body">
            Infraestructura logística ágil y confiable para negocios en Mar del Plata. Inteligencia y tecnología aplicadas a cada entrega.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 md:p-10 flex flex-col relative border border-slate-100 hover:border-secondary/40 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(30,58,138,0.08)] transition-all duration-500 z-10 overflow-hidden rounded-[20px] shadow-sm"
            >
              {/* Top gradient highlight bar */}
              <div className="absolute top-0 left-0 h-[4px] w-12 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500" />
              
              {/* Badge for highlight/priority */}
              {s.badge && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-accent/15 border border-accent/30 text-[#b45309] px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider shadow-sm animate-pulse-dot">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  {s.badge}
                </div>
              )}
              
              {/* Icon Container */}
              <div className="mb-8 w-20 h-20 rounded-2xl flex items-center justify-center bg-slate-50 text-secondary border border-slate-100/80 group-hover:bg-secondary/10 group-hover:text-primary group-hover:border-secondary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-secondary group-hover:text-primary transition-colors duration-500">
                  {s.icon}
                </div>
              </div>
              
              <h3 className="text-primary text-2xl font-display uppercase tracking-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                {s.title}
              </h3>
              
              <p className="flex-grow mb-8 text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {s.desc}
              </p>
              
              <Link 
                href={s.href} 
                className="inline-flex items-center gap-2 text-primary font-bold font-subhead text-lg tracking-wider uppercase group/link relative self-start transition-all hover:text-secondary"
              >
                <span className="relative pb-1">
                  {s.cta}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover/link:w-full" />
                </span>
                <span className="w-7 h-7 rounded-full bg-slate-50 group-hover/link:bg-secondary/15 flex items-center justify-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 text-primary group-hover/link:text-secondary transition-transform group-hover/link:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

