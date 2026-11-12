import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROFILE_CONFIG } from '../constants';
import SocialLinks from './SocialLinks';

interface NavigationProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
  { name: 'Initiatives', path: '/initiatives' },
  { name: 'Contact', path: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/projects') {
      return location.pathname === '/projects' || location.pathname.startsWith('/projects/');
    }
    if (path === '/work') {
      return (
        location.pathname === '/work' ||
        location.pathname.startsWith('/project/') ||
        location.pathname.startsWith('/work/')
      );
    }
    if (path === '/gallery') {
      return location.pathname === '/gallery';
    }
    if (path === '/services' && location.pathname === '/pricing') return true;
    if (path === '/initiatives' && location.pathname === '/ventures') return true;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-pill rounded-2xl px-3.5 sm:px-5 py-2.5 flex items-center justify-between gap-2">
          {/* Brand Logo (/logo.png) + Name */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 focus:outline-none"
            aria-label="Ishimwe Amani Samuel — Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center overflow-hidden p-1 shrink-0">
              <img
                src="/logo.png"
                alt="Amani Samuel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-fg leading-none">
                AMANI SAMUEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted mt-0.5 hidden xs:block">
                Designer · Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 skeuo-inset p-1 rounded-xl" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                    active
                      ? 'skeuo-btn-secondary text-fg font-bold'
                      : 'text-muted hover:text-fg font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Theme Switch + CTA + Mobile Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              type="button"
              className="skeuo-btn-secondary w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer"
              aria-label={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              {currentTheme === 'light' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <a
              href={PROFILE_CONFIG.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs skeuo-btn"
            >
              <span>Book a Call</span>
              <span>↗</span>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden skeuo-btn-secondary h-9 px-3 flex items-center gap-2 text-xs cursor-pointer"
            >
              <span className="font-bold">{isOpen ? 'Close' : 'Menu'}</span>
              <div className="flex flex-col gap-1 w-3.5">
                <span
                  className={`h-0.5 w-full bg-fg transition-transform duration-200 ${
                    isOpen ? 'rotate-45 translate-y-[3px]' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-fg transition-opacity duration-200 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-fg transition-transform duration-200 ${
                    isOpen ? '-rotate-45 -translate-y-[3px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Glassmorphic + Skeuomorphic Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-2 skeuo-card p-4 sm:p-6 max-h-[82vh] overflow-y-auto space-y-5">
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`p-3.5 rounded-xl flex items-center justify-between text-xs transition-all ${
                      active
                        ? 'skeuo-btn font-bold'
                        : 'skeuo-inset text-fg hover:opacity-90'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span>→</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border text-xs">
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="skeuo-btn-secondary px-3 py-2 text-[11px]"
              >
                Pricing
              </Link>
              <Link
                to="/ventures"
                onClick={() => setIsOpen(false)}
                className="skeuo-btn-secondary px-3 py-2 text-[11px]"
              >
                Ventures
              </Link>
              <Link
                to="/writing/doc-skill"
                onClick={() => setIsOpen(false)}
                className="skeuo-btn-secondary px-3 py-2 text-[11px]"
              >
                Writing
              </Link>
            </div>

            <div className="pt-3 border-t border-border flex flex-col sm:flex-row gap-2.5">
              <a
                href={PROFILE_CONFIG.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 text-xs skeuo-btn text-center"
              >
                Book a Call ↗
              </a>
            </div>

            <div className="pt-2 border-t border-border">
              <SocialLinks variant="compact" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
