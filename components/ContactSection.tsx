import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-royal font-bold text-white mb-8">Let's Plan Something <br/> Extraordinary</h3>
            <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed">
              Whether you're a venue owner looking to list your restaurant or a planner organizing a corporate retreat, our concierge team is here to assist.
            </p>
            
            <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded border border-gray-700 flex items-center justify-center text-gold-500">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Phone</h4>
                        <p className="text-gray-400 font-light">+91 98765 43210</p>
                        <p className="text-gray-500 text-xs mt-1">Mon-Sat, 9am - 7pm IST</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded border border-gray-700 flex items-center justify-center text-gold-500">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Email</h4>
                        <p className="text-gray-400 font-light">concierge@venuematch.in</p>
                        <p className="text-gray-500 text-xs mt-1">24/7 Support</p>
                    </div>
                </div>

                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded border border-gray-700 flex items-center justify-center text-gold-500">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Headquarters</h4>
                        <p className="text-gray-400 font-light">Velocity III, Vijay Nagar</p>
                        <p className="text-gray-400 font-light">Indore, Madhya Pradesh, 452010</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl">
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent" placeholder="Doe" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Interest</label>
                    <select className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent text-gray-700">
                        <option>Plan an Event</option>
                        <option>List a Hotel/Restaurant</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                    <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;