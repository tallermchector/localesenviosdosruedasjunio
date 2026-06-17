
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, ShieldCheck, Zap, Globe, Package, CheckCircle2 } from "lucide-react";

export function Hero() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-slate-950">
      {/* Background with slow zoom */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage?.imageUrl || ""} 
          alt="Logistics background"
          fill
          className="object-cover opacity-30 scale-105 animate-[zoom_25s_linear_infinite_alternate]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-white font-subheadline text-lg">
            <span className="pulse-dot" /> Tu Solución Confiable
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-headline leading-[0.9] italic">
            Mensajería y Logística <br />
            <span className="relative inline-block text-accent">
              E-Commerce 
              <span className="absolute left-0 -bottom-2 w-full h-2 bg-secondary/80 -z-10 animate-[width_1s_ease-out_forwards]" />
            </span> <br />
            en Mar del Plata
          </h1>
          
          <p className="text-xl text-white/80 max-w-xl font-medium">
            Somos tu partner estratégico en servicios de última milla. Soluciones rápidas, seguras y económicas integradas directamente con tu canal de ventas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="brutalist-button text-2xl h-16 px-8">
              Solicitar Servicio <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button variant="outline" className="secondary-button text-2xl h-16 px-8 bg-white/5 border-white text-white hover:bg-white hover:text-primary">
              Ver Servicios
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-white font-subheadline text-xl">
              <ShieldCheck className="text-accent w-6 h-6" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-white font-subheadline text-xl">
              <Zap className="text-accent w-6 h-6" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-white font-subheadline text-xl">
              <Globe className="text-accent w-6 h-6" /> COBERTURA TOTAL
            </div>
          </div>
        </div>

        {/* Floating Cards Visuals */}
        <div className="relative hidden lg:block h-[500px]">
          <div className="absolute top-1/4 -left-12 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl animate-[float_6s_ease-in-out_infinite] -rotate-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]" />
              <span className="text-white font-subheadline text-2xl">EN TRÁNSITO</span>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-0 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl animate-[float_7s_ease-in-out_infinite_reverse] rotate-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#3b82f6]" />
              <span className="text-white font-subheadline text-2xl">VERIFICADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
