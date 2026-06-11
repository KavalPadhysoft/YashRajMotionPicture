export type MediaCategory = 'wedding' | 'pre-wedding' | 'corporate' | 'fashion';

export interface PortfolioItem {
  id: string;
  title: string;
  category: MediaCategory;
  type: 'image' | 'video';
  url: string; // Image CDN path or YouTube ID
  thumbnailUrl: string;
  description: string;
  location?: string;
  photographer?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  coupleImage?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  slug: string;
  pricing: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  bannerImage: string;
  galleryImages: string[];
  youtubeVideoId?: string;
  videoUrl?: string;
}

export interface BookingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular?: boolean;
  category: 'wedding' | 'pre-wedding' | 'pre-wedding-cinematic' | 'premium-combo';
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  link: string;
}
