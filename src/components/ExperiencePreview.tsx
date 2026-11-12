import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_ENTRIES, LEADERSHIP_CLUBS } from '../constants';

const ExperiencePreview: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="editorial-container space-y-14">
        {/* Unified Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">07 · Experience & Leadership</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Where I have worked and communities I have led.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              A track record of engineering and design roles across high-trust organizations, paired with student and community leadership.
            </p>
          </div>

          <Link to="/experience" className="skeuo-btn-secondary self-start lg:self-auto shrink-0">
            <span>Full Timeline</span>
            <span>→</span>
          </Link>
        </div>

        {/* PART 1: WHERE I HAVE WORKED */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <h3 className="text-lg sm:text-xl font-bold text-fg">
              Workplaces & Experience
            </h3>
            <span className="text-xs text-muted font-bold">
              4 Roles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {EXPERIENCE_ENTRIES.map((entry) => (
              <article
                key={entry.id}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-fg font-bold">
                      {entry.location}
                    </span>
                    <span className="text-xs text-muted font-bold">{entry.period}</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-fg line-clamp-1">
                      {entry.organization}
                    </h4>
                    <span className="text-xs text-fg font-bold block line-clamp-1">{entry.position}</span>
                  </div>
                  <p className="text-xs text-muted leading-snug line-clamp-2">
                    {entry.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {entry.skillsDeveloped.slice(0, 3).map((skill, idx) => (
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

        {/* PART 2: LEADERSHIP & CLUBS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <h3 className="text-lg sm:text-xl font-bold text-fg">
              Leadership & Community Roles
            </h3>
            <span className="text-xs text-muted font-bold">
              Student & Club Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {LEADERSHIP_CLUBS.map((club) => (
              <article
                key={club.id}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted font-bold">{club.organization}</span>
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg font-bold">
                      {club.period}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-fg">{club.name}</h4>
                    <p className="text-xs text-fg font-bold mt-0.5">{club.position}</p>
                  </div>
                  <p className="text-xs text-muted leading-snug">{club.outcomes}</p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-muted font-bold">
                    {club.activitiesOrganized.length} Major Activities
                  </span>
                  <Link to="/initiatives" className="skeuo-btn-secondary">
                    <span>Leadership Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
