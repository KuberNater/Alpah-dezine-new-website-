import { ColorStyle, StatCardProps } from '@/types/home/testimonial.type';

function StatCard({ value, label, subtext, icon: Icon }: StatCardProps) {

    return (
        <div className={`group/card relative bg-background landing rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-100 dark:border-navy-800 shadow-sm hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] shrink-0`}>

            {/* Hover Glow Background */}
            <div className={`absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-500`}></div>

            <div className="relative z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover/card:scale-110 transition-transform duration-300`}>
                    <Icon size={24} strokeWidth={1.5} className='group-hover/card:text-primary sm:[&]:w-6 sm:[&]:h-6 md:[&]:w-7 md:[&]:h-7' />
                </div>

                <div className={`text-3xl sm:text-4xl md:text-5xl group-hover/card:text-primary font-extrabold mb-2 sm:mb-3 tracking-tight transition-all`}>
                    {value}
                </div>

                <div className="text-xs sm:text-sm font-bold text-primary mb-1.5 sm:mb-2">{label}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-2 sm:pt-3 mt-2 sm:mt-3">
                    {subtext}
                </div>
            </div>
        </div>
    )
}

export default StatCard