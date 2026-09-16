import React from 'react';
import { motion } from 'motion/react';
import { HistoricalPeriod, HistoryEraCategory } from '../../types/history';
import { 
  Landmark, 
  Sparkles, 
  Castle, 
  Scroll, 
  Clock, 
  Flame, 
  Rocket, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface TimelineTrackProps {
  periods: HistoricalPeriod[];
  selectedPeriodId: string;
  onSelectPeriod: (id: string) => void;
  filterEra: HistoryEraCategory | 'all';
}

const ERA_ICONS: Record<HistoryEraCategory, React.ComponentType<{ className?: string }>> = {
  ancient: Landmark,
  classical: Sparkles,
  medieval: Castle,
  'early-modern': Scroll,
  colonial: Flame,
  modern: Rocket,
};

const ERA_BADGE_STYLES: Record<
  HistoryEraCategory,
  { bg: string; text: string; border: string; activeGlow: string }
> = {
  ancient: {
    bg: 'bg-amber-100 dark:bg-amber-950/60',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-300 dark:border-amber-800',
    activeGlow: 'ring-amber-500 bg-amber-500 text-white',
  },
  classical: {
    bg: 'bg-emerald-100 dark:bg-emerald-950/60',
    text: 'text-emerald-800 dark:text-emerald-300',
    border: 'border-emerald-300 dark:border-emerald-800',
    activeGlow: 'ring-emerald-500 bg-emerald-500 text-white',
  },
  medieval: {
    bg: 'bg-indigo-100 dark:bg-indigo-950/60',
    text: 'text-indigo-800 dark:text-indigo-300',
    border: 'border-indigo-300 dark:border-indigo-800',
    activeGlow: 'ring-indigo-500 bg-indigo-500 text-white',
  },
  'early-modern': {
    bg: 'bg-purple-100 dark:bg-purple-950/60',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-300 dark:border-purple-800',
    activeGlow: 'ring-purple-500 bg-purple-500 text-white',
  },
  colonial: {
    bg: 'bg-rose-100 dark:bg-rose-950/60',
    text: 'text-rose-800 dark:text-rose-300',
    border: 'border-rose-300 dark:border-rose-800',
    activeGlow: 'ring-rose-500 bg-rose-500 text-white',
  },
  modern: {
    bg: 'bg-sky-100 dark:bg-sky-950/60',
    text: 'text-sky-800 dark:text-sky-300',
    border: 'border-sky-300 dark:border-sky-800',
    activeGlow: 'ring-sky-500 bg-sky-500 text-white',
  },
};

export const TimelineTrack: React.FC<TimelineTrackProps> = ({
  periods,
  selectedPeriodId,
  onSelectPeriod,
  filterEra,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const filteredPeriods = React.useMemo(() => {
    if (filterEra === 'all') return periods;
    return periods.filter((p) => p.category === filterEra);
  }, [periods, filterEra]);

  const currentIndex = filteredPeriods.findIndex((p) => p.id === selectedPeriodId);

  const handleNext = () => {
    if (currentIndex < filteredPeriods.length - 1) {
      onSelectPeriod(filteredPeriods[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPeriod(filteredPeriods[currentIndex - 1].id);
    }
  };

  // Auto-scroll the active node into view
  React.useEffect(() => {
    const activeEl = document.getElementById(`timeline-node-${selectedPeriodId}`);
    if (activeEl && scrollContainerRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedPeriodId]);

  return (
    <div className="relative rounded-2xl border border-stone-200/80 bg-white/95 p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900/90 backdrop-blur-md">
      {/* Top Header & Fast Nav Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 dark:border-stone-800">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
            Chronological Timeline Navigator
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
            {currentIndex + 1} of {filteredPeriods.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="timeline-prev-btn"
            onClick={handlePrev}
            disabled={currentIndex <= 0}
            className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-700 transition hover:bg-stone-100 disabled:opacity-40 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
            title="Previous period"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Previous Era</span>
          </button>
          <button
            type="button"
            id="timeline-next-btn"
            onClick={handleNext}
            disabled={currentIndex >= filteredPeriods.length - 1}
            className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-700 transition hover:bg-stone-100 disabled:opacity-40 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
            title="Next period"
          >
            <span className="hidden sm:inline">Next Era</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="no-scrollbar relative mt-4 overflow-x-auto pb-3 pt-2"
      >
        <div className="relative flex min-w-max items-center gap-3 px-2">
          {/* Background Progress Bar Line */}
          <div className="absolute left-6 right-6 top-7 h-1 -translate-y-1/2 rounded-full bg-stone-200 dark:bg-stone-800 -z-0" />

          {filteredPeriods.map((period, idx) => {
            const isSelected = period.id === selectedPeriodId;
            const Icon = ERA_ICONS[period.category] || Landmark;
            const style = ERA_BADGE_STYLES[period.category];

            return (
              <button
                key={period.id}
                id={`timeline-node-${period.id}`}
                type="button"
                onClick={() => onSelectPeriod(period.id)}
                className={`group relative z-10 flex flex-col items-center text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-2 ${
                  isSelected
                    ? 'scale-105 bg-amber-50/70 dark:bg-stone-800/80 shadow-md ring-2 ring-amber-500/80'
                    : 'hover:bg-stone-100/80 dark:hover:bg-stone-800/40'
                }`}
                style={{ width: '180px' }}
              >
                {/* Node circle */}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform shadow-xs ${
                    isSelected
                      ? 'border-amber-600 bg-amber-600 text-white ring-4 ring-amber-500/20'
                      : `${style.border} ${style.bg} ${style.text} group-hover:scale-110`
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                {/* Date Badge */}
                <div className="mt-2 text-center">
                  <span
                    className={`inline-block rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-tight ${
                      isSelected
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300'
                    }`}
                  >
                    {period.approximateDates.split('(')[0].trim()}
                  </span>
                </div>

                {/* Period Name */}
                <span
                  className={`mt-1 line-clamp-2 text-center text-xs font-bold leading-tight transition-colors ${
                    isSelected
                      ? 'text-amber-900 dark:text-amber-300'
                      : 'text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white'
                  }`}
                >
                  {period.period}
                </span>

                {/* Category Indicator */}
                <span className="mt-1 text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                  {period.category.replace('-', ' ')}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
