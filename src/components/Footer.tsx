import { MapPin, Mail, Phone, Clock, Heart, Shield } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Footer({ currentTab, setTab }: FooterProps) {
  const schemaMarkup = {
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
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.039572",
          "longitude": "72.507624"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      },
      {
        "@type": "Photographer",
        "@id": "https://yashrajmotionpictures.com/#photographer",
        "name": "Yash Raj Shah",
        "jobTitle": "Lead Cinematic Director",
        "knowsAbout": ["Wedding Filming", "Pre-Wedding Shoots Gujarat", "Haute Couture Editorials", "Cinematography Ahmedabad"],
        "homeLocation": "Ahmedabad, Gujarat"
      }
    ]
  };

  const handleNavClick = (id: string) => {
    setTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/15 text-gray-400 py-16 font-sans relative" id="studio-footer">
      
      {/* Hardcoded Schema Markup Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16" id="footer-bento-grid">
          
          {/* Column 1: Studio Info */}
          <div className="flex flex-col gap-4">
            <div className="cursor-pointer hover:opacity-95 transition duration-300" onClick={() => handleNavClick('home')}>
              <Logo variant="footer" />
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light mt-2">
              Based on Sindhu Bhavan Road, Ahmedabad, we capture high-stakes emotional smiles and historical grandeur, crafting them into elite visual heirlooms.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase mt-4">
              <Shield className="w-4 h-4 text-luxury-gold" />
              <span>Registered Gujarat Business • GST Verified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>
              <span>Visual Explorations</span>
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-luxury-gold transition cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-luxury-gold transition cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-luxury-gold transition cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portfolio')} className="hover:text-luxury-gold transition cursor-pointer">
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Timing and Scope */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>
              <span>Timings & Areas</span>
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Mon - Sun: 10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                <span>Ahmedabad, Gandhinagar, GIFT City, and Destination locations worldwide.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact Coordination */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></span>
              <span>Contact Coordinates</span>
            </h4>
            
            <div className="space-y-4 text-xs">
              
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white hover:text-luxury-gold transition">
                <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>

              <a href="mailto:contact@yashrajmotionpictures.com" className="flex items-center gap-2 hover:text-luxury-gold transition">
                <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                <span>contact@yashrajmotionpictures.com</span>
              </a>

              <div className="p-3 bg-luxury-charcoal/40 border border-white/5  text-[10px] uppercase tracking-wider leading-relaxed">
                <span className="block text-gray-500 font-mono mb-1">Ahmedabad Flagship Office</span>
                <span className="text-gray-300">Bodakdev near Sindhu Bhavan Road</span>
              </div>

            </div>
          </div>

        </div>

        {/* Downmost subbar copyright and Gujarat target indicators */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center text-center text-[11px] gap-4" id="footer-copyright-subbar">
          <p>© 2026 Yash Raj Motion Picture. All Rights Reserved. Crafted with Midnight Premium aesthetics.</p>
        </div>

      </div>
    </footer>
  );
}
