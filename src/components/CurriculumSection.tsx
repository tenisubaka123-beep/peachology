import React from 'react';
import { CURRICULUM_MODULES } from '../data/sampleData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CurriculumSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="curriculum" aria-labelledby="curriculum-title" className="py-20 sm:py-24 bg-[#fff6f1] border-y border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="max-w-2xl text-left mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
            Hands-on training
          </span>
          <h2 id="curriculum-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            A practical startup curriculum, from idea to launch
          </h2>
          <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed mt-3">
            Four modules. Each one builds a real piece of your business, and you'll see your progress grow week after week.
          </p>
        </div>

        {/* 4 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRICULUM_MODULES.map((mod) => (
            <article 
              key={mod.number}
              className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft relative pl-20 sm:pl-24 flex flex-col justify-between group hover:border-peach-400 transition-all"
            >
              {/* Fraunces Decimal Counter */}
              <div 
                aria-hidden="true" 
                className="absolute left-6 top-6 sm:left-7 sm:top-7 font-serif font-extrabold text-3xl sm:text-4xl text-peach-400 select-none"
              >
                {mod.number}
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2b1a14] mb-2 group-hover:text-peach-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-[#6b554b] leading-relaxed mb-4">
                  {mod.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f1dfd5] flex items-center justify-between">
                <span className="text-xs font-bold text-leaf">
                  {mod.project}
                </span>
                <span className="text-xs font-medium text-ink-light">
                  {mod.skills.join(' • ')}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Curriculum CTA row */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#f1dfd5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="font-serif font-bold text-lg text-[#2b1a14] block">
              Curriculum included in Standard (€299) and Individual Mentoring (€549)
            </span>
            <span className="text-xs sm:text-sm text-[#6b554b]">
              Free Trial participants access Module 1 materials and introductory workshop.
            </span>
          </div>

          <button
            onClick={() => onSelectPlan('standard')}
            className="btn-peach-primary text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap"
          >
            <span>View Pricing & Plans</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
