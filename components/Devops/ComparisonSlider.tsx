'use client'
import React, { useState } from 'react';
import {
    AlertTriangle,
    GripHorizontal
} from 'lucide-react';
import Heading from '../Heading';
import { features } from '@/data/Devops.data';

const ComparisonSlider: React.FC = () => {
    const [sliderValue, setSliderValue] = useState(100); // 0 to 100

    return (
        <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-300 overflow-hidden relative scroll-mt-32" id="why-us">
            {/* Background Grid Pattern */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header & Control Area */}
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="font-mono text-primary text-sm font-bold tracking-widest uppercase mb-4 block">The Evolution</span>

                    <Heading
                        subtitle=" Drag the slider to see the difference between legacy friction and modern flow."
                        align="center"
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
                        Transform Your <span className="text-primary">Reality</span>
                    </Heading>

                    {/* Interactive Slider Control */}
                    <div className="relative w-full max-w-xl">
                        <div className="flex justify-between mb-4 font-mono text-xs uppercase tracking-widest font-bold">
                            <span className={`transition-colors duration-300 ${sliderValue < 50 ? 'text-destructive' : 'text-muted-foreground'}`}>Legacy Pain</span>
                            <span className={`transition-colors duration-300 ${sliderValue > 50 ? 'text-primary' : 'text-muted-foreground'}`}>Alpha Flow</span>
                        </div>

                        {/* Slider Track - Cylindrical Bar */}
                        <div className="relative h-16 bg-muted rounded-full shadow-inner p-1 flex items-center select-none overflow-hidden border border-border">
                            {/* Labels inside track */}
                            <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none font-bold text-xs tracking-widest z-0">
                                {/* Fade out labels when thumb overlaps them */}
                                <span className={`transition-all duration-300 text-muted-foreground ${sliderValue < 15 ? 'opacity-0 translate-x-2' : 'opacity-30 translate-x-0'}`}>⚡ SLOW</span>
                                <span className={`transition-all duration-300 text-muted-foreground ${sliderValue > 85 ? 'opacity-0 -translate-x-2' : 'opacity-30 translate-x-0'}`}>🚀 FAST</span>
                            </div>

                            {/* Fill Gradient */}
                            <div
                                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-destructive/20 via-transparent to-primary/20"
                                style={{ width: `${sliderValue}%` }}
                            ></div>

                            {/* Range Input (Invisible) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />

                            {/* Custom Thumb - Perfectly Integrated */}
                            {/* We use translateX(-${sliderValue}%) to keep the thumb constrained relative to the progress */}
                            <div
                                className="absolute h-14 w-14 bg-background rounded-full shadow-lg border border-border flex items-center justify-center z-20 pointer-events-none transition-transform duration-75 ease-linear"
                                style={{
                                    left: `${sliderValue}%`,
                                    transform: `translateX(-${sliderValue}%)`
                                }}
                            >
                                <GripHorizontal className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="relative h-80 group perspective-1000 group">
                            {/* The Rotating Container */}
                            <div
                                className="relative w-full h-full duration-150 ease-linear transform-style-3d"
                                style={{ transform: `rotateY(${(sliderValue / 100) * 180}deg)` }}
                            >

                                {/* --- LEGACY FACE (Front / 0deg) --- */}
                                <div className="absolute inset-0 backface-hidden bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-[2.5rem] p-8 flex group-hover:shadow-xl group-hover:dark:shadow-zinc-800 flex-col overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <AlertTriangle className="w-24 h-24 text-destructive" />
                                    </div>

                                    <div className="relative z-10 flex justify-between items-start mb-6">
                                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-opacity duration-300" style={{ opacity: sliderValue < 50 ? 1 : 0 }}>{item.category}</span>
                                        <div className="p-2 bg-muted rounded-2xl border border-border">
                                            {/* Animated Legacy Icon */}
                                            <item.legacy.icon className={`w-6 h-6 text-muted-foreground transition-transform duration-500 ${sliderValue < 50 ? 'scale-100 rotate-0' : 'scale-75 -rotate-12 opacity-50'}`} />
                                        </div>
                                    </div>

                                    <div className={`relative z-10 flex-grow transition-all duration-500 ${sliderValue < 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        <h3 className="text-xl font-bold font-display text-muted-foreground mb-3">{item.legacy.title}</h3>
                                        <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">{item.legacy.desc}</p>
                                    </div>

                                    <div className="relative z-10 mt-6 pt-6 border-t border-muted-foreground/10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
                                        <span className="text-xs font-mono font-bold text-destructive uppercase">{item.legacy.status}</span>
                                    </div>
                                </div>

                                {/* --- ALPHA FACE (Back / 180deg) --- */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-background border border-slate-200 dark:border-navy-700 rounded-[2.5rem] p-8 flex flex-col group-hover:shadow-xl group-hover:dark:shadow-zinc-800 overflow-hidden">

                                    <div className="relative z-10 flex justify-between items-start mb-6">
                                        <span className="font-mono text-xs uppercase tracking-widest text-primary transition-opacity duration-300" style={{ opacity: sliderValue > 50 ? 1 : 0 }}>{item.category}</span>
                                        <div className="w-10 h-10 rounded-2xl bg-secondary hover:bg-primary/10 transition-colors border border-border flex items-center justify-center text-primary shadow-sm">
                                            {/* Animated Alpha Icon */}
                                            <item.alpha.icon className={`w-5 h-5 transition-all duration-500 ${sliderValue > 50 ? 'scale-110 rotate-0' : 'scale-50 rotate-45 opacity-0'}`} />
                                        </div>
                                    </div>

                                    <div className={`relative z-10 flex-grow transition-all duration-500 delay-100 ${sliderValue > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        <h3 className="text-xl font-bold font-display text-foreground mb-3 flex items-center gap-2">
                                            {item.alpha.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.alpha.desc}</p>
                                    </div>

                                    <div className="relative z-10 mt-6 pt-6 border-t border-border flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.6)] ${sliderValue > 50 ? 'animate-pulse' : ''}`}></div>
                                        <span className="text-xs font-mono font-bold text-primary uppercase">{item.alpha.status}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </section>
    );
};

export default ComparisonSlider;