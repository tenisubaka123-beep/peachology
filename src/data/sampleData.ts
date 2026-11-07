import { FundingFormData, FundingMatch, Article, ProgramPlan, ReferralRoleBenefit } from '../types';

export const PROGRAM_PLANS: ProgramPlan[] = [
  {
    id: 'free-trial',
    name: 'Free Trial',
    proposedPrice: 0,
    priceDisplay: '€0',
    duration: 'Introductory access',
    feeType: 'One-time program fee',
    isMainLaunchPrice: false,
    includedSummary: 'Initial fund check and one introductory class',
    features: [
      'Initial European fund check (unlocked upon sign-up)',
      'One live introductory entrepreneurship class',
      'Module 1 preview materials & customer interview framework',
      'Access to student founder community forum',
      'No credit card or paid enrollment required'
    ],
    vatRatePercent: 0,
    netPrice: 0,
    vatAmount: 0,
    totalPayablePrice: '€0 total payable',
    ctaText: 'Sign up for Free Trial (€0)'
  },
  {
    id: 'standard',
    name: 'Standard',
    proposedPrice: 299,
    priceDisplay: '€299',
    duration: '8 weeks',
    feeType: 'One-time program fee',
    isMainLaunchPrice: true,
    includedSummary: 'Four modules, eight weekly group classes, materials, feedback on four module assignments, and a final presentation',
    features: [
      'All 4 core modules (Validate, Offer, Customers, Launch)',
      '8 weekly live group classes (evening & weekend friendly, ~4h/week)',
      'Complete course materials, templates & financial models',
      'Personalized feedback on all 4 module assignments',
      'Final presentation & pitch at Cohort Demo Day',
      'Full access to European fund check & 12-month runway planner'
    ],
    vatRatePercent: 20,
    netPrice: 249.17,
    vatAmount: 49.83,
    totalPayablePrice: '€299 total payable (incl. 20% VAT)',
    ctaText: 'Enroll in Standard (€299)'
  },
  {
    id: 'individual-mentoring',
    name: 'Individual Mentoring',
    proposedPrice: 549,
    priceDisplay: '€549',
    duration: '8 weeks',
    feeType: 'One-time program fee',
    isMainLaunchPrice: false,
    includedSummary: 'Everything in Standard, plus four 45-minute individual mentoring sessions',
    features: [
      'Everything included in the Standard program',
      'Four 45-minute private 1-on-1 mentoring sessions with experienced founders',
      'Direct pitch deck critique and grant dossier strategy review',
      'Personalized customer interview review & pricing optimization',
      'Priority introduction to university incubator juries & partners'
    ],
    vatRatePercent: 20,
    netPrice: 457.50,
    vatAmount: 91.50,
    totalPayablePrice: '€549 total payable (incl. 20% VAT)',
    ctaText: 'Enroll with Mentoring (€549)'
  }
];

export const REFERRAL_OFFER_DATA: ReferralRoleBenefit[] = [
  {
    participant: 'Referred person',
    additionalFreeBenefit: 'One 30-minute individual consultation',
    condition: 'Enter a referral code when registering; no paid enrollment required',
    iconName: 'UserCheck'
  },
  {
    participant: 'Referrer',
    additionalFreeBenefit: 'One 30-minute mentoring session',
    condition: 'Awarded after the referred person purchases a program and the applicable refund period ends',
    iconName: 'Award'
  }
];

export const REFERRAL_KEY_MESSAGE = 
  "Everyone can try Peachology for free. Join through a referral and receive an additional 30-minute individual consultation to discuss your business idea—at no extra cost.";

export const FUND_CHECK_CLARIFICATION = {
  title: "What is the Peachology Fund Check?",
  leadSubtitle: "Before you apply, understand exactly what European startup criteria are assessed and what concrete documentation you receive.",
  whatIsAssessed: [
    {
      title: "Student & Graduation Timing",
      desc: "Enrollment in an accredited European university or graduation within the last 12-24 months (unlocks under-28 youth entrepreneurship quotas)."
    },
    {
      title: "Legal Structure & Location",
      desc: "Whether registered in France or the EU as a micro-entreprise, SAS, SARL, or still in pre-incorporation validation stage."
    },
    {
      title: "Sector & Sustainability Alignment",
      desc: "Eligibility for regional innovation schemes, retail transition funds, eco-fitout subsidies, and youth employment incentives."
    },
    {
      title: "Capital Need vs. Non-Dilutive Caps",
      desc: "Matching your target seed need (€10k-€100k) against grant maximums and 0% interest honor loan (Prêt d'Honneur) ratios."
    }
  ],
  whatYouReceive: [
    {
      title: "Verified Non-Dilutive Match Report",
      desc: "A personalized breakdown of specific public grants, 0% honor loans, and subsidies matching your project and location."
    },
    {
      title: "Eligibility Checklist to Verify",
      desc: "An itemized list of criteria and prerequisites your founder dossier must meet before official jury submission."
    },
    {
      title: "Provisional Financial Action Plan",
      desc: "Direct integration into the 12-Month Runway & First-Hire Planner to model the required matching funds."
    },
    {
      title: "Zero Obligation or Upfront Cost",
      desc: "Completely free assessment without requiring an account, credit card, or sensitive financial data."
    }
  ]
};

export const SAMPLE_PARIS_CAFE: FundingFormData = {
  businessIdea: "Specialty student-friendly café near Paris universities with eco-sourced beans, quiet study pods, and evening founder workshops.",
  location: "Paris, France (Île-de-France)",
  businessStage: "Idea & Pre-launch (within 1st year of graduation)",
  fundingNeed: "€45,000",
  sector: "Sustainable Hospitality & Community",
  founderStatus: "Master's graduate (ESCP / HEC alumni network, graduated 4 months ago)"
};

export const SAMPLE_FUNDING_MATCHES: FundingMatch[] = [
  {
    id: 'match-1',
    programName: 'Paris Île-de-France Tremplin Jeunes Créateurs Grant',
    fundingType: 'Regional Non-Dilutive Grant',
    amountRange: 'Up to €15,000 (Non-repayable)',
    fitReason: 'Specifically prioritizes youth-led local retail and social-impact hospitality in university districts that create local student part-time jobs and promote eco-certified local suppliers.',
    eligibilityDetails: [
      'Founder must be under 28 or within 12 months of graduating from an accredited higher education institution.',
      'French registered legal entity in Île-de-France (Micro-entreprise, SAS or SARL).',
      'Physical location verified in Paris or neighbouring departments (75, 92, 93, 94).',
      'Commitment to minimum 1 permanent or certified student work-study contract in Year 1.'
    ],
    suggestedNextStep: 'Assemble your 12-month provisional operating budget and proof of diploma. Regional dossier submission opens on the 1st of each month.',
    matchScore: 96,
    providerType: 'Regional Authority',
    applicationDifficulty: 'Medium',
    deadlineNotice: 'Next regional intake closes in 24 days'
  },
  {
    id: 'match-2',
    programName: 'Peachology Campus Zero-Rate Micro-Honor Loan (Prêt d’Honneur)',
    fundingType: 'Unsecured 0% Interest Founder Honor Loan',
    amountRange: '€10,000 – €25,000 (0% Interest, 3-5 Year Term)',
    fitReason: 'Injected directly into your personal founder equity (quasi-fonds propres) without giving up company shares or voting rights, serving as a 1:3 collateral multiplier for commercial bank financing.',
    eligibilityDetails: [
      'Graduating student or recent alumnus from accredited business or technical university.',
      'Zero personal asset pledge or mortgage collateral required.',
      '6-month grace period on principal repayments to protect initial operating cash runway.',
      'Passing review on basic cash-flow solvency by an accredited startup committee.'
    ],
    suggestedNextStep: 'Run your monthly cash burn and runway forecast in our First-Year Planner to confirm repayment capacity after month 6.',
    matchScore: 92,
    providerType: 'Public-Private Partnership',
    applicationDifficulty: 'Low',
    deadlineNotice: 'Rolling weekly jury reviews'
  },
  {
    id: 'match-3',
    programName: 'French Eco-Retail & Youth Enterprise Transition Subsidies',
    fundingType: 'Capital Expenditure Subsidy (Eco-Fitout)',
    amountRange: 'Up to €10,000 (Covering 40% of certified equipment)',
    fitReason: 'Subsidizes energy-efficient espresso machines, water filtration systems, compost bins, and refurbished study pod furniture for circular retail ventures.',
    eligibilityDetails: [
      'Eligible commercial lease or preliminary lease agreement signed.',
      'Equipment quotes from certified eco-labelled European manufacturers.',
      'Combined with proof of waste-reduction operational policy.'
    ],
    suggestedNextStep: 'Request equipment supplier pro-forma invoices marked with energy star ratings before filing the pre-authorization form.',
    matchScore: 88,
    providerType: 'EU Green Fund',
    applicationDifficulty: 'Low',
    deadlineNotice: 'Fiscal year allocation active'
  }
];

export const CURRICULUM_MODULES = [
  {
    number: '01',
    title: 'Validate an idea',
    desc: 'Spot real problems, interview potential customers and test demand before you spend a cent.',
    project: 'Project: 10 customer interviews',
    skills: ['Problem discovery', 'Cold outreach', 'Interview scripts']
  },
  {
    number: '02',
    title: 'Create your first offer',
    desc: 'Turn your insight into a clear product or service, set a price and write a value proposition people understand.',
    project: 'Project: offer page and pricing',
    skills: ['Value proposition', 'Pricing strategy', 'Offer messaging']
  },
  {
    number: '03',
    title: 'Find your first customers',
    desc: 'Use simple, low-budget marketing and sales to reach the people who need what you’ve built.',
    project: 'Project: first sales campaign',
    skills: ['Organic channels', 'LinkedIn & direct sales', 'Early conversion']
  },
  {
    number: '04',
    title: 'Launch for real',
    desc: 'Go live, measure results, improve, and present your business at demo day to peers, partners and mentors.',
    project: 'Project: public launch and demo day',
    skills: ['Public launch', 'Customer delivery', 'Pitching to juries']
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'article-1',
    slug: 'how-to-fund-your-first-business-as-a-student',
    title: 'How to fund your first business as a student',
    metaTitle: 'How to Fund Your First Business as a Student | Peachology',
    readTime: '4 min read',
    category: 'Funding & Grants',
    summary: 'A step-by-step roadmap for business-school students and recent graduates looking for non-dilutive grants, student honor loans, and university subsidies before talking to private investors.',
    author: {
      name: 'Team Peachology Research',
      role: 'Startup Growth & Public Funding Practice'
    },
    keyTakeaways: [
      'Non-dilutive capital (grants, subsidies, and honor loans) preserves 100% of your equity in year one.',
      'Regional grants in France and Europe heavily prioritize founders under 28 or within one year of degree completion.',
      'A 0% interest honor loan acts as quasi-equity and helps unlock 3× more bank leverage without personal collateral.',
      'Always secure your financial projections and provisional lease before filing grant dossiers.'
    ],
    contentSections: [
      {
        heading: '1. Why Student Status Is Your Biggest Funding Advantage',
        paragraphs: [
          'Many business school students assume they need angel investors or venture capital to kick off their first venture. In reality, European governments and regional councils allocate hundreds of millions of euros annually specifically targeted at youth entrepreneurship and university spin-offs.',
          'As an active student or graduate within your first year, you qualify for specialized programs that evaluate potential and feasibility rather than years of balance-sheet history. The best part? These programs are non-dilutive—meaning you do not surrender any equity or control.'
        ]
      },
      {
        heading: '2. The Three Buckets of Non-Dilutive Capital',
        paragraphs: [
          '• Regional Innovation & Youth Grants: Outright subsidies that do not need to be repaid. In Île-de-France, programs like the Tremplin Jeunes provide between €5,000 and €15,000 for retail, digital, or social enterprises that hire locally.',
          '• Honor Loans (Prêts d’Honneur): Unsecured 0% personal loans made directly to the founder. Typically between €10,000 and €30,000 with a 6-month repayment grace period. Commercial banks count this as founder equity, enabling you to borrow up to 3× that amount from traditional lenders.',
          '• Capital Expenditure & Eco-Subsidies: Target specific startup investments, such as energy-saving equipment, POS terminals, and local interior renovations.'
        ]
      },
      {
        heading: '3. What Evaluators Look For in Year 1 Dossiers',
        paragraphs: [
          'Grant review boards do not demand massive revenue forecasts; they look for operational realism. They check whether you understand your monthly cash burn, whether your break-even point is grounded in local market realities, and whether your business idea contributes to regional employment.',
          'A crisp 12-month cash-flow plan and an itemized launch budget are the two documents that separate accepted applications from rejected ones.'
        ]
      }
    ],
    fundingCheckHook: 'Ready to check which grants and honor loans match your specific diploma, region, and project idea? Complete our 30-second free funding check.'
  },
  {
    id: 'article-2',
    slug: 'how-to-build-a-first-year-cash-flow-forecast',
    title: 'How to build a first-year cash-flow forecast',
    metaTitle: 'How to Build a First-Year Cash-Flow Forecast | Peachology',
    readTime: '5 min read',
    category: 'Financial Modeling',
    summary: 'Why profitable businesses still run out of cash, and how recent business-school graduates can build a realistic 12-month cash-flow forecast, plan payroll taxes, and protect runway.',
    author: {
      name: 'Team Peachology Financial Advisory',
      role: 'Financial Modeling & Startup Cash Flow Practice'
    },
    keyTakeaways: [
      'Cash flow is not the same as accounting profit: customer payment delays and upfront deposits cause sudden liquidity gaps.',
      'Your first hire costs significantly more than gross salary due to social contributions—plan for employer charges from day one.',
      'Maintain at least 3 to 6 months of operating cash runway as an emergency buffer.',
      'Stress-test your forecast against delayed revenue before signing leases or equipment purchase orders.'
    ],
    contentSections: [
      {
        heading: '1. The Difference Between Profit on Paper and Cash in Bank',
        paragraphs: [
          'More than 60% of early-stage startups that fail in their first 24 months are technically profitable on paper. Why? Because supplier bills, rent deposits, and merchant accounts demand cash immediately, whereas client receivables or card payouts can take 30 to 60 days to arrive.',
          'A cash-flow forecast does not care about accrued accounting revenue; it tracks exactly when euros enter and leave your business account on the 1st and 30th of every month.'
        ]
      },
      {
        heading: '2. Estimating Startup Capex vs. Monthly Opex',
        paragraphs: [
          'Separate your initial launch outlays (commercial lease guarantee deposit, equipment fitout, legal registration fees, POS setups) from recurring monthly overheads (rent, electricity, software subscriptions, insurance, and marketing).',
          'Student founders frequently underestimate upfront lease guarantees (often 3 months advance rent) and required security deposits, which drain cash before the front doors even open.'
        ]
      },
      {
        heading: '3. Planning Your First Hire Without Risking Insolvency',
        paragraphs: [
          'Whether you are opening a specialty café or launching a digital agency, hiring your first team member is a pivotal milestone. However, in France and across Europe, employer social contributions can add 30% to 42% on top of gross salary.',
          'Look for youth employment incentives, apprenticeship subsidies (primes d’apprentissage), and part-time student contracts that provide tax relief in Year 1. Always factor employer social taxes directly into your monthly burn calculation.'
        ]
      }
    ],
    fundingCheckHook: 'Unsure how much non-dilutive cash you need to support your first-year forecast? Run our free funding check to see available grants and loans.'
  }
];

export const CAMPAIGN_PRESETS = [
  {
    id: 'clean',
    label: 'Direct / Organic Visit',
    urlParams: '',
    badge: 'Organic Visitor',
    description: 'Standard homepage experience with clean URL'
  },
  {
    id: 'poster_a',
    label: 'Poster A (Library & Study Lounge)',
    urlParams: '?utm_source=instagram&utm_campaign=referral&utm_content=poster_a',
    badge: 'Campus Poster A Referral',
    description: 'QR scan from library bulletin board with 30-min consultation unlocked',
    bannerText: '🎓 Welcome from Campus Poster A! Referral code verified: Your free 30-minute individual consultation is unlocked at no extra cost.'
  },
  {
    id: 'poster_b',
    label: 'Poster B (Career Center & Incubator Hub)',
    urlParams: '?utm_source=instagram&utm_campaign=referral&utm_content=poster_b',
    badge: 'Campus Poster B Referral',
    description: 'QR scan from university incubator hub with 30-min consultation unlocked',
    bannerText: '🚀 Welcome from Campus Poster B! Referral code verified: Your free 30-minute individual consultation is unlocked at no extra cost.'
  },
  {
    id: 'creator_bio',
    label: 'Instagram Influencer Bio Link (@sarah.startups)',
    urlParams: '?utm_source=instagram&utm_medium=creator_bio&utm_campaign=influencer&creator=sarah_business_school',
    badge: 'Creator Bio Referral',
    description: 'Mobile link from student influencer bio taking followers straight to the funding check',
    bannerText: '✨ Welcome from @sarah.startups! Your referral perk is active: 30-minute consultation included with free trial.'
  }
];
