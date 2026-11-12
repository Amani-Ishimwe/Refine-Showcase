import React from 'react';
import { Link } from 'react-router-dom';
import { STUDIOS_AGENCIES, BOOKING_URL } from '../constants';
import ProjectVisual from './ProjectVisual';

interface StudiosSectionProps {
  showHeaderLink?: boolean;
}

const StudiosSection: React.FC<StudiosSectionProps> = ({ showHeaderLink = true }) => {
  return (
    <section id="studios" className="section-padding">
      <div className="editorial-container space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">03 · Studios & Agencies</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Building teams and creating opportunities.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Independent ventures focused on turning ideas into digital products, software solutions, and meaningful business experiences.
            </p>
          </div>

          {showHeaderLink && (
            <Link to="/ventures" className="skeuo-btn-secondary self-start lg:self-auto shrink-0">
              <span>Studio Overview</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Studio-Oriented Architectural 3-Column Roster */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {STUDIOS_AGENCIES.map((studio) => (
            <article
              key={studio.id}
              className="skeuo-card p-5 sm:p-7 h-full flex flex-col justify-between space-y-6 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="space-y-5">
                {/* Studio Masthead Header */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="skeuo-inset w-8 h-8 flex items-center justify-center text-xs font-bold text-fg">
                      {studio.monogram}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                        STUDIO {studio.number}
                      </span>
                      <span className="text-xs font-bold text-fg block">
                        {studio.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted font-bold">
                    {studio.role.split('&')[0].trim()}
                  </span>
                </div>

                {/* Studio Visual Identity & Logo Slot */}
                <ProjectVisual
                  id={`studio-${studio.id}`}
                  imageUrl={studio.imageUrl}
                  title={studio.name}
                  category={studio.category}
                  schematicType={studio.schematicType}
                />

                {/* Studio Name & Editorial Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-fg">
                    {studio.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {studio.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="skeuo-inset p-3.5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                    Focus Areas
                  </span>
                  {studio.focusAreas.map((area) => (
                    <div key={area} className="text-xs font-bold text-fg flex items-center gap-2">
                      <span className="text-muted">▪</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>

                {/* Unwrapped Capabilities */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                  {studio.capabilities.map((cap, idx) => (
                    <React.Fragment key={cap}>
                      {idx > 0 && <span className="opacity-40">·</span>}
                      <span>{cap}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Studio Action Footer with Required "Discover More" Booking CTA */}
              <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                <span className="text-[11px] text-muted font-bold truncate">
                  {studio.role}
                </span>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skeuo-btn shrink-0"
                >
                  <span>Discover More</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiosSection;
