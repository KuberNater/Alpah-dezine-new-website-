'use client'
import React, { useState } from 'react';
import { Database, Share2, CheckCircle2, Archive, FileCheck, ChevronRight, Zap, Globe, Heart, Flame, Command, MessageSquare, MousePointer2, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import Heading from '../Heading';
import { steps, valuePropositions } from '@/data/AssetManagement.data';



const Solutions: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section id="framework" className="py-16 md:py-24 landing bg-background w-full transition-colors duration-500 relative overflow-hidden flex flex-col items-center">

            {/* Background Subtle Grid - Better visual cohesion */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative w-full flex flex-col items-center">
                {/* Section Header - Now explains the section immediately */}
                <div className="text-center max-w-3xl mb-16">
                    <Heading
                        badgeText="The Human-Centric Framework"
                        badgeIcon={<UserCheck size={16} className="text-blue-600 dark:text-blue-400" />}
                        decorativeText='Simply Organized.'
                        subtitle="Licensing is technically difficult. We built the interface so you don't have to feel that difficulty.
                        Move through the framework below to see how we translate chaos into clarity."
                        align="center"
                        // containerClassName="lg:items-start lg:text-left"
                        headingAnimation={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.8 }
                        }}
                        subtitleAnimation={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.8, delay: 0.1 }
                        }}
                    >
                        Complexity
                    </Heading>
                </div>

                {/* Central Visualization Area - Now using a structured layout */}
                <div className="relative w-full max-w-5xl min-h-[600px] flex items-center justify-center">

                    {/* Decorative Connecting Lines - SVG for cohesion */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-20 dark:opacity-10" viewBox="0 0 800 600">
                        <path d="M100 100 L400 300 M100 500 L400 300 M700 150 L400 300 M700 500 L400 300"
                            stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="none" className="text-slate-400" />
                    </svg>

                    {/* Central Hub: The Alpha Engine */}
                    <div className="relative z-10 w-80 md:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[40px] shadow-2xl overflow-hidden group">
                        <div className="bg-[#1A1A1A] p-8 text-white">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="bg-blue-600 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">Engine V.4</div>
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">Alpha Control Hub</h3>
                            <p className="text-xs font-mono opacity-50 tracking-widest uppercase mt-1">Unified Licensing Interface</p>
                        </div>

                        <div className="p-10 bg-slate-50/50 dark:bg-white/5 flex flex-col items-center justify-center gap-6">
                            <div className="w-full space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                                    <span className="text-xs font-bold text-slate-500">Operational Friction</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1.5 w-6 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-slate-200 dark:bg-slate-700'}`}></div>)}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                                    <span className="text-xs font-bold text-slate-500">Human Accuracy</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 w-6 rounded-full bg-emerald-500"></div>)}
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-12 bg-blue-600 text-white flex items-center justify-center font-black text-base border-2 border-black -rotate-2 shadow-lg rounded-xl group-hover:scale-105 transition-transform">
                                <Sparkles size={18} className="mr-2" />
                                100% AUDIT PROOF
                            </div>
                        </div>
                    </div>

                    {/* Interactive Human-Centric Steps */}
                    {steps.map((step) => {
                        const isActive = activeId === step.id;
                        return (
                            <div
                                key={step.id}
                                className={`absolute transition-all duration-300 cursor-pointer z-20 ${step.position} ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                                onMouseEnter={() => setActiveId(step.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                {/* Visual Connector Label - Explains 'the human benefit' at a glance */}
                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap shadow-xl flex items-center gap-2 ${isActive ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                    <MousePointer2 size={10} fill="currentColor" /> {step.humanValue}
                                </div>

                                <div className={`p-5 md:p-6 flex flex-col items-center justify-center ${step.stickerStyle} transition-all duration-300`}>
                                    <step.icon size={32} className={isActive ? 'animate-bounce' : ''} />
                                    <span className="mt-2 text-sm font-black uppercase tracking-wider whitespace-nowrap">{step.title}</span>
                                </div>

                                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-8 w-72 bg-white dark:bg-slate-800 p-6 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] border border-slate-200 dark:border-white/10 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-black">{step.id}</div>
                                        <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{step.title}</h4>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Target Benefit</span>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{step.humanValue}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Closing Value Proposition - Integrated more tightly */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl px-6">
                    {valuePropositions.map((valueProposition) => (
                        <div key={valueProposition.id} className="text-center md:text-left">
                            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 mx-auto md:mx-0">
                                <valueProposition.icon size={24} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{valueProposition.title}</h4>
                            <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                {valueProposition.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;