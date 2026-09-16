import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight, SunMedium, Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-mandala-pattern"
    >
      {/* Indian Aesthetic Ambient Background Gradients */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-emerald-500/10 blur-3xl dark:from-amber-500/10 dark:via-orange-600/10 dark:to-emerald-600/5"
        aria-hidden="true"
      />

      {/* Decorative Traditional Indian Mandala Motif Background SVG */}
      <div
        className="pointer-events-none absolute right-4 top-12 -z-10 opacity-10 dark:opacity-5 md:right-16 lg:right-24"
        aria-hidden="true"
      >
        <svg width="420" height="420" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-amber-700 dark:text-amber-300">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="25" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" strokeWidth="0.75" />
          <polygon points="50,5 59,35 90,35 65,55 75,85 50,68 25,85 35,55 10,35 41,35" strokeWidth="0.5" />
          <polygon points="50,95 41,65 10,65 35,45 25,15 50,32 75,15 65,45 90,65 59,65" strokeWidth="0.5" />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute left-4 bottom-8 -z-10 opacity-10 dark:opacity-5 md:left-12"
        aria-hidden="true"
      >
        <svg width="340" height="340" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-emerald-700 dark:text-emerald-300">
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" strokeWidth="0.75" strokeDasharray="1 1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Cultural Sanskrit Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/70 px-3.5 py-1.5 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur-sm dark:border-amber-800/60 dark:bg-amber-950/60 dark:text-amber-200 mb-6"
        >
          <span className="flex h-2 w-2 shrink-0 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-serif tracking-wider truncate sm:whitespace-normal">वसुधैव कुटुम्बकम् • The World is One Family</span>
        </motion.div>

        {/* Main Heading: Rang-e-Bharat */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="hero-main-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 break-words"
        >
          <span className="text-amber-600 dark:text-amber-400">Rang</span>
          <span className="text-stone-400 dark:text-stone-500 font-light mx-1">-e-</span>
          <span className="text-orange-600 dark:text-orange-400">Bharat</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="hero-tagline"
          className="mt-3 sm:mt-4 font-serif text-lg sm:text-2xl md:text-3xl font-bold text-stone-800 dark:text-amber-200/90 tracking-wide break-words"
        >
          Explore the Rich Culture and Heritage of India
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="hero-description"
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-stone-600 dark:text-stone-300 font-normal px-1"
        >
          Discover the stories, traditions, festivals, food, art, history, people and places that make India one of the world's most culturally diverse countries.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
        >
          <Link
            to="/explore"
            id="hero-explore-button"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-600/30 active:scale-[0.99]"
          >
            <Compass className="h-5 w-5 transition-transform group-hover:rotate-45" />
            <span>Explore India</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/culture"
            id="hero-discover-culture-button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-stone-300/80 bg-stone-100/90 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-stone-800 shadow-sm backdrop-blur-sm transition-all hover:bg-stone-200/80 hover:text-amber-800 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:text-amber-300 active:scale-[0.99]"
          >
            <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <span>Discover Culture</span>
          </Link>
        </motion.div>

        {/* Quick Heritage Stat Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-14 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4 max-w-3xl mx-auto w-full"
        >
          <div className="flex flex-col items-center rounded-xl bg-stone-50/70 p-3.5 border border-amber-200/50 shadow-sm backdrop-blur-sm dark:bg-stone-900/50 dark:border-stone-800">
            <span className="font-serif text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-400">28 + 8</span>
            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">States & UTs</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-stone-50/70 p-3.5 border border-amber-200/50 shadow-sm backdrop-blur-sm dark:bg-stone-900/50 dark:border-stone-800">
            <span className="font-serif text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-400">42+</span>
            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">UNESCO Sites</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-stone-50/70 p-3.5 border border-amber-200/50 shadow-sm backdrop-blur-sm dark:bg-stone-900/50 dark:border-stone-800">
            <span className="font-serif text-xl sm:text-2xl font-bold text-rose-700 dark:text-rose-400">100+</span>
            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Festivals</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-stone-50/70 p-3.5 border border-amber-200/50 shadow-sm backdrop-blur-sm dark:bg-stone-900/50 dark:border-stone-800">
            <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">5000+</span>
            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Years of History</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
