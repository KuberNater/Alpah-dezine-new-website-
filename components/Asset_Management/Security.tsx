'use client'
import React from 'react';
import { motion, Variants } from 'motion/react';
import { ShieldCheck, Lock, Zap, Star, ShieldAlert, FileCheck, CheckCircle2, Search, UserCheck } from 'lucide-react';
import Heading from '../Heading';


const Security: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
    };

    return (
        <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-500 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Heading
                    badgeText="Active Risk Mitigation"
                    badgeIcon={<ShieldCheck size={12} />}
                    decorativeText='Failure Points.'
                    subtitle="We don't just help avoid problems. We build systems that make them structurally impossible by addressing root causes in real-time."
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
                    Designing Out
                </Heading>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
                >

                    {/* 1. Tall Card - Audit Ready */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:row-span-2 bg-[#f5f2f0] dark:bg-[#1a1a1a] rounded-[40px] p-10 flex flex-col relative overflow-hidden group border border-slate-200/50 dark:border-white/5 shadow-sm"
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter">Always Audit Ready</h3>

                            <div className="space-y-10">
                                {[
                                    { label: "Digital Trails", text: "Timestamped Chain of Custody", icon: ShieldCheck, color: "text-[#3b82f6]" },
                                    { label: "Compliance State", text: "Verified Operational Records", icon: CheckCircle2, color: "text-emerald-500" },
                                    { label: "Permission Sets", text: "Role-Based Access Controls", icon: Lock, color: "text-indigo-500" }
                                ].map((item, idx) => (
                                    <div key={idx} className="group/item">
                                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                            {item.label}
                                        </span>
                                        <div className="flex items-center gap-4 text-lg font-black text-slate-900 dark:text-white">
                                            <div className={`p-1.5 rounded-full border-2 border-slate-900/10 dark:border-white/10 flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                                                <item.icon size={18} className={item.color} strokeWidth={3} />
                                            </div>
                                            {item.text}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto relative h-48 -mx-10 -mb-10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-t-[48px] border-t border-white/80 dark:border-white/10 p-8 flex items-center justify-center">
                                <motion.div
                                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-emerald-500/5 rounded-t-[48px]"
                                />
                                <div className="flex flex-col items-center gap-2">
                                    <div className="px-4 py-2 bg-emerald-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-500/20 rotate-[-5deg]">SECURE_STORAGE_V4</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Encryption Active</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Asset Lifecycle - Animated Progress */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#fff1f2] dark:bg-[#1a0e0f] rounded-[40px] p-10 flex flex-col relative overflow-hidden group border border-slate-200/50 dark:border-white/5"
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-black text-[#9f1239] dark:text-[#f04e63] leading-none tracking-tighter">Asset <br /> Lifecycle</h3>
                                <div className="w-12 h-12 bg-white/50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-[#f04e63]">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                            </div>
                            <div className="p-3 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-[#f04e63]/10 rounded-2xl">
                                <span className="text-[11px] font-black text-[#9f1239] dark:text-[#f04e63] uppercase tracking-widest">Self-Healing Archives</span>
                            </div>
                        </div>
                        <div className="mt-auto pt-10">
                            <div className="relative h-2 bg-slate-900/5 dark:bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 h-full bg-[#f04e63]"
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="text-[8px] font-black text-[#9f1239]/40 uppercase tracking-widest">Intake</span>
                                <span className="text-[8px] font-black text-[#9f1239]/40 uppercase tracking-widest">Retirement</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Financial Integrity - Hover Badge Reveal */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f0fdf4] dark:bg-[#0d1a12] rounded-[40px] p-10 flex flex-col group overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-2xl font-black text-[#166534] dark:text-[#e2f9d5] leading-none tracking-tighter">
                                Royalty <br /> Integrity
                            </h3>
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-lg"
                            >
                                <Star size={24} fill="currentColor" />
                            </motion.div>
                        </div>
                        <p className="text-[#166534] dark:text-[#e2f9d5] font-black text-xs uppercase tracking-widest mb-10 leading-relaxed">
                            Automated asset-level reconciliation for 100% financial transparency.
                        </p>
                        <div className="mt-auto flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-[#e2f9d5] dark:border-white/10 flex items-center justify-center shadow-md">
                                    <ShieldCheck size={20} className="text-emerald-500" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white dark:border-slate-800 text-[10px] font-black shadow-lg">
                                +24
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. Wide Card - Operational Security */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:col-span-2 bg-[#eff6ff] dark:bg-[#0c1421] rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group border border-slate-200/50 dark:border-white/5"
                    >
                        <div className="flex-1 relative z-10">
                            <h3 className="text-4xl font-black text-[#1e40af] dark:text-[#e0ecff] mb-8 leading-none tracking-tighter">Locked Down <br /> Operations.</h3>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block opacity-60">Control Plane</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        <p className="text-[#1e40af] dark:text-[#e0ecff] font-black text-sm tracking-tight">Active Encryption</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block opacity-60">Verification</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <p className="text-[#1e40af] dark:text-[#e0ecff] font-black text-sm tracking-tight">SOC 2 Compliant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full md:w-64 h-56 flex items-center justify-center">
                            <motion.div
                                initial={{ rotate: -8 }}
                                whileInView={{ rotate: 0 }}
                                className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/10 p-6 flex flex-col"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    <UserCheck size={18} className="text-blue-500" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full" />
                                    <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-700 rounded-full" />
                                    <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-700 rounded-full" />
                                </div>
                                <div className="mt-auto flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600"
                                    >
                                        <Lock size={24} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Security;