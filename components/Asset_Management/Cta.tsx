
'use client'
import React, { useEffect, useRef } from 'react';
/* Added missing RefreshCw import */
import { ArrowRight, Zap, ShieldCheck, Activity, Lock, Cpu, Terminal, Layers, RefreshCw } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Heading from '../Heading';
import { Button } from '../ui/button';
import Link from 'next/link';

const Cta: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Section parallax logic
    const sectionMouseX = useMotionValue(0);
    const sectionMouseY = useMotionValue(0);
    const springConfig = { damping: 30, stiffness: 150 };
    const smoothSectionX = useSpring(sectionMouseX, springConfig);
    const smoothSectionY = useSpring(sectionMouseY, springConfig);
    const bgX = useTransform(smoothSectionX, [0, 1000], [15, -15]);
    const bgY = useTransform(smoothSectionY, [0, 1000], [15, -15]);

    // Button local hover logic for glow effect
    const btnX = useMotionValue(0);
    const btnY = useMotionValue(0);
    const smoothBtnX = useSpring(btnX, { damping: 20, stiffness: 200 });
    const smoothBtnY = useSpring(btnY, { damping: 20, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                sectionMouseX.set(e.clientX - rect.left);
                sectionMouseY.set(e.clientY - rect.top);
            }

            if (buttonRef.current) {
                const btnRect = buttonRef.current.getBoundingClientRect();
                btnX.set(e.clientX - btnRect.left);
                btnY.set(e.clientY - btnRect.top);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 landing bg-background w-full px-6 relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-slate-50 dark:bg-black rounded-[64px] p-16 md:p-32 text-center overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl">

                    {/* Background Structural Elements */}
                    <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none opacity-40">
                        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 dark:bg-emerald-600/5 blur-[120px] rounded-full" />

                        {/* Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </motion.div>

                    {/* Scanning Line Effect */}
                    <motion.div
                        animate={{ y: ['0%', '1000%'] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 dark:via-blue-500/30 to-transparent z-0 pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <Heading
                            badgeText="Unified Asset Management"
                            decorativeText='Of Your Creative Library.'
                            badgeIcon={<Terminal size={14} className="text-blue-600 dark:text-blue-400" />}
                            subtitle="Stop searching and start creating. Centralize your licensed assets, automate approvals, and ensure brand consistency across every partner in your ecosystem."
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
                            Bring Total Clarity
                        </Heading>
                        {/* Protocol Badge */}


                        {/* DYNAMIC PRIMARY BUTTON */}
                        <Button
                            asChild
                            className="w-full sm:w-auto group relative bg-navy-950 dark:bg-white text-white dark:text-navy-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 min-h-[58px]"
                        >
                            <Link href="/contact-us">
                                <span className="relative z-10 flex items-center gap-4">
                                    Let's Chat
                                    <motion.div
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        <ArrowRight size={22} strokeWidth={3} className="transition-transform group-hover:scale-110" />
                                    </motion.div>
                                </span>
                            </Link>
                        </Button>

                        {/* Status Bar Mockup */}
                        <div className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-60">
                            <div className="flex items-center gap-3 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:opacity-100 transition-opacity cursor-default">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <Layers size={14} className="text-slate-400 dark:text-slate-500" /> Assets: Organized
                            </div>
                            <div className="flex items-center gap-3 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:opacity-100 transition-opacity cursor-default">
                                <RefreshCw size={14} className="text-slate-400 dark:text-slate-500 w-3.5 h-3.5" /> Versioning: Synced
                            </div>
                            <div className="flex items-center gap-3 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest hover:opacity-100 transition-opacity cursor-default">
                                <Activity size={14} className="text-slate-400 dark:text-slate-500" /> Approvals: Real-Time
                            </div>
                        </div>
                    </div>

                    {/* Corner Accents (Technical Aesthetic) */}
                    <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-slate-900/10 dark:border-white/10" />
                    <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-slate-900/10 dark:border-white/10" />
                    <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-slate-900/10 dark:border-white/10" />
                    <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-slate-900/10 dark:border-white/10" />

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-blue-500/30 dark:via-blue-500/50 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
