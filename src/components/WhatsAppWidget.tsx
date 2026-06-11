import { useState, useEffect, FormEvent } from 'react';
import { MessageCircle, Send, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [msgInput, setMsgInput] = useState('');

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    
    // Construct WhatsApp API URL with prefilled text targeting Ahmedabad
    const baseText = `Hello Yash Raj Motion Picture! I am inquiring from the Ahmedabad Website: ${encodeURIComponent(msgInput)}`;
    const url = `https://wa.me/919876543210?text=${baseText}`;
    
    // Redirect
    window.open(url, '_blank', 'noreferrer,noopener');
    setMsgInput('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans" id="whatsapp-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute bottom-20 right-0 w-80 sm:w-85 rounded-lg border border-luxury-gold/20 bg-luxury-black/95 text-white shadow-2xl overflow-hidden z-50"
            id="whatsapp-chatbox"
          >
            {/* Header */}
            <div className="bg-gold-gradient p-4 text-luxury-black flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-luxury-black/30 overflow-hidden bg-luxury-charcoal flex items-center justify-center font-serif text-white text-sm font-bold">
                    YR
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-luxury-black"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-xs tracking-wider uppercase font-sans">Yash Raj</h4>
                  <p className="text-[10px] font-medium opacity-80 font-sans">Cinematographer • Active Now</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-black/10 rounded-full transition cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Space */}
            <div className="p-4 bg-luxury-charcoal/45 max-h-60 overflow-y-auto space-y-3.5 text-xs">
              <div className="bg-luxury-black/75 border border-luxury-gold/5 p-3 rounded-lg text-gray-300 max-w-[85%]">
                <p className="font-semibold text-[10px] text-luxury-gold tracking-wider uppercase mb-1">Yash Raj Studio</p>
                <p className="leading-relaxed">
                  Namaste & Welcome! Let's co-create your cinematic dream. 
                  <br /><br />
                  Whether it's a grand wedding at the Taj Skyline or a heritage session at Adalaj Stepwell, tell us your vision!
                </p>
                <span className="block mt-1.5 text-[9px] text-gray-500 text-right">Ahmedabad, Gujarat</span>
              </div>
              <div className="bg-luxury-black/75 border border-luxury-gold/5 p-3 rounded-lg text-gray-300 max-w-[85%]">
                <p className="leading-relaxed font-serif italic text-luxury-gold-light">
                  "We preserve heritage memories with rich, dramatic midnight imagery."
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="p-3 bg-luxury-black border-t border-luxury-gold/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your design inquiry..."
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                className="flex-1 text-xs bg-luxury-charcoal border border-luxury-gold/20 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none p-2.5 rounded-sm text-white"
              />
              <button
                type="submit"
                className="p-2.5 bg-luxury-gold text-luxury-black rounded-sm hover:bg-gold-gradient transition cursor-pointer"
                aria-label="Send direct WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <div className="relative flex items-center justify-end gap-3">
        <MagneticButton strength={18}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="w-14 h-14 bg-[#131313]/70 backdrop-blur-xl border border-white/10 hover:border-luxury-gold/40 text-white hover:text-luxury-gold hover:shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:scale-[1.05] transition-all duration-500 flex items-center justify-center rounded-full cursor-pointer shadow-2xl relative group pointer-events-auto"
            aria-label="Open WhatsApp Chat Widget"
            id="whatsapp-trigger-btn"
          >
            {/* Pulsing glow underlay */}
            <span className="absolute inset-0 rounded-full bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            
            <MessageCircle className="w-6 h-6 text-white group-hover:text-luxury-gold transition-colors duration-500" />
            
            {/* Soft pulsing halo */}
            <span className="absolute -inset-1 rounded-full border border-luxury-gold/20 animate-pulse opacity-60"></span>
            <span className="absolute inset-x-0 inset-y-0 rounded-full bg-luxury-gold/5 -z-10 animate-ping opacity-25"></span>
          </button>
        </MagneticButton>
      </div>
    </div>
  );
}
