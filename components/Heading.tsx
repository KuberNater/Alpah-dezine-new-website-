"use client"
import React from 'react'
import { motion, MotionProps, Variants } from 'motion/react'
import { cn } from '@/lib/utils'
import { Badge } from './ui/badge'

const MotionBadge = motion(Badge)

const defaultBadgeAnimation: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
}

const defaultHeadingAnimation: MotionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1, ease: "easeOut" }
}

const defaultSubtitleAnimation: MotionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
}

interface HeadingProps {
    children: React.ReactNode,
    badgeText?: string,
    badgeIcon?: React.ReactNode,
    subtitle?: string,
    className?: string,
    decorativeText?: string,
    badgeClassName?: string,
    subtitleClassName?: string,
    pingAnimation?: boolean,
    decorativeTextClassName?: string,
    containerClassName?: string,
    badgeAnimation?: MotionProps,
    headingAnimation?: MotionProps,
    subtitleAnimation?: MotionProps,
    animateOnScroll?: boolean,
    align?: 'left' | 'center' | 'right'
}

function Heading({
    children,
    badgeText,
    badgeIcon,
    subtitle,
    className,
    decorativeText,
    badgeClassName,
    subtitleClassName,
    pingAnimation = true,
    decorativeTextClassName,
    containerClassName,
    badgeAnimation = defaultBadgeAnimation,
    headingAnimation = defaultHeadingAnimation,
    subtitleAnimation = defaultSubtitleAnimation,
    animateOnScroll = true,
    align = 'center'
}: HeadingProps) {

    // Alignment classes
    const alignmentClasses = {
        left: 'items-start text-left',
        center: 'items-center text-center',
        right: 'items-end text-right'
    }

    return (
        <div className={cn('landing w-full flex flex-col space-y-3 md:space-y-4 lg:space-y-5', alignmentClasses[align], containerClassName)}>
            {/* Badge  */}
            {!!badgeText && (
                <MotionBadge
                    initial={badgeAnimation.initial}
                    whileInView={animateOnScroll ? badgeAnimation.animate as MotionProps['whileInView'] : undefined}
                    animate={!animateOnScroll ? badgeAnimation.animate : undefined}
                    transition={badgeAnimation.transition}
                    viewport={{ once: true }}
                    className={cn("inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-navy-900 backdrop-blur-sm border border-slate-200 dark:border-navy-800 shadow-sm mb-8 hover:border-brandText/50 transition-all cursor-default group", badgeClassName)}
                >
                    {/* Show custom badge icon if provided, otherwise show ping animation */}
                    {badgeIcon ? (
                        <span className="text-primary">{badgeIcon}</span>
                    ) : (
                        pingAnimation && <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                    )}
                    <span className={cn("text-[10px] font-black text-slate-500 dark:text-slate-300 tracking-[0.3em] uppercase group-hover:text-brandText transition-colors")}> {badgeText}</span>
                </MotionBadge>
            )}
            {/* Heading */}
            <motion.h1
                initial={headingAnimation.initial}
                whileInView={animateOnScroll ? headingAnimation.animate as MotionProps['whileInView'] : undefined}
                animate={!animateOnScroll ? headingAnimation.animate : undefined}
                transition={headingAnimation.transition}
                viewport={{ once: true }}
                className={cn("text-4xl md:text-5xl lg:text-6xl font-black text-navy-950 dark:text-white uppercase tracking-tight leading-none mb-8 max-w-5xl", className)}
            >
                {children}

                {!!decorativeText && (
                    <span className={cn("text-primary block w-fit", align === 'center' && 'mx-auto', decorativeTextClassName)}>{decorativeText}</span>
                )}
            </motion.h1>
            {/* Subtitle */}
            {!!subtitle && (
                <motion.p
                    initial={subtitleAnimation.initial}
                    whileInView={animateOnScroll ? subtitleAnimation.animate as MotionProps['whileInView'] : undefined}
                    animate={!animateOnScroll ? subtitleAnimation.animate : undefined}
                    transition={subtitleAnimation.transition}
                    viewport={{ once: true }}
                    className={cn("text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 max-w-xl", subtitleClassName)}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
            )}
        </div>
    )
}

export default Heading