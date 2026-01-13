
"use client"
import { panelsData } from '@/data/home.data';
import {
    ChevronDown,
    Sparkles
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { PanelImage } from './PanelImageComponent';
import Link from "next/link"

export const HeroSection1: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Choreographed parallax depths
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const yValues = [y1, y2, y3, y4];

    return (
        <section
            ref={containerRef}
            className="relative w-full landing min-h-screen flex items-center justify-center bg-background transition-colors duration-700 z-30 pt-32"
        >
            {/* --- REFINED BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Soft atmospheric glows */}
                <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] bg-background rounded-full blur-[120px] opacity-60 animate-pulse-slow" />
                <div className="absolute bottom-[5%] right-[-5%] w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[150px] opacity-40" />

                {/* Image Constellations (Desktop Only) - Repositioned outward */}
                <div className="hidden lg:block w-full h-full relative">
                    {panelsData.map((panel, idx) => (
                        <PanelImage key={idx} panel={panel} yValue={yValues[idx]} index={idx} />
                    ))}
                </div>

                {/* Global vignette/fade */}
                <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-background z-10" />
            </div>

            {/* --- FOREGROUND CONTENT LAYER --- */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

                {/* Updated Headline with improved colors and mobile scaling */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6rem] font-black tracking-tight  uppercase leading-[0.9] mb-12 wrap-break-word"
                >
                    <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] text-navy-950 dark:text-white xl:text-[5rem]">The industry made it complicated</span> <br /> <span className="uppercase tracking-tight text-primary drop-shadow-sm">We made it work.</span>

                </motion.h1>

                {/* Refined Narrative Structure - max-w narrowed to avoid side panel collision */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                    className="max-w-3xl mx-auto mb-16 px-0"
                >
                    {/* Label Plane with improved contrast and responsiveness */}
                    <p className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] mb-10 flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3">
                        <span>DevOps to AI agents</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 hidden sm:block" />
                        <span>Creative Assets</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 hidden sm:block" />
                        <span>Collegiate Licensing</span>
                    </p>

                    {/* Updated Sub-headline with higher contrast */}
                    <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Whether it’s scaling DevOps, deploying AI agents, managing collegiate licensing, or creative asset management, we bridge the gap between <span className="text-navy-950 dark:text-white font-extrabold border-b-2 border-primary/30">complex tech and human results.</span>
                    </p>
                </motion.div>

                {/* Action Plane */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8 px-0"
                >
                    {/* FULLY RESPONSIVE Solution Selector Dropdown */}
                    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full sm:w-auto group relative bg-navy-950 dark:bg-white text-white dark:text-navy-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 min-h-[58px]"
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            <div className="absolute inset-0 bg-primary text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                            <span className="relative z-10 flex items-center gap-4">
                                EXPLORE SOLUTIONS
                                <motion.div
                                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <ChevronDown size={18} />
                                </motion.div>
                            </span>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <>
                                    {/* Scrim for Mobile Interaction (<= 768px) */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="fixed inset-0 bg-background/60 backdrop-blur-sm z-90 md:hidden"
                                    />

                                    {/* Dropdown content: Fixed light surface on mobile, Absolute light surface on desktop */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 12, scale: 0.96, filter: "blur(8px)" }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 32,
                                            mass: 0.8
                                        }}
                                        onMouseLeave={() => {
                                            if (window.innerWidth > 768) setIsDropdownOpen(false);
                                        }}
                                        className="fixed bottom-6 left-4 right-4 md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:mt-4 w-[calc(100vw-2rem)] md:w-[380px] max-h-[70vh] md:max-h-none overflow-y-auto bg-background rounded-4xl sm:rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 p-2 z-100 origin-bottom md:origin-top custom-scrollbar"
                                    >
                                        <div className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-primary border-b border-primary/10 mb-2">
                                            Market Expertise
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            {panelsData.map((panel) => (
                                                <Link
                                                    key={panel.id}
                                                    href={`/${panel.id}`}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-5 p-5 rounded-[1.8rem] hover:bg-primary/5 transition-all group/item text-left active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[72px]"
                                                >
                                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0 shadow-sm">
                                                        <panel.icon size={22} />
                                                    </div>
                                                    <div className="flex flex-col overflow-hidden">
                                                        <div className="text-[11px] sm:text-xs font-black text-primary uppercase tracking-widest leading-tight mb-1">
                                                            {panel.title}
                                                        </div>
                                                        <div className="text-[10.5px] text-slate-500 font-medium leading-tight line-clamp-1">
                                                            {panel.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Ghost Action */}
                    <Button asChild className="w-full sm:w-auto group text-navy-950 bg-background  dark:text-white font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-5 py-2.5 px-10 rounded-2xl border border-slate-200 dark:border-navy-800 hover:border-primary/40 hover:bg-white dark:hover:bg-navy-900 shadow-sm transition-all duration-300 cursor-pointer min-h-[58px]">
                        <Link href="/contact-us">
                            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-navy-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-15">
                                <Sparkles size={18} />
                            </div>
                            STRATEGY CALL</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
