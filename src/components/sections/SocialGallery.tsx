
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Instagram, Facebook, Phone, Eye } from "lucide-react";

export function SocialGallery() {
  const images = [
    PlaceHolderImages.find(i => i.id === 'social-1'),
    PlaceHolderImages.find(i => i.id === 'social-2'),
    PlaceHolderImages.find(i => i.id === 'social-3'),
    PlaceHolderImages.find(i => i.id === 'social-4'),
    PlaceHolderImages.find(i => i.id === 'social-5'),
  ].filter(Boolean);

  // Duplicate for infinite scroll
  const galleryItems = [...images, ...images];

  return (
    <section id="redes" className="pt-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="section-badge mb-4"><span className="pulse-dot" /> Conecta con nosotros</div>
        <h2 className="text-5xl text-primary font-headline mb-12">Sigue nuestro movimiento</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl min-w-[280px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Instagram className="w-10 h-10 text-primary group-hover:text-white transition-colors relative z-10" />
            <div className="text-left relative z-10">
              <p className="font-headline text-2xl text-slate-900 group-hover:text-white transition-colors">Instagram</p>
              <p className="text-xs font-bold text-slate-500 group-hover:text-white/80 transition-colors uppercase">Novedades diarias</p>
            </div>
          </a>
          
          <a href="#" className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl min-w-[280px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Facebook className="w-10 h-10 text-primary group-hover:text-white transition-colors relative z-10" />
            <div className="text-left relative z-10">
              <p className="font-headline text-2xl text-slate-900 group-hover:text-white transition-colors">Facebook</p>
              <p className="text-xs font-bold text-slate-500 group-hover:text-white/80 transition-colors uppercase">Comunidad activa</p>
            </div>
          </a>
          
          <a href="#" className="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl min-w-[280px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Phone className="w-10 h-10 text-primary group-hover:text-white transition-colors relative z-10" />
            <div className="text-left relative z-10">
              <p className="font-headline text-2xl text-slate-900 group-hover:text-white transition-colors">WhatsApp</p>
              <p className="text-xs font-bold text-slate-500 group-hover:text-white/80 transition-colors uppercase">Atención inmediata</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-slate-950 py-12">
        <div className="flex animate-infinite-scroll w-[200%] md:w-[200%]">
          {galleryItems.map((img, i) => (
            <div key={i} className="relative w-80 h-80 flex-shrink-0 group overflow-hidden mx-4">
              <Image 
                src={img?.imageUrl || ""} 
                alt="Social post" 
                fill 
                className="object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center space-y-2 scale-90 group-hover:scale-100 transition-transform">
                  <Instagram className="w-12 h-12 text-accent mx-auto" />
                  <span className="font-subheadline text-2xl text-white tracking-widest uppercase">VER POST</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
