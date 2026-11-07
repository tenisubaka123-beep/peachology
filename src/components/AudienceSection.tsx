import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section aria-labelledby="audience-title" className="py-20 sm:py-24 bg-[#fffaf7]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
            Who it's for
          </span>
          <h2 id="audience-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Business programs for young entrepreneurs, schools and communities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl block" aria-hidden="true">🎓</span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14]">
                Students and recent graduates
              </h3>
              <p className="text-sm text-[#6b554b] leading-relaxed">
                Build a real business alongside your degree, or straight after it, and graduate with experience and not just a diploma.
              </p>
            </div>
            <a href="#curriculum" className="mt-5 inline-flex items-center space-x-1 font-semibold text-sm text-peach-600 hover:text-peach-700">
              <span>Entrepreneurship for students</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </article>

          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl block" aria-hidden="true">🏫</span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14]">
                Schools and universities
              </h3>
              <p className="text-sm text-[#6b554b] leading-relaxed">
                Bring Peachology to your campus as an elective, an extracurricular track or a workshop series for your learners.
              </p>
            </div>
            <a href="#pricing" className="mt-5 inline-flex items-center space-x-1 font-semibold text-sm text-peach-600 hover:text-peach-700">
              <span>Partner with us</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </article>

          <article className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl block" aria-hidden="true">📍</span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14]">
                Local youth organizations
              </h3>
              <p className="text-sm text-[#6b554b] leading-relaxed">
                Run practical startup workshops in your city and give young people a concrete path into entrepreneurship.
              </p>
            </div>
            <a href="#referrals" className="mt-5 inline-flex items-center space-x-1 font-semibold text-sm text-peach-600 hover:text-peach-700">
              <span>Startup workshops near you</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </article>

        </div>

      </div>
    </section>
  );
};
