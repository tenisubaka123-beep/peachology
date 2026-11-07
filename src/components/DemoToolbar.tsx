import React from 'react';
import { X, Copy, Check, SlidersHorizontal, Sparkles } from 'lucide-react';
import { CAMPAIGN_PRESETS } from '../data/sampleData';
import { UTMTracking } from '../types';

interface DemoToolbarProps {
  isOpen: boolean;
  onClose: () => void;
  utm: UTMTracking;
  onSelectCampaign: (presetId: string) => void;
  onRunParisCafeDemo: () => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({
  isOpen,
  onClose,
  utm,
  onSelectCampaign,
  onRunParisCafeDemo,
}) => {
  const [copiedUrl, setCopiedUrl] = React.useState(false);

  if (!isOpen) return null;

  const currentFullUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentFullUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const getActivePresetId = () => {
    if (utm.utm_content === 'poster_a') return 'poster_a';
    if (utm.utm_content === 'poster_b') return 'poster_b';
    if (utm.utm_medium === 'creator_bio' || utm.creator) return 'creator_bio';
    return 'clean';
  };

  const activePresetId = getActivePresetId();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-[#fffaf7] border border-[#f1dfd5] rounded-[28px] shadow-2xl max-w-2xl w-full p-6 sm:p-7 text-[#2b1a14] animate-in fade-in zoom-in-95 duration-150 text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-toolbar-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#f1dfd5]">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-peach-500 text-white">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 id="demo-toolbar-title" className="font-serif font-bold text-xl text-[#2b1a14]">
                Growth Hacking & Demo Switcher
              </h2>
              <p className="text-xs text-[#6b554b]">
                Test Team Peachology's growth referral channels, pricing tests & 30s fast-path demo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6b554b] hover:text-[#2b1a14] hover:bg-peach-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 30-Second Fast Path Pitch Button */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-peach-600 to-peach-500 text-white shadow-peach">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white text-peach-700">
                  Presenter Fast Track
                </span>
                <span className="text-xs text-peach-100 font-medium">⚡ Under 30 Seconds</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                1-Click Sign-up & European Fund Check Demo
              </h3>
              <p className="text-xs text-peach-100 max-w-md">
                Simulates student sign-up with Free Trial, activates the included European Fund Check, and displays regional grant matches instantly.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRunParisCafeDemo();
              }}
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-white text-[#2b1a14] font-bold text-xs uppercase tracking-wider hover:bg-peach-50 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-peach-600" />
              <span>Launch 30s Sign-up Demo</span>
            </button>
          </div>
        </div>

        {/* Campaign Presets for Growth Strategies */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-[#6b554b] block">
            Select Inbound Referral Link:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CAMPAIGN_PRESETS.map((preset) => {
              const isSelected = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onSelectCampaign(preset.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all ${
                    isSelected 
                      ? 'border-peach-500 bg-peach-50 shadow-xs ring-2 ring-peach-500/20' 
                      : 'border-[#f1dfd5] bg-white hover:border-peach-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#2b1a14]">
                      {preset.label}
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-peach-500 text-white">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6b554b] leading-snug">
                    {preset.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active URL & Attribution Inspector */}
        <div className="mt-5 p-3.5 rounded-2xl bg-peach-50 border border-peach-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#2b1a14] uppercase tracking-wide">
              Attribution State (Preserved in Funnel)
            </span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1 text-xs text-peach-700 hover:text-peach-800 font-medium"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-leaf" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy shareable link</span>
                </>
              )}
            </button>
          </div>
          
          <div className="font-mono text-[11px] text-[#2b1a14] bg-white p-2 rounded-xl border border-[#f1dfd5] break-all">
            {currentFullUrl}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
            <div className="bg-white p-1.5 rounded-lg border border-[#f1dfd5]">
              <span className="text-[#988177] block text-[9px] uppercase">utm_source</span>
              <span className="font-semibold text-[#2b1a14]">{utm.utm_source || '— (direct)'}</span>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-[#f1dfd5]">
              <span className="text-[#988177] block text-[9px] uppercase">utm_campaign</span>
              <span className="font-semibold text-[#2b1a14]">{utm.utm_campaign || '—'}</span>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-[#f1dfd5]">
              <span className="text-[#988177] block text-[9px] uppercase">utm_content</span>
              <span className="font-semibold text-[#2b1a14]">{utm.utm_content || '—'}</span>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-[#f1dfd5]">
              <span className="text-[#988177] block text-[9px] uppercase">creator / bio</span>
              <span className="font-semibold text-[#2b1a14]">{utm.creator || utm.utm_medium || '—'}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#2b1a14] text-white text-xs font-semibold hover:bg-black transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
