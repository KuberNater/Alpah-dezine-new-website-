"use client"
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import Heading from './Heading';
import MaxWidth from './MaxWidth';
import { FaqType } from '@/types/faqs.type';

interface FaqProps {
  data: FaqType[]
}

export const FAQs: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-background landing w-full relative overflow-hidden transition-colors duration-300" id="faq">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-faq" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-faq)" className="text-background dark:text-white" />
        </svg>
      </div>
      <MaxWidth>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Heading
                badgeText="Knowledge Base"
                badgeIcon={<HelpCircle size={14} />}
                subtitle="Everything you need to know about the product and billing. Can't find the answer you're looking for?"
                align="left"
                className="text-3xl md:text-4xl"
                subtitleClassName="mb-10"
                pingAnimation={false}
              >
                Questions We <br />
                <span className="text-primary">Hear Often</span>
              </Heading>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {data.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    scale: isOpen ? 1.02 : 1,
                    borderColor: isOpen ? '#194F90' : 'rgba(39, 39, 45, 0.5)'
                  }}
                  className={`rounded-2xl border transition-all duration-300 ${isOpen
                    ? 'bg-background shadow-xl shadow-primary/5 z-10 relative ring-1 ring-primary/20 dark:ring-royal-400/20 dark:border-royal-400/30'
                    : 'bg-background border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700'
                    }`}
                >
                  <button
                    className="w-full flex items-start justify-between p-6 md:p-8 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <div className="flex gap-5 pr-4">
                      <span className={`text-sm font-mono font-bold pt-1 transition-colors ${isOpen ? 'text-primary dark:text-royal-300' : 'text-slate-300 dark:text-navy-700'}`}>
                        0{idx + 1}
                      </span>
                      <span className={`text-lg md:text-xl font-bold transition-colors leading-snug ${isOpen ? 'text-navy-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                        {item.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary dark:bg-royal-500 text-white shadow-lg shadow-primary/30' : 'bg-slate-100 dark:bg-navy-950 text-slate-400'}`}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 pl-18">
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-medium">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};
