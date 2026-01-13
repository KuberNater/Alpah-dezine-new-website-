"use client"
import { agentCapabilities, demoDialogs } from '@/data/AiAgent.data';
import { Bot, Send, Terminal, User } from 'lucide-react';
import React, { useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

const Capabilities: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <section className="py-16 md:py-24 bg-background landing transition-colors duration-500">
            <MaxWidth>
                <Heading
                    badgeText="Interactive Demo"
                    subtitle="Select a skill to see the agent logic"
                    align='left'
                >
                    Choose a <span className="text-primary">Skill.</span>
                </Heading>

                <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* Capability Selection */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                        {agentCapabilities.map((cap, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIdx(i)}
                                className={`p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all text-left flex items-start gap-4 md:gap-5 group active:scale-95 ${activeIdx === i
                                    ? 'bg-background border-brand-500 shadow-xl lg:scale-[1.02]'
                                    : 'bg-transparent border-slate-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeIdx === i ? 'bg-brand-500 text-primary bg-slate-100 dark:bg-zinc-800' : 'bg-slate-100 dark:bg-zinc-800 text-slate-400'
                                    }`}>
                                    <cap.icon className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <h3 className={`text-base md:text-lg font-bold mb-0.5 ${activeIdx === i ? 'text-primary' : 'text-slate-500'}`}>{cap.title}</h3>
                                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light line-clamp-2">
                                        {cap.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Interactive Terminal Display */}
                    <div className="lg:col-span-7 sticky top-20 md:top-24">
                        <div className="bg-zinc-900 rounded-xl md:rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col min-h-[320px] md:min-h-[380px]">
                            <div className="bg-zinc-800/50 p-3 md:p-4 border-b border-zinc-800 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                                    <span className="text-[8px] md:text-[9px] font-mono font-bold text-white uppercase tracking-widest">Logic Preview</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                </div>
                            </div>

                            <div className="p-4 md:p-6 grow flex flex-col gap-4 md:gap-5 overflow-y-auto max-h-[300px]">
                                {/* User message */}
                                <div className="flex items-start gap-2 md:gap-3 self-end max-w-[85%] animate-in slide-in-from-right-4 duration-500">
                                    <div className="bg-brand-500 text-white p-2.5 md:p-3 rounded-lg md:rounded-xl rounded-tr-none text-[11px] md:text-xs font-medium shadow-lg">
                                        {demoDialogs[activeIdx].user}
                                    </div>
                                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-primary flex items-center justify-center text-background shrink-0">
                                        <User className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Bot thinking placeholder */}
                                <div className="flex items-center gap-2 text-[8px] md:text-[9px] font-mono text-zinc-500 uppercase tracking-widest ml-8 md:ml-10">
                                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-brand-500 rounded-full animate-ping"></span>
                                    Engine: {demoDialogs[activeIdx].status}
                                </div>

                                {/* Bot response */}
                                <div className="flex items-start gap-2 md:gap-3 max-w-[90%] animate-in slide-in-from-left-4 duration-700 delay-300">
                                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-primary flex items-center justify-center text-background shrink-0">
                                        <Bot className="w-3 h-3" />
                                    </div>
                                    <div className="bg-zinc-800/50 border border-zinc-700/50 text-zinc-200 p-3 md:p-4 rounded-lg md:rounded-xl rounded-tl-none text-[11px] md:text-xs leading-relaxed shadow-sm">
                                        {demoDialogs[activeIdx].bot}
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 md:p-4 bg-zinc-950/50 border-t border-zinc-800 mt-auto flex items-center gap-2 md:gap-3">
                                <div className="grow bg-zinc-800/50 border border-zinc-700/50 rounded-md md:rounded-lg px-3 py-2 text-[9px] md:text-[10px] text-zinc-500 font-mono italic truncate">
                                    Select another skill to compare...
                                </div>
                                <button className="w-7 h-7 md:w-8 md:h-8 rounded-md md:rounded-lg bg-brand-500 text-white flex items-center justify-center opacity-40">
                                    <Send className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Capabilities;
