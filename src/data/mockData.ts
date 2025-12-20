import { Shield, Heart, Car, Home, Briefcase, Plane, Cpu, BarChart3, Lock, Zap, Globe, MapPin } from 'lucide-react';

export const niches = [
  {
    id: 'health',
    title: 'Health Insurance',
    icon: Heart,
    description: 'AI-driven diagnostics and personalized wellness plans reducing premiums.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    id: 'auto',
    title: 'Auto Insurance',
    icon: Car,
    description: 'Telematics and real-time driving analysis for fair, usage-based pricing.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    icon: Home,
    description: 'IoT integration for proactive disaster prevention and instant claims.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 'business',
    title: 'Business Liability',
    icon: Briefcase,
    description: 'Predictive risk modeling for enterprises using big data analytics.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    icon: Plane,
    description: 'Automated flight disruption payouts and dynamic risk assessment.',
    color: 'text-sky-500',
    bg: 'bg-sky-50'
  },
  {
    id: 'cyber',
    title: 'Cyber Insurance',
    icon: Lock,
    description: 'Real-time threat monitoring and AI-powered breach response coverage.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Is AI Insurance Safe? The Truth Behind the Algorithms",
    excerpt: "Addressing the trust barrier: How AI removes bias and ensures faster, fairer payouts compared to human adjusters.",
    category: "Consumer Guide",
    date: "Oct 24, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Jenks"
  },
  {
    id: 2,
    title: "Lemonade vs. Geico: The Ultimate 2025 Showdown",
    excerpt: "We pit the AI-native giant against the traditional heavyweight to see who offers better rates and claims experiences.",
    category: "Reviews",
    date: "Oct 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    author: "Mike Ross"
  },
  {
    id: 3,
    title: "5 Ways AI Tools Can Lower Your Premiums Today",
    excerpt: "From telematics apps to smart home sensors, here are actionable ways to use tech to save money.",
    category: "Tips & Tricks",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Emily Chen"
  },
  {
    id: 4,
    title: "How AI Fraud Detection Affects Your Wallet",
    excerpt: "Neural networks are catching complex fraud, which means lower premiums for honest policyholders.",
    category: "Industry News",
    date: "Oct 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    author: "Alex V."
  }
];

export const features = [
  {
    title: "Smart Claims",
    description: "Instant claim processing using computer vision and natural language processing.",
    icon: Zap
  },
  {
    title: "Risk Analysis",
    description: "Hyper-local risk assessment using satellite imagery and historical data.",
    icon: BarChart3
  },
  {
    title: "AI Assistants",
    description: "24/7 personalized support powered by advanced large language models.",
    icon: Cpu
  }
];

// Helper to get logo
const getLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

export const partners = [
  // --- USA ---
  {
    name: "Lemonade",
    domain: "lemonade.com",
    affiliateLink: "https://www.lemonade.com",
    description: "Instant everything. Killer prices. Best for Renters, Home, Car & Pet.",
    categories: ['home', 'auto', 'pet', 'renters'],
    region: "USA",
    rating: 4.9,
    trustScore: 98
  },
  {
    name: "Geico",
    domain: "geico.com",
    affiliateLink: "https://www.geico.com",
    description: "15 minutes could save you 15% or more on car insurance.",
    categories: ['auto', 'home', 'renters'],
    region: "USA",
    rating: 4.7,
    trustScore: 99
  },
  {
    name: "Progressive",
    domain: "progressive.com",
    affiliateLink: "https://www.progressive.com",
    description: "Name your price tool and snapshot telematics savings.",
    categories: ['auto', 'home', 'commercial'],
    region: "USA",
    rating: 4.6,
    trustScore: 97
  },
  {
    name: "State Farm",
    domain: "statefarm.com",
    affiliateLink: "https://www.statefarm.com",
    description: "Like a good neighbor, State Farm is there. Largest US auto insurer.",
    categories: ['auto', 'home', 'life'],
    region: "USA",
    rating: 4.8,
    trustScore: 99
  },
  {
    name: "Allstate",
    domain: "allstate.com",
    affiliateLink: "https://www.allstate.com",
    description: "You're in good hands. Innovative Drivewise app for safe drivers.",
    categories: ['auto', 'home', 'life'],
    region: "USA",
    rating: 4.5,
    trustScore: 96
  },
  {
    name: "Root Insurance",
    domain: "joinroot.com",
    affiliateLink: "https://www.joinroot.com",
    description: "Car insurance based primarily on how you drive.",
    categories: ['auto', 'renters'],
    region: "USA",
    rating: 4.4,
    trustScore: 92
  },
  {
    name: "Hippo",
    domain: "hippo.com",
    affiliateLink: "https://www.hippo.com",
    description: "Modern home insurance with free smart home monitoring kits.",
    categories: ['home'],
    region: "USA",
    rating: 4.7,
    trustScore: 94
  },
  {
    name: "Ethos Life",
    domain: "ethoslife.com",
    affiliateLink: "https://www.ethoslife.com",
    description: "100% online life insurance. No medical exams for most.",
    categories: ['life'],
    region: "USA",
    rating: 4.8,
    trustScore: 95
  },
  {
    name: "Liberty Mutual",
    domain: "libertymutual.com",
    affiliateLink: "https://www.libertymutual.com",
    description: "Only pay for what you need. Customizable coverage options.",
    categories: ['auto', 'home'],
    region: "USA",
    rating: 4.4,
    trustScore: 96
  },
  {
    name: "USAA",
    domain: "usaa.com",
    affiliateLink: "https://www.usaa.com",
    description: "Top-rated insurance for military members and their families.",
    categories: ['auto', 'home', 'life'],
    region: "USA",
    rating: 5.0,
    trustScore: 100
  },
  {
    name: "Farmers",
    domain: "farmers.com",
    affiliateLink: "https://www.farmers.com",
    description: "We know a thing or two because we've seen a thing or two.",
    categories: ['auto', 'home', 'business'],
    region: "USA",
    rating: 4.5,
    trustScore: 95
  },
  {
    name: "Nationwide",
    domain: "nationwide.com",
    affiliateLink: "https://www.nationwide.com",
    description: "Nationwide is on your side. Vanishing deductible rewards.",
    categories: ['auto', 'home', 'pet'],
    region: "USA",
    rating: 4.6,
    trustScore: 97
  },
  {
    name: "Travelers",
    domain: "travelers.com",
    affiliateLink: "https://www.travelers.com",
    description: "The only choice for comprehensive risk management.",
    categories: ['auto', 'home', 'business'],
    region: "USA",
    rating: 4.7,
    trustScore: 98
  },
  {
    name: "Metromile",
    domain: "metromile.com",
    affiliateLink: "https://www.metromile.com",
    description: "Pay-per-mile car insurance. Ideal for low mileage drivers.",
    categories: ['auto'],
    region: "USA",
    rating: 4.5,
    trustScore: 91
  },
  {
    name: "Next Insurance",
    domain: "nextinsurance.com",
    affiliateLink: "https://www.nextinsurance.com",
    description: "Small business insurance tailored to your profession online.",
    categories: ['business'],
    region: "USA",
    rating: 4.8,
    trustScore: 93
  },
  {
    name: "Oscar Health",
    domain: "hioscar.com",
    affiliateLink: "https://www.hioscar.com",
    description: "Health insurance made easy. Tech-driven plans for individuals.",
    categories: ['health'],
    region: "USA",
    rating: 4.3,
    trustScore: 90
  },
  {
    name: "Kin",
    domain: "kin.com",
    affiliateLink: "https://www.kin.com",
    description: "Home insurance built for catastrophe-prone areas like Florida.",
    categories: ['home'],
    region: "USA",
    rating: 4.6,
    trustScore: 92
  },
  {
    name: "Clearcover",
    domain: "clearcover.com",
    affiliateLink: "https://clearcover.com",
    description: "Smarter car insurance. Fast claims and lower prices via AI.",
    categories: ['auto'],
    region: "USA",
    rating: 4.5,
    trustScore: 90
  },
  {
    name: "Bestow",
    domain: "bestow.com",
    affiliateLink: "https://www.bestow.com",
    description: "Term life insurance in minutes. No doctors, no needles.",
    categories: ['life'],
    region: "USA",
    rating: 4.7,
    trustScore: 94
  },
  {
    name: "Spot",
    domain: "spotinsurance.com",
    affiliateLink: "https://www.spotinsurance.com",
    description: "Injury insurance for active lifestyles and athletes.",
    categories: ['health', 'travel'],
    region: "USA",
    rating: 4.6,
    trustScore: 89
  },

  // --- UK ---
  {
    name: "Aviva",
    domain: "aviva.co.uk",
    affiliateLink: "https://www.aviva.co.uk",
    description: "UK's leading insurer. Savings on multi-car and home bundles.",
    categories: ['auto', 'home', 'life'],
    region: "UK",
    rating: 4.7,
    trustScore: 98
  },
  {
    name: "Admiral",
    domain: "admiral.com",
    affiliateLink: "https://www.admiral.com",
    description: "Great for multi-car policies. Strong digital presence.",
    categories: ['auto', 'home', 'travel'],
    region: "UK",
    rating: 4.6,
    trustScore: 96
  },
  {
    name: "Direct Line",
    domain: "directline.com",
    affiliateLink: "https://www.directline.com",
    description: "We're on it. Comprehensive cover with guaranteed hire car.",
    categories: ['auto', 'home', 'business'],
    region: "UK",
    rating: 4.5,
    trustScore: 97
  },
  {
    name: "AXA UK",
    domain: "axa.co.uk",
    affiliateLink: "https://www.axa.co.uk",
    description: "Global protection with local UK support.",
    categories: ['health', 'business', 'auto'],
    region: "UK",
    rating: 4.6,
    trustScore: 98
  },
  {
    name: "LV=",
    domain: "lv.com",
    affiliateLink: "https://www.lv.com",
    description: "Liverpool Victoria. Highly rated for customer service.",
    categories: ['auto', 'home', 'pet'],
    region: "UK",
    rating: 4.8,
    trustScore: 95
  },
  {
    name: "Vitality",
    domain: "vitality.co.uk",
    affiliateLink: "https://www.vitality.co.uk",
    description: "Health and life insurance that rewards you for being healthy.",
    categories: ['health', 'life'],
    region: "UK",
    rating: 4.7,
    trustScore: 94
  },
  {
    name: "Bupa",
    domain: "bupa.co.uk",
    affiliateLink: "https://www.bupa.co.uk",
    description: "Premium health insurance and care homes.",
    categories: ['health'],
    region: "UK",
    rating: 4.6,
    trustScore: 97
  },
  {
    name: "Churchill",
    domain: "churchill.com",
    affiliateLink: "https://www.churchill.com",
    description: "Dependable car and home insurance.",
    categories: ['auto', 'home'],
    region: "UK",
    rating: 4.4,
    trustScore: 95
  },

  // --- Canada ---
  {
    name: "Manulife",
    domain: "manulife.ca",
    affiliateLink: "https://www.manulife.ca",
    description: "Canada's largest insurance company. Travel & Life specialists.",
    categories: ['life', 'health', 'travel'],
    region: "Canada",
    rating: 4.7,
    trustScore: 99
  },
  {
    name: "Intact",
    domain: "intact.ca",
    affiliateLink: "https://www.intact.ca",
    description: "Largest provider of property and casualty insurance in Canada.",
    categories: ['auto', 'home', 'business'],
    region: "Canada",
    rating: 4.6,
    trustScore: 98
  },
  {
    name: "Sun Life",
    domain: "sunlife.ca",
    affiliateLink: "https://www.sunlife.ca",
    description: "Financial security and health solutions for Canadians.",
    categories: ['life', 'health'],
    region: "Canada",
    rating: 4.7,
    trustScore: 98
  },
  {
    name: "Desjardins",
    domain: "desjardins.com",
    affiliateLink: "https://www.desjardins.com",
    description: "Leading cooperative financial group in Canada.",
    categories: ['auto', 'home'],
    region: "Canada",
    rating: 4.5,
    trustScore: 97
  },
  {
    name: "Sonnet",
    domain: "sonnet.ca",
    affiliateLink: "https://www.sonnet.ca",
    description: "Canada's first fully online home and auto insurance.",
    categories: ['auto', 'home'],
    region: "Canada",
    rating: 4.4,
    trustScore: 92
  },
  {
    name: "TD Insurance",
    domain: "tdinsurance.com",
    affiliateLink: "https://www.tdinsurance.com",
    description: "Direct insurance from one of Canada's top banks.",
    categories: ['auto', 'home'],
    region: "Canada",
    rating: 4.5,
    trustScore: 98
  },
  {
    name: "BCAA",
    domain: "bcaa.com",
    affiliateLink: "https://www.bcaa.com",
    description: "British Columbia Automobile Association. Trusted local choice.",
    categories: ['auto', 'home', 'travel'],
    region: "Canada",
    rating: 4.8,
    trustScore: 96
  },

  // --- Australia ---
  {
    name: "QBE",
    domain: "qbe.com",
    affiliateLink: "https://www.qbe.com/au",
    description: "Global insurer headquartered in Sydney. Business experts.",
    categories: ['business', 'auto', 'home'],
    region: "Australia",
    rating: 4.6,
    trustScore: 98
  },
  {
    name: "Suncorp",
    domain: "suncorp.com.au",
    affiliateLink: "https://www.suncorp.com.au",
    description: "Banking and insurance giant. Strong in Queensland.",
    categories: ['home', 'auto', 'health'],
    region: "Australia",
    rating: 4.5,
    trustScore: 97
  },
  {
    name: "NRMA",
    domain: "nrma.com.au",
    affiliateLink: "https://www.nrma.com.au",
    description: "Trusted by millions of Australians for roadside and cover.",
    categories: ['auto', 'home'],
    region: "Australia",
    rating: 4.7,
    trustScore: 98
  },
  {
    name: "Youi",
    domain: "youi.com.au",
    affiliateLink: "https://www.youi.com.au",
    description: "Insures what you actually use. Tailored premiums.",
    categories: ['auto', 'home'],
    region: "Australia",
    rating: 4.4,
    trustScore: 93
  },
  {
    name: "AAMI",
    domain: "aami.com.au",
    affiliateLink: "https://www.aami.com.au",
    description: "Lucky you're with AAMI. Great claims service.",
    categories: ['auto', 'home', 'business'],
    region: "Australia",
    rating: 4.5,
    trustScore: 96
  },
  {
    name: "Nib",
    domain: "nib.com.au",
    affiliateLink: "https://www.nib.com.au",
    description: "Health insurance for the modern Australian.",
    categories: ['health', 'travel'],
    region: "Australia",
    rating: 4.3,
    trustScore: 94
  },
  {
    name: "Budget Direct",
    domain: "budgetdirect.com.au",
    affiliateLink: "https://www.budgetdirect.com.au",
    description: "Award-winning low cost insurance.",
    categories: ['auto', 'home', 'travel'],
    region: "Australia",
    rating: 4.4,
    trustScore: 92
  },

  // --- Europe ---
  {
    name: "Allianz",
    domain: "allianz.com",
    affiliateLink: "https://www.allianz.com",
    description: "German multinational. One of the world's largest insurers.",
    categories: ['auto', 'home', 'business', 'travel'],
    region: "Europe",
    rating: 4.8,
    trustScore: 99
  },
  {
    name: "AXA",
    domain: "axa.com",
    affiliateLink: "https://www.axa.com",
    description: "French multinational. Leader in health and protection.",
    categories: ['health', 'travel', 'auto'],
    region: "Europe",
    rating: 4.7,
    trustScore: 99
  },
  {
    name: "Zurich",
    domain: "zurich.com",
    affiliateLink: "https://www.zurich.com",
    description: "Swiss quality. Focus on property and casualty.",
    categories: ['business', 'cyber', 'home'],
    region: "Europe",
    rating: 4.8,
    trustScore: 99
  },
  {
    name: "Generali",
    domain: "generali.com",
    affiliateLink: "https://www.generali.com",
    description: "Italian insurance giant with strong European presence.",
    categories: ['life', 'auto', 'home'],
    region: "Europe",
    rating: 4.6,
    trustScore: 97
  },
  {
    name: "Mapfre",
    domain: "mapfre.com",
    affiliateLink: "https://www.mapfre.com",
    description: "Spanish multinational. Major player in Latin America too.",
    categories: ['auto', 'home', 'health'],
    region: "Europe",
    rating: 4.5,
    trustScore: 96
  },
  {
    name: "Luko",
    domain: "luko.eu",
    affiliateLink: "https://www.luko.eu",
    description: "Neo-insurer in France and Germany. Fast and digital.",
    categories: ['home'],
    region: "Europe",
    rating: 4.6,
    trustScore: 91
  },
  {
    name: "Alan",
    domain: "alan.com",
    affiliateLink: "https://alan.com",
    description: "Digital health insurance partner for companies in Europe.",
    categories: ['health'],
    region: "Europe",
    rating: 4.8,
    trustScore: 93
  }
].map(p => ({
  ...p,
  logoUrl: getLogo(p.domain)
}));

export const officialDirectories = [
  {
    region: "USA",
    links: [
      { name: 'AM Best', url: 'https://web.ambest.com/home', desc: 'Credit ratings & financial strength.' },
      { name: 'NAIC Consumer Search', url: 'https://content.naic.org/', desc: 'National Association of Insurance Commissioners.' },
      { name: 'Healthcare.gov', url: 'https://www.healthcare.gov/', desc: 'Official Health Insurance Marketplace.' },
      { name: 'NIPR', url: 'https://nipr.com/', desc: 'National Insurance Producer Registry.' }
    ]
  },
  {
    region: "Canada",
    links: [
      { name: 'OSFI', url: 'https://www.osfi-bsif.gc.ca/', desc: 'Office of the Superintendent of Financial Institutions.' },
      { name: 'IBC', url: 'http://www.ibc.ca/', desc: 'Insurance Bureau of Canada - Consumer Info.' },
      { name: 'OLHI', url: 'https://olhi.ca/', desc: 'OmbudService for Life & Health Insurance.' },
      { name: 'GAO', url: 'https://www.gao.ca/', desc: 'General Insurance OmbudService.' }
    ]
  },
  {
    region: "Europe",
    links: [
      { name: 'EIOPA', url: 'https://www.eiopa.europa.eu/', desc: 'European Insurance and Occupational Pensions Authority.' },
      { name: 'FCA (UK)', url: 'https://www.fca.org.uk/', desc: 'Financial Conduct Authority Registry.' },
      { name: 'ABI (UK)', url: 'https://www.abi.org.uk/', desc: 'Association of British Insurers.' },
      { name: 'Insurance Europe', url: 'https://www.insuranceeurope.eu/', desc: 'Federation of European insurers.' }
    ]
  },
  {
    region: "Australia",
    links: [
      { name: 'APRA', url: 'https://www.apra.gov.au/', desc: 'Australian Prudential Regulation Authority.' },
      { name: 'AFCA', url: 'https://www.afca.org.au/', desc: 'Australian Financial Complaints Authority.' },
      { name: 'ICA', url: 'https://insurancecouncil.com.au/', desc: 'Insurance Council of Australia.' },
      { name: 'PrivateHealth.gov.au', url: 'https://www.privatehealth.gov.au/', desc: 'Australian Government Health Fund comparison.' }
    ]
  }
];

export const comparisonData = [
  {
    feature: "Quote Speed",
    traditional: "15-30 Minutes (Phone/Forms)",
    ai: "90 Seconds (Chatbot)",
    winner: "ai"
  },
  {
    feature: "Claims Processing",
    traditional: "Days to Weeks",
    ai: "Instant to 48 Hours",
    winner: "ai"
  },
  {
    feature: "Pricing Model",
    traditional: "Demographic Groups",
    ai: "Individual Behavior (Telematics)",
    winner: "ai"
  },
  {
    feature: "Customer Service",
    traditional: "Business Hours / Call Centers",
    ai: "24/7 AI Agents + Human Fallback",
    winner: "draw"
  }
];
