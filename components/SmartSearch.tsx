
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { analyzeEventRequest } from '../services/geminiService';
import { AICriteriaResponse } from '../types';
import { ThemeType } from '../App';

interface SmartSearchProps {
  activeTheme: ThemeType;
  onSearchComplete: (result: AICriteriaResponse) => void;
}

const THEME_CONFIG = {
  wedding: {
    placeholder: "e.g., 'I need a heritage hotel in Jodhpur for a Wedding Sangeet with 300 guests. Budget around ₹25 Lakhs.'",
    badgeColor: "text-gold-500"
  },
  corporate: {
    placeholder: "e.g., 'Conference hall in Indore for 50 attendees. Need projector and lunch buffet. Budget ₹50k.'",
    badgeColor: "text-blue-400"
  },
  social: {
    placeholder: "e.g., 'Rooftop venue in Lucknow for a 50th Birthday party. 80 guests, dinner included.'",
    badgeColor: "text-teal-400"
  }
};

const SmartSearch: React.FC<SmartSearchProps> = ({ activeTheme, onSearchComplete }) => {
  const [prompt, setPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Clear prompt when theme changes
  useEffect(() => {
    setPrompt('');
  }, [activeTheme]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsAnalyzing(true);
    try {
      const criteria = await analyzeEventRequest(prompt);
      onSearchComplete(criteria);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const config = THEME_CONFIG[activeTheme];

  return (
    <div className="w-full max-w-6xl mx-auto relative z-20 -mt-16 md:-mt-20 px-4 mb-12">
      <div className="bg-white shadow-2xl shadow-black/20 border-l-4 border-gold-500 flex flex-col lg:flex-row min-h-[140px]">
        
        {/* Concierge Badge */}
        <div className="bg-slate-900 p-6 lg:w-80 flex flex-col justify-center items-start relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-800 opacity-50">
                <Sparkles size={120} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
                <h3 className={`font-royal text-xl md:text-2xl font-bold mb-1 leading-tight ${config.badgeColor}`}>TELL ME YOUR PLAN</h3>
                <p className="text-white/80 font-royal tracking-widest text-xs uppercase">Rest on us</p>
            </div>
        </div>

        {/* Input Section */}
        <div className="p-6 flex-grow bg-white">
        <form onSubmit={handleSearch} className="relative h-full flex flex-col justify-between">
            <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={config.placeholder}
            className="w-full p-0 border-none focus:ring-0 text-lg md:text-xl resize-none h-20 placeholder:text-gray-300 text-gray-800 font-royal leading-relaxed"
            />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2 border-t border-gray-100 pt-4">
                <span className="text-xs text-gray-400 font-medium hidden md:block">
                    AI will detect location, budget, and event type.
                </span>
                <button 
                    type="submit" 
                    disabled={isAnalyzing || !prompt}
                    className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 font-bold tracking-wide uppercase text-sm flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
                >
                    {isAnalyzing ? 'Analyzing Plan...' : 'Find Venues'}
                    <ArrowRight size={16} />
                </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SmartSearch;
