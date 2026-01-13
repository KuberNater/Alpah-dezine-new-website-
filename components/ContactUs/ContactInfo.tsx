import React from 'react';
import { Mail, Phone, Globe, ArrowUpRight, MapPin } from 'lucide-react';
import { locations } from '@/data/contact.data';

const ContactInfo: React.FC = () => {


    return (
        <div className="flex flex-col h-full gap-4 sm:gap-5">

            {/* Intro Text */}
            <div className="mb-1 text-center lg:text-left">
                <h3 className="font-display font-extrabold text-lg sm:text-xl mb-2 sm:mb-3 text-primary w-fit mx-auto lg:mx-0">
                    Let's build something great.
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm">
                    We're open for new projects and collaborations. Whether you have a question or just want to say hi, we'll try our best to get back to you!
                </p>
            </div>

            {/* Email Card */}
            <a
                href="mailto:sales@alphadezine.com"
                className="group block p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 hover:shadow-lg dark:hover:bg-zinc-800/80 transform transition-all duration-300 hover:-translate-y-0.5 border border-slate-100 dark:border-zinc-800 hover:border-primary/20 dark:hover:border-primary/30 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                            <span className="block font-semibold text-[10px] sm:text-xs text-primary/70 uppercase tracking-wider mb-0.5 truncate">Sales & Inquiries</span>
                            <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-white group-hover:text-primary transition-colors truncate block">sales@alphadezine.com</span>
                        </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
            </a>

            {/* Offices Section Header */}
            <div className="pt-1">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 dark:bg-zinc-800 flex items-center justify-center">
                        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base tracking-tight text-slate-800 dark:text-white">Global Hubs</h4>
                </div>

                {/* Office Cards Stack */}
                <div className="grid gap-2.5 sm:gap-3">
                    {locations.map((loc, idx) => (
                        <div
                            key={idx}
                            className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/30 hover:-translate-y-0.5 overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2.5 sm:gap-3">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h5 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                                            {loc.company}
                                        </h5>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wide bg-primary/5 dark:bg-zinc-800 text-primary border border-primary/10 dark:border-zinc-700">
                                            {loc.country}
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-zinc-500 mt-0.5 shrink-0 group-hover:text-primary/60 transition-colors" />
                                        <div className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
                                            {loc.address.map((line, i) => (
                                                <span key={i} className="block">{line}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-0.5">
                                    <a
                                        href={`tel:${loc.tel}`}
                                        className="inline-flex items-center justify-center w-full sm:w-auto gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-white bg-slate-50 dark:bg-zinc-800 hover:bg-primary hover:text-white px-3 py-2 rounded-lg transition-all duration-300 group/btn border border-transparent hover:shadow-md hover:shadow-primary/20"
                                    >
                                        <Phone className="w-3 h-3 text-slate-400 group-hover/btn:text-white transition-colors" />
                                        {loc.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;