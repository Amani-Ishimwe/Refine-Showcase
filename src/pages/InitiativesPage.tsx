import React from 'react';
import { Link } from 'react-router-dom';
import { INITIATIVES, LEADERSHIP_CLUBS, BOOKING_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const InitiativesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Societal Impact Initiatives & Leadership"
        description="Community and societal impact initiatives started by Ishimwe Amani Samuel, alongside student leadership."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Initiatives & Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Societal Impact Initiatives
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Initiatives I started to empower youth builders, improve career fairness, and strengthen communities.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-12">
          <div className="space-y-6">
            <span className="label">01 · Initiatives for Positive Societal Impact</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {INITIATIVES.map((init) => (
                <article
                  key={init.id}
                  className="skeuo-card p-6 h-full flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg font-bold">
                        {init.distinction}
                      </span>
                      <span className="text-[11px] text-muted font-bold">{init.currentStatus}</span>
                    </div>
                    <h2 className="text-lg font-bold text-fg leading-snug">{init.name}</h2>
                    <p className="text-xs text-muted leading-relaxed">{init.purpose}</p>
                    <p className="text-[11px] text-fg font-bold pt-1">
                      Community: {init.targetCommunity}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                    <span className="text-[11px] text-muted font-bold truncate">{init.myRole}</span>
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

          <div className="space-y-6">
            <span className="label">02 · Club Leadership</span>
            <div className="grid grid-cols-1 gap-5 items-stretch">
              {LEADERSHIP_CLUBS.map((club) => (
                <article key={club.id} className="skeuo-card p-6 sm:p-8 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-muted font-bold block">{club.organization}</span>
                      <h2 className="text-xl sm:text-2xl font-bold text-fg">{club.name}</h2>
                      <p className="text-xs text-fg font-bold mt-0.5">{club.position}</p>
                    </div>
                    <span className="skeuo-inset px-3 py-1.5 text-xs font-bold text-fg self-start">
                      {club.period}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    <div className="skeuo-inset p-4 h-full space-y-1.5">
                      <span className="text-xs font-bold text-fg block">Responsibilities</span>
                      {club.responsibilities.map((r, i) => (
                        <p key={i} className="text-xs text-muted">▪ {r}</p>
                      ))}
                    </div>
                    <div className="skeuo-inset p-4 h-full space-y-1.5">
                      <span className="text-xs font-bold text-fg block">Activities</span>
                      {club.activitiesOrganized.map((a, i) => (
                        <p key={i} className="text-xs text-muted">▪ {a}</p>
                      ))}
                    </div>
                    <div className="skeuo-inset p-4 h-full space-y-1.5">
                      <span className="text-xs font-bold text-fg block">Outcome</span>
                      <p className="text-xs text-muted">{club.outcomes}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-navigation to Ventures and Selected Work */}
      <section className="section-padding pt-0">
        <div className="editorial-container">
          <div className="skeuo-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-fg">Explore Ventures & Commercial Products</h3>
              <p className="text-xs sm:text-sm text-muted">
                Discover technology ventures, digital products, and independent studios founded by Amani.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link to="/ventures" className="skeuo-btn-secondary">
                <span>Ventures & Studios</span>
                <span>→</span>
              </Link>
              <Link to="/work" className="skeuo-btn">
                <span>Selected Work</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesPage;
