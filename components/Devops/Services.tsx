'use client'
import { servicesData } from '@/data/Devops.data';
import React from 'react';
import Heading from '../Heading';
import { motion } from 'motion/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="py-16 md:py-24 landing bg-background w-full transition-colors duration-300 scroll-mt-32 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 md:text-center max-w-3xl mx-auto">
                    <span className="font-mono text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                    <Heading
                        subtitle="We don't just write code. We engineer systems that drive your business forward with precision, speed, and reliability."
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
                        Building the <span className="text-primary">Core</span>
                    </Heading>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${service.colSpan || 'md:col-span-1'}`}
                        >
                            <Card className="h-full group bg-background rounded-[2.5rem] hover:shadow-xl dark:shadow-zinc-800 transition-all duration-300 border border-slate-200 dark:border-navy-700 group py-8 px-4">
                                <CardHeader className="relative pb-0">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-2xl group-hover:bg-primary group-hover:text-white bg-secondary hover:bg-primary/10 transition-colors border border-border flex items-center justify-center text-primary shadow-sm">
                                            <service.icon className="w-7 h-7 stroke-[1.5]" />
                                        </div>
                                        <span className="font-mono text-primary text-xs font-bold group-hover:text-primary transition-colors">
                                            0{service.id}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold font-display text-card-foreground mb-3 leading-tight">
                                        {service.title}
                                    </CardTitle>
                                    <div className="text-xs font-mono font-bold uppercase tracking-wide  mb-1">
                                        {service.tagline}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm md:text-base leading-relaxed text-card">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;