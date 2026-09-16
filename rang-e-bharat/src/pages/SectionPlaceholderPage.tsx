import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Compass, MapPin, Sparkles, Flame, Landmark, HelpCircle, Info, ArrowLeft } from 'lucide-react';

export const SectionPlaceholderPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const getSectionDetails = () => {
    switch (path) {
      case 'explore':
        return {
          title: 'Explore India',
          hindiTitle: 'भारत दर्शन',
          tagline: 'Comprehensive Overview of Indian Heritage & Geography',
          icon: <Compass className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
          description:
            'Interactive overview featuring the geographic zones of India: Northern Himalayas, Gangetic Plains, Deccan Plateau, Western Ghats, Coastal Belts, and North-Eastern Paradise.',
          phase: 'Phase 2: Interactive Exploration & Maps',
        };
      case 'states':
        return {
          title: 'States & Union Territories',
          hindiTitle: 'राज्य एवं केन्द्र-शासित प्रदेश',
          tagline: '28 States and 8 Union Territories',
          icon: <MapPin className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
          description:
            'Dedicated state profiles detailing capitals, state symbols, historical roots, traditional attire, languages, regional dance, and cultural icons.',
          phase: 'Phase 3: State by State Deep Dive',
        };
      case 'culture':
        return {
          title: 'Culture & Traditions',
          hindiTitle: 'संस्कृति एवं परम्परा',
          tagline: 'Art, Classical Dance, Music, Attire & Philosophy',
          icon: <Sparkles className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
          description:
            'Exploring Bharatanatyam, Kathak, classical ragas, folk instruments, Madhubani and Warli art, handloom weaves, and ancient philosophy.',
          phase: 'Phase 4: Cultural Heritage Library',
        };
      case 'festivals':
        return {
          title: 'Festivals of Bharat',
          hindiTitle: 'त्यौहार एवं उत्सव',
          tagline: 'Celebrations of Seasons, Faith & Harvest',
          icon: <Flame className="h-8 w-8 text-rose-600 dark:text-rose-400" />,
          description:
            'From Diwali, Holi, and Durga Puja to Bihu, Pongal, Onam, Eid, Gurpurab, and Christmas—celebrating the vibrancy of shared joy.',
          phase: 'Phase 5: Festive Calendar & Rituals',
        };
      case 'places':
        return {
          title: 'Historical Places & Monuments',
          hindiTitle: 'ऐतिहासिक स्थल एवं स्मारक',
          tagline: 'UNESCO World Heritage, Forts, Temples & Natural Wonders',
          icon: <Landmark className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
          description:
            'Rock-cut caves of Ajanta & Ellora, Brihadisvara Temple, Taj Mahal, Qutb Minar, Hampi ruins, and majestic Rajput hill forts.',
          phase: 'Phase 6: Monuments & Sacred Geography',
        };
      case 'about':
        return {
          title: 'About Rang-e-Bharat',
          hindiTitle: 'हमारे बारे में',
          tagline: 'Our Mission to Celebrate and Preserve Indian Heritage',
          icon: <Info className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
          description:
            'Rang-e-Bharat is an educational, interactive platform designed to make India\'s multifaceted heritage accessible, inspiring, and engaging for learners and explorers globally.',
          phase: 'Foundational Mission & Project Overview',
        };
      default:
        return {
          title: 'Cultural Portal',
          hindiTitle: 'रंग-ए-भारत',
          tagline: 'Explore India',
          icon: <Compass className="h-8 w-8 text-amber-600" />,
          description: 'Exploring the rich culture, history, and traditions of India.',
          phase: 'Phase 1: Initial Foundation',
        };
    }
  };

  const details = getSectionDetails();

  return (
    <div id="section-placeholder-container" className="flex-1 py-16 sm:py-24 bg-mandala-pattern">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-amber-200/80 bg-stone-50/90 p-8 sm:p-12 shadow-xl backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/90">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-b border-amber-200/50 pb-8 dark:border-stone-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30">
              {details.icon}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
                  {details.title}
                </h1>
                <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-serif font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {details.hindiTitle}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-amber-700 dark:text-amber-400">
                {details.tagline}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {details.description}
            </p>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 dark:border-stone-700 dark:bg-stone-950/60">
              <div className="flex items-center gap-2 font-serif text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">
                <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Roadmap Status: {details.phase}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                As per Phase 1 design specifications, the foundational layout, navigation, and theme are initialized. Full feature data, interactive maps, and state registries will be progressively loaded in upcoming phases.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-amber-500 hover:to-orange-500"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
