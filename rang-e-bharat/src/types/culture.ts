import { IndianRegion } from './state';

export type CultureCategory =
  | 'Dance'
  | 'Music'
  | 'Art'
  | 'Handicrafts'
  | 'Clothing'
  | 'Food'
  | 'Festivals'
  | 'Architecture'
  | 'Languages'
  | 'Traditions';

export interface CultureCategoryMeta {
  id: CultureCategory;
  name: string;
  hindiName: string;
  iconName: string;
  wingName: string;
  curatorDescription: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}

export interface CultureItem {
  id: string;
  name: string;
  hindiName?: string;
  category: CultureCategory;
  stateId: string;
  stateName: string;
  region: IndianRegion;
  shortDescription: string;
  detailedDescription: string;
  culturalSignificance: string;
  historicalEra?: string;
  originTradition?: string;
  materialsOrStyle?: string;
  keyAttributes: string[];
  curatorNotes: string;
  museumGalleryWing: string;
  imageUrl: string;
  imageAlt?: string;
  audioVisualCue?: string;
  relatedStateIds?: string[];
  isFeatured?: boolean;
  unescoIntangible?: { year: number; sharedElement?: boolean };
  unescoStatus?: 'Intangible Cultural Heritage' | 'Tentative World Heritage';
}
