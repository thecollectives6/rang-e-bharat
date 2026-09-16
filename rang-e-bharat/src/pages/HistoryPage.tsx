import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { INDIAN_HISTORICAL_PERIODS, getHistoricalPeriodById } from '../data/historyData';
import { HistoryEraCategory } from '../types/history';
import { TimelineTrack } from '../components/history/TimelineTrack';
import { PeriodDetailCard } from '../components/history/PeriodDetailCard';
import {
  Scroll,
  Search,
  SlidersHorizontal,
  Calendar,
  Sparkles,
  MapPin,
  Users,
  Palette,
  Landmark,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Clock,
  Compass,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const CATEGORY_OPTIONS: { id: HistoryEraCategory | 'all'; label: string; count: number }[] = [
  { id: 'all', label: 'All Eras (12)', count: 12 },
  { id: 'ancient', label: 'Ancient (3)', count: 3 },
  { id: 'classical', label: 'Classical (2)', count: 2 },
  { id: 'medieval', label: 'Medieval (1)', count: 1 },
  { id: 'early-modern', label: 'Early Modern (2)', count: 2 },
  { id: 'colonial', label: 'Colonial & Freedom (2)', count: 2 },
  { id: 'modern', label: 'Republic & Modern (2)', count: 2 },
];

export const HistoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialEraId = searchParams.get('era') || INDIAN_HISTORICAL_PERIODS[0].id;

  const [selectedPeriodId, setSelectedPeriodId] = React.useState<string>(initialEraId);
  const [selectedCategory, setSelectedCategory] = React.useState<HistoryEraCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Sync state if URL query changes
  React.useEffect(() => {
    const eraFromUrl = searchParams.get('era');
    if (eraFromUrl && INDIAN_HISTORICAL_PERIODS.some((p) => p.id === eraFromUrl)) {
      setSelectedPeriodId(eraFromUrl);
    }
  }, [searchParams]);

  // Update URL on period selection
  const handleSelectPeriod = (id: string) => {
    setSelectedPeriodId(id);
    setSearchParams({ era: id }, { replace: true });
  };

  // Filter periods based on category and search query
  const filteredPeriods = React.useMemo(() => {
    return INDIAN_HISTORICAL_PERIODS.filter((p) => {
      const matchesCat =
        selectedCategory === 'all' ||
        (selectedCategory === 'colonial' && (p.category === 'colonial' || p.id === 'independence-movement')) ||
        (selectedCategory === 'modern' && p.category === 'modern') ||
        p.category === selectedCategory;

      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchName = p.period.toLowerCase().includes(q) || (p.hindiName && p.hindiName.toLowerCase().includes(q));
      const matchSummary = p.shortSummary.toLowerCase().includes(q);
      const matchFigures = p.importantFigures.some(
        (f) => f.name.toLowerCase().includes(q) || f.role.toLowerCase().includes(q)
      );
      const matchPlaces = p.importantPlaces.some(
        (pl) => pl.name.toLowerCase().includes(q) || pl.location.toLowerCase().includes(q)
      );
      const matchThemes = p.keyThemes.some((t) => t.toLowerCase().includes(q));
      const matchDevs = p.majorDevelopments.some((d) => d.toLowerCase().includes(q));

      return matchName || matchSummary || matchFigures || matchPlaces || matchThemes || matchDevs;
    });
  }, [selectedCategory, searchQuery]);

  const activePeriod =
    getHistoricalPeriodById(selectedPeriodId) ||
    filteredPeriods[0] ||
    INDIAN_HISTORICAL_PERIODS[0];


  return (
    <div className="min-h-screen bg-stone-50 py-8 text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Hero Header */}
        <header className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent p-6 text-center sm:p-10 lg:p-12 dark:border-stone-800 dark:from-amber-950/30">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 dark:border-amber-700/60 dark:bg-amber-950/80 dark:text-amber-300 shadow-2xs">
            <Scroll className="h-3.5 w-3.5" />
            <span>5,000+ Years of Civilizational Heritage</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl md:text-5xl dark:text-stone-100">
            A Journey Through Indian History
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base md:text-lg dark:text-stone-300">
            Explore the continuous stream of Indian civilization—from the urban grid marvels of the Indus Valley and the metaphysical wisdom of the Upanishads to the monumental classical empires, regional kingdoms, freedom struggle, and the modern republic.
          </p>

          {/* Quick Stats / Highlights Pill Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
            <span className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 dark:border-stone-800 dark:bg-stone-900/80 shadow-2xs">
              🏛️ 12 Core Historical Epochs
            </span>
            <span className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 dark:border-stone-800 dark:bg-stone-900/80 shadow-2xs">
              📜 50+ Great Thinkers & Leaders
            </span>
            <span className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 dark:border-stone-800 dark:bg-stone-900/80 shadow-2xs">
              🏺 60+ Archaeological Marvels
            </span>
            <span className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 dark:border-stone-800 dark:bg-stone-900/80 shadow-2xs">
              ⚖️ Grounded Historical Accuracy
            </span>
          </div>
        </header>

        {/* Search, Filter & View Controls */}
        <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                id="history-search-input"
                aria-label="Search Indian historical era, historical figure, place, or key theme"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search era, person (Aryabhata, Ashoka, Shivaji), place (Lothal, Hampi), or theme (Zero, Navy, Satyagraha)..."
                className="w-full rounded-xl border border-stone-300 bg-stone-50/70 py-2.5 pl-10 pr-4 text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800/60 dark:text-stone-100 sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

          {/* Era Category Filter Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-stone-100 dark:border-stone-800/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mr-1">
              Era Filter:
            </span>
            {CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* View Mode: Interactive Explorer (Timeline Navigator + Active Era Card) */}
        <div className="space-y-6">
            {/* Interactive Timeline Track */}
            <TimelineTrack
              periods={INDIAN_HISTORICAL_PERIODS}
              selectedPeriodId={activePeriod.id}
              onSelectPeriod={handleSelectPeriod}
              filterEra={selectedCategory}
            />

            {/* Selected Period Detail Card */}
            {activePeriod ? (
              <PeriodDetailCard
                period={activePeriod}
                              />
            ) : (
              <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900">
                <p className="text-stone-500">No historical period matches your search filter.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 inline-flex items-center rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        {/* Historical Insight & Civilizational Continuity Footnote */}
        <section className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 dark:border-stone-800 dark:bg-stone-900">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 sm:text-lg">
                  Civilizational Continuity & Historical Rigor
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-stone-400 sm:text-sm">
                  Indian history is recognized by global historiographers for its unbroken civilizational continuity. Epics, mathematical principles, philosophical inquiries, and artistic aesthetics developed millennia ago continue to be actively practiced, studied, and celebrated in contemporary daily life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};
