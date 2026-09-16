import React from 'react';
import { InteractiveIndiaMap } from '../components/InteractiveIndiaMap';

export const ExplorePage: React.FC = () => (
  <div className="bg-amber-50/30 dark:bg-stone-950">
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">भारत दर्शन</p>
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-5xl">Explore India</h1>
        <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400 sm:text-base">
          Explore every Indian state and Union Territory through an interactive map. Select a region or search for a state to begin.
        </p>
      </div>
      <InteractiveIndiaMap />
    </section>
  </div>
);
