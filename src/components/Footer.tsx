import React from "react";
import { ShieldCheck, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  currentTab: string;
  setTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentTab, setTab }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yashrajmotionpictures.com/#localbusiness",
        "name": "Yash Raj Motion Picture",
        "image": "https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=800",
        "telephone": "+919876543210",
        "email": "contact@yashrajmotionpictures.com",
        "priceRange": "INR 35000 - 150000",
        "url": "https://yashrajmotionpictures.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "301, Crescent Commercial Arts Hub, near Sindhu Bhavan Road, Bodakdev",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380054",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.039572",
          "longitude": "72.507624",
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "10:00",
          "closes": "20:00",
        },
      },
      {
        "@type": "Photographer",
        "@id": "https://yashrajmotionpictures.com/#photographer",
        "name": "Yash Raj Shah",
        "jobTitle": "Lead Cinematic Director",
        "knowsAbout": [
          "Wedding Filming",
          "Pre-Wedding Shoots Gujarat",
          "Haute Couture Editorials",
          "Cinematography Ahmedabad",
        ],
        "homeLocation": "Ahmedabad, Gujarat",
      },
    ],
  };

  const handleTabClick = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#d4af64]/15 text-[#5a5650] py-16 font-sans relative text-left"
      id="studio-footer"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
          id="footer-bento-grid"
        >
          {/* Logo & Philosophy Column */}
          <div className="flex flex-col gap-4">
            <div
              className="cursor-pointer hover:opacity-95 transition duration-300 w-fit"
              onClick={() => handleTabClick("home")}
            >
              <Logo variant="footer" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light mt-2">
              Based on Sindhu Bhavan Road, Ahmedabad, we capture high-stakes
              emotional smiles and historical grandeur, crafting them into elite
              visual heirlooms.
            </p>
            <div className="flex items-center gap-2 text-[8px] tracking-[2px] text-gray-500 uppercase mt-4">
              <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Registered Gujarat Business • GST Verified</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-[10px] tracking-[4px] font-sans font-medium text-[#f0ece4] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-luxury-gold rounded-none animate-pulse" />
              <span>VISUAL EXPLORATIONS</span>
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => handleTabClick("home")}
                  className="hover:text-luxury-gold transition cursor-pointer outline-none bg-transparent border-none p-0"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("about")}
                  className="hover:text-luxury-gold transition cursor-pointer outline-none bg-transparent border-none p-0"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("services")}
                  className="hover:text-luxury-gold transition cursor-pointer outline-none bg-transparent border-none p-0"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick("portfolio")}
                  className="hover:text-luxury-gold transition cursor-pointer outline-none bg-transparent border-none p-0"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Timings Column */}
          <div>
            <h4 className="text-[10px] tracking-[4px] font-sans font-medium text-[#f0ece4] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-luxury-gold rounded-none animate-pulse" />
              <span>TIMINGS & AREAS</span>
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Mon - Sun: 10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  Ahmedabad, Gandhinagar, GIFT City, and Destination locations
                  worldwide.
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates Column */}
          <div>
            <h4 className="text-[10px] tracking-[4px] font-sans font-medium text-[#f0ece4] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-luxury-gold rounded-none animate-pulse" />
              <span>CONTACT COORDINATES</span>
            </h4>
            <div className="space-y-4 text-xs text-gray-400">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white hover:text-luxury-gold transition"
              >
                <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>
              <a
                href="mailto:contact@yashrajmotionpictures.com"
                className="flex items-center gap-2 hover:text-luxury-gold transition pt-0.5"
              >
                <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                <span>contact@yashrajmotionpictures.com</span>
              </a>
              <div className="p-3 bg-[#020202] border border-[#5a5650]/20 text-[9px] uppercase tracking-[3px] leading-relaxed rounded-none text-left">
                <span className="block text-[#5a5650] mb-1">
                  Ahmedabad Flagship
                </span>
                <span className="text-gray-300">
                  Bodakdev near Sindhu Bhavan Rd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Global copyright subbar */}
        <div
          className="border-t border-[#5a5650]/15 pt-8 flex flex-col sm:flex-row items-center justify-center text-center text-[10px] tracking-wider text-[#5a5650] gap-4"
          id="footer-copyright-subbar"
        >
          <p>
            © 2026 Yash Raj Motion Picture. All Rights Reserved. Crafted with Near-Black Champagne Gold Aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
};
