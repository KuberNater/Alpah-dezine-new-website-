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
import { CardStack } from '@/components/ui/card-stack';


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
                        className='mb-20'
                    >
                        Proven <span className="text-primary">Impact.</span>
                    </Heading>
                    {/* Testimonial Card - Using shadcn Card */}
                    <CardStack  items={TESTIMONIALS} />
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