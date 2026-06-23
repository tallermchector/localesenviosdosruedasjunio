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
    <section id="servicios" className="py-24 bg-light relative overflow-hidden border-b-4 border-primary">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002276_1px,transparent_1px),linear-gradient(to_bottom,#002276_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="section-badge mb-4 border-2 border-primary shadow-brutal-sm text-primary bg-accent uppercase tracking-widest font-subhead px-4 py-1">
            <Bolt className="w-5 h-5 text-primary fill-primary animate-pulse" /> Soluciones Inteligentes
          </div>
          <h2 className="text-5xl md:text-6xl font-display text-primary mt-2 uppercase">
            Nuestros <span className="text-accent bg-primary px-3 pb-2 pt-1 border-2 border-accent relative inline-block shadow-brutal-sm">
              Servicios
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-dark max-w-[700px] mt-8 leading-relaxed font-subhead tracking-wide">
            INFRAESTRUCTURA LOGÍSTICA ÁGIL Y CONFIABLE PARA NEGOCIOS EN MAR DEL PLATA. INTELIGENCIA Y TECNOLOGÍA APLICADAS A CADA ENTREGA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 md:p-10 flex flex-col relative border-2 border-primary hover:border-accent hover:-translate-y-2 hover:-translate-x-2 shadow-[4px_4px_0px_0px_#002276] hover:shadow-[8px_8px_0px_0px_#f5e300] transition-all duration-300 z-10"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-[4px] w-full bg-primary group-hover:bg-accent transition-all duration-300" />
              
              {/* Badge for highlight/priority */}
              {s.badge && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-accent border-2 border-primary text-primary px-3 py-1 font-subhead text-lg uppercase tracking-wider shadow-brutal-sm animate-pulse-dot">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 bg-primary"></span>
                  </span>
                  {s.badge}
                </div>
              )}
              
              {/* Icon Container */}
              <div className="mb-8 w-20 h-20 flex items-center justify-center bg-light text-primary border-2 border-primary group-hover:bg-accent group-hover:text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-brutal-sm relative">
                <div className="relative z-10 text-primary transition-colors duration-300">
                  {s.icon}
                </div>
              </div>
              
              <h3 className="text-primary text-3xl font-display uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              
              <p className="flex-grow mb-8 text-dark text-base md:text-lg leading-relaxed font-body">
                {s.desc}
              </p>
              
              <Link 
                href={s.href} 
                className="inline-flex items-center gap-2 text-primary font-bold font-subhead text-xl tracking-wider uppercase group/link relative self-start transition-all hover:text-accent bg-accent px-4 py-2 border-2 border-primary shadow-brutal-sm hover:shadow-[4px_4px_0px_0px_#002276] hover:bg-primary"
              >
                <span>{s.cta}</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover/link:text-accent transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
