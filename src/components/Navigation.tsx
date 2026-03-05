import React, { useState } from 'react';

interface NavigationProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Navigation: React.FC<NavigationProps> = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50">
      <div className="memo-container relative">
        <div className="flex justify-between items-center py-3 px-6 bg-surface/80 backdrop-blur-xl rounded-full border border-border shadow-sm">
          <a href="/" className="text-[11px] font-semibold tracking-wider uppercase">
            Amani
          </a>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-1.5 hover:bg-fg/5 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {currentTheme === 'light' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex flex-col items-center justify-center p-2 rounded-full hover:bg-fg/5 transition-all"
            >
              <div className="flex flex-col gap-1 w-5">
                <span className={`h-0.5 w-full bg-fg transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full bg-fg transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-fg transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Prominent Centered Full-Widthish Overlay */}
        <div className={`fixed inset-0 bg-bg/60 backdrop-blur-lg z-[-1] transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
          <div className="h-full flex flex-col items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-w-sm flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-6 bg-surface border border-border rounded-3xl hover:border-fg/20 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="text-xl font-medium tracking-tight group-hover:translate-x-2 transition-transform">{link.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-fg">Open →</span>
                </a>
              ))}

              <div className="mt-8 text-center">
                <span className="text-[9px] uppercase tracking-[0.4em] text-muted">Amani / Product Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
