import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HistoricalPeriod } from '../../types/history';
import {
  Calendar,
  Sparkles,
  MapPin,
  Users,
  Palette,
  Landmark,
  Scale,
  Compass,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

interface PeriodDetailCardProps {
  period: HistoricalPeriod;
}

export const PeriodDetailCard: React.FC<PeriodDetailCardProps> = ({
  period,
}) => {
  const [activeTab, setActiveTab] = React.useState<
    'all' | 'developments' | 'places' | 'figures' | 'culture' | 'artifacts'
  >('all');

  return (
    <motion.article
      key={period.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      id={`period-detail-${period.id}`}
      className="overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-lg transition-all dark:border-stone-800 dark:bg-stone-900"
    >
      {/* Hero Banner with Era Visuals & Title */}
      <div className="relative border-b border-stone-200/80 bg-stone-900 text-white dark:border-stone-800">
        {/* Background Image with Ambient Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={period.heroImage}
            alt={period.period}
            className="h-full w-full object-cover opacity-25 filter blur-xs"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 border border-amber-500/30 backdrop-blur-md">
                <Calendar className="h-3.5 w-3.5 text-amber-400" />
                <span>{period.approximateDates}</span>
              </span>
              <span className="rounded-full bg-stone-800/80 px-2.5 py-1 text-xs font-semibold uppercase text-stone-300 border border-stone-700">
                Era #{period.order} of 12 • {period.category.replace('-', ' ')}
              </span>
            </div>

            <div className="flex items-center gap-2">
            </div>
          </div>

          <div className="mt-4">
            {period.hindiName && (
              <p className="font-serif text-sm font-semibold tracking-wide text-amber-400/90 sm:text-base">
                {period.hindiName}
              </p>
            )}
            <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {period.period}
            </h2>
            <p className="mt-2 max-w-3xl text-sm font-medium text-amber-100/90 sm:text-base">
              {period.tagline}
            </p>
          </div>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
            {period.shortSummary}
          </p>

          {/* Key Theme Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {period.keyThemes.map((theme, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-lg bg-stone-800/90 px-2.5 py-1 text-xs font-medium text-stone-200 border border-stone-700/80"
              >
                <Sparkles className="h-3 w-3 text-amber-400" />
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Section 1: Major Developments */}
        <section id={`developments-section-${period.id}`}>
          <div className="flex items-center gap-2 border-b border-stone-200 pb-2 dark:border-stone-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Major Historical Developments
            </h3>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-1">
            {period.majorDevelopments.map((dev, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-stone-100 bg-stone-50/70 p-3.5 transition-colors dark:border-stone-800/60 dark:bg-stone-800/40 hover:border-amber-200 dark:hover:border-amber-900/60"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200/80 text-[11px] font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                  {idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                  {dev}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Important Figures & Important Places Dual Columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Important Figures */}
          <section id={`figures-section-${period.id}`} className="rounded-2xl bg-black p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2 dark:border-stone-800">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300">
                <Users className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white dark:text-white">
                Important Figures & Thinkers
              </h3>
            </div>

            <div className="mt-4 space-y-3">
              {period.importantFigures.map((fig, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-700/80 bg-black p-4 shadow-2xs dark:border-stone-800 dark:bg-black"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif text-sm font-bold text-white dark:text-white sm:text-base">
                      {fig.name}
                    </h4>
                  </div>
                  <span className="inline-block mt-0.5 rounded-md bg-indigo-950/80 px-2 py-0.5 text-xs font-semibold text-indigo-200 dark:bg-indigo-950/80 dark:text-indigo-200">
                    {fig.role}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-stone-200 dark:text-stone-200 sm:text-sm">
                    {fig.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Places */}
          <section id={`places-section-${period.id}`} className="rounded-2xl bg-black p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2 dark:border-stone-800">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                <MapPin className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white dark:text-white">
                Important Places & Sites
              </h3>
            </div>

            <div className="mt-4 space-y-3">
              {period.importantPlaces.map((plc, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-700/80 bg-black p-4 shadow-2xs dark:border-stone-800 dark:bg-black"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-sm font-bold text-white dark:text-white sm:text-base">
                      {plc.name}
                    </h4>
                    <span className="rounded-md bg-emerald-950/80 px-2 py-0.5 text-xs font-medium text-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-200">
                      {plc.location}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-stone-200 dark:text-stone-200 sm:text-sm">
                    {plc.significance}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section 3: Cultural Contributions */}
        <section id={`culture-section-${period.id}`}>
          <div className="flex items-center gap-2 border-b border-stone-200 pb-2 dark:border-stone-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300">
              <Palette className="h-4 w-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Cultural Contributions & Living Heritage
            </h3>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {period.culturalContributions.map((cult, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-stone-200/70 bg-stone-50/50 p-3.5 dark:border-stone-800 dark:bg-stone-800/30"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-rose-500 dark:text-rose-400 mt-0.5" />
                <p className="text-xs leading-relaxed text-stone-700 dark:text-stone-300 sm:text-sm">
                  {cult}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Key Artifacts & Monuments */}
        <section id={`artifacts-section-${period.id}`}>
          <div className="flex items-center gap-2 border-b border-stone-200 pb-2 dark:border-stone-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
              <Landmark className="h-4 w-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Key Artifacts & Iconic Monuments
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {period.keyArtifactsOrMonuments.map((art, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-800 shadow-2xs dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
              >
                <Landmark className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>{art}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Historical Nuance & Context (Ensures historical accuracy & avoids oversimplification) */}
        <div className="rounded-2xl border border-amber-200/90 bg-amber-50/70 p-5 dark:border-amber-900/60 dark:bg-amber-950/40">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white shadow-xs">
              <Scale className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-amber-950 dark:text-amber-200">
                Historical Context & Nuance
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-amber-900/90 dark:text-amber-300/90 sm:text-sm">
                {period.historicalNuance}
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Connected States Exploration */}
        {period.relatedStateIds && period.relatedStateIds.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-5 dark:border-stone-800">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                Explore present-day states associated with this era:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {period.relatedStateIds.map((stateId) => (
                <Link
                  key={stateId}
                  to={`/states/${stateId}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-semibold capitalize text-stone-700 transition hover:bg-amber-50 hover:text-amber-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-amber-950/60 dark:hover:text-amber-300"
                >
                  <span>{stateId.replace(/-/g, ' ')}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};
