
import React, { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Users, IndianRupee, X, Filter, ChevronDown, Check } from 'lucide-react';
import { Venue, AICriteriaResponse } from '../types';
import { ThemeType } from '../App';
import { VENUES } from '../data/mockData';

interface FeaturedVenuesProps {
  activeTheme: ThemeType;
  searchCriteria: AICriteriaResponse | null;
  onVenueClick?: (id: string) => void;
  onClearCriteria: () => void;
}

// Helper to get unique values from data
const getUniqueValues = (key: keyof Venue) => {
  const values = VENUES.map(v => v[key] as string);
  return Array.from(new Set(values.filter(Boolean))).sort();
};

// --- Sub-components defined OUTSIDE to prevent re-mounting issues ---

const FilterDropdown = ({ 
  label, 
  options, 
  selected, 
  onToggle, 
  isOpen,
  onToggleOpen
}: { 
  label: string, 
  options: string[], 
  selected: string[], 
  onToggle: (val: string) => void, 
  isOpen: boolean,
  onToggleOpen: () => void
}) => {
  return (
    <div className="relative">
      <button 
        onClick={(e) => { e.stopPropagation(); onToggleOpen(); }}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
          selected.length > 0 || isOpen
            ? 'bg-black text-white border-black' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
        }`}
      >
        {label} {selected.length > 0 && <span className="bg-gold-500 text-black text-[10px] px-1.5 rounded-full">{selected.length}</span>}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 z-30 max-h-80 overflow-y-auto animate-fade-in p-2"
            onClick={(e) => e.stopPropagation()} // Keep open when clicking inside
        >
          {options.map(option => (
            <div 
              key={option} 
              onClick={() => onToggle(option)}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer group"
            >
              <span className={`text-sm ${selected.includes(option) ? 'font-bold text-black' : 'text-gray-600'}`}>
                {option}
              </span>
              {selected.includes(option) && <Check size={14} className="text-gold-500" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CapacityFilter = ({
    value,
    onChange,
    isOpen,
    onToggleOpen
}: {
    value: number,
    onChange: (val: number) => void,
    isOpen: boolean,
    onToggleOpen: () => void
}) => {
    return (
        <div className="relative">
             <button 
                onClick={(e) => { e.stopPropagation(); onToggleOpen(); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                value > 0 || isOpen
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
            >
                <Users size={14} />
                Capacity {value > 0 && `(${value}+)`}
                <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 z-30 p-6 animate-fade-in"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mb-6 flex justify-between items-center">
                         <span className="text-sm font-bold text-gray-900">Minimum Guests</span>
                         <span className="text-gold-600 font-bold text-sm">{value > 0 ? `${value}+` : 'Any'}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="2000" 
                        step="50"
                        value={value}
                        onChange={(e) => onChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                        <span>2000+</span>
                    </div>
                </div>
            )}
        </div>
    )
}

// --- Main Component ---

const FeaturedVenues: React.FC<FeaturedVenuesProps> = ({ activeTheme, searchCriteria, onVenueClick, onClearCriteria }) => {
  // Filter States
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minCapacity, setMinCapacity] = useState<number>(0);

  // UI States
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const filterContainerRef = useRef<HTMLDivElement>(null);

  // Available Options
  const locations = getUniqueValues('location');
  const types = getUniqueValues('type');
  const categories = getUniqueValues('category');

  // --- Global Click Listener to Close Dropdowns ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If we click anywhere and a dropdown is open, close it.
      // Note: Buttons inside components use stopPropagation, so they won't trigger this.
      if (openDropdown) {
         setOpenDropdown(null);
      }
    };
    
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  // --- Synchronization Effects ---

  // 1. Sync with Active Theme (Tabs)
  useEffect(() => {
    const typeMap: Record<string, string> = {
      'wedding': 'Wedding',
      'corporate': 'Corporate',
      'social': 'Social'
    };
    const mappedType = typeMap[activeTheme];
    
    if (!searchCriteria && mappedType) {
      setSelectedTypes([mappedType]);
      setSelectedLocations([]);
      setSelectedCategories([]);
      setMinCapacity(0);
    }
  }, [activeTheme, searchCriteria]);

  // 2. Sync with AI Search Criteria
  useEffect(() => {
    if (searchCriteria) {
      setSelectedLocations([]);
      setSelectedTypes([]);
      setSelectedCategories([]);

      if (searchCriteria.location) {
        const searchLoc = searchCriteria.location.toLowerCase();
        const matchedLocs = locations.filter(l => l.toLowerCase().includes(searchLoc));
        if (matchedLocs.length > 0) setSelectedLocations(matchedLocs);
      }

      if (searchCriteria.eventType) {
        const searchEvent = searchCriteria.eventType.toLowerCase();
        if (searchEvent.includes('wedding') || searchEvent.includes('sangeet')) setSelectedTypes(['Wedding']);
        else if (searchEvent.includes('corporate') || searchEvent.includes('meeting')) setSelectedTypes(['Corporate']);
        else if (searchEvent.includes('party')) setSelectedTypes(['Social']);
      }

      if (searchCriteria.guestCount) {
        setMinCapacity(searchCriteria.guestCount);
      }
    }
  }, [searchCriteria]);


  // --- Handlers ---

  const toggleSelection = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedLocations([]);
    setSelectedTypes([]);
    setSelectedCategories([]);
    setMinCapacity(0);
    onClearCriteria(); 
  };

  const handleToggleDropdown = (id: string) => {
      setOpenDropdown(openDropdown === id ? null : id);
  };

  // --- Filtering Logic ---

  const filteredVenues = VENUES.filter(venue => {
    if (selectedLocations.length > 0 && !selectedLocations.includes(venue.location)) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(venue.type)) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(venue.category)) return false;
    if (minCapacity > 0 && venue.capacity < (minCapacity * 0.8)) return false;
    return true;
  });

  const hasActiveFilters = selectedLocations.length > 0 || selectedTypes.length > 0 || selectedCategories.length > 0 || minCapacity > 0;

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200 min-h-[600px]" id="collections">
      <div className="container mx-auto px-6">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8">
            <div className="animate-fade-in">
              <h2 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Curated Collections</h2>
              <h3 className="text-4xl font-royal font-bold text-gray-900 leading-tight">
                  Discover Venues
              </h3>
            </div>

            {/* Filter Toolbar */}
            <div className="flex flex-wrap gap-3 items-center w-full md:w-auto" ref={filterContainerRef}>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 flex items-center gap-1">
                   <Filter size={14} /> Filters:
                </span>
                
                <FilterDropdown 
                  label="Location"
                  options={locations}
                  selected={selectedLocations}
                  onToggle={(val) => toggleSelection(selectedLocations, setSelectedLocations, val)}
                  isOpen={openDropdown === 'location'}
                  onToggleOpen={() => handleToggleDropdown('location')}
                />

                <FilterDropdown 
                  label="Event Type"
                  options={types}
                  selected={selectedTypes}
                  onToggle={(val) => toggleSelection(selectedTypes, setSelectedTypes, val)}
                  isOpen={openDropdown === 'type'}
                  onToggleOpen={() => handleToggleDropdown('type')}
                />

                <FilterDropdown 
                  label="Category"
                  options={categories}
                  selected={selectedCategories}
                  onToggle={(val) => toggleSelection(selectedCategories, setSelectedCategories, val)}
                  isOpen={openDropdown === 'category'}
                  onToggleOpen={() => handleToggleDropdown('category')}
                />

                <CapacityFilter 
                   value={minCapacity}
                   onChange={setMinCapacity}
                   isOpen={openDropdown === 'capacity'}
                   onToggleOpen={() => handleToggleDropdown('capacity')}
                />
                
                {hasActiveFilters && (
                  <button 
                    onClick={clearAllFilters}
                    className="ml-2 text-xs font-bold text-red-500 hover:text-red-700 underline decoration-red-200"
                  >
                    Clear All
                  </button>
                )}
            </div>
        </div>

        {/* Active Filters Display (Chips) */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-in">
            {selectedLocations.map(loc => (
              <span key={loc} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 text-gray-800 shadow-sm">
                {loc} <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => toggleSelection(selectedLocations, setSelectedLocations, loc)} />
              </span>
            ))}
            {selectedTypes.map(type => (
               <span key={type} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 text-gray-800 shadow-sm">
               {type} <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => toggleSelection(selectedTypes, setSelectedTypes, type)} />
             </span>
            ))}
            {selectedCategories.map(cat => (
               <span key={cat} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 text-gray-800 shadow-sm">
               {cat} <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => toggleSelection(selectedCategories, setSelectedCategories, cat)} />
             </span>
            ))}
            {minCapacity > 0 && (
               <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 text-gray-800 shadow-sm">
               {minCapacity}+ Guests <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setMinCapacity(0)} />
             </span>
            )}
          </div>
        )}

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVenues.map((venue) => (
            <div 
              key={venue.id} 
              onClick={() => onVenueClick && onVenueClick(venue.id)}
              className="group bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 animate-slide-up flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={venue.imageUrl} 
                  alt={venue.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur px-3 py-1 flex items-center gap-1 text-xs font-bold text-gray-900 tracking-wide shadow-sm">
                  <Star size={12} className="fill-gold-500 text-gold-500" />
                  {venue.rating}
                </div>
                <div className={`absolute bottom-0 left-0 z-20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white ${
                    venue.type === 'Wedding' ? 'bg-maroon-700' : venue.type === 'Corporate' ? 'bg-royal-900' : 'bg-teal-900'
                }`}>
                  {venue.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-royal font-bold text-gray-900 group-hover:text-gold-600 transition-colors mb-2">{venue.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 font-light">
                  <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                  <span className="truncate">{venue.location}</span>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Range</span>
                        <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
                             <IndianRupee size={12}/> {venue.priceRange}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Capacity</span>
                        <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
                             <Users size={14} className="text-gray-400"/> {venue.capacity}
                        </span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVenues.length === 0 && (
            <div className="text-center py-24 bg-white border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-400 text-lg font-royal mb-2">No venues found matching your criteria.</p>
                <p className="text-sm text-gray-500 mb-6">Try removing some filters to see more results.</p>
                <button onClick={clearAllFilters} className="px-6 py-2 bg-gold-500 text-black font-bold uppercase text-xs tracking-widest hover:bg-gold-600 transition-colors">
                    Clear All Filters
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedVenues;
