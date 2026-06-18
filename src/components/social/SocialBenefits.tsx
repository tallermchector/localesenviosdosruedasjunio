"use client";

import React from "react";
import { BellRing, Lightbulb, Headphones } from "lucide-react";

export function SocialBenefits() {
  const benefits = [
    {
      title: "Información en tiempo real",
      desc: "Enterate de cambios en horarios, nuevas zonas de cobertura y alertas de tráfico antes que nadie.",
      icon: <BellRing className="w-10 h-10" />
    },
    {
      title: "Tips logísticos",
      desc: "Compartimos las mejores prácticas para optimizar los despachos de tu e-commerce y cuidar tus bultos.",
      icon: <Lightbulb className="w-10 h-10" />
    },
    {
      title: "Canal de contacto directo",
      desc: "Respondemos tus dudas rápidamente a través de mensajes directos en todas nuestras plataformas.",
      icon: <Headphones className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-dark text-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-white text-5xl font-display uppercase mb-6">¿Por qué seguirnos?</h2>
          <p className="text-white/60 text-xl font-body">Sumate a la red logística más activa de Mar del Plata.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((ben, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-20 h-20 bg-accent text-dark rounded-full flex items-center justify-center mb-8">
                {ben.icon}
              </div>
              <h3 className="text-2xl font-subhead uppercase text-accent mb-4">{ben.title}</h3>
              <p className="text-white/70 font-body leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
