"use client";

import React from "react";

export function SocialHero() {
  return (
    <section className="relative pt-32 pb-24 bg-primary overflow-hidden border-b-4 border-accent">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-white/10 !text-white border-white/20 mb-8 uppercase tracking-widest">Conectados 24/7</div>
        <h1 className="text-white mb-6 font-display text-5xl md:text-8xl uppercase tracking-tight">Comunidad DosRuedas</h1>
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed">
          Conectate con nuestra red logística. Seguí nuestro día a día, novedades y casos de éxito corporativo en Mar del Plata.
        </p>
      </div>
    </section>
  );
}
