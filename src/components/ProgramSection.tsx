import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProgramSectionProps {
  onApplyTogether: () => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onApplyTogether }) => {
  return (
    <section id="program" aria-labelledby="challenges-title" className="py-20 sm:py-24 bg-[#fffaf7]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Split Head with Real Student Founder Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Organic gradient backdrop */}
              <div 
                aria-hidden="true"
                className="absolute left-[6%] right-[6%] bottom-0 top-[14%] rounded-t-[50%] rounded-b-[28px] bg-gradient-to-b from-peach-200 to-peach-400 z-0"
              />
              <img 
                src="/images/student-founder.webp" 
                alt="Smiling student working on her business idea on a laptop alongside classmates"
                width={461}
                height={675}
                className="relative z-10 w-full h-auto drop-shadow-xl rounded-b-[28px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600">
              Why Peachology
            </span>
            <h2 id="challenges-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
              Starting a business while studying shouldn't feel impossible
            </h2>
            <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed font-normal">
              You have ideas and ambition. What's usually missing is time, structure and someone who has done it before. We built the program around exactly that.
            </p>
            <div className="pt-2">
              <button
                onClick={onApplyTogether}
                className="btn-peach-primary text-sm py-3 px-6"
              >
                <span>Bring a friend and apply together</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid from peachology.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 shadow-soft">
            <span className="text-3xl mb-3 block" aria-hidden="true">⏳</span>
            <h3 className="font-serif font-bold text-xl text-[#2b1a14] mb-2">
              Balance study and business
            </h3>
            <p className="text-sm text-[#6b554b] leading-relaxed">
              Evening and weekend sessions designed around exams and semesters, so your grades and your project grow together.
            </p>
          </article>

          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 shadow-soft">
            <span className="text-3xl mb-3 block" aria-hidden="true">🛠️</span>
            <h3 className="font-serif font-bold text-xl text-[#2b1a14] mb-2">
              Practice, not just theory
            </h3>
            <p className="text-sm text-[#6b554b] leading-relaxed">
              Every lesson ends with something you ship: an interview, a landing page, an offer, a sale. You learn by doing.
            </p>
          </article>

          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 shadow-soft">
            <span className="text-3xl mb-3 block" aria-hidden="true">🤝</span>
            <h3 className="font-serif font-bold text-xl text-[#2b1a14] mb-2">
              Support from real founders
            </h3>
            <p className="text-sm text-[#6b554b] leading-relaxed">
              Mentors, peer groups and partner organizations help you move from idea to launch without going it alone.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
};
