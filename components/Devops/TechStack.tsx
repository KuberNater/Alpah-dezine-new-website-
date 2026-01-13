
import { stack } from '@/data/Devops.data';
import React from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';
import { Card } from '../ui/card';

const TechStack: React.FC = () => {

    return (
        <section className="py-16 md:py-24 w-full bg-background landing transition-colors duration-300 relative overflow-hidden">
            <MaxWidth>
                <Heading
                    badgeText='Technology'
                    align='center'
                    subtitle='No bloat. No hype. Just the right tools for the job.'>
                    We use what <span className="text-primary">works.</span>
                </Heading>

                <div className="flex flex-wrap justify-center gap-6">
                    {stack.map((item, i) => (
                        <Card
                            key={i}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-background border border-border dark:shadow-zinc-800 p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:hover:shadow-brand-500/5 flex flex-col gap-5"
                        >
                            <div className="flex items-center gap-4 ">
                                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-6 h-6 text-primary`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.category}</h3>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 text-sm  leading-relaxed grow">
                                {item.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.techs.map((tech, t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 group-hover:border-primary/30 group-hover:text-primary transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Constantly updated to latest stable versions
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default TechStack;