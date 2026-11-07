import React from 'react';
import { ArrowRight, X, QrCode, Instagram, Gift } from 'lucide-react';
import { UTMTracking } from '../types';

interface CampaignBannerProps {
  utm: UTMTracking;
  activePresetText?: string;
  onClearUTM: () => void;
  onJumpToPricing: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({
  utm,
  activePresetText,
  onClearUTM,
  onJumpToPricing,
}) => {
  if (!utm.utm_source && !utm.utm_campaign) {
    return null;
  }

  const isPosterA = utm.utm_content === 'poster_a';
  const isPosterB = utm.utm_content === 'poster_b';
  const isCreatorBio = utm.utm_medium === 'creator_bio' || utm.creator;

  const getSourceIcon = () => {
    if (isCreatorBio) return <Instagram className="w-4 h-4 text-pink-600" />;
    return <QrCode className="w-4 h-4 text-peach-600" />;
  };

  const getSourceTag = () => {
    if (isPosterA) return 'Campus Poster A (Library Lounge)';
    if (isPosterB) return 'Campus Poster B (Incubator Hub)';
    if (isCreatorBio) return `@${utm.creator || 'sarah.startups'} Bio Referral`;
    return 'Referral Program';
  };

  return (
    <aside 
      aria-label="Campaign Referral Banner"
      className="bg-gradient-to-r from-peach-100 via-peach-50 to-peach-100 border-b border-peach-200/90 py-2.5 px-4 text-xs sm:text-sm text-[#2b1a14] transition-all shadow-inner"
    >
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center space-x-2.5 flex-1 min-w-0">
          <div className="p-1 rounded-md bg-white shadow-xs border border-peach-200 flex-shrink-0">
            {getSourceIcon()}
          </div>
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            <span className="inline-block px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] bg-peach-500 text-white">
              {getSourceTag()}
            </span>
            <span className="font-medium text-[#2b1a14] truncate">
              {activePresetText || '🎁 Referral detected: Free 30-minute individual consultation included with registration!'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={onJumpToPricing}
            className="inline-flex items-center space-x-1 font-semibold text-xs text-peach-700 hover:text-peach-800 bg-white px-3 py-1.5 rounded-full border border-peach-300 shadow-xs hover:bg-peach-50 transition-all"
          >
            <span>Claim Referral Perk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onClearUTM}
            aria-label="Dismiss campaign banner"
            className="p-1 rounded text-[#988177] hover:text-[#2b1a14] hover:bg-white/60 transition-colors"
            title="Reset to organic visitor mode"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
