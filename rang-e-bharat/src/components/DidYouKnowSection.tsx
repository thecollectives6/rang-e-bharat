import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, RefreshCw, Sparkles, MapPin } from 'lucide-react';
import { CULTURAL_FACTS } from '../data/homeContent';

export const DidYouKnowSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFact = CULTURAL_FACTS[currentIndex];

  const handleNextFact = () => {
    let nextIndex = Math.floor(Math.random() * CULTURAL_FACTS.length);
    // Ensure we don't show the exact same fact consecutively if multiple exist
    if (nextIndex === currentIndex && CULTURAL_FACTS.length > 1) {
      nextIndex = (currentIndex + 1) % CULTURAL_FACTS.length;
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <section
      id="did-you-know-section"
      className="py-16 md:py-24 bg-stone-50/80 dark:bg-stone-900/40 border-t border-amber-100 dark:border-stone-800 relative overflow-hidden"
    >
      {/* Indian Background Geometric Accent */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
            <Lightbulb className="h-4 w-4" />
            <span>Fascinating Bharat Trivia</span>
          </div>

          <h2
            id="did-you-know-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Did You Know?
          </h2>

          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            Discover lesser-known civilizational wonders, ingenious ancient inventions, and cultural marvels of India.
          </p>
        </motion.div>

        {/* Fact Card with AnimatePresence for smooth transitions */}
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFact.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              id="active-fact-card"
              className="relative overflow-hidden rounded-3xl border border-amber-300/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-7 sm:p-10 shadow-xl dark:border-amber-700/40 dark:from-stone-900 dark:via-stone-900/90 dark:to-amber-950/20"
            >
              {/* Badge & Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/50 pb-5 dark:border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {currentFact.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-400">
                  <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{currentFact.region}</span>
                </div>
              </div>

              {/* Fact Title & Detailed Body */}
              <div className="my-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {currentFact.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-300 font-normal">
                  &ldquo;{currentFact.fact}&rdquo;
                </p>
              </div>

              {/* Card Footer with Actions */}
              <div className="mt-8 pt-5 border-t border-amber-200/50 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-400">
                  Fact {currentFact.id} of {CULTURAL_FACTS.length}
                </div>

                <div className="flex items-center gap-3">

                  <button
                    id="show-another-fact-button"
                    type="button"
                    onClick={handleNextFact}
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    <span>Show Another Fact</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
