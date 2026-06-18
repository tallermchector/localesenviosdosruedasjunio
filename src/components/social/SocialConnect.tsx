"use client";

import React from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function SocialConnect() {
  const networks = [
    {
      name: "Instagram",
      handle: "@enviosdosruedas",
      icon: <Instagram className="w-8 h-8" />,
      color: "bg-[#E1306C]",
      link: "https://instagram.com/enviosdosruedas",
      desc: "Novedades diarias y tips logísticos"
    },
    {
      name: "Facebook",
      handle: "Envíos DosRuedas",
      icon: <Facebook className="w-8 h-8" />,
      color: "bg-[#1877F2]",
      link: "https://facebook.com/enviosdosruedas",
      desc: "Comunidad activa de emprendedores"
    },
    {
      name: "WhatsApp",
      handle: "+54 223 660-2699",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-[#25D366]",
      link: "https://api.whatsapp.com/send/?phone=5492236602699",
      desc: "Atención inmediata y cotizaciones"
    }
  ];

  return (
    <section className="py-20 bg-light utility-bg">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {networks.map((net, i) => (
            <a
              key={i}
              href={net.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl hover:-translate-y-2 hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${net.color} opacity-5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
              <div className={`w-16 h-16 ${net.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                {net.icon}
              </div>
              <h3 className="text-primary text-3xl font-subhead uppercase mb-1">{net.name}</h3>
              <p className="font-bold text-slate-400 mb-4">{net.handle}</p>
              <p className="text-slate-600 font-body mb-6">{net.desc}</p>
              <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                Seguir ahora <span className="w-8 h-[2px] bg-accent" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
