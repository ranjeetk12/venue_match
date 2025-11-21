export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl?: string;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  address?: string;
  type: string; // Usage: Wedding, Corporate, Social
  category: string; // Type: Hotel, Restaurant, Resort, Banquet
  capacity: number;
  priceRange: string;
  imageUrl: string;
  images?: string[];
  rating: number;
  reviews: number;
  description?: string;
  amenities?: string[];
  detailedReviews?: Review[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatarUrl: string;
}

export interface AICriteriaResponse {
  eventType: string;
  location: string;
  guestCount: number;
  vibe: string;
  budgetLevel: 'Budget' | 'Moderate' | 'Luxury';
}

export enum UserType {
  PLANNER = 'PLANNER',
  VENUE_OWNER = 'VENUE_OWNER'
}