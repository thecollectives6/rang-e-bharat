import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Heart, ShieldCheck, Feather } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <section
      id="welcome-to-india-section"
      className="py-16 md:py-24 relative overflow-hidden bg-stone-50/60 dark:bg-stone-900/30 border-t border-amber-100 dark:border-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Accent Box: Cultural Diversity Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-100/50 via-stone-50 to-orange-100/30 p-7 shadow-lg shadow-amber-900/5 dark:border-stone-800 dark:from-stone-900 dark:via-stone-900/80 dark:to-amber-950/20 backdrop-blur-sm">
              {/* Traditional Motif Badge */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-1.5 text-xs font-serif font-semibold text-amber-800 dark:text-amber-300 border border-amber-500/20 mb-5">
                <Feather className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>Unity in Diversity • अनेकता में एकता</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                A Land of Boundless Colors & Living Legacies
              </h3>

              <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                India is a breathtaking mosaic where dozens of major languages, thousands of distinct dialects, vibrant regional attires, sacred philosophies, and centuries of artistic brilliance flourish together in harmony.
              </p>

              {/* Diversity Highlights List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-xs dark:bg-stone-800/80 border border-stone-200/50 dark:border-stone-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 font-serif font-bold text-sm">
                    22
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      Constitutional Languages
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      Spoken across distinct geographical and literary regions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-xs dark:bg-stone-800/80 border border-stone-200/50 dark:border-stone-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-serif font-bold text-sm">
                    8
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      Classical Dance Traditions
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      Rooted in ancient Natya Shastra treatises
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-xs dark:bg-stone-800/80 border border-stone-200/50 dark:border-stone-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-serif font-bold text-sm">
                    42
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      UNESCO World Heritage Wonders
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      From ancient cave temples to majestic hill forts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to India</span>
            </div>

            <h2
              id="welcome-india-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight"
            >
              One Nation, <span className="text-amber-600 dark:text-amber-400">Many Stories</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
              India is not just a geographic subcontinent; it is an epic civilizational journey spanning five millennia. Every river has a sacred legend, every village preserves an unbroken craft technique, and every community brings forward timeless values of hospitality, spiritual inquiry, and celebratory joy.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
              From the snow-crowned passes of Ladakh to the tropical coconut lagoons of Kerala, and from the golden dunes of the Thar desert to the verdant rainforests of the Northeast, Rang-e-Bharat brings this grand heritage right to your fingertips.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
