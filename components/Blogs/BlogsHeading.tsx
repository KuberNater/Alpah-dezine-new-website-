import React from 'react'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { ClockIcon } from 'lucide-react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode,
    badgeText: string,
    subtitle?: string,
    className?: string,
    decorativeText?: string,
    time: number,
    authorName: string,
    date:string
}
function BlogsHeading({ children, badgeText, subtitle, className, decorativeText, time, authorName,date,...props }: HeadingProps) {
    return (
        <div className='landing w-full flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-5'>
            {/* Badge  */}
            {(!!badgeText && !!time) && (
                <div className='w-full flex items-center gap-5 justify-center'>
                    <Badge
                        className='p-1 px-4 uppercase bg-primary/5 border border-primary text-primary font-bold tracking-wider'
                    >
                        {badgeText}
                    </Badge>
                    <span className='text-sm uppercase font-bold flex items-center gap-2 text-foreground/60'>
                        <ClockIcon className="size-4" />
                        {time} min read
                    </span>
                </div>
            )}
            {/* Heading  */}
            <h1
            {...props}
                className={cn("text-4xl uppercase md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 max-w-5xl leading-[1.3] text-center", className)}
            >
                {children}
                {!!decorativeText && (
                    <span className={cn("text-transparent block w-fit mx-auto bg-clip-text text-primary animate-gradient-x")}>{decorativeText}</span>
                )}
            </h1>
            {/* Subtitle  */}
             {!!subtitle && (
                <p 
                    className={cn("text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium text-center")} dangerouslySetInnerHTML={{ __html: subtitle }} />
            )}
            <div className='flex items-center justify-center w-full gap-3'>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-semibold text-foreground/60'>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsHeading