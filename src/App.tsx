import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ServiceDetails } from "./components/ServiceDetails";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Investment } from "./components/Investment";
import { PageBanner } from "./components/PageBanner";
import { EnquiryForm } from "./components/EnquiryForm";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { Footer } from "./components/Footer";
import { MotionWrapper } from "./components/MotionWrapper";
import { Mail, Phone, MapPin, Clock, X } from "lucide-react";

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>(
    "Wedding Films & Photography"
  );
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handleTabChange = (tabId: string) => {
    if (
      tabId === "wedding-photography" ||
      tabId === "pre-wedding-shoots" ||
      tabId === "heritage-portraits" ||
      tabId === "retail-editorial"
    ) {
      setCurrentTab("services");
      setActiveServiceId(tabId);
    } else {
      setCurrentTab(tabId);
      if (tabId === "services") {
        setActiveServiceId(null);
      }
    }
  };

  const handleQuoteRequest = (serviceName: string) => {
    setSelectedQuoteService(serviceName);
    handleTabChange("contact");
    setTimeout(() => {
      const panel = document.getElementById("enquiry-lead-panel");
      if (panel) {
        panel.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 150);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f0ece4] font-sans min-h-screen flex flex-col justify-between selection:bg-[#d4af64] selection:text-black">
      {/* Navigation */}
      <Navigation
        currentTab={currentTab}
        setTab={handleTabChange}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Core Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {/* Home Tab */}
          {currentTab === "home" && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero
                onBookClick={handleOpenBooking}
                onExploreClick={() => {
                  handleTabChange("portfolio");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />

              {/* bento grid highlights section */}
              <section className="py-24 bg-[#0a0a0a] border-y border-[#5a5650]/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <MotionWrapper direction="up" distance={25} delay={0.05}>
                    <div className="text-center max-w-xl mx-auto mb-16">
                      <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-medium block">
                        STUDIO EXCELLENCE INDEX
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif text-[#f0ece4] uppercase mt-2 tracking-wider">
                        Production <i>Highlights</i>
                      </h2>
                      <div className="w-12 h-[1px] bg-[#d4af64] mx-auto mt-4" />
                    </div>
                  </MotionWrapper>

                  <MotionWrapper
                    stagger={true}
                    direction="up"
                    distance={30}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    id="home-bento-grid"
                  >
                    <div className="p-8 h-full bg-[#020202] border border-[#5a5650]/15 hover:border-[#d4af64]/30 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-sans text-[10px] tracking-[3px] text-luxury-gold block mb-1">
                        01 / DISCIPLINE
                      </span>
                      <h3 className="text-lg font-serif text-[#f0ece4] uppercase mb-3">
                        Architectural Symmetry
                      </h3>
                      <p className="text-xs text-[#5a5650] group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                        Every frame is mapped mathematically. We align our lens paths with Ahmedabad's majestic historical symmetries to construct powerful, royal heirlooms.
                      </p>
                    </div>

                    <div className="p-8 h-full bg-[#020202] border border-[#5a5650]/15 hover:border-[#d4af64]/30 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-sans text-[10px] tracking-[3px] text-luxury-gold block mb-1">
                        02 / COLOR SUITE
                      </span>
                      <h3 className="text-lg font-serif text-[#f0ece4] uppercase mb-3">
                        Midnight Gold Texture
                      </h3>
                      <p className="text-xs text-[#5a5650] group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                        Our unique color-spaces emphasize soft ambient candlelight, deep shadows, and pure warm metallic hues, guaranteeing stunning visual depth suited for elite screens.
                      </p>
                    </div>

                    <div className="p-8 h-full bg-[#020202] border border-[#5a5650]/15 hover:border-[#d4af64]/30 rounded-none transition group relative overflow-hidden text-left">
                      <span className="font-sans text-[10px] tracking-[3px] text-luxury-gold block mb-1">
                        03 / COURIER CODE
                      </span>
                      <h3 className="text-lg font-serif text-[#f0ece4] uppercase mb-3">
                        Guaranteed Delivery
                      </h3>
                      <p className="text-xs text-[#5a5650] group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                        Backing our creative outputs with rigorous organization. Final processed files and leather-bound premium albums are delivered securely within exactly 4 to 5 weeks.
                      </p>
                    </div>
                  </MotionWrapper>
                </div>
              </section>

              {/* Service catalog row */}
              <ServiceDetails
                onQuoteRequested={handleQuoteRequest}
                activeServiceId={null}
                onSelectService={setActiveServiceId}
              />

              {/* Gallery elements */}
              <Gallery />

              {/* Social layout & comments feed */}
              <Testimonials />
            </motion.div>
          )}

          {/* About Us Tab */}
          {currentTab === "about" && (
            <motion.div
              key="about-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}

          {/* Services Tab */}
          {currentTab === "services" && (
            <motion.div
              key="services-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title={
                  activeServiceId === "wedding-photography"
                    ? "Wedding Photography"
                    : activeServiceId === "pre-wedding-shoots"
                    ? "Pre-Wedding & Films"
                    : activeServiceId === "heritage-portraits"
                    ? "Heritage Portraits"
                    : activeServiceId === "retail-editorial"
                    ? "High Fashion & Editorial"
                    : "Services"
                }
                backgroundImage={
                  activeServiceId === "wedding-photography"
                    ? "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
                    : activeServiceId === "pre-wedding-shoots"
                    ? "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                    : activeServiceId === "heritage-portraits"
                    ? "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000"
                    : activeServiceId === "retail-editorial"
                    ? "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2000"
                    : "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                }
              />
              <div className="py-12 bg-[#0a0a0a]">
                <ServiceDetails
                  onQuoteRequested={handleQuoteRequest}
                  activeServiceId={activeServiceId}
                  onSelectService={setActiveServiceId}
                />
              </div>
            </motion.div>
          )}

          {/* Portfolio Tab */}
          {currentTab === "portfolio" && (
            <motion.div
              key="portfolio-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="Portfolio"
                backgroundImage="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12 bg-[#0a0a0a]">
                <Gallery />
              </div>
            </motion.div>
          )}

          {/* Investment Tab */}
          {currentTab === "investment" && (
            <motion.div
              key="investment-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="Investment"
                subtitle="PACKAGES & MILESTONES"
                backgroundImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12 bg-[#0a0a0a]">
                <Investment onPackageSelect={handleQuoteRequest} />
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {currentTab === "contact" && (
            <motion.div
              key="contact-tab-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <PageBanner
                title="Contact"
                subtitle="ESTABLISH CREATIVE DIALOGUE"
                backgroundImage="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000"
              />

              <div className="pt-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left"
                  id="contact-split-layout"
                >
                  <div
                    className="lg:col-span-5 space-y-8 bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-10 rounded-none shadow-none flex flex-col justify-between"
                    id="contact-coordinates-card"
                  >
                    <div>
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        DIRECT AUDIO LINE
                      </span>
                      <h3 className="text-xl font-serif text-[#f0ece4] uppercase tracking-wide">
                        Call Back Coordinator
                      </h3>
                      <p className="text-xs text-[#5a5650] font-light mt-2 leading-relaxed">
                        Talk with Yash Raj on slot availability matching your traditional event dates.
                      </p>
                      <div className="mt-6">
                        <a
                          href="tel:+919876543210"
                          className="inline-flex items-center justify-center gap-3 w-full bg-[#d4af64] hover:bg-[#b3914e] text-black text-[10px] tracking-[3px] font-sans font-medium py-4 uppercase rounded-none transition duration-300"
                        >
                          <Phone className="w-4 h-4 fill-black text-black shrink-0" />
                          <span>Call +91 98765 43210</span>
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-[#5a5650]/20 pt-6">
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        STUDIO LOCATION
                      </span>
                      <h3 className="text-sm font-sans font-medium text-white uppercase tracking-[2px]">
                        Ahmedabad HQ
                      </h3>
                      <div className="flex items-start gap-2.5 text-xs text-gray-400 font-light mt-3 leading-relaxed">
                        <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                        <span>
                          Crescent Commercial Arts Hub,
                          <br />
                          Near Sindhu Bhavan Road, Bodakdev,
                          <br />
                          Ahmedabad, Gujarat 380054
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-[#5a5650]/20 pt-6">
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        STUDIO COORDINATES
                      </span>
                      <div className="flex items-center gap-2.5 text-xs text-gray-400 font-light mt-3">
                        <Mail className="w-4 h-4 text-luxury-gold" />
                        <span>contact@yashrajmotionpictures.com</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-gray-400 font-light mt-2">
                        <Clock className="w-4 h-4 text-luxury-gold" />
                        <span>10:30 AM – 7:30 PM (IST)</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="lg:col-span-7 bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-10 rounded-none shadow-none flex flex-col justify-between"
                    id="enquiry-lead-panel"
                  >
                    <div>
                      <span className="text-[9px] tracking-[3px] font-sans text-luxury-gold uppercase block mb-1">
                        DIGITAL SUBMISSION
                      </span>
                      <h3 className="text-xl font-serif text-[#f0ece4] uppercase mb-6 tracking-wide">
                        Enquire Selection
                      </h3>
                      <EnquiryForm
                        initialService={selectedQuoteService}
                        isMinimal={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer currentTab={currentTab} setTab={handleTabChange} />

      {/* Quick Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202]/95 flex items-center justify-center p-4 backdrop-blur-md"
            id="quick-booking-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-2xl w-full bg-[#0a0a0a] border border-[#d4af64]/35 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-none text-left shadow-none animate-fadeIn"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 p-2 cursor-pointer bg-white/5 hover:bg-white/10 border border-[#5a5650]/20 text-white rounded-none z-10 outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mb-6 border-b border-[#5a5650]/15 pb-4 text-left">
                <span className="text-[9px] font-sans tracking-[3px] text-luxury-gold uppercase block">
                  FAST-TRACK RESERVATION
                </span>
                <h3 className="text-xl font-serif text-[#f0ece4] uppercase mt-0.5">
                  Secure Your Cinematic Session
                </h3>
                <p className="text-[11px] text-gray-400 font-light mt-1">
                  Securing dates in Ahmedabad requires a 50% booking advance. Please fill details below to coordinate.
                </p>
              </div>
              <EnquiryForm
                initialService={selectedQuoteService}
                isMinimal={true}
                onSubmitted={() => {
                  setTimeout(() => {
                    setIsBookingModalOpen(false);
                  }, 2500);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default App;
