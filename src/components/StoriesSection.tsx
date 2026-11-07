import React from 'react';

export const StoriesSection: React.FC = () => {
  return (
    <section id="stories" aria-labelledby="stories-title" className="py-20 sm:py-24 bg-[#fff6f1] border-y border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
            Student founder stories
          </span>
          <h2 id="stories-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            From classroom idea to real customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <blockquote className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <p className="font-serif font-bold text-lg sm:text-xl text-[#2b1a14] leading-snug">
              “I came in with a vague idea and left with paying customers. The weekly projects kept me moving even during exams.”
            </p>
            <footer className="mt-6 pt-4 border-t border-[#f1dfd5] text-xs text-[#6b554b]">
              <strong className="text-sm text-[#2b1a14] block">Lucas M.</strong>
              <span>Business student (ESCP) · Founder of Café Botanique</span>
            </footer>
          </blockquote>

          <blockquote className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <p className="font-serif font-bold text-lg sm:text-xl text-[#2b1a14] leading-snug">
              “Interviewing customers in week two completely changed my product. That one exercise saved me months.”
            </p>
            <footer className="mt-6 pt-4 border-t border-[#f1dfd5] text-xs text-[#6b554b]">
              <strong className="text-sm text-[#2b1a14] block">Sarah L.</strong>
              <span>Engineering student · Founder of EcoPack Studio</span>
            </footer>
          </blockquote>

          <blockquote className="bg-white border border-[#f1dfd5] rounded-[18px] p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <p className="font-serif font-bold text-lg sm:text-xl text-[#2b1a14] leading-snug">
              “Demo day was the first time I pitched to real investors and partners. Now my side project is my full-time job.”
            </p>
            <footer className="mt-6 pt-4 border-t border-[#f1dfd5] text-xs text-[#6b554b]">
              <strong className="text-sm text-[#2b1a14] block">Antoine D.</strong>
              <span>Recent graduate (Paris Dauphine) · Founder of StudyFlow</span>
            </footer>
          </blockquote>

        </div>

      </div>
    </section>
  );
};
