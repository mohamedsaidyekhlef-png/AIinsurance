import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);
// UPDATED: Use the standard alias
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export interface RecommendedCompany {
  name: string;
  url: string;
  rating: number;
  trustScore: number; // 0-100
  priceLevel: string; // $, $$, $$$
  badge: string; // e.g. "Best for Floods"
  reason: string; // "Top rated for claims speed in Miami"
  logo: string; // Emoji or simple text
}

export interface LocalPageData {
  city: string;
  country: string;
  niche: string;
  heroTitle: string;
  heroSubtitle: string;
  localRiskStat: {
    value: string;
    label: string;
    source: string;
    trend: "up" | "down";
  };
  guideContent: string; // HTML string
  aiAdvantage: {
    traditional: string;
    aiSolution: string;
    savings: string;
  }[];
  // Changed from string[] to detailed object array
  recommendedCompanies: RecommendedCompany[];
}

export const generateLocalPageContent = async (country: string, city: string, niche: string): Promise<LocalPageData> => {
  try {
    const prompt = `
      Role: You are a Senior Local Insurance Expert for ${city}, ${country}.
      Task: Generate content for a landing page targeting the niche: "${niche}".
      
      Context: 
      - We are "Insuralix", an AI insurance comparison platform.
      - We need to convince users in ${city} that traditional insurance is outdated for ${niche} risks.
      - Use real-sounding local data (hallucinate plausible stats based on real-world reputation of the city, e.g., Flood in Miami, Theft in London).

      CRITICAL: Generate a list of 3-4 REAL insurance companies that actually operate in ${city} and are good for ${niche}.
      - Do NOT use affiliate links. Use their REAL official homepage URLs (e.g., https://www.geico.com).
      - Assign an "Insuralix Trust Score" (80-99) based on their digital reputation.
      - Provide a specific "Reason" why they are good for this city/niche.

      Output JSON format ONLY:
      {
        "heroTitle": "Protecting ${city} Drivers: Is your ${niche} coverage ready for 2026?",
        "heroSubtitle": "Why ${city} locals are switching to AI-powered insurance to combat rising rates.",
        "localRiskStat": {
          "value": "+18%",
          "label": "Increase in ${niche} incidents in ${city} Metro Area",
          "source": "${city} Police Dept / Local Data",
          "trend": "up"
        },
        "guideContent": "<p>Write 2 short, punchy paragraphs (HTML) explaining specific local risks. Mention specific neighborhoods or landmarks in ${city} to prove local expertise. Explain why AI underwriting helps.</p>",
        "aiAdvantage": [
          { "traditional": "Generic Zip Code Pricing", "aiSolution": "Hyper-local Risk Mapping", "savings": "15%" },
          { "traditional": "Slow Claims (Weeks)", "aiSolution": "Instant AI Payouts", "savings": "Time" }
        ],
        "recommendedCompanies": [
          {
            "name": "Company Name",
            "url": "https://www.real-website.com",
            "rating": 4.8,
            "trustScore": 95,
            "priceLevel": "$$",
            "badge": "Best for ${niche}",
            "reason": "Uses satellite data to price ${niche} risk accurately in ${city}.",
            "logo": "🏢"
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("PSEO Generation Error:", error);
    // Fallback for robustness
    return {
      city, country, niche,
      heroTitle: `${niche} Insurance in ${city}`,
      heroSubtitle: `Find the best AI rates in ${city}, ${country}.`,
      localRiskStat: { value: "High", label: "Risk Level", source: "Local Data", trend: "up" },
      guideContent: "<p>Loading local insights...</p>",
      aiAdvantage: [],
      recommendedCompanies: [
        {
          name: "Lemonade",
          url: "https://www.lemonade.com",
          rating: 4.8,
          trustScore: 92,
          priceLevel: "$",
          badge: "AI-First Choice",
          reason: "Fastest claims processing for urban areas.",
          logo: "🍋"
        },
        {
          name: "Allianz",
          url: "https://www.allianz.com",
          rating: 4.5,
          trustScore: 88,
          priceLevel: "$$",
          badge: "Global Stability",
          reason: "Strong financial backing for major claims.",
          logo: "🦅"
        }
      ]
    };
  }
};

// Helper to determine affiliate category based on niche slug
export const getCategoryFromNiche = (niche: string) => {
  const n = niche.toLowerCase();
  if (n.includes('auto') || n.includes('car') || n.includes('driver') || n.includes('tesla') || n.includes('uber')) return 'auto';
  if (n.includes('home') || n.includes('flood') || n.includes('fire') || n.includes('rent')) return 'home';
  if (n.includes('life') || n.includes('health') || n.includes('family')) return 'life';
  return 'general';
};
