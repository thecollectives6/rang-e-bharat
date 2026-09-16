export type HistoryEraCategory =
  | 'ancient'
  | 'classical'
  | 'medieval'
  | 'early-modern'
  | 'colonial'
  | 'modern';

export interface HistoricalFigure {
  name: string;
  role: string;
  description: string;
}

export interface HistoricalPlace {
  name: string;
  location: string;
  significance: string;
}

export interface HistoricalPeriod {
  id: string;
  order: number;
  period: string;
  hindiName?: string;
  category: HistoryEraCategory;
  approximateDates: string;
  shortSummary: string;
  tagline: string;
  majorDevelopments: string[];
  importantPlaces: HistoricalPlace[];
  importantFigures: HistoricalFigure[];
  culturalContributions: string[];
  keyArtifactsOrMonuments: string[];
  historicalNuance: string; // Explains complex nuances and avoids oversimplification
  heroImage: string;
  imageCaption: string;
  relatedStateIds?: string[];
  keyThemes: string[];
}
