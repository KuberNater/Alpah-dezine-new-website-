import React from 'react';
import { ArrowRight } from 'lucide-react';
import Heading from '../Heading';
import { steps } from '@/data/CollegiateLicencing.data';

const Timeline: React.FC = () => {


    return (
        <section className="py-16 md:py-24 landing bg-background w-full relative overflow-hidden transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-6">
                    <Heading
                        subtitle="From kickoff to go-live in under 6 weeks."
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
                        Implementation <span className='text-primary'>Timeline</span>
                    </Heading>
                    <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 ml-12 mb-2"></div>
                </div>

                {/* Horizontal Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/20 via-blue-600/20 to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group pl-4 md:pl-0 border-l-2 md:border-l-0 border-slate-200 dark:border-slate-800 md:border-none">
                            {/* Node */}
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 group-hover:border-blue-500 dark:group-hover:border-blue-400 items-center justify-center mb-6 transition-colors shadow-sm relative">
                                <span className="font-mono font-bold text-slate-400 group-hover:text-blue-500 transition-colors">{step.number}</span>
                            </div>
                            {/* Mobile Node Replacement */}
                            <div className="md:hidden absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                                    {index < steps.length - 1 && <ArrowRight size={16} className="text-slate-300 dark:text-slate-600 hidden md:block" />}
                                </div>
                                <div className="inline-block px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                                    {step.time}
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;