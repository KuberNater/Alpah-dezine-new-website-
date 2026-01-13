import React from 'react';
import { Layers, Zap, Database, Check, Cpu, Globe, ArrowRightLeft, Webhook, Code2, PlugZap, UploadCloud, ShoppingCart, MessageSquare, Calculator } from 'lucide-react';
import Heading from '../Heading';

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="py-16 md:py-24 landing bg-background transition-colors duration-300 relative overflow-hidden w-full">
            {/* Background Noise */}
            {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div> */}

            {/* Ambient Orbs */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Heading
                    badgeText="One Platform"
                    badgeIcon={<></>}
                    subtitle=""
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
                    Three Solutions, <span className='text-primary'>One Platform </span>
                </Heading>
                {/* <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold tracking-widest uppercase text-[10px] mb-4">One Platform</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white tracking-tight">
                        Three Solutions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-300">One Platform</span>
                    </h2>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                    {/* 1. Approval Portal */}
                    <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border-t border-white/60 dark:border-white/5 shadow-xl flex flex-col h-full lg:row-span-1 hover:border-blue-300/30 transition-colors duration-300 group">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/5 rounded-2xl flex items-center justify-center text-blue-500 mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Layers size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 font-display">Approval Portal</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium text-base md:text-lg">
                            At its core, this is about centralizing every licensing decision in one secure workspace.
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 mb-8 text-sm leading-relaxed">
                            Our intention was to replace email chaos with a purpose-built approval workflow:
                        </p>

                        <ul className="space-y-4 mt-auto">
                            {[
                                "Drag-and-drop submission for vendors (artwork, mockups, product specs)",
                                "Automated routing to the right reviewers based on product category",
                                "Side-by-side comparison of original assets vs. submitted designs",
                                "Brand-guideline integration with automatic compliance flagging",
                                "Mobile-friendly approval from anywhere",
                                "Complete audit trail for every decision"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-blue-600 dark:text-blue-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Automation Engine */}
                    <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border-t border-white/60 dark:border-white/5 shadow-xl flex flex-col h-full hover:border-teal-300/30 transition-colors duration-300 group">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-500/10 dark:to-teal-500/5 rounded-2xl flex items-center justify-center text-teal-500 mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Cpu size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 font-display">Automation Engine</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium text-base md:text-lg">
                            What we've created is a system that handles repetitive tasks, allowing you to focus on strategy.
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 mb-8 text-sm leading-relaxed">
                            The software automates what shouldn't require human attention:
                        </p>

                        <ul className="space-y-4 mt-auto">
                            {[
                                { text: "Smart categorization using AI to tag products, assign reviewers, set priority", icon: <Zap size={16} /> },
                                { text: "Live Tracking of Reports delivered to stakeholders (weekly approval metrics, royalty summaries)", icon: <Database size={16} /> },
                                { text: "Compliance alerts when submissions violate brand guidelines", icon: <Check size={16} /> },
                                { text: "Renewal reminders for expiring licenses", icon: <ArrowRightLeft size={16} /> },
                                { text: "Royalty calculations based on your custom agreements", icon: <Calculator size={16} /> }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                                    <div className="mt-0.5 w-6 h-6 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center shrink-0 text-teal-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-snug">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. Integration Framework (Full Width) */}
                    <div className="lg:col-span-2 glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border-t border-white/60 dark:border-white/5 shadow-xl overflow-hidden relative hover:border-indigo-300/30 transition-colors duration-300 group">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

                            {/* Intro Side */}
                            <div className="lg:col-span-1">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-500/10 dark:to-indigo-500/5 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Globe size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 font-display">Integration Framework</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium text-base md:text-lg">
                                    We believe technology should connect to your existing tools and not replace them.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 mb-8 text-sm leading-relaxed">
                                    Our platform syncs seamlessly with the systems you already use:
                                </p>

                                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">How it works</div>
                                    {[
                                        { label: "Bi-directional sync", icon: <ArrowRightLeft size={16} /> },
                                        { label: "REST API for custom integrations", icon: <Code2 size={16} /> },
                                        { label: "Webhook support", icon: <Webhook size={16} /> },
                                        { label: "Pre-built connectors (<1 week)", icon: <PlugZap size={16} /> }
                                    ].map((tech, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                            <span className="text-indigo-400">{tech.icon}</span>
                                            {tech.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Table Side */}
                            <div className="lg:col-span-2 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-4 md:p-6 overflow-x-auto">
                                <div className="min-w-[500px]">
                                    <div className="grid grid-cols-12 gap-6 pb-4 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        <div className="col-span-4 pl-2">Category</div>
                                        <div className="col-span-8">Platforms</div>
                                    </div>

                                    <div className="space-y-6 mt-6">
                                        {[
                                            { cat: "Licensing Management", platforms: "Learfield, Fermata Partners, Exemplar Associates, Licensing Resource Group (LRG), Fanatics College, Affinity Licensing", icon: <Check size={16} className="text-indigo-500" /> },
                                            { cat: "Accounting / ERP", platforms: "QuickBooks, NetSuite, SAP", icon: <Calculator size={16} className="text-indigo-500" /> },
                                            { cat: "File Storage", platforms: "Dropbox, Google Drive, Box, SharePoint", icon: <UploadCloud size={16} className="text-indigo-500" /> },
                                            { cat: "E-commerce", platforms: "Shopify, WooCommerce, Fanatics", icon: <ShoppingCart size={16} className="text-indigo-500" /> },
                                            { cat: "Communication", platforms: "Microsoft Teams, Email, Slack", icon: <MessageSquare size={16} className="text-indigo-500" /> }
                                        ].map((row, i) => (
                                            <div key={i} className="grid grid-cols-12 gap-6 items-start group/row">
                                                <div className="col-span-4 flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200 text-sm">
                                                    <div className="p-1.5 bg-white dark:bg-white/10 rounded-md shadow-sm text-indigo-500 shrink-0 group-hover/row:scale-110 transition-transform">
                                                        {row.icon}
                                                    </div>
                                                    {row.cat}
                                                </div>
                                                <div className="col-span-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover/row:text-slate-900 dark:group-hover/row:text-slate-300 transition-colors">
                                                    {row.platforms}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solutions;