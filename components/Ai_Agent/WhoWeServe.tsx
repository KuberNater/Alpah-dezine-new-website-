"use client"
import { whoWeServeData } from '@/data/AiAgent.data';
import { AlertTriangle, Check, ChevronRight, Clock, Zap } from 'lucide-react';
import React, { useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

const WhoWeServe: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [showAfter, setShowAfter] = useState(true);
    const persona = whoWeServeData[activeTab];

    return (
        <section id="use-cases" className="py-16 md:py-24 bg-background landing transition-colors duration-500 relative overflow-hidden">
            <MaxWidth>
                <Heading
                    badgeText="Deployment Use Cases"
                    subtitle="See how an Alpha Agent transforms a typical workday for different teams."
                >
                    Impact on <span className="text-primary">Real Work.</span>
                </Heading>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    {/* Persona Sidebar - Compact */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-2">
                        {whoWeServeData.map((useCase, index) => (
                            <button
                                key={useCase.id}
                                onClick={() => {
                                    setActiveTab(index);
                                    setShowAfter(true);
                                }}
                                className={`group relative text-left p-4 rounded-xl border transition-all duration-500 ${activeTab === index
                                    ? `bg-card dark:bg-zinc-900 border-primary shadow-md z-10 scale-[1.02]`
                                    : 'bg-transparent border-border opacity-50 hover:opacity-100 hover:bg-muted dark:hover:bg-zinc-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${activeTab === index ? useCase.bg + ' ' + useCase.color : 'bg-muted dark:bg-zinc-800 text-muted-foreground'
                                        }`}>
                                        <useCase.icon className="w-4 h-4" />
                                    </div>
                                    <h3 className={`text-sm font-bold uppercase tracking-tight ${activeTab === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                                        {useCase.role}
                                    </h3>
                                </div>
                                {activeTab === index && <div className={`absolute right-4 top-1/2 -translate-y-1/2 ${useCase.color}`}><ChevronRight className="w-4 h-4" /></div>}
                            </button>
                        ))}
                    </div>

                    {/* Impact Engine Container - Compact */}
                    <div className="w-full lg:w-3/4">
                        <div className="bg-muted/50 dark:bg-zinc-900 border border-border dark:border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-lg">

                            {/* Mode Selector */}
                            <div className="flex bg-muted/80 dark:bg-zinc-800">
                                <button
                                    onClick={() => setShowAfter(false)}
                                    className={`flex-1 py-4 font-bold text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${!showAfter
                                        ? 'bg-card dark:bg-zinc-900 text-red-600 shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <AlertTriangle className={`w-3 h-3 transition-opacity ${!showAfter ? 'opacity-100' : 'opacity-0'}`} />
                                    Before AI
                                </button>
                                <button
                                    onClick={() => setShowAfter(true)}
                                    className={`flex-1 py-4 font-bold text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${showAfter
                                        ? 'bg-card dark:bg-zinc-900 text-emerald-600 shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <Zap className={`w-3 h-3 transition-opacity ${showAfter ? 'opacity-100' : 'opacity-0'}`} />
                                    After Agent
                                </button>
                            </div>

                            <div className={`p-5 md:p-8 min-h-[360px] relative transition-colors duration-1000 ${showAfter ? 'bg-card dark:bg-zinc-900' : 'bg-muted/50 dark:bg-zinc-800/50'}`}>

                                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl shrink-0 flex items-center justify-center shadow-md ${persona.bg} ${persona.color}`}>
                                            <persona.icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-xl md:text-2xl font-display font-black text-foreground mb-1 leading-none">
                                                {persona.role}
                                            </h3>
                                            <p className={`text-xs font-bold uppercase tracking-wider ${showAfter ? 'text-emerald-500' : 'text-red-500'}`}>
                                                {showAfter ? "Streamlined & Decisive" : "Manual & Fragmented"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Target Metric */}
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-muted dark:bg-zinc-800 border border-border dark:border-zinc-700">
                                        <div className="flex flex-col items-center px-3">
                                            <span className="text-[9px] font-mono font-bold uppercase text-muted-foreground tracking-wider mb-0.5">Target</span>
                                            <span className="text-sm font-bold text-foreground uppercase">{persona.target}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-5 gap-6 items-center">
                                    {/* Workflow Impact List */}
                                    <div className="md:col-span-3 space-y-3">
                                        {persona.points.map((p, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-3 md:p-4 rounded-xl border transition-all duration-700 ${showAfter
                                                ? 'bg-card dark:bg-zinc-800 border-emerald-500/20 shadow-sm scale-100 opacity-100'
                                                : 'bg-muted/50 dark:bg-zinc-800/50 border-border dark:border-zinc-700 scale-95 opacity-80'
                                                }`}>
                                                {showAfter ? (
                                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm shrink-0">
                                                        <Check className="w-3.5 h-3.5" />
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 rounded-full bg-muted dark:bg-zinc-700 flex items-center justify-center text-muted-foreground shrink-0">
                                                        <Clock className="w-3.5 h-3.5" />
                                                    </div>
                                                )}
                                                <span className={`text-sm font-bold leading-tight ${showAfter ? 'text-foreground' : 'text-muted-foreground'}`}>
                                                    {showAfter ? `Automated: ${p}` : `Manual: ${p}`}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Result Anchor - Compact */}
                                    <div className="md:col-span-2">
                                        <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center relative overflow-hidden h-[260px] ${showAfter
                                            ? 'bg-primary border-primary/50 text-primary-foreground shadow-lg scale-105 z-10'
                                            : 'bg-card dark:bg-zinc-900 border-border dark:border-zinc-800 text-muted-foreground scale-95'
                                            }`}>

                                            {showAfter && (
                                                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>
                                            )}

                                            <div className={`font-display font-black mb-0 leading-none transition-all duration-300 ease-in-out ${showAfter ? 'text-5xl md:text-6xl scale-105' : 'text-4xl opacity-50'}`}>
                                                {showAfter ? "15+" : "0"}
                                            </div>
                                            <div className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-6 ${showAfter ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                                                Hours Saved / Week
                                            </div>

                                            <p className={`text-xs font-bold leading-relaxed px-2 ${showAfter ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                                                {showAfter
                                                    ? "Team freed from routine triage to focus on complex projects."
                                                    : "40% of capacity consumed by repetitive questions."}
                                            </p>

                                            <button
                                                onClick={() => setShowAfter(!showAfter)}
                                                className={`mt-6 px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all shadow-md active:scale-95 ${showAfter
                                                    ? 'bg-primary-foreground text-primary hover:scale-105'
                                                    : 'bg-foreground text-background hover:opacity-90'
                                                    }`}
                                            >
                                                {showAfter ? "See Before" : "See After"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default WhoWeServe;
