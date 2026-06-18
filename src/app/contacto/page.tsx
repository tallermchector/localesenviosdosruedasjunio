
import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
  description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      
      {/* Contact Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container relative z-10 text-center">
          <div className="section-badge !bg-white/10 !text-white border-white/20 mb-8">Atención Personalizada</div>
          <h1 className="text-white mb-6 text-5xl md:text-7xl">Contacto</h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-body">
            Estamos para ayudarte. Ponete en contacto con nuestro equipo de atención al cliente para resolver tus dudas logísticas.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Hours */}
          <div className="space-y-12">
            <div>
              <h2 className="text-primary text-4xl mb-8 font-display uppercase">Información de Contacto</h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Ubicación</h4>
                    <p className="text-slate-600 text-lg">Friuli 1972, Mar del Plata, Buenos Aires, AR</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Teléfono</h4>
                    <p className="text-slate-600 text-lg">+54 223 660-2699</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Email</h4>
                    <p className="text-slate-600 text-lg">matiascejas@enviosdosruedas.com</p>
                  </div>
                </div>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5492236602699" 
                  target="_blank"
                  className="flex items-start gap-6 p-6 bg-[#25D366]/5 border-2 border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-subhead text-2xl text-[#128C7E] uppercase mb-1">WhatsApp</h4>
                    <p className="text-[#128C7E] text-lg font-bold">+54 9 223 660-2699</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 translate-x-10 -translate-y-10 rounded-full" />
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-accent" />
                <h3 className="text-3xl text-white mb-0">Horarios de Atención</h3>
              </div>
              <ul className="space-y-4 font-body text-xl">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Lunes a Viernes</span>
                  <span className="font-bold">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sábados</span>
                  <span className="font-bold">09:00 - 15:00</span>
                </li>
                <li className="flex justify-between text-accent">
                  <span>Domingos</span>
                  <span className="font-bold">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-10 rounded-[32px] border-2 border-slate-100 shadow-xl">
            <h3 className="text-4xl font-display uppercase text-primary mb-2">¿Tenés alguna consulta?</h3>
            <p className="text-slate-500 mb-8 text-lg font-body">Completá el formulario y un asesor te responderá a la brevedad.</p>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="font-subhead text-xl uppercase tracking-wider text-primary">Nombre completo</Label>
                <Input id="nombre" placeholder="Tu nombre" className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-subhead text-xl uppercase tracking-wider text-primary">Email</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="font-subhead text-xl uppercase tracking-wider text-primary">Teléfono</Label>
                  <Input id="telefono" placeholder="+54 ..." className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="font-subhead text-xl uppercase tracking-wider text-primary">Mensaje</Label>
                <Textarea id="mensaje" placeholder="¿Cómo podemos ayudarte?" className="min-h-[150px] text-lg rounded-xl border-slate-200 focus:ring-primary pt-4" />
              </div>

              <Button className="w-full h-16 bg-accent hover:bg-dark hover:text-accent text-dark font-subhead text-2xl uppercase tracking-widest transition-all duration-300 rounded-xl group shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container">
          <div className="rounded-[40px] overflow-hidden border-4 border-white shadow-2xl h-[500px] relative">
            {/* Real maps would go here, using a placeholder for now */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.3456789!2d-57.576543!3d-38.012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzQ0LjQiUyA1N8KwMzQnMzUuNSJX!5e0!3m2!1ses!2sar!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 invert-[0.1]"
            ></iframe>
            <div className="absolute top-8 left-8 p-6 bg-white shadow-2xl rounded-2xl border-l-8 border-accent max-w-xs hidden md:block">
              <h4 className="font-display text-2xl text-primary mb-2 uppercase leading-none">Oficina Central</h4>
              <p className="text-slate-600 font-body">Vení a conocernos y charlar sobre tu próximo plan logístico.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
