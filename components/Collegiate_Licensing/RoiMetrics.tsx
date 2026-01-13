'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Clock, CheckCircle2, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import {
    LineChart, Line, BarChart, Bar, AreaChart, Area, ResponsiveContainer, YAxis, Cell
} from 'recharts';
import Heading from '../Heading';

// Data for Charts
const timelineData = [
    { name: 'Jan', approvalBefore: 12, approvalAfter: 12, accuracyBefore: 82, accuracyAfter: 85 },
    { name: 'Feb', approvalBefore: 13, approvalAfter: 8, accuracyBefore: 81, accuracyAfter: 92 },
    { name: 'Mar', approvalBefore: 11, approvalAfter: 5, accuracyBefore: 83, accuracyAfter: 96 },
    { name: 'Apr', approvalBefore: 14, approvalAfter: 3, accuracyBefore: 80, accuracyAfter: 99 },
    { name: 'May', approvalBefore: 13, approvalAfter: 2, accuracyBefore: 82, accuracyAfter: 99.8 },
    { name: 'Jun', approvalBefore: 14, approvalAfter: 1.5, accuracyBefore: 81, accuracyAfter: 100 },
];

const costData = [
    { name: 'Q1', before: 5, after: 18 },
    { name: 'Q2', before: 8, after: 35 },
    { name: 'Q3', before: 6, after: 52 },
    { name: 'Q4', before: 7, after: 74 },
];

// Helper Component for Count Up Animation
const CountUp: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string; decimals?: number }> = ({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // EaseOutExpo function for dramatic effect
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            setCount(ease * end);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span>{prefix}{count.toFixed(decimals)}{suffix}</span>
    );
};

const RoiMetrics: React.FC = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const pendingPosition = useRef<number | null>(null);

    // Optimized position update with RAF throttling
    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        // Store pending position
        pendingPosition.current = percentage;

        // Only schedule RAF if not already pending
        if (rafRef.current === null) {
            rafRef.current = requestAnimationFrame(() => {
                if (pendingPosition.current !== null) {
                    setSliderPosition(pendingPosition.current);
                    pendingPosition.current = null;
                }
                rafRef.current = null;
            });
        }
    }, []);

    // Keyboard navigation for accessibility
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            setSliderPosition((prev) => Math.max(0, prev - 5));
        } else if (e.key === 'ArrowRight') {
            setSliderPosition((prev) => Math.min(100, prev + 5));
        }
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (isDragging) {
            updatePosition(e.clientX);
        }
    }, [isDragging, updatePosition]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        updatePosition(e.touches[0].clientX);
    }, [updatePosition]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        updatePosition(e.clientX);
        setIsDragging(true);
    }, [updatePosition]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        updatePosition(e.touches[0].clientX);
        setIsDragging(true);
    }, [updatePosition]);

    const handleInteractionEnd = useCallback(() => {
        setIsDragging(false);
        // Cancel any pending RAF on interaction end
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    }, []);

    // Cleanup RAF on unmount
    useEffect(() => {
        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <section id="results" className="py-16 md:py-24 landing bg-background overflow-hidden transition-colors duration-300 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className=" mb-10 md:mb-16">
                    <Heading
                        subtitle="Compare the legacy manual process against the Alpha Dezine automated platform.<span class='hidden md:block mt-2 text-sm text-slate-400 dark:text-slate-500 font-medium'>(Drag slider or use arrow keys)</span>"
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
                        ROI That <span className='text-primary'>Speaks for Itself</span>
                    </Heading>
                </div>


                {/* Comparison Slider Widget */}
                <div
                    ref={containerRef}
                    className={`
                relative w-full max-w-6xl mx-auto h-[650px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl 
                ring-1 ring-slate-200 dark:ring-white/10 select-none group touch-none
                ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
            `}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleInteractionEnd}
                    onMouseLeave={handleInteractionEnd}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleInteractionEnd}
                    role="slider"
                    aria-valuenow={sliderPosition}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Comparison slider between legacy process and Alpha Dezine"
                >

                    {/* === BEFORE VIEW (Background) === */}
                    <div className="absolute inset-0 bg-slate-100 dark:bg-[#0F172A] flex items-center justify-center">
                        <div className="w-full h-full p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 opacity-100">

                            {/* Metric 1: Legacy Speed */}
                            <MetricCard
                                title="Approval Time"
                                value="14 Days"
                                subtext="Avg. turnaround"
                                icon={<Clock className="text-slate-400" size={20} />}
                                trend="Stagnant"
                                trendColor="text-slate-500"
                                isAfter={false}
                            >
                                <LineChart data={timelineData}>
                                    <Line type="monotone" dataKey="approvalBefore" stroke="#94a3b8" strokeWidth={3} dot={false} />
                                    <YAxis hide domain={[0, 20]} />
                                </LineChart>
                            </MetricCard>

                            {/* Metric 2: Legacy Accuracy */}
                            <MetricCard
                                title="Royalty Accuracy"
                                value="82%"
                                subtext="Error prone"
                                icon={<AlertCircle className="text-slate-400" size={20} />}
                                trend="Risk High"
                                trendColor="text-amber-500"
                                isAfter={false}
                            >
                                <AreaChart data={timelineData}>
                                    <Area type="monotone" dataKey="accuracyBefore" stroke="#94a3b8" fill="#cbd5e1" fillOpacity={0.3} strokeWidth={3} />
                                    <YAxis hide domain={[70, 100]} />
                                </AreaChart>
                            </MetricCard>

                            {/* Metric 3: Legacy Cost */}
                            <MetricCard
                                title="Cost Recovered"
                                value="$0"
                                subtext="Per Quarter"
                                icon={<TrendingUp className="text-slate-400" size={20} />}
                                trend="No Data"
                                trendColor="text-slate-500"
                                isAfter={false}
                            >
                                <BarChart data={costData}>
                                    <Bar dataKey="before" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                                    <YAxis hide domain={[0, 80]} />
                                </BarChart>
                            </MetricCard>

                        </div>

                        {/* Legacy Label */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-10 z-10">
                            <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-200/80 dark:bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-white/10 shadow-sm">
                                Legacy
                            </span>
                        </div>
                    </div>

                    {/* === AFTER VIEW (Foreground / Clipped) === */}
                    <div
                        className="absolute inset-0 bg-white dark:bg-[#1E293B] flex items-center justify-center will-change-[clip-path]"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-900/20 dark:to-teal-900/20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="w-full h-full p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">

                            {/* Metric 1: Alpha Speed */}
                            <MetricCard
                                title="Approval Time"
                                value={<><CountUp end={2} decimals={1} suffix=" Days" /></>}
                                subtext="Avg. turnaround"
                                icon={<Clock className="text-blue-500" size={20} />}
                                trend="-92% faster"
                                trendColor="text-emerald-500"
                                isAfter={true}
                                isDragging={isDragging}
                            >
                                <LineChart data={timelineData}>
                                    <defs>
                                        <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#06B6D4" />
                                        </linearGradient>
                                    </defs>
                                    <Line type="monotone" dataKey="approvalAfter" stroke="url(#gradLine)" strokeWidth={4} dot={false} animationDuration={1500} />
                                    <YAxis hide domain={[0, 20]} />
                                </LineChart>
                            </MetricCard>

                            {/* Metric 2: Alpha Accuracy */}
                            <MetricCard
                                title="Royalty Accuracy"
                                value={<><CountUp end={100} suffix="%" /></>}
                                subtext="AI Verified"
                                icon={<CheckCircle2 className="text-teal-500" size={20} />}
                                trend="Perfect"
                                trendColor="text-teal-500"
                                isAfter={true}
                                isDragging={isDragging}
                            >
                                <AreaChart data={timelineData}>
                                    <defs>
                                        <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="accuracyAfter" stroke="#06B6D4" fill="url(#colorAccuracy)" strokeWidth={3} animationDuration={1500} />
                                    <YAxis hide domain={[70, 100]} />
                                </AreaChart>
                            </MetricCard>

                            {/* Metric 3: Alpha Cost */}
                            <MetricCard
                                title="Cost Recovered"
                                value={<><CountUp end={74} prefix="$" suffix="k" /></>}
                                subtext="Per Quarter"
                                icon={<TrendingUp className="text-emerald-500" size={20} />}
                                trend="+1400% ROI"
                                trendColor="text-emerald-500"
                                isAfter={true}
                                isDragging={isDragging}
                            >
                                <BarChart data={costData}>
                                    <Bar dataKey="after" fill="#3B82F6" radius={[4, 4, 0, 0]} animationDuration={1500}>
                                        {
                                            costData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === costData.length - 1 ? '#06B6D4' : '#3B82F6'} />
                                            ))
                                        }
                                    </Bar>
                                    <YAxis hide domain={[0, 80]} />
                                </BarChart>
                            </MetricCard>

                        </div>

                        {/* Alpha Label */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-10 z-10">
                            <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 shadow-sm flex items-center gap-2">
                                Alpha <div className="hidden sm:block">Platform</div> <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            </span>
                        </div>
                    </div>

                    {/* === SLIDER HANDLE === */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className={`
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-blue-600 
                    ring-4 ring-black/5 dark:ring-white/10
                    ${isDragging ? 'scale-110 ring-blue-500/30' : 'hover:scale-105'}
                `}>
                            <MoveHorizontal size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Legend / Key Interaction Hint (Mobile) */}
                <div className="mt-8 flex justify-center md:hidden">
                    <div className="flex items-center gap-2 text-sm text-slate-400 animate-pulse">
                        <ArrowRight size={16} /> Swipe to compare
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTS ---

interface MetricCardProps {
    title: string;
    value: React.ReactNode;
    subtext: string;
    icon: React.ReactNode;
    trend: string;
    trendColor: string;
    isAfter: boolean;
    isDragging?: boolean;
    children: React.ReactElement;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtext, icon, trend, trendColor, isAfter, isDragging, children }) => {
    return (
        <div className={`
            relative rounded-2xl p-4 md:p-6 flex flex-row md:flex-col h-full overflow-hidden border transition-all duration-300 items-center md:items-stretch gap-4 md:gap-0
            ${isAfter
                ? `bg-white dark:bg-slate-800/80 border-blue-100 dark:border-white/10 shadow-xl ${isDragging ? 'shadow-blue-500/20 scale-[1.02] border-blue-300 ring-2 ring-blue-100 dark:ring-blue-500/20' : 'shadow-blue-500/5'}`
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 opacity-80 grayscale'
            }
        `}>
            {/* Header */}
            <div className="flex justify-between items-start md:mb-4 flex-1 md:flex-none min-w-0">
                <div>
                    <h3 className={`text-[10px] md:text-sm font-semibold uppercase tracking-wider mb-0.5 md:mb-1 ${isAfter ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>
                        {title}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className={`text-[10px] md:text-xs font-medium ${trendColor}`}>{trend}</span>
                    </div>
                    {/* Value - Mobile: Show here, Desktop: Show below */}
                    <div className="md:hidden mt-1">
                        <div className={`text-2xl font-mono font-bold tracking-tight ${isAfter ? 'text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>
                            {value}
                        </div>
                    </div>
                </div>
                <div className={`p-1.5 md:p-2 rounded-lg hidden md:block ${isAfter ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-white/10 dark:to-white/5' : 'bg-slate-200 dark:bg-white/5'}`}>
                    {icon}
                </div>
            </div>

            {/* Big Number (Desktop) */}
            <div className={`hidden md:block text-4xl lg:text-5xl font-mono font-bold mb-1 tracking-tight ${isAfter ? 'text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>
                {value}
            </div>
            <div className={`hidden md:block text-xs mb-6 ${isAfter ? 'text-slate-400' : 'text-slate-400'}`}>
                {subtext}
            </div>

            {/* Chart Area */}
            <div className="flex-grow min-h-[50px] md:min-h-[100px] w-20 md:w-full md:mt-auto relative">
                <ResponsiveContainer width="100%" height="100%">
                    {children}
                </ResponsiveContainer>
                {/* Gradient fade at bottom for style */}
                {isAfter && <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-slate-800/80 to-transparent opacity-50"></div>}
            </div>
        </div>
    );
};

export default RoiMetrics;