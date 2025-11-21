import React, { useState, useEffect } from 'react';
import { Menu, X, Diamond, User } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  onOpenAuth: (view: 'signin' | 'signup') => void;
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLinkClass = (view: ViewState) => {
    const isActive = currentView === view;
    return `transition-all uppercase tracking-wider relative ${isActive ? 'text-gold-400 font-bold after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-gold-500' : 'hover:text-gold-400'}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => handleNavClick('home')} className="flex items-center gap-3 group cursor-pointer">
          <div className="text-gold-500 transform transition-transform group-hover:rotate-45 duration-500">
            <Diamond size={28} strokeWidth={1.5} className="fill-gold-500/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-royal font-bold tracking-widest text-white uppercase">
              VenueMatch
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-gold-400 uppercase">Bharat Edition</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-200 font-light tracking-wide text-sm">
            {/* Plan Event - Gold Background Button */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-6 py-2 font-bold tracking-wider uppercase transition-colors shadow-lg ${currentView === 'home' ? 'bg-gold-500 text-black' : 'bg-transparent border border-gold-500/30 text-gold-200 hover:bg-gold-500 hover:text-black'}`}
            >
              Plan Event
            </button>

            <button 
              onClick={() => handleNavClick('list-venue')}
              className={getLinkClass('list-venue')}
            >
              List Your Venue
            </button>
            
            <button 
              onClick={() => handleNavClick('about')} 
              className={getLinkClass('about')}
            >
              About Us
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')} 
              className={getLinkClass('contact')}
            >
              Contact
            </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onOpenAuth('signin')}
            className="flex items-center gap-2 text-gold-200 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider border border-gold-500/30 px-6 py-2 hover:bg-gold-500/10"
          >
            <User size={16} />
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200 h-screen">
          <button onClick={() => handleNavClick('home')} className={`py-3 font-bold uppercase tracking-widest w-full ${currentView === 'home' ? 'bg-gold-500 text-black' : 'text-white border border-white/20'}`}>Plan Event</button>
          <button onClick={() => handleNavClick('list-venue')} className={`text-xl font-royal text-left ${currentView === 'list-venue' ? 'text-gold-500' : 'text-white'}`}>List Your Venue</button>
          <button onClick={() => handleNavClick('about')} className={`text-xl font-royal text-left ${currentView === 'about' ? 'text-gold-500' : 'text-white'}`}>About Us</button>
          <button onClick={() => handleNavClick('contact')} className={`text-xl font-royal text-left ${currentView === 'contact' ? 'text-gold-500' : 'text-white'}`}>Contact</button>
          <div className="h-px bg-white/10 my-2"></div>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onOpenAuth('signin'); }}
            className="text-gold-400 text-lg font-medium flex items-center gap-2"
          >
            <User size={20} /> Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;