export interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  bannerImage: string;
  pricing: string;
  videoUrl?: string;
  galleryImages: string[];
  features: string[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  category: "wedding" | "pre-wedding" | "fashion" | "corporate";
  thumbnailUrl: string;
  title: string;
  location: string;
  type: "image" | "video";
  description: string;
  url: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  rating: number;
  text: string;
  coupleImage?: string;
  name: string;
  role: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
}
