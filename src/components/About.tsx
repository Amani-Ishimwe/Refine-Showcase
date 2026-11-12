import React from 'react';
import { Link } from 'react-router-dom';
import { PHILOSOPHIES, PROFILE_CONFIG } from '../constants';

interface AboutProps {
  showFullLink?: boolean;
}

const About: React.FC<AboutProps> = ({ showFullLink = true }) => {
  return (
    <section id="about" className="section-padding">
      <div className="editorial-container space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="label">07 · Philosophy & Principles</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
              {PROFILE_CONFIG.philosophyHeadline}
            </h2>
          </div>

          {showFullLink && (
            <Link to="/about" className="skeuo-btn-secondary self-start sm:self-auto">
              <span>About Me</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Equal-Height 4 Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PHILOSOPHIES.map((item) => (
            <div
              key={item.id}
              className="skeuo-card p-5 h-full flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-muted font-bold inline-block">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-fg">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-snug line-clamp-2">
                  {item.shortSummary}
                </p>
              </div>
              <span className="text-[11px] text-fg font-bold pt-2 border-t border-border block">
                {item.practicalApplication}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
