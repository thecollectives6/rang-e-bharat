import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  MapPin,
  Search,
  X,
  Filter,
  ArrowRight,
  Info,
  ChevronDown,
  Compass,
  Flame,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { FESTIVALS_DATA, MONTH_FILTERS } from '../data/festivalsData';
import { INDIA_STATES_DATA } from '../data/indiaData';
import { FestivalItem } from '../types/festival';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const FestivalsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Query Sync or Local State
  const initialSearch = searchParams.get('q') || '';
  const initialMonth = searchParams.get('month') ? parseInt(searchParams.get('month') || '0', 10) : 0;
  const initialState = searchParams.get('state') || 'all';
  const initialType = searchParams.get('type') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth);
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedFestivalModal, setSelectedFestivalModal] = useState<FestivalItem | null>(null);
  const handleOpenModal = (fest: FestivalItem) => {
    setSelectedFestivalModal(fest);
  };

  // Sync state changes with URL query parameters for shareability
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery.trim()) params.q = searchQuery.trim();
    if (selectedMonth > 0) params.month = selectedMonth.toString();
    if (selectedState !== 'all') params.state = selectedState;
    if (selectedType !== 'all') params.type = selectedType;
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedMonth, selectedState, selectedType, setSearchParams]);

  // Escape key handler for festival modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedFestivalModal) {
        setSelectedFestivalModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFestivalModal]);

  // Lock body scroll when festival modal is open
  useEffect(() => {
    if (selectedFestivalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFestivalModal]);

  // Unique list of all states and UTs sorted alphabetically
  const stateOptions = useMemo(() => {
    return [...INDIA_STATES_DATA]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ id: s.id, name: s.name, type: s.type }));
  }, []);

  // Filtered festivals computation
  const filteredFestivals = useMemo(() => {
    return FESTIVALS_DATA.filter((fest) => {
      // 1. Search Query filter (matches name, hindiName, states, description, significance, rituals)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = fest.name.toLowerCase().includes(q);
        const matchesHindi = fest.hindiName?.toLowerCase().includes(q);
        const matchesStates = fest.statesSummary.toLowerCase().includes(q);
        const matchesDesc = fest.shortDescription.toLowerCase().includes(q);
        const matchesSig = fest.culturalSignificance.toLowerCase().includes(q);
        const matchesRituals = fest.keyRituals.some((r) => r.toLowerCase().includes(q));
        const matchesStateList = fest.primaryStates.some((s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));

        if (!matchesName && !matchesHindi && !matchesStates && !matchesDesc && !matchesSig && !matchesRituals && !matchesStateList) {
          return false;
        }
      }

      // 2. Month filter (1 to 12)
      if (selectedMonth > 0) {
        if (!fest.monthNumbers.includes(selectedMonth)) {
          return false;
        }
      }

      // 3. State filter
      if (selectedState !== 'all') {
        const matchesState = fest.primaryStates.some((s) => s.id === selectedState);
        // If festival is pan-India, it belongs to all states
        const isPanIndia = fest.regionScope === 'Pan-India';
        if (!matchesState && !isPanIndia) {
          return false;
        }
      }

      // 4. Type filter
      if (selectedType !== 'all') {
        if (fest.type !== selectedType) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedMonth, selectedState, selectedType]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedMonth !== 0 || selectedState !== 'all' || selectedType !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedMonth(0);
    setSelectedState('all');
    setSelectedType('all');
  };

  return (
    <div id="festivals-explorer-page" className="min-h-screen bg-stone-50/60 dark:bg-stone-950">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-amber-200/50 bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent px-4 py-12 sm:px-6 lg:px-8 dark:border-stone-800 dark:from-stone-900/60 dark:via-stone-900/20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-100/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/60 dark:text-amber-300 mb-4 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Living Celebrations of Bharat</span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-100 max-w-3xl">
              Festival Explorer
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              Explore the rich tapestry of sacred traditions, seasonal harvest feasts, and folk spectacles celebrated across all regions of India.
            </p>

            {/* Quick stats counter */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Flame className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span><strong>{FESTIVALS_DATA.length}</strong> Prominent Festivals</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span>12-Month Calendar</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span>All 28 States & 8 UTs</span>
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
                id="festival-search-input"
                type="text"
                aria-label="Search festivals by name, rituals, or keywords"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search festivals by name, rituals, or keywords..."
                className="w-full rounded-xl border border-stone-200/90 bg-white py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clear-festival-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* State and Category Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* State Filter Selector */}
              <div className="relative min-w-[190px] flex-1 sm:flex-initial">
                <select
                  id="festival-state-filter"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-stone-200/90 bg-white py-2.5 pl-3.5 pr-9 text-xs font-semibold text-stone-800 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                  aria-label="Filter by State or UT"
                >
                  <option value="all">All States & UTs</option>
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

              {/* Festival Type Selector */}
              <div className="relative min-w-[160px] flex-1 sm:flex-initial">
                <select
                  id="festival-type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-stone-200/90 bg-white py-2.5 pl-3.5 pr-9 text-xs font-semibold text-stone-800 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                  aria-label="Filter by Festival Type"
                >
                  <option value="all">All Traditions</option>
                  <option value="Harvest">Harvest Festivals</option>
                  <option value="Spiritual / Religious">Spiritual & Sacred</option>
                  <option value="Cultural / Folk">Folk & Cultural</option>
                  <option value="New Year">New Year Celebrations</option>
                  <option value="Fair & Mela">Fairs & Melas</option>
                  <option value="Music & Dance">Music & Dance</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              </div>

              {/* Reset Filters button if any active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  id="reset-festival-filters-btn"
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 dark:border-amber-800/60 dark:bg-amber-950/60 dark:text-amber-300 dark:hover:bg-amber-900/80"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Month Filter Chips Bar (January to December) */}
          <div className="mt-3.5 flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
            <span className="shrink-0 flex items-center gap-1 pr-2 text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              <Calendar className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Month:</span>
            </span>

            {MONTH_FILTERS.map((m) => {
              const isSelected = selectedMonth === m.value;
              return (
                <button
                  key={m.value}
                  type="button"
                  id={`month-filter-${m.value}`}
                  onClick={() => setSelectedMonth(m.value)}
                  className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-xs dark:bg-amber-500 dark:text-stone-950 font-bold'
                      : 'bg-white/80 text-stone-600 hover:bg-amber-100 hover:text-amber-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100'
                  }`}
                >
                  {m.label}
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
              {hasActiveFilters ? 'Filtered Celebrations' : 'All Indian Festivals'}
            </h2>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-stone-800 dark:text-amber-300">
              {filteredFestivals.length}
            </span>
          </div>

          {hasActiveFilters && (
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Showing matching festivals • Click &quot;Reset&quot; to view all
            </div>
          )}
        </div>

        {/* Festival Cards Grid */}
        {filteredFestivals.length > 0 ? (
          <div
            id="festivals-grid"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredFestivals.map((fest, index) => {
              return (
                <motion.article
                  key={fest.id}
                  id={`festival-card-${fest.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-600/60"
                >
                  {/* Top Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <ImageWithFallback
                      src={fest.imageUrl}
                      alt={fest.imageAlt}
                      fallbackTitle={fest.name}
                      fallbackSubtitle={fest.months}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                    {/* Top Badges & Favorite Button */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      {/* Month & Tradition Badges */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <div className="flex items-center gap-1.5 rounded-lg bg-stone-900/80 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-xs">
                          <Calendar className="h-3 w-3 text-amber-400" />
                          <span>{fest.months.split('(')[0].trim()}</span>
                        </div>
                        <div className="rounded-lg bg-amber-500/90 px-2 py-1 text-[11px] font-bold text-stone-950 backdrop-blur-md shadow-xs">
                          {fest.type}
                        </div>
                        {fest.unescoIntangible && (
                          <div className="rounded-lg bg-amber-500/95 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-950 backdrop-blur-md">
                            UNESCO · ICH {fest.unescoIntangible.year}
                          </div>
                        )}
                      </div>
</div>

                    {/* Festival Name Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-serif text-xl font-extrabold text-white drop-shadow-md group-hover:text-amber-200 transition-colors">
                          {fest.name}
                        </h3>
                        {fest.hindiName && (
                          <span className="text-xs font-medium text-amber-200/90 font-serif shrink-0">
                            {fest.hindiName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Region / States Summary */}
                    <div className="mb-3">
                      <div className="flex items-start gap-1.5 text-xs text-amber-800 dark:text-amber-400 font-semibold leading-snug">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-500" />
                        <span className="line-clamp-2">
                          {fest.statesSummary}
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-4">
                      {fest.shortDescription}
                    </p>

                    {/* Cultural Significance Highlight Box */}
                    <div className="mt-auto mb-4 rounded-xl border border-amber-200/60 bg-amber-50/50 p-3 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-400 mb-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Cultural Significance</span>
                      </div>
                      <p className="line-clamp-2 italic text-stone-600 dark:text-stone-400">
                        &quot;{fest.culturalSignificance}&quot;
                      </p>
                    </div>

                    {/* Multi-State Interactive Explorer Links & View Details */}
                    <div className="border-t border-stone-100 pt-4 dark:border-stone-800/80">
                      {/* Primary States Badges */}
                      <div className="mb-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-stone-400 dark:text-stone-500">
                          Hubs:
                        </span>
                        {fest.primaryStates.slice(0, 3).map((st) => (
                          <Link
                            key={st.id}
                            to={`/states/${st.id}#festivals-section`}
                            id={`link-state-${fest.id}-${st.id}`}
                            className="inline-flex items-center rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-700 transition hover:border-amber-400 hover:bg-amber-100/70 hover:text-amber-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-600 dark:hover:text-amber-300"
                            title={`Explore ${st.name} State Profile`}
                          >
                            <span>{st.name.split('(')[0].trim()}</span>
                          </Link>
                        ))}
                        {fest.primaryStates.length > 3 && (
                          <button
                            type="button"
                            onClick={() => handleOpenModal(fest)}
                            className="text-[11px] font-semibold text-amber-700 hover:underline dark:text-amber-400"
                          >
                            +{fest.primaryStates.length - 3} more
                          </button>
                        )}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex items-center gap-2">
                        {/* Explore State Primary Button */}
                        <Link
                          to={`/states/${fest.primaryStates[0]?.id || 'uttar-pradesh'}#festivals-section`}
                          id={`explore-state-btn-${fest.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 active:scale-[0.98] dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
                        >
                          <span>Explore State</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        {/* View Rituals & Details Modal Trigger */}
                        <button
                          type="button"
                          id={`open-festival-modal-${fest.id}`}
                          onClick={() => handleOpenModal(fest)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-amber-300"
                          title="View Full Festival Details & Rituals"
                          aria-label="View Details"
                        >
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* Empty State when no festivals match filters */
          <div
            id="festivals-no-results"
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-amber-200 bg-amber-50/30 p-12 text-center dark:border-stone-800 dark:bg-stone-900/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-stone-800 dark:text-amber-400 mb-4">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              No festivals found
            </h3>
            <p className="mt-1.5 max-w-md text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              We couldn&apos;t find any celebrations matching your selected filters. Try broadening your search or resetting the month or state selections.
            </p>

            <button
              type="button"
              id="empty-state-reset-btn"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
            >
              <X className="h-4 w-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Multi-Region Cultural Harmony Note */}
        <div className="mt-12 rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-stone-50 p-6 text-xs text-stone-600 shadow-xs dark:border-stone-800 dark:from-stone-900/80 dark:via-stone-900/40 dark:to-stone-950 dark:text-stone-300">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                Unity in Diversity: Multi-Regional Celebrations of Bharat
              </h4>
              <p className="leading-relaxed">
                Indian festivals reflect deep agrarian, astronomical, and spiritual milestones that transcend singular political boundaries. For instance, the winter harvest is commemorated simultaneously as <strong>Pongal</strong> in Tamil Nadu, <strong>Makar Sankranti</strong> across Maharashtra, Karnataka, Andhra Pradesh &amp; Bihar, <strong>Uttarayan</strong> in Gujarat, <strong>Lohri</strong> in Punjab, and <strong>Magh Bihu</strong> in Assam. Rang-e-Bharat celebrates both distinctive regional folklore and shared pan-Indian ethos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Festival Dialog / Modal */}
      <AnimatePresence>
        {selectedFestivalModal && (
          <div
            id="festival-detail-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedFestivalModal(null)}
          >
            <motion.div
              id="festival-detail-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="festival-modal-title"
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
                  src={selectedFestivalModal.imageUrl}
                  alt={selectedFestivalModal.imageAlt}
                  fallbackTitle={selectedFestivalModal.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                {/* Action Controls: Close Button */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">

                  <button
                    type="button"
                    id="close-festival-modal-btn"
                    onClick={() => setSelectedFestivalModal(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-950/60 text-white backdrop-blur-md hover:bg-stone-950 transition cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Modal Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="rounded-md bg-amber-500 px-2 py-0.5 text-[11px] font-bold text-stone-950">
                      {selectedFestivalModal.type}
                    </span>
                    <span className="rounded-md bg-stone-900/80 px-2 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-400/30">
                      {selectedFestivalModal.months}
                    </span>
                  </div>
                  <h2 id="festival-modal-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedFestivalModal.name}
                  </h2>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* States and Regions Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>Geographic Scope &amp; Participating States</span>
                  </h4>
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3">
                    {selectedFestivalModal.statesSummary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedFestivalModal.primaryStates.map((st) => (
                      <Link
                        key={st.id}
                        to={`/states/${st.id}#festivals-section`}
                        onClick={() => setSelectedFestivalModal(null)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200/80 bg-amber-50/70 px-3 py-1.5 text-xs font-semibold text-amber-900 shadow-2xs transition hover:bg-amber-200/80 dark:border-stone-700 dark:bg-stone-800 dark:text-amber-300 dark:hover:bg-stone-700"
                      >
                        <MapPin className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                        <span>{st.name}</span>
                        <ArrowRight className="h-3 w-3 opacity-60" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Cultural Significance Section */}
                <div className="rounded-2xl border border-amber-200/60 bg-amber-50/40 p-4 text-stone-700 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300">
                  <h4 className="font-serif text-sm font-bold text-amber-950 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Deep Cultural &amp; Spiritual Significance</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {selectedFestivalModal.culturalSignificance}
                  </p>
                </div>

                {/* Key Rituals & Traditions */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Key Rituals &amp; Celebrations</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFestivalModal.keyRituals.map((ritual, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 rounded-xl border border-stone-200/70 bg-stone-50/60 p-2.5 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-800/40 dark:text-stone-300"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-800 dark:text-amber-300">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{ritual}</span>
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
                    onClick={() => setSelectedFestivalModal(null)}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    Close
                  </button>

                  <Link
                    to={`/states/${selectedFestivalModal.primaryStates[0]?.id || 'uttar-pradesh'}#festivals-section`}
                    onClick={() => setSelectedFestivalModal(null)}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950"
                  >
                    <span>Explore State Profile</span>
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
