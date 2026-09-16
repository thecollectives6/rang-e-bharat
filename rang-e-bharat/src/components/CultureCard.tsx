import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Music,
  Palette,
  Scissors,
  Shirt,
  Utensils,
  Flame,
  Landmark,
  BookOpen,
  Compass,
  Info,
} from 'lucide-react';
import { CultureItem, CultureCategory } from '../types/culture';
import { ImageWithFallback } from './ImageWithFallback';

interface CultureCardProps {
  item: CultureItem;
  index: number;
  onOpenDetails: (item: CultureItem) => void;
}

export function getCategoryIcon(category: CultureCategory) {
  switch (category) {
    case 'Dance':
      return <Sparkles className="h-3.5 w-3.5" />;
    case 'Music':
      return <Music className="h-3.5 w-3.5" />;
    case 'Art':
      return <Palette className="h-3.5 w-3.5" />;
    case 'Handicrafts':
      return <Scissors className="h-3.5 w-3.5" />;
    case 'Clothing':
      return <Shirt className="h-3.5 w-3.5" />;
    case 'Food':
      return <Utensils className="h-3.5 w-3.5" />;
    case 'Festivals':
      return <Flame className="h-3.5 w-3.5" />;
    case 'Architecture':
      return <Landmark className="h-3.5 w-3.5" />;
    case 'Languages':
      return <BookOpen className="h-3.5 w-3.5" />;
    case 'Traditions':
      return <Compass className="h-3.5 w-3.5" />;
    default:
      return <Sparkles className="h-3.5 w-3.5" />;
  }
}

export function getCategoryBadgeClasses(category: CultureCategory): string {
  switch (category) {
    case 'Dance':
      return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800/60';
    case 'Music':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60';
    case 'Art':
      return 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60';
    case 'Handicrafts':
      return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-800/60';
    case 'Clothing':
      return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-950/70 dark:text-fuchsia-300 dark:border-fuchsia-800/60';
    case 'Food':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/60';
    case 'Festivals':
      return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60';
    case 'Architecture':
      return 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-950/70 dark:text-cyan-300 dark:border-cyan-800/60';
    case 'Languages':
      return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800/60';
    case 'Traditions':
      return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-950/70 dark:text-teal-300 dark:border-teal-800/60';
    default:
      return 'bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700';
  }
}

export const CultureCard: React.FC<CultureCardProps> = ({ item, index, onOpenDetails }) => {
  return (
    <motion.article
      id={`culture-card-${item.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900/90 dark:hover:border-amber-700/60"
    >
      {/* Top Image & Exhibit Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <ImageWithFallback
          src={item.imageUrl}
          alt={item.imageAlt || item.name}
          fallbackTitle={item.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        {/* Top Badges & Favorite Button */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-2 z-10">
          {/* Category Badge & Region */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${getCategoryBadgeClasses(
                item.category
              )}`}
            >
              {getCategoryIcon(item.category)}
              <span>{item.category}</span>
            </span>

            {item.unescoStatus && (
              <span className="rounded-lg border border-amber-300/60 bg-amber-500/95 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-stone-950 backdrop-blur-md">
                UNESCO · {item.unescoStatus === 'Intangible Cultural Heritage' ? 'ICH' : 'Tentative'}
              </span>
            )}

            {/* Region Badge */}
            <span className="rounded-lg border border-white/20 bg-stone-950/60 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-stone-200 backdrop-blur-md">
              {item.region}
            </span>
          </div>
</div>

        {/* Title Overlay in Image Frame */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3">
          {item.hindiName && (
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-amber-200/90 block truncate">
              {item.hindiName}
            </span>
          )}
          <h3 className="font-serif text-base sm:text-xl font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-5">
        <div className="space-y-2.5 sm:space-y-3">
          {/* Related State Location Anchor */}
          <div className="flex items-center justify-between text-xs gap-1">
            <span className="flex items-center gap-1 sm:gap-1.5 font-medium text-stone-600 dark:text-stone-300 min-w-0 truncate">
              <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="hidden sm:inline">Related State:</span>
              <Link
                to={`/states/${item.stateId}#culture-section`}
                id={`culture-card-state-link-${item.id}`}
                className="font-bold text-amber-700 hover:text-amber-900 hover:underline dark:text-amber-400 dark:hover:text-amber-300 truncate"
                onClick={(e) => e.stopPropagation()}
              >
                {item.stateName}
              </Link>
            </span>

            {item.historicalEra && (
              <span className="truncate max-w-[100px] sm:max-w-[130px] rounded-md bg-stone-100 px-1.5 sm:px-2 py-0.5 text-[10px] font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-400 shrink-0" title={item.historicalEra}>
                {item.historicalEra}
              </span>
            )}
          </div>

          {/* Short Curatorial Description */}
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
            {item.shortDescription}
          </p>

          {/* Key Attributes Tags */}
          {item.keyAttributes && item.keyAttributes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.keyAttributes.slice(0, 3).map((attr, i) => (
                <span
                  key={i}
                  className="rounded-md border border-stone-200/80 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600 dark:border-stone-800 dark:bg-stone-800/60 dark:text-stone-300"
                >
                  {attr}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Actions Footer */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-stone-100 pt-3 dark:border-stone-800/80">
          {/* Related state explore pill */}
          <Link
            to={`/states/${item.stateId}#culture-section`}
            id={`culture-card-state-btn-${item.id}`}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 flex items-center gap-1 transition-colors"
          >
            <span>{item.stateName}</span>
          </Link>

          {/* Learn More / Inspect Exhibit Button */}
          <button
            type="button"
            id={`culture-card-learn-more-${item.id}`}
            onClick={() => onOpenDetails(item)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600/10 px-3.5 py-1.5 text-xs font-bold text-amber-800 transition-all hover:bg-amber-600 hover:text-white dark:bg-amber-500/15 dark:text-amber-300 dark:hover:bg-amber-500 dark:hover:text-stone-950"
          >
            <Info className="h-3.5 w-3.5" />
            <span>Learn More</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
