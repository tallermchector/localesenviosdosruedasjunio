"use client";

import React from "react";
import { Route, Timer, DollarSign } from "lucide-react";
import Image from "next/image";

export function LowcostContent() {
  const features = [
    {
      title: "Eficiencia en Ruteo",
      desc: "Ruteo diario masivo optimizado. NO se elige rango horario, lo que nos permite bajar costos al máximo.",
      icon: <Route className="w-8 h-8" />
    },
    {
      title: "Corte y Entrega",
      desc: "Pedidos ingresados antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs.",
      icon: <Timer className="w-8 h-8" />
    },
    {
      title: "Tarifa Económica",
      desc: "La mejor tarifa de Mar del Plata para envíos masivos. Ideal para e-commerce de alto volumen.",
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-video bg-slate-100 rounded-[40px] overflow-hidden border-4 border-slate-100 shadow-2xl relative group">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10" />
              <Image 
                src="/nuevas/box_card.jpeg"
                alt="Logística LowCost en Mar del Plata" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                data-ai-hint="delivery warehouse"
              />
              <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md p-6 border-l-8 border-secondary rounded-xl z-20 shadow-2xl">
                <div className="text-secondary font-display text-3xl mb-1">LOGÍSTICA 3.0</div>
                <div className="text-slate-500 font-subhead text-lg uppercase tracking-wider">Optimización Algorítmica</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-secondary/20 -z-10 rounded-[40px]" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="section-badge !bg-secondary/10 !text-secondary">E-Commerce Ready</div>
            <h2 className="text-primary text-5xl font-display uppercase leading-tight">MÁXIMA EFICIENCIA</h2>
            <p className="text-xl text-slate-600 font-body leading-relaxed">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas utilizando algoritmos avanzados para ofrecer la tarifa más competitiva de la ciudad.
            </p>
            <div className="grid gap-8 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-secondary text-white rounded-xl flex items-center justify-center transition-all group-hover:bg-primary group-hover:scale-110">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-subhead text-primary uppercase mb-1">{f.title}</h4>
                    <p className="text-slate-500 font-body">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
