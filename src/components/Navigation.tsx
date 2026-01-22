import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="memo-container py-6 flex justify-between items-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground">
          Samuel Amani / 2026
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-muted">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
