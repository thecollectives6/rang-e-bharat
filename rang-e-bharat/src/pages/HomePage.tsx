import React from 'react';
import { Hero } from '../components/Hero';
import { WelcomeSection } from '../components/WelcomeSection';
import { ExploreStatesPreview } from '../components/ExploreStatesPreview';
import { CategoryGrid } from '../components/CategoryGrid';
import { WhyRangBharat } from '../components/WhyRangBharat';
import { DidYouKnowSection } from '../components/DidYouKnowSection';
import { CallToAction } from '../components/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page-container" className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* 1. Welcome to India ("One Nation, Many Stories") */}
      <WelcomeSection />

      {/* 2. Explore India State by State (Introduction & Map trigger) */}
      <ExploreStatesPreview />

      {/* 3. Explore by Category (History, Festivals, Food, Art & Crafts, Dance & Music, Nature & Wildlife) */}
      <CategoryGrid />

      {/* 4. Why Rang-e-Bharat? (Learn, Explore, Experience) */}
      <WhyRangBharat />

      {/* 5. Did You Know? (Interactive Cultural Fact generator) */}
      <DidYouKnowSection />

      {/* 6. Call to Action ("Your journey across India starts here.") */}
      <CallToAction />
    </div>
  );
};
