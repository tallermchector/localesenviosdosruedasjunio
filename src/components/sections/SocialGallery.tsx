"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

export function SocialGallery() {
  const posts = [
    { id: 'social-post-1', url: '/images/carousel_1.jpg', hint: 'courier hands' },
    { id: 'social-post-2', url: '/hero/delivery_background.jpeg', hint: 'delivery background' },
    { id: 'social-post-3', url: '/images/carousel_4.jpg', hint: 'carousel image 4' },
    { id: 'social-post-4', url: '/redes/fac2.webp', hint: 'facebook community post' },
    { id: 'social-post-5', url: '/redes/ig1.webp', hint: 'instagram promotion' },
    { id: 'social-post-6', url: '/redes/ig4.webp', hint: 'instagram delivery update' },
  ];

  const allPosts = [...posts, ...posts];

  return (
    <section id="redes" className="py-24 bg-light overflow-hidden pb-0">
      <div className="container text-center mb-16">
        <div className="section-badge">
          <span className="pulse-dot" /> CONECTA CON NOSOTROS
        </div>
        <h2 className="mb-12">SIGUE NUESTRO MOVIMIENTO</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="https://instagram.com/enviosdosruedas" target="_blank" className="group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-2xl w-[280px] shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[#E1306C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Instagram className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            <div className="text-left">
              <strong className="block font-subhead text-2xl tracking-wider text-dark group-hover:text-white transition-colors">Instagram</strong>
              <span className="text-sm text-slate-500 group-hover:text-white/80 transition-colors">Novedades diarias</span>
            </div>
          </a>
          
          <a href="https://www.facebook.com/enviosdosruedas" target="_blank" className="group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-2xl w-[280px] shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[#1877F2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Facebook className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            <div className="text-left">
              <strong className="block font-subhead text-2xl tracking-wider text-dark group-hover:text-white transition-colors">Facebook</strong>
              <span className="text-sm text-slate-500 group-hover:text-white/80 transition-colors">Comunidad activa</span>
            </div>
          </a>
          
          <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-2xl w-[280px] shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[#25D366] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <MessageCircle className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
            <div className="text-left">
              <strong className="block font-subhead text-2xl tracking-wider text-dark group-hover:text-white transition-colors">WhatsApp</strong>
              <span className="text-sm text-slate-500 group-hover:text-white/80 transition-colors">Atención inmediata</span>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-dark py-12">
        <div className="flex gap-6 px-8 animate-scroll-track w-max hover:[animation-play-state:paused]">
          {allPosts.map((p, i) => (
            <div key={i} className="relative w-[320px] h-[320px] shrink-0 group overflow-hidden">
              <Image 
                src={p.url} 
                alt="Social Post" 
                fill 
                data-ai-hint={p.hint}
                className="object-cover transition-all duration-500 group-hover:brightness-50 group-hover:grayscale-[50%]" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <Instagram className="w-12 h-12 text-accent" />
                <span className="font-subhead text-3xl tracking-widest uppercase">VER POST</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
