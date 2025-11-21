import React, { useState } from 'react';
import { X, Diamond, ArrowRight, Mail, Lock, User, Phone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView = 'signin' }) => {
  const [view, setView] = useState<'signin' | 'signup'>(initialView);
  const [userType, setUserType] = useState<'planner' | 'owner'>('planner');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl min-h-[600px] grid md:grid-cols-2 shadow-2xl animate-slide-up overflow-hidden">
        
        {/* Left Side - Visual */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
             <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury Hotel" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <Diamond className="text-gold-500" size={24} />
              <span className="font-royal font-bold text-xl tracking-widest">VenueMatch</span>
            </div>
            <h2 className="text-4xl font-royal font-bold mb-4 leading-tight">
              {view === 'signin' ? 'Welcome Back' : 'Join the Elite'}
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              {view === 'signin' 
                ? 'Access your saved collections, negotiate quotes, and manage your bookings in Tier 2 & Tier 3 India.' 
                : 'Connect with the finest venues in Bharat. Whether you are a planner or a property owner, your journey starts here.'}
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gold-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">India's Premier Venue Marketplace</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative bg-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {view === 'signin' ? 'Sign In' : 'Create Account'}
            </h3>
            <p className="text-sm text-gray-500">
              {view === 'signin' ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
                className="ml-2 text-gold-600 font-bold hover:underline"
              >
                {view === 'signin' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

          {/* User Type Toggle for Signup */}
          {view === 'signup' && (
            <div className="flex p-1 bg-gray-100 mb-6">
              <button 
                onClick={() => setUserType('planner')}
                className={`flex-1 py-2 text-sm font-medium transition-all ${userType === 'planner' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
              >
                Event Planner
              </button>
              <button 
                onClick={() => setUserType('owner')}
                className={`flex-1 py-2 text-sm font-medium transition-all ${userType === 'owner' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
              >
                Venue Owner
              </button>
            </div>
          )}

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {view === 'signup' && (
              <div className="relative group">
                <User className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-gold-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-gray-50 border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                />
              </div>
            )}
            
            <div className="relative group">
              <Mail className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-gold-500 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              />
            </div>

            {view === 'signup' && userType === 'owner' && (
               <div className="relative group">
               <Phone className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-gold-500 transition-colors" size={18} />
               <input 
                 type="tel" 
                 placeholder="Phone Number" 
                 className="w-full bg-gray-50 border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
               />
             </div>
            )}

            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-gold-500 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-gray-50 border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              />
            </div>

            {view === 'signin' && (
              <div className="flex justify-end">
                <button className="text-xs text-gray-500 hover:text-black">Forgot Password?</button>
              </div>
            )}

            <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mt-4">
              {view === 'signin' ? 'Access Account' : 'Get Started'}
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-8 text-center">
             <p className="text-xs text-gray-400">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
