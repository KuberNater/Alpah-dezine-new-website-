"use client"
import { METRICS } from '@/data/home.data';
import {
  ArrowUp,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';



const Sparkline = ({ data, colorClass, id }: { data: number[], colorClass: string, id: string }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const width = 160;
  const height = 50;
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((d - min) / range) * (height - 10) - 5
  }));

  const lineData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const areaData = `${lineData} L ${width},${height} L 0,${height} Z`;

  return (
    <div className="relative w-[160px] h-[50px] group/chart">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" className={colorClass} />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className={colorClass} />
          </linearGradient>
        </defs>

        {/* Area Fill */}
        <motion.path
          d={areaData}
          fill={`url(#gradient-${id})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* The Line */}
        <motion.path
          d={lineData}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={colorClass}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Current Value Dot */}
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="4"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          className={colorClass}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.8, type: "spring" }}
        />
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="8"
          fill="currentColor"
          className={`${colorClass} opacity-20`}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </svg>
    </div>
  );
};

export const ValueProp: React.FC = () => {
  return (
    <section className="py-16 md:py-24 landing bg-background w-full transition-colors duration-700 relative overflow-hidden" id="advantage">
      {/* Background patterns simplified for focus */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="standard-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#standard-dots)" />
        </svg>
      </div>

      <MaxWidth>
        {/* Simplified Header */}
        <Heading
          badgeText="The Alpha Standard"
          badgeIcon={<Cpu size={12} />}
          subtitle="We don't deal in abstractions. Our platform is engineered to hit specific, audited benchmarks for speed, security, and efficiency."
          align="left"
          containerClassName="max-w-3xl mb-16"
          subtitleClassName="max-w-2xl"
        >
          Measurable <span className="text-primary">Performance.</span>
        </Heading>

        {/* High-Performance Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background landing border border-slate-200 dark:border-navy-700 rounded-[2.5rem] p-8 lg:p-10 hover:shadow-2xl hover:border-brandText/30 dark:hover:border-royal-400/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top Row: Icon and Chart */}
              <div className="flex items-start justify-between mb-10">
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-navy-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-navy-800 transition-all group-hover:scale-110 group-hover:shadow-lg ${metric.color}`}>
                  <metric.icon size={24} />
                </div>
                <Sparkline data={metric.chart} colorClass={metric.color} id={metric.title.replace(/\s/g, '')} />
              </div>

              {/* Middle Row: Main Figure */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-6xl font-black text-navy-950 dark:text-white tracking-tighter leading-none">
                    {metric.value}
                  </span>
                  <span className={`text-2xl font-black ${metric.color}`}>{metric.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{metric.sub}</span>
                  <div className="flex items-center gap-0.5 text-emerald-500">
                    <ArrowUp size={12} strokeWidth={3} />
                    <span className="text-[10px] font-black tracking-widest">12%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Context */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-navy-700">
                <h4 className="text-xs font-black text-navy-950 dark:text-white uppercase tracking-wider mb-2">{metric.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {metric.description}
                </p>
              </div>

              {/* Interactive Hover Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandText dark:bg-royal-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};
