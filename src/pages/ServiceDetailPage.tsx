import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICE_CATEGORIES, PROJECTS, PROFILE_CONFIG } from '../constants';
import SEOHead from '../components/SEOHead';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICE_CATEGORIES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="editorial-container py-16">
        <SEOHead title="Service Not Found" />
        <div className="skeuo-card p-8 space-y-4 max-w-lg">
          <h1 className="text-2xl font-bold text-fg">Service not found.</h1>
          <Link to="/services" className="skeuo-btn">
            <span>← All Services</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );

  return (
    <>
      <SEOHead title={`${service.title} — Services`} description={service.shortSummary} />
      <article className="editorial-container pt-6 pb-16 space-y-6 sm:space-y-8">
        <header className="skeuo-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-muted font-bold">
              <Link to="/" className="hover:text-fg">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-fg">Services</Link>
              <span>/</span>
              <span className="text-fg">{service.title}</span>
            </div>
            <span className="skeuo-inset px-3 py-1 text-xs font-bold text-fg">
              {service.estimatedTimeline} · {service.startingPriceNote}
            </span>
          </div>

          <div className="space-y-2 max-w-2xl">
            <span className="eyebrow block">CATEGORY {service.number}</span>
            <h1 className="text-2xl sm:text-4xl font-bold text-fg">{service.title}</h1>
            <p className="text-sm sm:text-base text-muted">{service.plainEnglishValue}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-3">
            <span className="label">Deliverables</span>
            <ul className="space-y-2 text-xs text-fg my-auto">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span>✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-3">
            <span className="label">Problems Solved</span>
            <ul className="space-y-2 text-xs text-muted my-auto">
              {service.problemsSolved.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-fg font-bold">▪</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-3">
            <span className="label">Engagement Steps</span>
            <div className="space-y-2.5">
              {service.engagementProcess.map((s) => (
                <div key={s.step} className="skeuo-inset p-3">
                  <span className="text-xs font-bold text-fg block">
                    {s.step} · {s.title}
                  </span>
                  <span className="text-[11px] text-muted block">{s.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <span className="label">Capabilities Included</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-fg">
            {service.subServices.map((sub, idx) => (
              <React.Fragment key={sub}>
                {idx > 0 && <span className="text-muted opacity-40">·</span>}
                <span>{sub}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="space-y-4">
            <span className="label">Relevant Projects</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
              {relatedProjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/project/${encodeURIComponent(proj.id)}`}
                  className="skeuo-card p-5 h-full flex flex-col justify-between space-y-2 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] text-muted font-bold">{proj.role} · {proj.year}</span>
                    <h2 className="text-base font-bold text-fg">{proj.title}</h2>
                  </div>
                  <span className="text-xs text-fg font-bold block pt-1">Case Study →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="skeuo-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-fg">Need {service.title}?</h2>
            <p className="text-xs text-muted">Schedule a 15-minute discovery call to discuss your project.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={PROFILE_CONFIG.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn"
            >
              <span>Book a Call</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServiceDetailPage;
