import { Service, PortfolioItem, PricingPackage, Testimonial, InstagramPost } from "./types";

export const services: Service[] = [
  {
    id: "wedding-photography",
    title: "Wedding Films & Photography",
    subtitle: "Heritage Cinematic Stills & Motion Portfolio Suite",
    shortDescription: "Our flagship coverage capturing high-stakes emotional smiles, royal Gujarati heritage scale, and stunning midnight candlelight ceremonies.",
    longDescription: "Our Wedding Film signature suite is meticulously designed for couples who seek a cinematic masterwork. We blend art-tier cinematography with state-of-the-art soundscapes and custom color adjustments to turn your grand celebrations into a majestic heritage relic. Filmed using native cinema cameras with anamorphic optics, every shot looks like a high-end dramatic movie frame.",
    bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹85,000 - ₹1,50,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-through-vines-in-sunlight-41604-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Principal Cinematic Director Yash Raj coverage",
      "Symmetrical architectural master frames positioning",
      "Dual-operator setup with Cine prime lenses",
      "Exclusive midnight-gold color profiling",
      "Fully soundscaped non-linear narratives"
    ],
    deliverables: [
      "1x Feature Cinematic Film (25 - 45 minutes)",
      "1x High-Energy Visual Teaser (3 - 5 minutes)",
      "350+ fully graded high-res digital stills",
      "Leather-Bound Handcrafted Matte Photo Book"
    ]
  },
  {
    id: "pre-wedding-shoots",
    title: "The Cinematic Pre-Wedding",
    subtitle: "Dynamic Lovers Storyboards Set in Ancient Ruins",
    shortDescription: "Choreographed cinematic narratives weaving through Adalaj Stepwell or GIFT high-rises. Blending raw architecture with deep romantic depth.",
    longDescription: "Tell your unique story before the wedding. We construct a bespoke script and screenwrite custom frame sequences based on how you met, set against the breathtaking backdrops of Ahmedabad's historic stepwells or modern high-technology hubs. Directed with natural motion and high-fashion aesthetics.",
    bannerImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹35,000 - ₹50,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Bespoke storyline & narrative drafting",
      "Location scout coordination (Adalaj & Sabarmati)",
      "Slow-motion cinematic tracking techniques",
      "Stylist & couture consultation pre-shoot"
    ],
    deliverables: [
      "1x Cinematic Narrative Trailer (2 - 3 minutes)",
      "75+ fully graded digital high-stakes portraits",
      "Online visual showcase delivery portal"
    ]
  },
  {
    id: "heritage-portraits",
    title: "Heritage Portrait Session",
    subtitle: "Classic Monochromatic and Dark Metallic Shoots",
    shortDescription: "Asymmetric lighting and high dramatic contrast portraitures, ideal for keeping a permanent cultural link in architectural backdrops.",
    longDescription: "A curated photo series that captures the deep soul, personality, and style of the muse. Combining natural shadow play, vintage lighting setups, and luxurious poses with modern luxury clothing.",
    bannerImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹25,000 - ₹40,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-in-the-forest-41600-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Studio custom dramatic backlight arrangement",
      "High-contrast black & white calibration option",
      "Custom prop and backdrop coordination"
    ],
    deliverables: [
      "40+ ultra-premium high-resolution stills",
      "3x Handcrafted fine art museum gallery canvas prints",
      "Private server backup for 2 years"
    ]
  },
  {
    id: "retail-editorial",
    title: "High Fashion Editorial",
    subtitle: "Couture Campaign Portfolios & Runway Lookbooks",
    shortDescription: "Ultra-sharp lookbooks, commercial styling campaigns, and luxury dynamic lookbooks for premium boutiques on SBR Ahmedabad.",
    longDescription: "High-fashion commercial photography and styling campaigns designed to elevate local and prestigious national brands. Featuring deep shadows and heavy gold accents mapping.",
    bannerImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹45,000 - ₹75,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "High-speed strobe lighting synchronization",
      "E-commerce metadata & standard ratios sizing",
      "On-set fashion creative director assistance"
    ],
    deliverables: [
      "Digital Lookbook ready for cataloging",
      "15x Retouched editorial poster shots",
      "Social media active aspect ratio cuts"
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pt-1",
    category: "wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    title: "The Palace Splendor",
    location: "Heritage Palace, Adalaj",
    type: "image",
    description: "Gujarati Royal Wedding coupling symmetrical palace architecture with deep matte shadows and rich candle lighting.",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "pt-2",
    category: "pre-wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    title: "Adalaj Whispers",
    location: "Adalaj Stepwell Site",
    type: "video",
    description: "A slow-tracking romantic cinema shot highlighting the intricate columns of Adalaj stepwell with dynamic daylight flares.",
    url: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4"
  },
  {
    id: "pt-3",
    category: "fashion",
    thumbnailUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    title: "The Midnight Silk",
    location: "Bodakdev Studio",
    type: "image",
    description: "Couture editorial campaign framing gold jewelry against deep velvet charcoal fabrics and extreme contrast shadow structures.",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "pt-4",
    category: "corporate",
    thumbnailUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    title: "Tech Horizon Summit",
    location: "GIFT City Club, Gandhinagar",
    type: "image",
    description: "Symmetrical visual coverage of Ahmedabad's leading business summit featuring sharp-light layouts and glass textures.",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "pt-5",
    category: "wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    title: "Candlelight Vows",
    location: "Sindhu Bhavan Road, Ahmedabad",
    type: "video",
    description: "Tender embrace during a night ritual in a forest garden setup on SBR, completely lit by custom chandeliers.",
    url: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-tender-embrace-on-their-wedding-day-40034-large.mp4"
  },
  {
    id: "pt-6",
    category: "pre-wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    title: "GIFT City Monoliths",
    location: "GIFT City, Gandhinagar",
    type: "image",
    description: "Modern romantic pre-wedding narrative contrasting futuristic architectural glass with warm, natural handholding details.",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2000"
  }
];

export const packages: PricingPackage[] = [
  {
    id: "pkg-1",
    title: "Heritage Masterpackage",
    subtitle: "THE PLATINUM SUITE",
    price: "₹1,45,000",
    features: [
      "Yash Raj as Principal Director throughout",
      "Full 3-Day Wedding and pre-wedding coverage",
      "Cinematic prime lenses and sound setup",
      "1x Feature Film + 1x High-Energy Teaser",
      "Royal Handcrafted Leather Album + Box set",
      "Dual Cine drones capturing aerial graphics",
      "Complete 4K raw archive storage supply"
    ],
    popular: true
  },
  {
    id: "pkg-2",
    title: "Classic Cinematic",
    subtitle: "THE GOLD COLLECTION",
    price: "₹85,000",
    features: [
      "Full 2-Day Wedding and main rituals coverage",
      "Premium Cinematic Director Team",
      "1x Narrative Highlights Film (15 minutes)",
      "1x Aesthetic Teaser Film (3 minutes)",
      "Fine Art Premium Photo Matte Album",
      "UHD Digital files delivery within 4 weeks"
    ]
  },
  {
    id: "pkg-3",
    title: "Aesthetic Baseline",
    subtitle: "THE ESSENTIALS SELECTION",
    price: "₹35,000",
    features: [
      "Single-Day comprehensive shoot coverage",
      "1x Traditional teaser & cinematic highlights film",
      "75+ Color corrected high-definition stills",
      "Online visual portal secured backup",
      "Ideal for pre-weddings or intimate rituals"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Yash Raj turned our Ahmedabad heritage wedding into an absolute visual legacy. The framing when we entered the lit mandap on SBR felt like a high-budget Bollywood scene. Worth every single rupee.",
    coupleImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=150",
    name: "Rajveer & Anjali",
    role: "GRAND PALACE WEDDING"
  },
  {
    id: 2,
    rating: 5,
    text: "For our pre-wedding shoot at Adalaj Stepwell, Yash Raj spent hours calculating correct shadows and sun angles. The end output got thousands of views and is a literal work of art we watch weekly.",
    coupleImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=150",
    name: "Devvrat & Vaishali",
    role: "ADALAJ HERITAGE SESSION"
  },
  {
    id: 3,
    rating: 5,
    text: "The lookbook photography they did for our boutique couture brand on Sindhu Bhavan Road was phenomenal. Extremely sharp edge frames, beautiful depth, and lightning fast delivery.",
    coupleImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=150",
    name: "Meera Shah",
    role: "HAUTE FASHION CAMPAIGN"
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    caption: "Midnight gold glows different under SBR palace chandeliers. Pure bliss. #AmdavadWeddings #YashRajFilms",
    likes: "1,248",
    comments: "42"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    caption: "Geometric lines meet endless love stories at Adalaj Stepwell. Symmetrical royalty. #GujaratPreweddings #HeritageCinematography",
    likes: "956",
    comments: "18"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600",
    caption: "Silk collection couture launch styling in Bodakdev. Play with shadows. #AhmedabadFashion #MidnightSuite",
    likes: "1,412",
    comments: "55"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    caption: "Futuristic lines in GLASS at GIFT City. Modern stories waiting to happen. #AmdavadTeasers #CinematicLove",
    likes: "874",
    comments: "21"
  }
];
