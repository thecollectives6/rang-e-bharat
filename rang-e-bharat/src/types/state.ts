/**
 * Comprehensive Data Schema for Indian States & Union Territories
 */

export type IndianRegion = 
  | 'North' 
  | 'South' 
  | 'East' 
  | 'West' 
  | 'Central' 
  | 'Northeast' 
  | 'Islands';

export type TerritoryType = 'state' | 'union-territory';

export interface HeritageImage {
  id: string;
  url: string;
  title: string;
  alt: string;
  caption?: string;
  category?: 'hero' | 'food' | 'festival' | 'place' | 'monument' | 'art' | 'nature' | 'dance';
}

export interface StateGallery {
  heroImage: HeritageImage;
  foodImages: HeritageImage[];
  festivalImages: HeritageImage[];
  placeImages: HeritageImage[];
  monumentImages: HeritageImage[];
  artImages: HeritageImage[];
  natureImages: HeritageImage[];
}

export interface StateImages {
  hero?: string;
  landscape?: string;
}

export interface StateData {
  id: string; // URL-safe slug, e.g., 'rajasthan', 'kerala'
  name: string; // Official name, e.g., 'Rajasthan'
  hindiName?: string; // e.g., 'राजस्थान'
  capital: string; // e.g., 'Jaipur'
  type: TerritoryType; // 'state' or 'union-territory'
  region: IndianRegion; // 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast' | 'Islands'
  tagline: string; // e.g., 'Land of Kings and Majestic Forts'
  introduction: string; // Concise overview paragraph
  history: string; // Concise historical synopsis
  culture: string; // Cultural summary
  
  // Key Administrative & Geographical Metadata
  area?: string; // e.g., '342,239 km²'
  formation?: string; // e.g., '30 March 1949'
  famousFor?: string[]; // e.g., ['Royal Palaces', 'Thar Desert', 'Handicrafts']
  heroImage?: string;
  images?: StateImages; // Optional legacy quick image mapping
  gallery?: StateGallery; // Consistent structured image gallery with alt text and identifiers
  
  // State-level language metadata. Detailed heritage categories live in dedicated datasets.
  languages: string[];
  famousPersonalities?: string[];
  
  // Geographical & Tourism Highlights
  geography: string;
  wildlife: string[];
  nationalParks: string[];
  rivers: string[];
  interestingFacts: string[];
  bestTimeToVisit: string;
}
