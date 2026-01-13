"use client"
import React, { useState } from 'react';
import { Database, Shield, Zap, Sparkles, AlertCircle, CheckCircle2, Hand } from 'lucide-react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';
import { aiToolData } from '@/data/AiAgent.data';

const AiIntroduction: React.FC = () => {
    const [isFixed, setIsFixed] = useState(false);

    return (
        <section className="landing bg-background py-16 md:py-24 relative transition-colors duration-500 overflow-hidden">
            <MaxWidth>
                {/* Header Section */}
                <Heading
                    badgeText="Not Another AI Tool"
                    decorativeText="They need less noise."
                    subtitle="AI agents help—but only when they're built to be silent until certain. We build agents that act as a filter for your business."
                >
                    Most teams don't need<br /> "More AI." <br />
                </Heading>

                <div className="relative max-w-4xl mx-auto">
                    {/* Subtle Direction */}
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted">
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-primary uppercase tracking-wider">
                                <Hand className="w-3 h-3" /> Tap to restore order
                            </div>
                        </div>
                    </div>

                    {/* Main Interaction Area - Compact */}
                    <div className="grid lg:grid-cols-2 gap-3 md:gap-4 bg-muted/50 dark:bg-secondary/50 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-border shadow-lg relative">

                        {/* Left: The Mess (Chaos) */}
                        <div className={`p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-700 flex flex-col relative overflow-hidden ${!isFixed ? 'bg-card shadow-xl z-10 scale-100 opacity-100' : 'opacity-10 grayscale blur-xs scale-[0.98]'}`}>
                            <div className="flex items-center gap-3 mb-5 text-red-600 dark:text-red-500">
                                <AlertCircle className="w-5 h-5" />
                                <span className="font-mono text-sm font-black uppercase tracking-wider">Typical Chaos</span>
                            </div>

                            <div className="space-y-2.5 mb-5">
                                <div className="flex gap-2">
                                    <div className="h-7 bg-red-500/10 dark:bg-red-500/20 rounded-lg w-3/4 animate-pulse border border-red-500/10"></div>
                                    <div className="h-7 bg-amber-500/10 dark:bg-amber-500/20 rounded-lg w-1/4 animate-pulse delay-150 border border-amber-500/10"></div>
                                </div>
                                <div className="h-7 bg-muted dark:bg-muted/50 rounded-lg w-full animate-pulse delay-75"></div>
                                <div className="flex gap-2">
                                    <div className="h-7 bg-muted dark:bg-muted/50 rounded-lg w-1/3 animate-pulse delay-300"></div>
                                    <div className="h-7 bg-red-500/10 dark:bg-red-500/20 rounded-lg w-2/3 animate-pulse delay-200 border border-red-500/10"></div>
                                </div>
                            </div>

                            <div className="mt-auto p-3 bg-red-50 dark:bg-red-950/30 border-l-3 border-red-500 rounded-r-lg">
                                <p className="text-xs text-red-900 dark:text-red-300 font-bold leading-relaxed">
                                    "Where is the latest contract template? SharePoint has three versions..."
                                </p>
                            </div>

                            {/* Overlay Noise */}
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(239,68,68,0.02)_100%)]"></div>
                        </div>

                        {/* Right: The Solution (Clarity) */}
                        <div className={`p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-700 flex flex-col relative overflow-hidden ${isFixed ? 'bg-card shadow-xl border-primary/30 border-2 z-10 scale-100 opacity-100' : 'opacity-10 grayscale blur-xs scale-[0.98]'}`}>
                            <div className="flex items-center gap-3 mb-5 text-emerald-500">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-mono text-sm font-black uppercase tracking-wider">Alpha Clarity</span>
                            </div>

                            <div className="space-y-4 py-2">
                                <div className="flex items-center gap-3 p-3 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 shadow-sm">
                                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                                        <Sparkles className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-sm font-bold text-foreground">One source of truth identified.</span>
                                </div>

                                <div className="p-4 bg-muted dark:bg-secondary rounded-xl border border-border relative">
                                    <p className="text-sm text-foreground font-bold leading-relaxed">
                                        "The approved template is in the Legal Vault. Link sent to your email."
                                    </p>
                                    <div className="absolute -top-2 left-5 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-mono font-black rounded-full uppercase tracking-wider shadow-sm">
                                        Resolved
                                    </div>
                                </div>
                            </div>

                            {isFixed && (
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-[50px] animate-pulse"></div>
                            )}
                        </div>

                        {/* Floating Toggle Engine - Focal Point */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            <button
                                onClick={() => setIsFixed(!isFixed)}
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-3 flex items-center justify-center transition-all duration-700 shadow-lg active:scale-90 relative ${isFixed
                                    ? 'bg-primary border-primary/30 text-primary-foreground rotate-360 shadow-primary/30 scale-110'
                                    : 'bg-foreground border-border text-background hover:opacity-90'
                                    }`}
                            >
                                <Zap className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${isFixed ? 'fill-current scale-110' : ''}`} />
                                {isFixed && (
                                    <span className="absolute inset-0 rounded-full border-3 border-primary-foreground/40 animate-ping"></span>
                                )}

                                {/* Visual Label for the Button */}
                                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono font-bold uppercase tracking-wider transition-all duration-500 ${isFixed ? 'text-primary opacity-100' : 'text-foreground opacity-80'}`}>
                                    {isFixed ? "Optimized" : "Engage"}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-14 md:mt-18">
                    {aiToolData.map((item, i) => (
                        <div key={i} className="text-center group flex flex-col items-center p-4 rounded-2xl transition-all duration-300">
                            <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all shadow-sm">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-xl font-black mb-2 uppercase tracking-tight text-primary">{item.title}</h4>
                            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </MaxWidth>
        </section>
    );
};

export default AiIntroduction;
