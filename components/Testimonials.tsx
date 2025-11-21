import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeType } from '../App';

interface TestimonialData {
  quote: string;
  author: string;
  details: string;
}

const TESTIMONIALS: Record<ThemeType, TestimonialData[]> = {
  wedding: [
    {
      quote: "We wanted a destination wedding without the metro chaos. VenueMatch found us a lakeside palace in Udaipur that was 40% cheaper than Delhi venues.",
      author: "Anjali & Vikram Singh",
      details: "Wedding in Udaipur • Nov 2024"
    },
    {
      quote: "The heritage havelli in Jaisalmer was a dream come true. Every guest was mesmerized. The AI recommendations were spot on.",
      author: "Rohan & Meera",
      details: "Wedding in Jaisalmer • Jan 2025"
    },
    {
      quote: "Finding a venue for 1200 guests in Varanasi for the Pheras was stressful until we found this platform. Truly a blessing.",
      author: "The Gupta Family",
      details: "Wedding in Varanasi • Dec 2024"
    }
  ],
  corporate: [
    {
      quote: "Finding a venue for 500 employees in Indore seemed impossible until we used VenueMatch. The logistics support for our annual sales kickoff was flawless.",
      author: "Rahul Mehra, VP HR",
      details: "TechCorp Offsite • Jan 2025"
    },
    {
      quote: "Our leadership summit in Coorg was a massive success. The venue suggested was perfectly equipped for high-level strategy meetings.",
      author: "Sarah Jenkins",
      details: "Global MNC Retreat • Feb 2025"
    },
    {
      quote: "Excellent options for budget-friendly yet premium conference halls in Tier 2 cities. We saved 30% on our event budget.",
      author: "Amit Trivedi",
      details: "Regional Conference • Oct 2024"
    }
  ],
  social: [
    {
      quote: "The rooftop villa in Lucknow for my father's 60th birthday was a hidden gem. The view of the city was breathtaking and the booking process was so simple.",
      author: "Priya Sharma",
      details: "Birthday Celebration • Dec 2024"
    },
    {
      quote: "Hosted my bachelor party in a private farmhouse in Chandigarh. The venue privacy and amenities were exactly what we needed.",
      author: "Arjun K.",
      details: "Bachelor Party • Nov 2024"
    },
    {
      quote: "For our class reunion, we wanted something nostalgic yet comfortable. The heritage resort in Mysore was the perfect pick.",
      author: "Class of 2010",
      details: "Reunion • Jan 2025"
    }
  ]
};

interface TestimonialsProps {
  activeTheme: ThemeType;
}

const Testimonials: React.FC<TestimonialsProps> = ({ activeTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TESTIMONIALS[activeTheme];

  // Reset index when theme changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTheme]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Quote size={48} className="text-gold-500 mx-auto mb-8 opacity-50" />
        
        <div className="relative max-w-5xl mx-auto">
           {/* Slider Content */}
           <div className="min-h-[300px] flex flex-col justify-center items-center animate-fade-in transition-all duration-500" key={`${activeTheme}-${currentIndex}`}>
              <blockquote className="mb-12">
                <p className="text-2xl md:text-4xl font-royal font-medium text-white leading-relaxed mb-10 px-4 md:px-12">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer className="flex flex-col items-center">
                  <div className="w-16 h-1 bg-gold-500 mb-6"></div>
                  <cite className="not-italic text-gold-200 font-bold text-lg tracking-widest uppercase mb-1">
                    {testimonials[currentIndex].author}
                  </cite>
                  <span className="text-gray-500 text-sm tracking-wide">{testimonials[currentIndex].details}</span>
                </footer>
              </blockquote>
           </div>

           {/* Navigation Controls */}
           <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden md:block">
              <button onClick={prevSlide} className="p-2 rounded-full border border-gray-700 text-gray-500 hover:text-gold-500 hover:border-gold-500 transition-all">
                <ChevronLeft size={24} />
              </button>
           </div>
           <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:block">
              <button onClick={nextSlide} className="p-2 rounded-full border border-gray-700 text-gray-500 hover:text-gold-500 hover:border-gold-500 transition-all">
                <ChevronRight size={24} />
              </button>
           </div>

           {/* Mobile Indicators */}
           <div className="flex justify-center gap-2 mt-4">
             {testimonials.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setCurrentIndex(idx)}
                 className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-700'}`}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;