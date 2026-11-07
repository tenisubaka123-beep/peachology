import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBandProps {
  onOpenApply: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenApply }) => {
  return (
    <section id="apply" aria-labelledby="apply-title" className="pt-0 pb-20 sm:pb-24 bg-[#fffaf7]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* The Exact Peachology Gradient CTA Band */}
        <div className="rounded-[32px] p-10 sm:p-16 text-center text-white bg-gradient-to-br from-peach-500 to-peach-600 shadow-peach-lg space-y-5">
          <h2 id="apply-title" className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to learn, build and launch?
          </h2>
          <p className="text-base sm:text-lg text-peach-50 max-w-xl mx-auto leading-relaxed">
            Applications for the next cohort are open. Apply in five minutes, or try our €0 Free Trial with an instant European fund check.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={onOpenApply}
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-white text-peach-600 hover:bg-peach-50 transition-transform active:scale-95 shadow-md flex items-center space-x-2"
            >
              <span>Apply now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pricing"
              className="px-8 py-3.5 rounded-full font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition-transform"
            >
              Book an info session
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
