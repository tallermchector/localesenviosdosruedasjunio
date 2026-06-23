import React from 'react';

export default function SlaBanner() {
    return (
        <div className="w-full bg-primary text-light py-4 px-6 border-b-4 border-accent">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col">
                    <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-light">
                        LOGÍSTICA E-COMMERCE READY
                    </h2>
                    <p className="font-subhead text-lg md:text-xl text-accent tracking-wide mt-1">
                        DESPACHOS EFICIENTES DESDE NUESTRA BASE EN FRIULI 1972
                    </p>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="bg-primary px-4 py-2 border-2 border-accent shadow-[2px_2px_0px_0px_rgba(245,227,0,1)]">
                        <span className="font-subhead text-sm block text-light opacity-90">CORTE LOWCOST</span>
                        <span className="font-subhead text-2xl block text-accent font-bold">13:00 HS</span>
                    </div>
                    <div className="bg-primary px-4 py-2 border-2 border-accent shadow-[2px_2px_0px_0px_rgba(245,227,0,1)]">
                        <span className="font-subhead text-sm block text-light opacity-90">CORTE FLEX EXPRESS</span>
                        <span className="font-subhead text-2xl block text-accent font-bold">15:00 HS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
