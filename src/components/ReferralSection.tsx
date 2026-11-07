import React, { useState } from 'react';
import { Gift, CheckCircle2, UserCheck, Award, ArrowRight, Copy, Check } from 'lucide-react';
import { REFERRAL_KEY_MESSAGE, REFERRAL_OFFER_DATA } from '../data/sampleData';

interface ReferralSectionProps {
  onClaimReferral: (code: string) => void;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({ onClaimReferral }) => {
  const [testCode, setTestCode] = useState('CAMPUS-PARIS');
  const [codeApplied, setCodeApplied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (testCode.trim()) {
      setCodeApplied(true);
      setTimeout(() => setCodeApplied(false), 4000);
      onClaimReferral(testCode.trim());
    }
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/?ref=${testCode}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="referrals" aria-labelledby="referrals-title" className="py-20 sm:py-24 bg-[#fff6f1] border-b border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-peach-100 text-peach-700 text-xs font-semibold">
            <Gift className="w-3.5 h-3.5 text-peach-600" />
            <span>Simple Referral Offer</span>
          </div>
          <h2 id="referrals-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Give a 30-min consultation, get a 30-min mentoring session
          </h2>
          <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed">
            No complex point systems or hidden catches. Introduce your student peers to Peachology and unlock direct 1-on-1 advisor time.
          </p>
        </div>

        {/* The Exact Key Message Quote Card from Prompt */}
        <div className="mb-12 p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-peach-500 to-peach-600 text-white shadow-peach text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-peach-100 block">
            The Peachology Invitation Promise
          </span>
          <blockquote className="font-serif text-xl sm:text-2xl font-bold leading-snug">
            “{REFERRAL_KEY_MESSAGE}”
          </blockquote>
        </div>

        {/* The Two Roles Table / Cards Grid from Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          
          {/* Card 1: Referred Person */}
          <div className="bg-white border-2 border-peach-300 rounded-[22px] p-7 shadow-soft space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-peach-600 bg-peach-50 px-3 py-1 rounded-full border border-peach-200">
                Participant: Referred person
              </span>
              <UserCheck className="w-6 h-6 text-peach-500" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-ink-light block">
                Additional Free Benefit:
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#2b1a14]">
                One 30-minute individual consultation
              </h3>
            </div>

            <div className="pt-3 border-t border-[#f1dfd5] space-y-1">
              <span className="text-xs font-bold uppercase text-ink-light block">
                Condition:
              </span>
              <p className="text-sm text-[#6b554b] font-medium leading-relaxed">
                Enter a referral code when registering; <strong className="text-[#2b1a14]">no paid enrollment required</strong>.
              </p>
            </div>
          </div>

          {/* Card 2: Referrer */}
          <div className="bg-white border-2 border-[#f1dfd5] rounded-[22px] p-7 shadow-soft space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-leaf bg-leaf-light px-3 py-1 rounded-full border border-leaf/20">
                Participant: Referrer
              </span>
              <Award className="w-6 h-6 text-leaf" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-ink-light block">
                Additional Free Benefit:
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#2b1a14]">
                One 30-minute mentoring session
              </h3>
            </div>

            <div className="pt-3 border-t border-[#f1dfd5] space-y-1">
              <span className="text-xs font-bold uppercase text-ink-light block">
                Condition:
              </span>
              <p className="text-sm text-[#6b554b] font-medium leading-relaxed">
                Awarded after the referred person purchases a program and the applicable refund period ends.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Referral Code Tester & Generator */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 border border-[#f1dfd5] shadow-sm text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2b1a14] block">
            Have a referral code from a campus poster or friend?
          </span>

          <form onSubmit={handleApplyCode} className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              value={testCode}
              onChange={(e) => setTestCode(e.target.value.toUpperCase())}
              placeholder="e.g. CAMPUS-PARIS or POSTER_A"
              className="w-full sm:flex-1 px-4 py-2.5 rounded-full border border-peach-300 text-sm font-semibold text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 uppercase"
            />
            <button
              type="submit"
              className="w-full sm:w-auto btn-peach-primary text-xs py-2.5 px-5 whitespace-nowrap"
            >
              Verify Code & Claim
            </button>
          </form>

          {codeApplied && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Referral Code Verified:</strong> One 30-minute 1-on-1 consultation unlocked at €0 cost!
              </span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-center space-x-3 text-xs text-[#6b554b]">
            <span>Or share your custom link:</span>
            <button
              onClick={handleCopyShareLink}
              className="inline-flex items-center space-x-1 font-semibold text-peach-600 hover:text-peach-700"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied to clipboard!' : 'Copy invite link'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
