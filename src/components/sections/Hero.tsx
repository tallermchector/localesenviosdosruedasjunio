
"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldHalf, Bolt, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="hero relative min-h-[calc(100vh-90px)] flex items-center py-16 overflow-hidden bg-primary">
      <div 
        className="absolute inset-0 z-1 animate-slow-zoom" 
        style={{ 
          backgroundImage: "url('resources/a9qSjwlZ7cefb7cizHHkm-')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.95)] via-[rgba(30,58,138,0.85)] to-transparent z-2" />
      
      <div className="container relative z-10 mx-auto px-8 max-w-[750px]">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white font-subheadline text-[1.1rem] tracking-wider mb-8 animate-fade-in-up [animation-delay:0.2s]">
          <span className="pulse-dot"></span> Tu Solución Confiable
        </div>
        
        <h1 className="text-white mb-6 animate-fade-in-up [animation-delay:0.4s] italic md:not-italic">
          Mensajería y Logística <br/>
          <span className="text-accent relative inline-block">
            E-Commerce 
            <span className="absolute left-0 bottom-1 w-full h-[6px] bg-secondary/80 -z-10 opacity-80" />
          </span> en Mar del Plata
        </h1>
        
        <p className="text-white text-[clamp(1.1rem,1.5vw,1.3rem)] mb-10 opacity-90 max-w-[600px] animate-fade-in-up [animation-delay:0.6s]">
          Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
        </p>
        
        <div className="flex flex-wrap gap-8 items-center mb-14 animate-fade-in-up [animation-delay:0.8s]">
          <Link href="/cotizar/express" className="btn btn-primary">
            Solicitar Servicio <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/servicios/envios-express" className="inline-flex items-center gap-4 text-white font-subheadline text-2xl tracking-wider uppercase group hover:text-accent transition-all hover:translate-x-1">
            <span className="w-[50px] h-[50px] rounded-full bg-white/5 border-2 border-white/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary group-hover:scale-115 group-hover:rotate-12 transition-all duration-400">
              <Play className="fill-current w-5 h-5 ml-1" />
            </span> Ver Servicios
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20 animate-fade-in-up [animation-delay:1s]">
          <div className="flex items-center gap-2 text-white font-subheadline text-[1.1rem] tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <ShieldHalf className="w-6 h-6 text-accent" /> 100% SEGURO
          </div>
          <div className="flex items-center gap-2 text-white font-subheadline text-[1.1rem] tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Bolt className="w-6 h-6 text-accent" /> ULTRA RÁPIDO
          </div>
          <div className="flex items-center gap-2 text-white font-subheadline text-[1.1rem] tracking-wider transition-all hover:translate-y-[-3px] hover:text-accent">
            <Globe className="w-6 h-6 text-accent" /> COBERTURA TOTAL
          </div>
        </div>
      </div>
      
      {/* Floating Cards */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden lg:block z-10">
        <div className="absolute top-[20%] -left-[10%] bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 text-white font-subheadline text-2xl tracking-wider flex items-center gap-3 shadow-2xl card-1-anim hover:pause">
          <div className="w-[14px] h-[14px] bg-[#22c55e] rounded-full shadow-[0_0_15px_#22c55e]" /> EN TRÁNSITO
        </div>
        <div className="absolute bottom-[25%] right-[10%] bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 text-white font-subheadline text-2xl tracking-wider flex items-center gap-3 shadow-2xl card-2-anim hover:pause">
          <div className="w-[14px] h-[14px] bg-secondary rounded-full shadow-[0_0_15px_var(--color-secondary)]" /> VERIFICADO
        </div>
      </div>
    </section>
  );
}
