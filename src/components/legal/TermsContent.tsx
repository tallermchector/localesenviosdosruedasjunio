"use client";

import React from "react";
import { FileText, Clock, ShieldCheck, AlertCircle } from "lucide-react";

export function TermsContent() {
  const sections = [
    {
      id: 1,
      title: "1. Aceptación de los Términos",
      content: "Al solicitar o utilizar cualquiera de los servicios de envío proporcionados por Envios DosRuedas, el usuario acepta de manera íntegra y sin reservas los presentes Términos y Condiciones. El uso continuado del servicio constituye la aceptación de cualquier modificación futura."
    },
    {
      id: 2,
      title: "2. Descripción del Servicio",
      content: "Envios DosRuedas proporciona servicios de mensajería y paquetería local en Mar del Plata. Nos especializamos en logística de última milla para e-commerce, incluyendo servicios Express, LowCost y Flex. No realizamos envíos interurbanos o nacionales fuera del radio establecido."
    },
    {
      id: 3,
      title: "3. Obligaciones del Usuario",
      content: "El cliente es responsable de proporcionar información precisa de origen y destino. El embalaje adecuado de la mercadería es responsabilidad exclusiva del cliente. No se permiten envíos de sustancias ilegales, peligrosas, inflamables o de valor extraordinario no declarado."
    },
    {
      id: 4,
      title: "4. Tarifas y Pago",
      content: "Las tarifas se calculan en base a la distancia, el tipo de servicio seleccionado y las características del paquete. Los pagos pueden realizarse en efectivo, transferencia o a través de cuenta corriente previa aprobación. Nos reservamos el derecho de actualizar los precios sin previo aviso."
    },
    {
      id: 5,
      title: "5. Limitación de Responsabilidad",
      content: "Envios DosRuedas no será responsable por retrasos causados por circunstancias fuera de nuestro control razonable (tráfico extremo, condiciones climáticas adversas, fallas técnicas externas). Nuestra responsabilidad por pérdida o daño está limitada al valor declarado o seguro básico contratado."
    },
    {
      id: 6,
      title: "6. Modificaciones de los Términos",
      content: "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web."
    }
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container max-w-4xl">
        <div className="bg-white border-4 border-dark rounded-[40px] overflow-hidden shadow-[15px_15px_0px_rgba(15,23,42,1)] p-8 md:p-16">
          <div className="flex items-center gap-4 mb-12 pb-6 border-b-2 border-slate-100">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-primary text-3xl font-display uppercase m-0 leading-none">Acuerdo de Servicio</h2>
              <p className="text-slate-400 font-subhead text-lg uppercase tracking-wider mt-2">Última actualización: 1 de Agosto de 2024</p>
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.id} className="space-y-4">
                <h3 className="text-primary text-2xl font-subhead uppercase tracking-wide border-l-4 border-accent pl-4">
                  {s.title}
                </h3>
                <p className="text-slate-600 font-body text-lg leading-relaxed">
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t-2 border-slate-100 bg-slate-50 -mx-8 -mb-16 p-8 md:-mx-16 md:p-16 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h4 className="flex items-center gap-2 text-primary font-subhead text-2xl uppercase">
                <AlertCircle className="text-accent" /> ¿Tenés preguntas legales?
              </h4>
              <p className="text-slate-500 font-body">Si necesitás una aclaración sobre nuestros términos o requerís un contrato corporativo específico, contactanos.</p>
            </div>
            <a 
              href="mailto:matiascejas@enviosdosruedas.com" 
              className="btn btn-primary whitespace-nowrap"
            >
              Contactar Legales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
