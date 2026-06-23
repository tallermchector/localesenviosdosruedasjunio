"use client";

import { Bolt, ShieldHalf, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Vision() {
  return (
    <section id="nosotros" className="py-[48px] bg-white">
      <div className="container grid lg:grid-cols-2 items-center gap-[64px]">
        <div className="space-y-[24px]">
          <div className="section-badge">
            <span className="pulse-dot" /> Partner Logístico Especializado
          </div>

          <h2 className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-primary uppercase mb-[16px]">
            Nuestra Visión Logística
          </h2>
          <p className="font-[Bebas_Neue" text-[20px] leading-[24px] tracking-[0.03em] text-on-surface-variant max-w-[700px]">
            Transformamos tus costos fijos en solutions flexibles que acompañan el crecimiento de tu negocio.
          </p>

          <div className="grid gap-[16px] pt-[16px]">
            <div className="flex items-start gap-[16px]">
              <div className="flex items-center justify-center w-[16px] h-[16px] bg-primary text-secondary rounded-[0] text-2xl shrink-0">
                <Bolt className="w-8 h-8" />
              </div>
              <div className="feature-text">
                <h4 className="font-[Anton] text-[24px] leading-[24px] tracking-[0.02em] text-primary mb-[4px]">
                  Entregas a Tiempo
                </h4>
                <p className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] text-on-surface-variant">
                  Puntualidad garantizada en cada envío
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[16px]">
              <div className="flex items-center justify-center w-[16px] h-[16px] bg-primary text-secondary rounded-[0] text-2xl shrink-0">
                <ShieldHalf className="w-8 h-8" />
              </div>
              <div className="feature-text">
                <h4 className="font-[Anton] text-[24px] leading-[24px] tracking-[0.02em] text-primary mb-[4px]">
                  Envíos Seguros
                </h4>
                <p className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] text-on-surface-variant">
                  Protección total de tus paquetes
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[16px] pt-[24px] border-t border-secondary/20">
            <div className="metric flex flex-col gap-[4px]">
              <strong className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-secondary block">
                +5.000
              </strong>
              <span className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] text-on-surface-variant uppercase">
                Confianza local
              </span>
            </div>
            <div className="metric flex flex-col gap-[4px]">
              <strong className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-secondary block">
                7 Años
              </strong>
              <span className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] text-on-surface-variant uppercase">
                Innovación
              </span>
            </div>
            <div className="metric flex flex-col gap-[4px]">
              <strong className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-secondary block">
                Flota
              </strong>
              <span className="font-[Bebas_NeuE] text-[14px] leading-[20px] tracking-[0.03em] text-on-surface-variant uppercase">
                Exclusiva
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative p-[16px] bg-white border-2 border-primary">
            <div className="relative w-full h-[96px] overflow-hidden">
              <Image
                src="/cards/card_mapa.webp"
                alt="Mapa de cobertura"
                fill
                data-ai-hint="route map"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-[16px] h-[16px] bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] z-0" />
            <div className="absolute -bottom-[16px] -left-[16px] bg-primary text-white px-[8px] py-[6px] flex items-center gap-[8px]">
              <span className="font-[Bebas_NeuE] text-[16px] leading-[20px] tracking-[0.03em] uppercase max-w-[150px] leading-none">
                Conocé más sobre nosotros
              </span>
              <button className="w-[10px] h-[10px] rounded-[0] bg-accent text-dark flex items-center justify-center text-[4xl] transition-none hover:scale-[1.15] hover:rotate-[12deg] hover:bg-light hover:text-primary">
                <Play className="fill-current w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
