'use client'
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Heading from '../Heading';
import { motion } from 'motion/react';
import { items } from '@/data/Devops.data';


const Introduction: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);



    return (
        <section className="relative py-16 md:py-24 landing bg-background w-full overflow-hidden transition-colors duration-300">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 dark:bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 max-w-3xl">
                    <Heading
                        subtitle="Most agencies force you to choose between creative flair and technical stability. We built a new kernel where both coexist seamlessly."
                        align="left"
                        decorativeText='agency model.'
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
                        We debugged the
                    </Heading>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background landing h-64 border border-slate-200 dark:border-navy-700 rounded-[2.5rem] p-8 lg:p-10 hover:shadow-2xl hover:border-brandText/30 dark:hover:border-royal-400/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 ${hoveredIndex === i ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-slate-500 dark:text-slate-400 text-sm">0{i + 1}</span>
                                    <AlertCircle className="w-6 h-6 text-slate-400 dark:text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white mb-2">
                                        {item.question}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm border-l-2 border-primary pl-3">
                                        {item.friction}
                                    </p>
                                </div>
                            </div>
                            <div className={`absolute inset-0 p-8 bg-primary flex flex-col justify-between transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-white text-sm">0{i + 1}</span>
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-white">
                                        <span className="font-mono text-[10px] uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">Fixed</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-semibold text-white mb-2">
                                        {item.flow}
                                    </h3>
                                    <div className="w-full h-1 bg-primary rounded-full mt-4 overflow-hidden">
                                        <div className="w-full h-full bg-white animate-shimmer"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        // <div
                        //     key={i}
                        //     onMouseEnter={() => setHoveredIndex(i)}
                        //     onMouseLeave={() => setHoveredIndex(null)}
                        //     className="group relative h-64 rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900"
                        // >
                        //     {/* Friction State (Default) */}
                        //     <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 ${hoveredIndex === i ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        //         <div className="flex justify-between items-start">
                        //             <span className="font-mono text-slate-500 dark:text-slate-400 text-sm">0{i + 1}</span>
                        //             <AlertCircle className="w-6 h-6 text-slate-400 dark:text-slate-600" />
                        //         </div>
                        //         <div>
                        //             <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white mb-2">
                        //                 {item.question}
                        //             </h3>
                        //             <p className="text-slate-600 dark:text-slate-400 font-mono text-sm border-l-2 border-red-300 dark:border-red-800 pl-3">
                        //                 {item.friction}
                        //             </p>
                        //         </div>
                        //     </div>

                        //     {/* Flow State (Hover) */}
                        //     <div className={`absolute inset-0 p-8 bg-brand-600 flex flex-col justify-between transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        //         <div className="flex justify-between items-start">
                        //             <span className="font-mono text-brand-100 text-sm">0{i + 1}</span>
                        //             <CheckCircle2 className="w-6 h-6 text-white" />
                        //         </div>
                        //         <div>
                        //             <div className="flex items-center gap-2 mb-2 text-white">
                        //                 <span className="font-mono text-[10px] uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">Fixed</span>
                        //             </div>
                        //             <h3 className="text-2xl font-display font-semibold text-white mb-2">
                        //                 {item.flow}
                        //             </h3>
                        //             <div className="w-full h-1 bg-brand-500 rounded-full mt-4 overflow-hidden">
                        //                 <div className="w-full h-full bg-white animate-shimmer"></div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Introduction;