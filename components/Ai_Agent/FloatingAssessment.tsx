"use client"
import { businessWins, walkawayOutcomes } from '@/data/AiAgent.data';
import { Info } from 'lucide-react';
import React, { useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

const FloatingAssessment: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const handleCardClick = (i: number) => {
        setActiveCard(activeCard === i ? null : i);
    };
    return (
        <section className="py-16 md:py-24 w-full bg-background landing relative overflow-hidden transition-colors duration-500">
            <MaxWidth>
                <Heading
                    decorativeText='walk away with.'
                    subtitle='Hover or tap a card to see the <strong>Business Win</strong>.'>
                    What you
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {walkawayOutcomes.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => handleCardClick(i)}
                            className={`group relative p-10 bg-background border border-slate-100 dark:border-white/5 rounded-4xl md:rounded-[2.5rem] transition-all duration-500 cursor-pointer h-[320px] overflow-hidden ${activeCard === i ? 'shadow-2xl bg-primary' : 'hover:shadow-2xl '}`}
                        >
                            {/* Front State */}
                            <div className={`relative z-10 h-full flex flex-col transition-opacity duration-300 ${activeCard === i ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-background border border-slate-100 dark:border-white/10 flex items-center justify-center text-brand-500 mb-8 shadow-sm">
                                    <item.icon className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <h4 className="text-xl font-bold dark:text-white mb-3 uppercase tracking-wide leading-tight">{item.label}</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{item.desc}</p>

                                <div className="mt-auto flex items-center gap-2 text-[10px] font-mono font-bold text-brand-500/50">
                                    <Info className="w-3 h-3" /> CLICK TO REVEAL IMPACT
                                </div>
                            </div>

                            {/* Hover Overlay (The "Win") */}
                            <div className={`absolute inset-0 p-10 flex flex-col justify-center items-center text-center bg-primary transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeCard === i ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                                <div className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest mb-4">The Business Win</div>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight px-2">
                                    {businessWins[i]}
                                </h3>
                                <button className="mt-8 md:hidden text-[10px] font-mono font-bold text-white/60 border border-white/20 rounded-full px-4 py-1.5">
                                    Tap to Dismiss
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidth>
        </section>
    );
};

export default FloatingAssessment;
