"use client";

import React from "react";
import { CheckCircle2, Eye, Lightbulb, MapPin } from "lucide-react";

export function CompanyValues() {
  const values = [
    { title: "Responsabilidad", icon: <CheckCircle2 className="w-10 h-10" />, color: "bg-blue-500", desc: "Cumplimos con cada promesa de entrega, cuidando tu reputación como propia." },
    { title: "Transparencia", icon: <Eye className="w-10 h-10" />, color: "bg-emerald-500", desc: "Información clara y en tiempo real. Sin costos ocultos ni sorpresas operativas." },
    { title: "Innovación", icon: <Lightbulb className="w-10 h-10" />, color: "bg-amber-500", desc: "Aplicamos tecnología de punta para optimizar rutas y automatizar procesos." },
    { title: "Compromiso Local", icon: <MapPin className="w-10 h-10" />, color: "bg-red-500", desc: "Somos de Mar del Plata para Mar del Plata. Conocemos cada rincón de la ciudad." }
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Nuestra Cultura</div>
          <h2 className="text-primary text-5xl font-display uppercase">Valores que nos definen</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-10 border-2 border-slate-100 rounded-3xl hover:border-accent hover:shadow-2xl transition-all duration-300 group">
              <div className={`w-20 h-20 rounded-2xl ${v.color} text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-lg`}>
                {v.icon}
              </div>
              <h3 className="text-primary text-3xl font-subhead uppercase mb-4">{v.title}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
