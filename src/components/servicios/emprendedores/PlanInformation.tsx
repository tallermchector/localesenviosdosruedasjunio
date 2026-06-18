"use client";

import React from "react";
import Image from "next/image";
import { Warehouse, PackageSearch, ClipboardList, BarChart3 } from "lucide-react";

export function PlanInformation() {
  const services = [
    { title: "Almacenamiento", desc: "Depósitos seguros y monitoreados las 24hs para tu stock.", icon: <Warehouse className="w-8 h-8" /> },
    { title: "Picking & Packing", desc: "Preparación profesional de pedidos cuidando cada detalle.", icon: <PackageSearch className="w-8 h-8" /> },
    { title: "Fulfillment", desc: "Gestión completa desde la compra hasta la entrega final.", icon: <ClipboardList className="w-8 h-8" /> },
    { title: "Gestión de Stock", desc: "Reportes en tiempo real de tus existencias y movimientos.", icon: <BarChart3 className="w-8 h-8" /> }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="section-badge">Solución End-to-End</div>
            <h2 className="text-primary text-5xl font-display uppercase leading-tight">LOGÍSTICA INTEGRAL 3PL</h2>
            <p className="text-xl text-slate-600 font-body leading-relaxed">
              Almacenamos, preparamos y enviamos tus productos. Olvidate de los problemas de espacio y personal. Con nuestro servicio 3PL, tu única preocupación será vender más.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {services.map((s, i) => (
                <div key={i} className="p-6 bg-light rounded-2xl border-2 border-slate-50 hover:border-secondary transition-all group">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h4 className="text-xl font-subhead text-primary uppercase mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-500 font-body leading-snug">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden border-4 border-slate-100 shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
              <Image 
                src="/images/logistica-ecommerce.jpg"
                alt="3PL Warehouse MDP" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                data-ai-hint="modern warehouse"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 border-2 border-primary rounded-2xl z-20 shadow-2xl">
                <div className="text-primary font-display text-4xl mb-1">MÁS DE 500m²</div>
                <div className="text-slate-500 font-subhead text-xl uppercase tracking-wider">Capacidad de Almacenaje</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-accent -z-10 rounded-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
