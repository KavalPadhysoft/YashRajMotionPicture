import React from "react";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
import { packages } from "../data";

interface InvestmentProps {
  onPackageSelect: (packageName: string) => void;
}

export const Investment: React.FC<InvestmentProps> = ({ onPackageSelect }) => {
  const paymentMilestones = [
    {
      step: "01",
      percentage: "50% Booking Advance",
      title: "Conceptualization & Secure Dates",
      description: "A formal agreement secures your preferred shooting dates in Ahmedabad or across Gujarat. We set off color moodboards, location scouts, and outfit recommendations.",
      timing: "Week 1",
    },
    {
      step: "02",
      percentage: "30% Mid-Approval",
      title: "Shoots & Draft Reels Review",
      description: "Once capturing is concluded, we compile raw footage edits and select key frames. The client approves cinematic soundtrack selections and first drafts of wedding films.",
      timing: "Week 3",
    },
    {
      step: "03",
      percentage: "20% On Final Delivery",
      title: "Color Grading & Heirloom Prints",
      description: "Final delivery of ultra-HD 4K cinematic films, synced audio reels, digital cloud lockers, and bespoke custom leather bound embossed print albums.",
      timing: "Week 4–5",
    },
  ];

  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative text-left"
      id="pricing-milestones"
    >
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#d4af64]/10 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-medium block">
            INVESTMENT TIERS & FLOW
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f0ece4] uppercase mt-2 tracking-wider">
            Pricing & <i>Payment</i> Milestones
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Pricing Tiers Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          id="pricing-tiers-grid"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-8 bg-[#020202] border transition-all duration-300 rounded-none ${
                pkg.popular
                  ? "border-[#d4af64] bg-[#020202]"
                  : "border-[#5a5650]/20 hover:border-[#d4af64]/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-luxury-gold text-black font-semibold text-[9px] tracking-[3px] uppercase px-4 py-1 flex items-center gap-1.5 rounded-none">
                  <Sparkles className="w-3.5 h-3.5 fill-black text-black" />
                  <span> Ahmedabad Favorite </span>
                </div>
              )}

              <div>
                <span className="text-[9px] tracking-[3px] text-luxury-gold uppercase block mb-1 font-sans font-light">
                  {pkg.subtitle}
                </span>
                <h3 className="text-lg font-serif text-[#f0ece4] uppercase tracking-wide mb-3">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-1 my-5">
                  <span className="text-2xl sm:text-3xl font-serif text-[#f0ece4] tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[#5a5650] text-xs tracking-wider">
                    / Excl. GST
                  </span>
                </div>
                <div className="h-[1px] bg-[#5a5650]/20 my-4" />
                <ul className="space-y-3.5 text-xs text-gray-400 mt-6 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 leading-relaxed text-[#f0ece4]/80"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d4af64] mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onPackageSelect(pkg.title)}
                className={`w-full py-3.5 text-[9px] tracking-[3px] font-sans font-medium uppercase text-center transition cursor-pointer rounded-none outline-none ${
                  pkg.popular
                    ? "bg-[#d4af64] hover:bg-[#b3914e] text-black"
                    : "bg-transparent border border-[#5a5650]/30 hover:border-[#d4af64] text-[#f0ece4]"
                }`}
                id={`pkg-select-${pkg.id}`}
              >
                Inquire For This Package
              </button>
            </div>
          ))}
        </div>

        {/* Milestone Steps Timeline Card */}
        <div
          className="bg-[#020202] border border-[#5a5650]/20 p-8 sm:p-12 rounded-none"
          id="budget-milestones-card"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-light">
                THE PRE-PRODUCTION DISCIPLINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#f0ece4] uppercase mt-1 tracking-wider">
                Timeline & <i>Milestones</i>
              </h3>
            </div>

            <div className="p-4 bg-black border border-[#5a5650]/20 inline-flex items-center gap-3 rounded-none">
              <Clock className="w-5 h-5 text-luxury-gold" />
              <div className="text-left">
                <p className="text-[8px] tracking-[2px] text-gray-500 uppercase">
                  Delivery Timeframe
                </p>
                <p className="text-xs font-semibold text-[#f0ece4] tracking-[3px] uppercase">
                  4 to 5 Weeks Complete
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
            id="milestones-progressive-grid"
          >
            {paymentMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between"
                id={`milestone-${milestone.step}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-5xl text-white/5 select-none font-bold">
                      {milestone.step}
                    </span>
                    <span className="px-3 py-1 bg-[#d4af64]/10 border border-[#d4af64]/20 text-[9px] tracking-[2px] font-medium text-[#d4af64] rounded-none">
                      {milestone.percentage}
                    </span>
                  </div>
                  <h4 className="text-xs tracking-[2px] font-sans font-medium uppercase text-[#f0ece4] mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-[#5a5650]/15 flex items-center justify-between text-[8px] font-mono tracking-widest text-[#5a5650] uppercase">
                  <span>PHASE SEQUENCE</span>
                  <span className="text-luxury-gold tracking-normal">
                    {milestone.timing}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[1px] bg-[#5a5650]/20 my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a5650] mt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-luxury-gold" />
              <span className="text-gray-400">
                Contract-backed, guaranteed high-fidelity production by Yash Raj.
              </span>
            </div>
            <span className="text-[10px] text-[#5a5650] text-right font-sans font-light">
              * All rates subject to standard contract agreements.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
