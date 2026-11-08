import React from 'react';
import { Link } from 'react-router-dom';
import {
  EXPERIENCE_ENTRIES,
  INITIATIVES,
  LEADERSHIP_CLUBS,
} from '../constants';

const ExperiencePreview: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="editorial-container space-y-14">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="label">07 · Where I Have Worked</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
                Workplaces & experience.
              </h2>
            </div>

            <Link to="/experience" className="skeuo-btn-secondary self-start sm:self-auto">
              <span>Full Timeline</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {EXPERIENCE_ENTRIES.map((entry) => (
              <div
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
                    <h3 className="text-base sm:text-lg font-bold text-fg line-clamp-1">
                      {entry.organization}
                    </h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* Equal-Height Societal Impact Initiatives & Leadership Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="label">08 · Societal Impact Initiatives</span>
              <Link to="/initiatives" className="skeuo-btn-secondary">
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 items-stretch">
              {INITIATIVES.map((init) => (
                <div key={init.id} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="skeuo-inset px-2 py-0.5 text-[9px] uppercase text-fg font-bold inline-block">
                      {init.currentStatus}
                    </span>
                    <h3 className="text-sm font-bold text-fg leading-snug line-clamp-2">{init.name}</h3>
                    <p className="text-xs text-muted leading-snug line-clamp-2">{init.purpose}</p>
                  </div>
                  {init.links?.[0] && (
                    <Link to={init.links[0].url} className="skeuo-btn-secondary w-full mt-2">
                      <span>{init.links[0].label}</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center justify-between h-9">
              <span className="label">09 · Leadership</span>
            </div>
            {LEADERSHIP_CLUBS.map((club) => (
              <div key={club.id} className="skeuo-card p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted font-bold">{club.organization}</span>
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg font-bold">
                      {club.period}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-fg">{club.name}</h3>
                  <p className="text-xs text-fg font-bold">{club.position}</p>
                  <p className="text-xs text-muted leading-snug">{club.outcomes}</p>
                </div>
                <Link to="/initiatives" className="skeuo-btn-secondary self-start">
                  <span>Leadership Details</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
