"use client";

import React from "react";
import { ShieldCheck, Eye, Users, Lock, UserCog, RefreshCw, Mail } from "lucide-react";

export function PrivacyContent() {
  const sections = [
    {
      id: 1,
      title: "1. Información que Recopilamos",
      icon: <Eye className="w-5 h-5" />,
      content: "Recopilamos información que nos proporcionas directamente al solicitar un servicio, como tu nombre, dirección de correo electrónico, número de teléfono y direcciones de retiro/entrega. También recopilamos información técnica a través de cookies para mejorar tu experiencia de usuario."
    },
    {
      id: 2,
      title: "2. Uso de la Información",
      icon: <RefreshCw className="w-5 h-5" />,
      content: "Utilizamos tu información para proveer y gestionar nuestros servicios de envío, procesar pagos, comunicarnos contigo sobre el estado de tus pedidos y enviarte actualizaciones relevantes sobre nuestro sitio web o servicios logísticos."
    },
    {
      id: 3,
      title: "3. Cómo Compartimos tu Información",
      icon: <Users className="w-5 h-5" />,
      content: "No vendemos ni alquilamos tu información personal a terceros. Compartimos datos únicamente con nuestros repartidores y socios logísticos con el fin exclusivo de completar el servicio de entrega solicitado."
    },
    {
      id: 4,
      title: "4. Seguridad de los Datos",
      icon: <Lock className="w-5 h-5" />,
      content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Utilizamos protocolos de cifrado y firewalls de última generación."
    },
    {
      id: 5,
      title: "5. Tus Derechos",
      icon: <UserCog className="w-5 h-5" />,
      content: "Tienes derecho a acceder, rectificar o suprimir tus datos personales en cualquier momento. Podés ejercer estos derechos contactándonos a través de nuestros canales oficiales de atención al cliente."
    },
    {
      id: 6,
      title: "6. Cambios en esta Política",
      icon: <RefreshCw className="w-5 h-5" />,
      content: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento para adaptarla a novedades legislativas o cambios operativos. Te recomendamos revisar esta página periódicamente."
    },
    {
      id: 7,
      title: "7. Contacto",
      icon: <Mail className="w-5 h-5" />,
      content: "Si tenés preguntas sobre nuestra política de privacidad o el tratamiento de tus datos, no dudes en escribirnos a nuestro correo oficial: matiascejas@enviosdosruedas.com."
    }
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container max-w-4xl">
        <div className="bg-white border-4 border-dark rounded-[40px] overflow-hidden shadow-[15px_15px_0px_rgba(30,58,138,1)] p-8 md:p-16">
          <div className="flex items-center gap-4 mb-12 pb-6 border-b-2 border-slate-100">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-primary text-3xl font-display uppercase m-0 leading-none">Detalles de nuestra política</h2>
              <p className="text-slate-400 font-subhead text-lg uppercase tracking-wider mt-2">Última actualización: 1 de Agosto de 2024</p>
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.id} className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="text-accent transition-transform group-hover:scale-110">
                    {s.icon}
                  </div>
                  <h3 className="text-primary text-2xl font-subhead uppercase tracking-wide m-0">
                    {s.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-body text-lg leading-relaxed pl-8">
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t-2 border-slate-100 bg-slate-50 -mx-8 -mb-16 p-8 md:-mx-16 md:p-16 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="flex-1 space-y-4">
              <h4 className="text-primary font-subhead text-2xl uppercase m-0">
                Tu privacidad es nuestro compromiso
              </h4>
              <p className="text-slate-500 font-body m-0">Garantizamos el tratamiento ético y seguro de toda la información que procesamos en nuestra plataforma.</p>
            </div>
            <div className="w-24 h-24 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center shadow-inner">
               <ShieldCheck className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
