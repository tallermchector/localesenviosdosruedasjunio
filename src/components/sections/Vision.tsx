
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Zap, ShieldCheck, Play, ArrowRight } from "lucide-react";
import { BrutalistCard } from "@/components/BrutalistCard";

export function Vision() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'vision-map');

  return (
    <section id="nosotros" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-1 font-subheadline text-xl border border-secondary/20">
            <span className="pulse-dot" /> Partner Logístico Especializado
          </div>
          
          <h2 className="text-5xl md:text-6xl text-primary font-headline">Nuestra Visión Logística</h2>
          <p className="text-xl text-slate-600 font-medium">
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio en Mar del Plata.
          </p>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-4 hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-subheadline text-primary mb-1">Entregas a Tiempo</h4>
                <p className="text-slate-500">Puntualidad garantizada mediante algoritmos de ruteo dinámico.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 hover:translate-x-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-subheadline text-primary mb-1">Envíos Seguros</h4>
                <p className="text-slate-500">Protección integral y trazabilidad total de cada paquete.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div>
              <p className="text-4xl font-headline text-secondary leading-none">+5.000</p>
              <p className="text-xs font-bold text-slate-400 mt-2">CLIENTES LOCALES</p>
            </div>
            <div>
              <p className="text-4xl font-headline text-secondary leading-none">7 Años</p>
              <p className="text-xs font-bold text-slate-400 mt-2">DE INNOVACIÓN</p>
            </div>
            <div>
              <p className="text-4xl font-headline text-secondary leading-none">EXCLUSIVA</p>
              <p className="text-xs font-bold text-slate-400 mt-2">FLOTA DE MOTOS</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative p-4 bg-white border-2 border-primary shadow-[15px_15px_0px_rgba(30,58,138,0.1)] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image 
                src={mapImage?.imageUrl || ""} 
                alt="Logistics Map"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 flex items-center gap-6 shadow-xl">
              <span className="font-subheadline text-2xl max-w-[150px] leading-tight">Conocé más sobre nosotros</span>
              <button className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-primary animate-[pulsePlay_2s_infinite] hover:scale-110 transition-transform">
                <Play className="fill-current w-6 h-6 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
