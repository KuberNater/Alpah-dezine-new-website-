"use client"
import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const themeStyles: Record<string, any> = {
    mint: {
        border: '',
        accent: 'bg-emerald-500',
        lightBg: 'bg-emerald-50/50 dark:bg-emerald-950/10',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        glow: 'from-emerald-500/20 to-transparent'
    },
    cyan: {
        border: '',
        accent: 'bg-cyan-500',
        lightBg: 'bg-cyan-50/50 dark:bg-cyan-950/10',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
        glow: 'from-cyan-500/20 to-transparent'
    },
    royal: {
        border: '',
        accent: 'bg-royal-600',
        lightBg: 'bg-royal-50/50 dark:bg-royal-950/10',
        iconColor: 'text-brandText dark:text-royal-300',
        glow: 'from-royal-500/20 to-transparent'
    },
    lavender: {
        border: '',
        accent: 'bg-lavender-500',
        lightBg: 'bg-lavender-50/50 dark:bg-lavender-950/10',
        iconColor: 'text-brandText dark:text-indigo-400',
        glow: 'from-lavender-500/20 to-transparent'
    }
};

export const SolutionCard = ({ title, subtitle, checklist, stats, themeColor, illustration, ctas, link }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const styles = themeStyles[themeColor] || themeStyles.mint;

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative h-full flex flex-col bg-background landing border border-border rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-in-out shadow-sm hover:shadow-2xl group ${styles.border}`}
        >
            {/* Visual Header */}
            <div className={`h-48 relative overflow-hidden flex items-center justify-center p-8 transition-colors duration-500`}>
                <div className="relative z-10 w-full h-full max-w-[180px] group-hover:scale-105 transition-transform duration-500 ease-out">
                    {/* {illustration} */}
                    <Image className="scale-75" src={illustration} alt="" width={180} height={180} />
                </div>
                {/* Floating Stat Badge */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                    {stats.slice(0, 1).map((s: any, i: number) => (
                        <div key={i} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/50 dark:border-zinc-700 px-3 py-1.5 rounded-xl shadow-sm">
                            <span className={`text-sm font-black ${styles.iconColor}`}>{s.val}</span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1.5">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-2 group-hover:text-brandText dark:group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Dynamic Details - Revealed on Hover or always visible slightly */}
                <div className="mt-4 space-y-3">
                    {checklist.slice(0, 3).map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${styles.lightBg}`}>
                                <Check size={10} className={`stroke-[3] ${styles.iconColor}`} />
                            </div>
                            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 truncate">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-auto pt-8 flex items-center justify-between cursor-pointer">
                    <Link href={link} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white group-hover:text-brandText dark:group-hover:text-primary transition-colors">
                        {ctas[0]} <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                </div>
            </div>
        </motion.div>
    );
};