"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, ChevronDown } from "lucide-react";

export function ExpressHero() {
  return (
    <section className="relative pt-32 pb-24 bg-primary overflow-hidden border-b-4 border-accent">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="absolute -right-20 top-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-accent !text-dark border-dark/20 mb-8 animate-pulse">
          <Zap className="w-5 h-5 fill-current" /> ALTA PRIORIDAD
        </div>
        
        <h1 className="text-white mb-6 font-display text-5xl md:text-8xl uppercase tracking-tight leading-[0.9]">
          ENVÍOS EXPRESS: <br /><span className="text-accent">ENTREGA EN 2HS</span>
        </h1>
        
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed mb-12">
          Mensajería urbana instantánea para tus envíos más críticos. Vos elegís el rango de entrega y nosotros garantizamos la puntualidad absoluta.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button className="h-16 px-10 bg-accent hover:bg-white text-dark font-subhead text-2xl uppercase tracking-widest rounded-xl transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95">
            Solicitar Envío Express
          </Button>
          <Button variant="outline" className="h-16 px-10 border-2 border-white text-white hover:bg-white hover:text-primary font-subhead text-2xl uppercase tracking-widest rounded-xl transition-all">
            Ver Tarifas <ChevronDown className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
