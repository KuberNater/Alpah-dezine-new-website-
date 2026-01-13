"use client"
import { panelsValidation } from "@/types/home/heroSection1.types";
import React, { useState, memo } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

// Create MotionImage ONCE outside the component to prevent re-creation on every render
const MotionImage = motion(Image);

interface PanelImageProps {
    panel: panelsValidation;
    yValue: any;
    index: number;
}

// Wrap component with React.memo to prevent re-renders when parent state changes
export const PanelImage = memo(({ panel, yValue, index }: PanelImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            style={{ y: yValue, rotate: panel.rotation }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${panel.pos} ${panel.zIndex} pointer-events-auto cursor-pointer group select-none`}
        >
            <div className="relative w-full h-full overflow-hidden rounded-4xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/80 dark:border-navy-800/40 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-royal-500/20 bg-beige-100 dark:bg-navy-900">
                {/* Loading State */}
                <div className={`absolute inset-0 flex items-center justify-center bg-beige-100 dark:bg-navy-900 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    <Loader2 className="text-beige-300 dark:text-navy-700 animate-spin" size={20} />
                </div>
                {/* Image Component */}
                <MotionImage
                    width={500}
                    height={500}
                    src={panel.image}
                    alt={panel.alt}
                    onLoad={() => setIsLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-full object-cover grayscale-[0.2] brightness-[0.97] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                {/* Hover Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="flex items-center gap-2 mb-1.5">
                        <panel.icon size={16} className="text-brandText" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{panel.title}</span>
                    </div>
                    <p className="text-[10px] opacity-80 max-w-[180px] font-medium leading-relaxed">{panel.desc}</p>
                </div>
            </div>
        </motion.div>
    );
});