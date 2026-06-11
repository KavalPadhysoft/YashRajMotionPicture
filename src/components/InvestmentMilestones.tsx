import { BookingPackage } from '../types';
import { PACKAGES } from '../data';
import { CalendarRange, Sparkles, Receipt, CheckCircle, Flame, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface InvestmentMilestonesProps {
  onPackageSelect: (pkgTitle: string) => void;
}

export default function InvestmentMilestones({ onPackageSelect }: InvestmentMilestonesProps) {
  const paymentTimeline = [
    {
      step: '01',
      percentage: '50% Booking Advance',
      title: 'Conceptualization & Secure Dates',
      description: 'A formal agreement secures your preferred shooting dates in Ahmedabad or across Gujarat. We set off color moodboards, location scouts, and outfit recommendations.',
      timing: 'Week 1'
    },
    {
      step: '02',
      percentage: '30% Mid-Approval',
      title: 'Shoots & Draft Reels Review',
      description: 'Once capturing is concluded, we compile raw footage edits and select key frames. The client approves cinematic soundtrack selections and first drafts of wedding films.',
      timing: 'Week 3'
    },
    {
      step: '03',
      percentage: '20% On Final Delivery',
      title: 'Color Grading & Heirloom Prints',
      description: 'Final delivery of ultra-HD 4K cinematic films, synced audio reels, digital cloud lockers, and bespoke custom leather bound embossed print albums.',
      timing: 'Week 4–5'
    }
  ];

  return (
    <section className="py-24 bg-luxury-black relative" id="pricing-milestones">
      
      {/* Decorative vertical separator */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-luxury-gold/15 to-transparent pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-sans font-semibold">
            INVESTMENT TIERS & WORKFLOW
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-3 tracking-wider">
            Pricing & Payment Milestones
          </h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto mt-5"></div>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-4 font-light">
            We operate with absolute transparency. Our structured timeline ensures dedicated effort and premium post-production grading for your films.
          </p>
        </div>

        {/* 1. THREE COLUMN PRICING TIER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24" id="pricing-tiers-grid">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-8 bg-luxury-charcoal/40 border transition-all duration-300 ${
                pkg.popular
                  ? 'border-luxury-gold shadow-[0_4px_30px_rgba(197,168,128,0.15)] bg-luxury-charcoal/60'
                  : 'border-white/5 hover:border-luxury-gold/30'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-luxury-black font-semibold text-[10px] tracking-widest uppercase px-4 py-1.5 flex items-center gap-1.5 rounded-none shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-luxury-black" />
                  <span> Ahmedabad Best Pick </span>
                </div>
              )}

              {/* Package Header */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase block mb-1 font-bold">
                  {pkg.subtitle}
                </span>
                <h3 className="text-xl font-serif text-white uppercase tracking-wide mb-3">
                  {pkg.title}
                </h3>
                
                <div className="flex items-baseline gap-1 my-5">
                  <span className="text-2xl sm:text-3.5xl font-serif font-bold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-xs tracking-wider">/ Excl. GST</span>
                </div>

                <div className="h-[1px] bg-white/10 my-4" />

                {/* Features points */}
                <ul className="space-y-3.5 text-xs text-gray-300 mt-6 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package CTA */}
              <button
                onClick={() => onPackageSelect(pkg.title)}
                className={`w-full py-3 text-xs tracking-[0.15em] font-semibold uppercase text-center transition cursor-pointer ${
                  pkg.popular
                    ? 'bg-gold-gradient text-luxury-black shadow-lg hover:brightness-105'
                    : 'bg-transparent border border-white/20 hover:border-luxury-gold text-white hover:bg-white/5'
                }`}
                id={`pkg-select-${pkg.id}`}
              >
                Inquire For This Package
              </button>
            </div>
          ))}
        </div>

        {/* 2. THREE PROGRESSIVE MILESTONES (THE PAYMENT SCHEDULE) */}
        <div className="glass-card p-8 sm:p-12 border border-luxury-gold/15" id="budget-milestones-card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-luxury-gold uppercase">
                THE PRE-PRODUCTION DISCIPLINE
              </span>
              <h3 className="text-2xl sm:text-3.5xl font-serif text-white uppercase mt-1 tracking-wider">
                Timeline & Milestones
              </h3>
            </div>
            
            <div className="p-4 bg-luxury-black border border-white/5 inline-flex items-center gap-3">
              <CalendarRange className="w-5 h-5 text-luxury-gold" />
              <div className="text-left">
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">Delivery Timeframe</p>
                <p className="text-sm font-semibold text-white tracking-widest uppercase">4 to 5 Weeks Complete</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10" id="milestones-progressive-grid">
            {paymentTimeline.map((item, index) => (
              <div key={index} className="relative flex flex-col justify-between" id={`milestone-${item.step}`}>
                <div>
                  {/* Step bubble and Percentage accent */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-4xl text-white/5 select-none font-extrabold font-mono">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/30 text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-gold">
                      {item.percentage}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold tracking-wider font-sans uppercase text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                  <span>PHASE SEQUENCE</span>
                  <span className="text-luxury-gold">{item.timing}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core high trust guarantee */}
          <div className="h-[1px] bg-white/10 my-8"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-luxury-gold" />
              <span>Contract-backed, guaranteed high-fidelity production by Yash Raj.</span>
            </div>
            <span className="text-[10px] text-gray-500 font-mono">* All rates subject to standard contract agreements (Excl. Outstation Lodging if applicable).</span>
          </div>
        </div>

      </div>
    </section>
  );
}
