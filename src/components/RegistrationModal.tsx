import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Check, 
  Gift, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Coffee, 
  MapPin, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Clock, 
  HelpCircle 
} from 'lucide-react';
import { PROGRAM_PLANS, SAMPLE_PARIS_CAFE, SAMPLE_FUNDING_MATCHES, FUND_CHECK_CLARIFICATION } from '../data/sampleData';
import { ProgramPlan, UTMTracking, FundingFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: string;
  onSelectPlanId: (id: 'free-trial' | 'standard' | 'individual-mentoring') => void;
  utm: UTMTracking;
  onSuccess: () => void;
  initialStep?: 'signup' | 'fundcheck';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId,
  onSelectPlanId,
  utm,
  onSuccess,
  initialStep = 'signup'
}) => {
  const [step, setStep] = useState<'signup' | 'fundcheck' | 'results'>(initialStep);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [referralCode, setReferralCode] = useState('');

  // Fund Check state inside onboarding
  const [fundData, setFundData] = useState<FundingFormData>({
    businessIdea: '',
    location: '',
    businessStage: 'Idea & Pre-launch (within 1st year of graduation)',
    fundingNeed: '€45,000',
  });
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (utm.utm_content === 'poster_a') {
      setReferralCode('POSTER-A');
    } else if (utm.utm_content === 'poster_b') {
      setReferralCode('POSTER-B');
    } else if (utm.creator) {
      setReferralCode(`CREATOR-${utm.creator.toUpperCase()}`);
    } else if (utm.referralCode) {
      setReferralCode(utm.referralCode.toUpperCase());
    }
  }, [utm]);

  useEffect(() => {
    if (isOpen) {
      setStep(initialStep || 'signup');
    }
  }, [isOpen, initialStep]);

  if (!isOpen) return null;

  const currentPlan = PROGRAM_PLANS.find(p => p.id === selectedPlanId) || PROGRAM_PLANS[0];
  const hasReferralBenefit = referralCode.trim().length > 0;

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After sign up, transition directly to the included European Fund Check
    setStep('fundcheck');
  };

  const handleLoadParisSample = () => {
    setFundData({ ...SAMPLE_PARIS_CAFE });
  };

  const handleFundCheckSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setStep('results');
    }, 900);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
    >
      <div className="bg-[#fffaf7] border border-[#f1dfd5] rounded-[28px] shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left text-[#2b1a14]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#f1dfd5] flex items-center justify-between flex-shrink-0">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-peach-600 block">
                {step === 'signup' && 'Peachology Registration'}
                {step === 'fundcheck' && 'Step 2: Your Initial European Fund Check'}
                {step === 'results' && 'Your Verified Grant & Loan Matches'}
              </span>
              <span className="text-xs text-[#988177]">•</span>
              <span className="text-xs text-leaf font-semibold">
                {currentPlan.name} ({currentPlan.priceDisplay})
              </span>
            </div>
            <h2 id="registration-title" className="font-serif font-bold text-xl sm:text-2xl text-[#2b1a14]">
              {step === 'signup' && 'Create Your Student Founder Account'}
              {step === 'fundcheck' && 'What business idea are you building?'}
              {step === 'results' && 'Personalized Match Report Ready'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6b554b] hover:text-[#2b1a14] hover:bg-peach-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          
          {/* STEP 1: SIGN-UP FORM */}
          {step === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-6">
              
              {/* Plan Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#2b1a14] block">
                  Selected Program:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PROGRAM_PLANS.map((plan) => {
                    const isSelected = plan.id === selectedPlanId;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => onSelectPlanId(plan.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected 
                            ? 'border-peach-500 bg-white ring-2 ring-peach-500/20 shadow-soft' 
                            : 'border-[#f1dfd5] bg-white/70 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs sm:text-sm text-[#2b1a14]">{plan.name}</span>
                          {plan.isMainLaunchPrice && (
                            <span className="text-[10px] bg-peach-500 text-white font-bold px-1.5 py-0.5 rounded-full">
                              Main
                            </span>
                          )}
                        </div>
                        <div className="font-serif font-extrabold text-lg text-peach-600">
                          {plan.priceDisplay}
                        </div>
                        <span className="text-[10px] text-[#6b554b] block mt-0.5">
                          {plan.feeType}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Breakdown Banner */}
              <div className="p-4 rounded-2xl bg-white border border-[#f1dfd5] space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-sm text-[#2b1a14]">
                  <span>Total Payable Price:</span>
                  <span className="font-serif text-lg text-peach-600">
                    {currentPlan.priceDisplay} (VAT included)
                  </span>
                </div>
                <div className="text-[#6b554b] text-[11px] flex justify-between">
                  <span>Fee Category:</span>
                  <span className="font-semibold text-peach-700 uppercase">One-time program fee</span>
                </div>
                {currentPlan.proposedPrice > 0 && (
                  <div className="text-[#6b554b] text-[11px] flex justify-between border-t border-[#f1dfd5] pt-1 mt-1">
                    <span>Tax Breakdown:</span>
                    <span>Net €{currentPlan.netPrice.toFixed(2)} + 20% VAT €{currentPlan.vatAmount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-[#2b1a14]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Camille Bernard"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#2b1a14]">Student / University Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="camille@student.escp.eu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#2b1a14]">University / Business School</label>
                  <input
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="e.g. ESCP / HEC / Paris Dauphine"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#2b1a14]">Referral Code (Optional)</label>
                  <input
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                    placeholder="e.g. POSTER-A or CAMPUS"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] uppercase font-semibold focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                  />
                </div>
              </div>

              {/* Referral Benefit Active Box */}
              {hasReferralBenefit && (
                <div className="p-3.5 bg-peach-100/80 border border-peach-300 rounded-2xl flex items-center space-x-3 text-xs text-peach-800 animate-in fade-in">
                  <Gift className="w-5 h-5 text-peach-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Referral Perk Unlocked:</span>
                    <span>You unlock an additional 30-minute individual consultation to discuss your business idea at €0 extra cost!</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#6b554b] flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-leaf" />
                  <span>Next: Take your initial fund check (included free)</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto btn-peach-primary py-3 px-8 text-sm"
                >
                  <span>Sign Up & Open Fund Check</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: THE INCLUDED EUROPEAN FUND CHECK FORM */}
          {step === 'fundcheck' && (
            <div className="space-y-6 text-left">
              
              <div className="p-4 rounded-2xl bg-peach-50 border border-peach-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-peach-700 block">
                    Included with your {currentPlan.name}
                  </span>
                  <p className="text-xs text-[#6b554b]">
                    Assess your regional grant & 0% honor loan eligibility in under 30 seconds.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleLoadParisSample}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white text-peach-700 border border-peach-300 text-xs font-semibold hover:bg-peach-100 transition-all shadow-xs"
                >
                  <Coffee className="w-3.5 h-3.5 text-peach-600" />
                  <span>Try Sample Idea (Paris Café)</span>
                </button>
              </div>

              <form onSubmit={handleFundCheckSubmit} className="space-y-4 text-xs">
                
                <div className="space-y-1">
                  <label className="font-bold text-[#2b1a14] block">
                    1. Describe your business idea or concept *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={fundData.businessIdea}
                    onChange={(e) => setFundData({ ...fundData, businessIdea: e.target.value })}
                    placeholder="e.g. Specialty student-friendly café near Paris universities with eco-sourced beans & study pods..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#2b1a14] block">
                      2. Target Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={fundData.location}
                      onChange={(e) => setFundData({ ...fundData, location: e.target.value })}
                      placeholder="e.g. Paris, France (Île-de-France)"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] focus:outline-none focus:ring-2 focus:ring-peach-500 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#2b1a14] block">
                      3. Stage & Graduation Status *
                    </label>
                    <select
                      value={fundData.businessStage}
                      onChange={(e) => setFundData({ ...fundData, businessStage: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] bg-white focus:outline-none focus:ring-2 focus:ring-peach-500"
                    >
                      <option value="Idea & Pre-launch (within 1st year of graduation)">
                        Idea Stage (Active Student / 1st-Yr Grad)
                      </option>
                      <option value="Prototype & Business Plan Ready">
                        Prototype / MVP In Progress
                      </option>
                      <option value="First 6 Months Post-Incorporation">
                        First 6 Months Post-Incorporation
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#2b1a14] block">
                    4. Estimated Seed Capital Needed
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['€15,000 – €25,000', '€45,000', '€75,000+'].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFundData({ ...fundData, fundingNeed: tier })}
                        className={`py-2 px-2 rounded-xl text-center font-medium border text-xs ${
                          fundData.fundingNeed === tier
                            ? 'border-peach-500 bg-peach-500 text-white font-bold'
                            : 'border-[#f1dfd5] bg-white hover:border-peach-300'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep('signup')}
                    className="text-xs font-semibold text-[#6b554b] hover:text-[#2b1a14]"
                  >
                    ← Back to plan details
                  </button>

                  <button
                    type="submit"
                    disabled={isScanning}
                    className="btn-peach-primary py-2.5 px-6 text-xs sm:text-sm"
                  >
                    {isScanning ? 'Assessing Databases...' : 'Scan Grant Eligibility (30s)'}
                  </button>
                </div>

              </form>
            </div>
          )}

          {/* STEP 3: FUND CHECK MATCH RESULTS */}
          {step === 'results' && (
            <div className="space-y-5 text-left animate-in fade-in">
              
              <div className="p-4 rounded-2xl bg-white border border-peach-200 shadow-soft">
                <div className="flex items-center justify-between border-b border-[#f1dfd5] pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-peach-500 text-white px-2 py-0.5 rounded-full">
                      Verified Demo Matches
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#2b1a14] mt-1">
                      Pathways for: {fundData.location || 'Paris, France'}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-ink-light uppercase block">Total Identified</span>
                    <span className="font-serif font-bold text-xl text-peach-600">Up to €50,000</span>
                  </div>
                </div>

                <p className="text-xs text-[#6b554b] mt-2">
                  Founder profile: <strong>{name || 'Student Founder'}</strong> • {fundData.businessStage}
                </p>
              </div>

              {/* 3 Matches Cards */}
              <div className="space-y-3.5">
                {SAMPLE_FUNDING_MATCHES.map((match) => (
                  <div key={match.id} className="p-4 rounded-2xl bg-white border border-[#f1dfd5] text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#2b1a14] text-sm">{match.programName}</span>
                      <span className="font-serif font-bold text-peach-600">{match.amountRange}</span>
                    </div>
                    <p className="text-[#6b554b] bg-peach-50/60 p-2 rounded-lg border border-peach-100">
                      {match.fitReason}
                    </p>
                    <div className="text-[11px] text-[#2b1a14]">
                      <strong>Suggested Next Step:</strong> {match.suggestedNextStep}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('fundcheck')}
                  className="text-xs font-semibold text-[#6b554b] hover:text-[#2b1a14]"
                >
                  ← Test another idea
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto btn-peach-primary py-2.5 px-6 text-xs"
                >
                  <span>Finish & Go to Student Area</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
