"use client"
import React from 'react';
import { solutionData } from '@/data/home.data';
import { SolutionCard } from './SolutionCard';
import Heading from '../Heading';

export const Services: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background landing w-full transition-colors duration-300" id="solutions">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <Heading
                        badgeText="Core Platform"
                        align="left"
                        containerClassName="max-w-xl"
                        className="text-4xl md:text-5xl leading-tight"
                    >
                        Four Solutions. <br className="hidden sm:block" /> One <span className="text-primary">Philosophy.</span>
                    </Heading>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">
                        Excellence through simplification. We remove digital friction to build institutional sanity and operational speed.
                    </p>
                </div>

                {/* Dynamic 2x2 Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutionData.map((items, index) => (
                        <SolutionCard
                            key={index}
                            title={items.title}
                            subtitle={items.subtitle}
                            themeColor={items.themeColor}
                            illustration={items.illustration}
                            checklist={items.checklist}
                            stats={items.stats}
                            ctas={items.ctas}
                            link={items.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
