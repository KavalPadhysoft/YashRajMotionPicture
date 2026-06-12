import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavigationProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  setTab,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "investment", label: "Investment" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleTabChange = (tabId: string) => {
    setTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/80 backdrop-blur-[12px] border-b border-luxury-gold/25 shadow-2xl py-4"
          : "bg-[#0d0d0d]/75 backdrop-blur-[12px] border-b border-white/10 py-6"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer group hover:opacity-95 transition duration-300"
            onClick={() => handleTabChange("home")}
            id="brand-logo"
          >
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`relative text-[10px] tracking-[4px] font-sans font-light uppercase py-5 transition duration-300 cursor-pointer ${
                  currentTab === item.id
                    ? "text-luxury-gold font-medium"
                    : "text-gray-400 hover:text-[#f0ece4]"
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-2 left-0 right-0 h-[1.5px] bg-luxury-gold"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Book Session Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-transparent hover:bg-luxury-gold border border-luxury-gold text-luxury-gold hover:text-[#020202] font-sans text-[10px] tracking-[4px] font-medium px-6 py-2.5 transition-all duration-300 cursor-pointer uppercase rounded-none"
              id="header-cta-booking"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center lg:hidden gap-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 border border-white/10 bg-[#141414]/60 text-gray-300 hover:text-white rounded-full transition duration-300 backdrop-blur-md"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Pane */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 border-t border-luxury-gold/20 flex flex-col p-6 gap-5 shadow-2xl bg-[#020202]/95 backdrop-blur-[15px]"
            id="mobile-nav-pane"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`text-left text-xs tracking-[4px] font-sans font-light uppercase py-1.5 transition ${
                    currentTab === item.id
                      ? "text-luxury-gold border-l border-luxury-gold pl-3"
                      : "text-gray-400 hover:text-[#f0ece4]"
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
};
