import { CategoryCard, WhyFeatureCard, CulturalFact } from '../types';

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: 'history',
    emoji: '🏛',
    title: 'History',
    description: 'Ancient Indus Valley civilisations, Vedic philosophy, royal dynasties, freedom movement, and the monumental milestones that shaped modern Bharat.',
    path: '/history',
    accentBg: 'from-amber-500/15 to-orange-500/5 dark:from-amber-950/40 dark:to-stone-900',
    accentText: 'text-amber-700 dark:text-amber-400',
    badge: 'Ancient to Modern',
  },
  {
    id: 'festivals',
    emoji: '🎉',
    title: 'Festivals',
    description: 'Vibrant celebrations of seasons, faith, lights, colors, and harvests uniting diverse communities across every month of the year.',
    path: '/festivals',
    accentBg: 'from-rose-500/15 to-pink-500/5 dark:from-rose-950/40 dark:to-stone-900',
    accentText: 'text-rose-700 dark:text-rose-400',
    badge: 'Color & Joy',
  },
  {
    id: 'nature-wildlife',
    emoji: '🏔',
    title: 'Nature & Wildlife',
    description: 'Majestic Royal Bengal tigers, sacred river valleys, snow-crowned Himalayan peaks, and biodiverse Western Ghats sanctuaries.',
    path: '/places',
    accentBg: 'from-emerald-500/15 to-teal-500/5 dark:from-emerald-950/40 dark:to-stone-900',
    accentText: 'text-emerald-700 dark:text-emerald-400',
    badge: 'Flora & Fauna',
  },
];

export const WHY_FEATURES: WhyFeatureCard[] = [
  {
    id: 'learn',
    title: 'Learn',
    subtitle: 'Deep Knowledge Archive',
    description: "Discover India's history and traditions through well-curated narratives, chronological timelines, and cultural origins.",
    iconName: 'GraduationCap',
    colorTheme: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30',
  },
  {
    id: 'explore',
    title: 'Explore',
    subtitle: 'Geographic & Architectural Marvels',
    description: 'Discover places, monuments and natural wonders across 28 states, 8 Union Territories, and 45 UNESCO World Heritage properties.',
    iconName: 'Compass',
    colorTheme: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/30',
  },
  {
    id: 'experience',
    title: 'Experience',
    subtitle: 'Sensory & Living Traditions',
    description: 'Explore food, festivals, music, art and everyday culture that bring people together in spirited celebration.',
    iconName: 'Sparkles',
    colorTheme: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  },
];

export const CULTURAL_FACTS: CulturalFact[] = [
  {
    id: 1,
    title: 'World’s Oldest Living Continuously Inhabited City',
    fact: 'Varanasi (Kashi) in Uttar Pradesh is regarded as one of the oldest continuously inhabited cities in the world, with documented civilizational roots exceeding 3,000 years along the sacred Ganges.',
    category: 'Sacred Heritage',
    region: 'Uttar Pradesh, North India',
    icon: 'Landmark',
  },
  {
    id: 2,
    title: 'The Great Architectural Wonder Carved From Top to Bottom',
    fact: 'The monolithic Kailasa Temple (Cave 16) at Ellora was carved entirely out of a single gigantic basalt rock cliff, chiseling from the top downwards. Over 200,000 tonnes of rock were excavated with breathtaking precision.',
    category: 'Architecture',
    region: 'Maharashtra, West India',
    icon: 'Landmark',
  },
  {
    id: 3,
    title: 'Living Root Bridges of Meghalaya',
    fact: 'In the lush rainforests of Cherrapunji and Mawlynnong, Khasi and Jaintia tribes guide the living aerial roots of the Ficus elastica tree across rivers, growing natural bridges that become stronger over centuries.',
    category: 'Living Heritage',
    region: 'Meghalaya, Northeast India',
    icon: 'Trees',
  },
  {
    id: 4,
    title: 'Birthplace of Mathematical Zero and Chess',
    fact: 'India gifted the world the concept of Zero (Shunya) formalized by Aryabhata and Brahmagupta, as well as Chaturanga, the ancient 6th-century precursor to modern chess.',
    category: 'Science & Thought',
    region: 'Ancient Bharat',
    icon: 'Brain',
  },
  {
    id: 5,
    title: 'The World’s Only Floating Post Office',
    fact: 'India operates the world’s largest postal network with over 155,000 post offices, including an iconic floating post office situated on a traditional houseboat on Dal Lake in Srinagar.',
    category: 'Unique Traditions',
    region: 'Jammu & Kashmir',
    icon: 'Mail',
  },
  {
    id: 6,
    title: 'Kumbh Mela: Human Gathering Visible from Space',
    fact: 'The Maha Kumbh Mela, recognized by UNESCO as Intangible Cultural Heritage, is the largest peaceful congregation of pilgrims on Earth, with gatherings so massive they are distinctly visible from satellite imagery.',
    category: 'Festivals',
    region: 'Prayagraj / Haridwar / Ujjain / Nashik',
    icon: 'Flame',
  },
  {
    id: 7,
    title: 'Linguistic Universe: 19,500+ Mother Tongues',
    fact: 'India has 22 officially recognized constitutional languages and over 19,500 spoken mother tongues, written across multiple indigenous phonetic scripts derived from ancient Brahmi.',
    category: 'Language & Literature',
    region: 'Pan-India',
    icon: 'BookOpen',
  },
  {
    id: 8,
    title: 'The World’s Highest Rail Arch Bridge',
    fact: 'The Chenab Bridge in the Reasi district of Jammu and Kashmir spans 359 meters (1,178 ft) above the riverbed—making it 35 meters taller than Paris’s Eiffel Tower.',
    category: 'Engineering & Marvels',
    region: 'Jammu & Kashmir',
    icon: 'TrendingUp',
  },
];

export const STATES_PREVIEW_LIST = [
  { name: 'Rajasthan', tag: 'Land of Forts & Palaces', color: 'from-amber-600 to-orange-500' },
  { name: 'Kerala', tag: "God's Own Country & Backwaters", color: 'from-emerald-600 to-teal-500' },
  { name: 'West Bengal', tag: 'Culture, Literature & Durga Puja', color: 'from-rose-600 to-pink-500' },
  { name: 'Tamil Nadu', tag: 'Dravidian Temples & Classical Art', color: 'from-blue-600 to-indigo-500' },
  { name: 'Assam', tag: 'Tea Gardens, Rhinos & Bihu Dance', color: 'from-green-600 to-emerald-500' },
  { name: 'Punjab', tag: 'Golden Temple & Vibrant Bhangra', color: 'from-yellow-600 to-amber-500' },
  { name: 'Gujarat', tag: 'White Rann, Garba & Heritage Cities', color: 'from-orange-600 to-red-500' },
  { name: 'Ladakh', tag: 'High Mountain Passes & Monasteries', color: 'from-cyan-600 to-blue-500' },
];
