import Link from 'next/link'
import './globals.css'

export default function NotFound() {
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="landing min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-linear-to-br from-beige-50 via-white to-beige-100 dark:from-navy-950 dark:via-zinc-900 dark:to-navy-900">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Floating Orbs */}
                        <div
                            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-br from-royal-400/20 to-royal-600/10 blur-3xl animate-pulse"
                        />
                        <div
                            className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-primary/15 to-accent/10 blur-3xl animate-pulse"
                            style={{ animationDelay: '1s' }}
                        />
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,84,185,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,84,185,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                        <div className="text-center space-y-8">
                            {/* 404 Number */}
                            <div className="relative">
                                <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-navy-950 via-royal-500 to-royal-400 dark:from-white dark:via-royal-300 dark:to-royal-500 select-none">
                                    404
                                </h1>
                                {/* Glowing Effect Behind Number */}
                                <div className="absolute inset-0 -z-10 flex items-center justify-center text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter text-primary/5 dark:text-primary/10 blur-2xl" aria-hidden="true">
                                    404
                                </div>
                            </div>

                            {/* Error Message Card */}
                            <div className="mx-auto max-w-lg rounded-xl border border-border/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl shadow-primary/5 dark:shadow-black/30 p-6 sm:p-8 space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white">
                                        Page Not Found
                                    </h2>
                                    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Oops! The page you&apos;re looking for seems to have wandered off.
                                        Don&apos;t worry, even the best explorers get lost sometimes.
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <Link
                                        href="/"
                                        className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        Back to Home
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-border bg-background hover:bg-accent/50 dark:border-zinc-700 dark:hover:bg-zinc-800 font-semibold transition-all duration-300 hover:-translate-y-0.5 text-foreground"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        Contact Support
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                                    Go Back
                                </Link>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 duration-500"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" /></svg>
                                    Try Again
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Decorative Wave */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-0 w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                                className="fill-beige-100/50 dark:fill-zinc-800/30"
                            />
                            <path
                                d="M0 120L48 115C96 110 192 100 288 95C384 90 480 90 576 92.5C672 95 768 100 864 102.5C960 105 1056 105 1152 100C1248 95 1344 85 1392 80L1440 75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                                className="fill-beige-200/30 dark:fill-zinc-700/20"
                            />
                        </svg>
                    </div>
                </div>
            </body>
        </html>
    )
}
