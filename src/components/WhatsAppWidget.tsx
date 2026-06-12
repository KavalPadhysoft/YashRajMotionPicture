import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Send } from "lucide-react";
import { MagneticWrapper } from "./MagneticWrapper";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;

    const baseUrL = `https://wa.me/919876543210?text=${encodeURIComponent(
      `Hello Yash Raj Motion Picture! I am inquiring from the Ahmedabad Website: ${msg}`
    )}`;
    window.open(baseUrL, "_blank", "noreferrer,noopener");
    setMsg("");
    setIsOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 font-sans"
      id="whatsapp-container"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 20 }}
            className="absolute bottom-20 right-0 w-80 sm:w-85 rounded-none border border-[#d4af64]/20 bg-[#0a0a0a] text-[#f0ece4] shadow-none overflow-hidden z-50 text-left"
            id="whatsapp-chatbox"
          >
            {/* Header */}
            <div className="bg-[#020202] border-b border-[#5a5650]/20 p-4 text-[#f0ece4] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-none border border-[#d4af64]/35 overflow-hidden bg-[#0a0a0a] flex items-center justify-center font-serif text-[#d4af64] text-xs font-bold font-serif">
                    YR
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-none bg-emerald-500 border border-black" />
                </div>
                <div>
                  <h4 className="font-medium text-xs tracking-[2px] uppercase font-sans">
                    Yash Raj
                  </h4>
                  <p className="text-[9px] text-[#5a5650] font-sans">
                    Cinematographer • Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-none transition cursor-pointer text-[#5a5650] hover:text-[#f0ece4] outline-none border-none bg-transparent"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 bg-[#0a0a0a] max-h-60 overflow-y-auto space-y-3.5 text-xs">
              <div className="bg-[#020202] border border-[#5a5650]/15 p-3 rounded-none text-gray-400 max-w-[90%]">
                <p className="font-medium text-[9px] text-[#d4af64] tracking-[2px] uppercase mb-1">
                  Yash Raj Studio
                </p>
                <p className="leading-relaxed text-xs">
                  Namaste & Welcome! Let's co-create your cinematic dream.
                  <br />
                  <br />
                  Whether it's a grand wedding at the Taj Skyline or a heritage
                  session at Adalaj Stepwell, tell us your vision!
                </p>
                <span className="block mt-2 text-[8px] text-[#5a5650] text-right uppercase tracking-wider">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <div className="bg-[#020202] border border-[#5a5650]/15 p-3 rounded-none text-gray-400 max-w-[90%]">
                <p className="leading-relaxed font-serif italic text-gray-300">
                  "We preserve heritage memories with rich, dramatic midnight imagery."
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-[#020202] border-t border-[#5a5650]/20 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Type your design inquiry..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="flex-1 text-xs bg-[#0a0a0a] border border-[#5a5650]/25 hover:border-[#d4af64]/30 focus:border-[#d4af64] focus:outline-none p-2.5 rounded-none text-[#f0ece4]"
              />
              <button
                type="submit"
                className="p-2.5 bg-[#d4af64] hover:bg-[#b3914e] text-black rounded-none transition cursor-pointer outline-none"
                aria-label="Send direct WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-end gap-3">
        <MagneticWrapper strength={18}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-[#0a0a0a] border border-[#5a5650]/20 hover:border-[#d4af64]/40 text-white hover:text-[#d4af64] transition-all duration-300 flex items-center justify-center rounded-none cursor-pointer shadow-none relative group pointer-events-auto outline-none"
            aria-label="Open WhatsApp Chat Widget"
            id="whatsapp-trigger-btn"
          >
            <span className="absolute inset-0 rounded-none bg-[#d4af64]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <MessageCircle className="w-5 h-5 text-white group-hover:text-[#d4af64] transition-colors duration-300" />
            <span className="absolute -inset-1 rounded-none border border-[#d4af64]/10 animate-pulse opacity-40" />
          </button>
        </MagneticWrapper>
      </div>
    </div>
  );
};
