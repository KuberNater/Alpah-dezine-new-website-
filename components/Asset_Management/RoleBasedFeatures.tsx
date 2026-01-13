'use client'
import React, { useState } from 'react';
import {
    Users,
    Building,
    GraduationCap,
    PenTool,
    ShoppingBag,
    Scale,
    ArrowUpRight,
    LayoutGrid,
    ShieldCheck,
    Activity,
    RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import InteractiveFolder from './InteractiveFolder';
import Heading from '../Heading';
import { roles } from '@/data/AssetManagement.data';

const RoleBasedFeatures: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="stakeholders" className="py-16 md:py-24 landing bg-background w-full transition-colors duration-500 overflow-hidden relative">

            {/* Background Connection Visual */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full opacity-[0.1] dark:opacity-[0.05]" viewBox="0 0 1200 800" fill="none">
                    <path d="M0 400 H1200 M600 0 V800" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="10 10" />
                    {roles.map((_, i) => (
                        <motion.path
                            key={i}
                            d={i < 3 ? `M${200 + i * 400} 200 Q 600 300 600 400` : `M${200 + (i - 3) * 400} 600 Q 600 500 600 400`}
                            stroke={hoveredIndex === i ? "#3b82f6" : "#cbd5e1"}
                            strokeWidth={hoveredIndex === i ? 2 : 1}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Heading
                        badgeText="Operational Coordination"
                        badgeIcon={<RefreshCw size={12} className="text-blue-500 animate-spin-slow" />}
                        decorativeText='Synchronization.'
                        subtitle=" We synchronize the workflow between creative execution and legal compliance, ensuring every partner has the <span class='text-slate-900 dark:text-white font-black italic'>correct assets.</span>"
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
                        Partnership
                    </Heading>
                </div>

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 relative">
                    {roles.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative bg-white/70 dark:bg-slate-900/40 p-8 rounded-[40px] border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-xl z-10 backdrop-blur-md`}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-14 h-14 rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center ${card.color} shadow-lg border border-slate-50 dark:border-white/5 group-hover:scale-110 transition-transform`}>
                                    <card.icon size={24} strokeWidth={2.5} />
                                </div>
                                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${card.status === "Syncing..." ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
                                    {card.status}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter">{card.role}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* The Vault Section */}
                <div className="relative">

                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <Heading
                            badgeText="Perfect Documentation Process"
                            badgeIcon={<ShieldCheck size={16} className="text-emerald-400" />}
                            subtitle="A centralized, controlled repository for every asset in your library. Every version is tracked and verified for complete peace of mind."
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
                            Total Operational <span className='text-primary'> Clarity.</span>
                        </Heading>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start py-8">
                        <InteractiveFolder
                            label="Creative_Identity"
                            accentColor="bg-blue-500"
                            items={["Logo_V4_Final.eps", "Brand_Guide_2025.pdf", "Official_Colors.json"]}
                        />
                        <InteractiveFolder
                            label="Legal_Contracts"
                            accentColor="bg-slate-900"
                            items={["License_Agreement.pdf", "Terms_Update.pdf", "Partner_List.csv"]}
                        />
                        <InteractiveFolder
                            label="Compliance_Logs"
                            accentColor="bg-[#f04e63]"
                            items={["Audit_Report_Q1.pdf", "Usage_Log.xlsx", "Security_Verify.pdf"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoleBasedFeatures;