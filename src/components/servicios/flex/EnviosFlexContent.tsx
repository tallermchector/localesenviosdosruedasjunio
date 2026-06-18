"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function EnviosFlexContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="section-badge">Logística Certificada</div>
            <h2 className="text-primary text-5xl font-display uppercase leading-tight">LÍDERES EN MERCADOLIBRE FLEX</h2>
            <p className="text-xl text-slate-600 font-body leading-relaxed">
              Ayudamos a los vendedores de MercadoLibre en Mar del Plata a cumplir con sus promesas de entrega. Nuestra infraestructura está diseñada para procesar grandes volúmenes de paquetería Flex con precisión quirúrgica.
            </p>
            <div className="space-y-4">
              {[
                "Retiro diario por tu local o domicilio",
                "Entrega garantizada el mismo día",
                "Gestión de etiquetas y escaneo en tiempo real",
                "Soporte especializado para vendedores Platinum"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                  <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden border-4 border-slate-100 shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
              <Image 
                src="/images/envios-flex.jpg"
                alt="MercadoLibre Flex MDP" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                data-ai-hint="delivery package"
              />
              <div className="absolute top-10 right-10 bg-[#FFE600] p-6 border-2 border-black rounded-2xl z-20 shadow-xl rotate-3">
                <div className="text-black font-display text-3xl leading-none">MÉTRICAS</div>
                <div className="text-black font-subhead text-xl uppercase tracking-wider">SIEMPRE EN VERDE</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent opacity-20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
