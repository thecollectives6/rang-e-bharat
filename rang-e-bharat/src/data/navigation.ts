import { NavItem, HeritagePillar, SearchResultItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', name: 'Home', href: '/' },
  { id: 'explore', name: 'Explore India', href: '/explore', description: 'Interactive overview of India' },
  { id: 'culture', name: 'Culture', href: '/culture', description: 'Art, Dance, Music, Attire & Traditions' },
  { id: 'festivals', name: 'Festivals', href: '/festivals', description: 'Celebrations across religions & seasons' },
  { id: 'places', name: 'Places', href: '/places', description: 'Monuments, Temples, Forts & Landscapes' },
  { id: 'history', name: 'History', href: '/history', description: 'A Journey Through Indian History & Civilizational Timeline' },
  { id: 'about', name: 'About', href: '/about', description: 'About the Rang-e-Bharat initiative' },
];

export const HERITAGE_PILLARS: HeritagePillar[] = [
  {
    id: 'architecture',
    title: 'Monuments & Architecture',
    tag: 'Historical Wonders',
    description: 'From ancient rock-cut caves and temple spires to majestic Rajput forts and Mughal grand edifices.',
    iconName: 'Landmark',
    accentColor: 'from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  },
  {
    id: 'arts',
    title: 'Classical Arts & Dance',
    tag: 'Living Traditions',
    description: 'Bharatanatyam, Kathakali, Madhubani, Tanjore paintings, and melodious Ragas handed down through centuries.',
    iconName: 'Sparkles',
    accentColor: 'from-indigo-900/20 to-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  },
  {
    id: 'festivals',
    title: 'Vibrant Festivals',
    tag: 'Colors of Bharat',
    description: 'Diwali, Holi, Durga Puja, Eid, Pongal, Bihu, and Onam radiating unity in diversity and universal celebration.',
    iconName: 'Flame',
    accentColor: 'from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  },
  {
    id: 'cuisine',
    title: 'Culinary Traditions',
    tag: 'Rich Flavors & Spices',
    description: 'An extraordinary tapestry of indigenous spices, regional cooking philosophies, and time-honored Ayurveda.',
    iconName: 'Utensils',
    accentColor: 'from-emerald-600/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  },
];

export const SEARCHABLE_ITEMS: SearchResultItem[] = [
  {
    id: 'taj-mahal',
    title: 'Taj Mahal & Mughal Architecture',
    category: 'Places & Monuments',
    description: 'UNESCO World Heritage Site in Agra, iconic symbol of enduring architectural mastery.',
    path: '/places',
  },
  {
    id: 'classical-dance',
    title: '8 Classical Dance Forms of India',
    category: 'Culture & Arts',
    description: 'Bharatanatyam, Kathak, Kathakali, Odissi, Manipuri, Mohiniyattam, Kuchipudi, and Sattriya.',
    path: '/culture',
  },
  {
    id: 'diwali-holi',
    title: 'Diwali & Holi Celebrations',
    category: 'Festivals',
    description: 'The triumph of light over darkness and the jubilant festival of spring colors.',
    path: '/festivals',
  },
  {
    id: 'rajasthan-forts',
    title: 'Hill Forts of Rajasthan',
    category: 'States & Heritage',
    description: 'Chittorgarh, Kumbhalgarh, Amer, and Jaisalmer showcasing royal Rajput valor.',
    path: '/places',
  },
  {
    id: 'yoga-ayurveda',
    title: 'Yoga, Ayurveda & Vedic Philosophy',
    category: 'Traditions',
    description: 'Ancient Indian wellness traditions and holistic approaches to life and mindfulness.',
    path: '/culture',
  },
  {
    id: 'indian-history-timeline',
    title: 'A Journey Through Indian History — Interactive Timeline',
    category: 'History & Civilization',
    description: 'Explore 12 major historical eras from the Indus Valley Civilization and Vedic Period to the Mauryas, Guptas, Mughals, Freedom Movement, and Modern India.',
    path: '/history',
  },
];
