import React from 'react';
import { SpeedLine } from '@/components/SpeedLine';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
    return (
        <div className="border-2 border-primary p-6 flex flex-col items-start max-w-sm bg-white">
            <div className="w-full mb-6">
                <SpeedLine className="w-24 mb-2" color="secondary" />
                <SpeedLine className="w-16 mb-2" color="secondary" />
                <SpeedLine className="w-8 mb-4" color="secondary" />
                <span className="font-[Bebas_NeuE] text-[24px] leading-[28px] tracking-[0.05em] text-secondary uppercase block mb-2">
                    {subtitle}
                </span>
                <h3 className="font-[Anton] text-[48px] leading-[48px] tracking-[0.02em] text-primary uppercase mb-4 leading-none">
                    {title}
                </h3>
                <p className="font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.03em] text-on-background mb-6">
                    {description}
                </p>
            </div>

            <button className="w-full bg-primary text-white font-[Bebas_NeuE] text-[20px] leading-[24px] tracking-[0.03em] uppercase py-3 px-4 text-center font-bold border-2 border-secondary hover:bg-secondary hover:text-primary transition-none shadow-[4px_4px_0px_0px_#FFEC00] hover:shadow-[4px_4px_0px_0px_#0635A6]">
                SOLICITAR ALTA DE COMERCIO
            </button>
        </div>
    );
}
