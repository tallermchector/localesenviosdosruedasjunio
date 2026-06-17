
"use client";

import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Matías de envío dos ruedas mensajería Da muchísima tranquilidad contar con alguien tan fiable, resolutivo y buena gente. Gracias, Matías, por hacer posible que un pedacito de la costa argentina viaje conmigo hasta Europa.",
    author: "Cliente Satisfecho"
  },
  {
    text: "Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100%",
    author: "Cliente Comercial"
  },
  {
    text: "Lo use varias veces para llevar unos pedidos a nuestros clientes. Impecable el servicio. Ademas hacen depósitos en cajeros sin problemas. Unos genios !!!",
    author: "Socio E-Commerce"
  },
  {
    text: "Exclente el servico, rapidos, muy atentos, resolvieron mi problema con la mejor predisposicion, los recomiendo ampliamente!",
    author: "Usuario Local"
  }
];

export function Testimonials() {
  return (
    <section id="resenas" className="py-24 bg-[#f1f5f9]">
      <div className="container mx-auto px-8">
        <div className="mb-16 space-y-4">
          <h2 className="text-primary font-headline">Respaldo de nuestros clientes</h2>
          <p className="text-[1.1rem]">El crecimiento de las empresas locales es nuestra mejor métrica de éxito.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="review-card group bg-primary text-white p-12 border-l-[6px] border-accent relative transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-l-[10px]">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:scale-120 group-hover:rotate-12 group-hover:text-accent/15 transition-all duration-500" />
              <p className="text-[1.1rem] italic mb-6 relative z-10 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">"{r.text}"</p>
              <span className="font-subheadline text-2xl text-accent tracking-widest uppercase transition-transform group-hover:translate-x-1 inline-block">— {r.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
