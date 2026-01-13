'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, TrendingUp, AlertCircle, ShieldCheck, Zap, Minus, Activity } from 'lucide-react';
import Heading from '../Heading';

const RollingNumber = ({ value, duration = 1.5 }: { value: string, duration?: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const isPercent = value.includes('%');
    const isCurrency = value.includes('$');
    const isK = value.toLowerCase().includes('k');
    const isDays = value.includes('d');

    // Extract only the numbers for animation
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;

    useEffect(() => {
        let start = 0;
        const startTime = performance.now();
        const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easeOutQuad = (t: number) => t * (2 - t);
            const current = Math.floor(easeOutQuad(progress) * numericValue);
            setDisplayValue(current);
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }, [value, numericValue]);

    if (value === 'High') return <span className="tabular-nums">&nbsp;High</span>;
    if (value === 'Zero') return <span className="tabular-nums">&nbsp;Zero</span>;

    return (
        <span className="tabular-nums">
            {isCurrency && '$'}{displayValue}{isK && 'K'}{isPercent && '%'}{isDays && 'd'}
        </span>
    );
};

const RoiMetrics: React.FC = () => {
    const [isProactive, setIsProactive] = useState(true);

    const stats = isProactive ? [
        { val: "100%", label: "Royalty Accuracy", color: "text-emerald-500" },
        { val: "2d", label: "Approval Time", color: "text-blue-500" },
        { val: "$0", label: "Fines Paid", color: "text-blue-600" },
        { val: "Zero", label: "Audit Gaps", color: "text-emerald-600" },
    ] : [
        { val: "24%", label: "Audit Gaps", color: "text-rose-500" },
        { val: "60d", label: "Approval Delay", color: "text-slate-400" },
        { val: "$100k", label: "Risk Exposure", color: "text-rose-600" },
        { val: "High", label: "Error Rate", color: "text-slate-400" },
    ];

    const points = isProactive ? [
        "Legal friction prevented before it starts",
        "Instant documentation for total clarity",
        "Seamless coordination between partners",
        "Single source of truth for version control"
    ] : [
        "Mistakes noticed only after costly audits",
        "Manual paperwork leads to dangerous gaps",
        "Strained relationships due to errors",
        "Legacy files create versioning risk"
    ];

    return (
        <section id="results" className="py-16 md:py-24 landing bg-background w-full transition-colors duration-500 relative overflow-hidden font-sans">
            <motion.div
                animate={{
                    background: isProactive
                        ? 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 70%)'
                }}
                className="absolute inset-0 pointer-events-none"
            />
            <Heading
                badgeText="The Transformation"
                badgeIcon={<TrendingUp size={12} className="text-blue-500" />}
                subtitle="Toggle below to see the impact of proactive asset governance on your operations."
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
                From Chaos to <span className='text-primary'>Certainty.</span>
            </Heading>
            <div className="max-w-6xl mx-auto px-6 relative z-10">


                <div className="flex justify-center mb-16">
                    <div className="p-1.5 bg-slate-100 dark:bg-slate-900/50 rounded-full border border-slate-200 dark:border-white/10 flex items-center relative w-full max-w-[400px] shadow-inner">
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            className={`absolute h-[85%] rounded-full shadow-lg ${isProactive ? 'bg-blue-600' : 'bg-rose-500'}`}
                            style={{ width: 'calc(50% - 6px)', left: isProactive ? 'calc(50% + 3px)' : '3px' }}
                        />
                        <button onClick={() => setIsProactive(false)} className={`flex-1 relative z-10 py-4 text-[11px] font-black uppercase tracking-widest ${!isProactive ? 'text-white' : 'text-slate-400'}`}>Reactive State</button>
                        <button onClick={() => setIsProactive(true)} className={`flex-1 relative z-10 py-4 text-[11px] font-black uppercase tracking-widest ${isProactive ? 'text-white' : 'text-slate-400'}`}>Alpha State</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isProactive ? 'pro' : 'rea'}
                                initial={{ opacity: 0, x: isProactive ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isProactive ? -20 : 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-colors ${isProactive ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                                        {isProactive ? <ShieldCheck size={28} /> : <AlertCircle size={28} />}
                                    </div>
                                    <h3 className={`text-3xl font-black tracking-tighter ${isProactive ? 'text-emerald-600' : 'text-rose-600'}`}>
                                        {isProactive ? 'Operational Resilience' : 'Systemic Exposure'}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {points.map((point, idx) => (
                                        <motion.div key={idx} className={`flex items-center gap-4 p-6 rounded-[32px] border ${isProactive ? 'bg-emerald-50/30 border-emerald-100' : 'bg-rose-50/30 border-rose-100'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isProactive ? 'border-emerald-500 text-emerald-500' : 'border-rose-500 text-rose-500'}`}>
                                                {isProactive ? <Check size={16} strokeWidth={4} /> : <Minus size={16} strokeWidth={4} />}
                                            </div>
                                            <span className="text-slate-800 dark:text-slate-200 font-bold">{point}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-slate-900 p-10 rounded-[56px] shadow-2xl border-4 border-slate-800 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <Activity size={16} className="text-blue-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Operational Metrics</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-12">
                                    {stats.map((stat, i) => (
                                        <motion.div key={`${isProactive}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                                            <div className={`text-4xl font-black mb-1 ${stat.color}`}>
                                                <RollingNumber value={stat.val} />
                                            </div>
                                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoiMetrics;