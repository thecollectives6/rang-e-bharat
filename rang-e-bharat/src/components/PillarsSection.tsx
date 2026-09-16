import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Sparkles, Flame, Utensils, ChevronRight } from 'lucide-react';
import { HERITAGE_PILLARS } from '../data/navigation';

export const PillarsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Landmark':
        return <Landmark className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      case 'Flame':
        return <Flame className="h-6 w-6" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="heritage-pillars-section" className="py-16 md:py-24 bg-stone-100/60 dark:bg-stone-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
            <span>Dimensions of Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            The Living Tapestry of Bharat
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            From the snowcapped Himalayas to the tropical Indian Ocean, explore centuries of art, architectural genius, vibrant celebrations, and sacred customs.
          </p>
        </div>

        {/* 4 Rounded Cards with Soft Shadows */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HERITAGE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-stone-50/90 p-6 shadow-sm shadow-stone-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-amber-900/10 dark:border-stone-800 dark:bg-stone-900/90 dark:hover:border-amber-700/50"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.accentColor} border shadow-inner`}
                >
                  {getIcon(pillar.iconName)}
                </div>

                {/* Tag & Title */}
                <span className="block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {pillar.tag}
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {pillar.description}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-stone-200/60 dark:border-stone-800">
                <Link
                  to={pillar.id === 'architecture' ? '/places' : pillar.id === 'festivals' ? '/festivals' : '/culture'}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 transition group-hover:translate-x-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
