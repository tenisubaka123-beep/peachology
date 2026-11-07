import React from 'react';

export const CommunitySection: React.FC = () => {
  const partners = [
    'Your university',
    'Local incubator',
    'Youth association',
    'Chamber of commerce',
    'Business school',
    'Campus innovation hub',
    'Student entrepreneur society'
  ];

  return (
    <section aria-labelledby="community-title" className="py-20 sm:py-24 bg-[#fff6f1] border-b border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 text-center">
        
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
          Authority through community
        </span>
        <h2 id="community-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
          Built with schools, universities and local organizations
        </h2>
        <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed max-w-2xl mx-auto mt-3">
          We share student founder success stories, run workshops with local partners and host regular information sessions on campus and online.
        </p>

        {/* Partner Pills from peachology.vercel.app */}
        <div className="flex flex-wrap gap-3.5 justify-center mt-10" aria-label="Partner placeholders">
          {partners.map((p, idx) => (
            <span
              key={idx}
              className="py-2.5 px-5 rounded-full border border-dashed border-peach-400 text-sm font-medium text-[#6b554b] bg-white/60 hover:bg-white transition-colors"
            >
              {p}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
