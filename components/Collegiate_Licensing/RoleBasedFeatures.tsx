'use client'
import React, { useState } from 'react';
import { Briefcase, Building2, Factory, ShieldCheck, BarChart3, Tag, Check } from 'lucide-react';
import Heading from '../Heading';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { roles } from '@/data/CollegiateLicencing.data';


const RoleBasedFeatures: React.FC = () => {
    const [activeRole, setActiveRole] = useState(0);



    return (
        <section id="roles" className="py-16 md:py-24 landing bg-background transition-colors duration-300 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20">
                    <Heading
                        subtitle="See how Alpha Dezine adapts to your needs with specific toolkits."
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
                        Built for Your <span className='text-primary'>Specific Role</span>
                    </Heading>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {roles.map((role, idx) => {
                        const isActive = activeRole === idx;
                        const Icon = role.icon;
                        const ActiveIcon = role.activeIcon;

                        return (
                            <motion.div
                                key={idx}
                                onClick={() => setActiveRole(idx)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background landing border border-slate-200 dark:border-navy-700 rounded-[2.5rem] p-8 lg:p-10 hover:shadow-2xl hover:border-brandText/30 dark:hover:border-royal-400/30 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Top Row: Icon and Chart */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-500/10 dark:to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                                <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 z-10 ${isActive
                                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/40 -translate-y-1'
                                    : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50'
                                    }`}>
                                    <div className="relative w-6 h-6 md:w-7 md:h-7">
                                        {/* Outline Icon (Inactive State) */}
                                        <Icon
                                            className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${isActive ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                                            strokeWidth={2}
                                        />
                                        {/* Filled/Active Icon (Active State) */}
                                        <ActiveIcon
                                            className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${isActive ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                </div>

                                <div className={`relative z-10 text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                                    {role.title}
                                </div>

                                <h3 className={`relative z-10 text-2xl font-bold mb-4 transition-colors font-display ${isActive ? 'text-primary' : 'text-slate-700'}`}>
                                    {role.headline}
                                </h3>

                                <p className={`relative z-10 text-[15px] leading-relaxed mb-6 md:mb-8 flex-grow transition-colors ${isActive ? 'text-slate-600' : 'text-slate-500'}`}>
                                    {role.description}
                                </p>

                                <div className={`relative z-10 space-y-3 pt-6 border-t border-slate-100 dark:border-white/5 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-60'}`}>
                                    {role.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                                <Check size={12} className={`${isActive ? 'text-white' : 'text-slate-400'}`} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm font-medium transition-colors ${isActive ? 'text-card-active' : 'text-card'}`}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RoleBasedFeatures;