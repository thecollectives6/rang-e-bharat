import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StateDetailPage } from './pages/StateDetailPage';
import { FestivalsPage } from './pages/FestivalsPage';
import { PlacesPage } from './pages/PlacesPage';
import { CulturePage } from './pages/CulturePage';
import { HistoryPage } from './pages/HistoryPage';
import { AboutPage } from './pages/AboutPage';
import { ExplorePage } from './pages/ExplorePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
          <BrowserRouter>
              <div id="app-root-layout" className="flex min-h-screen flex-col bg-amber-50/30 text-stone-800 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-200">
                {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-amber-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl focus:ring-2 focus:ring-amber-300 focus:outline-none"
                >
                  Skip to main content
                </a>

                {/* Sticky Navigation Bar */}
                <Navbar />

                <ScrollToTop />

                {/* Page Content Landmark */}
                <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/states/:stateId" element={<StateDetailPage />} />
                    <Route path="/state/:stateId" element={<StateDetailPage />} />
                    <Route path="/culture" element={<CulturePage />} />
                    <Route path="/festivals" element={<FestivalsPage />} />
                    <Route path="/places" element={<PlacesPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/indian-history" element={<HistoryPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>

                {/* Footer */}
                <Footer />
              </div>
            </BrowserRouter>

    </ThemeProvider>
  );
}
