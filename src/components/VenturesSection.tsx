import React from 'react';
import { Link } from 'react-router-dom';
import { VENTURES_INITIATIVES, BOOKING_URL } from '../constants';
import ProjectVisual from './ProjectVisual';

interface VenturesSectionProps {
  compact?: boolean;
}

const VenturesSection: React.FC<VenturesSectionProps> = ({ compact = false }) => {
  return (
    <section id="ventures" className="section-padding">
      <div className="editorial-container space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">01 · Ventures & Initiatives</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Building things that move ideas into reality.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Ambitious initiatives designed to solve meaningful problems through technology, thoughtful design, and practical innovation.
            </p>
          </div>

          {compact && (
            <Link to="/initiatives" className="skeuo-btn-secondary self-start lg:self-auto shrink-0">
              <span>All Initiatives</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Large Editorial Alternating Layouts */}
        <div className="space-y-8 sm:space-y-10">
          {VENTURES_INITIATIVES.map((venture, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={venture.id}
                className="skeuo-card p-5 sm:p-8 lg:p-10 transition-transform duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  {/* Visual Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <ProjectVisual
                      id={`venture-${venture.id}`}
                      imageUrl={venture.imageUrl}
                      title={venture.name}
                      category={venture.category}
                      schematicType={venture.schematicType}
                      status={venture.status}
                    />
                  </div>

                  {/* Editorial Content Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="skeuo-inset px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-fg">
                          {venture.number} · {venture.category}
                        </span>
                        <span className="text-[11px] text-muted font-bold">
                          {venture.role}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                          {venture.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-fg/90">
                          {venture.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {venture.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="skeuo-inset p-3.5 space-y-1.5">
                        {venture.highlights.map((item) => (
                          <li key={item} className="text-xs text-fg flex items-start gap-2">
                            <span className="text-muted font-bold">▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Unwrapped Technologies */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold pt-0.5">
                        {venture.technologies.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            {tIdx > 0 && <span className="opacity-40">·</span>}
                            <span>{tech}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action Row with Required "Discover More" Booking CTA */}
                    <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2.5">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skeuo-btn"
                      >
                        <span>Discover More</span>
                        <span>↗</span>
                      </a>
                      {venture.caseStudyPath && (
                        <Link to={venture.caseStudyPath} className="skeuo-btn-secondary">
                          <span>Case Study</span>
                          <span>→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
