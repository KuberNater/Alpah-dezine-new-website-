import { FloatingAssesmentData } from '@/data/Devops.data';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const FloatingAssessment: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 px-6 bg-background landing w-full transition-colors duration-300 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <Card className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl dark:shadow-black/50 border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col md:flex-row group p-0 gap-0">

                    {/* Left Side: Value Proposition (Dark Theme) */}
                    <div className="md:w-5/12 p-8 md:p-10 bg-zinc-900 relative flex flex-col justify-center text-white overflow-hidden">
                        {/* Subtle Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-brand-900/20 to-zinc-900 z-0"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono mb-6 backdrop-blur-sm">
                                <Sparkles className="w-3 h-3 text-brand-400" />
                                <span className="text-brand-100 tracking-wider font-medium">Limited Availability</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">
                                Unlock your <br />
                                <span className="text-white">potential.</span>
                            </h3>

                            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
                                Schedule a comprehensive 30-minute architecture review. We identify bottlenecks and map your path to scale.
                            </p>

                            <Button asChild className="w-full py-6 cursor-pointer bg-white hover:bg-brand-50 text-slate-900 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] text-sm">
                                <Link href="/contact-us">
                                Book Consultation
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <p className="mt-4 text-[10px] text-slate-500 text-center">
                                No commitment required. 100% Free.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Deliverables (Light/Dark adaptive) */}
                    <div className="md:w-7/12 p-8 md:p-10 bg-white dark:bg-zinc-900/50 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px]"></div>

                        <h4 className="text-xl font-bold text-primary mb-6 relative z-10 font-display">
                            What you'll walk away with:
                        </h4>

                        <ul className="space-y-5 relative z-10">
                            {FloatingAssesmentData.map((item, i) => (
                                <li key={i} className="flex gap-4 group/item">
                                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                        <CheckCircle2 className="size-5 text-green-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary text-base mb-0.5">{item.title}</h5>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </Card>
            </div>
        </section>
    );
};

export default FloatingAssessment;