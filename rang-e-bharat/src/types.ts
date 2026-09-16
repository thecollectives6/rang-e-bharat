/**
 * Type definitions for Rang-e-Bharat
 */

export interface NavItem {
  id: string;
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface HeritagePillar {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconName: string;
  accentColor: string; // e.g. saffron, navy, emerald, gold
}

export interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  description: string;
  path: string;
}

export type ThemeMode = 'dark';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export interface CategoryCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
  path: string;
  accentBg: string;
  accentText: string;
  badge: string;
}

export interface WhyFeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  colorTheme: string;
}

export interface CulturalFact {
  id: number;
  title: string;
  fact: string;
  category: string;
  region: string;
  icon: string;
}

export * from './types/state';

