import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioMasonry from './components/PortfolioMasonry';
import ServicesList from './components/ServicesList';
import AboutUs from './components/AboutUs';
import InvestmentMilestones from './components/InvestmentMilestones';
import TestimonialsList from './components/TestimonialsList';
import InquiryForm from './components/InquiryForm';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import InnerPageBanner from './components/InnerPageBanner';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ArrowLeft, Check, Calendar, Award, Sparkles, Clock, MapPin, X } from 'lucide-react';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [inquiryService, setInquiryService] = useState<string>('Wedding Films & Photography');
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);

  // Custom tab change wrapper to support seamless redirecting of sub-views to the unified Services module
  const handleSetTab = (tabId: string) => {
    if (tabId === 'wedding-photography' || tabId === 'pre-wedding-shoots' || tabId === 'heritage-portraits' || tabId === 'retail-editorial') {
      setTab('services');
      setSelectedServiceId(tabId);
    } else {
      setTab(tabId);
      if (tabId === 'services') {
        setSelectedServiceId(null);
      }
    }
  };

  // When a user selects "Get a Quote" from a pricing package or service
  const handleQuoteRequested = (serviceName: string) => {
    setInquiryService(serviceName);
    handleSetTab('contact');
    
    // Smooth scroll down to enquiry form
    setTimeout(() => {
      const element = document.getElementById('enquiry-lead-panel');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleOpenQuickBooking = () => {
    setIsQuickBookingOpen(true);
  };

  return (
    <div className="bg-luxury-charcoal text-white font-sans min-h-screen flex flex-col justify-between selection:bg-luxury-gold selection:text-luxury-black">
      
      {/* Premium Sticky Navigation Header */}
      <Header 
        currentTab={currentTab} 
        setTab={handleSetTab} 
        onOpenBooking={handleOpenQuickBooking} 
      />

      {/* Main Content Space with custom smooth animations */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cinematic Video Parallax Hero */}
              <Hero 
                onBookClick={handleOpenQuickBooking} 
                onExploreClick={() => {
                  handleSetTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />

              {/* Quick Segment Highlights Bento */}
              <section className="py-24 bg-luxury-black border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-luxury-charcoal/10 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  
                  {/* Title coordinates */}
                  <RevealOnScroll direction="up" distance={25} delay={0.05}>
                    <div className="text-center max-w-xl mx-auto mb-16">
                      <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-sans font-semibold">
                        STUDIO EXCELLENCE INDEX
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-serif text-white uppercase mt-2 tracking-wide font-bold">
                        Production Highlights
                      </h2>
                      <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4"></div>
                    </div>
                  </RevealOnScroll>

                  {/* 3x1 Premium grid index with micro color gradients */}
                  <RevealOnScroll stagger={true} direction="up" distance={30} className="grid grid-cols-1 md:grid-cols-3 gap-8" id="home-bento-grid">
                    
                    {/* Item 1 */}
                    <div className="p-8 h-full bg-luxury-black/40 border border-white/5 hover:border-luxury-gold/25 rounded-none transition group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-mono text-xs text-luxury-gold tracking-widest block mb-1">01 / DISCIPLINE</span>
                      <h3 className="text-lg font-serif text-white uppercase font-bold mb-3">Architectural Symmetry</h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Every frame is mapped mathematically. We align our lens paths with Ahmedabad's majestic historical symmetries to construct powerful, royal heirlooms.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="p-8 h-full bg-luxury-black/40 border border-white/5 hover:border-luxury-gold/25 rounded-none transition group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-mono text-xs text-luxury-gold tracking-widest block mb-1">02 / COLOR SUITE</span>
                      <h3 className="text-lg font-serif text-white uppercase font-bold mb-3">Midnight Gold Texture</h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Our unique color-spaces emphasize soft ambient candlelight, deep shadows, and pure warm metallic hues, guaranteeing stunning visual depth suited for elite screens.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="p-8 h-full bg-luxury-black/40 border border-white/5 hover:border-luxury-gold/25 rounded-none transition group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-mono text-xs text-luxury-gold tracking-widest block mb-1">03 / COURIER CODE</span>
                      <h3 className="text-lg font-serif text-white uppercase font-bold mb-3">Guaranteed Delivery</h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Backing our creative outputs with rigorous organization. Final processed files and leather-bound premium albums are delivered securely within exactly 4 to 5 weeks.
                      </p>
                    </div>

                  </RevealOnScroll>
                </div>
              </section>

              {/* Services Overview with Landing spec anchors */}
              <ServicesList onQuoteRequested={handleQuoteRequested} onSelectService={setSelectedServiceId} />

              {/* Gallery Masonry Display */}
              <PortfolioMasonry />

              {/* Testimonials and Live Instagram Reels showcase */}
              <TestimonialsList />
            </motion.div>
          )}

          {/* DEDICATED SEPARATE TAB/PAGE NAVIGATION VIEWS */}
          {currentTab === 'about' && (
            <motion.div
              key="about-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <AboutUs />
            </motion.div>
          )}

          {currentTab === 'services' && (
            <motion.div
              key="services-tab-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <InnerPageBanner 
                title={selectedServiceId === 'wedding-photography' ? "Wedding Photography" : selectedServiceId === 'pre-wedding-shoots' ? "Pre-Wedding & Films" : selectedServiceId === 'heritage-portraits' ? "Heritage Portraits" : selectedServiceId === 'retail-editorial' ? "High Fashion & Editorial" : "Services"}
                backgroundImage={
                  selectedServiceId === 'wedding-photography' 
                    ? "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
                    : selectedServiceId === 'pre-wedding-shoots'
                    ? "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                    : selectedServiceId === 'heritage-portraits'
                    ? "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000"
                    : selectedServiceId === 'retail-editorial'
                    ? "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2000"
                    : "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                }
              />
              <div className="py-12">
                <ServicesList 
                  onQuoteRequested={handleQuoteRequested} 
                  activeServiceId={selectedServiceId || undefined}
                  onSelectService={setSelectedServiceId}
                />
              </div>
            </motion.div>
          )}

          {/* LEGACY TAB FALLBACKS REDIRECTED SEAMLESSLY VIA STATE TO CORRESPONDING SERVICE DETAILS */}
          {currentTab === 'wedding-photography' && (
            <motion.div
              key="wedding-services-fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <InnerPageBanner 
                title="Wedding Photography"
                backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12">
                <ServicesList 
                  onQuoteRequested={handleQuoteRequested} 
                  activeServiceId="wedding-photography"
                  onSelectService={setSelectedServiceId}
                />
              </div>
            </motion.div>
          )}

          {currentTab === 'pre-wedding-shoots' && (
            <motion.div
              key="pre-wedding-services-fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <InnerPageBanner 
                title="Pre-Wedding & Films"
                backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12">
                <ServicesList 
                  onQuoteRequested={handleQuoteRequested} 
                  activeServiceId="pre-wedding-shoots"
                  onSelectService={setSelectedServiceId}
                />
              </div>
            </motion.div>
          )}

          {currentTab === 'portfolio' && (
            <motion.div
              key="portfolio-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <InnerPageBanner 
                title="Portfolio"
                backgroundImage="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12">
                <PortfolioMasonry />
              </div>
            </motion.div>
          )}

          {currentTab === 'investment' && (
            <motion.div
              key="investment-tab-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <InnerPageBanner 
                title="Investment"
                subtitle="PACKAGES & MILESTONES"
                backgroundImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="py-12">
                <InvestmentMilestones onPackageSelect={handleQuoteRequested} />
              </div>
            </motion.div>
          )}

          {currentTab === 'contact' && (
            <motion.div
              key="contact-tab-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <InnerPageBanner 
                title="Contact"
                subtitle="ESTABLISH CREATIVE DIALOGUE"
                backgroundImage="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="pt-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left" id="contact-split-layout">
                {/* Physical Location & Call Credentials Card with elegant spacings */}
                <div className="lg:col-span-5 space-y-8 bg-[#141414] border border-white/10 p-8 sm:p-10 rounded-[16px] shadow-2xl flex flex-col justify-between" id="contact-coordinates-card">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#aa8453] uppercase block mb-1">DIRECT AUDIO LINE</span>
                    <h3 className="text-xl font-serif text-white uppercase font-bold tracking-wide">Call Back Coordinator</h3>
                    <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">Talk with Yash Raj on slot availability matching your traditional event dates.</p>
                    
                    {/* Explicit Spaced Call CTA Button */}
                    <div className="mt-6">
                      <a 
                        href="tel:+919876543210" 
                        className="inline-flex items-center justify-center gap-3 w-full bg-gold-gradient text-luxury-black text-xs tracking-widest font-sans font-bold py-4 hover:scale-[1.01] transition-all duration-300 uppercase shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] rounded-full"
                        id="contact-page-call-btn"
                      >
                        <Phone className="w-4 h-4 fill-luxury-black" />
                        <span>Call +91 98765 43210</span>
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#aa8453] uppercase block mb-1">STUDIO LOCATION</span>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Ahmedabad HQ</h3>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 font-light mt-3 leading-relaxed">
                      <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span>Crescent Commercial Arts Hub,<br />Near Sindhu Bhavan Road, Bodakdev,<br />Ahmedabad, Gujarat 380054</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#aa8453] uppercase block mb-1">STUDIO COORDINATES</span>
                    <div className="flex items-center gap-2.5 text-xs text-gray-400 font-light mt-3">
                      <Mail className="w-4 h-4 text-luxury-gold" />
                      <span>yashrajfilms@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-400 font-light mt-2">
                      <Clock className="w-4 h-4 text-luxury-gold" />
                      <span>10:30 AM – 7:30 PM (IST)</span>
                    </div>
                  </div>
                </div>

                {/* Real Interactive Lead Form Column */}
                <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 sm:p-10 rounded-[16px] shadow-2xl flex flex-col justify-between" id="enquiry-lead-panel">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#aa8453] uppercase block mb-1">DIGITAL SUBMISSION</span>
                    <h3 className="text-xl font-serif text-white uppercase mb-6 tracking-wide">Enquire Selection</h3>
                    <InquiryForm initialService={inquiryService} isMinimal={true} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Floating WhatsApp widget */}
      <WhatsAppWidget />

      {/* Global Footer with business Schema injection */}
      <Footer currentTab={currentTab} setTab={handleSetTab} />

      {/* HIGH-END INTERACTIVE POPUP QUICK BOOKING DRAWER / MODAL */}
      <AnimatePresence>
        {isQuickBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/95 flex items-center justify-center p-4 backdrop-blur-lg"
            id="quick-booking-modal"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-2xl w-full bg-luxury-charcoal border border-luxury-gold/30 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl rounded-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsQuickBookingOpen(false)}
                className="absolute top-4 right-4 p-2 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm z-10"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6 border-b border-white/5 pb-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-luxury-gold uppercase block">FAST-TRACK RESERVATION</span>
                <h3 className="text-xl font-serif text-white uppercase mt-0.5">Secure Your Cinematic Session</h3>
                <p className="text-[11px] text-gray-400 font-light mt-1"> securing dates in Ahmedabad requires a 50% booking advance. Please fill details below to coordinate.</p>
              </div>

              {/* Reuse our high fidelity InquiryForm with active callbacks */}
              <InquiryForm 
                initialService={inquiryService} 
                isMinimal={true}
                onSubmitted={() => {
                  setTimeout(() => {
                    setIsQuickBookingOpen(false);
                  }, 2500);
                }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
