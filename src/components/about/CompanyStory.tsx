"use client";

import React from "react";

export function CompanyStory() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-20" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-24 h-1 bg-accent mx-auto" />
          <h2 className="text-white text-5xl md:text-7xl font-display uppercase tracking-tighter">7 Años de Innovación Constante</h2>
          <p className="text-white/80 text-xl md:text-2xl font-body leading-relaxed">
            Desde nuestra fundación en Mar del Plata, hemos recorrido miles de kilómetros conectando emprendedores con sus clientes. Nuestra trayectoria es el resultado del compromiso inquebrantable con la excelencia operativa y la satisfacción del cliente final.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
            {[
              { label: "Fundada en", value: "2018" },
              { label: "Localidad", value: "MDP" },
              { label: "Envíos", value: "+500k" },
              { label: "Staff", value: "Experto" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-accent font-display text-4xl mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-widest font-subhead">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
