"use client"
import { CATEGORIES, ECOSYSTEM_LOGOS } from '@/data/home.data';
import { Activity, ChevronRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

// Custom hook to detect if device supports hover (desktop)
const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if device supports hover (desktop with mouse)
        const mediaQuery = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');

        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsDesktop(e.matches);
        };

        // Set initial value
        handleChange(mediaQuery);

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isDesktop;
};

export const Ecosystem: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const isDesktop = useIsDesktop();

    // Handle click for mobile/tablet - toggles selection
    const handleClick = (catId: string) => {
        setActiveCategory(activeCategory === catId ? null : catId);
    };

    // Handle mouse enter - only on desktop
    const handleMouseEnter = (catId: string) => {
        if (isDesktop) {
            setActiveCategory(catId);
        }
    };

    // Handle mouse leave - only on desktop
    const handleMouseLeave = () => {
        if (isDesktop) {
            setActiveCategory(null);
        }
    };

    return (
        <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-700 relative overflow-hidden" id="ecosystem">
            <MaxWidth>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 order-1"
                    >
                        <Heading
                            badgeText="Human-Centered Flow"
                            badgeIcon={<UserCheck size={12} />}
                            decorativeText="Finally Sync'd."
                            subtitle="Technology should be invisible. We connect your tools so your team can focus on <span class='text-navy-950 dark:text-white font-extrabold'>people and progress</span>, not duplicate data entry."
                            align="center"
                            containerClassName="lg:items-start lg:text-left"
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
                            Your Systems, <br />
                        </Heading>

                        <div className="space-y-2 sm:space-y-3">
                            {CATEGORIES.map((cat) => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleClick(cat.id)}
                                    onMouseEnter={() => handleMouseEnter(cat.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`w-full group flex flex-col p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-[2rem] border transition-all duration-500 text-left relative overflow-hidden cursor-pointer active:scale-[0.98] ${activeCategory === cat.id
                                        ? 'bg-primary border-primary/30 shadow-2xl shadow-primary/20 lg:translate-x-2'
                                        : 'bg-slate-50/50 dark:bg-navy-900/50 border-transparent hover:bg-white dark:hover:bg-navy-900 hover:border-slate-200 dark:hover:border-navy-800'
                                        }`}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-500 flex-shrink-0 ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-white dark:bg-navy-950 text-primary shadow-sm'}`}>
                                                <cat.icon size={18} className="sm:w-5 sm:h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <span className={`text-sm sm:text-base font-black uppercase tracking-wider sm:tracking-widest block transition-colors truncate ${activeCategory === cat.id ? 'text-white' : 'text-navy-950 dark:text-white'}`}>
                                                    {cat.label}
                                                </span>
                                                <span className={`text-xs sm:text-[15px] font-medium transition-colors line-clamp-1 ${activeCategory === cat.id ? 'text-royal-100' : 'text-slate-400'}`}>
                                                    {cat.sub}
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className={`flex-shrink-0 sm:w-[18px] sm:h-[18px] transition-all duration-500 ${activeCategory === cat.id ? 'translate-x-0 text-white' : 'opacity-0 -translate-x-4'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7 order-2">
                        <div className="relative bg-white/50 dark:bg-navy-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-slate-100 dark:border-navy-800 shadow-xl sm:shadow-2xl min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] flex flex-col">

                            {/* Central Sync Badge */}
                            <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
                                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-lg sm:shadow-xl group/sync">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center animate-spin-slow flex-shrink-0">
                                        <Activity size={14} className="sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest text-navy-950 dark:text-white">Active Bridge</span>
                                        <span className="text-[7px] sm:text-[8px] font-bold text-emerald-500 uppercase tracking-wider sm:tracking-widest">Optimized for Humanity</span>
                                    </div>
                                </div>
                            </div>

                            {/* Logo Mosaic */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 flex-1">
                                {ECOSYSTEM_LOGOS.map((logo, i) => {
                                    const isFocused = activeCategory === logo.category || activeCategory === null;
                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                opacity: isFocused ? 1 : 0.1,
                                                scale: isFocused ? 1 : 0.95,
                                                filter: isFocused ? 'grayscale(0)' : 'grayscale(1) blur(2px)'
                                            }}
                                            className={`relative bg-white dark:bg-white/80 hover:shadow border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 md:p-1 flex flex-col items-center justify-center transition-all duration-500 shadow-sm aspect-square ${activeCategory === logo.category ? 'border-primary ring-2 sm:ring-4 ring-primary/5 shadow-lg sm:shadow-xl w-12 h-12 sm:w-16 sm:h-16 md:size-36 lg:w-[100px] lg:h-[100px]' : ''
                                                }`}
                                        >
                                            <Image
                                                src={logo.logo}
                                                alt={logo.name}
                                                width={100}
                                                height={100}
                                                className="w-full h-full object-fill scale-110"
                                            />
                                            {activeCategory === logo.category && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute -bottom-1.5 sm:-bottom-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary text-[6px] sm:text-[8px] font-black text-white uppercase tracking-wider sm:tracking-widest shadow-lg whitespace-nowrap"
                                                >
                                                    Integrated
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </MaxWidth>
        </section >
    );
};
