'use client'
import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Check, ArrowLeft } from 'lucide-react';
import Heading from '../Heading';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';


const Hero: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col landing bg-background items-center justify-start overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 transition-colors duration-500">

            {/* 1. Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Golden Hour Campus Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.15] dark:opacity-[0.1] mix-blend-multiply dark:mix-blend-overlay transition-opacity duration-700 will-change-transform"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1592280771190-3e2e4d50c2bc?q=80&w=2070&auto=format&fit=crop')`, // Stadium/Campus at Golden Hour
                        transform: `scale(1.1) translateY(${scrollY * 0.05}px)` // Slow parallax
                    }}
                ></div>

                {/* Subtle animated grid */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none will-change-transform"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        transform: `translateY(${scrollY * 0.1}px)`
                    }}>
                </div>
            </div>

            {/* 2. Floating Atmospheric Elements (Subtle Shields) */}
            <div className="absolute inset-0 z-0 pointer-events-none max-w-7xl mx-auto overflow-hidden hidden md:block">
                <div
                    className="absolute top-[20%] -left-7 opacity-[0.03] dark:opacity-[0.02] blur-[1px] transform -rotate-12 transition-transform duration-100 ease-out will-change-transform"
                    style={{ transform: `translateY(${scrollY * -0.15}px) rotate(-12deg)` }}
                >
                    <Shield size={400} strokeWidth={1} />
                </div>
                <div
                    className="absolute top-[10%] -right-5 opacity-[0.03] dark:opacity-[0.02] blur-[1px] transform rotate-12 transition-transform duration-100 ease-out will-change-transform"
                    style={{ transform: `translateY(${scrollY * -0.1}px) rotate(12deg)` }}
                >
                    <Shield size={300} strokeWidth={1} />
                </div>
            </div>

            {/* 3. Content Container */}
            <div className="relative z-10 max-w-[448px] mx-auto px-4 text-center flex flex-col items-center mb-12 md:mb-16">

                {/* Eyebrow / Tagline */}
                <Heading
                    badgeText="Smarter Collegiate Licensing, Your Way"
                    badgeIcon={<></>}

                    subtitle="Trusted by <span class='text-navy-950 dark:text-white font-extrabold'>250+</span> licensing agencies, universities, vendors, and manufacturers worldwide"
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
                    Alpha <span className='text-primary'>Dezine</span>
                </Heading>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full max-w-lg relative z-20 px-4">

                    <button
                        className="w-full sm:w-auto group relative bg-navy-950 dark:bg-white text-white dark:text-navy-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 min-h-[58px]"
                        aria-haspopup="true"
                    >
                        <div className="absolute inset-0 bg-primary text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 flex items-center gap-4">
                            Book a Demo
                            <motion.div
                                animate={{ rotate: 180 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <ArrowLeft size={18} />
                            </motion.div>
                        </span>
                    </button>
                </div>
            </div>

            {/* 4. Hero Visual / Interface Mockup - The "Anchor" */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-auto" style={{ perspective: '1200px' }}>

                {/* Floating Context Element (Subtler - Hidden on Mobile to reduce clutter) */}
                <div className="absolute -left-4 top-10 z-20 hidden lg:block animate-float will-change-transform" style={{ animationDelay: '0s' }}>
                    <div className="px-4 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 flex items-center justify-center">
                            <Check size={20} className="text-teal-500" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">Design Approved</div>
                            <div className="text-[10px] text-slate-500">Just now • Varsity Tee</div>
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Interface */}
                <div className="relative rounded-t-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden transform md:translate-y-12 translate-y-4 opacity-100 transition-all duration-1000 ease-out will-change-transform">

                    {/* Fake Browser Bar */}
                    <div className="h-8 md:h-10 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0B1120] flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                        </div>
                        <div className="ml-4 flex-1 max-w-md mx-auto hidden sm:block">
                            <div className="h-5 md:h-6 bg-slate-200/50 dark:bg-white/5 rounded-md flex items-center justify-center text-[10px] text-slate-400 font-mono">
                                app.alphadezine.com
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content Mockup - Approval Workflow Focus */}
                    <div className="p-4 md:p-8 bg-slate-50/50 dark:bg-[#0B1120]/50 min-h-[300px] md:min-h-[400px]">
                        <div className="grid grid-cols-12 gap-6">
                            {/* Sidebar */}
                            <div className="col-span-2 hidden md:block border-r border-slate-200/50 dark:border-white/5 pr-4 space-y-2">
                                {['Dashboard', 'Queue', 'Products', 'Royalties', 'Reports'].map((item, i) => (
                                    <div key={i} className={`h-9 w-full rounded-lg flex items-center px-3 gap-3 text-sm font-medium ${item === 'Queue' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-500'}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Main Area */}
                            <div className="col-span-12 md:col-span-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Approval Queue</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="hidden sm:block px-3 py-1.5 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-400">Filter</div>
                                        <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-500/20">Action Required (12)</div>
                                    </div>
                                </div>

                                {/* Mockup Product Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                                    {[
                                        { img: "/images/collegiate/Collegiate_hoodie.webp", title: "Varsity Hoodie", vendor: "Nike Team", status: "Pending" },
                                        { img: "/images/collegiate/Collegiate_cap.webp", title: "Sideline Cap", vendor: "New Era", status: "In Review" },
                                        { img: "/images/collegiate/Collegiate_tshirt.webp", title: "Game Jersey", vendor: "Under Armour", status: "Pending" },
                                    ].map((prod, i) => (
                                        <div key={i} className={`group/card p-3 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all ${i === 2 ? 'hidden sm:block' : ''}`}>
                                            <div className="aspect-[4/3] rounded-lg bg-slate-100 dark:bg-black/20 mb-3 overflow-hidden relative">
                                                <img src={prod.img} alt={prod.title} className="w-full h-full object-fill transition-transform duration-700 group-hover/card:scale-110" />
                                                <div className="absolute top-2 right-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-white/90 dark:bg-black/80 backdrop-blur rounded text-[9px] md:text-[10px] font-bold text-slate-700 dark:text-slate-300">{prod.status}</div>
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white truncate">{prod.title}</div>
                                                    <div className="text-[10px] md:text-xs text-slate-500">{prod.vendor}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient fade at bottom of dashboard to blend */}
                    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-slate-50 dark:from-[#0F172A] to-transparent pointer-events-none"></div>
                </div>
            </div>

        </section>
    );
};

export default Hero;