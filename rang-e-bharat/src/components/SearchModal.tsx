import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  MapPin,
  Landmark,
  Compass,
  Sparkles,
  UtensilsCrossed,
  Music,
  Palette,
  Trees,
  BookOpen,
  ChevronRight,
  CornerDownLeft,
  ArrowUpDown,
  History,
  TrendingUp,
} from 'lucide-react';
import {
  searchHeritage,
  SearchResultItem,
  POPULAR_HERITAGE_SUGGESTIONS,
  SearchCategory,
} from '../utils/searchEngine';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_TABS: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: 'All', value: 'all', icon: Compass },
  { label: 'States & UTs', value: 'states', icon: MapPin },
  { label: 'Monuments & Places', value: 'monuments', icon: Landmark },
  { label: 'Festivals', value: 'festivals', icon: Sparkles },
  { label: 'Cuisine', value: 'food', icon: UtensilsCrossed },
  { label: 'Dance & Art', value: 'arts', icon: Palette },
  { label: 'Nature', value: 'nature', icon: Trees },
];

function getCategoryIcon(categorySlug: string) {
  switch (categorySlug) {
    case 'state':
    case 'ut':
      return MapPin;
    case 'city':
      return Landmark;
    case 'monument':
      return Landmark;
    case 'place':
      return Compass;
    case 'festival':
      return Sparkles;
    case 'food':
      return UtensilsCrossed;
    case 'dance':
      return Music;
    case 'art':
      return Palette;
    case 'nature':
      return Trees;
    case 'culture':
      return BookOpen;
    default:
      return Compass;
  }
}

function getCategoryBadgeColor(categorySlug: string) {
  switch (categorySlug) {
    case 'state':
      return 'bg-amber-100 text-amber-800 border-amber-300/60 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800';
    case 'ut':
      return 'bg-blue-100 text-blue-800 border-blue-300/60 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800';
    case 'monument':
      return 'bg-rose-100 text-rose-800 border-rose-300/60 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800';
    case 'place':
      return 'bg-orange-100 text-orange-800 border-orange-300/60 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-800';
    case 'festival':
      return 'bg-purple-100 text-purple-800 border-purple-300/60 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800';
    case 'food':
      return 'bg-red-100 text-red-800 border-red-300/60 dark:bg-red-950/70 dark:text-red-300 dark:border-red-800';
    case 'dance':
      return 'bg-pink-100 text-pink-800 border-pink-300/60 dark:bg-pink-950/70 dark:text-pink-300 dark:border-pink-800';
    case 'art':
      return 'bg-teal-100 text-teal-800 border-teal-300/60 dark:bg-teal-950/70 dark:text-teal-300 dark:border-teal-800';
    case 'nature':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300/60 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800';
    default:
      return 'bg-stone-100 text-stone-800 border-stone-300/60 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700';
  }
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rang_bharat_recent_searches');
      return saved ? JSON.parse(saved) : ['Taj Mahal', 'Bharatanatyam', 'Kerala'];
    } catch {
      return ['Taj Mahal', 'Bharatanatyam', 'Kerala'];
    }
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Reset or focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
      setSelectedCategory('all');
    }
  }, [isOpen]);

  // Compute search results
  const rawResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchHeritage(query, 30);
  }, [query]);

  // Filter results by selected category tab
  const filteredResults = useMemo(() => {
    if (selectedCategory === 'all') return rawResults;
    if (selectedCategory === 'states') {
      return rawResults.filter((r) => r.categorySlug === 'state' || r.categorySlug === 'ut' || r.categorySlug === 'city');
    }
    if (selectedCategory === 'monuments') {
      return rawResults.filter((r) => r.categorySlug === 'monument' || r.categorySlug === 'place');
    }
    if (selectedCategory === 'festivals') {
      return rawResults.filter((r) => r.categorySlug === 'festival');
    }
    if (selectedCategory === 'food') {
      return rawResults.filter((r) => r.categorySlug === 'food');
    }
    if (selectedCategory === 'arts') {
      return rawResults.filter((r) => r.categorySlug === 'dance' || r.categorySlug === 'art');
    }
    if (selectedCategory === 'nature') {
      return rawResults.filter((r) => r.categorySlug === 'nature');
    }
    return rawResults;
  }, [rawResults, selectedCategory]);

  // Clamp selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current && filteredResults.length > 0) {
      const activeEl = resultsContainerRef.current.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, filteredResults]);

  const handleSelect = (item: SearchResultItem | { path: string; term?: string }) => {
    if ('term' in item && item.term) {
      saveRecentSearch(item.term);
    } else if ('displayTitle' in item) {
      saveRecentSearch(item.displayTitle);
    }
    navigate(item.path);
    onClose();
  };

  const saveRecentSearch = (term: string) => {
    if (!term) return;
    const clean = term.trim();
    const updated = [clean, ...recentSearches.filter((s) => s.toLowerCase() !== clean.toLowerCase())].slice(0, 6);
    setRecentSearches(updated);
    try {
      localStorage.setItem('rang_bharat_recent_searches', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('rang_bharat_recent_searches');
    } catch {
      // ignore
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredResults.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredResults.length > 0) {
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="global-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center bg-stone-950/70 p-2.5 pt-10 sm:p-4 sm:pt-20 backdrop-blur-md"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        id="global-search-container"
        role="dialog"
        aria-modal="true"
        aria-label="Global Heritage Search"
        className="flex max-h-[90vh] sm:max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-amber-200/50 bg-stone-50/98 shadow-2xl transition-all dark:border-stone-800 dark:bg-stone-900/98"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-amber-200/40 px-3 sm:px-4 py-2.5 sm:py-3.5 dark:border-stone-800">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Search className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>

          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            role="combobox"
            aria-expanded={filteredResults.length > 0}
            aria-controls="search-results-list"
            aria-label="Search Indian heritage, states, monuments, dances, cuisine, and festivals"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search states, monuments, dances, cuisine..."
            className="w-full bg-transparent px-2.5 sm:px-3 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none dark:text-stone-100"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />

          <div className="flex items-center gap-1.5 shrink-0">
            {query && (
              <button
                type="button"
                id="clear-search-query-btn"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-200/60 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-200 cursor-pointer"
                aria-label="Clear search input"
                title="Clear input"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              id="close-search-modal-btn"
              onClick={onClose}
              className="rounded-xl border border-stone-200 bg-stone-100/80 px-2 sm:px-2.5 py-1 text-xs font-semibold text-stone-600 hover:bg-stone-200 hover:text-stone-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-stone-100 cursor-pointer"
              aria-label="Close search (ESC)"
            >
              ESC
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Visible when searching or active) */}
        {query.trim().length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto border-b border-stone-200/60 bg-amber-50/30 px-4 py-2 text-xs no-scrollbar dark:border-stone-800 dark:bg-stone-950/40" role="toolbar" aria-label="Filter search categories">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mr-1 shrink-0">
              Filter:
            </span>
            {CATEGORY_TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  id={`search-tab-${tab.value}`}
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium transition ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-xs dark:bg-amber-500 dark:text-stone-950'
                      : 'bg-white/80 text-stone-600 hover:bg-amber-100 hover:text-amber-800 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-stone-100'
                  }`}
                >
                  <TabIcon className="h-3 w-3" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Search Body / Results Container */}
        <div ref={resultsContainerRef} className="flex-1 overflow-y-auto p-3 sm:p-4">
          {/* Active Search Results */}
          {query.trim().length > 0 ? (
            filteredResults.length > 0 ? (
              <div id="search-results-list" role="listbox" aria-label="Search results" className="space-y-1">
                <div className="flex items-center justify-between px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  <span>Results ({filteredResults.length})</span>
                  <span>Press ↑↓ to navigate, ↵ to select</span>
                </div>

                {filteredResults.map((item, idx) => {
                  const CategoryIcon = getCategoryIcon(item.categorySlug);
                  const isSelected = selectedIndex === idx;

                  return (
                    <button
                      key={item.id}
                      data-index={idx}
                      id={`search-result-${item.id}`}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group flex w-full items-center justify-between rounded-xl p-3 text-left transition-all ${
                        isSelected
                          ? 'bg-amber-100/80 shadow-xs ring-1 ring-amber-400/60 dark:bg-stone-800 dark:ring-amber-500/40'
                          : 'hover:bg-amber-50/60 dark:hover:bg-stone-800/50'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1 pr-3">
                        <div
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                            isSelected
                              ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950'
                              : 'bg-amber-500/10 text-amber-700 dark:bg-stone-700 dark:text-amber-400'
                          }`}
                        >
                          <CategoryIcon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-300">
                              {item.displayTitle}
                            </span>
                            <span
                              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${getCategoryBadgeColor(
                                item.categorySlug
                              )}`}
                            >
                              {item.category}
                            </span>
                          </div>

                          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-medium">
                            <span className="text-amber-700 dark:text-amber-400 font-semibold">
                              {item.subtitle}
                            </span>
                            {item.descriptionSnippet && (
                              <>
                                <span className="text-stone-300 dark:text-stone-600">•</span>
                                <span className="truncate text-stone-500 dark:text-stone-400 italic">
                                  {item.descriptionSnippet}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-stone-400 shrink-0">
                        {isSelected && (
                          <span className="hidden sm:inline-flex items-center gap-1 rounded bg-amber-200/60 dark:bg-stone-700 px-1.5 py-0.5 text-[10px] font-bold text-stone-700 dark:text-stone-200">
                            Jump <CornerDownLeft className="h-3 w-3" />
                          </span>
                        )}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isSelected ? 'translate-x-0.5 text-amber-700 dark:text-amber-400' : 'text-stone-300 dark:text-stone-600'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* No Results State */
              <div id="search-no-results" className="py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-stone-800 dark:text-amber-400 mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                  No matching heritage results found
                </h3>
                <p className="mx-auto mt-1 max-w-sm text-xs text-stone-500 dark:text-stone-400">
                  We couldn&apos;t find anything matching &quot;{query}&quot;. Try checking for spelling or explore one of the suggestions below.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                  {POPULAR_HERITAGE_SUGGESTIONS.slice(0, 6).map((sug) => (
                    <button
                      key={sug.term}
                      type="button"
                      onClick={() => setQuery(sug.term)}
                      className="rounded-xl border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-xs hover:border-amber-300 hover:text-amber-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-amber-600 dark:hover:text-amber-300"
                    >
                      {sug.term} ({sug.category})
                    </button>
                  ))}
                </div>
              </div>
            )
          ) : (
            /* Empty State: Suggestions & Trending */
            <div id="search-empty-state" className="space-y-6 py-2">
              {/* Recent Searches if any */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between px-1 pb-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                      <History className="h-3.5 w-3.5" />
                      <span>Recent Searches</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearRecentSearches}
                      className="text-[11px] text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-xs hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-800 dark:border-stone-800 dark:bg-stone-800/80 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800"
                      >
                        <Search className="h-3 w-3 text-stone-400" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Heritage Topics */}
              <div>
                <div className="flex items-center gap-1.5 px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  <TrendingUp className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Popular Heritage Topics & Quick Discoveries</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {POPULAR_HERITAGE_SUGGESTIONS.map((item) => (
                    <button
                      key={item.term}
                      type="button"
                      onClick={() => setQuery(item.term)}
                      className="group flex items-center justify-between rounded-xl border border-stone-200/80 bg-white/80 p-3 text-left shadow-xs transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/40 dark:border-stone-800 dark:bg-stone-800/60 dark:hover:border-stone-700 dark:hover:bg-stone-800"
                    >
                      <div>
                        <div className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                          {item.term}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          {item.state}
                        </div>
                      </div>
                      <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800 dark:bg-stone-700 dark:text-stone-300 dark:group-bg-amber-950 dark:group-hover:text-amber-300">
                        {item.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Exploration Shortcuts */}
              <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-3.5 text-xs text-stone-600 dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-400">
                <div className="font-bold text-amber-900 dark:text-amber-300 mb-1">
                  Discover Across All 28 States & 8 Union Territories
                </div>
                <p className="leading-relaxed">
                  Search by monument (e.g. <em>Taj Mahal</em>), classical dance (e.g. <em>Bharatanatyam</em>), traditional food (e.g. <em>Dal Baati Churma</em>), or state name (e.g. <em>Kerala</em>, <em>Ladakh</em>).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Keyboard Shortcuts */}
        <div className="flex items-center justify-between border-t border-amber-200/30 bg-stone-100/80 px-4 py-2.5 text-[11px] text-stone-500 dark:border-stone-800 dark:bg-stone-950/70 dark:text-stone-400">
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold dark:border-stone-700 dark:bg-stone-800">
                ↑
              </kbd>
              <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold dark:border-stone-700 dark:bg-stone-800">
                ↓
              </kbd>{' '}
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold dark:border-stone-700 dark:bg-stone-800">
                ↵
              </kbd>{' '}
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold dark:border-stone-700 dark:bg-stone-800">
                ESC
              </kbd>{' '}
              Close
            </span>
          </div>

          <span className="sm:hidden">Tap any result to open state page</span>

          <span className="font-medium text-amber-700 dark:text-amber-400">
            Rang-e-Bharat Unified Index
          </span>
        </div>
      </div>
    </div>
  );
};
