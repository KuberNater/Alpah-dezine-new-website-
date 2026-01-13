"use client"
import { steps } from '@/data/home.data';
import {
    ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

export const ProcessStep: React.FC = () => {
    return (
        <section className="py-16 md:py-24 w-full bg-background landing transition-colors duration-700 overflow-hidden relative" id="how-it-works">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-navy-950 dark:text-white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dotPattern)" />
                </svg>
            </div>
            <MaxWidth>
                <Heading
                    badgeText="The Launch Protocol"
                    subtitle="Our approach is simple, transparent, and focused on one thing: getting your technology to market flawlessly."
                    containerClassName="mb-20"
                >
                    Engineered for <span className="text-primary">Speed.</span>
                </Heading>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 dark:bg-navy-800 -translate-y-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-background border border-slate-200 dark:border-navy-700 p-8 rounded-[2rem] hover:bg-white dark:hover:bg-navy-800 hover:shadow-2xl hover:border-primary/30 dark:hover:border-royal-400/30 transition-all duration-500"
                            >
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border border-slate-200 dark:border-navy-700 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-primary dark:group-hover:text-royal-400 group-hover:border-primary dark:group-hover:border-royal-400 transition-colors z-20">
                                    {step.id}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-primary dark:text-white shadow-sm border border-slate-100 dark:border-navy-800 mb-8 group-hover:scale-110 group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <step.icon size={28} />
                                </div>

                                <div className="mb-4">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-royal-400 mb-1">{step.label}</div>
                                    <h3 className="text-xl font-black text-navy-950 dark:text-white uppercase tracking-tight">{step.title}</h3>
                                </div>

                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};
