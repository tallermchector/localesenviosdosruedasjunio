
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuál es la zona de cobertura en Mar del Plata?",
    a: "Cubrimos la totalidad del ejido urbano de Mar del Plata, incluyendo zonas periféricas como Sierra de los Padres, Batán y barrios privados de la zona norte y sur."
  },
  {
    q: "¿Cómo funciona la integración con MercadoLibre Flex?",
    a: "Contamos con una API robusta y un equipo dedicado que garantiza que todos tus pedidos 'Same Day' sean despachados y entregados en la ventana horaria acordada, manteniendo tu reputación intacta."
  },
  {
    q: "¿Cuáles son los medios de pago disponibles?",
    a: "Aceptamos efectivo, transferencias bancarias, depósitos y contamos con planes de facturación mensual para cuentas corporativas."
  },
  {
    q: "¿Cómo puedo abrir una cuenta para mi empresa?",
    a: "Podés contactarnos vía WhatsApp o a través de nuestro formulario de contacto. Un asesor comercial evaluará tu volumen de envíos y te ofrecerá un plan a medida con tarifas preferenciales."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Preguntas Frecuentes</div>
          <h2 className="text-5xl text-primary font-headline">Despejá tus dudas</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-2 border-slate-100 px-6 rounded-xl hover:border-secondary transition-colors">
              <AccordionTrigger className="text-2xl font-subheadline text-primary hover:text-secondary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-slate-600 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
