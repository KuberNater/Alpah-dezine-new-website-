import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import Heading from '../Heading';
import Link from 'next/link';

const Cta: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-4 landing bg-background w-full transition-colors duration-300">
            <div className="max-w-5xl mx-auto relative">
                {/* Floating Card */}
                <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-700 relative overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-500">
                    {/* Background Decor */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500"></div>
                    {/* <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div> */}
                    {/* <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-50 dark:bg-teal-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div> */}

                    <Heading
                        subtitle="Join the 250+ institutions that have modernized their licensing workflow."
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
                        Ready to transform<span className='text-primary'> your operations?</span>
                    </Heading>


                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 relative z-10">
                        <Button asChild className="w-full sm:w-auto group text-navy-950 bg-background  dark:text-white font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-5 py-2.5 px-10 rounded-2xl border border-slate-200 dark:border-navy-800 hover:border-primary/40 hover:bg-white dark:hover:bg-navy-900 shadow-sm transition-all duration-300 cursor-pointer min-h-[58px]">
                            <Link href={"/contact-us"}>
                                Start Your Pilot
                                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-navy-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 ">
                                    <ArrowRight size={18} />
                                </div>
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium text-slate-400 relative z-10">
                        <span className="flex items-center gap-2"><Check size={16} className="text-teal-500" /> Full Access</span>
                        <span className="flex items-center gap-2"><Check size={16} className="text-teal-500" /> Up to 50 Approvals</span>
                        <span className="flex items-center gap-2"><Check size={16} className="text-teal-500" /> Zero Risk</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;