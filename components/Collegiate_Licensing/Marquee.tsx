import React from 'react';
import { Marquee } from '../ui/marquee';
import Image from 'next/image';
import { logos } from '@/data/CollegiateLicencing.data';

const Marqueee: React.FC = () => {
    return (
        <div className="w-full landing bg-background py-10 overflow-hidden relative transition-colors duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee hover:paused transform-gpu will-change-transform">
                <Marquee className="[--duration:30s] [--gap:2rem] sm:[--gap:3rem] md:[--gap:4rem]" pauseOnHover>
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center px-4 sm:px-6 md:px-8"
                        >
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                                width={160}
                                height={160}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Marqueee;