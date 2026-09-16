# Rang-e-Bharat

Rang-e-Bharat is a React + TypeScript website for exploring Indian culture and heritage.

## Current features
- Home
- Explore India / interactive map
- States & Union Territories
- Culture
- Festivals
- Places
- Indian History timeline
- Search
- Dark/light theme

## Removed
The broken Compare, Cultural Passport, Quiz, and Guess the State/game features have been completely removed from the app, including their routes, navigation links, components, and tracking logic.

## Run locally
1. Install Node.js.
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed by Vite.

## Where to edit content
- State information: `src/data/indiaData.ts`
- Culture information: `src/data/cultureData.ts`
- Festival information: `src/data/festivalsData.ts`
- Place information: `src/data/placesData.ts`
- History information: `src/data/historyData.ts`
- Images/gallery data: `src/data/stateGalleryData.ts` and the relevant data files
- Navigation: `src/data/navigation.ts`
- Page layout/components: `src/pages/` and `src/components/`
- Global styling: `src/index.css`

## Content classification

Rang-e-Bharat uses separate classification layers instead of treating every UNESCO reference as the same tag:

- **UNESCO World Heritage**: properties currently inscribed on UNESCO's World Heritage List. India currently has 45: 37 cultural, 7 natural and 1 mixed.
- **UNESCO Tentative List**: properties on India's official UNESCO Tentative List; these are not yet World Heritage properties.
- **UNESCO Intangible Cultural Heritage (ICH)**: living traditions inscribed on UNESCO's Representative List.
- **Normal place/culture/festival categories**: the subject's actual type (fort, temple, wildlife, dance, handicraft, festival, etc.) remains separate from UNESCO status.

This prevents a forest, temple, railway, historic city, festival or dance from being incorrectly classified merely as a generic "UNESCO" category.
