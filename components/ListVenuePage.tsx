import React from 'react';
import { CheckCircle, TrendingUp, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface ListVenuePageProps {
  onOpenAuth: (view: 'signup') => void;
}

const ListVenuePage: React.FC<ListVenuePageProps> = ({ onOpenAuth }) => {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" 
            alt="Luxury Venue Interior" 
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-royal font-bold mb-6">
            Monetize Your <span className="text-gold-500">Masterpiece</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-gray-200">
            Join India's premier marketplace. Connect with high-value clients seeking unique Hotels, Restaurants, and Banquets for weddings, corporate offsites, and social galas.
          </p>
          <button 
            onClick={() => onOpenAuth('signup')}
            className="bg-gold-500 text-black px-10 py-4 font-bold text-lg uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-3 mx-auto"
          >
            List Your Property <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-black py-12 border-b border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border-r border-gray-800 last:border-0">
            <div className="text-4xl font-royal font-bold text-gold-500 mb-2">200+</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest">Cities Covered</div>
          </div>
          <div className="border-r border-gray-800 last:border-0">
            <div className="text-4xl font-royal font-bold text-gold-500 mb-2">15k+</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest">Active Planners</div>
          </div>
          <div className="border-r border-gray-800 last:border-0">
            <div className="text-4xl font-royal font-bold text-gold-500 mb-2">₹50Cr+</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest">Booking Value</div>
          </div>
          <div>
            <div className="text-4xl font-royal font-bold text-gold-500 mb-2">0%</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest">Listing Fee</div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Why Partner With Us</h2>
          <h3 className="text-4xl font-royal font-bold text-gray-900">The VenueMatch Advantage</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 p-10 group hover:bg-black hover:text-white transition-all duration-500 cursor-default border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
              <Globe size={32} className="text-gold-600 group-hover:text-black" />
            </div>
            <h4 className="text-xl font-royal font-bold mb-4">National Visibility</h4>
            <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
              Showcase your hotel, restaurant, or resort to event planners from Delhi, Mumbai, and Bangalore looking for destination venues in your city.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-10 group hover:bg-black hover:text-white transition-all duration-500 cursor-default border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
              <TrendingUp size={32} className="text-gold-600 group-hover:text-black" />
            </div>
            <h4 className="text-xl font-royal font-bold mb-4">High-Value Bookings</h4>
            <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
              We focus on premium weddings and corporate offsites. Get leads that match your venue's stature and pricing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-10 group hover:bg-black hover:text-white transition-all duration-500 cursor-default border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
              <ShieldCheck size={32} className="text-gold-600 group-hover:text-black" />
            </div>
            <h4 className="text-xl font-royal font-bold mb-4">Verified Inquiries</h4>
            <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
              Our AI vets every request. Receive detailed RFPs with budget, guest count, and dates confirmed. No time wasters.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-royal font-bold mb-8">Simple Onboarding Process</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold-500 text-gold-500 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Create Profile</h4>
                    <p className="text-gray-400 text-sm">Upload high-quality photos, add capacity details (Banquet/Restaurant/Lawn), and set your pricing structure.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold-500 text-gold-500 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Verification</h4>
                    <p className="text-gray-400 text-sm">Our team verifies your property credentials to ensure the "VenueMatch Premium" standard.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold-500 text-gold-500 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Start Receiving Leads</h4>
                    <p className="text-gray-400 text-sm">Get notified instantly when a planner's requirements match your venue.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button onClick={() => onOpenAuth('signup')} className="text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-all">
                    Start your registration &rarr;
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2940&auto=format&fit=crop" 
                alt="Venue Dashboard" 
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold-500 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-royal font-bold text-black mb-6">Ready to Host the Extraordinary?</h2>
          <p className="text-black/80 text-lg mb-10 max-w-2xl mx-auto">
            Join the network of 2,000+ premium hotels, restaurants, and venues in Bharat.
          </p>
          <button 
            onClick={() => onOpenAuth('signup')}
            className="bg-black text-white px-12 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-xl"
          >
            List My Property
          </button>
        </div>
      </section>
    </div>
  );
};

export default ListVenuePage;