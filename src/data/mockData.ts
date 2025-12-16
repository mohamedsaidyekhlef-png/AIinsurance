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

export const partners = [
  // USA
  {
    name: "Lemonade",
    logo: "🍋",
    affiliateLink: "https://lemonade.com/r/YOUR_AFFILIATE_ID",
    description: "Instant everything. Killer prices. Best for Renters, Home, Car & Pet.",
    categories: ['home', 'auto', 'health'],
    region: "USA"
  },
  {
    name: "Ethos",
    logo: "🛡️",
    affiliateLink: "https://ethoslife.com/apply?referrer=YOUR_AFFILIATE_ID",
    description: "100% online life insurance. No medical exams for most. Instant decisions.",
    categories: ['health', 'life'],
    region: "USA"
  },
  {
    name: "Hippo",
    logo: "🦛",
    affiliateLink: "https://hippo.com/quote?ref=YOUR_AFFILIATE_ID",
    description: "Modern home insurance that uses satellite data to price your policy fairly.",
    categories: ['home'],
    region: "USA"
  },
  {
    name: "Root",
    logo: "🚗",
    affiliateLink: "https://joinroot.com/?ref=YOUR_AFFILIATE_ID",
    description: "Car insurance based on how you drive, not who you are.",
    categories: ['auto'],
    region: "USA"
  },
  {
    name: "Coalition",
    logo: "🔒",
    affiliateLink: "https://www.coalitioninc.com/",
    description: "Active cyber insurance that helps prevent attacks before they happen.",
    categories: ['cyber', 'business'],
    region: "Global"
  },
  
  // Canada
  {
    name: "Manulife",
    logo: "🍁",
    affiliateLink: "https://www.manulife.ca/",
    description: "Canada's leading provider with Vitality AI wellness integration.",
    categories: ['life', 'health', 'travel'],
    region: "Canada"
  },
  {
    name: "Intact",
    logo: "🏢",
    affiliateLink: "https://www.intact.ca/",
    description: "Largest provider of property and casualty insurance in Canada.",
    categories: ['auto', 'home', 'business'],
    region: "Canada"
  },
  {
    name: "Sun Life",
    logo: "☀️",
    affiliateLink: "https://www.sunlife.ca/",
    description: "Digital-first life and health solutions for Canadians.",
    categories: ['life', 'health'],
    region: "Canada"
  },

  // Europe (UK, Germany, France, etc.)
  {
    name: "Allianz",
    logo: "🦅",
    affiliateLink: "https://www.allianz.com/",
    description: "Global giant using advanced analytics for tailored European coverage.",
    categories: ['auto', 'home', 'business', 'travel'],
    region: "Europe"
  },
  {
    name: "AXA",
    logo: "🟦",
    affiliateLink: "https://www.axa.com/",
    description: "Tech-forward insurer offering blockchain-based flight delay products.",
    categories: ['health', 'travel', 'auto'],
    region: "Europe"
  },
  {
    name: "Aviva",
    logo: "🟡",
    affiliateLink: "https://www.aviva.co.uk/",
    description: "UK's leading insurer with the 'Aviva Drive' telematics app.",
    categories: ['auto', 'home', 'life'],
    region: "Europe"
  },
  {
    name: "Zurich",
    logo: "🇨🇭",
    affiliateLink: "https://www.zurich.com/",
    description: "Swiss precision meets AI risk modeling for global businesses.",
    categories: ['business', 'cyber'],
    region: "Europe"
  },
  {
    name: "Admiral",
    logo: "⚓",
    affiliateLink: "https://www.admiral.com/",
    description: "Multi-car discounts and AI-driven pricing for UK drivers.",
    categories: ['auto', 'home'],
    region: "Europe"
  },

  // Australia
  {
    name: "QBE",
    logo: "🇦🇺",
    affiliateLink: "https://www.qbe.com/au",
    description: "Australia's largest global insurer utilizing AI for climate risk.",
    categories: ['business', 'auto', 'home'],
    region: "Australia"
  },
  {
    name: "Suncorp",
    logo: "☀️",
    affiliateLink: "https://www.suncorp.com.au/",
    description: "Leading general insurer in Australia with digital claims processing.",
    categories: ['home', 'auto', 'health'],
    region: "Australia"
  },
  {
    name: "Youi",
    logo: "🫵",
    affiliateLink: "https://www.youi.com.au/",
    description: "Insures what you actually use. Strong focus on customer data.",
    categories: ['auto', 'home'],
    region: "Australia"
  },
  {
    name: "Nib",
    logo: "🟢",
    affiliateLink: "https://www.nib.com.au/",
    description: "Health insurance with AI-powered health management programs.",
    categories: ['health', 'travel'],
    region: "Australia"
  }
];

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
