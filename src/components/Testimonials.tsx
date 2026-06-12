import React from "react";
import { Star, Instagram, Heart, MessageCircle } from "lucide-react";
import { testimonials, instagramPosts } from "../data";
import { MotionWrapper } from "./MotionWrapper";

export const Testimonials: React.FC = () => {
  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative overflow-hidden"
      id="social-proof-section"
    >
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[30%] bg-[#d4af64]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials Header */}
        <MotionWrapper direction="up" distance={30} delay={0.05}>
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-medium block">
              INDELIBLE EXPERIENCES OF <i>YOUR</i> JOURNEYS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#f0ece4] uppercase mt-2 tracking-wider">
              Heirloom <i>Testimonials</i>
            </h2>
            <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
          </div>
        </MotionWrapper>

        {/* Testimonials Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          id="testimonials-grid"
        >
          {testimonials.map((test, index) => (
            <MotionWrapper
              key={test.id}
              direction="up"
              distance={25}
              delay={index * 0.1}
              className="h-full"
            >
              <div
                className="bg-[#020202] border border-[#5a5650]/20 p-8 flex flex-col justify-between h-full relative group rounded-none"
                id={`testimonial-card-${test.id}`}
              >
                <span className="absolute top-2 right-4 text-[9rem] font-serif font-light text-[#d4af64]/10 select-none leading-none h-12 overflow-hidden pointer-events-none">
                  “
                </span>

                <div>
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold"
                      />
                    ))}
                  </div>

                  <p className="text-xs sm:text-xs text-gray-400 font-light leading-relaxed mb-8 italic text-left">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-[#5a5650]/15">
                  {test.coupleImage && (
                    <img
                      src={test.coupleImage}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-none object-cover border border-[#d4af64]/20"
                    />
                  )}
                  <div className="text-left">
                    <h4 className="text-[10px] tracking-[2px] font-sans font-medium text-[#f0ece4] uppercase">
                      {test.name}
                    </h4>
                    <p className="text-[8px] tracking-[4px] text-luxury-gold uppercase mt-0.5 font-sans font-light">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Live Instagram Feed Panel */}
        <div className="border-t border-[#5a5650]/20 pt-20" id="instagram-feed-flow">
          <MotionWrapper direction="up" distance={30} delay={0.05}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 text-left">
              <div>
                <span className="text-[10px] font-sans tracking-[4px] text-luxury-gold uppercase flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>@YashRajMotionPicture</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f0ece4] uppercase mt-1 tracking-wider">
                  Live Instagram Stories
                </h3>
              </div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[#d4af64]/40 hover:border-[#d4af64] text-[9px] tracking-[4px] font-medium uppercase text-[#d4af64] hover:text-[#f0ece4] bg-transparent hover:bg-[#d4af64]/5 transition duration-300 rounded-none flex items-center gap-2"
              >
                <span>Follow Studio Feed</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </MotionWrapper>

          {/* Instagram Post Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            id="instagram-grid"
          >
            {instagramPosts.map((post, index) => (
              <MotionWrapper
                key={post.id}
                direction="up"
                distance={20}
                delay={index * 0.08}
                className="h-full"
              >
                <div
                  className="relative overflow-hidden group aspect-square border border-[#5a5650]/20 bg-[#020202] cursor-pointer rounded-none"
                  id={`insta-post-${post.id}`}
                >
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102 rounded-none grayscale-[10%]"
                  />

                  {/* Hover Overlay info */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 text-left">
                    <div className="flex items-center gap-4 text-xs text-white">
                      <span className="flex items-center gap-1.5 hover:text-red-400 transition">
                        <Heart className="w-3.5 h-3.5 fill-white text-white" />
                        <span className="text-[10px] font-mono">{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-luxury-gold transition">
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span className="text-[10px] font-mono">{post.comments}</span>
                      </span>
                    </div>

                    <p className="text-[11px] text-[#5a5650] group-hover:text-gray-300 font-light line-clamp-3 leading-relaxed transition-colors">
                      {post.caption}
                    </p>

                    <span className="text-[9px] text-luxury-gold tracking-[3px] font-medium uppercase mt-2 block">
                      OPEN REEL PROFILE +
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-none group-hover:opacity-0 transition z-20">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
