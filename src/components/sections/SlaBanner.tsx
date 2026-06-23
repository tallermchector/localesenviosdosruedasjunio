import React from 'react';

export default function SlaBanner() {
    return (
        <div className="w-full bg-primary text-white py-4 px-6 border-b-4 border-secondary">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col">
                    <h2 className="font-title text-2xl md:text-3xl uppercase tracking-[0.02em] text-white">
                        LOGÍSTICA E-COMMERCE READY
                    </h2>
                    <p className="font-subtitle text-lg md:text-xl text-secondary tracking-[0.05em] mt-1">
                        DESPACHOS EFICIENTES DESDE NUESTRA BASE EN FRIULI 1972
                    </p>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="bg-primary px-4 py-2 border-2 border-secondary shadow-hard-secondary">
                        <span className="font-subtitle text-sm block text-white/80 tracking-[0.05em]">CORTE LOWCOST</span>
                        <span className="font-subtitle text-2xl block text-secondary font-bold tracking-[0.03em]">13:00 HS</span>
                    </div>
                    <div className="bg-primary px-4 py-2 border-2 border-secondary shadow-hard-secondary">
                        <span className="font-subtitle text-sm block text-white/80 tracking-[0.05em]">CORTE FLEX EXPRESS</span>
                        <span className="font-subtitle text-2xl block text-secondary font-bold tracking-[0.03em]">15:00 HS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
