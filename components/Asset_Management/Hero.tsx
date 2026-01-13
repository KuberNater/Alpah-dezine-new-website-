'use client'
import React from 'react';
import {
    Activity,
    RefreshCw,
    Store,
    DollarSign,
    Users,
    MousePointer2,
    CheckCircle2,
    MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import Heading from '../Heading';
import Image from 'next/image';

const Hero: React.FC = () => {
    // Industry-specific professional portraits
    const professionals = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120", // Sarah, Brand Director
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120", // Marcus, Production
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120&h=120", // Elena, Legal
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120&h=120", // David, Agency Partner
    ];

    return (
        <section className="relative landing bg-background w-full flex flex-col items-center justify-start overflow-hidden transition-colors duration-500 pt-24 pb-4 md:pt-32 md:pb-8 font-sans">

            {/* Background Decorative Rings - Preserved */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center translate-y-16">
                <div className="absolute w-[1000px] h-[1000px] border border-[#d4c7b8]/30 dark:border-white/2 rounded-full"></div>
                <div className="absolute w-[700px] h-[700px] border border-[#d4c7b8]/20 dark:border-white/2 rounded-full"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e0ecff]/40 dark:bg-blue-900/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center mb-10 max-w-4xl animate-fadeIn px-6">
                    <Heading
                        badgeText="Trusted by 700+ Ops Managers"
                        badgeIcon={<div className="flex -space-x-2 mr-2">
                            {professionals.slice(0, 3).map((src, i) => (
                                <img key={i} src={src} className="w-5 h-5 rounded-full border border-white dark:border-slate-800 object-cover" alt="Creative Lead" />
                            ))}
                        </div>}

                        subtitle="Creative asset management, when done properly, becomes invisible.
                        Everything <span class='text-slate-900 dark:text-white underline decoration-[#3b82f6] decoration-2 underline-offset-4'>simply works.</span>"
                        align="center"
                        decorativeText='That Matters Most.'
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
                        The Invisible Work
                    </Heading>
                </div>

                <Image
                    src={"/images/asset-management/01 1.webp"}
                    alt='Creative asset management'
                    width={1200}
                    height={900}
                />
            </div>
        </section>
    );
};

export default Hero;