import React from 'react';
import { Diamond, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
               <Diamond size={24} className="text-gold-500" />
              <span className="text-2xl font-royal font-bold tracking-wider uppercase">VenueMatch</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
              India's most trusted marketplace for premium event venues. From royal palaces to modern boardrooms, we orchestrate the perfect setting for your story.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-8">Events</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weddings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Gatherings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Offsites</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Venue Partner Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6 font-light">Unlock access to secret venues and exclusive deals.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-900 border border-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors w-full"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-black px-4 py-3 font-bold uppercase tracking-widest text-xs transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-light">© 2024 VenueMatch India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8 text-gray-600 text-xs font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;