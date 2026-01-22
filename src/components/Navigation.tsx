import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Writing', href: '#writing' },
    { name: 'Values', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50">
      <div className="memo-container">
        <div className="relative">
          <div className="flex justify-between items-center py-4 px-6 bg-background/60 backdrop-blur-md rounded-full border border-border/40 shadow-sm transition-all duration-300 hover:border-border/60">
            <a href="#" className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors shrink-0">
              Samuel Amani / 2026
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-center p-2 px-4 bg-foreground/[0.03] hover:bg-foreground/[0.06] rounded-full border border-border/20 transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-[3px]">
                <span className={`h-[1.5px] w-4 bg-foreground/60 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
                <span className={`h-[1.5px] w-4 bg-foreground/60 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[1.5px] w-4 bg-foreground/60 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
              </div>
            </button>
          </div>

          {/* Menu Overlay */}
          <div className={`absolute top-full right-0 mt-3 w-48 bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl shadow-2xl transition-all duration-500 origin-top-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-[13px] font-medium text-foreground/50 hover:text-foreground hover:bg-foreground/[0.03] px-3 py-2 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
