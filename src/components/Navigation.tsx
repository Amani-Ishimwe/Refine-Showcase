import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="font-mono text-sm tracking-tight">
          /product-professional
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
          <a href="#writing" className="hover:text-accent transition-colors">Writing</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
