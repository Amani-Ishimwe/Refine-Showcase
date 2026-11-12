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
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);
      setScrolled(winScroll > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Sleek Glowing Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(56,189,248,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navbar Row matching Photo 2: Left Logo+Name, Right Theme-Toggle + Pill Container (Book a call + 2-line menu) */}
          <div
            className={`glass-pill rounded-full px-2.5 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 transition-all duration-300 ${
              scrolled
                ? 'shadow-lg border-border-strong/40 backdrop-blur-xl'
                : 'shadow-sm border-border'
            }`}
          >
            {/* Left: App Grid Icon / Logo + Brand Name */}
            <Link
              to="/"
              className="group flex items-center gap-2 sm:gap-3 shrink-0 focus:outline-none"
              aria-label="Ishimwe Amani Samuel — Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-fg text-bg flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo.png"
                  alt="Amani Samuel Logo"
                  className="w-full h-full object-contain invert dark:invert-0"
                />
              </div>
              <span className="text-xs sm:text-base font-bold tracking-tight text-fg font-sans whitespace-nowrap">
                AMANI SAMUEL
              </span>
            </Link>

            {/* Right: Theme Toggle Icon + Pill Container (Book a call + 2-line menu icon) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Enlarged Prominent Tactile Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                type="button"
                className="skeuo-btn-secondary w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center cursor-pointer text-fg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0 shadow-sm"
                aria-label={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {currentTheme === 'light' ? (
                  <svg
                    className="w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform duration-200 hover:rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform duration-200 hover:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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

              {/* Pill Container from Photo 2: Book a call + 2-line menu icon */}
              <div className="bg-[#121214] text-white dark:bg-[#1a1a1e] rounded-full p-1 pl-3 sm:pl-4 flex items-center gap-1.5 sm:gap-2.5 shadow-sm border border-white/10 shrink-0">
                <a
                  href={PROFILE_CONFIG.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold tracking-tight text-white hover:text-white/80 transition-colors py-1 shrink-0 whitespace-nowrap"
                >
                  Book a call
                </a>

                {/* Exact 2-Line Menu Trigger Button from Photo 2 with Smooth Animated Morphing */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center justify-center cursor-pointer shrink-0 active:scale-90"
                >
                  <div className="flex flex-col gap-1 w-3.5 sm:w-4 items-center justify-center">
                    <span
                      className={`h-[1.5px] w-full bg-white rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'rotate-45 translate-y-[2.75px]' : ''
                      }`}
                    />
                    <span
                      className={`h-[1.5px] w-full bg-white rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? '-rotate-45 -translate-y-[2.75px]' : ''
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Navigation Drawer / Overlay Menu with Opening Animations */}
          {isOpen && (
            <>
              {/* Backdrop Blur Overlay with Smooth Fade-In */}
              <div
                className="fixed inset-0 bg-black/45 backdrop-blur-sm -z-10 animate-backdrop-in"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <div className="mt-2 skeuo-card p-5 sm:p-7 max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl rounded-3xl animate-drawer-in">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-[11px] uppercase tracking-widest text-muted font-bold">
                    Navigation Directory
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-muted hover:text-fg cursor-pointer p-1 rounded-md hover:bg-surface transition-colors"
                  >
                    Close ✕
                  </button>
                </div>

                {/* Main Links Grid with Cascading Staggered Entrance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {NAV_LINKS.map((link, idx) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${idx * 28}ms` }}
                        className={`animate-nav-item p-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99] ${
                          active
                            ? 'skeuo-btn font-bold shadow-md'
                            : 'skeuo-inset text-fg hover:opacity-90 font-medium'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span>→</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Quick Actions & Secondary Routes with Staggered Entrance */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border text-xs">
                  {[
                    { name: 'Pricing Packages', path: '/pricing' },
                    { name: 'Ventures & Studios', path: '/ventures' },
                    { name: 'Writing', path: '/writing/doc-skill' },
                    { name: 'About Me', path: '/about' },
                  ].map((action, i) => (
                    <Link
                      key={action.name}
                      to={action.path}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${260 + i * 35}ms` }}
                      className="animate-nav-item skeuo-btn-secondary px-3 py-1.5 text-[11px] hover:scale-105 active:scale-95 transition-transform"
                    >
                      {action.name}
                    </Link>
                  ))}
                </div>

                {/* Bottom Contact + Socials */}
                <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-muted flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    <span>
                      Kigali, Rwanda · <strong className="text-fg font-bold">Available for Select Projects</strong>
                    </span>
                  </div>
                  <SocialLinks variant="compact" />
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navigation;
