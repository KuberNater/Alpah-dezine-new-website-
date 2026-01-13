'use client'
import React from 'react';
import { motion, Variants } from 'motion/react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Globe, CloudRain, Zap, Search, Activity } from 'lucide-react';
import Heading from '../Heading';

const Problem: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-500 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-40 border-slate-900 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Heading
                    badgeText="Diagnostic Report"
                    badgeIcon={<Activity size={12} className="animate-pulse" />}
                    decorativeText='Structural Clarity.'
                    subtitle="Behind every licensed product lies a web of dependencies. A misplaced trademark or missed approval carries disproportionate consequences."
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
                    Complexity Obscures
                </Heading>

                {/* Bento Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
                >

                    {/* Left Tall Card: Core Risks */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:row-span-2 bg-[#ede9fe] rounded-[40px] p-10 flex flex-col relative overflow-hidden group shadow-sm border border-black/5"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">What's at Stake</h3>
                            <ul className="space-y-6">
                                {[
                                    { text: "24% Audit failure rate", color: "text-slate-900" },
                                    { text: "Systemic Legal Risk", color: "text-slate-900" },
                                    { text: "Missed royalty revenue", color: "text-slate-900" },
                                    { text: "Brand Equity Erosion", color: "text-slate-900" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-800">
                                        <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={14} className="text-[#ede9fe]" strokeWidth={3} />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dynamic Visual: The "Scanner" */}
                        <div className="mt-auto relative h-64 -mx-10 -mb-10 bg-white/40 backdrop-blur-xl rounded-t-[48px] border-t border-white/60 p-8 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{ y: [0, 160, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-1 bg-red-500/50 blur-[2px] z-20"
                            />
                            <div className="relative w-full h-full flex flex-col justify-center gap-4 opacity-40">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-4 bg-slate-900/10 rounded-full w-full overflow-hidden relative">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            className="absolute inset-0 bg-slate-900/20 w-1/2"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <ShieldAlert size={80} className="text-slate-900/10" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Top: Royalty Multiplier */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f04e63] rounded-[40px] p-10 flex flex-col relative overflow-hidden group shadow-lg"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">Royalty Error</h3>
                            <p className="text-white/80 font-bold text-lg leading-tight">
                                3.0x Multiplier <br /> on back-payments.
                            </p>
                        </div>
                        <div className="mt-auto flex items-end justify-between">
                            <div className="text-6xl font-black text-white/20 tracking-tighter leading-none group-hover:text-white/40 transition-colors">ERR_801</div>
                            <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
                                <Zap size={32} className="text-white fill-white" />
                            </div>
                        </div>
                        {/* Background "Noise" Pulse */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-full blur-[80px]"
                        />
                    </motion.div>

                    {/* Right Top: Audit Gap */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#e2f9d5] rounded-[40px] p-10 flex flex-col group overflow-hidden border border-black/5"
                    >
                        <h3 className="text-3xl font-black text-slate-800 mb-2 leading-none tracking-tighter">
                            24% failure. <br /> Zero visibility.
                        </h3>
                        <p className="text-slate-600 font-bold text-sm uppercase tracking-widest mt-2">Compliance Gap Analysis</p>
                        <div className="mt-auto flex items-center gap-6">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                                <CloudRain size={48} className="text-slate-700 stroke-2" />
                            </motion.div>
                            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                <AlertTriangle size={48} className="text-slate-700 stroke-2" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bottom Wide: Legal & Financial */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:col-span-2 bg-[#e0ecff] rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group border border-black/5"
                    >
                        <div className="flex-1 relative z-10 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-xl border border-blue-100">
                                    <Search size={28} />
                                </div>
                                <h3 className="text-4xl font-black text-[#1e40af] tracking-tighter">Financial Exposure</h3>
                            </div>
                            <p className="text-[#1e40af]/70 text-xl font-bold leading-relaxed max-w-lg">
                                $100k fine per instance of asset misuse. We bridge the structural gap between risk and reality.
                            </p>
                        </div>

                        <div className="relative w-full md:w-72 h-48 md:h-full flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: [0, 10, 0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute w-40 h-56 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col overflow-hidden"
                            >
                                <div className="h-4 w-3/4 bg-slate-100 rounded-full mb-4"></div>
                                <div className="h-4 w-full bg-slate-50 rounded-full mb-2"></div>
                                <div className="h-4 w-5/6 bg-slate-50 rounded-full mb-8"></div>
                                <div className="mt-auto w-full h-12 bg-rose-500 rounded-xl flex items-center justify-center text-white font-black text-xs">
                                    VIOLATION_ID:44
                                </div>
                            </motion.div>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white z-20 shadow-2xl animate-bounce">
                                <Globe size={32} />
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Problem;