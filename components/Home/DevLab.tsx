"use client"
import { AGENT_TYPES } from "@/data/home.data";

import {
    AlertCircle,
    Bot,
    CheckCircle2,
    Loader2,
    Lock,
    RefreshCcw,
    Send,
    ShieldAlert,
    Terminal as TerminalIcon,
    User,
    UserCheck,
    Zap
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';

type SimStatus = 'idle' | 'processing' | 'reviewing' | 'authorized';

export const DevLab: React.FC = () => {
    const [selectedAgent, setSelectedAgent] = useState(AGENT_TYPES[0]);
    const [scenario, setScenario] = useState(AGENT_TYPES[0].defaultScenario);
    const [status, setStatus] = useState<SimStatus>('idle');
    const [missionResult, setMissionResult] = useState<string | null>(null);
    const [logs, setLogs] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [auditMode, setAuditMode] = useState(true);

    // Derived state for button disabled conditions
    const isProcessingOrReviewing = status === 'processing' || status === 'reviewing';
    const canInteract = status === 'idle' || status === 'authorized';

    // Reset state helper
    const resetState = useCallback(() => {
        setMissionResult(null);
        setStatus('idle');
    }, []);

    useEffect(() => {
        setScenario(selectedAgent.defaultScenario);
        setMissionResult(null);
        setLogs([]);
        setStatus('idle');
    }, [selectedAgent]);

    const runSimulation = useCallback(async () => {
        if (!scenario.trim()) return;

        setStatus('processing');
        setError(null);
        setMissionResult(null);
        setLogs([`System: Initializing ${selectedAgent.name}`, "System: Accessing internal policy database..."]);

        try {
            await new Promise(r => setTimeout(r, 600));
            setLogs((prev: string[]) => [...prev, "AI: Scanning scenario for decision nodes..."]);
            await new Promise(r => setTimeout(r, 800));
            setLogs((prev: string[]) => [...prev, "AI: Drafting proposal based on Corporate SOP v4.2..."]);

            // SIMULATED HARDCODED RESPONSES
            const SIMULATED_RESPONSES = [
                `1. ANALYSIS: Detected critical potential for SQL injection in the legacy reporting module due to unsanitized input concatenation. \n\n2. PROPOSED ACTION: Refactor the query builder to use parameterized statements. Implement strict input validation middleware using the Zod schema library to reject malformed payloads before they reach the database layer.\n\n3. POLICY ALIGNMENT: Mandated by "Secure Coding Standard v2.1" (SOP-SEC-01) to prevent data exfiltration.`,

                `1. ANALYSIS: The current microservice deployment pipeline lacks automated rollback triggers for high error rate anomalies, risking prolonged downtime.\n\n2. PROPOSED ACTION: Integrate Prometheus alerts into the CI/CD workflow. Configure a canary deployment strategy that automatically rolls back traffic if error rates exceed 1% within the first 5 minutes of release.\n\n3. POLICY ALIGNMENT: Adheres to "Service Reliability & Uptime" protocols (SOP-OPS-05).`,

                `1. ANALYSIS: User session tokens are persisting beyond the authorized expiry window when the browser tab is closed, creating a session hijacking window.\n\n2. PROPOSED ACTION: Switch from localStorage to httpOnly cookies for token storage. Implement a 'heartbeat' check on the client-side to actively validate session status vs. the server every 60 seconds.\n\n3. POLICY ALIGNMENT: Complies with "Identity & Access Management" guidelines (SOP-IAM-08).`
            ];

            // SIMULATE NETWORK DELAY (500ms - 1000ms)
            await new Promise(r => setTimeout(r, Math.random() * 500 + 500));

            const randomResponse = SIMULATED_RESPONSES[Math.floor(Math.random() * SIMULATED_RESPONSES.length)];

            // SIMULATE TYPING EFFECT OR JUST SET
            // The existing code just sets the text.
            setMissionResult(randomResponse);

            if (auditMode) {
                setLogs((prev: string[]) => [...prev, "System: Generation complete. HOLDING FOR HUMAN REVIEW."]);
                setStatus('reviewing');
            } else {
                setLogs((prev: string[]) => [...prev, "System: Generation complete. BYPASSING REVIEW (AUTO-EXECUTE).", "System: Executing action across enterprise systems..."]);
                setStatus('authorized');
                setTimeout(() => {
                    setLogs((prev: string[]) => [...prev, "System: DEPLOYMENT SUCCESSFUL."]);
                }, 1200);
            }
        } catch {
            setError("Sync failed. Check API configuration.");
            setStatus('idle');
        }
    }, [scenario, selectedAgent.name, auditMode]);

    const handleAuthorize = useCallback(() => {
        setStatus('processing');
        setLogs((prev: string[]) => [...prev, "Human: AUTHORIZED.", "System: Executing action across enterprise systems..."]);
        setTimeout(() => {
            setStatus('authorized');
            setLogs((prev: string[]) => [...prev, "System: DEPLOYMENT SUCCESSFUL."]);
        }, 1200);
    }, []);

    const toggleAuditMode = useCallback(() => {
        setAuditMode((prev: boolean) => !prev);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-background landing w-full transition-colors duration-700 relative overflow-hidden" id="agent-lab">
            <MaxWidth>
                <Heading
                    badgeText="Human-In-The-Loop Engineering"
                    badgeIcon={<Lock size={12} />}
                    subtitle="Our agents don't make rogue decisions. They analyze, propose, and wait for your green light—ensuring 100% human oversight for every critical action."
                    containerClassName="mb-16 px-4 md:px-0"
                    subtitleClassName="max-w-2xl"
                >
                    Safe AI <span className="text-primary">Deployment.</span>
                </Heading>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Side Panel: Selector & Input */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-8 shadow-sm transition-colors">
                            <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">1. Deploy Archetype</h3>

                            <div className="space-y-2.5 mb-8">
                                {AGENT_TYPES.map((agent) => (
                                    <button
                                        key={agent.id}
                                        onClick={() => setSelectedAgent(agent)}
                                        disabled={!canInteract}
                                        className={`w-full group flex items-center gap-4 p-4 rounded-2xl border transition-all text-left min-h-[72px] ${selectedAgent.id === agent.id
                                            ? 'bg-transparent dark:bg-zinc-800 border-primary/40 dark:border-primary/60 shadow-lg'
                                            : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-zinc-800/50 text-slate-400'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${selectedAgent.id === agent.id ? 'bg-primary dark:bg-primary text-white shadow-lg' : 'bg-slate-100 dark:bg-zinc-800 dark:text-slate-400'
                                            }`}>
                                            <agent.icon size={18} />
                                        </div>
                                        <div>
                                            <div className={`text-xs font-black transition-colors ${selectedAgent.id === agent.id ? 'text-primary dark:text-white uppercase tracking-tight' : 'text-slate-600 dark:text-slate-400'}`}>
                                                {agent.name}
                                            </div>
                                            <div className="text-[9px] font-medium leading-tight text-slate-500 dark:text-slate-400 mt-0.5">
                                                {agent.desc}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">2. Define Mission</h3>
                                <textarea
                                    value={scenario}
                                    onChange={(e) => setScenario(e.target.value)}
                                    disabled={!canInteract}
                                    className="w-full h-32 cursor-not-allowed pointer-events-none bg-white dark:bg-zinc-800 rounded-2xl p-4 text-xs font-medium border border-slate-200 dark:border-zinc-700 focus:ring-2 ring-primary/20 outline-none resize-none transition-all dark:text-white disabled:opacity-50"
                                    aria-label="Mission scenario description"
                                />
                                <button
                                    onClick={runSimulation}
                                    disabled={isProcessingOrReviewing || !scenario.trim()}
                                    className="w-full h-[58px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-[10px] uppercase tracking-widest rounded-xl shadow-xl hover:bg-primary dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 disabled:bg-slate-100 dark:disabled:bg-zinc-800 disabled:text-slate-400 dark:disabled:text-slate-500"
                                >
                                    {status === 'processing' ? <Loader2 className="animate-spin" size={14} /> : <Zap size={14} />}
                                    Start Analysis
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={toggleAuditMode}
                            disabled={isProcessingOrReviewing}
                            className={`w-full p-6 border rounded-3xl flex items-center gap-4 transition-all text-left relative overflow-hidden group ${auditMode
                                ? 'bg-white dark:bg-zinc-900 border-primary/40 dark:border-primary/60 shadow-lg ring-1 ring-primary/10 dark:ring-primary/20'
                                : 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800'
                                } ${isProcessingOrReviewing ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 active:scale-[0.98]'}`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all border ${auditMode
                                ? 'bg-primary dark:bg-primary text-white border-primary/30 dark:border-primary/50 shadow-primary/20'
                                : 'bg-slate-100 dark:bg-zinc-800 text-slate-400 border-slate-200 dark:border-zinc-700'
                                }`}>
                                <UserCheck size={20} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className={`text-[9px] font-black uppercase tracking-widest mb-1 transition-colors ${auditMode ? 'text-primary dark:text-primary' : 'text-slate-400'}`}>
                                    {auditMode ? 'Audit Mode Active' : 'Auto-Execute Mode'}
                                </div>
                                <div className={`text-xs font-black uppercase tracking-tight transition-colors ${auditMode ? 'text-primary dark:text-white' : 'text-slate-500'}`}>
                                    {auditMode ? 'Manager Approval Required' : 'Bypass Manual Review'}
                                </div>
                            </div>
                            {auditMode && (
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                            )}
                        </button>
                    </div>

                    {/* Main Dashboard Panel */}
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl h-full flex flex-col overflow-hidden relative transition-colors">

                            {/* Dashboard Header */}
                            <div className="px-6 md:px-8 py-6 border-b border-slate-100 dark:border-zinc-700 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary dark:bg-primary text-white flex items-center justify-center ring-2 ring-white dark:ring-zinc-900 shadow-lg">
                                            <Bot size={14} />
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center ring-2 ring-white dark:ring-zinc-900 shadow-lg">
                                            <User size={14} />
                                        </div>
                                    </div>
                                    <div className="h-4 w-px bg-slate-200 dark:bg-navy-800 hidden sm:block" />
                                    <div className="flex flex-col">
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 truncate max-w-[120px] sm:max-w-none">Sync Interface</span>
                                        {!auditMode && <span className="text-[8px] font-black text-primary dark:text-royal-400 uppercase tracking-widest">Auto-Auth Engaged</span>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${status === 'processing' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                                    <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{status === 'idle' ? 'Ready' : status.toUpperCase()}</span>
                                </div>
                            </div>

                            {/* Main Workspace */}
                            <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-navy-700 overflow-hidden">

                                {/* Left: Telemetry Log (Simulated Terminal) */}
                                <div className="w-full md:w-1/3 p-6 bg-slate-50/30 dark:bg-navy-950/40 overflow-y-auto custom-scrollbar max-h-[160px] md:max-h-none transition-colors">
                                    <div className="flex items-center gap-2 mb-6">
                                        <TerminalIcon size={12} className="text-primary dark:text-royal-300" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">System Logs</span>
                                    </div>
                                    <div className="space-y-4 font-mono">
                                        {logs.length === 0 && <div className="text-[11px] text-slate-300 dark:text-slate-500 italic">Waiting for connection...</div>}
                                        {logs.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`text-[11px] leading-relaxed flex gap-2 ${log.startsWith('AI:') ? 'text-primary dark:text-royal-300 font-medium' :
                                                    log.startsWith('Human:') ? 'text-emerald-600 dark:text-emerald-400 font-black' :
                                                        log.startsWith('System: BYPASS') ? 'text-amber-600 dark:text-amber-400 font-black' :
                                                            'text-slate-500 dark:text-slate-500'
                                                    }`}
                                            >
                                                <span className="opacity-30 font-bold">›</span> {log}
                                            </motion.div>
                                        ))}
                                        {status === 'processing' && (
                                            <div className="flex items-center gap-2 text-[11px] text-primary dark:text-royal-400 animate-pulse font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-royal-400" />
                                                <span>Computing Logic...</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Proposal & Interaction Area */}
                                <div className="flex-1 p-6 md:p-10 flex flex-col dark:bg-navy-900 overflow-y-auto custom-scrollbar transition-colors">
                                    <AnimatePresence mode="wait">
                                        {status === 'idle' ? (
                                            <motion.div
                                                key="idle"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="h-full flex flex-col items-center justify-center text-center py-12"
                                            >
                                                <div className="w-20 h-20 rounded-[2.5rem] bg-slate-50 dark:bg-navy-950 flex items-center justify-center text-slate-300 dark:text-slate-500 mb-6 border border-slate-100 dark:border-navy-700 shadow-inner">
                                                    <selectedAgent.icon size={36} />
                                                </div>
                                                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-2">Workspace Inactive</h4>
                                                <p className="text-[11px] text-slate-400 dark:text-slate-400 max-w-[240px] leading-relaxed font-medium">Input a mission parameter to trigger the analysis engine.</p>
                                            </motion.div>
                                        ) : status === 'processing' ? (
                                            <motion.div key="processing" className="h-full flex flex-col items-center justify-center py-12">
                                                <div className="relative w-16 h-16 mb-8">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                        className="absolute inset-0 rounded-full border-2 border-slate-100 dark:border-navy-800 border-t-primary dark:border-t-royal-400"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center text-primary dark:text-royal-400">
                                                        <Zap size={24} className="animate-pulse" />
                                                    </div>
                                                </div>
                                                <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Generating Action Plan</div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="result"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="h-full flex flex-col"
                                            >
                                                <div className={`flex items-center justify-between mb-8 p-4 rounded-2xl border transition-colors ${status === 'authorized' ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-800' : 'bg-primary/5 dark:bg-primary/10 border-primary/10 dark:border-primary/20'}`}>
                                                    <div className="flex items-center gap-3">
                                                        {status === 'authorized' ? <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" /> : <ShieldAlert size={18} className="text-primary dark:text-royal-400" />}
                                                        <span className={`text-[10px] font-black uppercase tracking-widest ${status === 'authorized' ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary dark:text-royal-400'}`}>
                                                            {status === 'authorized' ? 'Mission Executed' : 'Action Draft'}
                                                        </span>
                                                    </div>
                                                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest hidden xs:block">SOP V.4.2</div>
                                                </div>

                                                <div className="flex-1 bg-slate-50 dark:bg-navy-950 rounded-4xl md:rounded-[2.5rem] p-6 md:p-8 border border-slate-100 dark:border-navy-800 mb-8 relative group min-h-[200px] transition-colors">
                                                    <div className="absolute top-6 right-8 text-primary/5 dark:text-royal-400/5 group-hover:text-primary/10 dark:group-hover:text-royal-400/10 transition-colors hidden sm:block">
                                                        <selectedAgent.icon size={56} />
                                                    </div>
                                                    <div className="prose prose-sm max-w-none text-slate-600 dark:text-slate-300 font-bold leading-relaxed whitespace-pre-wrap relative z-10 text-[11px] md:text-sm">
                                                        {missionResult}
                                                    </div>
                                                </div>

                                                <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
                                                    {status === 'reviewing' ? (
                                                        <>
                                                            <button
                                                                onClick={handleAuthorize}
                                                                className="flex-1 w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group/btn min-h-[58px]"
                                                            >
                                                                Authorize & Execute <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                            </button>
                                                            <button
                                                                onClick={resetState}
                                                                className="flex-1 w-full py-5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-400 hover:text-red-500 dark:hover:text-red-400 font-black text-[10px] uppercase tracking-widest rounded-xl transition-all min-h-[58px]"
                                                            >
                                                                Discard Proposal
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <button
                                                            onClick={resetState}
                                                            className="w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-[10px] uppercase tracking-widest rounded-xl shadow-xl hover:shadow-2xl dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-3 group min-h-[58px]"
                                                        >
                                                            Archive Mission <RefreshCcw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                                                        </button>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {error && (
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400 font-black text-[10px] uppercase tracking-widest shadow-2xl z-50">
                                    <AlertCircle size={14} /> {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};
