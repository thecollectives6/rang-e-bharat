import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Search,
  X,
  ChevronDown,
  MapPin,
  Sparkles,
  Calendar,
  Award,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Landmark,
  Shield,
  Crown,
  Flame,
  Waves,
  Mountain,
  Trees,
  Building,
} from 'lucide-react';
import { PLACES_DATA, PLACE_CATEGORIES } from '../data/placesData';
import { INDIA_STATES_DATA } from '../data/indiaData';
import { PlaceItem, PlaceCategory } from '../types/place';
import { PlaceCard, getCategoryIcon, getCategoryColor } from '../components/PlaceCard';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const PlacesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query state
  const initialSearch = searchParams.get('q') || '';
  const initialCategory = (searchParams.get('category') as PlaceCategory | 'UNESCO World Heritage' | 'all') || 'all';
  const initialState = searchParams.get('state') || 'all';

  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory | 'UNESCO World Heritage' | 'all'>(initialCategory);
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedPlaceModal, setSelectedPlaceModal] = useState<PlaceItem | null>(null);

  // Sync state changes with URL query parameters for shareability
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery.trim()) params.q = searchQuery.trim();
    if (selectedCategory !== 'all') params.category = selectedCategory;
    if (selectedState !== 'all') params.state = selectedState;
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedCategory, selectedState, setSearchParams]);

  // Escape key handler for place modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPlaceModal) {
        setSelectedPlaceModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPlaceModal]);

  // Body scroll lock when place modal is open
  useEffect(() => {
    if (selectedPlaceModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPlaceModal]);

  // Unique list of all 28 states and 8 UTs sorted alphabetically
  const stateOptions = useMemo(() => {
    return [...INDIA_STATES_DATA]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ id: s.id, name: s.name, type: s.type }));
  }, []);

  // Filtered places calculation
  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter((place) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = place.name.toLowerCase().includes(q);
        const matchesHindi = place.hindiName?.toLowerCase().includes(q);
        const matchesLocation = place.location.toLowerCase().includes(q);
        const matchesState = place.stateName.toLowerCase().includes(q);
        const matchesDesc = place.shortDescription.toLowerCase().includes(q);
        const matchesHist = place.historicalSignificance.toLowerCase().includes(q);
        const matchesEra = place.builtByOrEra?.toLowerCase().includes(q);
        const matchesStyle = place.architecturalStyle?.toLowerCase().includes(q);
        const matchesHighlights = place.highlights.some((h) => h.toLowerCase().includes(q));

        if (
          !matchesName &&
          !matchesHindi &&
          !matchesLocation &&
          !matchesState &&
          !matchesDesc &&
          !matchesHist &&
          !matchesEra &&
          !matchesStyle &&
          !matchesHighlights
        ) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'UNESCO World Heritage') {
          if (place.unescoStatus !== 'World Heritage') return false;
        } else if (place.category !== selectedCategory) {
          return false;
        }
      }

      // 3. State Filter
      if (selectedState !== 'all') {
        if (place.stateId !== selectedState) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedState]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all' || selectedState !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('all');
  };

  // Helper for category icon in filter bar
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-3.5 w-3.5" />;
      case 'Crown':
        return <Crown className="h-3.5 w-3.5" />;
      case 'Flame':
        return <Flame className="h-3.5 w-3.5" />;
      case 'Landmark':
        return <Landmark className="h-3.5 w-3.5" />;
      case 'Waves':
        return <Waves className="h-3.5 w-3.5" />;
      case 'Mountain':
        return <Mountain className="h-3.5 w-3.5" />;
      case 'Trees':
        return <Trees className="h-3.5 w-3.5" />;
      case 'Award':
        return <Award className="h-3.5 w-3.5" />;
      case 'Building':
        return <Building className="h-3.5 w-3.5" />;
      case 'Sparkles':
        return <Sparkles className="h-3.5 w-3.5" />;
      default:
        return <Compass className="h-3.5 w-3.5" />;
    }
  };

  return (
    <div id="famous-places-page" className="min-h-screen bg-stone-50/60 dark:bg-stone-950">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-amber-200/50 bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent px-4 py-12 sm:px-6 lg:px-8 dark:border-stone-800 dark:from-stone-900/60 dark:via-stone-900/20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-100/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/60 dark:text-amber-300 mb-4 shadow-xs">
              <Landmark className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Architectural &amp; Geographical Marvels</span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-100 max-w-3xl">
              Famous Places of India
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              Journey through the monumental forts, sacred sanctums, UNESCO World Heritage properties, high-altitude alpine lakes, and pristine coastlines that define the timeless geography of Bharat.
            </p>

            {/* Quick Stats Counter */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Landmark className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span><strong>{PLACES_DATA.length}</strong> Curated Heritage Places</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Award className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>14 Place Categories</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Award className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span><strong>45</strong> UNESCO World Heritage Properties</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span>Across All States &amp; UTs</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Interactive Controls Bar */}
      <section className="sticky top-20 z-20 border-b border-amber-200/60 bg-stone-50/95 backdrop-blur-md shadow-xs transition-colors dark:border-stone-800 dark:bg-stone-950/95">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input Bar */}
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400 dark:text-stone-500">
                <Search className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <input
                id="place-search-input"
                type="text"
                aria-label="Search places by name, state, architecture, or era"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by place name, state, architecture, or era..."
                className="w-full rounded-xl border border-stone-200/90 bg-white py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clear-place-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* State and Category Selectors */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* State Filter Selector */}
              <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                <select
                  id="place-state-filter"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-stone-200/90 bg-white py-2.5 pl-3.5 pr-9 text-xs font-semibold text-stone-800 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                  aria-label="Filter by State or UT"
                >
                  <option value="all">All States &amp; UTs</option>
                  <optgroup label="28 States of India">
                    {stateOptions
                      .filter((s) => s.type === 'state')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="8 Union Territories">
                    {stateOptions
                      .filter((s) => s.type === 'ut')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} (UT)
                        </option>
                      ))}
                  </optgroup>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              </div>

              {/* Reset Filters button if any active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  id="reset-place-filters-btn"
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 dark:border-amber-800/60 dark:bg-amber-950/60 dark:text-amber-300 dark:hover:bg-amber-900/80"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips Bar (Horizontal scrolling) */}
          <div className="mt-3.5 flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
            <span className="shrink-0 flex items-center gap-1 pr-2 text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              <Compass className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Category:</span>
            </span>

            {PLACE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  id={`category-filter-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-xs dark:bg-amber-500 dark:text-stone-950 font-bold'
                      : 'bg-white/80 text-stone-600 hover:bg-amber-100 hover:text-amber-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100'
                  }`}
                >
                  {renderCategoryIcon(cat.iconName)}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Results Header Status */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              {hasActiveFilters ? 'Filtered Places' : 'Explore Heritage Sites'}
            </h2>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-stone-800 dark:text-amber-300">
              {filteredPlaces.length}
            </span>
          </div>

          {hasActiveFilters && (
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Showing matching destinations • Click &quot;Reset&quot; to view all
            </div>
          )}
        </div>

        {/* Places Grid */}
        {filteredPlaces.length > 0 ? (
          <div
            id="places-grid"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPlaces.map((place, index) => (
              <PlaceCard
                key={place.id}
                place={place}
                index={index}
                onOpenDetails={(p) => setSelectedPlaceModal(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty State when no places match filters */
          <div
            id="places-no-results"
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-amber-200 bg-amber-50/30 p-12 text-center dark:border-stone-800 dark:bg-stone-900/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-stone-800 dark:text-amber-400 mb-4">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              No places found
            </h3>
            <p className="mt-1.5 max-w-md text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              We couldn&apos;t find any heritage sites or destinations matching your selected criteria. Try adjusting your keyword search or resetting the category and state filters.
            </p>

            <button
              type="button"
              id="empty-state-reset-places-btn"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
            >
              <X className="h-4 w-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Responsible Heritage Travel & Cultural Inspiration Note */}
        <div className="mt-12 rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-stone-50 p-6 text-xs text-stone-600 shadow-xs dark:border-stone-800 dark:from-stone-900/80 dark:via-stone-900/40 dark:to-stone-950 dark:text-stone-300">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                Heritage Stewardship &amp; Cultural Travel Inspiration
              </h4>
              <p className="leading-relaxed">
                India&apos;s monuments, temples, stepwells, and natural sanctuaries embody millennia of human ingenuity and sacred reverence. When visiting these sacred sites, practice mindful heritage tourism: honor local temple decorum, support indigenous craftspeople, respect wildlife sanctuaries, and preserve the fragile ecology of high-altitude and coastal biospheres for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Place Modal */}
      <AnimatePresence>
        {selectedPlaceModal && (
          <div
            id="place-detail-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedPlaceModal(null)}
          >
            <motion.div
              id="place-detail-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="place-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative my-8 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-amber-200/80 bg-white shadow-2xl dark:border-stone-800 dark:bg-stone-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                <ImageWithFallback
                  src={selectedPlaceModal.imageUrl}
                  alt={selectedPlaceModal.imageAlt || selectedPlaceModal.name}
                  fallbackTitle={selectedPlaceModal.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  id="close-place-modal-btn"
                  onClick={() => setSelectedPlaceModal(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-stone-950/60 text-white backdrop-blur-md hover:bg-stone-950 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Modal Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${getCategoryColor(selectedPlaceModal.category)}`}>
                      {selectedPlaceModal.category}
                    </span>
                    {selectedPlaceModal.isUnescoSite && (
                      <span className="rounded-md bg-amber-500 px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-stone-950">
                        UNESCO World Heritage
                      </span>
                    )}
                  </div>
                  <h2 id="place-modal-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedPlaceModal.name}
                  </h2>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{selectedPlaceModal.location}, {selectedPlaceModal.stateName}</span>
                  </p>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Short Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                    <Compass className="h-4 w-4" />
                    <span>Overview</span>
                  </h4>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedPlaceModal.shortDescription}
                  </p>
                </div>

                {/* Historical & Cultural Significance */}
                <div className="rounded-2xl border border-amber-200/60 bg-amber-50/40 p-4 text-stone-700 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300">
                  <h4 className="font-serif text-sm font-bold text-amber-950 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Historical &amp; Cultural Importance</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {selectedPlaceModal.historicalSignificance}
                  </p>
                </div>

                {/* Era, Architecture & Best Time to Visit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedPlaceModal.builtByOrEra && (
                    <div className="rounded-xl border border-stone-200/80 bg-stone-50/60 p-3 dark:border-stone-800 dark:bg-stone-800/40">
                      <span className="block font-bold text-stone-900 dark:text-stone-100 mb-0.5">Built By / Historical Era:</span>
                      <span className="text-stone-600 dark:text-stone-400">{selectedPlaceModal.builtByOrEra}</span>
                    </div>
                  )}

                  {selectedPlaceModal.architecturalStyle && (
                    <div className="rounded-xl border border-stone-200/80 bg-stone-50/60 p-3 dark:border-stone-800 dark:bg-stone-800/40">
                      <span className="block font-bold text-stone-900 dark:text-stone-100 mb-0.5">Architectural Style:</span>
                      <span className="text-stone-600 dark:text-stone-400">{selectedPlaceModal.architecturalStyle}</span>
                    </div>
                  )}

                  <div className="sm:col-span-2 rounded-xl border border-amber-200/70 bg-amber-50/50 p-3 dark:border-stone-800 dark:bg-stone-900/60 flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-amber-900 dark:text-amber-300">Best Time to Visit:</span>
                      <span className="text-stone-700 dark:text-stone-300">{selectedPlaceModal.bestTimeToVisit}</span>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Notable Architectural &amp; Natural Highlights</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPlaceModal.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 rounded-xl border border-stone-200/70 bg-stone-50/60 p-2.5 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-800/40 dark:text-stone-300"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-800 dark:text-amber-300">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-stone-200/80 bg-stone-50/80 px-6 py-4 dark:border-stone-800 dark:bg-stone-950/80">

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlaceModal(null)}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    Close
                  </button>

                  <Link
                    to={`/states/${selectedPlaceModal.stateId}#places-section`}
                    onClick={() => setSelectedPlaceModal(null)}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950"
                  >
                    <span>Explore {selectedPlaceModal.stateName}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
