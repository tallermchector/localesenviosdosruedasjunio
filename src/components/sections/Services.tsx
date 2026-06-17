
"use client";

import { Zap, Clock, Package, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Envíos Express",
    badge: "ALTA PRIORIDAD",
    desc: "Prioridad absoluta y certeza total. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    icon: <Zap className="w-10 h-10" />,
    href: "/servicios/envios-express",
    cta: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    desc: "Rentabilidad y ruteo masivo. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
    icon: <Clock className="w-10 h-10" />,
    href: "/servicios/envios-lowcost",
    cta: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex",
    desc: "Somos expertos en MercadoLibre. Cumplimos tus SLAs Same-Day para que tu reputación sea impecable.",
    icon: <Package className="w-10 h-10" />,
    href: "/servicios/enviosflex",
    cta: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito inteligente en Mar del Plata.",
    icon: <Truck className="w-10 h-10" />,
    href: "/servicios/plan-emprendedores",
    cta: "Hablar con un asesor"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl text-primary font-headline">Soluciones Logísticas</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro recorrido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-white p-8 border-t-4 border-transparent hover:border-accent transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl">
              {s.badge && (
                <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded">
                  {s.badge}
                </div>
              )}
              
              <div className="text-secondary group-hover:text-primary transition-colors duration-300 mb-6">
                {s.icon}
              </div>
              
              <h3 className="text-3xl font-subheadline text-primary group-hover:text-secondary transition-colors mb-4">
                {s.title}
              </h3>
              
              <p className="text-slate-500 mb-8 min-h-[80px]">
                {s.desc}
              </p>
              
              <Link href={s.href} className="inline-flex items-center gap-2 text-primary font-bold font-subheadline text-xl hover:text-secondary group/link">
                {s.cta} <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
