import { TESTIMONIALS, INSTAGRAM_POSTS } from '../data';
import { Star, Instagram, Heart, MessageCircle, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import RevealOnScroll from './RevealOnScroll';

export default function TestimonialsList() {
  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden" id="social-proof-section">
      {/* Absolute graphic background accents */}
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[30%] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <RevealOnScroll direction="up" distance={30} delay={0.05}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-sans font-semibold">
              TRUE EXPERIENCES FROM THE FIELD
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-3 tracking-wider">
              Heirloom Testimonials
            </h2>
            <div className="w-16 h-[2px] bg-gold-gradient mx-auto mt-5"></div>
            <p className="text-sm text-gray-400 max-w-xl mx-auto mt-4 font-light">
              We measure our success by the tears of joy and the timeless smiles of the beautiful couples and luxury fashion brands we partner with.
            </p>
          </div>
        </RevealOnScroll>

        {/* 1. TESTIMONIALS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24" id="testimonials-grid">
          {TESTIMONIALS.map((test, idx) => (
            <RevealOnScroll
              key={test.id}
              direction="up"
              distance={25}
              delay={idx * 0.12}
              className="h-full"
            >
              <div
                className="glass-card p-8 flex flex-col justify-between h-full relative group"
                id={`testimonial-card-${test.id}`}
              >
                {/* Giant quote icon */}
                <Quote className="absolute top-6 right-8 w-10 h-10 text-white/[0.03] select-none" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-8 italic">
                    "{test.text}"
                  </p>
                </div>

                {/* User Bio Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  {test.coupleImage && (
                    <img
                      src={test.coupleImage}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-luxury-gold/30"
                    />
                  )}
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-luxury-gold mt-0.5 font-mono">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* 2. DYNAMIC INSTAGRAM FEED MOCK */}
        <div className="border-t border-white/10 pt-20" id="instagram-feed-flow">
          
          <RevealOnScroll direction="up" distance={30} delay={0.05}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold text-luxury-gold tracking-widest uppercase flex items-center gap-1.5">
                  <Instagram className="w-4 h-4 text-luxury-gold" />
                  <span>@YashRajMotionPicture</span>
                </span>
                <h3 className="text-2xl sm:text-3.5xl font-serif text-white uppercase mt-1 tracking-wider">
                  Live Instagram Stories
                </h3>
              </div>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-luxury-gold/30 hover:border-luxury-gold text-xs tracking-wider font-semibold uppercase text-luxury-gold hover:text-white hover:bg-luxury-gold/5 flex items-center gap-2 transition"
              >
                <span>Follow Studio Feed</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </RevealOnScroll>

          {/* Insta Photogrid - Responsive Adaptive sizing (Desktop: 4 columns, Tablet: 2, Mobile: 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="instagram-grid">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <RevealOnScroll
                key={post.id}
                direction="up"
                distance={20}
                delay={idx * 0.1}
                className="h-full"
              >
                <div
                  className="relative overflow-hidden group aspect-square border border-white/5 bg-luxury-black cursor-pointer"
                  id={`insta-post-${post.id}`}
                >
                  {/* Photo */}
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark overlay showing interaction metrics */}
                  <div className="absolute inset-0 bg-luxury-black/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                    <div className="flex items-center gap-4 text-sm text-white">
                      <span className="flex items-center gap-1.5 hover:text-red-400 transition">
                        <Heart className="w-4 h-4 fill-white hover:fill-red-400" />
                        <span className="text-[10px] font-mono">{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-luxury-gold transition">
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span className="text-[10px] font-mono">{post.comments}</span>
                      </span>
                    </div>

                    {/* Caption snippet */}
                    <p className="text-[11px] text-gray-300 font-light line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>

                    <span className="text-[9px] text-luxury-gold tracking-widest font-bold uppercase mt-2 block">
                      OPEN ORIGINAL POST +
                    </span>
                  </div>

                  {/* Corner Instagram Glyphs */}
                  <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-sm group-hover:opacity-0 transition z-20">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
