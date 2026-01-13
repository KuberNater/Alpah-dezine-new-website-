import { IBlogPostCard } from "@/types/blogs/blogPostCard.types";
import { ChevronRightIcon, FlameIcon } from "lucide-react";
import Link from "next/link";


function BlogPostCard({ author, category, date, excerpt, image, title, readTime, featured = false, slug }: IBlogPostCard) {
    return (
        <article className="group flex flex-col h-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer ring-1 ring-transparent hover:ring-blue-500/20 dark:hover:ring-blue-400/20">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-lg uppercase tracking-wide border border-white/20">
                        {category}
                    </span>
                    {featured && (
                        <span className="px-3 py-1 bg-amber-400 text-amber-950 backdrop-blur-md rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-amber-300">
                            <FlameIcon size={12} fill="currentColor" /> Hot
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col grow relative">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                    <span>{date}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{readTime} read</span>
                </div>

                <Link href={`/blogs/${slug}`} className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </Link>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {excerpt}
                </p>

                <Link href={`/blogs/${slug}`} className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{author}</span>
                    <span className="flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                        Read Article <ChevronRightIcon size={16} />
                    </span>
                </Link>
            </div>
        </article>
    )
}

export default BlogPostCard