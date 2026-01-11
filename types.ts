
export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  handle: string;
  content: string;
  avatar: string;
  stats: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
