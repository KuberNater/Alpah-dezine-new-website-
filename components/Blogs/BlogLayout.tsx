"use client"
import React from 'react';
import BlogsHeading from './BlogsHeading';
import MaxWidth from '@/components/MaxWidth';
import Image from 'next/image';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkItem {
    title: string;
    href: string;
}

interface BlogLayoutProps {
    headingProps: {
        children: React.ReactNode;
        badgeText: string;
        subtitle?: string;
        decorativeText?: string;
        time: number;
        authorName: string;
        date: string;
        className?: string; // Add className to interface
    };
    imageProps: {
        src: string;
        alt: string;
    };
    links: LinkItem[];
    children: React.ReactNode;
}

const BlogLayout = ({ headingProps, imageProps, links, children }: BlogLayoutProps) => {
    return (
        <section className="relative landing bg-background w-full mb-20 overflow-x-hidden">
            <MaxWidth className="w-full min-h-screen pt-32 flex flex-col items-center gap-10 justify-center">
                <BlogsHeading {...headingProps}>
                    {headingProps.children}
                </BlogsHeading>

                {/* Image container  */}
                <div className="w-full aspect-video relative rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                    <Image
                        fill
                        src={imageProps.src}
                        alt={imageProps.alt}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* Blog content wrapper */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative mt-8">
                    {/* Sidebar Navigation - Hidden on mobile/tablet, visible on large screens */}
                    <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-32">
                        <div className="flex flex-col items-start gap-5 p-3 border-l-2 border-slate-200 dark:border-white/10 pl-6">
                            <p className="flex items-center gap-2">
                                <LinkIcon className="text-primary size-4" />
                                <span className="font-black tracking-wide uppercase text-foreground text-sm">article map</span>
                            </p>
                            <nav className="relative w-full">
                                <ul className="space-y-4">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors block py-1"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="col-span-1 lg:col-span-9 p-3 md:p-0">
                        <div className="max-w-4xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>

            </MaxWidth>
        </section>
    );
};

export default BlogLayout;
