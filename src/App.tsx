import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CampaignBanner } from './components/CampaignBanner';
import { DemoToolbar } from './components/DemoToolbar';
import { Hero } from './components/Hero';
import { ProgramSection } from './components/ProgramSection';
import { CurriculumSection } from './components/CurriculumSection';
import { PricingSection } from './components/PricingSection';
import { ReferralSection } from './components/ReferralSection';
import { AudienceSection } from './components/AudienceSection';
import { StoriesSection } from './components/StoriesSection';
import { ResourcesSection } from './components/ResourcesSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { ArticleModal } from './components/ArticleModal';

import { UTMTracking, Article } from './types';
import { CAMPAIGN_PRESETS } from './data/sampleData';

export function App() {
  const [utm, setUtm] = useState<UTMTracking>({});
  const [isDemoToolbarOpen, setIsDemoToolbarOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalInitialStep, setModalInitialStep] = useState<'signup' | 'fundcheck'>('signup');
  const [selectedPlanId, setSelectedPlanId] = useState<'free-trial' | 'standard' | 'individual-mentoring'>('standard');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Parse UTM parameters from URL on load
  useEffect(() => {
    const parseParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tracking: UTMTracking = {
        utm_source: searchParams.get('utm_source'),
        utm_campaign: searchParams.get('utm_campaign'),
        utm_content: searchParams.get('utm_content'),
        utm_medium: searchParams.get('utm_medium'),
        creator: searchParams.get('creator'),
        referralCode: searchParams.get('ref'),
        timestamp: new Date().toISOString()
      };
      setUtm(tracking);

      // If creator bio link or poster link is present, smoothly open the registration modal with referral code active
      if (tracking.utm_medium === 'creator_bio' || tracking.creator || tracking.utm_content?.includes('poster')) {
        setTimeout(() => {
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }
    };

    parseParams();
  }, []);

  const handleSelectCampaign = (presetId: string) => {
    const preset = CAMPAIGN_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    const newUrl = `${window.location.pathname}${preset.urlParams}`;
    window.history.replaceState({}, '', newUrl);

    const searchParams = new URLSearchParams(preset.urlParams);
    setUtm({
      utm_source: searchParams.get('utm_source'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_content: searchParams.get('utm_content'),
      utm_medium: searchParams.get('utm_medium'),
      creator: searchParams.get('creator'),
      referralCode: searchParams.get('ref'),
      timestamp: new Date().toISOString()
    });
  };

  const handleClearUTM = () => {
    window.history.replaceState({}, '', window.location.pathname);
    setUtm({});
  };

  const getActiveCampaignBannerText = () => {
    if (utm.utm_content === 'poster_a') {
      return CAMPAIGN_PRESETS.find(p => p.id === 'poster_a')?.bannerText;
    }
    if (utm.utm_content === 'poster_b') {
      return CAMPAIGN_PRESETS.find(p => p.id === 'poster_b')?.bannerText;
    }
    if (utm.utm_medium === 'creator_bio' || utm.creator) {
      return CAMPAIGN_PRESETS.find(p => p.id === 'creator_bio')?.bannerText;
    }
    return undefined;
  };

  const getActiveCampaignLabel = () => {
    if (utm.utm_content === 'poster_a') return 'Poster A';
    if (utm.utm_content === 'poster_b') return 'Poster B';
    if (utm.utm_medium === 'creator_bio' || utm.creator) return `@${utm.creator || 'creator'}`;
    if (utm.utm_campaign) return utm.utm_campaign;
    return 'Organic';
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPlanModal = (planId?: string, step: 'signup' | 'fundcheck' = 'signup') => {
    if (planId === 'free-trial' || planId === 'standard' || planId === 'individual-mentoring') {
      setSelectedPlanId(planId);
    } else {
      setSelectedPlanId('standard');
    }
    setModalInitialStep(step);
    setIsApplyModalOpen(true);
  };

  // 1-Click Fast 30-Sec Paris Demo Flow through sign up onboarding
  const handleRunParisCafeDemo = () => {
    setSelectedPlanId('free-trial');
    setModalInitialStep('fundcheck');
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#2b1a14] flex flex-col font-sans selection:bg-peach-200 selection:text-ink">
      
      {/* Referral Campaign Banner */}
      <CampaignBanner
        utm={utm}
        activePresetText={getActiveCampaignBannerText()}
        onClearUTM={handleClearUTM}
        onJumpToPricing={scrollToPricing}
      />

      {/* Main Header from peachology.vercel.app */}
      <Header
        utm={utm}
        activeCampaignLabel={getActiveCampaignLabel()}
        onOpenApplyModal={handleOpenPlanModal}
        onOpenDemoToolbar={() => setIsDemoToolbarOpen(true)}
      />

      {/* Main Page Content - Clean structure matching peachology.vercel.app */}
      <main className="flex-grow">
        
        {/* 1. Hero Section from peachology.vercel.app + Referral Promise + Journey Card */}
        <Hero
          onOpenApplyModal={handleOpenPlanModal}
        />

        {/* 2. Program Section ("Starting a business while studying shouldn't feel impossible") */}
        <ProgramSection
          onApplyTogether={() => handleOpenPlanModal('standard')}
        />

        {/* 3. Curriculum Section ("A practical startup curriculum, from idea to launch") */}
        <CurriculumSection
          onSelectPlan={(planId) => handleOpenPlanModal(planId)}
        />

        {/* 4. NEW PRICING & DIFFERENT PLANS SECTION (Free Trial €0, Standard €299, Mentoring €549) */}
        <PricingSection
          onSelectPlan={(planId) => handleOpenPlanModal(planId)}
        />

        {/* 5. NEW REFERRAL OFFER SECTION (Key Message, 30-min consultation & mentoring breakdown) */}
        <ReferralSection
          onClaimReferral={(code) => {
            setUtm(prev => ({ ...prev, referralCode: code }));
            handleOpenPlanModal('free-trial');
          }}
        />

        {/* 6. Audience Section ("Who it's for") */}
        <AudienceSection />

        {/* 7. Student Stories ("From classroom idea to real customers") */}
        <StoriesSection />

        {/* 8. The Peachology Blog & Educational Guides */}
        <ResourcesSection
          onOpenArticle={(article) => setActiveArticle(article)}
          onGoToFundCheck={() => handleOpenPlanModal('free-trial')}
        />

        {/* 9. Authority through community (partners) */}
        <CommunitySection />

        {/* 10. FAQ Section */}
        <FaqSection />

        {/* 11. Ready to learn, build and launch? CTA Band */}
        <CtaBand
          onOpenApply={() => handleOpenPlanModal('standard')}
        />

      </main>

      {/* Site Footer */}
      <Footer />

      {/* Program Registration & Checkout Modal (Includes the European Fund Check upon sign up) */}
      <RegistrationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        selectedPlanId={selectedPlanId}
        onSelectPlanId={(id) => setSelectedPlanId(id)}
        initialStep={modalInitialStep}
        utm={utm}
        onSuccess={() => {
          setTimeout(() => setIsApplyModalOpen(false), 2000);
        }}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onGoToFundCheck={() => handleOpenPlanModal('free-trial')}
      />

      {/* Growth Hacking & Presentation Demo Toolbar */}
      <DemoToolbar
        isOpen={isDemoToolbarOpen}
        onClose={() => setIsDemoToolbarOpen(false)}
        utm={utm}
        onSelectCampaign={handleSelectCampaign}
        onRunParisCafeDemo={handleRunParisCafeDemo}
      />

      {/* Floating Demo Trigger (Fixed Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center space-x-2">
        <button
          onClick={() => setIsDemoToolbarOpen(true)}
          className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-peach-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-peach-700 transition-all border border-peach-400 focus-visible:ring-2 focus-visible:ring-peach-500"
          title="Open Growth Strategy Simulator & Fast Demo"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>Demo Controls</span>
        </button>
      </div>

    </div>
  );
}

export default App;
