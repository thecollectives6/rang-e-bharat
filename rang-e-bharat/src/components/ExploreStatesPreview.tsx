import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStateById } from '../data/indiaData';
import { InteractiveIndiaMap } from './InteractiveIndiaMap';
import { ImageWithFallback } from './ImageWithFallback';

// Featured spotlight state IDs from the centralized dataset
const SPOTLIGHT_IDS = [
  'rajasthan',
  'kerala',
  'west-bengal',
  'tamil-nadu',
  'assam',
  'punjab',
  'gujarat',
  'ladakh',
];

export const ExploreStatesPreview: React.FC = () => {
  const handleScrollToMap = () => {
    const el = document.getElementById('interactive-india-map-container');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const spotlightStates = SPOTLIGHT_IDS.map((id) => getStateById(id)).filter(Boolean);

  return (
    <section
      id="explore-states-preview-section"
      className="py-16 md:py-24 bg-stone-100/70 dark:bg-stone-900/50 border-t border-amber-100 dark:border-stone-800 relative overflow-hidden"
    >
      {/* Background Subtle Mandala Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
            <Compass className="h-4 w-4" />
            <span>Geographic & Cultural Map</span>
          </div>

          <h2
            id="explore-states-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Explore India State by State
          </h2>

          <p
            id="explore-states-description"
            className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal"
          >
            Choose a state and discover its unique history, culture, traditions, food and places.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              id="explore-the-map-button"
              type="button"
              onClick={handleScrollToMap}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-orange-600/20 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              <Compass className="h-5 w-5" />
              <span>Explore the Map</span>
            </button>
          </div>
        </motion.div>

        {/* 1. DEDICATED INTERACTIVE MAP COMPONENT */}
        <div className="mb-16">
          <InteractiveIndiaMap />
        </div>

        {/* 2. FEATURED SPOTLIGHT STATES HEADER */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-200/80 dark:border-stone-800 pt-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Cultural Spotlight
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Featured States & UTs
            </h3>
          </div>
        </div>

        {/* State Preview Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {spotlightStates.map((state, idx) => {
            if (!state) return null;
            return (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                id={`state-card-preview-${state.id}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white/90 p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300 dark:border-stone-800 dark:bg-stone-900/90 dark:hover:border-stone-700"
              >
                <div>
                  <div className="relative mb-3 overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={state.heroImage || state.images?.hero}
                      alt={`${state.name} Landscape & Cultural Heritage`}
                      fallbackTitle={state.name}
                      fallbackSubtitle={state.capital}
                      aspectRatio="wide"
                      showCaptionOverlay={false}
                      className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                      {state.region}
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {state.type === 'state' ? 'State' : 'UT'}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {state.name}
                      </h3>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 font-medium line-clamp-2">
                    {state.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-medium text-amber-700 dark:text-amber-400">
                  <Link
                    to={`/states/${state.id}`}
                    className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>State Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="text-[10px] text-stone-400">Capital: {state.capital}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
