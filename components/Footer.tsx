import { footerData, footerLinks } from '@/data/footer.data';
import { ArrowUpRightIcon, GlobeIcon, LinkedinIcon, LockIcon, ShieldCheckIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white dark:bg-zinc-900 landing text-foreground relative overflow-hidden pt-24 pb-12 border-t border-border z-10">
            {/* Architectural Grid Background */}


            {/* Giant Watermark */}
            <div className="absolute -bottom-20 -right-10 select-none pointer-events-none overflow-hidden">
                <h1 className="text-[15vw] font-black text-foreground opacity-[0.02] leading-none tracking-tighter font-sans">alpha</h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">

                {/* Top Section: Navigation Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Brand Identity (4 Cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2 text-foreground">
                            <img className='max-w-[190px] w-full' src="/images/Alpha Logo 01.svg" alt="alpha dezine logo" />
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs font-medium">
                            Building the digital infrastructure for the world&apos;s leading universities and brands. Where obsessive craft meets automated scale.
                        </p>

                        <div className="flex gap-3">
                            {[LinkedinIcon].map((Icon, i) => (
                                <Link key={i} href="https://in.linkedin.com/company/alpha-dezine" target='_blank' className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-navy-900 hover:border-transparent transition-all duration-300 group">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Section (8 Cols divided into 4 columns) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {footerData.map((items, index) => (
                            <div key={index}>
                                <h4 className="text-primary font-bold mb-6 text-xs uppercase tracking-widest opacity-80">{items.name}</h4>
                                <ul className="space-y-4 text-sm text-slate-400 flex flex-col">
                                    {items.services!.map((items, index) => (
                                        <Link key={index} href={items.href} className='cursor-pointer hover:text-primary'>
                                            {items.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Section: Legal & Status */}
                <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col md:flex-row gap-6 items-center text-xs text-slate-500 font-medium">
                        <span>© {currentYear} Alpha Dezine, Inc.</span>
                        <div className="hidden md:block h-3 w-px bg-white/10"></div>
                        <div className="flex gap-6">
                            {footerLinks.map((items, index) => (
                                <Link key={index} href={items.href!} className="hover:text-foreground transition-colors">
                                    {items.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer