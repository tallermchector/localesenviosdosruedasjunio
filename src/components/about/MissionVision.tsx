"use client";

import React from "react";
import { Target, Rocket } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[40px] hover:bg-white/10 transition-colors group">
            <div className="w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-display uppercase text-accent mb-6 tracking-wider">Misión</h3>
            <p className="text-xl text-white/80 font-body leading-relaxed">
              Democratizar la logística de última milla para PyMEs y emprendedores, ofreciendo un servicio de alta gama, accesible y tecnológicamente avanzado que potencie el comercio local en Mar del Plata.
            </p>
          </div>

          <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[40px] hover:bg-white/10 transition-colors group">
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-display uppercase text-secondary mb-6 tracking-wider">Visión</h3>
            <p className="text-xl text-white/80 font-body leading-relaxed">
              Ser el referente tecnológico y operativo de la logística urbana en Mar del Plata, liderando el mercado a través de la innovación constante, la flota propia y un compromiso total con la satisfacción de nuestros partners.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-50" />
    </section>
  );
}
