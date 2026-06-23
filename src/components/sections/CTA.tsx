"use client";

import { CheckCircle2, Calculator, Bolt, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpeedLine } from "@/components/SpeedLine";

export function CTA() {
  const ctaBg = PlaceHolderImages.find(img => img.id === 'cta-bg');

  return (
    <section className="cta-section relative py-[48px] bg-primary text-[var(--color-white)] overflow-hidden">
      {/* Background Image simplificado */}
      {ctaBg && (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
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

      {/* Elementos de estilo neo-brutalista */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-[0] shadow-[4px_4px_0px_0px_var(--color-primary)]" />
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/50 rounded-[0] shadow-[4px_4px_0px_0px_var(--color-secondary)]" />

      <div className="container mx-auto px-[20px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-[16px] items-start">

          {/* Left Column: Headline and Action */}
          <div className="lg:col-span-7 text-left space-y-[24px]">
            <div className="flex items-center gap-[8px] bg-secondary/20 text-secondary border border-secondary/40 px-[8px] py-[4px] font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.05em] uppercase">
              <Bolt className="w-5 h-5 text-secondary" /> ¡Empezá Ahora!
            </div>

            <h2 className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-[var(--color-white)] uppercase">
              ¿Listo para <span className="text-secondary">escalar</span> la logística de tu E-Commerce?
            </h2>

            <p className="font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.03em] text-[var(--color-white)]/90 max-w-[650px]">
              Olvidate de la gestión compleja de paquetes y enfocate en hacer crecer tus ventas. Dejá la distribución urbana en Mar del Plata en manos de profesionales eficientes.
            </p>

            <div className="flex flex-wrap gap-[8px] pt-[4px]">
              <a
                href="https://api.whatsapp.com/send/?phone=5492236602699"
                target="_blank"
                className="btn bg-secondary text-primary font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.03em] uppercase py-[3px] px-[4px] text-center font-bold border-2 border-primary hover:bg-primary hover:text-secondary transition-none shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-secondary)]"
              >
                Contactanos por WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/tarifas"
                className="btn bg-white text-primary font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.03em] uppercase py-[3px] px-[4px] text-center font-bold border-2 border-secondary hover:bg-secondary hover:text-white transition-none shadow-[4px_4px_0px_0px_var(--color-secondary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)]"
              >
                <Calculator className="w-6 h-6" /> Ver Tarifas 2026
              </a>
            </div>

            {/* Checklist neo-brutalista */}
            <div className="grid sm:grid-cols-3 gap-[8px] pt-[16px] border-t border-secondary/20 mt-[16px]">
              {["Confianza local comprobada", "Innovación en última milla", "Motocicletas dedicadas"].map((p, i) => (
                <div key={i} className="flex items-center gap-[4px] text-sm text-[var(--color-white)]/80 hover:text-[var(--color-white)] transition-colors cursor-default duration-350">
                  <span className="flex items-center justify-center w-5 h-5 rounded-[0] bg-secondary/20 text-secondary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  </span>
                  <span className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simple Tracking Widget - neo-brutalista */}
          <div className="lg:col-span-5 w-full mt-[24px] lg:mt-0">
            <div className="border-2 border-secondary p-[16px] bg-white/5">

              {/* Tracker Widget Header */}
              <div className="flex justify-between items-center pb-[8px] border-b border-secondary/20">
                <div className="flex flex-col text-left">
                  <span className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.05em] uppercase text-[var(--color-white)]/70">CÓDIGO DE ENVÍO</span>
                  <span className="font-[Anton] text-[24px] leading-[24px] tracking-[0.02em] text-[var(--color-white)] tracking-widest mt-[2px]">DR-8204-MDP</span>
                </div>
                <div className="flex items-center gap-[4px] bg-secondary/20 border border-secondary/30 text-secondary px-[3] py-[1] rounded-[0] text-[0.7rem] font-[Bebas_NeuE] uppercase tracking-wide">
                  <span className="relative flex h-[2px] w-[2px]">
                    <span className="absolute inline-flex h-full w-full rounded-[0] bg-secondary/50 opacity-75"></span>
                    <span className="relative inline-flex rounded-[0] h-[2px] w-[2px] bg-secondary"></span>
                  </span>
                  EN TRÁNSITO
                </div>
              </div>

              {/* Tracker Timeline */}
              <div className="space-y-[6px] my-[8px] text-left relative">
                {/* Step 1: Completed */}
                <div className="flex gap-[8px] relative">
                  {/* Connector Line */}
                  <div className="absolute left-[4px] top-[8px] bottom-[-8px] w-[2px] bg-secondary" />
                  <div className="w-[8px] h-[8px] rounded-[0] bg-secondary flex items-center justify-center z-10 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white fill-white/20" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[Bebas_NeuE] text-[10px] leading-[14px] tracking-[0.05em] uppercase text-[var(--color-white)]/60">10:15 HS</span>
                    <span className="font-[Bebas_NeuE] text-[12px] leading-[16px] tracking-[0.03em] text-[var(--color-white)]/80 mt-[1px]">Paquete Despachado</span>
                    <span className="text-xs text-[var(--color-white)]/50 font-[Bebas_NeuE]">Base Central - Mar del Plata</span>
                  </div>
                </div>

                {/* Step 2: Active */}
                <div className="flex gap-[8px] relative">
                  {/* Connector Line */}
                  <div className="absolute left-[4px] top-[8px] bottom-[-8px] w-[2px] bg-secondary" />
                  <div className="w-[8px] h-[8px] rounded-[0] bg-secondary flex items-center justify-center z-10 shrink-0">
                    <div className="w-[4px] h-[4px] rounded-[0] bg-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[Bebas_NeuE] text-[10px] leading-[14px] tracking-[0.05em] uppercase text-[var(--color-white)]/60">EN CURSO</span>
                    <span className="font-[Bebas_NeuE] text-[12px] leading-[16px] tracking-[0.03em] text-[var(--color-white)]/80 mt-[1px]">Repartidor en Ruta (Moto 4)</span>
                    <span className="text-xs text-[var(--color-white)]/50 font-[Bebas_NeuE]">Zona: Playa Grande / Centro</span>
                  </div>
                </div>

                {/* Step 3: Pending */}
                <div className="flex gap-[8px] relative">
                  <div className="w-[8px] h-[8px] rounded-[0] bg-white/20 border border-white/20 flex items-center justify-center z-10 shrink-0">
                    <div className="w-[2px] h-[2px] rounded-[0] bg-secondary" />
                  </div>
                  <div className="flex flex-col opacity-60">
                    <span className="font-[Bebas_NeuE] text-[10px] leading-[14px] tracking-[0.05em] uppercase text-[var(--color-white)]/60">ESTIMADO</span>
                    <span className="font-[Bebas_NeuE] text-[12px] leading-[16px] tracking-[0.03em] text-[var(--color-white)]/80 mt-[1px]">Entrega Confirmada</span>
                    <span className="text-xs text-[var(--color-white)]/50 font-[Bebas_NeuE]">Firma digital & foto de respaldo</span>
                  </div>
                </div>
              </div>

              {/* Route Map Simulator - neo-brutalista */}
              <div className="mt-[8px] p-[4px] bg-secondary/10 border border-secondary/5 relative overflow-hidden text-left">
                <div className="flex justify-between items-center text-[10px] text-[var(--color-white)]/50 mb-[2px] font-[Bebas_NeuE] font-semibold">
                  <span>Ruta de Distribución</span>
                  <span className="text-secondary font-[Bebas_NeuE] bold">4.2 km restantes</span>
                </div>

                <svg className="w-full h-[10px] text-[var(--color-white)]/10" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background path */}
                  <path d="M10 10 C 50 2, 80 18, 120 10 C 150 6, 170 14, 190 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  {/* Completed path animation overlay */}
                  <path d="M10 10 C 50 2, 80 18, 120 10" stroke="#FFEC00" strokeWidth="1" strokeLinecap="round" />

                  {/* Start Point */}
                  <circle cx="10" cy="10" r="2.5" fill="#FFEC00" className="shadow-[2px_2px_0px_0px_#0635A6]" />

                  {/* Driver Marker */}
                  <circle cx="120" cy="10" r="3.5" fill="#FFEC00" fillOpacity="0.3" className="animate-ping" />
                  <circle cx="120" cy="10" r="2" fill="#FFEC00" />

                  {/* End Point */}
                  <circle cx="190" cy="10" r="2.5" fill="#64748B" />
                </svg>

                <div className="flex justify-between items-center text-[8px] text-[var(--color-white)]/40 mt-[1px] font-[Bebas_NeuE]">
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
