"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldHalf, Bolt, Globe } from "lucide-react";
import { SpeedLine } from "@/components/SpeedLine";

export function Hero() {
  return (
    <section className="hero relative min-h-[calc(100vh-90px)] flex items-center py-[48px] overflow-hidden bg-white utility-bg">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/hero_background.jpeg')" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-[20px] max-w-[750px]">
        {/* Líneas de velocidad + badge */}
        <div className="relative mb-[24px]">
          <div className="flex flex-col items-start gap-[8px]">
            <SpeedLine className="w-24" color="primary" />
            <SpeedLine className="w-16" color="primary" />
            <SpeedLine className="w-8" color="primary" />
          </div>

          <div className="relative inline-flex items-center bg-secondary border-2 border-primary px-[8px] py-[4px] text-primary font-subtitle text-[20px] leading-[24px] tracking-[0.05em] uppercase shadow-hard-primary mb-[8px]">
            Tu Solución Confiable
          </div>
        </div>

        {/* Título principal — Anton */}
        <h1 className="font-title text-[80px] leading-[80px] tracking-[0.02em] text-primary mb-[24px]">
          Mensajería y Logística <br />
          <span className="inline-block bg-primary px-[4px] py-[2px] border-2 border-secondary text-white shadow-hard-secondary">
            E-Commerce
          </span> en Mar del Plata
        </h1>

        {/* Descripción — Bebas Neue */}
        <p className="font-subtitle text-[20px] leading-[24px] tracking-[0.03em] text-primary/80 mb-[32px] max-w-[600px]">
          Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-[16px] items-center mb-[40px]">
          <Link href="/cotizar/express" className="bg-primary text-secondary font-subtitle text-[20px] leading-[24px] tracking-[0.03em] uppercase py-[4px] px-[8px] border-2 border-primary shadow-hard-primary hover:bg-secondary hover:text-primary transition-none">
            Solicitar Servicio <ArrowRight className="ml-[4px] w-6 h-6" />
          </Link>
          <Link href="/servicios/envios-express" className="bg-white text-primary font-subtitle text-[20px] leading-[24px] tracking-[0.03em] uppercase py-[4px] px-[8px] border-2 border-primary shadow-hard-primary hover:bg-secondary transition-none flex items-center gap-[8px]">
            <span className="flex items-center justify-center w-[12px] h-[12px] bg-secondary border-2 border-primary text-primary">
              <Play className="w-5 h-5" />
            </span> Ver Servicios
          </Link>
        </div>

        {/* Indicadores de servicio */}
        <div className="border-t-2 border-primary pt-[24px]">
          <div className="flex flex-wrap gap-[16px] items-center">
            <div className="flex items-center gap-[4px]">
              <div className="w-6 h-6 flex items-center justify-center bg-secondary text-primary text-[24px] shadow-hard-primary">
                <ShieldHalf className="w-4 h-4" />
              </div>
              <span className="font-subtitle text-[18px] leading-[22px] tracking-[0.04em] text-primary">100% SEGURO</span>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="w-6 h-6 flex items-center justify-center bg-primary text-secondary text-[24px] shadow-hard-secondary">
                <Bolt className="w-4 h-4" />
              </div>
              <span className="font-subtitle text-[18px] leading-[22px] tracking-[0.04em] text-primary">ULTRA RÁPIDO</span>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="w-6 h-6 flex items-center justify-center bg-secondary text-primary text-[24px] shadow-hard-primary">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-subtitle text-[18px] leading-[22px] tracking-[0.04em] text-primary">COBERTURA TOTAL</span>
            </div>
          </div>
        </div>

        {/* Tarjetas flotantes */}
        <div className="absolute right-[5%] top-[40%] -translate-y-[50%] w-[300px] h-[400px] hidden lg:block z-10">
          <div className="absolute top-[20%] -left-[10%] bg-primary border-2 border-secondary px-[8px] py-[6px] text-secondary font-subtitle text-[24px] leading-[24px] tracking-[0.05em] uppercase flex items-center gap-[6px] shadow-hard-secondary">
            <div className="w-[10px] h-[10px] bg-secondary border border-primary shadow-hard-primary" />
            EN TRÁNSITO
          </div>
          <div className="absolute bottom-[25%] right-[10%] bg-secondary border-2 border-primary px-[8px] py-[6px] text-primary font-subtitle text-[24px] leading-[24px] tracking-[0.05em] uppercase flex items-center gap-[6px] shadow-hard-primary">
            <div className="w-[10px] h-[10px] bg-primary border border-secondary shadow-hard-secondary" />
            VERIFICADO
          </div>
        </div>
      </div>
    </section>
  );
}
