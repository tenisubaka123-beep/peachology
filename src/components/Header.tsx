import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Menu, X, ArrowRight, Tag } from 'lucide-react';
import { UTMTracking } from '../types';

interface HeaderProps {
  utm: UTMTracking;
  onOpenApplyModal: (planId?: string) => void;
  onOpenDemoToolbar: () => void;
  activeCampaignLabel: string;
}

export const Header: React.FC<HeaderProps> = ({
  utm,
  onOpenApplyModal,
  onOpenDemoToolbar,
  activeCampaignLabel,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasUTM = Boolean(utm.utm_source || utm.utm_campaign);

  return (
    <header className="sticky top-0 z-40 bg-[#fffaf7]/90 backdrop-blur-md border-b border-[#f1dfd5] transition-all">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        
        {/* Brand Logo - Exact Peachology Fraunces Logo with Emoji (Locked single line) */}
        <div className="flex items-center space-x-2.5 flex-shrink-0">
          <a 
            href="#" 
            className="font-serif font-extrabold text-2xl text-[#2b1a14] tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0 inline-flex items-center select-none"
            aria-label="Peachology home"
          >
            <span className="whitespace-nowrap">Peach<span className="text-[#ff8a5c]">ology</span></span>
            <span className="ml-1.5 inline-block text-xl leading-none select-none" role="img" aria-label="Peach">🍑</span>
          </a>

          {hasUTM && (
            <button
              onClick={onOpenDemoToolbar}
              className="hidden xl:flex items-center space-x-1.5 text-xs bg-peach-100 text-peach-700 border border-peach-200 px-2.5 py-1 rounded-full font-medium hover:bg-peach-200 transition-colors whitespace-nowrap flex-shrink-0"
              title="Click to view campaign attribution"
            >
              <Tag className="w-3.5 h-3.5 text-peach-600" />
              <span>Referral: {activeCampaignLabel}</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation from Peachology Reference */}
        <nav aria-label="Main" className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[14px] xl:text-[15px] font-medium text-[#6b554b] flex-shrink-0">
          <a href="#program" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">Program</a>
          <a href="#curriculum" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">Curriculum</a>
          <a href="#pricing" className="hover:text-[#2b1a14] font-semibold text-[#f06a3a] transition-colors whitespace-nowrap">Pricing & Plans</a>
          <a href="#referrals" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">Referrals</a>
          <a href="#stories" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">Stories</a>
          <a href="#resources" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">Resources</a>
          <a href="#faq" className="hover:text-[#2b1a14] transition-colors whitespace-nowrap">FAQ</a>
        </nav>

        {/* Head Actions */}
        <div className="hidden sm:flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={onOpenDemoToolbar}
            className="inline-flex items-center space-x-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-peach-300 bg-white text-[#6b554b] hover:bg-peach-50 transition-all whitespace-nowrap"
            title="Open Demo & Growth Campaign Simulator"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-peach-600" />
            <span className="hidden xl:inline">Demo Tools</span>
          </button>

          <a
            href="#pricing"
            className="btn-peach-ghost text-xs xl:text-sm py-2 px-3 xl:px-4 whitespace-nowrap hidden md:inline-flex"
          >
            Info session
          </a>

          <button
            onClick={() => onOpenApplyModal('free-trial')}
            className="btn-peach-primary text-xs xl:text-sm py-2 px-4 xl:px-5 whitespace-nowrap"
          >
            <span>Sign up free</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenDemoToolbar}
            className="p-2 text-xs rounded-full border border-peach-300 bg-white text-[#6b554b]"
            aria-label="Demo tools"
          >
            <SlidersHorizontal className="w-4 h-4 text-peach-600" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#2b1a14] hover:bg-peach-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#f1dfd5] bg-[#fffaf7] px-5 pt-3 pb-6 space-y-4 text-left">
          {hasUTM && (
            <div className="flex items-center space-x-2 text-xs bg-peach-50 text-peach-700 p-2.5 rounded-xl border border-peach-200">
              <Tag className="w-3.5 h-3.5 text-peach-600 flex-shrink-0" />
              <span className="font-medium">Active Referral: {activeCampaignLabel}</span>
            </div>
          )}

          <nav className="flex flex-col space-y-3 font-medium text-[#2b1a14] text-base">
            <a href="#program" onClick={() => setMobileMenuOpen(false)} className="py-1">Program</a>
            <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="py-1">Curriculum</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 font-bold text-[#f06a3a]">Pricing & Plans (€299)</a>
            <a href="#referrals" onClick={() => setMobileMenuOpen(false)} className="py-1">Referral Offer</a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="py-1">Student Stories</a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="py-1">Resources</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1">FAQ</a>
          </nav>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal('free-trial');
              }}
              className="w-full btn-peach-primary py-3"
            >
              <span>Sign up for Free Trial (€0)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
