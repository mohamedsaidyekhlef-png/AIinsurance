import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);
// Use specific version to avoid 404 on alias
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

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
  recommendedAffiliates: string[]; // IDs of partners
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
        "recommendedAffiliates": ["lemonade", "root"] 
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
      recommendedAffiliates: ["lemonade"]
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
