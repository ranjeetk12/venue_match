
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmartSearch from './components/SmartSearch';
import FeaturedVenues from './components/FeaturedVenues';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ListVenuePage from './components/ListVenuePage';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import VenueDetailsPage from './components/VenueDetailsPage';
import { AICriteriaResponse } from './types';

export type ThemeType = 'wedding' | 'corporate' | 'social';
export type ViewState = 'home' | 'list-venue' | 'about' | 'contact' | 'venue-details';

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');
  const [activeTheme, setActiveTheme] = useState<ThemeType>('wedding');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [searchCriteria, setSearchCriteria] = useState<AICriteriaResponse | null>(null);

  const openAuth = (view: 'signin' | 'signup') => {
    setAuthView(view);
    setIsAuthModalOpen(true);
  };

  const handleVenueClick = (id: string) => {
    setSelectedVenueId(id);
    setCurrentView('venue-details');
    window.scrollTo(0, 0);
  };

  const handleSearchComplete = (result: AICriteriaResponse) => {
    setSearchCriteria(result);
    
    // Intelligent Theme Switching based on AI result
    const eventLower = result.eventType.toLowerCase();
    if (eventLower.includes('wedding') || eventLower.includes('sangeet') || eventLower.includes('marriage')) {
        setActiveTheme('wedding');
    } else if (eventLower.includes('corporate') || eventLower.includes('meeting') || eventLower.includes('conference') || eventLower.includes('offsite')) {
        setActiveTheme('corporate');
    } else {
        setActiveTheme('social');
    }

    // Scroll to collections
    setTimeout(() => {
        const element = document.getElementById('collections');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col selection:bg-gold-200 selection:text-black">
      <Navbar onOpenAuth={openAuth} onNavigate={setCurrentView} currentView={currentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <div id="plan">
              <Hero activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
              <SmartSearch activeTheme={activeTheme} onSearchComplete={handleSearchComplete} />
            </div>
            
            <FeaturedVenues 
                activeTheme={activeTheme} 
                searchCriteria={searchCriteria}
                onVenueClick={handleVenueClick} 
                onClearCriteria={() => setSearchCriteria(null)}
            />
            
            <Testimonials activeTheme={activeTheme} />

            {/* Final CTA */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-royal font-bold text-gray-900 mb-6">Expand Your Reach</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
                        Whether you are planning an event in Ranchi or own a banquet in Bhubaneswar, we are your partner.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <button onClick={() => openAuth('signup')} className="px-12 py-5 bg-black hover:bg-gold-500 hover:text-black text-white text-lg font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl">
                          Register as Planner
                      </button>
                    </div>
                </div>
            </section>
          </>
        )}

        {currentView === 'list-venue' && (
          <ListVenuePage onOpenAuth={openAuth} />
        )}

        {currentView === 'about' && (
          <AboutSection />
        )}

        {currentView === 'contact' && (
          <ContactSection />
        )}

        {currentView === 'venue-details' && selectedVenueId && (
          <VenueDetailsPage 
            venueId={selectedVenueId} 
            onBack={() => setCurrentView('home')} 
          />
        )}
      </main>
      
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialView={authView} />
    </div>
  );
};

export default App;
