import React from 'react';
import { Compass, Heart, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => (
  <div className="bg-amber-50/30 dark:bg-stone-950">
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="rounded-3xl border border-amber-200/70 bg-stone-50/90 p-6 shadow-xl dark:border-stone-800 dark:bg-stone-900/90 sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">रंग-ए-भारत</p>
        <h1 className="mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-5xl">About Rang-e-Bharat</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700 dark:text-stone-300">
          Rang-e-Bharat is an educational exploration of India’s culture, heritage, history, places, festivals, arts and regional traditions.
          The goal is to make learning engaging, visual and easy to explore.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            [Compass, 'Explore', 'Discover states, places and cultural traditions.'],
            [Heart, 'Celebrate', 'Learn about the living traditions that make India diverse.'],
            [ShieldCheck, 'Learn responsibly', 'Information is presented for educational use and should be checked against authoritative sources for formal research.'],
          ].map(([Icon, title, text]) => {
            const C = Icon as React.ElementType;
            return (
              <div key={title as string} className="rounded-2xl border border-stone-200 bg-white/80 p-5 dark:border-stone-800 dark:bg-stone-950/50">
                <C className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <h2 className="mt-3 font-bold text-stone-900 dark:text-stone-100">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">{text as string}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);
