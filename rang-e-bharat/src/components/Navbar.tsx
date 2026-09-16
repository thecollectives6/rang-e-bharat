import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { RangLogo } from './RangLogo';
import { SearchModal } from './SearchModal';
import { NAV_ITEMS } from '../data/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position to enhance sticky navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut to open search modal (Cmd+K / Ctrl+K / /)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <>
      <header
        id="main-sticky-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md shadow-md shadow-stone-900/5 dark:bg-stone-950/95 dark:shadow-black/20 border-b border-amber-200/40 dark:border-stone-800'
            : 'bg-stone-50/80 backdrop-blur-sm dark:bg-stone-950/80 border-b border-amber-100/50 dark:border-stone-900'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo */}
          <RangLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-0.5 xl:gap-1 whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                id={`nav-link-${item.id}`}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-amber-700 font-semibold bg-amber-100/60 dark:bg-amber-950/50 dark:text-amber-400'
                      : 'text-stone-700 hover:text-amber-600 hover:bg-amber-50/70 dark:text-stone-300 dark:hover:text-amber-300 dark:hover:bg-stone-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons: Search, Dark Mode, Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop Expanded Search Trigger Button */}
            <button
              id="open-search-button-desktop"
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-3 rounded-xl border border-stone-200/80 bg-white/90 px-3.5 py-2 text-xs font-medium text-stone-500 shadow-xs transition hover:border-amber-300 hover:bg-amber-50/50 hover:text-stone-900 dark:border-stone-800 dark:bg-stone-900/90 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:text-stone-200 shrink-0"
              aria-label="Search topics"
              title="Search culture & heritage (Ctrl+K)"
            >
              <Search className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-stone-500 dark:text-stone-400">Search heritage...</span>
              <kbd className="hidden lg:inline-flex items-center rounded border border-stone-200 bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold text-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400">
                ⌘K
              </kbd>
            </button>

            {/* Mobile / Compact Search Icon Button */}
            <button
              id="open-search-button"
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex md:hidden items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl text-stone-600 hover:bg-amber-100/60 hover:text-amber-700 transition dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-amber-400 shrink-0"
              aria-label="Search topics"
              title="Search culture & heritage"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 dark:text-amber-400" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl text-stone-700 hover:bg-amber-100/60 transition dark:text-stone-300 dark:hover:bg-stone-800 lg:hidden shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden border-t border-amber-200/40 bg-stone-50/98 px-4 py-5 shadow-xl backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/98 max-h-[85vh] overflow-y-auto"
          >
            {/* Quick Mobile Search in Drawer */}
            <div className="mb-4 space-y-2">
              <button
                type="button"
                id="mobile-drawer-search-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-xl border border-amber-200/60 bg-amber-50/50 p-3 text-left text-sm font-medium text-stone-700 transition hover:bg-amber-100/60 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>Search states, monuments, food...</span>
                </div>
                <span className="rounded bg-amber-200/60 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:bg-stone-800 dark:text-amber-300">
                  Search
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  id={`mobile-nav-${item.id}`}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-amber-100 text-amber-800 font-semibold dark:bg-amber-950/70 dark:text-amber-300'
                        : 'text-stone-700 hover:bg-amber-50 hover:text-amber-700 dark:text-stone-200 dark:hover:bg-stone-900 dark:hover:text-amber-400'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  {item.description && (
                    <span className="text-xs text-stone-400 dark:text-stone-500 font-normal">
                      {item.description}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
