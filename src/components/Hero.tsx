import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container-custom section-padding lg:pt-32">
      <div className="max-w-[800px]">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
          I design, build, document, and manage digital products — <span className="text-accent italic">from idea to impact</span>.
        </h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12 font-light">
          A product-minded engineer bridging the gap between design thinking, robust software engineering, and disciplined project execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a
            href="#work"
            className="px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            View Selected Work
          </a>
          <button
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-border text-sm font-medium hover:border-foreground transition-all duration-300"
          >
            How I Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
