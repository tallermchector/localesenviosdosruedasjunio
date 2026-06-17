"use client";

import { Bolt, Clock, Box, Truck, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Envíos Express",
    badge: "ALTA PRIORIDAD",
    icon: <Bolt className="w-10 h-10" />,
    desc: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    href: "/servicios/envios-express",
    cta: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    icon: <Clock className="w-10 h-10" />,
    desc: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
    href: "/servicios/envios-lowcost",
    cta: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex",
    icon: <Box className="w-10 h-10" />,
    desc: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde.",
    href: "/servicios/enviosflex",
    cta: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    icon: <Truck className="w-10 h-10" />,
    desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada.",
    href: "/servicios/plan-emprendedores",
    cta: "Hablar con un asesor"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#f1f5f9]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-headline">Soluciones Logísticas</h2>
          <p className="text-[1.2rem] max-w-[700px] mx-auto">Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="modern-card group bg-white p-10 flex flex-col relative border-t-4 border-transparent hover:border-accent hover:-translate-y-3 hover:shadow-[0_20px_40px_-5px_rgba(30,58,138,0.15)] transition-all duration-300 z-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/0 after:to-secondary/[0.03] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:-z-10">
              {s.badge && <div className="absolute top-4 right-4 bg-accent/20 text-[#b45309] px-3 py-1 text-[0.8rem] font-bold rounded-[4px]">{s.badge}</div>}
              
              <div className="text-secondary text-[2.5rem] mb-6 group-hover:scale-115 group-hover:rotate-5 group-hover:text-primary transition-all duration-300">
                {s.icon}
              </div>
              
              <h3 className="text-primary text-[1.8rem] mb-4 group-hover:text-secondary transition-colors">{s.title}</h3>
              <p className="flex-grow mb-8 text-[1.05rem]">{s.desc}</p>
              
              <Link href={s.href} className="inline-flex items-center gap-2 text-primary font-bold font-subheadline text-xl tracking-wider uppercase group/link relative self-start after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:text-secondary hover:after:w-full">
                {s.cta} <ChevronRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
