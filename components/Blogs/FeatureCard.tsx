import { blogFeatureCardData } from '@/data/blogs.data'
import { ArrowRightIcon, ClockIcon, GlobeIcon } from 'lucide-react'
import Link from 'next/link'

function FeatureCard() {
    return (
        <div className="relative group animate-fadeIn animation-delay-300">
            {/* Glow Effect behind card */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-white dark:bg-[#0B1120] rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 group-hover:-translate-y-1 transition-transform duration-500">

                {/* Image Side - Larger */}
                <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                    <img
                        src={blogFeatureCardData.image}
                        alt={blogFeatureCardData.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-slate-900/30"></div>
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/95 dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border border-white/20 shadow-lg flex items-center gap-2">
                            <GlobeIcon size={12} className="text-blue-500" /> Editor's Pick
                        </span>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-[#0B1120] relative z-20">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
                        <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{blogFeatureCardData.genre}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <ClockIcon size={14} />
                            <span>{blogFeatureCardData.time}</span>
                        </div>
                    </div>

                    <Link href={blogFeatureCardData.href} className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                        {blogFeatureCardData.title}
                    </Link>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium border-l-2 border-slate-200 dark:border-white/10 pl-4">
                        {blogFeatureCardData.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden ring-2 ring-white dark:ring-white/10">
                                <img src={blogFeatureCardData.authorImage} alt={blogFeatureCardData.authorImageAlt} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">{blogFeatureCardData.author}</div>
                                <div className="text-xs text-slate-500 font-medium">{blogFeatureCardData.company}</div>
                            </div>
                        </div>
                        <Link href={blogFeatureCardData.href} className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:border-blue-500 dark:group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30 transform group-hover:rotate-45">
                            <ArrowRightIcon size={20} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FeatureCard