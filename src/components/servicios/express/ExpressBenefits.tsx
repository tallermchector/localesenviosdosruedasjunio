"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Headphones } from "lucide-react";

export function ExpressBenefits() {
  const benefits = [
    {
      title: "Puntualidad Extrema",
      desc: "Nuestras métricas de cumplimiento superan el 99%. Si decimos 2 horas, son 2 horas.",
      icon: <CheckCircle2 className="w-12 h-12" />
    },
    {
      title: "Seguridad Garantizada",
      desc: "Cada envío cuenta con seguimiento satelital y seguro de mercadería básico incluido.",
      icon: <ShieldCheck className="w-12 h-12" />
    },
    {
      title: "Soporte Dedicado",
      desc: "Gestión directa vía WhatsApp con operadores humanos. Sin bots para casos críticos.",
      icon: <Headphones className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-50" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-accent mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-3xl font-subhead uppercase mb-4 tracking-wider">{b.title}</h3>
              <p className="text-white/70 font-body leading-relaxed text-lg">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
