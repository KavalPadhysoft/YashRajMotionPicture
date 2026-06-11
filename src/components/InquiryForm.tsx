import { useState, useEffect, FormEvent } from 'react';
import { Clock, Sparkles, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryFormProps {
  initialService?: string;
  onSubmitted?: () => void;
  isMinimal?: boolean;
}

export default function InquiryForm({ initialService = 'Wedding Films', onSubmitted, isMinimal = false }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    partnerName: '',
    email: '',
    phone: '',
    eventDate: '',
    location: 'Ahmedabad',
    service: initialService,
    estimatedBudget: '₹35,000 - ₹50,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial service selection from external anchors
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Handle dynamic budget projection recommendations
  useEffect(() => {
    if (formData.service.includes('Wedding')) {
      setFormData(prev => ({ ...prev, estimatedBudget: '₹85,000 - ₹1,15,000 (Standard Heritage)' }));
    } else if (formData.service.includes('Pre-Wedding')) {
      setFormData(prev => ({ ...prev, estimatedBudget: '₹35,000 (Midnight Baseline)' }));
    } else {
      setFormData(prev => ({ ...prev, estimatedBudget: '₹35,000 - ₹65,000 (Aesthetic Custom)' }));
    }
  }, [formData.service]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.eventDate || !formData.message) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitted) onSubmitted();
    }, 1500);
  };

  const inputClass = isMinimal
    ? "w-full text-xs bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 text-white px-4 py-2.5 rounded-lg focus:outline-none transition-all placeholder:text-gray-600"
    : "w-full text-xs sm:text-sm bg-[#161616]/90 border border-white/15 hover:border-white/25 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 text-white px-5 py-4 rounded-xl focus:outline-none transition-all placeholder:text-gray-600";

  const selectClass = isMinimal
    ? "w-full text-xs bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 text-white px-4 py-2.5 pr-10 rounded-lg focus:outline-none appearance-none transition-all cursor-pointer"
    : "w-full text-xs sm:text-sm bg-[#161616]/90 border border-white/15 hover:border-white/25 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 text-white px-5 py-4 pr-12 rounded-xl focus:outline-none appearance-none transition-all cursor-pointer";

  const dateClass = isMinimal
    ? "w-full text-xs bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 text-white p-2.5 rounded-lg focus:outline-none transition-all [color-scheme:dark]"
    : "w-full text-xs sm:text-sm bg-[#161616]/90 border border-white/15 hover:border-white/25 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 text-white p-4 rounded-xl focus:outline-none transition-all [color-scheme:dark]";

  const textareaClass = isMinimal
    ? "w-full text-xs bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 text-white p-4 rounded-lg focus:outline-none transition-all placeholder:text-gray-600"
    : "w-full text-xs bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 text-white p-4 rounded-lg focus:outline-none transition-all placeholder:text-gray-600";

  return (
    <div className={isMinimal ? "w-full" : "w-full bg-[#0d0d0d] border border-white/10 p-6 sm:p-10 rounded-[16px] shadow-2xl relative"} id={isMinimal ? "enquiry-lead-panel-minimal" : "enquiry-lead-panel"}>
      
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form 
            key="lead-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className={isMinimal ? "space-y-4" : "space-y-6"}
            id="enquiry-actual-form"
          >
            {/* Title inspired by the image ("Ready to Get Started?") */}
            {!isMinimal && (
              <div className="text-left mb-8 pb-3 border-b border-white/10">
                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide font-semibold">
                  Ready to Get Started?
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 font-light">
                  Fill out the specifications below. Our studio coordinator will check slot availability.
                </p>
              </div>
            )}
              
            {/* Form Fields in dynamic mock columns */}
            <div className={isMinimal ? "grid grid-cols-1 md:grid-cols-2 gap-4 text-left" : "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left"} id="main-fields-grid">
               
              {/* Your Name* */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  id="fullName"
                  placeholder=" "
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="peer w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="fullName"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-luxury-gold select-none pointer-events-none"
                >
                  Your Full Name* (e.g., Rajveer Jadeja)
                </label>
              </div>

              {/* Your Email* */}
              <div className="relative group">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="peer w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="email"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-luxury-gold select-none pointer-events-none"
                >
                  Your Email Address* (e.g., yourname@example.com)
                </label>
              </div>

              {/* Your Phone No* */}
              <div className="relative group">
                <input
                  type="tel"
                  required
                  id="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="peer w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="phone"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-luxury-gold select-none pointer-events-none"
                >
                  Your Phone No* (e.g., +91 98765 43210)
                </label>
              </div>

              {/* Your Service* */}
              <div className="relative">
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="Wedding Films & Photography">Wedding Films & Stills Suite</option>
                  <option value="The Cinematic Pre-Wedding">Pre-Wedding (Cinematics Film)</option>
                  <option value="Heritage Portrait Session">Heritage Portrait Shoot</option>
                  <option value="High Fashion Editorial">High Fashion Editorial</option>
                  <option value="Corporate Summit coverage">Corporate Summit Shoot</option>
                </select>
                <label htmlFor="service" className="absolute text-[10px] tracking-wider font-mono text-[#aa8453] top-2 left-5 select-none pointer-events-none uppercase">
                  Selected Service*
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-gold pointer-events-none">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Event Date* */}
              <div className="relative">
                <input
                  type="date"
                  required
                  id="eventDate"
                  value={formData.eventDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  className="w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none transition-all [color-scheme:dark]"
                />
                <label htmlFor="eventDate" className="absolute text-[10px] tracking-wider font-mono text-[#aa8453] top-2 left-5 select-none pointer-events-none uppercase">
                  Event Date*
                </label>
              </div>

              {/* Desired Venue/City */}
              <div className="relative">
                <select
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="Ahmedabad">Ahmedabad (Central)</option>
                  <option value="GIFT City">GIFT City (Gandhinagar)</option>
                  <option value="Adalaj Heritage">Adalaj Heritage Site</option>
                  <option value="Baroda / Surat">Baroda / Surat</option>
                  <option value="Other Gujarat">Other (Gujarat/National)</option>
                </select>
                <label htmlFor="location" className="absolute text-[10px] tracking-wider font-mono text-[#aa8453] top-2 left-5 select-none pointer-events-none uppercase">
                  Desired Venue / City
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-gold pointer-events-none">
                  <ChevronDown className="w-5 h-5 opacity-65" />
                </div>
              </div>

              {/* Partner Name (Optional) */}
              <div className="relative group md:col-span-2">
                <input
                  type="text"
                  id="partnerName"
                  placeholder=" "
                  value={formData.partnerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, partnerName: e.target.value }))}
                  className="peer w-full text-xs sm:text-sm bg-neutral-900 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-5 pt-7 pb-3 rounded-xl focus:outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="partnerName"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-luxury-gold select-none pointer-events-none"
                >
                  Partner's Name (Optional, e.g., Anjali Patel)
                </label>
              </div>

            </div>

            {/* Embedded Budget Metric Indicator */}
            <div className={isMinimal ? "p-3 bg-[#141414] border border-luxury-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 rounded-lg" : "p-4 bg-[#141414] border border-luxury-gold/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-xl"}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Estimated Budget Benchmark</span>
              </div>
              <span className="text-xs font-semibold text-luxury-gold tracking-wider uppercase font-mono">{formData.estimatedBudget}</span>
            </div>

            {/* Write Message* */}
            <div className="relative text-left mt-2">
              <textarea
                rows={isMinimal ? 2 : 4}
                required
                id="message"
                placeholder=" "
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="peer w-full text-xs sm:text-sm bg-[#161616]/90 border border-white/10 hover:border-white/20 focus:border-luxury-gold focus:ring-0 text-white px-5 py-6 pt-8 pb-4 rounded-xl focus:outline-none transition-all placeholder-transparent"
              />
              <label 
                htmlFor="message"
                className="absolute text-xs sm:text-sm text-gray-400/80 duration-300 transform -translate-y-[15px] scale-75 top-6 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[15px] peer-focus:text-luxury-gold select-none pointer-events-none"
              >
                Share details (e.g. venue coordinates, theme, or custom requests)*
              </label>
            </div>

            {/* Pill Submit Button exactly matching the upload reference */}
            <div className="flex justify-start pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={isMinimal 
                  ? "inline-flex items-center gap-2.5 bg-gold-gradient text-luxury-black font-semibold tracking-wider px-6 py-3 uppercase text-xs rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.02] transform transition-all duration-300 cursor-pointer disabled:opacity-75"
                  : "inline-flex items-center gap-3 bg-gold-gradient text-luxury-black font-semibold tracking-wider px-8 py-4 uppercase text-xs sm:text-sm rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.02] transform transition-all duration-300 cursor-pointer disabled:opacity-75"
                }
                id="submit-enquiry-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-luxury-black border-t-transparent animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-receipt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 flex flex-col items-center animate-fade-in"
            id="enquiry-success-receipt"
          >
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/50 flex items-center justify-center text-luxury-gold mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-[10px] tracking-[0.3em] font-mono text-luxury-gold font-bold uppercase">
              TRANSACTION SECURED
            </span>
            <h3 className="text-2xl font-serif text-white uppercase mt-2 tracking-wide">
              Namaste, {formData.fullName}
            </h3>
            
            <p className="text-xs text-gray-400 max-w-md mx-auto mt-4 leading-relaxed font-light">
              Your cinematic inquiry for <span className="text-luxury-gold font-medium">{formData.service}</span> on <span className="text-white font-mono font-medium">{formData.eventDate}</span> in <span className="text-white font-medium">{formData.location}</span> has been captured.
            </p>

            <div className="mt-8 p-6 bg-luxury-black/60 border border-white/5 text-left max-w-md w-full text-xs space-y-3 rounded-xl">
              <div className="flex items-center justify-between text-gray-400 border-b border-white/5 pb-2">
                <span>ESTIMATED PRICE RANGE</span>
                <span className="font-semibold text-luxury-gold font-mono">{formData.estimatedBudget.split('(')[0]}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400 border-b border-white/5 pb-2">
                <span>AVAILABILITY CHECK</span>
                <span className="text-emerald-500 font-semibold uppercase">Pending Verification</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Lead Director Yash Raj will verify dates and reply within 6 hours.</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: '',
                  partnerName: '',
                  email: '',
                  phone: '',
                  eventDate: '',
                  location: 'Ahmedabad',
                  service: initialService,
                  estimatedBudget: '₹35,000 - ₹50,000',
                  message: ''
                });
              }}
              className="mt-8 text-xs text-luxury-gold border-b border-luxury-gold hover:text-white hover:border-white transition pb-1 font-semibold uppercase tracking-widest cursor-pointer"
            >
              Submit another query
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
