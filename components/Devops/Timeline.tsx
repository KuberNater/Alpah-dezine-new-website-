'use client'
import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Check, Play } from 'lucide-react';
import Heading from '../Heading';
import { steps } from '@/data/Devops.data';

const Timeline: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(old => {
                if (old >= 100) return 100;
                return old + 1;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);

    // Handle step change when progress completes
    useEffect(() => {
        if (progress >= 100) {
            setActiveStep(prev => (prev + 1) % steps.length);
            setProgress(0);
        }
    }, [progress, steps.length]);

    // Reset progress when manually changing step
    const handleStepClick = (index: number) => {
        setActiveStep(index);
        setProgress(0);
    };

    return (
        <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-300 scroll-mt-32" id="work">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center mx-auto">
                    <Heading
                        subtitle="A rigorous execution pipeline designed to eliminate ambiguity."
                        align="center"
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
                        The DevOps <span className="text-primary">Protocol</span>
                    </Heading>

                </div>

                {/* --- COMPACT PIPELINE UI --- */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">

                    {/* 1. Top Navigation / Pipeline Bar */}
                    <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800 scrollbar-hide">
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                onClick={() => handleStepClick(index)}
                                className={`flex-1 min-w-[140px] p-4 group relative flex flex-col items-center gap-3 transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 ${activeStep === index ? 'bg-slate-50 dark:bg-slate-800/80' : ''
                                    }`}
                            >
                                {/* Connecting Line (visual only) */}
                                {index !== steps.length - 1 && (
                                    <div className={`absolute top-9 left-1/2 w-full h-[2px] -z-10 ${index < activeStep ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
                                        }`}></div>
                                )}

                                {/* Icon Bubble */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${activeStep === index
                                    ? 'bg-primary border-primary text-white shadow-lg scale-110'
                                    : index < activeStep
                                        ? 'bg-emerald-500 border-emerald-500 text-white' // Completed
                                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400'
                                    }`}>
                                    {index < activeStep ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                                </div>

                                <div className="text-center">
                                    <span className={`block text-xs font-bold uppercase tracking-wider mb-0.5 ${activeStep === index ? 'text-primary' : 'text-slate-500'
                                        }`}>
                                        {step.title}
                                    </span>
                                    <span className="text-[10px] text-slate-400 hidden md:block">{step.subtitle}</span>
                                </div>

                                {/* Active Bottom Bar */}
                                {activeStep === index && (
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* 2. Content Area (Split View) */}
                    <div className="grid md:grid-cols-2 min-h-[400px]">

                        {/* Left: Description Context */}
                        <div className="p-8 md:p-12 flex flex-col justify-center border-r border-slate-100 dark:border-slate-800/50">
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full w-fit">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300 uppercase">Phase 0{activeStep + 1}</span>
                            </div>

                            <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up">
                                {steps[activeStep].title} & {steps[activeStep].subtitle}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                {steps[activeStep].desc}
                            </p>

                            <div className="mt-auto">
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span>Verified</span>
                                    </div>
                                    <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                    <div className="flex items-center gap-2">
                                        <Play className="w-3 h-3 text-brand-500" />
                                        <span>In Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Terminal / Visual Output */}
                        <div className="bg-[#0f172a] p-6 md:p-12 flex flex-col justify-center relative overflow-hidden">
                            {/* Background Grid inside terminal */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            <div className="relative z-10 font-mono text-sm">
                                {/* Terminal Window Header */}
                                <div className="flex items-center gap-2 mb-6 opacity-50">
                                    <TerminalIcon className="w-4 h-4 text-slate-400" />
                                    <span className="text-slate-400">~/alphadezine/pipeline</span>
                                </div>

                                {/* Command */}
                                <div className="flex gap-3 mb-6 items-center">
                                    <span className="text-emerald-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span className="text-white typing-effect">{steps[activeStep].command}</span>
                                </div>

                                {/* Output Stream */}
                                <div className="space-y-2">
                                    {steps[activeStep].output.map((line, i) => (
                                        <div
                                            key={`${activeStep}-${i}`}
                                            className="animate-fade-in-up"
                                            style={{ animationDelay: `${i * 150}ms` }}
                                        >
                                            {line.startsWith('✔') ? <span className="text-emerald-400 font-bold">{line}</span> :
                                                line.startsWith('+') ? <span className="text-green-400">{line}</span> :
                                                    line.startsWith('Plan') ? <span className="text-yellow-400">{line}</span> :
                                                        line.startsWith('Status') ? <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded">{line}</span> :
                                                            <span className="text-slate-400">{line}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;