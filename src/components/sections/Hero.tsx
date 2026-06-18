"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldHalf, Bolt, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="hero relative min-h-[calc(100vh-90px)] flex items-center py-16 overflow-hidden bg-primary">
      {/* Animated BG */}
      <div 
        className="absolute inset-0 z-0 animate-slow-zoom" 
        style={{ 
          backgroundImage: "url('/hero/hero_background.jpeg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/85 to-transparent z-[1]" />
      
      <div className="container relative z-10 mx-auto px-8 max-w-[750px] ml-0 lg:ml-[10%]">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white font-subhead text-xl tracking-wider mb-8 animate-fade-in-up [animation-delay:0.2s]">
          <span className="pulse-dot"></span> Tu Solución Confiable
        </div>
        
        <h1 className="text-white mb-6 animate-fade-in-up [animation-delay:0.4s]">
          Mensajería y Logística <br/>
          <span className="text-accent relative inline-block">
            E-Commerce 
            <span className="absolute left-0 bottom-1 w-full h-[6px] bg-secondary/80 -z-10 animate-slide-line origin-left" />
          </span> en Mar del Plata
        </h1>
        
        <p className="text-white text-xl md:text-2xl mb-10 opacity-90 max-w-[600px] animate-fade-in-up [animation-delay:0.6s]">
          Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
        </p>
        
        <div className="flex flex-wrap gap-8 items-center mb-14 animate-fade-in-up [animation-delay:0.8s]">
          <Link href="/cotizar/express" className="btn btn-primary">
            Solicitar Servicio <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/servicios/envios-express" className="inline-flex items-center gap-4 text-white font-subhead text-2xl tracking-wider uppercase group hover:text-accent transition-all hover:translate-x-1">
            <span className="w-[50px] h-[50px] rounded-full bg-white/5 border-2 border-white/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
              <Play className="fill-current w-5 h-5 ml-1" />
            </span> Ver Servicios
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20 animate-fade-in-up [animation-delay:1s]">
          <div className="flex items-center gap-2 text-white font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <ShieldHalf className="w-6 h-6 text-accent" /> 100% SEGURO
          </div>
          <div className="flex items-center gap-2 text-white font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Bolt className="w-6 h-6 text-accent" /> ULTRA RÁPIDO
          </div>
          <div className="flex items-center gap-2 text-white font-subhead text-lg tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Globe className="w-6 h-6 text-accent" /> COBERTURA TOTAL
          </div>
        </div>
      </div>
      
      {/* Floating Cards */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden lg:block z-10">
        <div className="absolute top-[20%] -left-[10%] bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 text-white font-subhead text-2xl tracking-wider flex items-center gap-3 shadow-2xl animate-float-card-1 hover:[animation-play-state:paused]">
          <div className="w-[14px] h-[14px] bg-[#22c55e] rounded-full shadow-[0_0_15px_#22c55e]" /> EN TRÁNSITO
        </div>
        <div className="absolute bottom-[25%] right-[10%] bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 text-white font-subhead text-2xl tracking-wider flex items-center gap-3 shadow-2xl animate-float-card-2 hover:[animation-play-state:paused]">
          <div className="w-[14px] h-[14px] bg-secondary rounded-full shadow-[0_0_15px_var(--color-secondary)]" /> VERIFICADO
        </div>
      </div>
    </section>
  );
}
