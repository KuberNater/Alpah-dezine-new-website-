
import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const CTA: React.FC = () => {
  return (
    <section className="relative bg-background w-full landing z-20 px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto bg-linear-to-br from-navy-900 to-navy-800 rounded-3xl shadow-2xl p-12 md:p-16 text-white overflow-hidden relative border border-white/10">

        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Eliminate Complexity?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Stop struggling with broken workflows. Choose the path that fits your timeline.</p>
        </div>

        <div className="flex items-center justify-center gap-8 max-w-4xl mx-auto relative z-10">

          {/* Option 2: Secondary - Talk to Us */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors text-center group flex flex-col">
            <div className="w-16 h-16 rounded-full bg-slate-700/50 text-slate-300 flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-600 group-hover:text-white transition-colors duration-300">
              <MessageCircle size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-3">Just Talk to Us</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Not sure what you need? Let’s have a conversation about your specific challenges.
            </p>

            <Button asChild className="w-full cursor-pointer py-8 bg-primary text-xl text-white border border-border font-bold rounded-xl   transition-all mt-auto">
              <Link href="/contact-us">
                Get in Touch
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
