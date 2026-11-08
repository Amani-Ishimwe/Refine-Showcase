import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import { PROFILE_CONFIG } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, currentTheme }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />

      <main className="flex-1 pt-20 sm:pt-24">
        {children}
      </main>

      <footer className="mt-16 pb-10 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto skeuo-card p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center p-1 shrink-0">
                  <img
                    src="/logo.png"
                    alt="Amani Samuel Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-fg block">
                    {PROFILE_CONFIG.fullName}
                  </span>
                  <span className="text-[11px] text-muted block">
                    {PROFILE_CONFIG.brandTitle} · {PROFILE_CONFIG.location.city}, {PROFILE_CONFIG.location.country}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted leading-relaxed max-w-sm">
                &ldquo;{PROFILE_CONFIG.motto}&rdquo;
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="label">Explore</span>
                <ul className="space-y-1.5 text-muted">
                  <li><Link to="/work" className="hover:text-fg">Work</Link></li>
                  <li><Link to="/products" className="hover:text-fg">Products</Link></li>
                  <li><Link to="/services" className="hover:text-fg">Services</Link></li>
                  <li><Link to="/pricing" className="hover:text-fg">Pricing</Link></li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="label">Profile</span>
                <ul className="space-y-1.5 text-muted">
                  <li><Link to="/experience" className="hover:text-fg">Experience</Link></li>
                  <li><Link to="/initiatives" className="hover:text-fg">Initiatives</Link></li>
                  <li><Link to="/ventures" className="hover:text-fg">Ventures</Link></li>
                  <li><Link to="/about" className="hover:text-fg">About</Link></li>
                </ul>
              </div>
            </div>

            {/* Direct CTA (Standardized Navigation Button Height) */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <a
                href={PROFILE_CONFIG.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full skeuo-btn"
              >
                <span>Book a Call</span>
                <span>↗</span>
              </a>
              <a
                href={`mailto:${PROFILE_CONFIG.contact.email}`}
                className="w-full skeuo-btn-secondary"
              >
                <span>Send Email</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <SocialLinks variant="compact" />
            <span className="text-[11px] text-muted">
              © {new Date().getFullYear()} {PROFILE_CONFIG.shortName} · Kigali, Rwanda
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
