import React from 'react';
import { Target, Map, UtensilsCrossed } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
             <div className="absolute top-0 left-0 w-3/4 h-3/4 border-4 border-gold-100 -translate-x-4 -translate-y-4 z-0"></div>
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1555244944-d1e3647748cc?q=80&w=2864&auto=format&fit=crop" alt="Fine Dining Restaurant" className="w-full h-64 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2940&auto=format&fit=crop" alt="Luxury Hotel" className="w-full h-64 object-cover shadow-lg translate-y-8" />
             </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-royal font-bold text-gray-900 mb-6 leading-tight">
              Unveiling Bharat's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Hidden Gems</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              VenueMatch was born from a simple observation: India's Tier 2 and Tier 3 cities are home to some of the most exquisite spaces—heritage palaces, modern convention centers, and culinary masterpieces in fine dining restaurants—that largely remain undiscovered by the global audience.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
              We are not just a listing platform; we are a bridge. We connect discerning planners with a curated selection of hotels, restaurants, and standalone venues that offer luxury without the metropolitan price tag.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0">
                        <Target className="text-gold-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold font-royal text-lg">Curated Quality</h4>
                        <p className="text-sm text-gray-500">Every hotel, restaurant, and banquet is vetted for service standards.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0">
                        <Map className="text-gold-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold font-royal text-lg">Beyond Metros</h4>
                        <p className="text-sm text-gray-500">Focusing on Indore, Jaipur, Lucknow, Kochi, and 200+ emerging hubs.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0">
                        <UtensilsCrossed className="text-gold-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold font-royal text-lg">Culinary Excellence</h4>
                        <p className="text-sm text-gray-500">Partnering with top-tier restaurants for intimate social gatherings.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;