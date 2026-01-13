"use client"
import React, { useState, useEffect } from 'react';
import Heading from '@/components/Heading';
import MaxWidth from '@/components/MaxWidth';
import ContactInfo from '@/components/ContactUs/ContactInfo';
import ContactForm from '@/components/ContactUs/ContactForm';

const ContactUsPageContent: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme as 'light' | 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-background landing font-sans flex flex-col selection:bg-accent/30 selection:text-brand">
            <main className="grow pt-16 pb-16  lg:pt-24 lg:pb-32 overflow-hidden">
                <MaxWidth>
                    {/* Hero Section */}
                    <Heading
                    align='left'
                        subtitle="We help ambitious brands build future-ready digital experiences. Tell us about your project, and let's create something remarkable together.">
                        Ready to <span className='text-primary'>ignite</span> <br />your <span className='text-primary'>digital potential?</span>
                    </Heading>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
                        {/* Left Col: Contact Info */}
                        <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in-up delay-200">
                            <ContactInfo />
                        </div>

                        {/* Right Col: Form */}
                        <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in-up delay-300">
                            <ContactForm />
                        </div>
                    </div>
                </MaxWidth>
            </main>
        </div>
    );
};

export default ContactUsPageContent;