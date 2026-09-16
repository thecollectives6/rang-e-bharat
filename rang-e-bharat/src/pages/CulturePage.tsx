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
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Landmark,
  Music,
  Palette,
  Scissors,
  Shirt,
  Utensils,
  Flame,
  Layers,
  Info,
  Award,
} from 'lucide-react';
import { CULTURE_CATEGORIES, ALL_CULTURE_DATA } from '../data/cultureData';
import { INDIA_STATES_DATA } from '../data/indiaData';
import { CultureItem, CultureCategory } from '../types/culture';
import { IndianRegion } from '../types/state';
import { CultureCard, getCategoryIcon, getCategoryBadgeClasses } from '../components/CultureCard';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const CulturePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL search params sync
  const initialSearch = searchParams.get('q') || '';
  const initialCategory = (searchParams.get('category') as CultureCategory | 'all') || 'all';
  const initialState = searchParams.get('state') || 'all';
  const initialRegion = (searchParams.get('region') as IndianRegion | 'all') || 'all';

  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<CultureCategory | 'all'>(initialCategory);
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedRegion, setSelectedRegion] = useState<IndianRegion | 'all'>(initialRegion);
  const [selectedItemModal, setSelectedItemModal] = useState<CultureItem | null>(null);
  const handleOpenItemModal = (it: CultureItem) => {
    setSelectedItemModal(it);
  };

  // Sync state changes with URL query parameters for shareability
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery.trim()) params.q = searchQuery.trim();
    if (selectedCategory !== 'all') params.category = selectedCategory;
    if (selectedState !== 'all') params.state = selectedState;
    if (selectedRegion !== 'all') params.region = selectedRegion;
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedCategory, selectedState, selectedRegion, setSearchParams]);

  // Escape key handler for culture detail modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItemModal) {
        setSelectedItemModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemModal]);

  // Body scroll lock when culture modal is open
  useEffect(() => {
    if (selectedItemModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItemModal]);

  // Unique list of all 28 states and 8 UTs sorted alphabetically
  const stateOptions = useMemo(() => {
    return [...INDIA_STATES_DATA]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ id: s.id, name: s.name, type: s.type, region: s.region }));
  }, []);

  // Filtered culture items
  const filteredItems = useMemo(() => {
    return ALL_CULTURE_DATA.filter((item) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesHindi = item.hindiName?.toLowerCase().includes(q);
        const matchesState = item.stateName.toLowerCase().includes(q);
        const matchesRegion = item.region.toLowerCase().includes(q);
        const matchesShortDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesDetailedDesc = item.detailedDescription.toLowerCase().includes(q);
        const matchesSignificance = item.culturalSignificance.toLowerCase().includes(q);
        const matchesEra = item.historicalEra?.toLowerCase().includes(q);
        const matchesMaterials = item.materialsOrStyle?.toLowerCase().includes(q);
        const matchesAttributes = item.keyAttributes?.some((a) => a.toLowerCase().includes(q));

        if (
          !matchesName &&
          !matchesHindi &&
          !matchesState &&
          !matchesRegion &&
          !matchesShortDesc &&
          !matchesDetailedDesc &&
          !matchesSignificance &&
          !matchesEra &&
          !matchesMaterials &&
          !matchesAttributes
        ) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (item.category !== selectedCategory) {
          return false;
        }
      }

      // 3. State Filter
      if (selectedState !== 'all') {
        if (item.stateId !== selectedState) {
          return false;
        }
      }

      // 4. Region Filter
      if (selectedRegion !== 'all') {
        if (item.region !== selectedRegion) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedState, selectedRegion]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedState !== 'all' ||
    selectedRegion !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('all');
    setSelectedRegion('all');
  };

  // Find category meta if category is selected
  const activeCategoryMeta = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return CULTURE_CATEGORIES.find((c) => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  return (
    <div id="culture-explorer-page" className="min-h-screen bg-stone-50/60 dark:bg-stone-950">
      {/* Grand Digital Museum Entrance Header */}
      <section className="relative overflow-hidden border-b border-amber-200/50 bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent px-4 py-12 sm:px-6 lg:px-8 dark:border-stone-800 dark:from-stone-900/60 dark:via-stone-900/20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            {/* Museum Header Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-100/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 shadow-xs mb-4 dark:border-amber-700/60 dark:bg-amber-950/60 dark:text-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Digital Museum of Living Traditions</span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-100 max-w-3xl">
              Culture Explorer of Bharat
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              Step into an immersive virtual gallery of India’s living arts, classical rhythms, masterstroke paintings, heirloom handlooms, regional cuisines, ancient scripts, and sacred philosophies.
            </p>

            {/* Museum Gallery Highlights Counter */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Layers className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span><strong>10</strong> Thematic Wings</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <Award className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span><strong>{ALL_CULTURE_DATA.length}</strong> Curated Cultural Exhibits</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-3 py-1.5 shadow-xs dark:border-stone-800 dark:bg-stone-900/80">
                <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span>All 28 States &amp; 8 UTs Represented</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar (10 Museum Wings) */}
      <section className="sticky top-20 z-20 border-b border-amber-200/60 bg-stone-50/95 backdrop-blur-md shadow-xs transition-colors dark:border-stone-800 dark:bg-stone-950/95">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {/* Top Filter Controls: Search, State, Region */}
          <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400 dark:text-stone-500">
                <Search className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <input
                id="culture-search-input"
                type="text"
                aria-label="Search Indian culture, dance, music, arts, handicrafts, attire, and cuisine"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dance, music, art, handicrafts, attire, food, state..."
                className="w-full rounded-xl border border-stone-200/90 bg-white py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clear-culture-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* State, Region & Reset Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Region Filter */}
              <div className="relative min-w-[140px]">
                <select
                  id="culture-region-filter"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value as IndianRegion | 'all')}
                  className="w-full appearance-none rounded-xl border border-stone-200/90 bg-white py-2.5 pl-3.5 pr-8 text-xs font-semibold text-stone-800 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                  aria-label="Filter by Region"
                >
                  <option value="all">All Regions</option>
                  <option value="North">North India</option>
                  <option value="South">South India</option>
                  <option value="East">East India</option>
                  <option value="West">West India</option>
                  <option value="Central">Central India</option>
                  <option value="Northeast">Northeast India</option>
                  <option value="Islands">Islands</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              </div>

              {/* State Filter Selector */}
              <div className="relative min-w-[190px]">
                <select
                  id="culture-state-filter"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-stone-200/90 bg-white py-2.5 pl-3.5 pr-8 text-xs font-semibold text-stone-800 shadow-xs transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
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
                      .filter((s) => s.type === 'union-territory')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} (UT)
                        </option>
                      ))}
                  </optgroup>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              </div>

              {/* Reset Filters button */}
              {hasActiveFilters && (
                <button
                  type="button"
                  id="reset-culture-filters-btn"
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 dark:border-amber-800/60 dark:bg-amber-950/60 dark:text-amber-300 dark:hover:bg-amber-900/80"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* 10 Museum Category Selector Wings */}
          <div className="mt-3.5 flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
            {/* All Wings Option */}
            <button
              type="button"
              id="category-tab-all"
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-700 text-white shadow-xs dark:bg-amber-500 dark:text-stone-950 font-bold'
                  : 'bg-white/80 text-stone-600 hover:bg-amber-100 hover:text-amber-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100'
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>All Wings ({ALL_CULTURE_DATA.length})</span>
            </button>

            {/* 10 Required Categories */}
            {CULTURE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = ALL_CULTURE_DATA.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`category-tab-${cat.id.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-xs dark:bg-amber-500 dark:text-stone-950 font-bold'
                      : 'bg-white/80 text-stone-600 hover:bg-amber-100 hover:text-amber-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-amber-800 text-amber-100 dark:bg-amber-600 dark:text-stone-950' : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Exhibition Hall */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Curatorial Wing Highlight Note if a Category is selected */}
        {activeCategoryMeta && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-stone-50 p-5 shadow-xs dark:border-stone-800 dark:from-stone-900/90 dark:via-stone-900/50 dark:to-stone-950"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950">
                  {getCategoryIcon(activeCategoryMeta.id)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      Museum Gallery Wing
                    </span>
                    <span className="text-xs text-stone-400">•</span>
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                      {activeCategoryMeta.hindiName}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                    {activeCategoryMeta.wingName}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
                    {activeCategoryMeta.curatorDescription}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="rounded-xl border border-amber-300/80 bg-white/90 px-3 py-1.5 text-xs font-bold text-amber-900 dark:border-stone-700 dark:bg-stone-800 dark:text-amber-300">
                  {filteredItems.length} Exhibits in Wing
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Header Status */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              {hasActiveFilters ? 'Filtered Museum Exhibits' : 'Curated Gallery Collection'}
            </h2>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-stone-800 dark:text-amber-300">
              {filteredItems.length}
            </span>
          </div>

          {hasActiveFilters && (
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Showing matching cultural traditions • Click &quot;Reset&quot; to view all
            </div>
          )}
        </div>

        {/* Exhibition Items Grid */}
        {filteredItems.length > 0 ? (
          <div
            id="culture-grid"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item, index) => (
              <CultureCard
                key={item.id}
                item={item}
                index={index}
                onOpenDetails={handleOpenItemModal}
              />
            ))}
          </div>
        ) : (
          /* Empty State when no items match filters */
          <div
            id="culture-no-results"
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-amber-200 bg-amber-50/30 p-12 text-center dark:border-stone-800 dark:bg-stone-900/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-stone-800 dark:text-amber-400 mb-4">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              No cultural exhibits found
            </h3>
            <p className="mt-1.5 max-w-md text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              We couldn&apos;t find any cultural items matching your selected criteria. Try adjusting your keyword search, category, state, or region filters.
            </p>

            <button
              type="button"
              id="empty-state-reset-culture-btn"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
            >
              <X className="h-4 w-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Digital Museum Curatorial Statement */}
        <div className="mt-14 rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-stone-50 p-6 text-xs text-stone-600 shadow-xs dark:border-stone-800 dark:from-stone-900/80 dark:via-stone-900/40 dark:to-stone-950 dark:text-stone-300">
          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                Preserving India&apos;s Living Intangible Heritage
              </h4>
              <p className="leading-relaxed">
                Culture in India is not a static museum exhibit locked behind glass; it is a vibrant, breathing continuum. Each classical dance step, handloom warp, Ayurvedic spice blend, and oral raga carries the collective memory of millennia. Rang-e-Bharat celebrates these master crafts, supporting traditional artisans, indigenous weaver cooperatives, and classical masters across every corner of the motherland.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Museum Artifact Detail Modal */}
      <AnimatePresence>
        {selectedItemModal && (
          <div
            id="culture-detail-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 p-4 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedItemModal(null)}
          >
            <motion.div
              id="culture-detail-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="culture-modal-title"
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
                  src={selectedItemModal.imageUrl}
                  alt={selectedItemModal.imageAlt || selectedItemModal.name}
                  fallbackTitle={selectedItemModal.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  id="close-culture-modal-btn"
                  onClick={() => setSelectedItemModal(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-stone-950/60 text-white backdrop-blur-md hover:bg-stone-950 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Modal Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${getCategoryBadgeClasses(
                        selectedItemModal.category
                      )}`}
                    >
                      {selectedItemModal.category}
                    </span>
                    <span className="rounded-md bg-stone-800/80 border border-stone-700 px-2 py-0.5 text-[11px] font-semibold text-stone-200 backdrop-blur-md">
                      {selectedItemModal.region} India
                    </span>
                    <span className="rounded-md bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 text-[11px] font-semibold text-amber-200 backdrop-blur-md">
                      {selectedItemModal.museumGalleryWing}
                    </span>
                  </div>

                  {selectedItemModal.hindiName && (
                    <p className="text-xs font-semibold text-amber-300">
                      {selectedItemModal.hindiName}
                    </p>
                  )}

                  <h2 id="culture-modal-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedItemModal.name}
                  </h2>

                  <p className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>Origin / Related State: <strong>{selectedItemModal.stateName}</strong></span>
                  </p>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Short Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                    <Compass className="h-4 w-4" />
                    <span>Curatorial Overview</span>
                  </h4>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedItemModal.detailedDescription || selectedItemModal.shortDescription}
                  </p>
                </div>

                {/* Cultural Significance Box */}
                <div className="rounded-2xl border border-amber-200/60 bg-amber-50/40 p-4 text-stone-700 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300">
                  <h4 className="font-serif text-sm font-bold text-amber-950 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Living Cultural &amp; Historical Significance</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {selectedItemModal.culturalSignificance}
                  </p>
                </div>

                {/* Historical Era, Materials / Style & Guild Lineage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedItemModal.historicalEra && (
                    <div className="rounded-xl border border-stone-200/80 bg-stone-50/60 p-3 dark:border-stone-800 dark:bg-stone-800/40">
                      <span className="block font-bold text-stone-900 dark:text-stone-100 mb-0.5">
                        Historical Era / Lineage:
                      </span>
                      <span className="text-stone-600 dark:text-stone-400">{selectedItemModal.historicalEra}</span>
                    </div>
                  )}

                  {selectedItemModal.materialsOrStyle && (
                    <div className="rounded-xl border border-stone-200/80 bg-stone-50/60 p-3 dark:border-stone-800 dark:bg-stone-800/40">
                      <span className="block font-bold text-stone-900 dark:text-stone-100 mb-0.5">
                        Materials / Style / Technique:
                      </span>
                      <span className="text-stone-600 dark:text-stone-400">{selectedItemModal.materialsOrStyle}</span>
                    </div>
                  )}

                  {selectedItemModal.curatorNotes && (
                    <div className="sm:col-span-2 rounded-xl border border-amber-200/70 bg-amber-50/50 p-3 dark:border-stone-800 dark:bg-stone-900/60 flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-amber-900 dark:text-amber-300">
                          Curator&apos;s Museum Note:
                        </span>
                        <span className="text-stone-700 dark:text-stone-300">{selectedItemModal.curatorNotes}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Attributes */}
                {selectedItemModal.keyAttributes && selectedItemModal.keyAttributes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Distinguishing Cultural Characteristics</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedItemModal.keyAttributes.map((attr, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 rounded-xl border border-stone-200/70 bg-stone-50/60 p-2.5 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-800/40 dark:text-stone-300"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-800 dark:text-amber-300">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{attr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-stone-200/80 bg-stone-50/80 px-6 py-4 dark:border-stone-800 dark:bg-stone-950/80">

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedItemModal(null)}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    Close
                  </button>

                  <Link
                    to={`/states/${selectedItemModal.stateId}#culture-section`}
                    onClick={() => setSelectedItemModal(null)}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 dark:bg-amber-500 dark:text-stone-950"
                  >
                    <span>Explore {selectedItemModal.stateName} Culture</span>
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
