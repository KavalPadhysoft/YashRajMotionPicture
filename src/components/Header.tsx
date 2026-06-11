import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentTab, setTab, onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'investment', label: 'Investment' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setTab(id);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to top for active tab transitions
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0d0d0d]/80 backdrop-blur-[12px] border-b border-luxury-gold/25 shadow-2xl/40 py-4.5 sm:py-5' 
        : 'bg-[#0d0d0d]/75 backdrop-blur-[12px] border-b border-white/10 py-6 sm:py-7'
    }`} id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand/Logo */}
          <div 
            className="cursor-pointer group hover:opacity-95 transition duration-300"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            <Logo variant="header" />
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs tracking-widest font-sans font-medium uppercase pb-5 pt-5 transition duration-300 cursor-pointer ${
                  currentTab === item.id 
                    ? 'text-luxury-gold font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-2 left-0 right-0 h-[2px] bg-luxury-gold shadow-[0_0_10px_rgba(197,168,128,0.6)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Direct CTA (Book a Session only) - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-gold-gradient hover:opacity-95 text-luxury-black font-sans text-xs tracking-widest font-semibold px-6 py-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer uppercase shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] rounded-full"
              id="header-cta-booking"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2.5">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 border border-white/10 bg-[#141414]/60 text-gray-300 hover:text-white rounded-full transition duration-300 backdrop-blur-md"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Modal Overlay with frame animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-luxury-gold/20 flex flex-col p-6 gap-5 shadow-2xl bg-luxury-black/95"
            id="mobile-nav-pane"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm tracking-[0.2em] font-sans font-medium uppercase py-1.5 transition ${
                    currentTab === item.id 
                      ? 'text-luxury-gold border-l-2 border-luxury-gold pl-3' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="text-center text-[10px] text-gray-500 tracking-wider">
              Ahmedabad & Gujarat Premier Cinema Studio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
