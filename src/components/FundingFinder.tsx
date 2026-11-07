import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  ShieldCheck, 
  Clock, 
  Tag, 
  Coffee 
} from 'lucide-react';
import { FundingFormData, UTMTracking } from '../types';
import { SAMPLE_PARIS_CAFE, SAMPLE_FUNDING_MATCHES } from '../data/sampleData';
import { FundCheckClarification } from './FundCheckClarification';

interface FundingFinderProps {
  utm: UTMTracking;
  prefillTrigger?: number;
  onExploreBudget: () => void;
}

export const FundingFinder: React.FC<FundingFinderProps> = ({
  utm,
  prefillTrigger,
  onExploreBudget,
}) => {
  const [formData, setFormData] = useState<FundingFormData>({
    businessIdea: '',
    location: '',
    businessStage: '',
    fundingNeed: '€25,000 – €50,000',
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [sampleLoadedNotice, setSampleLoadedNotice] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefillTrigger && prefillTrigger > 0) {
      loadSampleParisCafe();
    }
  }, [prefillTrigger]);

  const loadSampleParisCafe = () => {
    setFormData({ ...SAMPLE_PARIS_CAFE });
    setFormErrors({});
    setSampleLoadedNotice(true);
    setTimeout(() => setSampleLoadedNotice(false), 4000);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.businessIdea.trim()) {
      errors.businessIdea = 'Please describe your business idea or concept.';
    } else if (formData.businessIdea.trim().length < 8) {
      errors.businessIdea = 'Please provide a little more detail (at least 8 characters).';
    }

    if (!formData.location.trim()) {
      errors.location = 'Please specify your target city or region.';
    }

    if (!formData.businessStage) {
      errors.businessStage = 'Please select your current business stage.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 350);
    setTimeout(() => setScanStep(3), 700);

    setTimeout(() => {
      setIsScanning(false);
      setHasSearched(true);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      businessIdea: '',
      location: '',
      businessStage: '',
      fundingNeed: '€25,000 – €50,000',
    });
    setHasSearched(false);
    setFormErrors({});
  };

  const hasUTM = Boolean(utm.utm_source || utm.utm_campaign);

  return (
    <section id="fund-check" className="py-20 sm:py-24 bg-[#fffaf7] relative border-b border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-peach-100 text-peach-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-peach-600" />
            <span>Interactive Fund Check</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Check Your European Startup Funding Eligibility
          </h2>
          <p className="text-base sm:text-lg text-[#6b554b] max-w-2xl mx-auto">
            Find out what non-dilutive grants, zero-interest honor loans, and student founder incentives fit your idea in under 30 seconds.
          </p>
        </div>

        {/* User Prompt: European Fund Check Clarification Section */}
        <FundCheckClarification />

        {/* The Main Funding Finder Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-[26px] border border-[#f1dfd5] shadow-card overflow-hidden">
          
          {/* Card Top Banner with "Try a sample idea" button */}
          <div className="p-4 sm:p-6 bg-peach-50 border-b border-[#f1dfd5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-peach-700 flex items-center space-x-1.5">
                <span>Free Initial Assessment</span>
                <span className="text-ink-light">•</span>
                <span className="text-leaf">No Account Required</span>
              </span>
              <p className="text-xs text-[#6b554b]">
                Complete in under 30 seconds to reveal regional public funding matches.
              </p>
            </div>

            {/* "Try a sample idea" Button */}
            <button
              type="button"
              onClick={loadSampleParisCafe}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white hover:bg-peach-100 text-[#2b1a14] border border-peach-300 shadow-xs font-semibold text-xs transition-all active:scale-95 group"
              title="Pre-fill form with a student planning to open a café in Paris"
            >
              <Coffee className="w-4 h-4 text-peach-600 group-hover:rotate-12 transition-transform" />
              <span>Try a sample idea (Paris Café)</span>
            </button>
          </div>

          {/* Sample Loaded Feedback Banner */}
          {sampleLoadedNotice && (
            <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 flex items-center justify-between text-xs text-emerald-900 animate-in fade-in">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  <strong>Sample loaded:</strong> Paris Student Café (€45,000 need, Pre-launch). Submit below to view demo matches!
                </span>
              </div>
              <button 
                onClick={() => setSampleLoadedNotice(false)}
                className="text-emerald-700 hover:text-emerald-900 font-bold ml-2"
              >
                ✕
              </button>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-left">
            
            {/* Input 1: Business Idea */}
            <div className="space-y-1.5">
              <label 
                htmlFor="businessIdea"
                className="block text-xs font-bold uppercase tracking-wider text-[#2b1a14]"
              >
                1. What is your business idea or concept? <span className="text-peach-600">*</span>
              </label>
              <textarea
                id="businessIdea"
                rows={3}
                value={formData.businessIdea}
                onChange={(e) => {
                  setFormData({ ...formData, businessIdea: e.target.value });
                  if (formErrors.businessIdea) setFormErrors({ ...formErrors, businessIdea: '' });
                }}
                placeholder="e.g., Specialty student-friendly café near Paris universities with eco-sourced beans, quiet study pods, and founder events..."
                className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all text-[#2b1a14] placeholder:text-[#988177] focus:outline-none focus:ring-2 ${
                  formErrors.businessIdea 
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                    : 'border-[#f1dfd5] focus:ring-peach-500 focus:border-peach-500 bg-white'
                }`}
              />
              {formErrors.businessIdea && (
                <p className="text-xs text-red-600 flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{formErrors.businessIdea}</span>
                </p>
              )}
            </div>

            {/* Row: Location & Business Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Input 2: Location */}
              <div className="space-y-1.5">
                <label 
                  htmlFor="location"
                  className="block text-xs font-bold uppercase tracking-wider text-[#2b1a14]"
                >
                  2. Location / Target Market <span className="text-peach-600">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#988177] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      if (formErrors.location) setFormErrors({ ...formErrors, location: '' });
                    }}
                    placeholder="e.g., Paris, France (Île-de-France)"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all text-[#2b1a14] placeholder:text-[#988177] focus:outline-none focus:ring-2 ${
                      formErrors.location 
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                        : 'border-[#f1dfd5] focus:ring-peach-500 focus:border-peach-500 bg-white'
                    }`}
                  />
                </div>
                {formErrors.location && (
                  <p className="text-xs text-red-600 flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.location}</span>
                  </p>
                )}
              </div>

              {/* Input 3: Business Stage */}
              <div className="space-y-1.5">
                <label 
                  htmlFor="businessStage"
                  className="block text-xs font-bold uppercase tracking-wider text-[#2b1a14]"
                >
                  3. Business Stage <span className="text-peach-600">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-[#988177] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="businessStage"
                    value={formData.businessStage}
                    onChange={(e) => {
                      setFormData({ ...formData, businessStage: e.target.value });
                      if (formErrors.businessStage) setFormErrors({ ...formErrors, businessStage: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all text-[#2b1a14] bg-white focus:outline-none focus:ring-2 ${
                      formErrors.businessStage 
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                        : 'border-[#f1dfd5] focus:ring-peach-500 focus:border-peach-500'
                    }`}
                  >
                    <option value="">Select current stage...</option>
                    <option value="Idea & Pre-launch (within 1st year of graduation)">
                      Idea & Pre-launch (Student / 1st-Yr Grad)
                    </option>
                    <option value="Prototype & Business Plan Ready">
                      Prototype / Business Plan In Progress
                    </option>
                    <option value="First 6 Months Post-Incorporation">
                      First 6 Months Post-Incorporation
                    </option>
                    <option value="Generating Early Sales / Testing PMF">
                      Generating Early Sales / Seed Validation
                    </option>
                  </select>
                </div>
                {formErrors.businessStage && (
                  <p className="text-xs text-red-600 flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.businessStage}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Input 4: Estimated Funding Need */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2b1a14]">
                4. Estimated Funding Need
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  '€10,000 – €25,000',
                  '€25,000 – €50,000',
                  '€45,000',
                  '€75,000 – €150,000'
                ].map((tier) => {
                  const isSelected = formData.fundingNeed === tier;
                  return (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, fundingNeed: tier })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        isSelected 
                          ? 'border-peach-500 bg-peach-500 text-white shadow-xs' 
                          : 'border-[#f1dfd5] bg-[#fffaf7] text-[#2b1a14] hover:border-peach-300 hover:bg-white'
                      }`}
                    >
                      {tier}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 border-t border-[#f1dfd5] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {hasUTM ? (
                <div className="flex items-center space-x-1.5 text-xs text-peach-700 bg-peach-50 px-3 py-1.5 rounded-lg border border-peach-200">
                  <Tag className="w-3.5 h-3.5 text-peach-600" />
                  <span>Referral active: <strong>{utm.utm_content || utm.creator || utm.utm_campaign}</strong></span>
                </div>
              ) : (
                <div className="text-xs text-[#6b554b] flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-leaf" />
                  <span>Free instant assessment • No login needed</span>
                </div>
              )}

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                {hasSearched && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-full border border-peach-300 text-[#2b1a14] hover:bg-peach-50 text-xs font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                    Reset
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full sm:w-auto btn-peach-primary text-xs sm:text-sm py-3 px-7"
                >
                  {isScanning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Scanning databases...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{hasSearched ? 'Update Matches' : 'Find My Funding Options'}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

            </div>

          </form>

          {/* Scanning Animation State */}
          {isScanning && (
            <div className="p-8 bg-[#fff6f1] border-t border-[#f1dfd5] space-y-4 text-center animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-peach-100 border border-peach-300 flex items-center justify-center mx-auto text-peach-600">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2b1a14]">
                Assessing Eligibility Criteria...
              </h4>
              <div className="max-w-md mx-auto space-y-2 text-xs text-[#6b554b]">
                <div className={`flex items-center space-x-2 ${scanStep >= 1 ? 'text-peach-700 font-semibold' : 'text-ink-light'}`}>
                  <CheckCircle2 className={`w-4 h-4 ${scanStep >= 1 ? 'text-leaf' : 'text-ink-light'}`} />
                  <span>Cross-referencing Île-de-France youth grants & student schemes...</span>
                </div>
                <div className={`flex items-center space-x-2 ${scanStep >= 2 ? 'text-peach-700 font-semibold' : 'text-ink-light'}`}>
                  <CheckCircle2 className={`w-4 h-4 ${scanStep >= 2 ? 'text-leaf' : 'text-ink-light'}`} />
                  <span>Checking 0% interest Prêt d'Honneur quasi-equity criteria...</span>
                </div>
                <div className={`flex items-center space-x-2 ${scanStep >= 3 ? 'text-peach-700 font-semibold' : 'text-ink-light'}`}>
                  <CheckCircle2 className={`w-4 h-4 ${scanStep >= 3 ? 'text-leaf' : 'text-ink-light'}`} />
                  <span>Matching equipment subsidies for sustainable hospitality retail...</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* RESULTS SECTION */}
        {hasSearched && !isScanning && (
          <div ref={resultsRef} className="mt-14 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-300 text-left">
            
            {/* Results Header */}
            <div className="bg-white rounded-[24px] border border-peach-200 p-6 sm:p-7 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#f1dfd5]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-peach-500 text-white">
                      Demo funding matches
                    </span>
                    <span className="text-xs font-semibold text-leaf bg-leaf-light px-2.5 py-0.5 rounded-full">
                      3 Verified Programs Found
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#2b1a14] pt-1">
                    Funding Pathways for: <span className="text-peach-600">{formData.location || 'Paris, France'}</span>
                  </h3>
                  <p className="text-xs text-[#6b554b]">
                    Based on your profile: <span className="font-semibold">{formData.businessIdea.slice(0, 75)}...</span> ({formData.businessStage})
                  </p>
                </div>

                <div className="text-left md:text-right flex-shrink-0">
                  <span className="text-[11px] font-bold text-ink-light uppercase tracking-wider block">
                    Total Potential Non-Dilutive Aid
                  </span>
                  <span className="font-serif font-extrabold text-2xl sm:text-3xl text-peach-600">
                    Up to €50,000
                  </span>
                </div>
              </div>

              {/* Attribution Notice */}
              {hasUTM && (
                <div className="mt-3 py-2 px-3 rounded-lg bg-peach-50 border border-peach-200 text-xs text-peach-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-3.5 h-3.5 text-peach-600" />
                    <span>
                      <strong>Attribution Preserved:</strong> Referral Campaign <code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">{utm.utm_campaign}</code> / Content <code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">{utm.utm_content || utm.creator || 'default'}</code>
                    </span>
                  </div>
                  <span className="text-[11px] text-peach-600 font-medium">Session ID: #PCH-2026-GH</span>
                </div>
              )}

              <p className="mt-2 text-[11px] text-[#6b554b] italic">
                * Note: Programs labeled "Demo funding matches" use fictional program names for this Team Peachology student project prototype. Eligibility criteria reflect authentic French & EU public innovation policies.
              </p>
            </div>

            {/* Funding Cards List */}
            <div className="space-y-6">
              {SAMPLE_FUNDING_MATCHES.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-[22px] border border-[#f1dfd5] shadow-card hover:border-peach-300 transition-all p-6 sm:p-7 relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#f1dfd5]">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-peach-100 text-peach-800 border border-peach-200">
                          {match.fundingType}
                        </span>
                        <span className="text-[11px] font-medium text-[#6b554b] bg-peach-50 px-2 py-0.5 rounded">
                          {match.providerType}
                        </span>
                        <span className="text-[11px] font-bold text-leaf">
                          Match Score: {match.matchScore}%
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-xl text-[#2b1a14]">
                        {match.programName}
                      </h4>
                    </div>

                    <div className="sm:text-right">
                      <span className="text-xs font-bold text-ink-light block">Maximum Aid</span>
                      <span className="font-serif font-bold text-lg text-peach-600">
                        {match.amountRange}
                      </span>
                    </div>
                  </div>

                  <div className="py-4 space-y-3">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#2b1a14] mb-1 flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-peach-500" />
                        <span>Why it fits your business idea:</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-[#6b554b] leading-relaxed bg-[#fffaf7] p-3 rounded-xl border border-[#f1dfd5]">
                        {match.fitReason}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#2b1a14] mb-1.5 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf" />
                        <span>Eligibility details you need to verify:</span>
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2b1a14]">
                        {match.eligibilityDetails.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 bg-white p-2 rounded-lg border border-[#f1dfd5]">
                            <span className="w-1.5 h-1.5 rounded-full bg-peach-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="bg-peach-50 rounded-xl p-3.5 border border-peach-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-peach-700 flex items-center space-x-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Suggested Next Step:</span>
                          </span>
                          <p className="text-xs text-[#2b1a14] font-medium">
                            {match.suggestedNextStep}
                          </p>
                        </div>
                        <span className="text-[11px] text-[#6b554b] font-medium self-end sm:self-center">
                          {match.deadlineNotice}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Next Step Call To Action per prompt */}
            <div className="p-7 sm:p-8 rounded-[26px] bg-gradient-to-r from-peach-600 to-peach-500 text-white shadow-peach flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-peach-100">
                  Step 2 of Your Launch Journey
                </span>
                <h4 className="font-serif font-bold text-2xl text-white">
                  Found your funding options? Now verify your cash runway.
                </h4>
                <p className="text-xs sm:text-sm text-peach-50 leading-relaxed">
                  Grants and loans require a solid 12-month financial plan. Use our First-Year Budget & Runway Planner to model initial setup costs, monthly burn rate, and your first hire.
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <button
                  onClick={onExploreBudget}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-white text-[#2b1a14] font-bold text-xs uppercase tracking-wider hover:bg-peach-50 transition-all shadow-md active:scale-95 group"
                >
                  <span>Explore the first-year budget planner</span>
                  <ArrowRight className="w-4 h-4 text-peach-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
