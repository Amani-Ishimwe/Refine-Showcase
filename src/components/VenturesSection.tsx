import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_VENTURES } from '../constants';
import ProjectVisual from './ProjectVisual';

interface VenturesSectionProps {
  compact?: boolean;
}

const VenturesSection: React.FC<VenturesSectionProps> = ({ compact = false }) => {
  return (
    <section id="ventures" className="section-padding">
      <div className="editorial-container space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="label">03 · Businesses & Ventures</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
              Ventures & studio practice.
            </h2>
          </div>

          {compact && (
            <Link to="/ventures" className="skeuo-btn-secondary self-start sm:self-auto">
              <span>All Ventures</span>
              <span>→</span>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {BUSINESS_VENTURES.map((venture, idx) => (
            <article
              key={venture.id}
              className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <ProjectVisual
                  id={`venture-${venture.id}`}
                  title={venture.name}
                  category={venture.industry}
                  schematicType={idx === 0 ? 'lead-recovery' : 'feedback-pipeline'}
                  status={venture.currentStage}
                />

                <div className="space-y-1">
                  <span className="text-[11px] text-muted font-bold block">
                    {venture.industry}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-fg leading-snug line-clamp-1">
                    {venture.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-snug line-clamp-2">
                  {venture.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                <span className="text-xs text-muted font-bold truncate">
                  {venture.positionAndResponsibilities}
                </span>
                {venture.relatedLinkPath && (
                  <Link to={venture.relatedLinkPath} className="skeuo-btn-secondary shrink-0">
                    <span>{venture.relatedLinkLabel || 'Explore'}</span>
                    <span>→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
