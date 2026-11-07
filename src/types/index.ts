export type BusinessStage = 
  | 'idea' 
  | 'pre-launch' 
  | 'first-year' 
  | 'early-revenue';

export interface FundingFormData {
  businessIdea: string;
  location: string;
  businessStage: string;
  fundingNeed: string;
  sector?: string;
  founderStatus?: string;
}

export interface FundingMatch {
  id: string;
  programName: string;
  fundingType: string;
  amountRange: string;
  fitReason: string;
  eligibilityDetails: string[];
  suggestedNextStep: string;
  matchScore: number;
  providerType: 'Regional Authority' | 'Public-Private Partnership' | 'Peachology Founder Network' | 'EU Green Fund';
  applicationDifficulty: 'Low' | 'Medium' | 'High';
  deadlineNotice: string;
}

export interface UTMTracking {
  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_medium?: string | null;
  creator?: string | null;
  referralCode?: string | null;
  timestamp?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  readTime: string;
  category: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    paragraphs: string[];
  }[];
  fundingCheckHook: string;
}

export interface ProgramPlan {
  id: 'free-trial' | 'standard' | 'individual-mentoring';
  name: string;
  proposedPrice: number;
  priceDisplay: string;
  duration: string;
  feeType: 'One-time program fee';
  isMainLaunchPrice?: boolean;
  includedSummary: string;
  features: string[];
  vatRatePercent: number;
  netPrice: number;
  vatAmount: number;
  totalPayablePrice: string;
  ctaText: string;
}

export interface ReferralRoleBenefit {
  participant: string;
  additionalFreeBenefit: string;
  condition: string;
  iconName: string;
}
