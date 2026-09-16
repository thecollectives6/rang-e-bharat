import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORY_CARDS } from '../data/homeContent';

export const CategoryGrid: React.FC = () => {
  return (
    <section
      id="explore-by-category-section"
      className="py-16 md:py-24 bg-stone-50/70 dark:bg-stone-900/30 border-t border-amber-100 dark:border-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
            <Sparkles className="h-4 w-4" />
            <span>Discover India's Heritage</span>
          </div>

          <h2
            id="explore-category-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Explore by Category
          </h2>

          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            Immerse yourself across six core dimensions that define India's timeless civilizational spirit and vibrant daily life.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_CARDS.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              id={`category-card-${category.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700"
            >
              {/* Subtle gradient background accent */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${category.accentBg} blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />

              <div>
                {/* Header with Emoji & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl shadow-inner dark:bg-stone-800/80 transition-transform duration-300 group-hover:scale-110">
                    {category.emoji}
                  </span>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                    {category.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {category.description}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
                <Link
                  to={category.path}
                  className={`inline-flex items-center gap-2 text-xs font-semibold ${category.accentText} group-hover:translate-x-1 transition-transform`}
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
