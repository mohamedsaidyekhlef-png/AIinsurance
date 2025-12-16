import { Shield, Heart, Car, Home, Briefcase, Plane, Cpu, BarChart3, Lock, Zap, Search, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

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
  {
    name: "Lemonade",
    logo: "🍋",
    affiliateLink: "https://lemonade.com/r/YOUR_AFFILIATE_ID",
    description: "Instant everything. Killer prices. Best for Renters, Home, Car & Pet Insurance."
  },
  {
    name: "Ethos",
    logo: "🛡️",
    affiliateLink: "https://ethoslife.com/apply?referrer=YOUR_AFFILIATE_ID",
    description: "100% online life insurance. No medical exams for most. Instant decisions."
  },
  {
    name: "Hippo",
    logo: "🦛",
    affiliateLink: "https://hippo.com/quote?ref=YOUR_AFFILIATE_ID",
    description: "Modern home insurance that uses satellite data to price your policy fairly."
  },
  {
    name: "Root",
    logo: "🚗",
    affiliateLink: "https://joinroot.com/?ref=YOUR_AFFILIATE_ID",
    description: "Car insurance based on how you drive, not who you are."
  },
  {
    name: "Metromile",
    logo: "📉",
    affiliateLink: "https://metromile.com/?ref=YOUR_AFFILIATE_ID",
    description: "Pay-per-mile car insurance. Perfect for low-mileage drivers."
  },
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
