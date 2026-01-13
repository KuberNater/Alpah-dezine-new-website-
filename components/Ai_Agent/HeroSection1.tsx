"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, UserCheck, XCircle, FileSearch, MessageSquare, AlertTriangle, Fingerprint, Activity } from 'lucide-react';
import MaxWidth from '../MaxWidth';
import Heading from '../Heading';

const HeroSection1: React.FC = () => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const stageTimings = [2000, 1000, 2000, 2000, 1500, 2000, 4500];
    const timer = setTimeout(() => {
      setStage((prev) => (prev + 1) % stageTimings.length);
    }, stageTimings[stage]);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <section className="relative w-full min-h-screen landing bg-background flex flex-col items-center justify-start pt-32 pb-24 px-6 overflow-hidden">
      <MaxWidth>
        {/* Hero Heading Section */}
        <Heading
          badgeText="Governance-First Architecture"
          badgeIcon={<ShieldCheck className="w-4 h-4" />}
          decorativeText="they're supposed to."
          subtitle="Alpha Dezine designs, builds, and deploys Copilot-powered AI agents that handle repetitive work, respond faster, and stay accurate—without sacrificing security or control."
        >
          AI agents that do what <br />
        </Heading>

        {/* DECISION ENGINE VISUALIZATION */}
        <div className="w-full max-w-3xl">
          <div className="bg-card rounded-2xl md:rounded-4xl border border-border p-5 md:p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] dark:shadow-none relative overflow-hidden">

            <div className="flex flex-col items-center">

              {/* 1. PERSISTENT INPUT CARD */}
              <div className={`w-full max-w-md transition-all duration-700 ${stage === 0 ? 'scale-[1.02] opacity-100' : 'scale-100 opacity-60'}`}>
                <div className="bg-muted dark:bg-secondary p-4 md:p-5 rounded-xl md:rounded-2xl border border-border shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-primary/20 shrink-0">
                      <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Case #902</div>
                      <div className="text-sm md:text-base font-bold text-foreground truncate">"Request $850 Refund"</div>
                    </div>
                  </div>
                  <div className="hidden sm:block px-2 py-1 rounded-md bg-card text-[8px] font-mono font-bold uppercase text-muted-foreground border border-border shrink-0">
                    Awaiting
                  </div>
                </div>
              </div>

              {/* Central Path Connector */}
              <div className="w-px h-8 md:h-10 bg-linear-to-b from-border to-primary/30 my-1"></div>

              {/* 2. UNIFIED CONTEXTUAL EVALUATION HUB */}
              <div className={`w-full max-w-2xl p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-700 relative border ${stage >= 1 && stage <= 4
                ? 'bg-primary/4 dark:bg-primary/6 border-primary/30 shadow-inner'
                : 'bg-transparent border-transparent'
                }`}>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center">

                  {/* Internal Factor A: Policy Check */}
                  <div className={`flex items-center gap-3 transition-all duration-500 ${stage === 2 ? 'opacity-100 scale-105' : stage > 2 ? 'opacity-50 grayscale-[0.2]' : 'opacity-25'
                    }`}>
                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border-2 transition-colors ${stage === 2 ? 'border-primary bg-card text-accent shadow-md' : 'border-border text-muted-foreground'
                      }`}>
                      <FileSearch className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Max Auto-Limit</div>
                      <div className="text-xs md:text-sm font-black text-foreground">$500 Threshold</div>
                    </div>
                    {stage >= 2 && (
                      <div className={`transition-opacity duration-500 ${stage > 2 ? 'opacity-100' : 'opacity-0'}`}>
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-8 bg-border"></div>

                  {/* Internal Factor B: Risk Scoring */}
                  <div className={`flex items-center gap-3 transition-all duration-500 ${stage === 3 ? 'opacity-100 scale-105' : stage > 3 ? 'opacity-50 grayscale-[0.2]' : 'opacity-25'
                    }`}>
                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border-2 transition-colors ${stage === 3 ? 'border-primary bg-card text-accent shadow-md' : 'border-border text-muted-foreground'
                      }`}>
                      <Fingerprint className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Risk Score</div>
                      <div className="text-xs md:text-sm font-black text-foreground">12 (Low Risk)</div>
                    </div>
                    {stage >= 3 && (
                      <div className={`transition-opacity duration-500 ${stage > 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                    )}
                  </div>

                </div>

                {/* Processing Indicator */}
                {(stage === 2 || stage === 3) && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Activity className="w-3 h-3 text-accent animate-pulse" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent">Evaluating...</span>
                  </div>
                )}
              </div>

              {/* 3 & 4. THE DECISION FORK */}
              <div className={`w-full max-w-2xl mt-12 md:mt-14 transition-all duration-1000 ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="grid grid-cols-2 gap-4 md:gap-8 relative">

                  {/* Branching Visualization Line */}
                  <svg className="absolute -top-10 left-0 w-full h-10 overflow-visible" preserveAspectRatio="none">
                    <path d="M 50% 0 L 50% 8 L 25% 8 L 25% 38" className="stroke-border fill-none stroke-2" />
                    <path d="M 50% 0 L 50% 8 L 75% 8 L 75% 38" className={`fill-none stroke-2 transition-all duration-1000 ${stage >= 5 ? 'stroke-amber-500' : 'stroke-border'}`} />
                  </svg>

                  {/* Path A: Approved (Recedes) */}
                  <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all duration-700 flex flex-col items-center ${stage >= 5 ? 'opacity-20 grayscale border-muted scale-95' : 'opacity-100 border-border'
                    }`}>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-2">
                      <Activity className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase text-muted-foreground mb-1">Approved</span>
                    <span className="text-[10px] md:text-xs font-semibold text-muted-foreground">Auto-Process</span>
                  </div>

                  {/* Path B: Escalation (DECISIVE FOCAL POINT) */}
                  <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all duration-700 flex flex-col items-center relative ${stage >= 5
                    ? 'opacity-100 border-amber-500 bg-amber-500/5 shadow-[0_12px_32px_-8px_rgba(245,158,11,0.2)] scale-105'
                    : 'opacity-100 border-border'
                    }`}>
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2 transition-all duration-500 ${stage >= 5 ? 'bg-amber-500 text-white shadow-md' : 'bg-muted text-muted-foreground'
                      }`}>
                      <UserCheck className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className={`text-[9px] md:text-[10px] font-mono font-black uppercase tracking-wider mb-1 ${stage >= 5 ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'}`}>
                      Escalate
                    </span>
                    <span className={`text-[10px] md:text-xs font-bold ${stage >= 5 ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Human Override
                    </span>

                    {stage === 5 && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-500 animate-ping opacity-30"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. FINAL VERDICT JUSTIFICATION */}
              <div className={`mt-10 md:mt-12 w-full max-w-2xl transition-all duration-1000 ${stage === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="bg-muted dark:bg-white/3 border border-amber-500/20 p-4 md:p-6 rounded-xl md:rounded-2xl flex items-start gap-4 shadow-lg">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-amber-500/20">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm md:text-base font-black text-foreground mb-1 uppercase tracking-tight">Justification</h4>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed">
                      Request <span className="text-foreground font-black">$850</span> exceeded <span className="text-foreground font-black">$500</span> limit. Requires <span className="text-amber-600 dark:text-amber-400 font-black">Human Authorization</span>.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Call to Action Controls */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-foreground text-background px-6 py-2.5 rounded-full font-semibold text-base hover:scale-[1.02] transition-all shadow-[0_16px_32px_-8px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3 active:scale-95 group">
              Start Strategy Phase
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </MaxWidth>

    </section>
  );
};

export default HeroSection1;
