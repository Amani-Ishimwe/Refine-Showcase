import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_ENTRIES, LEADERSHIP_CLUBS, BOOKING_URL } from '../constants';
import { ExperienceCategory } from '../types';
import ToolsSection from '../components/ToolsSection';
import SEOHead from '../components/SEOHead';

const ACTIVE_EXPERIENCE_CATEGORIES: ('All' | ExperienceCategory)[] = [
  'All',
  'Employment',
  'Project-Based Engagements',
  'Freelance Work',
  'Education',
];

const ExperiencePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'All' | ExperienceCategory>('All');

  const filteredEntries = EXPERIENCE_ENTRIES.filter(
    (entry) => selectedType === 'All' || entry.engagementType === selectedType
  );

  return (
    <>
      <SEOHead
        title="Experience Roadmap — Chronological Timeline"
        description="Organizations, companies, and institutions where Ishimwe Amani Samuel has worked, studied, and led."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Experience Roadmap</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Experience Roadmap & Timeline
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Chronological progression of engineering, architectural, and design roles across high-trust organizations.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-12">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border" role="tablist">
            {ACTIVE_EXPERIENCE_CATEGORIES.map((cat) => {
              const active = selectedType === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedType(cat)}
                  className={`cursor-pointer shrink-0 ${
                    active ? 'skeuo-btn' : 'skeuo-btn-secondary text-muted'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Visual Vertical Roadmap Timeline */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-border">
            {filteredEntries.map((entry, idx) => (
              <div key={entry.id} className="relative group">
                {/* Milestone Node */}
                <div className="absolute -left-6 sm:-left-10 top-5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-surface border-2 border-fg flex items-center justify-center -translate-x-1/2 group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-fg" />
                </div>

                {/* Milestone Card */}
                <article className="skeuo-card p-5 sm:p-7 space-y-4 hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-border/70">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-fg tracking-wider">
                        Milestone {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-muted">
                        {entry.location}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-fg">
                      {entry.period}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-fg tracking-tight">
                      {entry.organization}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-fg/90">
                      {entry.position} · <span className="text-muted font-normal">{entry.engagementType}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed pt-1">
                      {entry.context}
                    </p>
                  </div>

                  <ul className="skeuo-inset p-3.5 space-y-1.5">
                    {entry.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-fg flex items-start gap-2">
                        <span className="text-muted font-bold">▪</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                      {entry.skillsDeveloped.map((skill, sIdx) => (
                        <React.Fragment key={skill}>
                          {sIdx > 0 && <span className="opacity-40">·</span>}
                          <span>{skill}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    {entry.relatedWorkPath && (
                      <Link to={entry.relatedWorkPath} className="skeuo-btn shrink-0">
                        <span>View Work</span>
                        <span>↗</span>
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Leadership & Clubs Section (Business Club & IP Club) */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-fg">
                  Clubs & Organizations I Lead
                </h3>
                <p className="text-xs text-muted">
                  Elected and appointed leadership positions at Rwanda Coding Academy.
                </p>
              </div>
              <span className="text-xs text-muted font-bold">
                2 Clubs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {LEADERSHIP_CLUBS.map((club) => (
                <article
                  key={club.id}
                  className="skeuo-card p-5 sm:p-7 h-full flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-border bg-surface">
                      <img
                        src={club.imageUrl || '/logo.png'}
                        alt={`${club.name} visual`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-2.5 right-2.5 glass-pill px-2.5 py-1 rounded-md text-[10px] uppercase font-bold text-fg">
                        {club.period}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-fg">
                        {club.organization}
                      </span>
                      <span className="text-xs text-muted font-bold">
                        {club.position}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-fg tracking-tight">
                        {club.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {club.description}
                      </p>
                    </div>

                    <ul className="skeuo-inset p-3 space-y-1">
                      {club.responsibilities.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-xs text-fg flex items-start gap-2">
                          <span className="text-muted font-bold">▪</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                    <span className="text-[11px] text-muted font-bold">
                      Leadership Position
                    </span>
                    <a
                      href={club.clubUrl || BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="skeuo-btn shrink-0"
                    >
                      <span>View Club</span>
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToolsSection />
    </>
  );
};

export default ExperiencePage;
