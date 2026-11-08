import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_ENTRIES } from '../constants';
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
        title="Where I Have Worked — Experience & Education"
        description="Organizations, companies, and institutions where Ishimwe Amani Samuel has worked and studied."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Where I Have Worked
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Organizations, studios, and institutions where I have contributed as a designer and engineer.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2" role="tablist">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {filteredEntries.map((entry) => (
              <article
                key={entry.id}
                className="skeuo-card p-6 h-full flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="skeuo-inset px-2.5 py-1 text-[10px] uppercase tracking-wider text-fg font-bold">
                      {entry.location}
                    </span>
                    <span className="text-xs text-muted font-bold">{entry.period}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-fg">{entry.organization}</h2>
                    <p className="text-xs text-fg font-bold mt-0.5">{entry.position}</p>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{entry.context}</p>
                  <ul className="skeuo-inset p-3.5 space-y-1.5">
                    {entry.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-fg flex items-start gap-2">
                        <span>▪</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {entry.skillsDeveloped.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        {idx > 0 && <span className="opacity-40">·</span>}
                        <span>{skill}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  {entry.relatedWorkPath && (
                    <Link to={entry.relatedWorkPath} className="skeuo-btn-secondary shrink-0">
                      <span>{entry.relatedWorkLabel}</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ToolsSection />
    </>
  );
};

export default ExperiencePage;
