import React from 'react';
import { FUND_CHECK_CLARIFICATION } from '../data/sampleData';
import { CheckCircle2, ShieldCheck, HelpCircle, FileText, Sparkles, MapPin, Search } from 'lucide-react';

export const FundCheckClarification: React.FC = () => {
  return (
    <div className="mb-14 space-y-8">
      
      {/* Educational Banner for European Visitors */}
      <div className="bg-white border-2 border-peach-200 rounded-[24px] p-6 sm:p-8 shadow-soft text-left space-y-6">
        <div className="space-y-2 border-b border-[#f1dfd5] pb-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-peach-100 text-peach-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparency for European Founders</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#2b1a14]">
            {FUND_CHECK_CLARIFICATION.title}
          </h3>
          <p className="text-sm sm:text-base text-[#6b554b] leading-relaxed">
            {FUND_CHECK_CLARIFICATION.leadSubtitle}
          </p>
        </div>

        {/* Two-Column Breakdown: What Is Assessed vs What You Receive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: What is assessed */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#2b1a14]">
              <div className="w-7 h-7 rounded-full bg-peach-500 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2b1a14]">
                What is assessed during the check:
              </h4>
            </div>

            <div className="space-y-3">
              {FUND_CHECK_CLARIFICATION.whatIsAssessed.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-peach-50 border border-peach-200/70 text-xs space-y-1">
                  <span className="font-bold text-[#2b1a14] block">
                    {item.title}
                  </span>
                  <p className="text-[#6b554b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: What you receive */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#2b1a14]">
              <div className="w-7 h-7 rounded-full bg-leaf text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2b1a14]">
                What you receive immediately:
              </h4>
            </div>

            <div className="space-y-3">
              {FUND_CHECK_CLARIFICATION.whatYouReceive.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#eef6f0] border border-leaf/20 text-xs space-y-1">
                  <span className="font-bold text-[#2b1a14] block">
                    {item.title}
                  </span>
                  <p className="text-[#6b554b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Privacy & Speed Footnote */}
        <div className="pt-4 border-t border-[#f1dfd5] flex flex-wrap items-center justify-between text-xs text-[#6b554b] gap-3">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-leaf" />
            <span>Zero personal bank details requested • No credit card needed</span>
          </span>
          <span className="text-peach-600 font-bold">
            Average completion time: under 30 seconds
          </span>
        </div>

      </div>

    </div>
  );
};
