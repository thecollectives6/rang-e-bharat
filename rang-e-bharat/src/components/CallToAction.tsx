import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="homepage-cta-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 px-6 py-14 sm:px-12 sm:py-20 text-center text-white shadow-2xl border border-amber-500/30"
        >
          {/* Indian Pattern Accent Background Gradients */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 -bottom-16 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Saffron Sanskrit / Cultural Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-serif font-semibold tracking-wider text-amber-300 border border-amber-500/30 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>रंग-ए-भारत • The Colors of Bharat</span>
            </div>

            {/* CTA Heading */}
            <h2
              id="cta-headline"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Your journey across India <span className="text-amber-400">starts here.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
              Step into a realm of thousands of years of living history, majestic temples, flavorful culinary heritage, and kaleidoscope of festivals.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                id="cta-start-exploring-button"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-9 py-4 text-base font-bold text-stone-950 shadow-xl shadow-amber-600/30 transition-all hover:scale-[1.03] hover:shadow-2xl hover:from-amber-400 hover:to-orange-500 active:scale-[0.99]"
              >
                <Compass className="h-5 w-5 text-stone-950 transition-transform group-hover:rotate-45" />
                <span>Start Exploring</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
