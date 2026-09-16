export interface FestivalItem {
  id: string;
  name: string;
  hindiName?: string;
  months: string; // Display month e.g., "October / November (Kartik)"
  monthNumbers: number[]; // 1 for January, 12 for December (supports festivals spanning multiple or shifting lunar months)
  primaryStates: {
    id: string;
    name: string;
    isOriginOrHub?: boolean;
  }[];
  regionScope: 'Pan-India' | 'North' | 'South' | 'East' | 'West' | 'Northeast' | 'Central' | 'Himalayan' | 'Multi-Region';
  statesSummary: string; // e.g. "West Bengal, Odisha, Assam, Tripura & Nationwide"
  shortDescription: string;
  culturalSignificance: string;
  keyRituals: string[];
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  season?: 'Spring' | 'Summer' | 'Monsoon' | 'Autumn' | 'Winter';
  type: 'Harvest' | 'Spiritual / Religious' | 'Cultural / Folk' | 'New Year' | 'Fair & Mela' | 'Music & Dance';
  unescoIntangible?: { year: number; sharedElement?: boolean };
}
