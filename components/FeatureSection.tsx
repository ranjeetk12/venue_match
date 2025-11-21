import React from 'react';
import { Building2, HeartHandshake, PartyPopper, ArrowRight } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Tailored for Bharat</h2>
          <h3 className="text-4xl md:text-5xl font-royal font-bold text-gray-900 mb-6">Select Your Occasion</h3>
          <p className="text-gray-500 text-lg font-light">
             We specialize in connecting you with premium venues in India's fastest-growing cities. Choose your category to begin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Corporate Card */}
          <div className="group relative bg-white hover:bg-slate-50 transition-colors duration-500 p-10 border border-gray-100 hover:border-slate-900 shadow-sm hover:shadow-xl">
            <div className="bg-slate-50 group-hover:bg-slate-900 w-20 h-20 flex items-center justify-center mb-8 transition-colors duration-500 rounded-full">
              <Building2 size={32} className="text-slate-900 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-royal font-bold text-slate-900 mb-4">Corporate</h4>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[60px]">
              From Annual General Meetings in Bhopal to Leadership Offsites in Coorg. Professional setups in emerging hubs.
            </p>
            <button className="w-full py-4 border border-slate-200 text-slate-900 font-bold uppercase text-xs tracking-widest group-hover:bg-slate-900 group-hover:text-white transition-all flex items-center justify-center gap-2">
              Explore Corporate <ArrowRight size={14} />
            </button>
          </div>

          {/* Wedding Card */}
          <div className="group relative bg-white hover:bg-red-50 transition-colors duration-500 p-10 border border-gray-100 hover:border-maroon-900 shadow-sm hover:shadow-xl transform md:-translate-y-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
            <div className="bg-red-50 group-hover:bg-maroon-900 w-20 h-20 flex items-center justify-center mb-8 transition-colors duration-500 rounded-full">
              <HeartHandshake size={32} className="text-maroon-900 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-royal font-bold text-maroon-900 mb-4">Weddings</h4>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[60px]">
              Heritage forts in Rajasthan, riverside resorts in Varanasi, or grand banquets in Lucknow. Make it memorable.
            </p>
             <button className="w-full py-4 border border-red-200 text-maroon-900 font-bold uppercase text-xs tracking-widest group-hover:bg-maroon-900 group-hover:text-white transition-all flex items-center justify-center gap-2">
              Explore Weddings <ArrowRight size={14} />
            </button>
          </div>

          {/* Social Card */}
          <div className="group relative bg-white hover:bg-teal-50 transition-colors duration-500 p-10 border border-gray-100 hover:border-teal-900 shadow-sm hover:shadow-xl">
            <div className="bg-teal-50 group-hover:bg-teal-900 w-20 h-20 flex items-center justify-center mb-8 transition-colors duration-500 rounded-full">
              <PartyPopper size={32} className="text-teal-900 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-royal font-bold text-teal-900 mb-4">Social</h4>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[60px]">
              Kitty parties, anniversaries, or family get-togethers. Discover boutique villas and rooftops in your city.
            </p>
             <button className="w-full py-4 border border-teal-200 text-teal-900 font-bold uppercase text-xs tracking-widest group-hover:bg-teal-900 group-hover:text-white transition-all flex items-center justify-center gap-2">
              Explore Social <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
