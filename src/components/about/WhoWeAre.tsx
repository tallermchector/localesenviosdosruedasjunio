"use client";

import React from "react";
import { Star, ShieldCheck, Zap, Users } from "lucide-react";
import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary text-5xl md:text-6xl font-display uppercase mb-4">Quiénes Somos</h2>
              <h3 className="text-secondary text-2xl font-subhead uppercase tracking-wider mb-6 italic">"Tu aliado confiable en mensajería y delivery en Mar del Plata"</h3>
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-dark px-4 py-2 rounded-lg border-2 border-accent font-bold mb-8 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>4.9 estrellas en Google Reviews</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-body">
              <p>
                Envíos DosRuedas se posiciona como tu Partner Logístico Especializado. No somos simplemente una empresa de cadetería; somos el motor que impulsa el crecimiento de tu negocio local.
              </p>
              <p>
                Transformamos tu estructura de gasto fijo en soluciones flexibles. Optimizamos cada kilómetro para que vos te enfoques en lo que mejor hacés: vender.
              </p>
            </div>

            <div className="grid gap-6 mt-10">
              <h4 className="font-subhead text-3xl text-primary uppercase border-l-4 border-accent pl-4">Nuestra Ventaja Injusta</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Atención Personalizada", desc: "No sos un ticket, sos un partner.", icon: <Users className="w-6 h-6" /> },
                  { title: "Flota Exclusiva", desc: "Controlamos cada bulto.", icon: <Zap className="w-6 h-6" /> },
                  { title: "Cero Tercerización", desc: "Si es DosRuedas, lo hacemos nosotros.", icon: <ShieldCheck className="w-6 h-6" /> }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-light rounded-xl border-2 border-slate-100 hover:border-secondary transition-all group">
                    <div className="text-secondary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h5 className="font-bold text-primary mb-2 text-sm uppercase leading-tight">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-4 bg-white border-2 border-dark shadow-[15px_15px_0px_rgba(15,23,42,1)] rounded-[32px] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/carousel_5.jpg"
                alt="Equipo Envios DosRuedas" 
                width={800} 
                height={1000} 
                className="rounded-[24px] object-cover"
                data-ai-hint="team work"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
