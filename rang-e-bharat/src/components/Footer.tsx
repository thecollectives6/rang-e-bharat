import React from 'react';
import { Link } from 'react-router-dom';
import { RangLogo } from './RangLogo';
import { Heart, Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="border-t border-amber-200/50 bg-stone-100/90 dark:border-stone-800 dark:bg-stone-950 text-stone-700 dark:text-stone-300"
    >
      {/* Tricolor accent ribbon on top of footer */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-amber-500" />
        <div className="h-full w-1/3 bg-white dark:bg-stone-200" />
        <div className="h-full w-1/3 bg-gradient-to-r from-emerald-600 to-green-600" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Mission Column */}
          <div className="space-y-4 lg:col-span-1">
            <RangLogo size="md" showSubtitle={false} />
            <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              A dedicated digital archive and exploration portal celebrating the timeless art, history, monuments, festivals, and cultural heritage of Bharat.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-serif font-medium text-amber-800 dark:text-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>सत्यमेव जयते • Truth Alone Triumphs</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-4">
              Explore Sections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    id={`footer-nav-${item.id}`}
                    className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Heritage Discovery Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-4">
              Discover & Learn
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.slice(5).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    id={`footer-nav-${item.id}`}
                    className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
              </li>
              <li>
                <Link
                  to="/#map-explorer"
                  id="footer-nav-interactive-map"
                  className="inline-flex items-center gap-1.5 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <Compass className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Interactive India Map</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & credits bar */}
        <div className="mt-12 pt-6 border-t border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400 text-center sm:text-left">
          <p className="break-words">© {currentYear} Rang-e-Bharat. All cultural content curated with reverence for Indian Heritage.</p>
          <div className="flex items-center justify-center gap-1.5 shrink-0">
            <span>Crafted with pride for India</span>
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
