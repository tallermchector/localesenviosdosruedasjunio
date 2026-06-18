"use client";

import React from "react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image src="/images/carousel_1.jpg" alt="Team 1" width={400} height={400} className="rounded-2xl border-2 border-slate-100 grayscale hover:grayscale-0 transition-all duration-500" data-ai-hint="professional worker" />
                <Image src="/images/carousel_2.jpg" alt="Team 2" width={400} height={600} className="rounded-2xl border-2 border-slate-100 grayscale hover:grayscale-0 transition-all duration-500" data-ai-hint="courier professional" />
              </div>
              <div className="space-y-4 pt-8">
                <Image src="/images/carousel_3.jpg" alt="Team 3" width={400} height={600} className="rounded-2xl border-2 border-slate-100 grayscale hover:grayscale-0 transition-all duration-500" data-ai-hint="logistics expert" />
                <Image src="/images/carousel_4.jpg" alt="Team 4" width={400} height={400} className="rounded-2xl border-2 border-slate-100 grayscale hover:grayscale-0 transition-all duration-500" data-ai-hint="office manager" />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="section-badge">Capital Humano</div>
            <h2 className="text-primary text-5xl md:text-6xl font-display uppercase leading-tight">Nuestro Equipo</h2>
            <p className="text-xl text-slate-600 font-body leading-relaxed">
              Detrás de cada envío exitoso hay un equipo de profesionales comprometidos con la excelencia operativa. En Envíos DosRuedas, nuestro personal es el activo más valioso.
            </p>
            <p className="text-lg text-slate-500 font-body leading-relaxed italic">
              "No solo movemos paquetes, movemos ilusiones y compromisos de miles de marplatenses todos los días."
            </p>
            <div className="pt-8 border-t-2 border-slate-100">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-subhead text-3xl text-secondary uppercase mb-2">Choferes Verificados</h4>
                  <p className="text-sm text-slate-500">Capacitados en atención al cliente y seguridad vial.</p>
                </div>
                <div>
                  <h4 className="font-subhead text-3xl text-secondary uppercase mb-2">Soporte 24/7</h4>
                  <p className="text-sm text-slate-500">Gestores logísticos siempre listos para ayudarte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
