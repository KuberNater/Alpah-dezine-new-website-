'use client'
import React from 'react';
import { Mail, FileSpreadsheet, Clock, Calendar, Shuffle, EyeOff, AlertTriangle } from 'lucide-react';
import Heading from '../Heading';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { Problem } from '@/data/CollegiateLicencing.data';


const ProblemPage: React.FC = () => {
    return (
        <section className="py-16 md:py-24 landing bg-background relative overflow-hidden transition-colors duration-500 w-full">

            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1000px] h-[600px] bg-slate-100/50 dark:bg-slate-900/20 rounded-[100%] blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Narrative Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
                    <Heading
                        badgeIcon={<></>}

                        subtitle="If your licensing process feels broken, <span class='text-slate-900 dark:text-white underline decoration-blue-400 decoration-2 underline-offset-4'>you're not alone.</span>"
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
                        The Problem Is <span className='text-primary'>Clear.</span>
                    </Heading>
                    {/* <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
                        <span className="text-slate-900 dark:text-white">The Problem Is </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400">Clear.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-6 md:mb-8">
                        If your licensing process feels broken, <span className="text-slate-900 dark:text-white underline decoration-blue-400 decoration-2 underline-offset-4">you're not alone.</span>
                    </p> */}
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        We were struck by a paradox. The collegiate licensing industry generates an estimated <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 font-bold">$6+ billion</strong> annually across 700+ institutions, yet the tools most teams rely upon remain fundamentally inadequate.
                    </p>
                </div>

                {/* 2. The Symptoms (Grid Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
                    {Problem.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background landing border border-slate-200 dark:border-navy-700 rounded-[2.5rem] p-8 lg:p-10 hover:shadow-2xl hover:border-brandText/30 dark:hover:border-royal-400/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Top Row: Icon and Chart */}
                            <div className="flex items-start justify-between mb-10">
                                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-navy-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-navy-800 transition-all group-hover:scale-110 group-hover:shadow-lg`}>
                                    <item.icon className="text-primary" size={24} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 3. The Impact (Banner) */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-black border border-slate-800 dark:border-slate-800 shadow-2xl group">
                    {/* Abstract Red Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/30 transition-colors duration-700 pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 text-center lg:text-left">
                        <div className="max-w-xl">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-red-400">
                                <AlertTriangle size={20} />
                                <span className="text-sm font-bold uppercase tracking-widest">The Cost of Inefficiency</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                This isn't just inefficient. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">It's expensive.</span>
                            </h3>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                Lost revenue, compliance fines, and wasted administrative hours are draining the industry.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm w-full md:w-auto min-w-[200px] md:min-w-[280px] hover:bg-white/10 transition-colors duration-300">
                            <span className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 mb-2 tracking-tighter">$125M</span>
                            <span className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-widest">Lost Annually</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemPage;