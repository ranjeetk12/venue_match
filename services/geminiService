import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AICriteriaResponse } from "../types";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeEventRequest = async (prompt: string): Promise<AICriteriaResponse> => {
  try {
    const responseSchema: Schema = {
      type: Type.OBJECT,
      properties: {
        eventType: { type: Type.STRING, description: "The type of event (e.g., Wedding Sangeet, Annual Corporate Meeting, Bachelor Party)" },
        location: { type: Type.STRING, description: "The desired location. Focus on Indian Tier 2 and Tier 3 cities if not specified." },
        guestCount: { type: Type.INTEGER, description: "Estimated number of attendees" },
        vibe: { type: Type.STRING, description: "The atmosphere or style (e.g., Royal, Heritage, Modern, Riverside)" },
        budgetLevel: { type: Type.STRING, enum: ["Budget", "Moderate", "Luxury"], description: "Estimated budget level based on description (INR context)" }
      },
      required: ["eventType", "location", "guestCount", "vibe", "budgetLevel"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Extract event requirements from this user request, specifically for the Indian market context, focusing on Tier 2 and Tier 3 cities (like Indore, Bhopal, Jaipur, Kochi, Lucknow, etc) handling terms like Lakhs, Crores, Sangeet, etc.: "${prompt}". If specific details are missing, infer reasonable defaults for a planner looking for venues in emerging Indian cities.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.2, 
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AICriteriaResponse;
  } catch (error) {
    console.error("Error analyzing event request:", error);
    // Return a fallback to prevent app crash
    return {
        eventType: "General Event",
        location: "Indore, MP",
        guestCount: 100,
        vibe: "Premium",
        budgetLevel: "Moderate"
    };
  }
};
