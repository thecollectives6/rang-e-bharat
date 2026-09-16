import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  CheckCircle2,
  HelpCircle,
  Landmark,
  Utensils,
  Music,
  Info,
} from 'lucide-react';
import { INDIA_MAP_PATHS, INDIA_MAP_VIEWBOX, REGION_COLORS, StateMapPath } from '../data/indiaMapPaths';
import { getStateById, getAllStates } from '../data/indiaData';
import { StateData, IndianRegion } from '../types/state';
import { ALL_CULTURE_DATA } from '../data/cultureData';
import { PLACES_DATA } from '../data/placesData';

interface TooltipPosition {
  x: number;
  y: number;
}

export const InteractiveIndiaMap: React.FC = () => {
  const navigate = useNavigate();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Active / Hovered State
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Filters and Zoom/Pan
  const [activeRegionFilter, setActiveRegionFilter] = useState<IndianRegion | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  // Currently inspected state data (from indiaData.ts)
  const activeStateId = hoveredStateId || selectedStateId;
  const activeStateData: StateData | undefined = useMemo(() => {
    return getStateById(activeStateId);
  }, [activeStateId]);

  // List of all states for search/filtering
  const allStates = useMemo(() => getAllStates(), []);

  const stateCulture = useMemo(() => ALL_CULTURE_DATA.filter((item) => item.stateId === activeStateId), [activeStateId]);
  const statePlaces = useMemo(() => PLACES_DATA.filter((place) => place.stateId === activeStateId), [activeStateId]);

  // Filtered map paths
  const filteredMapPaths = useMemo(() => {
    if (activeRegionFilter === 'All') return INDIA_MAP_PATHS;
    return INDIA_MAP_PATHS.filter((p) => p.region === activeRegionFilter);
  }, [activeRegionFilter]);

  // Handle click / tap on state (mobile-friendly: first tap previews in intelligence card, second tap navigates)
  const handleStateClick = (stateId: string) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isMobile) {
      if (selectedStateId === stateId) {
        navigate(`/states/${stateId}`);
      } else {
        setSelectedStateId(stateId);
        setHoveredStateId(stateId);
      }
    } else {
      setSelectedStateId(stateId);
      navigate(`/states/${stateId}`);
    }
  };

  // Handle SVG Mouse Move for Tooltip
  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>, stateId: string) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTooltipPos({ x, y });
    setHoveredStateId(stateId);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setHoveredStateId(null);
  };

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setActiveRegionFilter('All');
  };

  // Regions list for filtering
  const regions: (IndianRegion | 'All')[] = [
    'All',
    'North',
    'South',
    'West',
    'East',
    'Central',
    'Northeast',
    'Islands',
  ];

  return (
    <div
      id="interactive-india-map-container"
      className="relative rounded-2xl sm:rounded-3xl border border-amber-200/80 bg-gradient-to-b from-stone-50/90 via-amber-50/30 to-stone-50/90 p-3 sm:p-6 lg:p-8 shadow-xl backdrop-blur-md dark:border-stone-800 dark:from-stone-900/90 dark:via-stone-900/50 dark:to-stone-950/90"
    >
      {/* Legend & Instructions Header Banner */}
      <div
        id="map-instruction-banner"
        className="mb-4 sm:mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 p-3 sm:px-5 sm:py-3.5 text-center md:text-left dark:border-amber-500/30 dark:bg-amber-950/30"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 text-left">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white shadow-sm shadow-amber-600/30">
            <Compass className="h-5 w-5 animate-spin-slow" />
          </div>
          <div>
            <p className="font-serif text-xs sm:text-base font-bold text-amber-950 dark:text-amber-200">
              <span className="hidden sm:inline">Hover over a state to discover it. Click to explore its culture.</span>
              <span className="sm:hidden">Tap a state to inspect it. Tap again to explore its culture.</span>
            </p>
            <p className="text-[11px] sm:text-xs text-amber-800/80 dark:text-amber-300/80">
              Select any of the 28 States & 8 Union Territories across Bharat.
            </p>
          </div>
        </div>

        {/* Quick Search Dropdown */}
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              id="state-quick-search-input"
              type="text"
              placeholder="Search any state or UT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search any state or Union Territory to inspect on map"
              className="w-full rounded-xl border border-stone-300 bg-white/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
            />
            {searchQuery.trim() && (
              <div
                role="listbox"
                aria-label="Search suggestions"
                className="absolute top-full left-0 right-0 z-50 mt-1 max-h-48 overflow-y-auto rounded-xl border border-stone-200 bg-white p-1 shadow-lg dark:border-stone-700 dark:bg-stone-800"
              >
                {allStates
                  .filter(
                    (s) =>
                      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      s.capital.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((state) => (
                    <button
                      key={state.id}
                      type="button"
                      role="option"
                      aria-selected={selectedStateId === state.id}
                      onClick={() => {
                        setHoveredStateId(state.id);
                        setSelectedStateId(state.id);
                        setSearchQuery('');
                      }}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-xs hover:bg-amber-50 dark:hover:bg-stone-700 focus-visible:bg-amber-100 dark:focus-visible:bg-stone-700 focus:outline-none"
                    >
                      <span className="font-medium text-stone-800 dark:text-stone-200">{state.name}</span>
                      <span className="text-[10px] text-stone-400">{state.region}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Region Filter Chips */}
      <div id="map-region-filter-bar" className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 scrollbar-none" role="toolbar" aria-label="Filter states by region">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mr-1 flex items-center gap-1 shrink-0">
          <Sparkles className="h-3 w-3 text-amber-600" aria-hidden="true" /> Filter:
        </span>
        {regions.map((region) => {
          const isActive = activeRegionFilter === region;
          return (
            <button
              key={region}
              id={`filter-region-${region.toLowerCase()}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveRegionFilter(region)}
              className={`shrink-0 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30 ring-2 ring-amber-600/30'
                  : 'bg-white/80 text-stone-700 hover:bg-stone-200/80 dark:bg-stone-800/80 dark:text-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Map (Left/Center) + Active State Intelligence Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        {/* MAP CANVAS CONTAINER */}
        <div
          ref={mapContainerRef}
          id="india-svg-map-wrapper"
          className="relative lg:col-span-7 xl:col-span-8 flex flex-col items-center justify-center rounded-2xl border border-stone-200/90 bg-stone-50/50 p-2 sm:p-4 dark:border-stone-800 dark:bg-stone-900/40 overflow-hidden min-h-[360px] sm:min-h-[480px] md:min-h-[580px]"
        >
          {/* Zoom & Reset Controls */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex flex-col gap-1 sm:gap-1.5 bg-white/95 dark:bg-stone-800/95 p-1 sm:p-1.5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm backdrop-blur-xs" role="toolbar" aria-label="Map view zoom controls">
            <button
              type="button"
              onClick={handleZoomIn}
              aria-label="Zoom in map"
              title="Zoom In"
              className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors"
            >
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              aria-label="Zoom out map"
              title="Zoom Out"
              className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors"
            >
              <ZoomOut className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              aria-label="Reset map zoom and center"
              title="Reset View"
              className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* SVG Map Canvas */}
          <motion.div
            animate={{ scale: zoomLevel, x: panOffset.x, y: panOffset.y }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <svg
              id="interactive-india-svg"
              role="region"
              aria-label="Interactive map of India. Use Tab to move through states and Enter or Space to inspect a state."
              viewBox={INDIA_MAP_VIEWBOX}
              className="w-full max-w-[620px] max-h-[620px] h-auto drop-shadow-sm select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* SVG Filter for Active/Hover State Glow */}
                <filter id="map-hover-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Linear Gradients for Regional Palette */}
                <linearGradient id="gradient-saffron" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="gradient-active" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#c2410c" />
                </linearGradient>
              </defs>

              {/* Map Ocean/Background subtle boundaries */}
              <g id="map-states-group">
                {INDIA_MAP_PATHS.map((item: StateMapPath) => {
                  const isHovered = hoveredStateId === item.id;
                  const isSelected = selectedStateId === item.id;
                  const isDimmed = activeRegionFilter !== 'All' && item.region !== activeRegionFilter;
                  const regionConfig = REGION_COLORS[item.region] || REGION_COLORS.North;

                  return (
                    <g key={item.id} id={`state-svg-group-${item.id}`}>
                      {/* State Interactive Path */}
                      <path
                        id={`state-path-${item.id}`}
                        data-state-id={item.id}
                        data-state-name={item.name}
                        d={item.path}
                        tabIndex={0}
                        role="button"
                        aria-label={`${item.name} (${item.code}), ${item.region} India. Press Enter or Space to inspect and explore.`}
                        aria-pressed={isSelected}
                        className={`transition-all duration-300 cursor-pointer focus:outline-none focus-visible:stroke-amber-950 focus-visible:stroke-[3] focus-visible:fill-amber-400 dark:focus-visible:stroke-white dark:focus-visible:fill-amber-400 ${
                          isSelected
                            ? 'fill-amber-500 stroke-amber-950 stroke-[2.5] dark:fill-amber-400 dark:stroke-amber-100'
                            : isHovered
                            ? 'fill-orange-500 stroke-amber-900 stroke-[2] dark:fill-orange-400 dark:stroke-amber-200'
                            : isDimmed
                            ? 'fill-stone-200/40 stroke-stone-300/40 dark:fill-stone-800/30 dark:stroke-stone-800/40'
                            : 'fill-amber-100/90 hover:fill-amber-300/90 stroke-amber-800/40 hover:stroke-amber-900 stroke-[1.2] dark:fill-stone-800/90 dark:hover:fill-amber-900/70 dark:stroke-stone-600 dark:hover:stroke-amber-400'
                        }`}
                        style={{
                          transformOrigin: `${item.centroid.x}px ${item.centroid.y}px`,
                          transform: isHovered || isSelected ? 'scale(1.03)' : 'scale(1)',
                          filter: isHovered || isSelected ? 'url(#map-hover-glow)' : 'none',
                        }}
                        onMouseEnter={(e) => handleMouseMove(e, item.id)}
                        onMouseMove={(e) => handleMouseMove(e, item.id)}
                        onMouseLeave={handleMouseLeave}
                        onFocus={() => {
                          setHoveredStateId(item.id);
                          setSelectedStateId(item.id);
                        }}
                        onBlur={() => {
                          setHoveredStateId(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleStateClick(item.id);
                          }
                        }}
                        onClick={() => handleStateClick(item.id)}
                      />

                      {/* State Centroid Label / Code Marker (shown if not too small or if hovered) */}
                      {!item.isSmall && (
                        <text
                          x={item.centroid.x}
                          y={item.centroid.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`pointer-events-none text-[11px] font-sans font-bold transition-opacity duration-200 select-none ${
                            isSelected || isHovered
                              ? 'fill-white font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                              : isDimmed
                              ? 'fill-stone-400/30'
                              : 'fill-stone-700/75 dark:fill-stone-300/80'
                          }`}
                        >
                          {item.code}
                        </text>
                      )}

                      {/* Accessible pinpoint for small states and Union Territories */}
                      {item.isSmall && (
                        <g
                          id={`small-ut-pin-${item.id}`}
                          className="cursor-pointer"
                          tabIndex={0}
                          role="button"
                          aria-label={`${item.name} (${item.code})`}
                          onMouseEnter={(e) => handleMouseMove(e as any, item.id)}
                          onMouseMove={(e) => handleMouseMove(e as any, item.id)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleStateClick(item.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleStateClick(item.id);
                            }
                          }}
                        >
                          <circle
                            cx={item.centroid.x}
                            cy={item.centroid.y}
                            r={isSelected || isHovered ? 9 : 7}
                            className={`transition-all duration-200 ${
                              isSelected || isHovered
                                ? 'fill-amber-500 stroke-white stroke-2'
                                : 'fill-amber-700/85 stroke-amber-200 stroke-1 hover:fill-amber-500'
                            }`}
                          />
                          <circle
                            cx={item.centroid.x}
                            cy={item.centroid.y}
                            r={3}
                            className="fill-white pointer-events-none"
                          />
                          <text
                            x={item.centroid.x}
                            y={item.centroid.y - 12}
                            textAnchor="middle"
                            className={`pointer-events-none text-[10px] font-sans font-bold select-none ${
                              isSelected || isHovered
                                ? 'fill-amber-900 font-extrabold dark:fill-amber-300'
                                : 'fill-stone-700/90 dark:fill-stone-200'
                            }`}
                          >
                            {item.code}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Special Territory Pin Insets for tiny UTs */}
              <g id="territory-insets" className="text-[9px] font-sans fill-stone-500 dark:fill-stone-400">
                <text x="50" y="870" className="italic font-medium">
                  * Map representation for cultural and educational discovery of Indian heritage.
                </text>
              </g>
            </svg>
          </motion.div>

          {/* DYNAMIC FLOATING TOOLTIP */}
          <AnimatePresence>
            {showTooltip && tooltipPos && activeStateData && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  left: Math.min(Math.max(tooltipPos.x + 12, 10), 380),
                  top: Math.max(tooltipPos.y - 80, 10),
                  pointerEvents: 'none',
                  zIndex: 40,
                }}
                className="rounded-xl border border-amber-300 bg-stone-900/95 px-3.5 py-2.5 shadow-2xl backdrop-blur-md text-white max-w-[220px]"
              >
                <div className="flex items-center justify-between gap-2 border-b border-amber-500/30 pb-1 mb-1">
                  <span className="font-serif font-bold text-amber-400 text-sm">
                    {activeStateData.name}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {activeStateData.region}
                  </span>
                </div>
                {activeStateData.hindiName && (
                  <p className="text-[11px] font-serif text-amber-200/80 mb-0.5">
                    {activeStateData.hindiName}
                  </p>
                )}
                <p className="text-[11px] text-stone-300">
                  <strong className="text-amber-300">Capital:</strong> {activeStateData.capital}
                </p>
                <p className="text-[10px] text-amber-400 mt-1 flex items-center gap-1 font-semibold">
                  <span>Click to explore culture</span>
                  <ArrowRight className="h-2.5 w-2.5" />
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ACTIVE STATE INTELLIGENCE PANEL (Live Cultural Profile) */}
        <div
          id="state-intelligence-panel"
          aria-live="polite"
          aria-atomic="true"
          className="lg:col-span-5 xl:col-span-4 flex flex-col rounded-2xl border border-stone-200/90 bg-white/95 p-4 sm:p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900/95"
        >
          {activeStateData ? (
            <div className="space-y-3.5 sm:space-y-4">
              {/* Header Badge */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 dark:bg-amber-950/70 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:text-amber-300">
                    <MapPin className="h-3 w-3 text-amber-600 shrink-0" />
                    <span className="truncate">{activeStateData.region} India • {activeStateData.type === 'state' ? 'State' : 'Union Territory'}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 flex flex-wrap items-baseline gap-1.5 sm:gap-2 break-words">
                    <span>{activeStateData.name}</span>
                    {activeStateData.hindiName && (
                      <span className="text-sm font-normal text-amber-700 dark:text-amber-400 font-serif">
                        ({activeStateData.hindiName})
                      </span>
                    )}
                  </h3>
                </div>

                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Landmark className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs font-medium text-amber-800 dark:text-amber-300 italic bg-amber-50/70 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                "{activeStateData.tagline}"
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-stone-100/70 dark:bg-stone-800/60 p-2.5">
                  <span className="text-stone-400 block text-[10px] uppercase font-semibold">Capital</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 truncate block">{activeStateData.capital}</span>
                </div>
                <div className="rounded-xl bg-stone-100/70 dark:bg-stone-800/60 p-2.5">
                  <span className="text-stone-400 block text-[10px] uppercase font-semibold">Languages</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 line-clamp-1">
                    {activeStateData.languages.slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>

              {/* Cultural Highlights Breakdown */}
              <div className="space-y-2 sm:space-y-2.5 pt-1 text-xs">
                <div className="flex items-start gap-2">
                  <Music className="h-4 w-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="text-stone-900 dark:text-stone-200">Dance & Music:</strong>
                    <span className="text-stone-600 dark:text-stone-400 ml-1">
                      {stateCulture.filter((item) => item.category === 'Dance').slice(0, 3).map((item) => item.name).join(', ') || 'See detailed Culture records'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Utensils className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="text-stone-900 dark:text-stone-200">Iconic Food:</strong>
                    <span className="text-stone-600 dark:text-stone-400 ml-1">
                      {stateCulture.filter((item) => item.category === 'Food').slice(0, 3).map((item) => item.name).join(', ') || 'See detailed Culture records'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Landmark className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="text-stone-900 dark:text-stone-200">Key Monuments:</strong>
                    <span className="text-stone-600 dark:text-stone-400 ml-1 line-clamp-1">
                      {statePlaces.filter((place) => ['Fort', 'Palace', 'Temple', 'Monument', 'Archaeological Site', 'Heritage Ensemble', 'Railway'].includes(place.category)).slice(0, 2).map((place) => place.name).join(', ') || 'See detailed Places records'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Introduction Snippet */}
              <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed border-t border-stone-100 dark:border-stone-800 pt-3">
                {activeStateData.introduction}
              </p>

              {/* Full State Page Navigation Button */}
              <div className="pt-2">
                <button
                  id={`view-full-state-btn-${activeStateData.id}`}
                  type="button"
                  onClick={() => handleStateClick(activeStateData.id)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-600/20 transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <span className="truncate">Explore {activeStateData.name} Heritage</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center text-stone-400">
              <Info className="h-8 w-8 mb-2 text-amber-500" />
              <p className="text-sm">Hover or tap any state on the map to inspect its cultural profile.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Territory Select Buttons Bar (for seamless touch/mobile access to smaller UTs) */}
      <div className="mt-6 pt-4 border-t border-amber-200/50 dark:border-stone-800">
        <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2.5 flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
          <span>Quick Territory Shortcuts (Island & Urban UTs):</span>
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {['delhi', 'goa', 'ladakh', 'puducherry', 'chandigarh', 'lakshadweep', 'andaman-and-nicobar-islands'].map((utId) => {
            const st = getStateById(utId);
            if (!st) return null;
            return (
              <button
                key={utId}
                id={`quick-ut-btn-${utId}`}
                type="button"
                aria-pressed={activeStateId === utId}
                aria-label={`Inspect ${st.name} on map`}
                onClick={() => handleStateClick(utId)}
                onMouseEnter={() => setHoveredStateId(utId)}
                className={`rounded-lg px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-medium border transition-colors ${
                  activeStateId === utId
                    ? 'border-amber-500 bg-amber-500 text-white'
                    : 'border-stone-200 bg-white/70 text-stone-700 hover:border-amber-400 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300'
                }`}
              >
                {st.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
