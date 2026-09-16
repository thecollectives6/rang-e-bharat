/**
 * Type definitions for Famous Places of India
 */

export type PlaceCategory =
  | 'Fort'
  | 'Palace'
  | 'Temple'
  | 'Monument'
  | 'Beach'
  | 'Hill Station'
  | 'Wildlife'
  | 'Archaeological Site'
  | 'Historic City'
  | 'Railway'
  | 'Heritage Ensemble'
  | 'Museum'
  | 'Natural Wonder';

export interface PlaceItem {
  id: string;
  name: string;
  hindiName?: string;
  stateId: string;
  stateName: string;
  location: string; // City / District / Area (e.g., 'Agra', 'Jodhpur', 'Hampi, Bellary')
  category: PlaceCategory;
  isUnescoSite?: boolean;
  unescoType?: 'Cultural' | 'Natural' | 'Mixed';
  unescoYear?: string;
  unescoStatus?: 'World Heritage' | 'Tentative List';
  shortDescription: string;
  historicalSignificance: string;
  bestTimeToVisit: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
  builtByOrEra?: string;
  architecturalStyle?: string;
}

export interface PlaceCategoryOption {
  value: PlaceCategory | 'UNESCO World Heritage' | 'all';
  label: string;
  iconName?: string;
}
