import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="memo-container pt-40 pb-20">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-fg animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Available for Q1 2026</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-medium tracking-tight max-w-125">
          Designing digital products with <span className="font-serif italic text-muted">intentionality.</span>
        </h1>

        <p className="text-sm md:text-base text-muted max-w-105">
          I bridge the gap between design thinking and software engineering to build high-impact systems.
        </p>

        <div className="flex gap-8 mt-4">
          <a href="#work" className="text-xs font-semibold uppercase tracking-widest border-b border-muted/30 hover:border-fg transition-all py-1">
            Projects
          </a>
          <a href="#about" className="text-xs font-semibold uppercase tracking-widest border-b border-muted/30 hover:border-fg transition-all py-1">
            About
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
