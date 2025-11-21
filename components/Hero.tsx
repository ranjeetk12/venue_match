
import React, { useState } from 'react';
import { ThemeType } from '../App';

interface HeroProps {
  activeTheme: ThemeType;
  setActiveTheme: (theme: ThemeType) => void;
}

const THEMES: Record<ThemeType, {
  id: ThemeType;
  label: string;
  title: string;
  subtitle: string;
  bgImage: string;
  accent: string;
  text: string;
}> = {
  wedding: {
    id: 'wedding',
    label: 'Weddings',
    title: "Royal Beginnings in Bharat",
    subtitle: "From palace weddings in Udaipur to riverside pheras in Varanasi.",
    bgImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2940&auto=format&fit=crop",
    accent: "bg-maroon-700",
    text: "text-maroon-100"
  },
  corporate: {
    id: 'corporate',
    label: 'Corporate',
    title: "World-Class Events",
    subtitle: "Annual offsites in Coorg or conferences in Indore.",
    bgImage: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2940&auto=format&fit=crop",
    accent: "bg-royal-900",
    text: "text-blue-100"
  },
  social: {
    id: 'social',
    label: 'Social',
    title: "Unforgettable Moments",
    subtitle: "Intimate gatherings in Goa or family reunions in Kerala.",
    bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
    accent: "bg-teal-900",
    text: "text-teal-100"
  }
};

const Hero: React.FC<HeroProps> = ({ activeTheme, setActiveTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeChange = (theme: ThemeType) => {
    if (activeTheme === theme) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTheme(theme);
      setIsAnimating(false);
    }, 300);
  };

  const currentTheme = THEMES[activeTheme];

  return (
    <div className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden transition-all duration-500">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 z-0 transform transition-transform duration-[2000ms] ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        <img 
          src={currentTheme.bgImage} 
          alt={currentTheme.label} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
        />
        {/* Increased opacity of the gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      {/* Theme Switcher Tabs */}
      <div className="absolute top-28 md:top-32 z-20 w-full flex justify-center px-4">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 p-1 rounded-full flex gap-1 overflow-x-auto max-w-full scrollbar-hide">
          {(Object.keys(THEMES) as ThemeType[]).map((themeKey) => (
            <button
              key={themeKey}
              onClick={() => handleThemeChange(themeKey)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                activeTheme === themeKey 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {THEMES[themeKey].label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            
            <h1 className="text-4xl md:text-6xl font-royal font-bold leading-tight mb-4 text-white text-shadow-lg">
              {currentTheme.title}
            </h1>
            
            <p className={`text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md px-2`}>
              {currentTheme.subtitle}
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
