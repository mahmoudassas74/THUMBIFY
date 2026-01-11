
import React from 'react';
import { Layout, Zap, Smartphone, Target, ShieldCheck, Layers } from 'lucide-react';
import { PricingPlan, Testimonial, Feature } from './types';

export const COLORS = {
  primary: '#ff4d00',
  primaryHover: '#e64500',
  background: '#09090b',
  card: '#18181b',
  border: '#27272a',
  accent: '#10b981',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for new creators getting started.",
    features: [
      "5 thumbnails per month",
      "24-hour delivery",
      "1 revision per design",
      "Source files included",
      "Standard support"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for consistent growth and higher CTR.",
    isPopular: true,
    features: [
      "15 thumbnails per month",
      "12-hour delivery",
      "Unlimited revisions",
      "A/B testing consultation",
      "Priority Discord support"
    ]
  },
  {
    name: "Creator",
    price: "$99",
    description: "Scaling fast? This is for serious channels.",
    features: [
      "30 thumbnails per month",
      "6-hour priority delivery",
      "Dedicated designer",
      "Unlimited revisions",
      "Custom branding kit"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    handle: "@TechAlex",
    content: "My CTR jumped from 3.2% to 8.7% in just two weeks after switching to Thumbify. The ROI is insane.",
    avatar: "https://picsum.photos/seed/alex/100/100",
    stats: "+170% CTR"
  },
  {
    name: "Sarah Chen",
    handle: "@SarahCooks",
    content: "I used to spend 3 hours on thumbnails. Now I just send a title and get back a masterpiece in 24 hours.",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    stats: "Saved 20h/mo"
  },
  {
    name: "Marcus Vane",
    handle: "@VaneGaming",
    content: "The Pro plan is the best investment I've made for my channel. Consistent, high-quality, and fast.",
    avatar: "https://picsum.photos/seed/marcus/100/100",
    stats: "+500k Views"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Designed for CTR",
    description: "We don't just make things look pretty. We use visual science to stop the scroll.",
    icon: "Target"
  },
  {
    title: "Fast Delivery",
    description: "Our dedicated designers work around the clock to meet your upload schedule.",
    icon: "Zap"
  },
  {
    title: "Mobile Optimized",
    description: "Most viewers are on phones. Our designs are tested for clarity at small sizes.",
    icon: "Smartphone"
  },
  {
    title: "Consistent Branding",
    description: "We help you maintain a cohesive look so fans recognize your videos instantly.",
    icon: "Layers"
  },
  {
    title: "No Contracts",
    description: "Subscription-based simplicity. Pause or cancel anytime without hidden fees.",
    icon: "ShieldCheck"
  }
];
