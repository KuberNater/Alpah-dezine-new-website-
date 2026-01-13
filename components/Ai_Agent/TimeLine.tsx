"use client"
import React, { useState } from 'react';
import { Search, Code, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import MaxWidth from '../MaxWidth';
import Heading from '../Heading';
import { steps } from '@/data/AiAgent.data';

const Timeline: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <section id="protocol" className="py-16 md:py-24 bg-background text-primary landing w-full overflow-hidden transition-colors duration-500">
            <MaxWidth>
                <Heading
                    align='center'
                    subtitle='We follow a simple, 4-step path to move you from manual chaos to automated clarity.'
                >
                    How we <span className='text-primary'>work</span>
                </Heading>


                <div className="max-w-5xl mx-auto">
                    {/* Progress Bar */}
                    <div className="relative flex justify-between mb-20 px-4 md:px-0">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2"></div>
                        <div
                            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-700 ease-out"
                            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        ></div>

                        {steps.map((step, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveStep(i)}
                                className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${i <= activeStep
                                    ? 'bg-primary border-slate-50 dark:border-slate-950 text-white'
                                    : 'bg-background border-slate-200 dark:border-slate-800 text-primary'
                                    } ${i === activeStep ? 'scale-125 shadow-xl shadow-primary/20' : ''}`}
                            >
                                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap transition-opacity duration-500 ${i === activeStep ? 'opacity-100 text-primary' : 'opacity-40 text-slate-400'}`}>
                                    {step.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Active Content Card */}
                    <div className="grid md:grid-cols-2 gap-16 items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-10 md:p-16 rounded-[3rem] min-h-[400px] shadow-2xl shadow-slate-200/50 dark:shadow-none transition-colors duration-500">
                        <div className="animate-in fade-in slide-in-from-left-8 duration-500">
                            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-4 block">Phase 0{activeStep + 1}</span>
                            <h3 className="text-4xl font-display font-bold mb-6 dark:text-white">{steps[activeStep].title}</h3>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                {steps[activeStep].desc}
                            </p>
                            <button
                                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                                className="mt-10 flex items-center gap-3 text-primary font-bold hover:text-brand-700 dark:hover:text-brand-300 transition-colors group"
                            >
                                See Next Step <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            <div className="p-6 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-2xl">
                                <span className="text-[10px] font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block mb-2">The Problem</span>
                                <p className="text-slate-800 dark:text-slate-200 text-sm font-medium">{steps[activeStep].pain}</p>
                            </div>
                            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl">
                                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">The Result</span>
                                <p className="text-slate-800 dark:text-slate-200 text-sm font-medium">{steps[activeStep].gain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Timeline;
