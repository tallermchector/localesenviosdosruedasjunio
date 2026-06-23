"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";

// Carga asíncrona para evitar errores de SSR en Next.js con Shaders de Canvas
const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function HeroDitheringCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 mt-[90px] w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contenedor adaptado a la estética Brutalista del repositorio */}
        <div className="relative overflow-hidden rounded-none-[32px] border-4 border-black dark:border-white bg-card dark:bg-slate-800 shadow-brutal dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center p-4 md:p-6 text-center transition-all duration-300">

          {/* Fondo interactivo con Shader Dithering */}
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20 animate-pulse" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 md:opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparente
                colorFront="hsl(var(--primary))" // Vinculado al color primario del repositorio
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Contenido */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

            {/* Badge superior */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-none border-2 border-black dark:border-white bg-light dark:bg-slate-700 px-4 py-1.5 text-sm md:text-base font-bold text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2 w-2 bg-primary"></span>
              </span>
              Envíos en Dos Ruedas
            </div>

            {/* Titular utilizando font-headline (Anton) adaptado al repositorio */}
            <h1 className="font-headline text-[clamp(2.5rem,8vw,5.5rem)] tracking-normal text-foreground mb-6 uppercase leading-none selection:bg-primary selection:text-white">
              Tus envíos, <br className="hidden md:block" />
              <span className="text-primary dark:text-accent bg-black dark:bg-white text-white dark:text-black px-4 inline-block transform -rotate-1 my-2">
                entregados a tiempo.
              </span>
            </h1>

            {/* Descripción utilizando la fuente base */}
            <p className="text-black font-medium text-base md:text-xl max-w-2xl mb-10 px-2 leading-relaxed dark:text-slate-300">
              La red de mensajería en moto más rápida, segura y confiable. Soluciones logísticas inmediatas adaptadas a las necesidades de tu negocio.
            </p>

            {/* Botón con diseño e interacciones brutalistas */}
            <button
              className="group relative inline-flex min-h-[56px] w-full max-w-[280px] items-center justify-center gap-3 overflow-hidden rounded-none border-4 border-black dark:border-white bg-primary dark:bg-accent px-8 md:px-12 text-lg font-black text-primary-foreground dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              aria-label="Cotizar Envío"
            >
              <span className="relative z-10">Cotizar Envío</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
