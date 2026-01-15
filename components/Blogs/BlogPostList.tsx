import { ArrowUpRightIcon, ChevronRightIcon, FlameIcon } from 'lucide-react';
import React from 'react'
import MaxWidth from '../MaxWidth';
import Heading from '../Heading';
import { posts } from '@/data/blogs.data';
import BlogPostCard from './BlogPostCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';

function BlogPostList() {
    return (
        <section className="py-24  transition-colors duration-500 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full  pointer-events-none"></div>

            {/* <div className="max-w-7xl mx-auto relative z-10"> */}
            <MaxWidth className='relative flex flex-col items-center justify-center'>


                <div className='flex lg:flex-row flex-col items-center justify-between w-full '>
                    <Heading
                        badgeText='The Library'
                        className=' lg:text-6xl'
                        subtitle='Curated articles on the intersection of licensing, technology, and compliance.'
                    >
                        Latest Thinking
                    </Heading>
                </div>
                <div className='w-full'>
                    <Tabs defaultValue="all" className="">
                        <TabsList className='w-full border border-border h-auto min-h-14 py-2 px-2 md:px-3 lg:px-2 backdrop-blur-2xl mb-5 grid grid-cols-2 sm:grid-cols-5 gap-2'>
                            <TabsTrigger className='px-2 md:px-3 lg:px-4 py-2 font-semibold text-xs sm:text-sm whitespace-nowrap' value="all">View All</TabsTrigger>
                            <TabsTrigger className='px-2 md:px-3 lg:px-4 py-2 font-semibold text-xs sm:text-sm whitespace-nowrap' value="collegiate">Collegiate Licensing</TabsTrigger>
                            <TabsTrigger className='px-2 md:px-3 lg:px-4 py-2 font-semibold text-xs sm:text-sm whitespace-nowrap' value="asset">Asset Management</TabsTrigger>
                            <TabsTrigger className='px-2 md:px-3 lg:px-4 py-2 font-semibold text-xs sm:text-sm whitespace-nowrap' value="devops">DevOps</TabsTrigger>
                            <TabsTrigger className='px-2 md:px-3 lg:px-4 py-2 font-semibold text-xs sm:text-sm whitespace-nowrap' value="ai-agent">AI Agent</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <BlogPostCard key={index}
                                        author={post.author}
                                        category={post.category}
                                        date={post.date}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        title={post.title}
                                        readTime={post.readTime}
                                        featured={post.featured}
                                        slug={post.slug}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="collegiate">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.filter((post) => post.category.toLowerCase() === "collegiate licensing").map((post, index) => (
                                    <BlogPostCard key={index}
                                        author={post.author}
                                        category={post.category}
                                        date={post.date}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        title={post.title}
                                        readTime={post.readTime}
                                        featured={post.featured}
                                        slug={post.slug}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="asset">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.filter((post) => post.category.toLowerCase() === "asset management").map((post, index) => (
                                    <BlogPostCard key={index}
                                        author={post.author}
                                        category={post.category}
                                        date={post.date}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        title={post.title}
                                        readTime={post.readTime}
                                        featured={post.featured}
                                        slug={post.slug}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="devops">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.filter((post) => post.category.toLowerCase() === "devops").map((post, index) => (
                                    <BlogPostCard key={index}
                                        author={post.author}
                                        category={post.category}
                                        date={post.date}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        title={post.title}
                                        readTime={post.readTime}
                                        featured={post.featured}
                                        slug={post.slug}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="ai-agent">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.filter((post) => post.category.toLowerCase() === "ai agent").map((post, index) => (
                                    <BlogPostCard key={index}
                                        author={post.author}
                                        category={post.category}
                                        date={post.date}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        title={post.title}
                                        readTime={post.readTime}
                                        featured={post.featured}
                                        slug={post.slug}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/blogs"} className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Load More Articles
                            <ArrowUpRightIcon size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </MaxWidth>
            {/* </div> */}
        </section>
    )
}

export default BlogPostList