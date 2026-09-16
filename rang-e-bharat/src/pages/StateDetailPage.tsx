import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Compass,
  Sparkles,
  Calendar,
  Utensils,
  Landmark,
  Music,
  Trees,
  Award,
  BookOpen,
  ChevronRight,
  Languages,
  Shirt,
  Palette,
  Users,
  Mountain,
  Globe2,
  Layers,
  Flag,
  HelpCircle,
} from 'lucide-react';
import { getStateById, getPreviousAndNextState, getAllStates } from '../data/indiaData';
import { getStateAuxiliary } from '../data/stateMetadata';
import { getStateGallery } from '../data/stateGalleryData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ALL_CULTURE_DATA } from '../data/cultureData';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { PLACES_DATA } from '../data/placesData';

export const StateDetailPage: React.FC = () => {
  const { stateId, id } = useParams<{ stateId?: string; id?: string }>();
  const navigate = useNavigate();
  const activeId = stateId || id || '';
  const state = getStateById(activeId);
  const auxiliary = getStateAuxiliary(activeId);
  const adjacent = getPreviousAndNextState(activeId);
  const gallery = state ? (state.gallery || getStateGallery(state.id, state.name, state.region)) : undefined;

  // State pages use only fully authored records from the dedicated datasets.
  // We intentionally do not render raw state arrays as pseudo-detail cards.
  const stateCultureItems = state
    ? ALL_CULTURE_DATA.filter((item) => item.stateId === state.id && item.category !== 'Festivals')
    : [];
  const stateFestivalItems = state
    ? FESTIVALS_DATA.filter((festival) => festival.primaryStates.some((entry) => entry.id === state.id))
    : [];
  const statePlaceItems = state ? PLACES_DATA.filter((place) => place.stateId === state.id) : [];
  const stateMonumentItems = statePlaceItems.filter((place) =>
    ['Fort', 'Palace', 'Temple', 'Monument', 'Archaeological Site', 'Heritage Ensemble', 'Railway'].includes(place.category),
  );
  const stateUnescoItems = statePlaceItems.filter((place) => place.unescoStatus === 'World Heritage');
  const stateCultureByCategory = (category: string) =>
    stateCultureItems.filter((item) => item.category === category);

  const location = useLocation();
  const [activeNavSection, setActiveNavSection] = useState('overview');


  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '');
      const hashAliasMap: Record<string, string> = {
        'places-monuments': 'places',
        monuments: 'monuments-section',
        festivals: 'festivals-section',
        dance: 'dance-music-section',
        'art-crafts': 'art-handicrafts-section',
        art: 'art-handicrafts-section',
        clothing: 'clothing-section',
        personalities: 'famous-personalities-section',
        'geography-nature': 'geography-section',
        nature: 'nature-wildlife-section',
      };
      const targetHash = hashAliasMap[rawHash] || rawHash;

      const timer = setTimeout(() => {
        const element = document.getElementById(targetHash) || document.getElementById(rawHash);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActiveNavSection(rawHash);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNavSection('overview');
    }
  }, [activeId, location.hash]);

  // Smooth scroll handler for state navigation menu
  const scrollToSection = (sectionId: string) => {
    setActiveNavSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 404 Invalid State Handler
  if (!state) {
    return (
      <div id="state-not-found-view" className="flex-1 py-20 px-4 max-w-4xl mx-auto flex items-center justify-center min-h-[70vh]">
        <div className="w-full rounded-3xl border border-amber-200/80 bg-white/90 p-8 sm:p-12 text-center shadow-xl backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/90">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 mb-6">
            <Compass className="h-8 w-8 animate-spin-slow" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Heritage Archive
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
            We couldn't find this part of India.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-lg mx-auto">
            The state or union territory identifier "{activeId}" does not exist in our cultural records. Explore our interactive map to discover all 28 States and 8 Union Territories.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              id="back-to-explore-india-button"
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-600/20 hover:scale-[1.02] transition-transform"
            >
              <Compass className="h-4 w-4" />
              <span>Back to Explore India</span>
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
            >
              <Layers className="h-4 w-4" />
              <span>View All 36 States & UTs</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const navMenuItems = [
    { label: 'Overview', targetId: 'overview' },
    { label: 'History', targetId: 'history' },
    { label: 'Culture', targetId: 'culture' },
    { label: 'Food', targetId: 'food' },
    { label: 'Places', targetId: 'places' },
    { label: 'Facts', targetId: 'facts' },
  ];

  return (
    <div id={`state-detail-page-${state.id}`} className="flex-1 py-8 sm:py-12 bg-mandala-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            <Link to="/" className="hover:text-amber-700 dark:hover:text-amber-400">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/explore" className="hover:text-amber-700 dark:hover:text-amber-400">
              States & UTs
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-amber-700 dark:text-amber-400">{state.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">

            <Link
              to="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline px-1 py-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Map View</span>
            </Link>
          </div>
        </div>

        {/* 1. STATE HERO SECTION */}
        <motion.div
          id="overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 p-5 sm:p-10 lg:p-12 text-white shadow-2xl"
        >
          {/* Background Image with Dark Overlay if available */}
          {(gallery?.heroImage?.url || state.heroImage || state.images?.hero) && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={gallery?.heroImage?.url || state.heroImage || state.images?.hero}
                alt={gallery?.heroImage?.alt || `${state.name} Landscape & Cultural Heritage`}
                className="h-full w-full object-cover object-center opacity-30 mix-blend-overlay scale-105"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-orange-950/70 to-amber-950/90" />
            </div>
          )}

          {/* Subtle Decorative Mandala Background */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl z-1" />
          <div className="pointer-events-none absolute right-6 bottom-6 opacity-10 flex items-center justify-center z-1">
            <Compass className="h-64 w-64 sm:h-80 sm:w-80" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Col: Hero Information */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold backdrop-blur-md shadow-xs">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">
                  {state.region} India • {state.type === 'state' ? 'State of Bharat' : 'Union Territory'}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-xs break-words">
                  {state.name}
                </h1>
                {state.hindiName && (
                  <span className="font-serif text-lg sm:text-3xl text-amber-200 font-medium tracking-wide">
                    ({state.hindiName})
                  </span>
                )}
              </div>

              <p className="font-serif text-base sm:text-2xl text-amber-100 italic leading-snug break-words">
                "{state.tagline}"
              </p>

              <p className="text-xs sm:text-base text-amber-50/90 leading-relaxed max-w-2xl pt-1">
                {state.introduction}
              </p>

              {/* Quick Hero Badges */}
              <div className="pt-2 sm:pt-3 flex flex-wrap gap-2 sm:gap-3 text-xs">
                <div className="rounded-xl bg-black/30 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 font-medium border border-white/15">
                  <span className="text-amber-300">Capital:</span> {state.capital}
                </div>
                <div className="rounded-xl bg-black/30 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 font-medium border border-white/15">
                  <span className="text-amber-300">Languages:</span> {state.languages.slice(0, 2).join(', ')}
                </div>
                <div className="rounded-xl bg-black/30 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 font-medium border border-white/15">
                  <span className="text-amber-300">Best Season:</span> {state.bestTimeToVisit}
                </div>
              </div>
            </div>

            {/* Right Col: Visual Motif Display Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/15 p-4 sm:p-5 backdrop-blur-md shadow-lg text-center space-y-3 sm:space-y-3.5">
                {gallery?.heroImage ? (
                  <div className="overflow-hidden rounded-xl border border-white/20 shadow-inner">
                    <ImageWithFallback
                      src={gallery.heroImage.url}
                      alt={gallery.heroImage.alt}
                      fallbackTitle={gallery.heroImage.title}
                      fallbackSubtitle={gallery.heroImage.caption}
                      aspectRatio="wide"
                      showCaptionOverlay={true}
                      captionTitle={gallery.heroImage.title}
                      captionSubtitle={gallery.heroImage.caption}
                      className="h-28 sm:h-32 w-full object-cover"
                    />
                  </div>
                ) : state.images?.landscape ? (
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden rounded-xl border border-white/20 shadow-inner">
                    <img
                      src={state.images.landscape}
                      alt={state.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                        {state.name} Highlights
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/20 text-white shadow-inner">
                    <Landmark className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                )}
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold">
                    Cultural Identity
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mt-0.5">
                    {state.name} Heritage
                  </h3>
                </div>
                <div className="pt-2 border-t border-white/15 text-xs text-amber-100/90 space-y-1 text-left">
                  <div className="flex justify-between">
                    <span className="text-amber-200">Formation:</span>
                    <span className="font-semibold text-white">{auxiliary.formation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">Geographic Area:</span>
                    <span className="font-semibold text-white">{auxiliary.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">UNESCO Sites:</span>
                    <span className="font-semibold text-white">{stateUnescoItems.length} Listed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STATE IN-PAGE NAVIGATION SUB-MENU */}
        <div
          id="state-page-nav-bar"
          className="sticky top-16 sm:top-20 z-30 flex items-center justify-start md:justify-center overflow-x-auto rounded-2xl border border-amber-200/80 bg-white/95 p-1 sm:p-1.5 shadow-md backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/95 scrollbar-none w-full max-w-full px-2"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-max py-0.5">
            {navMenuItems.map((item) => (
              <button
                key={item.targetId}
                type="button"
                onClick={() => scrollToSection(item.targetId)}
                className={`rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeNavSection === item.targetId
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30'
                    : 'text-stone-600 hover:bg-amber-50 hover:text-amber-800 dark:text-stone-300 dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. QUICK FACTS SECTION */}
        <section id="quick-facts-section" className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Quick Facts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Fact 1: Capital */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Capital City
              </span>
              <p className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                {state.capital}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Administrative Hub
              </span>
            </div>

            {/* Fact 2: Region */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Region of India
              </span>
              <p className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                {state.region}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                {state.type === 'state' ? 'State' : 'Union Territory'}
              </span>
            </div>

            {/* Fact 3: Languages */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Primary Languages
              </span>
              <p className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                {state.languages.join(', ')}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Spoken Dialects
              </span>
            </div>

            {/* Fact 4: Famous For */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Famous For
              </span>
              <p className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                {auxiliary.famousFor[0] || state.tagline}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Renowned Identity
              </span>
            </div>

            {/* Fact 5: Area */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Total Area
              </span>
              <p className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                {auxiliary.area}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Geographic Span
              </span>
            </div>

            {/* Fact 6: Formation */}
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4.5 shadow-xs dark:border-stone-800 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Formation Date
              </span>
              <p className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                {auxiliary.formation}
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Statehood Milestone
              </span>
            </div>
          </div>
        </section>

        {/* 3. INTRODUCTION SECTION */}
        <section id="introduction-section" className="rounded-3xl border border-amber-200/80 bg-white/95 p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900/95">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Introduction to {state.name}
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                The essence, ethos, and geographic significance of {state.name}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            {state.introduction}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-stone-100 dark:border-stone-800">
            <span className="text-xs font-semibold text-stone-400 mr-2 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-600" /> Renowned Cultural Markers:
            </span>
            {auxiliary.famousFor.map((item, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-amber-50 dark:bg-stone-800 px-3 py-1 text-xs font-semibold text-amber-900 dark:text-amber-300 border border-amber-200/50 dark:border-stone-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 4. HISTORY SECTION */}
        <section id="history" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                History & Ancient Foundations
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Dynasties, historical epochs, and state evolution
              </p>
            </div>
          </div>

          <div className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed space-y-4">
            <p>{state.history}</p>
          </div>
        </section>

        {/* 5. CULTURE & TRADITIONS SECTION */}
        <section id="culture" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Culture & Traditions</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only individually authored cultural records are shown below.</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{state.culture}</p>
          {stateCultureByCategory('Traditions').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateCultureByCategory('Traditions').map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-white dark:border-stone-700 dark:bg-stone-900">
                  <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-36 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{item.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.shortDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 6. FESTIVALS SECTION */}
        <section id="festivals-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400"><Calendar className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Festivals & Celebrations</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only festivals with their own editable records and images are shown.</p>
            </div>
          </div>
          {stateFestivalItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateFestivalItems.map((festival) => (
                <article key={festival.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-800/60">
                  <img src={festival.imageUrl} alt={festival.imageAlt} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{festival.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{festival.shortDescription}</p>
                    <span className="mt-3 block text-[11px] font-semibold text-rose-700 dark:text-rose-400">{festival.months}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 7. FOOD & GASTRONOMY SECTION */}
        <section id="food" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Utensils className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Food & Culinary Heritage</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only individually authored food records are shown.</p>
            </div>
          </div>
          {stateCultureByCategory('Food').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateCultureByCategory('Food').map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-amber-50/50 dark:border-stone-800 dark:bg-stone-800/60">
                  <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{item.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.shortDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 8. CLOTHING & TRADITIONAL ATTIRE */}
        <section id="clothing-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"><Shirt className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Clothing & Traditional Weaves</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only individually authored clothing records are shown.</p>
            </div>
          </div>
          {stateCultureByCategory('Clothing').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateCultureByCategory('Clothing').map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/60 dark:border-stone-800 dark:bg-stone-800/50">
                  <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{item.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.shortDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 9. ART & HANDICRAFTS */}
        <section id="art-handicrafts-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Palette className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Art & Handicrafts</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only individually authored art and craft records are shown.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(['Art', 'Handicrafts'] as const).map((category) => {
              const items = stateCultureByCategory(category);
              if (items.length === 0) return null;
              return (
                <div key={category} className="rounded-2xl bg-stone-50/70 p-5 border border-stone-200 dark:bg-stone-800/50 dark:border-stone-700">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3">{category === 'Art' ? 'Indigenous Art & Paintings' : 'Master Handicrafts & Handlooms'}</h3>
                  <div className="grid gap-4">
                    {items.map((item) => (
                      <article key={item.id} className="overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
                        <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-32 w-full object-cover" loading="lazy" />
                        <div className="p-3">
                          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">{item.name}</h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.shortDescription}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. DANCE & MUSIC */}
        <section id="dance-music-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400"><Music className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Dance & Musical Heritage</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only individually authored dance and music records are shown.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(['Dance', 'Music'] as const).map((category) => {
              const items = stateCultureByCategory(category);
              if (items.length === 0) return null;
              return (
                <div key={category} className="rounded-2xl border border-stone-200/90 bg-stone-50/70 p-5 dark:border-stone-800 dark:bg-stone-800/60">
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">{category === 'Dance' ? 'Dance Traditions' : 'Musical Forms'}</h3>
                  <div className="grid gap-4">
                    {items.map((item) => (
                      <article key={item.id} className="overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
                        <img src={item.imageUrl} alt={item.imageAlt || item.name} className="h-36 w-full object-cover" loading="lazy" />
                        <div className="p-3">
                          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">{item.name}</h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.shortDescription}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. FAMOUS PLACES */}
        <section id="places" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><MapPin className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Famous Places & Travel Destinations</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Only places with their own editable records and images are shown.</p>
            </div>
          </div>
          {statePlaceItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {statePlaceItems.map((place) => (
                <article key={place.id} className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white dark:border-stone-800 dark:bg-stone-800/50">
                  <img src={place.imageUrl} alt={place.imageAlt} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{place.name}</h3>
                    <span className="mt-1 block text-[11px] text-stone-500 dark:text-stone-400">{place.location} · {place.category}</span>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{place.shortDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 12. MONUMENTS & UNESCO SITES */}
        <section id="monuments-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Landmark className="h-5 w-5" /></div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">Monuments & Architectural Wonders</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Monument and UNESCO entries come directly from the detailed places dataset.</p>
            </div>
          </div>
          {stateMonumentItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateMonumentItems.map((place) => (
                <article key={place.id} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800">
                  <img src={place.imageUrl} alt={place.imageAlt} className="h-36 w-full object-cover" loading="lazy" />
                  <div className="p-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">{place.category}</span>
                    <h4 className="mt-1 text-sm font-bold text-stone-900 dark:text-stone-100">{place.name}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{place.shortDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {stateUnescoItems.length > 0 && (
            <div className="mt-6 pt-5 border-t border-stone-100 dark:border-stone-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5"><Award className="h-4 w-4" /> UNESCO World Heritage Sites</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stateUnescoItems.map((place) => (
                  <article key={place.id} className="overflow-hidden rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/70 dark:border-amber-900/50">
                    <img src={place.imageUrl} alt={place.imageAlt} className="h-32 w-full object-cover" loading="lazy" />
                    <div className="p-3.5">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">{place.unescoType || 'UNESCO'}</span>
                      <h4 className="mt-1 text-xs font-bold text-amber-950 dark:text-amber-200">{place.name}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 13. FAMOUS PERSONALITIES */}
        <section id="famous-personalities-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Famous Personalities & Visionaries
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Freedom fighters, philosophers, writers, artists, and leaders
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(state.famousPersonalities || []).map((person, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/80 bg-stone-50/60 p-4 dark:border-stone-800 dark:bg-stone-800/50 flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:text-blue-300 font-serif font-bold text-sm shrink-0">
                  {person.charAt(0)}
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">
                    {person}
                  </h3>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400">
                    Iconic Figure of {state.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 14. LANGUAGES */}
        <section id="languages-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Languages className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Languages & Regional Dialects
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Official languages, native scripts, and vernacular literature
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {state.languages.map((lang, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-2xl bg-teal-50/80 dark:bg-stone-800 px-4 py-2.5 border border-teal-200/60 dark:border-stone-700 text-xs font-bold text-teal-900 dark:text-teal-300"
              >
                <Languages className="h-4 w-4 text-teal-600" />
                <span>{lang}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 15. GEOGRAPHY */}
        <section id="geography-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-500/10 text-stone-700 dark:text-stone-300">
              <Mountain className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Geography & Topography
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Terrains, climate profiles, borders, and natural landscapes
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            {state.geography}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 dark:border-stone-800 text-xs">
            <div className="rounded-xl bg-stone-50 dark:bg-stone-800/60 p-3.5">
              <span className="text-stone-400 uppercase font-semibold block mb-1">Total Land Area</span>
              <span className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{auxiliary.area}</span>
            </div>
            <div className="rounded-xl bg-stone-50 dark:bg-stone-800/60 p-3.5">
              <span className="text-stone-400 uppercase font-semibold block mb-1">Recommended Visit Season</span>
              <span className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{state.bestTimeToVisit}</span>
            </div>
          </div>
        </section>

        {/* 16. NATURE & WILDLIFE */}
        <section id="nature-wildlife-section" className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Trees className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Nature, Rivers & Wildlife
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                National parks, wildlife sanctuaries, and major river basins
              </p>
            </div>
          </div>

          {/* Nature & Wildlife Photography Showcase */}
          {gallery?.natureImages && gallery.natureImages.length > 0 && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.natureImages.map((nImg, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-2xl border border-emerald-200/70 bg-emerald-50/40 p-3 dark:border-emerald-950/60 dark:bg-stone-800/80"
                >
                  <ImageWithFallback
                    src={nImg.url}
                    alt={nImg.alt}
                    fallbackTitle={nImg.title}
                    fallbackSubtitle={nImg.caption}
                    aspectRatio="landscape"
                    showCaptionOverlay={true}
                    captionTitle={nImg.title}
                    captionSubtitle={nImg.caption}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-2.5">
                    <h3 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">
                      {nImg.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {nImg.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* National Parks */}
            <div className="rounded-2xl border border-stone-200/90 bg-stone-50/60 p-4 dark:border-stone-800 dark:bg-stone-800/60">
              <h3 className="font-serif text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-2">
                National Parks
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                {state.nationalParks.map((np, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{np}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wildlife */}
            <div className="rounded-2xl border border-stone-200/90 bg-stone-50/60 p-4 dark:border-stone-800 dark:bg-stone-800/60">
              <h3 className="font-serif text-sm font-bold text-amber-800 dark:text-amber-400 mb-2">
                Native Wildlife
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                {state.wildlife.map((w, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rivers */}
            <div className="rounded-2xl border border-stone-200/90 bg-stone-50/60 p-4 dark:border-stone-800 dark:bg-stone-800/60">
              <h3 className="font-serif text-sm font-bold text-cyan-800 dark:text-cyan-400 mb-2">
                Major Rivers & Waterways
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                {state.rivers.map((r, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 17. INTERESTING FACTS */}
        <section id="facts" className="rounded-3xl border border-amber-300/80 bg-amber-50/70 p-6 sm:p-8 shadow-xs dark:border-amber-900/60 dark:bg-amber-950/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white shadow-xs">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200">
                Interesting Facts & Trivia
              </h2>
              <p className="text-xs text-amber-800/80 dark:text-amber-400">
                Fascinating highlights and unique records from {state.name}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {state.interestingFacts.map((fact, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl bg-white/90 p-4 border border-amber-200/70 shadow-2xs dark:bg-stone-900/90 dark:border-stone-800"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 shrink-0 font-bold text-xs">
                  ★
                </div>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PREVIOUS / NEXT STATE BOTTOM NAVIGATION */}
        <div className="pt-6 border-t border-stone-200/90 dark:border-stone-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {adjacent?.prev ? (
              <Link
                id="prev-state-button"
                to={`/states/${adjacent.prev.id}`}
                className="group flex items-center justify-between rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <ArrowLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                      ← Previous State
                    </span>
                    <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {adjacent.prev.name}
                    </h4>
                  </div>
                </div>
                <span className="text-xs text-stone-400 hidden sm:inline">
                  {adjacent.prev.region}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {adjacent?.next ? (
              <Link
                id="next-state-button"
                to={`/states/${adjacent.next.id}`}
                className="group flex items-center justify-between rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex items-center gap-3 order-2 sm:order-1 text-right sm:text-left">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                      Next State →
                    </span>
                    <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {adjacent.next.name}
                    </h4>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors order-1 sm:order-2">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
