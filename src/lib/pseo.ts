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
    // Robust JSON cleaning
    let cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const firstBrace = cleanText.indexOf('{');
    const lastBrace = cleanText.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
        cleanText = cleanText.substring(firstBrace, lastBrace + 1);
    }
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("PSEO Generation Error:", error);
    // Fallback for robustness - COMPLETE CONTENT so it doesn't look like it's loading forever
    return {
      city, country, niche,
      heroTitle: `Best ${niche} Insurance in ${city} (2025 Guide)`,
      heroSubtitle: `Find the best AI-powered rates in ${city}, ${country} and save up to 30%.`,
      localRiskStat: { value: "High", label: `${niche} Risk Level`, source: "Local Market Data", trend: "up" },
      guideContent: `
        <p>Residents of <strong>${city}</strong> are facing unique challenges this year. With rising costs in the ${niche} sector, traditional insurance models are struggling to keep premiums affordable. Local data suggests that risk factors in your area have shifted, making standard policies less effective.</p>
        <p>AI-driven insurance offers a solution. By analyzing hyper-local data points—from traffic patterns in downtown ${city} to specific weather risks in the suburbs—modern carriers can offer more accurate, often cheaper, coverage. Don't settle for a generic price; get a policy tailored to ${city}.</p>
      `,
      aiAdvantage: [
        { traditional: "Manual Underwriting", aiSolution: "Instant AI Quote", savings: "Time" },
        { traditional: "Standard Risk Pool", aiSolution: "Personalized Risk Profile", savings: "15-20%" }
      ],
      recommendedCompanies: [
        {
          name: "Lemonade",
          url: "https://www.lemonade.com",
          rating: 4.8,
          trustScore: 92,
          priceLevel: "$",
          badge: "AI-First Choice",
          reason: `Fastest claims processing for ${city} residents.`,
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
        },
        {
          name: "Local Specialist",
          url: "/search",
          rating: 4.2,
          trustScore: 85,
          priceLevel: "$$",
          badge: "Local Agent",
          reason: "Best for complex bundles in your area.",
          logo: "📍"
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
