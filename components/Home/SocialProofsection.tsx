"use client"
import { stats, TESTIMONIALS } from '@/data/home.data';
import { ChevronLeftIcon, ChevronRightIcon, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';
import { Card, CardContent } from '../ui/card';
import { Marquee } from '../ui/marquee';
import StatCard from './StatCard';


function SocialProofsection() {
    const marqueeStats = [...stats, ...stats];
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            setActiveIndex((prev: number) => (prev + 1) % TESTIMONIALS.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const handlePrev = () => {
        setIsAutoPlay(false);
        setActiveIndex((prev: number) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const handleNext = () => {
        setIsAutoPlay(false);
        setActiveIndex((prev: number) => (prev + 1) % TESTIMONIALS.length);
    };

    return (
        <section className="py-16 md:py-24 bg-background landing relative overflow-x-hidden transition-colors duration-300">
            {/* Dot Matrix Background SVG */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-900 dark:text-white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>
            <div className="w-full relative z-10 overflow-x-hidden">
                <MaxWidth>
                    {/* Section Header */}
                    <Heading
                        badgeText="Live Partnership Stories"
                    >
                        Proven <span className="text-primary">Impact.</span>
                    </Heading>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-0 group">

                        {/* Nav Controls - Desktop (show on hover) */}
                        <div className="hidden md:flex absolute top-1/2 -left-8 lg:-left-16 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-zinc-900 shadow-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-brandText hover:border-brandText transition-all"
                            >
                                <ChevronLeftIcon size={24} />
                            </button>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -right-8 lg:-right-16 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-zinc-900 shadow-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-brandText hover:border-brandText transition-all"
                            >
                                <ChevronRightIcon size={24} />
                            </button>
                        </div>

                        {/* Testimonial Card - Using shadcn Card */}
                        <Card className="relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-white/50 dark:border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden">
                            {/* Animated Background Gradients */}
                            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-72 lg:w-96 h-32 sm:h-48 md:h-72 lg:h-96 bg-brandText/5 dark:bg-royal-300/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-56 lg:w-72 h-24 sm:h-36 md:h-56 lg:h-72 bg-brandText/5 dark:bg-royal-300/5 rounded-full blur-3xl pointer-events-none" />

                            <CardContent className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="flex flex-col items-center gap-4 sm:gap-5 md:flex-row md:items-start md:gap-8 lg:gap-10 relative z-10 w-full max-w-full"
                                    >
                                        {/* Human Visual Column */}
                                        <div className="shrink-0 flex flex-col items-center md:items-start">
                                            <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl ring-2 ring-white/50 dark:ring-zinc-700/50">
                                                <img
                                                    src={TESTIMONIALS[activeIndex].image}
                                                    alt={TESTIMONIALS[activeIndex].author}
                                                    className="w-full h-full object-cover transition-all duration-700"
                                                />
                                            </div>
                                            {/* Author info below image on mobile */}
                                            <div className="mt-3 text-center md:hidden">
                                                <div className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white uppercase tracking-tight">
                                                    {TESTIMONIALS[activeIndex].author}
                                                </div>
                                                <div className="text-brandText dark:text-primary font-semibold text-[10px] sm:text-xs tracking-wide mt-0.5">
                                                    {TESTIMONIALS[activeIndex].role}
                                                </div>
                                                <div className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs">
                                                    {TESTIMONIALS[activeIndex].company}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote Content Column */}
                                        <div className="flex-1 w-full min-w-0 text-center md:text-left">
                                            <div className="mb-2 sm:mb-3 opacity-20 flex justify-center md:justify-start">
                                                <Quote size={16} fill="currentColor" className="text-brandText dark:text-royal-300 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                                            </div>

                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-3 sm:mb-4 md:mb-5 italic break-words whitespace-normal px-1">
                                                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                                            </p>

                                            {/* Author info on desktop - hidden on mobile */}
                                            <div className="hidden md:flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-4 border-t border-slate-200/60 dark:border-zinc-800 pt-3 sm:pt-4 md:pt-5">
                                                <div>
                                                    <div className="text-sm md:text-base lg:text-lg font-bold text-navy-900 dark:text-white uppercase tracking-tight">
                                                        {TESTIMONIALS[activeIndex].author}
                                                    </div>
                                                    <div className="text-brandText dark:text-primary font-semibold text-xs md:text-sm tracking-wide mt-0.5">
                                                        {TESTIMONIALS[activeIndex].role} <span className="text-slate-300 dark:text-zinc-600 mx-1.5">•</span> {TESTIMONIALS[activeIndex].company}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </CardContent>
                        </Card>

                        {/* Mobile Nav Controls */}
                        <div className="flex md:hidden justify-center gap-4 mt-4 sm:mt-5">
                            <button
                                onClick={handlePrev}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-brandText hover:border-brandText active:scale-95 transition-all"
                            >
                                <ChevronLeftIcon size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-brandText hover:border-brandText active:scale-95 transition-all"
                            >
                                <ChevronRightIcon size={20} />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setIsAutoPlay(false); setActiveIndex(i); }}
                                    className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${activeIndex === i
                                        ? 'w-6 sm:w-8 bg-brandText dark:bg-royal-400 shadow-[0_0_10px_rgba(25,79,144,0.5)]'
                                        : 'w-2 sm:w-3 bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </MaxWidth>
                {/* Infinite Scrolling Marquee */}
                <div className="relative w-full overflow-hidden py-6 sm:py-8 md:py-10">
                    {/* Gradient Masks for smoothness */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 lg:w-40 bg-linear-to-r from-slate-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 lg:w-40 bg-linear-to-l from-slate-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none"></div>
                    <Marquee className='[--gap:0.75rem] sm:[--gap:1rem]'>
                        {marqueeStats.map((stat, idx) => (
                            <StatCard key={idx} {...stat} />
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    )
}

export default SocialProofsection