
import React, { useState } from 'react';
import { 
  ArrowLeft, MapPin, Star, Users, IndianRupee, 
  CheckCircle, Calendar, Clock, Mail, Phone, 
  Wifi, Car, Coffee, Music, Wind
} from 'lucide-react';
import { VENUES } from '../data/mockData';

interface VenueDetailsPageProps {
  venueId: string;
  onBack: () => void;
}

const VenueDetailsPage: React.FC<VenueDetailsPageProps> = ({ venueId, onBack }) => {
  const venue = VENUES.find(v => v.id === venueId);
  const [activeTab, setActiveTab] = useState<'about' | 'amenities' | 'reviews'>('about');

  if (!venue) {
    return <div className="pt-32 text-center">Venue not found</div>;
  }

  const amenitiesIcons: Record<string, React.ReactNode> = {
    'Wifi': <Wifi size={18} />,
    'Parking': <Car size={18} />,
    'Catering': <Coffee size={18} />,
    'AC': <Wind size={18} />,
    'Music': <Music size={18} />
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
        <img 
          src={venue.imageUrl} 
          alt={venue.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="absolute top-24 left-4 md:left-12 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all z-20"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div>
                <div className="flex gap-3 mb-3">
                   <span className="bg-gold-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">{venue.category}</span>
                   <span className="bg-white/20 backdrop-blur text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">{venue.type}</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-royal font-bold mb-2 leading-tight">{venue.name}</h1>
                <div className="flex items-center gap-2 text-gray-300 text-sm md:text-lg">
                  <MapPin size={18} className="text-gold-500 flex-shrink-0" />
                  {venue.address || venue.location}
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10 w-full md:w-auto justify-between md:justify-start">
                <div className="text-center border-r border-white/20 pr-4 flex-1 md:flex-none">
                  <div className="flex items-center justify-center gap-1 text-gold-400 font-bold text-xl md:text-2xl">
                    {venue.rating} <Star size={18} className="fill-gold-400" />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">{venue.reviews} Reviews</div>
                </div>
                <div className="text-center flex-1 md:flex-none">
                   <div className="text-xl md:text-2xl font-bold text-white">{venue.reviews > 50 ? 'Excellent' : 'Good'}</div>
                   <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-6 md:px-8 py-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${activeTab === 'about' ? 'border-gold-500 text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('amenities')}
                className={`px-6 md:px-8 py-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${activeTab === 'amenities' ? 'border-gold-500 text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
              >
                Amenities
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`px-6 md:px-8 py-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${activeTab === 'reviews' ? 'border-gold-500 text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'about' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-royal font-bold mb-6">About {venue.name}</h3>
                  <p className="text-gray-600 leading-loose mb-8 text-base md:text-lg font-light">
                    {venue.description || `Located in the heart of ${venue.location}, ${venue.name} stands as a testament to luxury and hospitality. Whether you are planning a grand wedding or an intimate gathering, this venue offers versatile spaces to suit every need.`}
                  </p>
                  
                  {venue.images && venue.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                      {venue.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-64 md:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500 cursor-pointer" />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'amenities' && (
                <div className="animate-fade-in">
                   <h3 className="text-2xl font-royal font-bold mb-6">Features & Services</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {(venue.amenities || ['Parking', 'Catering', 'Decor', 'AC', 'Wifi', 'Rooms']).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                           <div className="text-gold-600">
                              {amenitiesIcons[item] || <CheckCircle size={18} />}
                           </div>
                           <span className="text-gray-700 font-medium text-sm">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="animate-fade-in space-y-8">
                   <h3 className="text-2xl font-royal font-bold mb-6">Guest Experiences</h3>
                   {venue.detailedReviews && venue.detailedReviews.length > 0 ? (
                     venue.detailedReviews.map((review) => (
                       <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                             <h4 className="font-bold text-gray-900">{review.author}</h4>
                             <span className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</span>
                          </div>
                          <div className="flex text-gold-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className={i < review.rating ? 'fill-gold-400' : 'text-gray-200 fill-gray-200'} />
                            ))}
                          </div>
                          <p className="text-gray-600 italic">"{review.comment}"</p>
                       </div>
                     ))
                   ) : (
                     <p className="text-gray-500 italic">No detailed reviews available yet.</p>
                   )}
                </div>
              )}
            </div>
          </div>

          {/* Sticky Sidebar - Order first on mobile so quote is visible */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-white border border-gray-200 shadow-xl p-6 md:p-8 lg:sticky lg:top-32 rounded-lg">
              <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-6">
                 <div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Starting from</div>
                   <div className="text-2xl font-bold text-gray-900 font-royal">{venue.priceRange}</div>
                 </div>
                 <div className="text-right">
                   <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Capacity</div>
                   <div className="text-lg font-bold text-gray-900 flex items-center justify-end gap-1">
                      <Users size={16} /> {venue.capacity}
                   </div>
                 </div>
              </div>

              <h4 className="font-bold text-lg mb-4">Request a Quote</h4>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 rounded focus:border-gold-500 focus:outline-none text-sm" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Contact Number</label>
                  <input type="tel" className="w-full border border-gray-300 p-3 rounded focus:border-gold-500 focus:outline-none text-sm" placeholder="+91 98..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                      <input type="date" className="w-full border border-gray-300 p-3 rounded focus:border-gold-500 focus:outline-none text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Guests</label>
                      <input type="number" className="w-full border border-gray-300 p-3 rounded focus:border-gold-500 focus:outline-none text-sm" placeholder="100" />
                    </div>
                </div>
                
                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors shadow-lg mt-2">
                   Get Best Price
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3 text-sm text-gray-500">
                 <div className="flex items-center gap-3">
                    <Phone size={16} className="text-gold-500" />
                    <span>+91 98765 43210 (Concierge)</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Mail size={16} className="text-gold-500" />
                    <span>concierge@venuematch.in</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VenueDetailsPage;
