
"use client";

import { Bolt, ShieldHalf, Play } from "lucide-react";
import Link from "next/link";

export function Vision() {
  return (
    <section id="nosotros" className="py-24 bg-light utility-bg">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 items-center gap-16">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full font-subheadline text-[1.2rem] tracking-wider font-bold border border-secondary/20 hover:scale-105 hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(59,130,246,0.2)] transition-all">
            <span className="pulse-dot" /> Partner Logístico Especializado
          </div>
          
          <h2 className="font-headline text-[clamp(2.5rem,5vw,4rem)] color-primary">Nuestra Visión Logística</h2>
          <p className="text-[1.2rem] max-w-[700px]">Transformamos tus costos fijos en solutions flexibles que acompañan el crecimiento de tu negocio.</p>
          
          <div className="grid gap-8">
            <div className="flex items-start gap-6 group hover:translate-x-[10px] transition-transform duration-400">
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-primary text-accent rounded-lg text-2xl shrink-0 transition-all duration-400 group-hover:bg-secondary group-hover:text-light group-hover:rotate-12 group-hover:scale-110">
                <Bolt className="w-8 h-8" />
              </div>
              <div className="feature-text">
                <h4 className="text-primary text-[1.3rem] mb-1 group-hover:text-secondary transition-colors">Entregas a Tiempo</h4>
                <p>Puntualidad garantizada en cada envío</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group hover:translate-x-[10px] transition-transform duration-400">
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-primary text-accent rounded-lg text-2xl shrink-0 transition-all duration-400 group-hover:bg-secondary group-hover:text-light group-hover:rotate-12 group-hover:scale-110">
                <ShieldHalf className="w-8 h-8" />
              </div>
              <div className="feature-text">
                <h4 className="text-primary text-[1.3rem] mb-1 group-hover:text-secondary transition-colors">Envíos Seguros</h4>
                <p>Protección total de tus paquetes</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t-2 border-[#e2e8f0]">
            <div className="metric flex flex-col gap-2 group">
              <strong className="font-headline text-[2.5rem] text-secondary leading-none transition-all group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3 inline-block">+5.000</strong>
              <span className="text-[0.9rem] leading-[1.4] font-medium">Confianza local comprobada</span>
            </div>
            <div className="metric flex flex-col gap-2 group">
              <strong className="font-headline text-[2.5rem] text-secondary leading-none transition-all group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3 inline-block">7 Años</strong>
              <span className="text-[0.9rem] leading-[1.4] font-medium">Innovación constante en última milla</span>
            </div>
            <div className="metric flex flex-col gap-2 group">
              <strong className="font-headline text-[2.5rem] text-secondary leading-none transition-all group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3 inline-block">Flota Exclusiva</strong>
              <span className="text-[0.9rem] leading-[1.4] font-medium">Motocicletas dedicadas para máxima agilidad urbana</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative p-6 bg-white border-2 border-primary shadow-[15px_15px_0px_rgba(30,58,138,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[25px_25px_0px_rgba(30,58,138,0.2)] transition-all duration-500 group">
            <img 
              src="resources/bmQcUMs5EU86j5sgCJl_x3" 
              alt="Mapa de cobertura logística" 
              className="w-full h-[500px] object-cover block transition-all group-hover:brightness-105 group-hover:contrast-110" 
            />
            <div className="absolute -top-5 -right-5 w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] z-0 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute -bottom-[30px] -left-[30px] bg-primary text-white px-8 py-6 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform group-hover:-translate-y-2">
              <span className="font-subheadline text-2xl tracking-wider max-w-[150px] leading-[1.2] uppercase">Conocé más sobre nosotros</span>
              <Link href="/nosotros/sobre-nosotros" className="w-[60px] h-[60px] rounded-full bg-accent text-dark flex items-center justify-center text-xl transition-all hover:scale-115 hover:rotate-12 hover:bg-light hover:text-primary play-btn-anim">
                <Play className="fill-current w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
