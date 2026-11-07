import React from 'react';
import { ArrowRight, Gift, Sparkles } from 'lucide-react';
import { REFERRAL_KEY_MESSAGE } from '../data/sampleData';

interface HeroProps {
  onOpenApplyModal: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApplyModal,
}) => {
  return (
    <section 
      aria-labelledby="hero-title"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden"
      style={{
        background: 'radial-gradient(1200px 500px at 85% -10%, #ffd2bb, transparent 60%), radial-gradient(700px 400px at -10% 110%, #ffe9dd, transparent 60%)'
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Referral Program Key Message Highlight Banner */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-peach-300 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-xs">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-peach-100 flex items-center justify-center text-peach-600 flex-shrink-0">
              <Gift className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#2b1a14] leading-snug">
              <strong className="text-peach-600 font-bold">Referral Offer: </strong>
              {REFERRAL_KEY_MESSAGE}
            </p>
          </div>

          <a 
            href="#referrals" 
            className="flex-shrink-0 text-xs font-bold text-peach-600 hover:text-peach-700 underline underline-offset-2 flex items-center space-x-1"
          >
            <span>See referral terms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Split Grid from peachology.vercel.app */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Lead & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600">
              Entrepreneurship training for students
            </span>

            {/* Exact Headline from peachology.vercel.app */}
            <h1 id="hero-title" className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.12]">
              Learn entrepreneurship by <em className="not-italic text-peach-600">building a real business</em> while you study.
            </h1>

            {/* Exact Lead from peachology.vercel.app */}
            <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed max-w-2xl font-normal">
              Peachology is a hands-on startup program for students and young entrepreneurs. In a few months you'll validate an idea, create your first offer and find your first customers — with mentors by your side.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenApplyModal('standard')}
                className="btn-peach-primary text-sm sm:text-base py-3.5 px-7"
              >
                <span>Apply to the next cohort</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onOpenApplyModal('free-trial')}
                className="btn-peach-ghost text-sm sm:text-base py-3 px-6"
              >
                <Sparkles className="w-4 h-4 text-peach-600" />
                <span>Start with Free Trial (€0)</span>
              </button>
            </div>

            {/* Hero Stats Row from peachology.vercel.app */}
            <div className="pt-6 border-t border-peach-200/80 flex flex-wrap gap-8 text-[#2b1a14]">
              <div>
                <strong className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#2b1a14]">4 h</strong>
                <span className="text-xs sm:text-sm text-[#6b554b]">per week, fits timetable</span>
              </div>
              <div>
                <strong className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#2b1a14]">4</strong>
                <span className="text-xs sm:text-sm text-[#6b554b]">practical modules</span>
              </div>
              <div>
                <strong className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#2b1a14]">1</strong>
                <span className="text-xs sm:text-sm text-[#6b554b]">real business launched</span>
              </div>
              <div>
                <strong className="block font-serif text-2xl sm:text-3xl font-extrabold text-peach-600">€0</strong>
                <span className="text-xs sm:text-sm text-[#6b554b]">Free Trial includes fund check</span>
              </div>
            </div>

          </div>

          {/* Right Column: Exact Photo & Journey Overlay from peachology.vercel.app */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full mx-auto max-w-md lg:max-w-none">
              
              {/* Organic background gradient shape behind photo */}
              <div 
                aria-hidden="true"
                className="absolute inset-[8%_3%_2%] rounded-[48%_52%_40%_60%_/_55%_45%_55%_45%] bg-gradient-to-br from-peach-200 to-peach-400 z-0 opacity-80"
              />

              {/* Real Peachology Students Image - fully visible and unobstructed */}
              <img 
                src="/images/students-team.webp" 
                alt="Group of students celebrating with high-fives around a table covered in business sketches and a prototype"
                width={692} 
                height={630} 
                className="relative z-10 w-full h-auto drop-shadow-xl rounded-2xl object-cover"
              />
            </div>

            {/* Clean journey card positioned underneath the image so it doesn't obstruct the photo */}
            <aside 
              aria-labelledby="journey-title"
              className="w-full mt-5 bg-white border border-[#f1dfd5] rounded-2xl p-4 sm:p-5 shadow-soft z-10"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 id="journey-title" className="font-serif font-bold text-sm sm:text-base text-[#2b1a14]">
                  Your journey: Learn, Build, Launch
                </h2>
                <span className="text-[11px] font-semibold text-peach-600 bg-peach-50 px-2 py-0.5 rounded-full border border-peach-200">
                  4 modules
                </span>
              </div>
              <ol className="list-none m-0 p-0 grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-[#2b1a14]">
                <li className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-peach-50/80 border border-peach-100 hover:bg-peach-100/70 transition-colors">
                  <b className="w-5 h-5 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</b>
                  <span className="font-semibold text-[#2b1a14]">Validate idea</span>
                </li>
                <li className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-peach-50/80 border border-peach-100 hover:bg-peach-100/70 transition-colors">
                  <b className="w-5 h-5 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</b>
                  <span className="font-semibold text-[#2b1a14]">Create offer</span>
                </li>
                <li className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-peach-50/80 border border-peach-100 hover:bg-peach-100/70 transition-colors">
                  <b className="w-5 h-5 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</b>
                  <span className="font-semibold text-[#2b1a14]">Find customers</span>
                </li>
                <li className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-peach-50/80 border border-peach-100 hover:bg-peach-100/70 transition-colors">
                  <b className="w-5 h-5 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</b>
                  <span className="font-semibold text-[#2b1a14]">Launch for real</span>
                </li>
              </ol>
            </aside>
          </div>

        </div>

      </div>
    </section>
  );
};
