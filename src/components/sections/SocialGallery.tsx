"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";

const posts = [
  { img: "resources/9uqImJ8rV8RevmhuX7m4M0", link: "https://instagram.com/enviosdosruedas" },
  { img: "resources/87w9mIEHzJJ4KnONh424qf", link: "https://www.facebook.com/enviosdosruedas" },
  { img: "resources/8ABUMGlR7jB3OJgSw-M_Df", link: "https://instagram.com/enviosdosruedas" },
  { img: "resources/aBLv2uSUlYX23t6d9jvkNs", link: "https://www.facebook.com/enviosdosruedas" },
  { img: "resources/8C68LBXNqOu5mZ5lOeJ4bY", link: "https://instagram.com/enviosdosruedas" }
];

export function SocialGallery() {
  const allPosts = [...posts, ...posts]; // Duplicated for infinite scroll illusion

  return (
    <section id="redes" className="py-24 bg-light overflow-hidden pb-0">
      <div className="container mx-auto px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full font-subheadline text-[1.2rem] tracking-wider font-bold mb-4"><span className="pulse-dot" /> CONECTA CON NOSOTROS</div>
        <h2 className="text-primary font-headline uppercase mb-16">SIGUE NUESTRO MOVIMIENTO</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="https://instagram.com/enviosdosruedas" target="_blank" className="social-btn group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-[12px] min-w-[250px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent">
            <div className="absolute inset-0 bg-[#E1306C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Instagram className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-2xl tracking-wider text-dark group-hover:text-white transition-colors">Instagram</strong>
              <span className="text-[0.85rem] text-[#64748b] group-hover:text-white/80 transition-colors">Novedades diarias</span>
            </div>
          </a>
          
          <a href="https://www.facebook.com/enviosdosruedas" target="_blank" className="social-btn group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-[12px] min-w-[250px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent">
            <div className="absolute inset-0 bg-[#1877F2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Facebook className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-2xl tracking-wider text-dark group-hover:text-white transition-colors">Facebook</strong>
              <span className="text-[0.85rem] text-[#64748b] group-hover:text-white/80 transition-colors">Comunidad activa</span>
            </div>
          </a>
          
          <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="social-btn group relative flex items-center gap-5 p-6 bg-white border border-[#e2e8f0] rounded-[12px] min-w-[250px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent">
            <div className="absolute inset-0 bg-[#25D366] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <MessageCircle className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-2xl tracking-wider text-dark group-hover:text-white transition-colors">WhatsApp</strong>
              <span className="text-[0.85rem] text-[#64748b] group-hover:text-white/80 transition-colors">Atención inmediata</span>
            </div>
          </a>
        </div>
      </div>

      <div className="infinite-carousel bg-dark py-12">
        <div className="carousel-track-anim flex gap-6 px-8 w-max hover:pause">
          {allPosts.map((p, i) => (
            <div key={i} className="carousel-item relative w-[320px] h-[320px] shrink-0 group overflow-hidden">
              <img src={p.img} alt="Social content" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50 group-hover:grayscale-[50%]" />
              <a href={p.link} target="_blank" className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <Instagram className="w-12 h-12 text-accent transition-transform hover:scale-120" />
                <span className="font-subheadline text-[1.8rem] tracking-wider uppercase">VER POST</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
