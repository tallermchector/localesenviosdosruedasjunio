import React from 'react';
import { SpeedLine } from '@/components/SpeedLine';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
    return (
        <div className="border-2 border-primary p-6 flex flex-col items-start max-w-sm bg-white shadow-hard-primary">
            <div className="w-full mb-6">
                <SpeedLine className="w-24 mb-2" color="primary" />
                <SpeedLine className="w-16 mb-2" color="primary" />
                <SpeedLine className="w-8 mb-4" color="primary" />
                <span className="font-subtitle text-[24px] leading-[28px] tracking-[0.05em] text-secondary uppercase block mb-2">
                    {subtitle}
                </span>
                <h3 className="font-title text-[48px] leading-[48px] tracking-[0.02em] text-primary uppercase mb-4">
                    {title}
                </h3>
                <p className="font-subtitle text-[20px] leading-[24px] tracking-[0.03em] text-primary/70 mb-6">
                    {description}
                </p>
            </div>

            <button className="w-full bg-primary text-white font-subtitle text-[20px] leading-[24px] tracking-[0.05em] uppercase py-3 px-4 text-center border-2 border-secondary hover:bg-secondary hover:text-primary transition-none shadow-hard-secondary hover:shadow-hard-primary">
                SOLICITAR ALTA DE COMERCIO
            </button>
        </div>
    );
}
