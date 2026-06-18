"use client";

import React from "react";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export function ExpressContent() {
  const features = [
    {
      title: "Prioridad Absoluta",
      desc: "Tu envío es el primero en la hoja de ruta. Sin paradas intermedias, directo al destino.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Rango Horario Flexible",
      desc: "Vos decidís cuándo se retira y entrega. Nos adaptamos a tu agenda, no al revés.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Confirmación Inmediata",
      desc: "Recibí avisos en tiempo real del estado. Notificación de entrega con firma digital.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="section-badge">Standard de Calidad</div>
            <h2 className="text-primary text-5xl font-display uppercase leading-tight">VELOCIDAD Y PRECISIÓN</h2>
            <p className="text-xl text-slate-600 font-body leading-relaxed">
              Nuestro servicio Express está diseñado para operaciones de alta criticidad horaria. No es solo un envío rápido; es un compromiso de puntualidad respaldado por tecnología de ruteo en tiempo real.
            </p>
            <div className="grid gap-8 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-primary text-accent rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110">
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
          
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden border-4 border-slate-100 shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="https://picsum.photos/seed/express-log/800/800" 
                alt="Servicio Express en MDP" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                data-ai-hint="motorcycle courier"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 border-2 border-primary rounded-2xl z-20 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-display text-4xl mb-1">99.9%</div>
                <div className="text-slate-500 font-subhead text-xl uppercase tracking-wider">Cumplimiento de horario</div>
              </div>
            </div>
            {/* Neo-brutalist accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-accent -z-10 rounded-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
