"use client";

import React from "react";
import { Calculator } from "lucide-react";

export function ExpressPricingRanges() {
  const ranges = [
    { range: "0.00 - 2.99 km", price: "$3700.00" },
    { range: "3.00 - 4.99 km", price: "$4600.00" },
    { range: "5.00 - 6.99 km", price: "$6100.00" },
    { range: "7.00 - 9.99 km", price: "$8200.00" },
    { range: "10.00+ km", price: "Base $8200 + $1000.00/km extra" },
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Tarifas Transparentes</div>
          <h2 className="text-primary text-5xl font-display uppercase">TABLA DE PRECIOS EXPRESS</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-primary rounded-[32px] overflow-hidden shadow-[15px_15px_0px_rgba(30,58,138,0.1)]">
            <div className="bg-primary text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-dark rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-display m-0 leading-none">VALORES POR DISTANCIA</h3>
                  <p className="text-white/60 m-0 text-sm font-body">Actualizado Agosto 2024</p>
                </div>
              </div>
              <div className="px-6 py-2 bg-white/10 rounded-full font-subhead tracking-widest text-accent text-sm">MAR DEL PLATA URBANO</div>
            </div>

            <div className="divide-y-2 divide-slate-100">
              {ranges.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 md:px-12 hover:bg-slate-50 transition-colors">
                  <span className="font-subhead text-2xl text-slate-500 uppercase tracking-wider">{item.range}</span>
                  <span className="font-display text-3xl text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-slate-50 border-t-2 border-slate-100">
              <p className="text-slate-500 text-sm italic font-body text-center m-0">
                * Los precios incluyen prioridad máxima y entrega en menos de 2 horas desde el retiro. Sujeto a disponibilidad y condiciones climáticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
