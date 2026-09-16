import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_FEATURES } from '../data/homeContent';

export const WhyRangBharat: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="h-7 w-7" />;
      case 'Compass':
        return <Compass className="h-7 w-7" />;
      case 'Sparkles':
        return <Sparkles className="h-7 w-7" />;
      default:
        return <Sparkles className="h-7 w-7" />;
    }
  };

  return (
    <section
      id="why-rang-e-bharat-section"
      className="py-16 md:py-24 bg-stone-100/80 dark:bg-stone-900/60 border-t border-amber-100 dark:border-stone-800 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
            <span>Our Mission & Vision</span>
          </div>

          <h2
            id="why-rang-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Why Rang-e-Bharat?
          </h2>

          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            Designed as an interactive, educational gateway to celebrate, understand, and preserve India's multifaceted civilizational legacy.
          </p>
        </motion.div>

        {/* 3 Main Feature Cards: Learn, Explore, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              id={`why-feature-${feature.id}`}
              className="relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-stone-800 dark:bg-stone-900/90"
            >
              <div>
                {/* Feature Icon Header */}
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${feature.colorTheme} shadow-xs mb-6`}
                >
                  {getIcon(feature.iconName)}
                </div>

                {/* Subtitle & Title */}
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  {feature.subtitle}
                </span>

                <h3 className="mt-1 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
                  {feature.description}
                </p>
              </div>

              {/* Verified Quality Check */}
              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Curated authentic heritage content</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
