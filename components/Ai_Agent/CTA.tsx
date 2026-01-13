
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Heading from '../Heading';
import { Button } from '../ui/button';
import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 bg-background landing w-full overflow-hidden text-center">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <Heading subtitle='Calm. Capable. Controlled. Built for real work.'>
                    Ready to deploy an agent your <span className='text-primary'>team will actually use?</span>

                </Heading>

                <div className="flex flex-col items-center gap-8">
                    <Button asChild className='flex items-center gap-3 text-2xl px-20  rounded-2xl py-7 hover:scale-[1.02] transition-all shadow-2xl cursor-pointer'>
                        <Link href="/contact-us">
                            Book a Consultation
                            <ArrowRight className="w-8 h-8" />
                        </Link>
                    </Button>
                    <button className="text-slate-500 text-md font-semibold hover:text-brand-500 transition-colors">
                        Request a Sample Agent Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
