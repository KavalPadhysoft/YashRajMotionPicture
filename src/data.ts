import { PortfolioItem, Testimonial, ServiceDetail, BookingPackage, InstagramPost } from './types';

// Premium high-res cinematic photography assets from Pexels (Indian Weddings, Fashion, Corporate)
export const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-tender-embrace-on-their-wedding-day-40034-large.mp4";
export const BACKUP_HERO_IMAGE = "https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=1200&q=70";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'w1',
    title: 'The Royal Gujarati Vivah',
    category: 'wedding',
    type: 'image',
    url: 'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'A majestic traditional wedding ceremony captured in the heart of Ahmedabad, highlighting regal gold and crimson detail.',
    location: 'Taj Skyline, Ahmedabad',
    photographer: 'Yash Raj'
  },
  {
    id: 'pw1',
    title: 'Ethereal Whispers at Adalaj Stepwell',
    category: 'pre-wedding',
    type: 'image',
    url: 'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'A stunning pre-wedding shoot utilizing the symmetrical, ancient stone architecture of Adalaj, Gujarat.',
    location: 'Adalaj Stepwell, Gandhinagar',
    photographer: 'Yash Raj'
  },
  {
    id: 'f1',
    title: 'Heritage Couture Showcase',
    category: 'fashion',
    type: 'image',
    url: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'Editorial luxury garment shoot blending classical Indian embroidery with high-contrast, moody studio lighting.',
    location: 'Studio Crescent, Ahmedabad',
    photographer: 'Yash Raj'
  },
  {
    id: 'w2',
    title: 'Golden Hour pheras',
    category: 'wedding',
    type: 'image',
    url: 'https://images.pexels.com/photos/10452378/pexels-photo-10452378.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/10452378/pexels-photo-10452378.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'Warm cinematic sun flares framing the eternal promises. Full high-contrast details of the bride\'s bespoke lehenga.',
    location: 'Madhavgarh Heritage Palace, Outskirts of Ahmedabad',
    photographer: 'Yash Raj'
  },
  {
    id: 'c1',
    title: 'The Tech Visionaries Summit',
    category: 'corporate',
    type: 'image',
    url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'Premium corporate storytelling, delivering crisp candid shots during executive interaction in GIFT City.',
    location: 'GIFT One Tower, GIFT City',
    photographer: 'Yash Raj'
  },
  {
    id: 'pw2',
    title: 'Symphony of Lights at Riverfront',
    category: 'pre-wedding',
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-holding-hands-of-a-couple-in-love-43224-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/14883168/pexels-photo-14883168.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'A modern pre-wedding film set against the glowing skyline of Sabarmati Riverfront at dusk.',
    location: 'Sabarmati Riverfront, Ahmedabad',
    photographer: 'Yash Raj'
  },
  {
    id: 'f2',
    title: 'Minimalist Monochrome Editorial',
    category: 'fashion',
    type: 'image',
    url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'Avant-garde styling showcasing sharp silhouettes and modern aesthetics in dramatic shadows.',
    location: 'Sabarmati Ashram Museum Grounds',
    photographer: 'Yash Raj'
  },
  {
    id: 'w3',
    title: 'Vows of Elegance',
    category: 'wedding',
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/14088851/pexels-photo-14088851.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'An emotional cinematic highlight trailer showing tears and joy during exchange of garlands.',
    location: 'Hyatt Regency, Ahmedabad',
    photographer: 'Yash Raj'
  },
  {
    id: 'c2',
    title: 'Executive Portraits in Contrast',
    category: 'corporate',
    type: 'image',
    url: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900&q=70',
    thumbnailUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&q=60',
    description: 'High-end black & white and warm copper tone headshots for key leadership profiles of leading Gujarati firms.',
    location: 'Sindhu Bhavan Road Offices, Ahmedabad',
    photographer: 'Yash Raj'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    subtitle: 'Timeless Legacies of Love',
    tagline: 'Preserving the grandeur of your sacred union with poetic framing & rich golden tones.',
    slug: 'wedding-photography',
    pricing: 'Starting at ₹45,000 / Event',
    shortDescription: 'From high-stakes emotional smiles to grand architectural portraits, our wedding photography is an heirloom of memory designed to last generations.',
    longDescription: 'Every wedding is a royal visual novel packed with fleeting details, sacred mantras, grand entrances, and quiet, emotional lookaways. At Yash Raj Motion Picture, we capture these with utmost respect for tradition and a contemporary cinematic eye. We use elite dual-camera setups and specialized high-speed prime lenses to maintain rich contrast and stunning depth on our "Midnight Premium" palette.',
    features: [
      'Dual Elite Full-Frame Cameras (2 Primary Photographers)',
      'Candid & Creative Cinematic Portraits',
      'High-Resolution Retouched Signature Album of 350+ Assets',
      'Advanced Color Grading suited for Rich Warm & Dramatic tones',
      'Next-Day Sizzle Photo Selection for Social Sharing'
    ],
    deliverables: [
      'Custom Embossed Leatherbound Premium Hardcopy Photobook',
      'Digital Cloud Gallery link with 10-Year Active Cloud Backup',
      'Cinematic teaser carousel formatted specifically for Instagram Reels (9:16)'
    ],
    bannerImage: 'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=800&q=60',
    galleryImages: [
      'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/14088851/pexels-photo-14088851.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/10452378/pexels-photo-10452378.jpeg?auto=compress&cs=tinysrgb&w=400&q=55'
    ],
    youtubeVideoId: 'xS-v6XnPl-s',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-tender-embrace-on-their-wedding-day-40034-large.mp4'
  },
  {
    id: 'pre-wedding-shoots',
    title: 'Pre-Wedding & Films',
    subtitle: 'The Cinematic Prologue',
    tagline: 'We turn your unique couple story into a spectacular music film set in historical Gujarati landscapes.',
    slug: 'pre-wedding-shoots',
    pricing: 'Starting at ₹35,000 / Complete Package',
    shortDescription: 'Shot on magnificent historical and contemporary architecture in Ahmedabad, Gandhinagar, or custom premium retreats.',
    longDescription: 'Your pre-wedding is a canvas of pure anticipation. We conceptualize personalized narratives, helping select majestic heritage backdrops like Adalaj Stepwell, Sarkhej Roja, or the sleek Sabarmati Riverfront. Using drone assistance and stable gimbal cinematography, we recreate Bollywood-level grand vistas synchronized with an acoustic score.',
    features: [
      'Interactive Concept Boarding & Outfit Advice sessions',
      '1 Professional Cinematic Director + 1 Lead Cinematographer',
      'Aerial drone footage authorized for heritage & nature horizons',
      'Professional stabilizer gimbals & premium slow-motion setups',
      'Bespoke cinematic music synchronization with licensed audio'
    ],
    deliverables: [
      '1 Full-Length Cinematic Story Film (3-4 mins, 4K resolution)',
      '1 Social Media Reel/Teaser (30-60 secs with aesthetic styling)',
      '50 fully graded premium couple landscape portraits'
    ],
    bannerImage: 'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=800&q=60',
    galleryImages: [
      'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/14883168/pexels-photo-14883168.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=400&q=55'
    ],
    youtubeVideoId: 'sR2yAn3zS6Q',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4'
  },
  {
    id: 'heritage-portraits',
    title: 'Heritage Portraits',
    subtitle: 'Vantage Point of Kings',
    tagline: 'Timeless single and family portraiture inside traditional stepwells and ancient architecture.',
    slug: 'heritage-portraits',
    pricing: 'Starting at ₹25,000 / Complete Session',
    shortDescription: 'Preserve your ancestral identity with highly stylized contrast portraits captured inside hand-vetted heritage locations.',
    longDescription: 'Our Heritage Portrait sessions focus purely on classical composition, micro-textures, and high-stakes lighting configurations. Ideal for individuals, luxury couples, and traditional Gujarati families who desire a heavy-contrast artistic portfolio reminiscent of historical oil paintings.',
    features: [
      '1 Lead Cinematic Director with custom high-contrast keylight equipment',
      'Access permission advisory for key heritage sites in Gujarat',
      'Continuous aesthetic styling supervision during the session',
      'Dual ambient lighting systems and shadow reflector plates'
    ],
    deliverables: [
      '20 Masterfully retouched custom Signature canvases (suitable for 4K display)',
      'High-Resolution printing plates with complete personal release rights',
      'Archival matte luxury paper physical frames (set of 3)'
    ],
    bannerImage: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=800&q=60',
    galleryImages: [
      'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&q=55'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-holding-hands-of-a-couple-in-love-43224-large.mp4'
  },
  {
    id: 'retail-editorial',
    title: 'High Fashion & Editorial',
    subtitle: 'Haute Couture Legends',
    tagline: 'Bespoke catalog and narrative visual campaigns for premium designers and boutique labels.',
    slug: 'retail-editorial',
    pricing: 'Starting at ₹35,000 / Day Shoot',
    shortDescription: 'Combining high-fashion silhouettes with dramatic shadows to capture the authentic textures of premium traditional fabrics.',
    longDescription: 'Designed specifically for Ahmedabad\'s legendary textile boutique owners and startup luxury dressmakers, our High Fashion & Editorial service delivers highly-polished catalog images and visual lookbooks. We treat garments as works of art, setting up rigorous directional lighting grids to reflect every intricate embroidery stitch.',
    features: [
      'High-performance technical strobe lights and backdrop controllers',
      'Continuous color accuracy monitoring matching fabric threads',
      'Pre-production concept and layout design storyboard consultation',
      'High-res active modeling coaching by the director'
    ],
    deliverables: [
      'Full Digital Lookbook formatted for print and official catalogs',
      'Ultra-HD web files optimized for premium retail platforms',
      '1 Cinematic motion poster reel summarizing the collection theme'
    ],
    bannerImage: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&q=60',
    galleryImages: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=400&q=55',
      'https://images.pexels.com/photos/14883168/pexels-photo-14883168.jpeg?auto=compress&cs=tinysrgb&w=400&q=55'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali & Rajveersinh Jadeja',
    role: 'Bespoke Heritage Wedding Couple',
    rating: 5,
    text: 'Yash Raj Motion Picture turned our wedding at the Taj Skyline into a cinematic masterpiece. The rich gold hues, breathtaking slow-mo candids, and the stunning pre-wedding at Adalaj Stepwell have left our families speechless. True professionals who understand lighting like magicians!',
    date: 'February 2026',
    coupleImage: 'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=80&q=55'
  },
  {
    id: 't2',
    name: 'Meera Patel',
    role: 'Lead Designer, Vastra Heritage Couture',
    rating: 5,
    text: 'For our Ahmedabad-based fashion launch, we needed a moody, midnight luxury aesthetic. Yash Raj and his team exceeded expectations. The high contrast, sharp silhouettes, and micro-framing made our luxury traditional textiles pop. Absolutely stellar editorial work.',
    date: 'April 2026',
    coupleImage: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=80&q=55'
  },
  {
    id: 't3',
    name: 'Devang Shah',
    role: 'Vice President, G-Tech Gujarat Solutions',
    rating: 5,
    text: 'We hired Yash Raj for our annual summit profiling at GIFT City. The candidate corporate headshots and team action captures were extremely crisp, matching our modern corporate brand structure. Fast delivery and clean aesthetic.',
    date: 'May 2026',
    coupleImage: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=80&q=55'
  }
];

// Curated pricing bundles aligning with "₹ 35,000 Advance/Budget" guidelines from the user request
export const PACKAGES: BookingPackage[] = [
  {
    id: 'pkg-pre-wedding',
    title: 'The Cinematic Pre-Wedding',
    subtitle: 'Most Popular Choice in Ahmedabad',
    price: '₹ 35,000',
    category: 'pre-wedding',
    features: [
      'Full Day Shoot (up to 3 scenic locations in Ahmedabad/Adalaj)',
      '1 Directors cut film (3 minutes, 4K resolution)',
      '40 Edited High-Res Cinematic Portraits',
      'Beautiful Drone Landscapes included',
      'Gold Custom Styled Teaser Reel (9:16 format)',
      '50% Advance Booking confirmation (₹ 17,500)'
    ],
    popular: true
  },
  {
    id: 'pkg-royal-wedding',
    title: 'Heritage Wedding Film & Shoot',
    subtitle: 'Classic Multi-Event coverage',
    price: '₹ 85,000',
    category: 'wedding',
    features: [
      'Complete Coverage of Pheras + Sangeet + Reception',
      'Team of 3 Photographers + 2 Videographers',
      '1 Royal Wedding Highlights Film (6 mins)',
      '300+ signature color-graded high-res shots',
      'Luxury leatherbound hardcopy physical album',
      '50% Advance Booking confirmation (₹ 42,500)'
    ],
    popular: false
  },
  {
    id: 'pkg-signature-combo',
    title: 'Yash Raj Premium Legacy',
    subtitle: 'Complete Pre-Wedding + Wedding Suite',
    price: '₹ 1,15,000',
    category: 'premium-combo',
    features: [
      'Comprehensive Pre-Wedding cinematic shoot on drone + camera',
      'Comprehensive 2-Day Wedding Event Photography & Videography',
      'Next-day delivery of select signature frames',
      '2 Premium hardcopy personalized photo albums',
      '10-Year Active Cloud storage with dedicated client pin code',
      '50% Advance Booking confirmation (₹ 57,500)'
    ],
    popular: false
  }
];

// Mock Instagram Posts for the portfolio and social feed
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    imageUrl: 'https://images.pexels.com/photos/20147188/pexels-photo-20147188.jpeg?auto=compress&cs=tinysrgb&w=260&q=50',
    likes: 1248,
    comments: 42,
    caption: 'Traditions shining in pure gold. Captured at Hyde Palace #YashRajMotionPicture #AhmedabadWedding #GujaratiMarriage',
    link: '#'
  },
  {
    id: 'insta-2',
    imageUrl: 'https://images.pexels.com/photos/20147178/pexels-photo-20147178.jpeg?auto=compress&cs=tinysrgb&w=260&q=50',
    likes: 980,
    comments: 18,
    caption: 'Symmetry of history, symmetry of love at Adalaj Stepwell. #PreWeddingFilms #CinematicLove #AhmedabadCouple',
    link: '#'
  },
  {
    id: 'insta-3',
    imageUrl: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=260&q=50',
    likes: 812,
    comments: 24,
    caption: 'Shadows tell a story. Styled with high-contrast Midnight aesthetics. #FashionGujarat #AhmedabadPhotography',
    link: '#'
  },
  {
    id: 'insta-4',
    imageUrl: 'https://images.pexels.com/photos/10452378/pexels-photo-10452378.jpeg?auto=compress&cs=tinysrgb&w=260&q=50',
    likes: 1530,
    comments: 56,
    caption: 'Eternal vows framed by the golden hour sun. #TraditionalWeddings #IndianBride #CandidMoments',
    link: '#'
  }
];
