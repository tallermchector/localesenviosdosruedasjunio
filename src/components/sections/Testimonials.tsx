
"use client";

import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Muchísima tranquilidad contar con alguien tan fiable y resolutivo. Recomiendo con los ojos cerrados.",
    author: "Cliente Satisfecho"
  },
  {
    text: "Excelente servicio, atención de primera, rápido y confiable. Recomendado 100%.",
    author: "Cliente Comercial"
  },
  {
    text: "Lo usé varias veces para pedidos e-commerce. Impecable el servicio y los genios en atención.",
    author: "Socio E-Commerce"
  },
  {
    text: "Rápidos, atentos y resolvieron mi problema con la mejor predisposición. ¡Excelentes!",
    author: "Usuario Local"
  }
];

export function Testimonials() {
  return (
    <section id="resenas" className="py-24 bg-slate-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl text-primary font-headline">Respaldo de nuestros clientes</h2>
          <p className="text-xl text-slate-600 font-medium">El crecimiento de las empresas locales es nuestra mejor métrica de éxito.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="group bg-primary p-10 border-l-[6px] border-accent relative hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 group-hover:text-accent/10 transition-all duration-500" />
              <p className="text-xl italic text-white mb-6 relative z-10 leading-relaxed">
                "{r.text}"
              </p>
              <p className="font-subheadline text-2xl text-accent tracking-wider uppercase group-hover:translate-x-2 transition-transform">
                — {r.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
