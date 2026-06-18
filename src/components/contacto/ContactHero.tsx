"use client";

import React from "react";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-white/10 !text-white border-white/20 mb-8">Atención Personalizada</div>
        <h1 className="text-white mb-6 text-5xl md:text-7xl">Contacto</h1>
        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-body">
          Estamos para ayudarte. Ponete en contacto con nuestro equipo de atención al cliente para resolver tus dudas logísticas.
        </p>
      </div>
    </section>
  );
}
