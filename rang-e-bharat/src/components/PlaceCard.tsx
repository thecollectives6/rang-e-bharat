import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Info,
  Award,
  BookOpen,
  Landmark,
  Shield,
  Crown,
  Flame,
  Waves,
  Mountain,
  Trees,
  Building,
  TrainFront,
} from 'lucide-react';
import { PlaceItem, PlaceCategory } from '../types/place';
import { ImageWithFallback } from './ImageWithFallback';

interface PlaceCardProps {
  place: PlaceItem;
  index?: number;
  onOpenDetails: (place: PlaceItem) => void;
}

// Category helper icon
export const getCategoryIcon = (category: PlaceCategory) => {
  switch (category) {
    case 'Fort':
      return Shield;
    case 'Palace':
      return Crown;
    case 'Temple':
      return Flame;
    case 'Monument':
      return Landmark;
    case 'Beach':
      return Waves;
    case 'Hill Station':
      return Mountain;
    case 'Wildlife':
      return Trees;
    case 'Railway':
      return TrainFront;
    case 'Archaeological Site':
    case 'Heritage Ensemble':
      return Landmark;
    case 'Historic City':
      return Building;
    case 'Museum':
      return Building;
    case 'Natural Wonder':
      return Sparkles;
    default:
      return MapPin;
  }
};

// Category badge color theme
export const getCategoryColor = (category: PlaceCategory) => {
  switch (category) {
    case 'Railway':
      return 'bg-sky-700 text-white font-bold border-sky-500';
    case 'Archaeological Site':
      return 'bg-amber-700 text-white font-bold border-amber-500';
    case 'Historic City':
      return 'bg-violet-700 text-white font-bold border-violet-500';
    case 'Heritage Ensemble':
      return 'bg-fuchsia-700 text-white font-bold border-fuchsia-500';
    case 'Fort':
      return 'bg-stone-800 text-amber-300 font-semibold border-amber-600/40';
    case 'Palace':
      return 'bg-amber-100 text-amber-900 font-bold border-amber-300 dark:bg-amber-950/80 dark:text-amber-300';
    case 'Temple':
      return 'bg-orange-600 text-white font-bold border-orange-400';
    case 'Monument':
      return 'bg-amber-600 text-white font-bold border-amber-400';
    case 'Beach':
      return 'bg-teal-700 text-white font-bold border-teal-500';
    case 'Hill Station':
      return 'bg-emerald-700 text-white font-bold border-emerald-500';
    case 'Wildlife':
      return 'bg-green-800 text-white font-bold border-green-600';
    case 'Museum':
      return 'bg-indigo-700 text-white font-bold border-indigo-500';
    case 'Natural Wonder':
      return 'bg-blue-600 text-white font-bold border-blue-400';
    default:
      return 'bg-stone-700 text-white font-bold';
  }
};

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, index = 0, onOpenDetails }) => {
  const IconComponent = getCategoryIcon(place.category);
  const badgeClass = getCategoryColor(place.category);

  const handleOpenModal = () => {
    onOpenDetails(place);
  };

  return (
    <motion.article
      id={`place-card-${place.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-600/60"
    >
      {/* Visual Header with Image & Floating Meta Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
        <ImageWithFallback
          src={place.imageUrl}
          alt={place.imageAlt || place.name}
          fallbackTitle={place.name}
          fallbackSubtitle={place.location}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

        {/* Top Badges & Favorite Button */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-2 z-10">
          {/* Category Chip and UNESCO */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <div
              className={`inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] backdrop-blur-md shadow-xs border ${badgeClass}`}
            >
              <IconComponent className="h-3 w-3 shrink-0" />
              <span>{place.category}</span>
            </div>

            {/* UNESCO World Heritage Site Badge if Applicable */}
            {place.unescoStatus && (
              <div className="inline-flex items-center gap-1 rounded-lg bg-amber-500/95 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-stone-950 backdrop-blur-md shadow-xs">
                <Award className="h-3 w-3" />
                <span>{place.unescoStatus === 'World Heritage' ? `UNESCO · ${place.unescoType}` : 'UNESCO · Tentative List'}</span>
              </div>
            )}
          </div>
</div>

        {/* Bottom Image Overlay: Place Title & Location */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-base sm:text-xl font-extrabold text-white drop-shadow-md group-hover:text-amber-200 transition-colors line-clamp-1">
              {place.name}
            </h3>
            {place.hindiName && (
              <span className="text-[11px] font-medium text-amber-200/90 font-serif shrink-0 hidden xs:inline sm:inline">
                {place.hindiName}
              </span>
            )}
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-stone-200 drop-shadow-xs">
            <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
            <span className="line-clamp-1">{place.location}, {place.stateName}</span>
          </p>
        </div>
      </div>

      {/* Main Body Details */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        {/* Short Description */}
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-3 sm:mb-4">
          {place.shortDescription}
        </p>

        {/* Historical / Cultural Importance Highlight */}
        <div className="mb-3 sm:mb-4 rounded-xl border border-amber-200/60 bg-amber-50/50 p-2.5 sm:p-3 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-400 mb-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Historical &amp; Cultural Heritage</span>
          </div>
          <p className="line-clamp-2 text-stone-600 dark:text-stone-400">
            {place.historicalSignificance}
          </p>
        </div>

        {/* Best Time to Visit Feature */}
        <div className="mt-auto mb-3 sm:mb-4 flex items-start gap-2 rounded-lg bg-stone-50 px-2.5 sm:px-3 py-2 text-xs text-stone-700 dark:bg-stone-800/60 dark:text-stone-300 border border-stone-200/60 dark:border-stone-800">
          <Calendar className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-stone-900 dark:text-stone-100">Best Time: </span>
            <span className="text-stone-600 dark:text-stone-400 break-words">{place.bestTimeToVisit}</span>
          </div>
        </div>

        {/* Interactive Action Controls */}
        <div className="border-t border-stone-100 pt-3 sm:pt-4 dark:border-stone-800/80 flex items-center gap-2">
          {/* Related State Link Primary Action */}
          <Link
            to={`/states/${place.stateId}#places-section`}
            id={`explore-state-link-${place.id}`}
            className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-amber-600 px-2.5 sm:px-3.5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 active:scale-[0.98] dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
            title={`Explore ${place.stateName} State Heritage`}
          >
            <span className="truncate">Explore {place.stateName}</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0" />
          </Link>

          {/* Detailed Info Modal Trigger */}
          <button
            type="button"
            id={`open-place-modal-${place.id}`}
            onClick={handleOpenModal}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-amber-300"
            title="View Full Place Highlights & History"
            aria-label={`View details for ${place.name}`}
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
