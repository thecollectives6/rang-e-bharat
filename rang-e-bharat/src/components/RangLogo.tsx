import React from 'react';
import { Link } from 'react-router-dom';

interface RangLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const RangLogo: React.FC<RangLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <Link
      to="/"
      id="brand-logo-link"
      className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
      aria-label="Rang-e-Bharat Home"
    >
      {/* Indian Cultural Geometric Icon: Saffron, Navy & Gold Mandala Chakra */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-0.5 shadow-md shadow-amber-900/10 dark:shadow-amber-500/10 ${iconSizes[size]}`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-stone-900 text-amber-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3/4 w-3/4 text-amber-400 transition-transform duration-500 group-hover:rotate-45"
          >
            {/* Ashoka Chakra / Sun Radiant Motif */}
            <circle cx="12" cy="12" r="9" className="stroke-amber-400/70" />
            <circle cx="12" cy="12" r="3" className="fill-amber-400/30 stroke-amber-300" />
            <line x1="12" y1="3" x2="12" y2="21" className="stroke-amber-400" />
            <line x1="3" y1="12" x2="21" y2="12" className="stroke-amber-400" />
            <line x1="5.64" y1="5.64" x2="18.36" y2="18.36" className="stroke-amber-400/80" />
            <line x1="18.36" y1="5.64" x2="5.64" y2="18.36" className="stroke-amber-400/80" />
          </svg>
        </div>
        {/* Subtle glowing tricolor dot */}
        <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-stone-900 bg-emerald-500"></span>
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col min-w-0">
        <span
          className={`font-serif font-bold tracking-wide text-stone-900 dark:text-amber-100 whitespace-nowrap ${textSizes[size]}`}
        >
          <span className="text-amber-600 dark:text-amber-400">Rang</span>
          <span className="text-stone-400 dark:text-stone-500 font-light mx-0.5">-e-</span>
          <span className="text-orange-600 dark:text-orange-400">Bharat</span>
        </span>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-stone-500 dark:text-stone-400 -mt-1 hidden xs:block truncate">
            Culture & Heritage of India
          </span>
        )}
      </div>
    </Link>
  );
};
