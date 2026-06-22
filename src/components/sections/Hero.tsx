"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldHalf, Bolt, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="hero relative min-h-[calc(100vh-90px)] flex items-center py-16 overflow-hidden bg-primary border-b-4 border-accent">
      {/* Animated BG */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 z-0 animate-slow-zoom bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: "url('/hero/hero_background.jpeg')" }}
        />
      </div>
      {/* Solid Overlay */}
      <div className="absolute inset-0 bg-primary/90 z-[1]" />

      <div className="container relative z-10 mx-auto px-8 max-w-[750px] ml-0 lg:ml-[10%]">
        <div className="inline-flex items-center bg-primary border-2 border-accent px-5 py-2 text-accent font-subhead text-xl tracking-wider mb-8 animate-fade-in-up [animation-delay:0.2s] shadow-brutal-sm">
          <span className="pulse-dot bg-accent"></span> Tu Solución Confiable
        </div>

        <h1 className="text-light mb-6 animate-fade-in-up [animation-delay:0.4s]">
          Mensajería y Logística <br />
          <span className="text-accent relative inline-block bg-primary px-2 border-2 border-accent shadow-brutal-sm mt-2">
            E-Commerce
          </span> en Mar del Plata
        </h1>

        <p className="text-light font-subhead text-xl md:text-2xl mb-10 opacity-90 max-w-[600px] animate-fade-in-up [animation-delay:0.6s]">
          Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
        </p>

        <div className="flex flex-wrap gap-8 items-center mb-14 animate-fade-in-up [animation-delay:0.8s]">
          <Link href="/cotizar/express" className="btn btn-primary">
            Solicitar Servicio <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/servicios/envios-express" className="inline-flex items-center gap-4 text-light font-subhead text-2xl tracking-wider uppercase group hover:text-accent transition-all hover:translate-x-1">
            <span className="w-[50px] h-[50px] bg-primary border-2 border-accent shadow-brutal-sm flex items-center justify-center group-hover:bg-accent group-hover:border-primary group-hover:text-primary transition-all duration-300">
              <Play className="fill-current w-5 h-5 ml-1" />
            </span> Ver Servicios
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 pt-8 border-t-2 border-accent animate-fade-in-up [animation-delay:1s]">
          <div className="flex items-center gap-2 text-light font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <ShieldHalf className="w-6 h-6 text-accent" /> 100% SEGURO
          </div>
          <div className="flex items-center gap-2 text-light font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Bolt className="w-6 h-6 text-accent" /> ULTRA RÁPIDO
          </div>
          <div className="flex items-center gap-2 text-light font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Globe className="w-6 h-6 text-accent" /> COBERTURA TOTAL
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden lg:block z-10">
        <div className="absolute top-[20%] -left-[10%] bg-primary border-2 border-accent px-8 py-5 text-accent font-subhead text-2xl tracking-wider flex items-center gap-3 shadow-[6px_6px_0px_0px_#f5e300] animate-float-card-1 hover:[animation-play-state:paused]">
          <div className="w-[14px] h-[14px] bg-accent border border-primary shadow-[2px_2px_0px_0px_#002276]" /> EN TRÁNSITO
        </div>
        <div className="absolute bottom-[25%] right-[10%] bg-accent border-2 border-primary px-8 py-5 text-primary font-subhead text-2xl tracking-wider flex items-center gap-3 shadow-[6px_6px_0px_0px_#002276] animate-float-card-2 hover:[animation-play-state:paused]">
          <div className="w-[14px] h-[14px] bg-primary border border-accent shadow-[2px_2px_0px_0px_#f5e300]" /> VERIFICADO
        </div>
      </div>
    </section>
  );
}
