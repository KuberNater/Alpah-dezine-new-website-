"use client"
import React, { useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Shield, Lightbulb, ChevronRight } from 'lucide-react';
import MaxWidth from '../MaxWidth';
import Heading from '../Heading';
import { Card } from '../ui/card';
import { personas } from '@/data/Devops.data';
import Image from 'next/image';

const WhoWeServe: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const ActiveIcon = personas[activeTab].icon;
    return (
        <section className="py-16 md:py-24 bg-background landing w-full transition-colors duration-300 relative overflow-hidden">
            <MaxWidth>
                <Heading
                    align='left'
                    subtitle='We adapt our engineering velocity to match your business stage.'
                    badgeText='Partnerships'
                >
                    Who We <span className='text-primary'>Empower</span>
                </Heading>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left Navigation */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {personas.map((persona, index) => (
                            <button
                                key={persona.id}
                                onClick={() => setActiveTab(index)}
                                className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ease-out ${activeTab === index
                                    ? `bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-600 shadow-xl scale-[1.02]`
                                    : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === index ? persona.color : 'text-slate-500'}`}>
                                        {persona.role}
                                    </span>
                                    {activeTab === index && <ChevronRight className={`w-4 h-4 ${persona.color}`} />}
                                </div>

                                <h3 className={`text-xl font-bold transition-colors ${activeTab === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'}`}>
                                    {persona.target}
                                </h3>

                                {/* Active Indicator Bar */}
                                {activeTab === index && (
                                    <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${persona.color.replace('text-', 'bg-')}`}></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Content Area (The Blueprint) */}
                    <div className="w-full lg:w-2/3">
                        <Card className="relative h-[500px] md:h-[400px] lg:h-[500px] bg-slate-50/50 dark:bg-zinc-900 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-12 items-center shadow-2xl transition-colors duration-300">

                            {/* Decorative Tech Lines */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-slate-300 dark:border-slate-500"></div>
                            <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-slate-300 dark:border-slate-500"></div>
                            <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-slate-300 dark:border-slate-500"></div>
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-slate-300 dark:border-slate-500"></div>

                            {/* Text Content */}
                            <div className="w-full md:w-1/2 relative z-10 flex flex-col h-full justify-center animate-fade-in-up" key={activeTab}>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit mb-6 border ${personas[activeTab].bg} ${personas[activeTab].border} ${personas[activeTab].color}`}>
                                    <ActiveIcon className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">{personas[activeTab].role} Mode</span>
                                </div>

                                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                    {personas[activeTab].description}
                                </h3>

                                <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10 flex items-center gap-6">
                                    <div>
                                        <div className={`text-3xl font-mono font-bold ${personas[activeTab].color}`}>
                                            {personas[activeTab].metric}
                                        </div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                                            {personas[activeTab].metricLabel}
                                        </div>
                                    </div>
                                    <button className="ml-auto w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-900 dark:hover:bg-white text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-slate-900 transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Illustration Area */}
                            <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-radial from-slate-200/50 dark:from-slate-700/30 to-transparent opacity-50"></div>
                                <div className="relative w-64 h-64 md:w-96 md:h-96">
                                    <Image src={personas[activeTab].image} alt={personas[activeTab].role} width={400} height={400} />
                                    {/* {personas[activeTab].illustration(true)} */}
                                </div>
                            </div>

                        </Card>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default WhoWeServe;