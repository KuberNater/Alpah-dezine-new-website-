"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'
import MaxWidth from './MaxWidth'
import Link from 'next/link'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import { NavbarData } from '@/data/navbar.data'
import { Button } from './ui/button'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [active, setActive] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <nav className={cn('fixed top-0 landing z-999 max-w-6xl transition-all duration-500 ease-in-out',
            isScrolled ?
                'backdrop-blur-md bg-white/50 dark:bg-navy-950/40 mt-3 sm:mt-4 lg:mt-5 py-2 sm:py-3 border rounded-full border-border shadow-lg inset-x-0 mx-4 sm:mx-6 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:mx-0 lg:w-full'
                : 'bg-transparent mt-2 border-b border-transparent py-3 left-1/2 -translate-x-1/2 w-full'
        )}>
            <MaxWidth className={cn('flex items-center justify-between w-full')}>
                {/* Logo  */}
                <Link href="/" className="flex w-fit items-center gap-2 cursor-pointer  group relative z-10">
                    <svg width="190" height="36" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0d3c75] dark:text-white transition-colors duration-300 w-[140px] sm:w-[160px] lg:w-[190px]">
                        <text x="0" y="28" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="32" letterSpacing="-1.5" fill="currentColor">alphadezine</text>
                    </svg>
                </Link>

                {/* Desktop Links - Hidden on mobile/tablet */}
                <div className='hidden lg:flex items-end gap-x-10'>
                    <Menu setActive={setActive}>
                        {NavbarData.slice(0, 2).map((items, index) => (
                            <MenuItem key={index} setActive={setActive} active={active} item={items.name}>
                                <div className="flex flex-col space-y-4 text-sm">
                                    {items.services!.map((service, index) => (
                                        <HoveredLink key={index} href={service.href}>{service.name}</HoveredLink>
                                    ))}
                                </div>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Link href={NavbarData[2].href!} className="flex group w-fit items-center gap-2 cursor-pointer  text-md group relative z-10">
                        <p className="text-black dark:text-white dark:hover:text-primary hover:text-primary font-semibold transition-colors">{NavbarData[2].name}</p>
                    </Link>
                </div>

                {/* Desktop Actions - Hidden on mobile/tablet */}
                <div className="hidden lg:flex items-center space-x-6">
                    <ModeToggle />
                    <Button asChild size={'sm'} className={cn('cursor-pointer font-semibold bg-primary hover:bg-primary text-white transition-colors rounded-md py-[18px] px-5')}>
                        <Link href={"/contact-us"}>Book Call</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle - Visible only on mobile/tablet */}
                <div className="flex lg:hidden items-center space-x-4">
                    <ModeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md hover:bg-accent transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </MaxWidth>

            {/* Mobile Menu - Full screen overlay - Portaled to body to avoid transform context issues */}
            {mounted && createPortal(
                <>
                    <div
                        className={cn(
                            'fixed top-[72px] right-0 h-[calc(100vh-72px)] bg-background w-full lg:hidden',
                            'border-l border-border/50',
                            'transition-transform duration-300 ease-in-out',
                            'shadow-xl z-60',
                            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        )}
                    >
                        <div className="flex flex-col p-6 sm:p-8 md:p-10 space-y-6 h-full pt-10 sm:pt-12">
                            {/* Solutions Menu */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-lg text-primary">{NavbarData[0].name}</h3>
                                <div className="flex flex-col space-y-2 pl-4">
                                    {NavbarData[0].services!.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-neutral-600 font-semibold dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Resources Menu */}
                            <div className="space-y-3 border-t border-border pt-6">
                                <h3 className="font-bold text-lg text-primary">{NavbarData[1].name}</h3>
                                <div className="flex flex-col space-y-2 pl-4">
                                    {NavbarData[1].services!.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-neutral-600 font-semibold dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Us Link */}
                            <Link
                                href={NavbarData[2].href!}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-semibold text-lg text-white hover:text-primary dark:hover:text-primary transition-colors py-2 border-t border-border pt-6"
                            >
                                {NavbarData[2].name}
                            </Link>

                            {/* Book Demo Button */}
                            <Button
                                size={'sm'}
                                className={cn('cursor-pointer font-semibold hover:bg-primary transition-colors rounded-md py-5 px-5 mt-4 w-full')}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Demo
                            </Button>
                        </div>
                    </div>

                    {/* Overlay - closes mobile menu when clicked */}
                    {mobileMenuOpen && (
                        <div
                            className="fixed inset-0 top-[72px] lg:hidden z-55"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    )}
                </>,
                document.body
            )}
        </nav>
    )
}

export default Navbar