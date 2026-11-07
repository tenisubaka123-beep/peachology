import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { PROGRAM_PLANS } from '../data/sampleData';
import { ProgramPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 sm:py-24 bg-[#fffaf7]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600">
            Proposed Program Plans & Pricing
          </span>
          <h2 id="pricing-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Invest in your launch, with zero surprise fees
          </h2>
          <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed">
            All prices clearly display total payable fees with applicable VAT included. Every tier is a one-time program fee—no recurring subscription traps.
          </p>
        </div>

        {/* Pricing Policy & VAT Transparency Notice (Per User Prompt) */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-peach-50 border border-peach-200/90 max-w-3xl mx-auto flex items-start space-x-3.5 text-xs sm:text-sm text-[#2b1a14]">
          <Info className="w-5 h-5 text-peach-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#2b1a14] block">
              Launch Pricing & VAT Framework:
            </span>
            <p className="text-[#6b554b] leading-relaxed">
              These are proposed launch prices, subject to checking delivery costs and VAT treatment in your launch countries. We are launching with <strong>€299 as the main price</strong> to validate student demand and delivery costs before adjusting.
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROGRAM_PLANS.map((plan) => {
            const isMain = plan.isMainLaunchPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isMain 
                    ? 'bg-white border-2 border-peach-500 shadow-peach-lg ring-4 ring-peach-100' 
                    : 'bg-white border border-[#f1dfd5] shadow-soft hover:border-peach-300'
                }`}
              >
                {/* Main Launch Price Badge */}
                {isMain && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-peach-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Recommended Main Launch Price
                  </div>
                )}

                <div className="space-y-5">
                  
                  {/* Plan Name & Duration */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-peach-600">
                      {plan.duration}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#2b1a14]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#6b554b]">
                      {plan.includedSummary}
                    </p>
                  </div>

                  {/* Price Tag with VAT & One-Time Fee Label */}
                  <div className="py-4 px-5 rounded-2xl bg-[#fff6f1] border border-[#f1dfd5]">
                    <div className="flex items-baseline space-x-1.5">
                      <span className="font-serif font-extrabold text-4xl text-[#2b1a14]">
                        {plan.priceDisplay}
                      </span>
                      {plan.proposedPrice > 0 && (
                        <span className="text-xs text-[#6b554b] font-medium">/ 8 weeks</span>
                      )}
                    </div>

                    <div className="mt-1 pt-1.5 border-t border-peach-200/80 flex flex-col space-y-0.5 text-[11px]">
                      <span className="font-bold text-[#f06a3a] uppercase tracking-wider">
                        {plan.feeType}
                      </span>
                      <span className="font-medium text-[#2b1a14]">
                        Total payable: {plan.totalPayablePrice}
                      </span>
                      {plan.proposedPrice > 0 && (
                        <span className="text-[#6b554b]">
                          (Net: €{plan.netPrice.toFixed(2)} + 20% VAT €{plan.vatAmount.toFixed(2)})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#2b1a14]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-light block">
                      What is included:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                        <span className="leading-snug text-[#2b1a14]">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Call To Action Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center space-x-2 ${
                      isMain 
                        ? 'btn-peach-primary shadow-peach' 
                        : 'border-2 border-peach-400 text-[#2b1a14] hover:bg-peach-100'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee and Payment Security Footnote */}
        <div className="mt-12 text-center text-xs text-[#6b554b] flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-leaf" />
            <span>14-day money-back satisfaction guarantee on paid plans</span>
          </span>
          <span>•</span>
          <span>Secure checkout via Stripe</span>
          <span>•</span>
          <span>Student installment options available upon request</span>
        </div>

      </div>
    </section>
  );
};
