import React from 'react';

const Hero: React.FC = () => {
  const CAL_LINK = "https://cal.com/ishimwe-amani-samuel-odxmcv/15min?user=ishimwe-amani-samuel-odxmcv&overlayCalendar=true";

  return (
    <section className="memo-container pt-32 pb-16">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="availability-dot" />
          <span className="label !mb-0 text-foreground/50">Available for Q1 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-[800px]">
          I design, build, document, and manage digital products — <span className="font-serif-italic text-accent">from idea to impact</span>.
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-[600px]">
          Bridging the gap between design thinking, robust software engineering, and disciplined execution.
        </p>

        <div className="flex flex-wrap gap-6 mt-2">
          <a
            href="#work"
            className="text-sm font-medium underline underline-offset-8 decoration-border/60 hover:decoration-foreground transition-all"
          >
            View Selected Work
          </a>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-8 decoration-border/60 hover:decoration-foreground transition-all"
          >
            Schedule Briefing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
