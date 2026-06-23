"use client";

import { CheckCircle2, Calculator, Bolt, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SpeedLine } from "@/components/SpeedLine";

export function CTA() {
  const ctaBg = PlaceHolderImages.find(img => img.id === 'cta-bg');

  return (
    <section className="cta-section relative py-[48px] bg-white text-primary overflow-hidden">
      {/* Elementos decorativos neo-brutalistas */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary shadow-hard-primary" />
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 shadow-hard-secondary" />

      <div className="container mx-auto px-[20px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-[16px] items-start">

          {/* Columna izquierda: Headline y acción */}
          <div className="lg:col-span-7 text-left space-y-[24px]">
            <div className="flex items-center gap-[8px] bg-secondary text-primary border-2 border-primary px-[8px] py-[4px] font-subtitle text-[20px] leading-[24px] tracking-[0.05em] uppercase shadow-hard-primary w-fit">
              <Bolt className="w-5 h-5 text-primary" /> ¡Empezá Ahora!
            </div>

            <h2 className="font-title text-[48px] leading-[48px] tracking-[0.02em] text-primary uppercase">
              ¿Listo para <span className="text-white bg-primary px-2 border-2 border-primary">escalar</span> la logística de tu E-Commerce?
            </h2>

            <p className="font-subtitle text-[20px] leading-[24px] tracking-[0.03em] text-primary/80 max-w-[650px]">
              Olvidate de la gestión compleja de paquetes y enfocate en hacer crecer tus ventas. Dejá la distribución urbana en Mar del Plata en manos de profesionales eficientes.
            </p>

            <div className="flex flex-wrap gap-[8px] pt-[4px]">
              <a
                href="https://api.whatsapp.com/send/?phone=5492236602699"
                target="_blank"
                className="btn bg-secondary text-primary font-subtitle text-[20px] leading-[24px] tracking-[0.05em] uppercase py-[3px] px-[4px] text-center font-bold border-2 border-primary hover:bg-primary hover:text-secondary transition-none shadow-hard-primary hover:shadow-hard-secondary"
              >
                Contactanos por WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/tarifas"
                className="btn bg-white text-primary font-subtitle text-[20px] leading-[24px] tracking-[0.05em] uppercase py-[3px] px-[4px] text-center font-bold border-2 border-primary hover:bg-secondary hover:text-primary transition-none shadow-hard-primary"
              >
                <Calculator className="w-6 h-6" /> Ver Tarifas 2026
              </a>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-3 gap-[8px] pt-[16px] border-t-2 border-primary/20 mt-[16px]">
              {["Confianza local comprobada", "Innovación en última milla", "Motocicletas dedicadas"].map((p, i) => (
                <div key={i} className="flex items-center gap-[4px] text-sm text-primary/70 hover:text-primary transition-colors cursor-default duration-350">
                  <span className="flex items-center justify-center w-5 h-5 bg-primary/10 text-primary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="font-subtitle text-[14px] leading-[20px] tracking-[0.03em] font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Widget de tracking */}
          <div className="lg:col-span-5 w-full mt-[24px] lg:mt-0">
            <div className="border-2 border-primary p-[16px] bg-primary text-white">

              {/* Header del tracker */}
              <div className="flex justify-between items-center pb-[8px] border-b border-secondary/20">
                <div className="flex flex-col text-left">
                  <span className="font-subtitle text-[14px] leading-[20px] tracking-[0.05em] uppercase text-white/70">CÓDIGO DE ENVÍO</span>
                  <span className="font-title text-[24px] leading-[24px] tracking-[0.02em] text-white tracking-widest mt-[2px]">DR-8204-MDP</span>
                </div>
                <div className="flex items-center gap-[4px] bg-secondary/20 border border-secondary/30 text-secondary px-[3] py-[1] text-[0.7rem] font-subtitle uppercase tracking-[0.05em]">
                  <span className="relative flex h-[2px] w-[2px]">
                    <span className="absolute inline-flex h-full w-full bg-secondary/50 opacity-75"></span>
                    <span className="relative inline-flex h-[2px] w-[2px] bg-secondary"></span>
                  </span>
                  EN TRÁNSITO
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-[6px] my-[8px] text-left relative">
                {/* Step 1: Completado */}
                <div className="flex gap-[8px] relative">
                  <div className="absolute left-[4px] top-[8px] bottom-[-8px] w-[2px] bg-secondary" />
                  <div className="w-[8px] h-[8px] bg-secondary flex items-center justify-center z-10 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white fill-white/20" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-subtitle text-[10px] leading-[14px] tracking-[0.05em] uppercase text-white/60">10:15 HS</span>
                    <span className="font-subtitle text-[12px] leading-[16px] tracking-[0.03em] text-white/80 mt-[1px]">Paquete Despachado</span>
                    <span className="text-xs text-white/50 font-subtitle">Base Central - Mar del Plata</span>
                  </div>
                </div>

                {/* Step 2: Activo */}
                <div className="flex gap-[8px] relative">
                  <div className="absolute left-[4px] top-[8px] bottom-[-8px] w-[2px] bg-secondary" />
                  <div className="w-[8px] h-[8px] bg-secondary flex items-center justify-center z-10 shrink-0">
                    <div className="w-[4px] h-[4px] bg-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-subtitle text-[10px] leading-[14px] tracking-[0.05em] uppercase text-white/60">EN CURSO</span>
                    <span className="font-subtitle text-[12px] leading-[16px] tracking-[0.03em] text-white/80 mt-[1px]">Repartidor en Ruta (Moto 4)</span>
                    <span className="text-xs text-white/50 font-subtitle">Zona: Playa Grande / Centro</span>
                  </div>
                </div>

                {/* Step 3: Pendiente */}
                <div className="flex gap-[8px] relative">
                  <div className="w-[8px] h-[8px] bg-white/20 border border-white/20 flex items-center justify-center z-10 shrink-0">
                    <div className="w-[2px] h-[2px] bg-secondary" />
                  </div>
                  <div className="flex flex-col opacity-60">
                    <span className="font-subtitle text-[10px] leading-[14px] tracking-[0.05em] uppercase text-white/60">ESTIMADO</span>
                    <span className="font-subtitle text-[12px] leading-[16px] tracking-[0.03em] text-white/80 mt-[1px]">Entrega Confirmada</span>
                    <span className="text-xs text-white/50 font-subtitle">Firma digital & foto de respaldo</span>
                  </div>
                </div>
              </div>

              {/* Ruta de distribución */}
              <div className="mt-[8px] p-[4px] bg-secondary/10 border border-secondary/5 relative overflow-hidden text-left">
                <div className="flex justify-between items-center text-[10px] text-white/50 mb-[2px] font-subtitle font-semibold">
                  <span>Ruta de Distribución</span>
                  <span className="text-secondary font-subtitle bold">4.2 km restantes</span>
                </div>

                <svg className="w-full h-[10px] text-white/10" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10 C 50 2, 80 18, 120 10 C 150 6, 170 14, 190 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M10 10 C 50 2, 80 18, 120 10" stroke="#FFEC00" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="2.5" fill="#FFEC00" className="shadow-hard-primary" />
                  <circle cx="120" cy="10" r="3.5" fill="#FFEC00" fillOpacity="0.3" className="animate-ping" />
                  <circle cx="120" cy="10" r="2" fill="#FFEC00" />
                  <circle cx="190" cy="10" r="2.5" fill="#64748B" />
                </svg>

                <div className="flex justify-between items-center text-[8px] text-white/40 mt-[1px] font-subtitle">
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
