"use client";

import React from "react";
import { FileText, Wrench, Gift, PackageOpen } from "lucide-react";

export function UrgentScenarios() {
  const scenarios = [
    { title: "Documentos Legales", icon: <FileText className="w-6 h-6" /> },
    { title: "Repuestos Críticos", icon: <Wrench className="w-6 h-6" /> },
    { title: "Regalos de Último Momento", icon: <Gift className="w-6 h-6" /> },
    { title: "Olvidos Urgentes", icon: <PackageOpen className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-dark rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full -translate-x-20 -translate-y-20 blur-3xl" />
            
            <h2 className="text-white text-4xl md:text-6xl font-display uppercase mb-12">¿Cuándo usar el servicio Express?</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {scenarios.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-accent transition-all group">
                  <div className="text-accent mb-6 flex justify-center group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-subhead text-xl uppercase tracking-widest leading-tight">{s.title}</h4>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-white/60 text-xl font-body mb-8">¿Tu envío es muy voluminoso o requiere logística especial?</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5492236602699" 
                target="_blank"
                className="btn bg-accent text-dark border-accent hover:bg-white hover:border-white transition-all shadow-none h-16 rounded-xl px-12"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
