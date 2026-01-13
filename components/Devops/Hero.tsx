'use client'
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Globe, LayoutDashboard, Terminal, CheckCircle2 } from 'lucide-react';
import Heading from '../Heading';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';


const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeLayer, setActiveLayer] = useState<number>(1); // Default to middle layer

    // Smooth parallax effect
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        // Calculate normalized coordinates (-1 to 1)
        const x = ((e.clientX - left) / width) * 2 - 1;
        const y = ((e.clientY - top) / height) * 2 - 1;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
        setActiveLayer(1);
    };

    // Auto-cycle layers if not interacting
    useEffect(() => {
        if (mousePosition.x !== 0) return;
        const interval = setInterval(() => {
            setActiveLayer(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, [mousePosition.x]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex items-center justify-center overflow-hidden landing bg-background w-full transition-colors duration-500 py-24 pb-12"
        >
            {/* 1. Elegant Background Atmosphere with DevOps Motifs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Gradient Orbs */}
                {/* <div className="absolute top-[-20%] right-[-5%] w-[800px] h-[800px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-pulse-slow"></div> */}
                {/* <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal"></div> */}
            </div>

            <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Column: Typography */}
                <div className="flex flex-col items-start text-left z-20">
                    {/* Badge */}
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-8 backdrop-blur-sm animate-fade-in-up"> */}
                    {/* <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span> */}
                    <Heading
                        badgeText='DevOps Services | AlphaDezine'
                        badgeIcon={<></>}
                        subtitle="Automate. Scale. Resilient."
                        align="left"
                        decorativeText='just work.'
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
                        We build digital experiences that
                    </Heading>

                    {/* Interactive Sub-list with Fade/Move Animation */}
                    <div className="flex flex-col gap-2 mb-10 w-full max-w-md">
                        {[
                            { label: "Websites", icon: Globe, id: 0, color: "text-blue-500" },
                            { label: "Dashboards", icon: LayoutDashboard, id: 1, color: "text-purple-500" },
                            { label: "APIs", icon: Terminal, id: 2, color: "text-emerald-500" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveLayer(item.id)}
                                className={`group/item flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default border ${activeLayer === item.id
                                    ? 'bg-white dark:bg-white/10 border-slate-200 dark:border-white/10 shadow-lg -translate-y-1 opacity-100'
                                    : 'bg-transparent border-transparent opacity-60 translate-y-0 hover:opacity-100'
                                    }`}
                                style={{ animationDelay: `${i * 150}ms` }}
                            >
                                <div className={`p-2 rounded-lg transition-colors ${activeLayer === item.id ? 'bg-slate-100 dark:bg-black/20' : 'bg-transparent'}`}>
                                    <item.icon className={`w-6 h-6 transition-colors ${activeLayer === item.id ? item.color : 'text-slate-400'}`} />
                                </div>
                                <span className={`text-2xl font-bold tracking-tight transition-colors ${activeLayer === item.id ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                                    {item.label}.
                                </span>
                                <div className={`ml-auto transition-all duration-300 ${activeLayer === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                    <CheckCircle2 className={`w-5 h-5 ${item.color}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed max-w-lg">
                        Designed beautifully. Deployed flawlessly. <br /> Maintained effortlessly.
                    </p>

                    {/* CTA Button with Dynamic Gradient */}
                    <button
                        onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto group relative bg-navy-950 dark:bg-white text-white dark:text-navy-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.25em] overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 min-h-[58px]"
                    >
                        <div className="absolute inset-0 bg-primary text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 flex items-center gap-4">
                            Let's Talk
                            <motion.div
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <ArrowRight size={18} />
                            </motion.div>
                        </span>
                    </button>

                </div>

                {/* Right Column: High-Fidelity 3D Glass Stack */}
                <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-1000">

                    <div
                        className="relative w-[380px] h-[480px] transition-transform duration-200 ease-out transform-style-3d"
                        style={{
                            transform: `rotateX(${mousePosition.y * 10 + 10}deg) rotateY(${mousePosition.x * 10 - 10}deg)`
                        }}
                    >
                        {/* Layer 3: APIs (Bottom) */}
                        <div
                            className={`absolute inset-0 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeLayer === 2 ? 'transform translate-z-30 scale-105 border-emerald-500/50 shadow-emerald-900/50 z-30' : 'transform -translate-y-4 translate-x-4 -translate-z-40 opacity-40 z-10 grayscale'
                                }`}
                        >
                            <div className="h-8 bg-slate-800 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="ml-auto text-[10px] font-mono text-slate-500">api.json</div>
                            </div>
                            <div className="p-6 font-mono text-xs text-emerald-400 space-y-2">
                                <div>{`{`}</div>
                                <div className="pl-4"><span className="text-purple-400">"status"</span>: <span className="text-yellow-300">"stable"</span>,</div>
                                <div className="pl-4"><span className="text-purple-400">"latency"</span>: <span className="text-blue-300">12</span>,</div>
                                <div className="pl-4"><span className="text-purple-400">"uptime"</span>: <span className="text-yellow-300">99.99</span>,</div>
                                <div className="pl-4"><span className="text-purple-400">"endpoints"</span>: [</div>
                                <div className="pl-8 text-slate-500">// Connected to 4 nodes</div>
                                <div className="pl-8"><span className="text-white">"/auth"</span>,</div>
                                <div className="pl-8"><span className="text-white">"/deploy"</span></div>
                                <div className="pl-4">]</div>
                                <div>{`}`}</div>
                            </div>
                            {/* Glowing Connection Lines */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Layer 2: Dashboard (Middle) */}
                        <div
                            className={`absolute inset-0 bg-slate-800/90 backdrop-blur-xl border border-slate-600 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeLayer === 1 ? 'transform translate-z-30 scale-105 border-purple-500/50 shadow-purple-900/50 z-30' : 'transform -translate-y-12 translate-x-12 -translate-z-20 opacity-40 z-20 grayscale'
                                }`}
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-2 w-24 bg-slate-600 rounded-full"></div>
                                    <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1 h-24 bg-slate-700/50 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute bottom-0 left-0 w-full bg-purple-500/20 h-1/2 group-hover:h-3/4 transition-all duration-500"></div>
                                    </div>
                                    <div className="flex-1 h-24 bg-slate-700/50 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute bottom-0 left-0 w-full bg-blue-500/20 h-1/3 group-hover:h-1/2 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-auto">
                                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                    </div>
                                    <div className="h-2 w-2/3 bg-slate-700 rounded-full"></div>
                                    <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 1: Website (Top) */}
                        <div
                            className={`absolute inset-0 bg-white dark:bg-slate-900 backdrop-blur-xl border border-slate-200 dark:border-slate-600 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeLayer === 0 ? 'transform translate-z-30 scale-105 border-blue-500/50 shadow-brand-500/30 z-30' : 'transform -translate-y-20 translate-x-20 -translate-z-0 opacity-40 z-10 grayscale'
                                }`}
                        >
                            <div className="h-14 border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-6">
                                <div className="font-display font-bold text-slate-900 dark:text-white">alpha.</div>
                                <div className="flex gap-2">
                                    <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                    <div className="w-8 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-50"></div>
                                <div className="w-16 h-16 bg-brand-500 rounded-2xl mb-4 shadow-lg shadow-brand-500/40 rotate-12"></div>
                                <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
                                <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800 rounded-full"></div>

                                {/* Floating UI Elements */}
                                <div className="absolute top-10 left-4 w-8 h-8 bg-yellow-400/20 rounded-full blur-xl"></div>
                                <div className="absolute bottom-10 right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
        .perspective-1000 { perspective: 1500px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>
        </section>
    );
};

export default Hero;