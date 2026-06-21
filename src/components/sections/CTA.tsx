"use client";

import { CheckCircle2, Calculator, Bolt, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CTA() {
  const ctaBg = PlaceHolderImages.find(img => img.id === 'cta-bg');

  return (
    <section className="cta-section relative py-32 bg-primary text-white overflow-hidden">
      {/* Background Image with Animation */}
      {ctaBg && (
        <div className="absolute inset-0 z-0 opacity-15 animate-slow-zoom pointer-events-none">
          <Image
            src={ctaBg.imageUrl}
            alt={ctaBg.description}
            fill
            data-ai-hint={ctaBg.imageHint}
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      
      {/* Tech-style Glowing Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/15 rounded-full filter blur-[100px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Action */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/40 px-5 py-2 rounded-full font-subhead text-xl tracking-wider uppercase animate-pulse">
              <Bolt className="w-5 h-5 text-accent fill-accent/20" /> ¡Empezá Ahora!
            </div>
            
            <h2 className="text-white font-display text-4xl md:text-5xl lg:text-6xl leading-tight uppercase">
              ¿Listo para <span className="text-accent">escalar</span> la logística de tu E-Commerce?
            </h2>
            
            <p className="text-slate-200 text-lg md:text-xl font-body max-w-[650px] leading-relaxed">
              Olvidate de la gestión compleja de paquetes y enfocate en hacer crecer tus ventas. Dejá la distribución urbana en Mar del Plata en manos de profesionales eficientes.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://api.whatsapp.com/send/?phone=5492236602699" 
                target="_blank" 
                className="btn btn-primary min-h-[44px] shadow-neo-yellow hover:scale-105 transition-transform duration-300"
              >
                Contactanos por WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/tarifas" 
                className="btn btn-secondary min-h-[44px] bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Calculator className="w-6 h-6" /> Ver Tarifas 2026
              </a>
            </div>
            
            {/* Checklist */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-10">
              {["Confianza local comprobada", "Innovación en última milla", "Motocicletas dedicadas"].map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-accent transition-colors cursor-default duration-350">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/15 text-accent shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent fill-accent/20" />
                  </span>
                  <span className="font-body font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Live Glassmorphic Tracking Widget */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="cta-wrapper w-full max-w-[450px] border border-white/15 p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              
              {/* Tracker Widget Header */}
              <div className="flex justify-between items-center pb-5 border-b border-white/10">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-body">CÓDIGO DE ENVÍO</span>
                  <span className="font-subhead text-xl text-white tracking-widest mt-0.5">DR-8204-MDP</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  EN TRÁNSITO
                </div>
              </div>
              
              {/* Tracker Timeline */}
              <div className="space-y-6 my-6 text-left relative">
                {/* Step 1: Completed */}
                <div className="flex gap-4 relative">
                  {/* Connector Line */}
                  <div className="absolute left-[11px] top-[24px] bottom-[-24px] w-[2px] bg-gradient-to-b from-accent to-secondary z-0" />
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center z-10 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.4)]">
                    <CheckCircle2 className="w-4 h-4 text-dark fill-dark/10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold tracking-wider font-body">10:15 HS</span>
                    <span className="font-bold text-white text-sm mt-0.5">Paquete Despachado</span>
                    <span className="text-xs text-slate-300 font-body">Base Central - Mar del Plata</span>
                  </div>
                </div>

                {/* Step 2: Active */}
                <div className="flex gap-4 relative">
                  {/* Connector Line */}
                  <div className="absolute left-[11px] top-[24px] bottom-[-24px] w-[2px] bg-dashed border-l border-white/20 z-0" />
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center z-10 shrink-0 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-secondary font-bold tracking-wider font-body">EN CURSO</span>
                    <span className="font-bold text-white text-sm mt-0.5">Repartidor en Ruta (Moto 4)</span>
                    <span className="text-xs text-slate-300 font-body">Zona: Playa Grande / Centro</span>
                  </div>
                </div>

                {/* Step 3: Pending */}
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center z-10 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="flex flex-col opacity-60">
                    <span className="text-[10px] text-slate-400 font-bold tracking-wider font-body">ESTIMADO</span>
                    <span className="font-bold text-white text-sm mt-0.5">Entrega Confirmada</span>
                    <span className="text-xs text-slate-300 font-body">Firma digital & foto de respaldo</span>
                  </div>
                </div>
              </div>

              {/* Route Map Simulator (SVG) */}
              <div className="mt-4 p-4 bg-black/35 rounded-2xl border border-white/5 relative overflow-hidden text-left">
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 font-body font-semibold">
                  <span>Ruta de Distribución</span>
                  <span className="text-accent font-bold">4.2 km restantes</span>
                </div>
                
                <svg className="w-full h-10 text-white/10" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background path */}
                  <path d="M10 20 C 50 5, 80 35, 120 20 C 150 10, 170 30, 190 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Completed path animation overlay */}
                  <path d="M10 20 C 50 5, 80 35, 120 20" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Start Point */}
                  <circle cx="10" cy="20" r="4.5" fill="#EAB308" className="shadow-lg" />
                  
                  {/* Driver Marker */}
                  <circle cx="120" cy="20" r="7" fill="#3B82F6" fillOpacity="0.3" className="animate-ping" />
                  <circle cx="120" cy="20" r="4.5" fill="#3B82F6" />
                  
                  {/* End Point */}
                  <circle cx="190" cy="20" r="4.5" fill="#64748B" />
                </svg>
                
                <div className="flex justify-between items-center text-[9px] text-slate-500 mt-1 font-body">
                  <span>Origen: Friuli 1972</span>
                  <span>Destino: Entrega</span>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
