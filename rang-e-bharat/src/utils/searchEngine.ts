import { getAllStates } from '../data/indiaData';
import { ALL_CULTURE_DATA } from '../data/cultureData';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { PLACES_DATA } from '../data/placesData';

export type SearchCategory =
  | 'State'
  | 'Union Territory'
  | 'City & Capital'
  | 'Monument'
  | 'Famous Place'
  | 'Festival'
  | 'Food & Cuisine'
  | 'Dance Form'
  | 'Art & Craft'
  | 'Cultural Topic'
  | 'Nature & Wildlife';

export interface SearchResultItem {
  id: string;
  title: string;
  displayTitle: string;
  descriptionSnippet?: string;
  subtitle: string;
  stateName: string;
  stateId: string;
  category: SearchCategory;
  categorySlug: string;
  path: string;
  tagline?: string;
  keywords: string[];
}

let cachedSearchIndex: SearchResultItem[] | null = null;

// Classical cultural origin boosts for primary authentic representations
const PRIMARY_ORIGIN_BOOSTS: Record<string, string> = {
  bharatanatyam: 'tamil-nadu',
  kathakali: 'kerala',
  mohiniyattam: 'kerala',
  kuchipudi: 'andhra-pradesh',
  odissi: 'odisha',
  kathak: 'uttar-pradesh',
  sattriya: 'assam',
  manipuri: 'manipur',
  chhau: 'west-bengal',
  ghoomar: 'rajasthan',
  garba: 'gujarat',
  bhangra: 'punjab',
  gidda: 'punjab',
  lavani: 'maharashtra',
  rouf: 'jammu-and-kashmir',
  bihu: 'assam',
  'taj mahal': 'uttar-pradesh',
  'durga puja': 'west-bengal',
  'dal baati': 'rajasthan',
  'litti chokha': 'bihar',
  madhubani: 'bihar',
  warli: 'maharashtra',
  pattachitra: 'odisha',
  tanjore: 'tamil-nadu',
  'hawa mahal': 'rajasthan',
  khajuraho: 'madhya-pradesh',
  'konark sun temple': 'odisha',
  'golden temple': 'punjab',
  'qutub minar': 'delhi',
  'red fort': 'delhi',
  'charminar': 'telangana',
  'meenakshi': 'tamil-nadu',
  'hampi': 'karnataka',
  'victoria memorial': 'west-bengal',
  'ajanta': 'maharashtra',
  'ellora': 'maharashtra',
  'gateway of india': 'maharashtra',
  'pangong': 'ladakh',
  'dal lake': 'jammu-and-kashmir',
  'kaziranga': 'assam',
  'sundarbans': 'west-bengal',
  'gir': 'gujarat',
};

/**
 * Builds a comprehensive search index from the centralized Indian States dataset.
 * Ensures zero duplication and immediate client-side query performance.
 */
export function getSearchIndex(): SearchResultItem[] {
  if (cachedSearchIndex) return cachedSearchIndex;

  const items: SearchResultItem[] = [];
  const seenIds = new Set<string>();
  const addItem = (item: SearchResultItem) => {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      items.push(item);
    }
  };

  // States and capitals remain first-class searchable entities.
  for (const state of getAllStates()) {
    const isUT = state.type === 'union-territory';
    const category: SearchCategory = isUT ? 'Union Territory' : 'State';
    addItem({
      id: `state-${state.id}`,
      title: state.name,
      displayTitle: state.name,
      descriptionSnippet: state.introduction,
      subtitle: `${state.capital} • ${state.region} India`,
      stateName: state.name,
      stateId: state.id,
      category,
      categorySlug: isUT ? 'union-territory' : 'state',
      path: `/states/${state.id}#overview`,
      tagline: state.tagline,
      keywords: [state.name.toLowerCase(), state.capital.toLowerCase(), state.region.toLowerCase(), 'india', 'bharat'],
    });
  }

  // Detailed culture records only. No state-array placeholders.
  for (const item of ALL_CULTURE_DATA) {
    const categoryMap: Record<string, SearchCategory> = {
      Dance: 'Dance Form',
      Music: 'Cultural Topic',
      Art: 'Art & Craft',
      Handicrafts: 'Art & Craft',
      Clothing: 'Art & Craft',
      Food: 'Food & Cuisine',
      Festivals: 'Festival',
      Architecture: 'Monument',
      Languages: 'Cultural Topic',
      Traditions: 'Cultural Topic',
    };
    addItem({
      id: `culture-${item.id}`,
      title: item.name,
      displayTitle: item.name,
      descriptionSnippet: item.shortDescription,
      subtitle: `${item.stateName} • ${item.category}`,
      stateName: item.stateName,
      stateId: item.stateId,
      category: categoryMap[item.category] || 'Cultural Topic',
      categorySlug: item.category.toLowerCase(),
      path: `/culture?q=${encodeURIComponent(item.name)}`,
      keywords: [item.name.toLowerCase(), item.category.toLowerCase(), item.stateName.toLowerCase(), item.shortDescription.toLowerCase(), ...item.keyAttributes.map((x) => x.toLowerCase())],
    });
  }

  // Detailed festival records only.
  for (const festival of FESTIVALS_DATA) {
    const state = festival.primaryStates[0];
    const stateId = state?.id || 'all-india';
    const stateName = state?.name || 'India';
    addItem({
      id: `festival-${festival.id}`,
      title: festival.name,
      displayTitle: festival.name,
      descriptionSnippet: festival.shortDescription,
      subtitle: `${festival.months} • ${festival.statesSummary}`,
      stateName,
      stateId,
      category: 'Festival',
      categorySlug: 'festival',
      path: `/festivals?q=${encodeURIComponent(festival.name)}`,
      keywords: [festival.name.toLowerCase(), festival.type.toLowerCase(), festival.statesSummary.toLowerCase(), ...festival.keyRituals.map((x) => x.toLowerCase())],
    });
  }

  // Detailed place records only, including UNESCO classification from the place record.
  for (const place of PLACES_DATA) {
    const isMonument = ['Monument', 'Fort', 'Palace', 'Temple', 'Archaeological Site', 'Heritage Ensemble', 'Railway'].includes(place.category) || place.unescoStatus === 'World Heritage';
    addItem({
      id: `place-${place.id}`,
      title: place.name,
      displayTitle: place.name,
      descriptionSnippet: place.shortDescription,
      subtitle: `${place.location}, ${place.stateName} • ${place.category}`,
      stateName: place.stateName,
      stateId: place.stateId,
      category: isMonument ? 'Monument' : 'Famous Place',
      categorySlug: isMonument ? 'monument' : 'place',
      path: `/places?q=${encodeURIComponent(place.name)}`,
      keywords: [place.name.toLowerCase(), place.location.toLowerCase(), place.stateName.toLowerCase(), place.category.toLowerCase(), place.shortDescription.toLowerCase(), ...(place.unescoStatus ? ['unesco', 'world heritage'] : [])],
    });
  }

  cachedSearchIndex = items;
  return items;
}

/**
 * Searches the Indian heritage database with multi-field scoring and relevance ranking.
 * Perfect for real-time keystroke queries like "taj mahal", "bharatanatyam", "kerala", etc.
 */
export function searchHeritage(query: string, limit = 25): SearchResultItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return [];
  }

  const index = getSearchIndex();
  const searchTerms = trimmed.split(/\s+/).filter(Boolean);

  const scoredResults: { item: SearchResultItem; score: number }[] = [];

  for (const item of index) {
    const displayLower = item.displayTitle.toLowerCase();
    const titleLower = item.title.toLowerCase();
    const stateNameLower = item.stateName.toLowerCase();
    const subtitleLower = item.subtitle.toLowerCase();

    let score = 0;

    // Exact display title match gets highest priority
    if (displayLower === trimmed) {
      score += 2000;
    } else if (displayLower.startsWith(trimmed)) {
      score += 1000;
    } else if (displayLower.includes(trimmed)) {
      score += 500;
    } else if (titleLower.startsWith(trimmed)) {
      score += 400;
    } else if (titleLower.includes(trimmed)) {
      score += 250;
    }

    // Exact state match
    if (stateNameLower === trimmed) {
      score += 600;
    } else if (stateNameLower.startsWith(trimmed)) {
      score += 300;
    } else if (stateNameLower.includes(trimmed)) {
      score += 120;
    }

    // Subtitle match
    if (subtitleLower.includes(trimmed)) {
      score += 80;
    }

    // Term-by-term matching across keywords
    let allTermsMatch = true;
    for (const term of searchTerms) {
      let termMatched = false;

      if (displayLower.includes(term)) {
        score += 80;
        termMatched = true;
      } else if (titleLower.includes(term)) {
        score += 50;
        termMatched = true;
      } else if (stateNameLower.includes(term)) {
        score += 40;
        termMatched = true;
      } else if (subtitleLower.includes(term)) {
        score += 20;
        termMatched = true;
      } else if (item.keywords.some((kw) => kw.includes(term))) {
        score += 15;
        termMatched = true;
      }

      if (!termMatched) {
        allTermsMatch = false;
      }
    }

    // If query has multiple terms and all matched, give a bonus
    if (searchTerms.length > 1 && allTermsMatch) {
      score += 150;
    }

    // Classical origin boost
    for (const [key, stateSlug] of Object.entries(PRIMARY_ORIGIN_BOOSTS)) {
      if (trimmed.includes(key) && item.stateId === stateSlug) {
        score += 800;
      }
    }

    if (score > 0) {
      // Prioritize State/UT when user explicitly searches state name
      if ((item.categorySlug === 'state' || item.categorySlug === 'ut') && displayLower === trimmed) {
        score += 1500;
      }

      scoredResults.push({ item, score });
    }
  }

  // Sort by score descending, then by display title length (shorter first), then alphabetical
  scoredResults.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (a.item.displayTitle.length !== b.item.displayTitle.length) {
      return a.item.displayTitle.length - b.item.displayTitle.length;
    }
    return a.item.displayTitle.localeCompare(b.item.displayTitle);
  });

  return scoredResults.slice(0, limit).map((res) => res.item);
}

/**
 * Suggested popular searches for empty states
 */
export const POPULAR_HERITAGE_SUGGESTIONS = [
  { term: 'Taj Mahal', category: 'Monument', state: 'Uttar Pradesh' },
  { term: 'Bharatanatyam', category: 'Dance Form', state: 'Tamil Nadu' },
  { term: 'Kerala', category: 'State', state: "God's Own Country" },
  { term: 'Durga Puja', category: 'Festival', state: 'West Bengal' },
  { term: 'Dal Baati Churma', category: 'Food', state: 'Rajasthan' },
  { term: 'Kathakali', category: 'Dance Form', state: 'Kerala' },
  { term: 'Madhubani Painting', category: 'Art & Craft', state: 'Bihar' },
  { term: 'Ladakh', category: 'Union Territory', state: 'Land of High Passes' },
  { term: 'Pangong Lake', category: 'Famous Place', state: 'Ladakh' },
  { term: 'Bihu', category: 'Festival', state: 'Assam' },
  { term: 'Hawa Mahal', category: 'Monument', state: 'Rajasthan' },
  { term: 'Khajuraho Temples', category: 'Monument', state: 'Madhya Pradesh' },
];
