import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Clock, ChevronDown, Sparkles, Send } from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  onSubmitted?: () => void;
  isMinimal?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = "Wedding Films & Photography",
  onSubmitted,
  isMinimal = false,
}) => {
  const [form, setForm] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "Ahmedabad",
    service: initialService,
    estimatedBudget: "₹35,000 - ₹50,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setForm((prev) => ({
        ...prev,
        service: initialService,
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (form.service.includes("Wedding")) {
      setForm((prev) => ({
        ...prev,
        estimatedBudget: "₹85,000 - ₹1,15,000 (Standard Heritage)",
      }));
    } else if (form.service.includes("Pre-Wedding")) {
      setForm((prev) => ({
        ...prev,
        estimatedBudget: "₹35,000 (Midnight Baseline)",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        estimatedBudget: "₹35,000 - ₹65,000 (Aesthetic Custom)",
      }));
    }
  }, [form.service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.fullName ||
      !form.phone ||
      !form.email ||
      !form.eventDate ||
      !form.message
    ) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSubmitted) {
        onSubmitted();
      }
    }, 1500);
  };

  return (
    <div
      className={
        isMinimal
          ? "w-full"
          : "w-full bg-[#020202] border border-[#5a5650]/20 p-6 sm:p-10 rounded-none shadow-none relative"
      }
      id={isMinimal ? "enquiry-lead-panel-minimal" : "enquiry-lead-panel"}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success-receipt"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="text-center py-8 flex flex-col items-center animate-fade-in text-left"
            id="enquiry-success-receipt"
          >
            <div className="w-16 h-16 rounded-none bg-[#d4af64]/10 border border-[#d4af64]/30 flex items-center justify-center text-[#d4af64] mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-[10px] tracking-[4px] text-[#d4af64] font-medium uppercase block">
              TRANSACTION SECURED
            </span>
            <h3 className="text-2xl font-serif text-[#f0ece4] uppercase mt-2 tracking-wider">
              Namaste, {form.fullName}
            </h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto mt-4 leading-relaxed font-light text-center">
              Your cinematic inquiry for{" "}
              <span className="text-[#d4af64] font-medium">{form.service}</span>{" "}
              on{" "}
              <span className="text-white font-mono font-medium">
                {form.eventDate}
              </span>{" "}
              in <span className="text-white font-medium">{form.location}</span>{" "}
              has been captured.
            </p>

            <div className="mt-8 p-6 bg-[#0a0a0a] border border-[#5a5650]/20 text-left max-w-md w-full text-xs space-y-3 rounded-none">
              <div className="flex items-center justify-between text-gray-400 border-b border-[#5a5650]/15 pb-2">
                <span>ESTIMATED PRICE RANGE</span>
                <span className="font-semibold text-[#d4af64] font-mono">
                  {form.estimatedBudget.split("(")[0]}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-400 border-b border-[#5a5650]/15 pb-2">
                <span>AVAILABILITY CHECK</span>
                <span className="text-[#d4af64] font-semibold uppercase font-sans tracking-wide">
                  Pending Verification
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#5a5650] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#d4af64]" />
                <span>
                  Lead Director Yash Raj will verify dates and reply within 6 hours.
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  fullName: "",
                  partnerName: "",
                  email: "",
                  phone: "",
                  eventDate: "",
                  location: "Ahmedabad",
                  service: initialService,
                  estimatedBudget: "₹35,000 - ₹50,000",
                  message: "",
                });
              }}
              className="mt-8 text-[10px] tracking-[4px] text-[#d4af64] border-b border-[#d4af64]/30 hover:text-white hover:border-white transition pb-1 font-medium uppercase cursor-pointer outline-none bg-transparent"
            >
              Submit another query
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="lead-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className={isMinimal ? "space-y-4" : "space-y-6"}
            id="enquiry-actual-form"
          >
            {!isMinimal && (
              <div className="text-left mb-8 pb-3 border-b border-[#5a5650]/20">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f0ece4] tracking-wider uppercase">
                  Ready to <i>Collaborate</i>?
                </h3>
                <p className="text-xs text-[#5a5650] mt-1.5 font-light">
                  Fill out the specifications below. Our studio coordinator will
                  verify schedule slot availability.
                </p>
              </div>
            )}

            <div
              className={
                isMinimal
                  ? "grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                  : "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left"
              }
              id="main-fields-grid"
            >
              {/* Full Name */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  id="fullName"
                  placeholder=" "
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, fullName: e.target.value }))
                  }
                  className="peer w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none transition-all placeholder-transparent"
                />
                <label
                  htmlFor="fullName"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-[#d4af64] select-none pointer-events-none"
                >
                  Your Full Name* (e.g., Rajveer Jadeja)
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="peer w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none transition-all placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-[#d4af64] select-none pointer-events-none"
                >
                  Your Email Address* (e.g., yourname@example.com)
                </label>
              </div>

              {/* Phone */}
              <div className="relative group">
                <input
                  type="tel"
                  required
                  id="phone"
                  placeholder=" "
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="peer w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none transition-all placeholder-transparent"
                />
                <label
                  htmlFor="phone"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-[#d4af64] select-none pointer-events-none"
                >
                  Your Phone No* (e.g., +91 98765 43210)
                </label>
              </div>

              {/* Service Select Overlay */}
              <div className="relative">
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, service: e.target.value }))
                  }
                  className="w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="Wedding Films & Photography">
                    Wedding Films & Stills Suite
                  </option>
                  <option value="The Cinematic Pre-Wedding">
                    Pre-Wedding (Cinematics Film)
                  </option>
                  <option value="Heritage Portrait Session">
                    Heritage Portrait Shoot
                  </option>
                  <option value="High Fashion Editorial">
                    High Fashion Editorial
                  </option>
                  <option value="Corporate Summit coverage">
                    Corporate Summit Shoot
                  </option>
                </select>
                <label
                  htmlFor="service"
                  className="absolute text-[8px] tracking-[3px] font-sans text-[#d4af64] top-2 left-5 select-none pointer-events-none uppercase"
                >
                  Selected Service*
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4af64] pointer-events-none">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Event Date */}
              <div className="relative">
                <input
                  type="date"
                  required
                  id="eventDate"
                  value={form.eventDate}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, eventDate: e.target.value }))
                  }
                  className="w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none transition-all [color-scheme:dark]"
                />
                <label
                  htmlFor="eventDate"
                  className="absolute text-[8px] tracking-[3px] font-sans text-[#d4af64] top-2 left-5 select-none pointer-events-none uppercase"
                >
                  Event Date*
                </label>
              </div>

              {/* Location Select */}
              <div className="relative">
                <select
                  id="location"
                  value={form.location}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, location: e.target.value }))
                  }
                  className="w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="Ahmedabad">Ahmedabad (Central)</option>
                  <option value="GIFT City">GIFT City (Gandhinagar)</option>
                  <option value="Adalaj Heritage">Adalaj Heritage Site</option>
                  <option value="Baroda / Surat">Baroda / Surat</option>
                  <option value="Other Gujarat">
                    Other (Gujarat/National)
                  </option>
                </select>
                <label
                  htmlFor="location"
                  className="absolute text-[8px] tracking-[3px] font-sans text-[#d4af64] top-2 left-5 select-none pointer-events-none uppercase"
                >
                  Desired Venue / City
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4af64] pointer-events-none">
                  <ChevronDown className="w-5 h-5 opacity-65" />
                </div>
              </div>

              {/* Partner Name */}
              <div className="relative group md:col-span-2">
                <input
                  type="text"
                  id="partnerName"
                  placeholder=" "
                  value={form.partnerName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, partnerName: e.target.value }))
                  }
                  className="peer w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-5 pt-7 pb-3 rounded-none focus:outline-none transition-all placeholder-transparent"
                />
                <label
                  htmlFor="partnerName"
                  className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-3.5 scale-75 top-5.5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-[#d4af64] select-none pointer-events-none"
                >
                  Partner's Name (Optional, e.g., Anjali Patel)
                </label>
              </div>
            </div>

            {/* Price range indicator card line */}
            <div
              className={
                isMinimal
                  ? "p-3 bg-[#0a0a0a] border border-[#d4af64]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 rounded-none"
                  : "p-4 bg-[#0a0a0a] border border-[#5a5650]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-none"
              }
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
                <span className="text-[10px] tracking-[3px] font-sans text-gray-400 uppercase">
                  Estimated Budget Benchmark
                </span>
              </div>
              <span className="text-xs font-semibold text-luxury-gold tracking-wider uppercase font-mono">
                {form.estimatedBudget}
              </span>
            </div>

            {/* Custom Description Textarea */}
            <div className="relative text-left mt-2">
              <textarea
                rows={isMinimal ? 2 : 4}
                required
                id="message"
                placeholder=" "
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="peer w-full text-xs sm:text-sm bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/40 focus:border-[#d4af64] focus:ring-0 text-[#f0ece4] px-5 py-6 pt-8 pb-4 rounded-none focus:outline-none transition-all placeholder-transparent"
              />
              <label
                htmlFor="message"
                className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-[15px] scale-75 top-6 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[15px] peer-focus:text-[#d4af64] select-none pointer-events-none"
              >
                Share details (e.g. venue coordinates, theme, or custom requests)*
              </label>
            </div>

            {/* Submission CTA bar */}
            <div className="flex justify-start pt-2">
              <button
                type="submit"
                disabled={loading}
                className={
                  isMinimal
                    ? "inline-flex items-center gap-2.5 bg-[#d4af64] hover:bg-[#b3914e] text-black font-semibold tracking-[4px] px-6 py-3.5 uppercase text-[10px] rounded-none transform transition-all duration-300 cursor-pointer disabled:opacity-75 outline-none"
                    : "inline-flex items-center gap-3 bg-[#d4af64] hover:bg-[#b3914e] text-black font-semibold tracking-[4px] px-8 py-4.5 uppercase text-[10px] sm:text-xs rounded-none transform transition-all duration-300 cursor-pointer disabled:opacity-75 outline-none"
                }
                id="submit-enquiry-btn"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-none border-2 border-black border-t-transparent animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
