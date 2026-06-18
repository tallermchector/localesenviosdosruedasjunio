"use client";

import React from "react";

interface LegalHeroProps {
  title: string;
  description: string;
}

export function LegalHero({ title, description }: LegalHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden border-b-4 border-accent">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-white/10 !text-white border-white/20 mb-8 uppercase tracking-widest">Información Legal</div>
        <h1 className="text-white mb-6 font-display text-5xl md:text-7xl uppercase">{title}</h1>
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-body">
          {description}
        </p>
      </div>
    </section>
  );
}
