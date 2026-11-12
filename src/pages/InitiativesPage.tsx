import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIATIVES, LEADERSHIP_CLUBS, BOOKING_URL } from '../constants';
import { InitiativeItem } from '../types';
import SEOHead from '../components/SEOHead';

const InitiativesPage: React.FC = () => {
  const [activeInitiativeModal, setActiveInitiativeModal] = useState<InitiativeItem | null>(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title="Societal Impact Initiatives & Leadership"
        description="Community initiatives and student club leadership founded and directed by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Initiatives & Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Societal Impact Initiatives & Leadership
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Community programs and student organizations founded to empower youth builders, improve career fairness, and protect digital inventions.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-16">
          {/* SECTION 1: INITIATIVES (Image + Small Description + Modal with Photo Gallery) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div>
                <span className="label">01 · Societal Impact Initiatives</span>
                <h2 className="text-xl sm:text-2xl font-bold text-fg mt-0.5">
                  Initiatives for positive community change.
                </h2>
              </div>
              <span className="text-xs text-muted font-bold">
                {INITIATIVES.length} Programs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {INITIATIVES.map((init) => (
                <article
                  key={init.id}
                  className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="space-y-3.5">
                    {/* Initiative Photo / Cover Image */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveInitiativeModal(init)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveInitiativeModal(init);
                        }
                      }}
                      className="cursor-pointer group relative aspect-16/10 rounded-xl overflow-hidden border border-border bg-surface"
                      aria-label={`View photos and details for ${init.name}`}
                    >
                      <img
                        src={init.imageUrl || '/ACC.png'}
                        alt={init.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 glass-pill px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold text-fg">
                        {init.distinction}
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 glass-pill px-2.5 py-1 rounded-md text-[10px] font-bold text-fg opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <span>Photos &amp; Details</span>
                        <span>⤢</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted font-bold">
                        Status: <span className="text-fg">{init.currentStatus}</span>
                      </span>
                      <span className="text-[11px] text-muted font-bold">
                        {init.targetCommunity.split(',')[0]}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-fg leading-snug">
                        {init.name}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed line-clamp-3">
                        {init.shortDescription || init.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Discover More Action Button */}
                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                    <span className="text-[11px] text-muted font-bold truncate">
                      {init.myRole}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveInitiativeModal(init)}
                      className="skeuo-btn shrink-0 cursor-pointer"
                    >
                      <span>Discover More</span>
                      <span>↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* SECTION 2: WHAT I LEAD (Business Club & IP Club) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div>
                <span className="label">02 · Student Organizations & Clubs I Lead</span>
                <h2 className="text-xl sm:text-2xl font-bold text-fg mt-0.5">
                  Business Club &amp; IP Club Leadership.
                </h2>
              </div>
              <span className="text-xs text-muted font-bold">
                Elected Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {LEADERSHIP_CLUBS.map((club) => (
                <article
                  key={club.id}
                  className="skeuo-card p-6 sm:p-8 h-full flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Club Visual / Image */}
                    <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-border bg-surface">
                      <img
                        src={club.imageUrl || '/logo.png'}
                        alt={`${club.name} visual`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-3 right-3 glass-pill px-3 py-1 rounded-md text-[11px] uppercase font-bold text-fg">
                        {club.period}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-fg self-start">
                        {club.organization}
                      </span>
                      <span className="text-xs font-bold text-fg">
                        {club.position}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-fg">
                        {club.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {club.description}
                      </p>
                    </div>

                    {/* Key Activities / Responsibilities */}
                    <div className="skeuo-inset p-3.5 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                        Core Activities &amp; Mentorship
                      </span>
                      {club.activitiesOrganized.map((act, idx) => (
                        <p key={idx} className="text-xs text-fg flex items-start gap-2">
                          <span className="text-muted font-bold">▪</span>
                          <span>{act}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* View Club Button */}
                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    <span className="text-xs text-muted font-bold">
                      {club.outcomes}
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

      {/* Cross-navigation to Ventures and Work */}
      <section className="section-padding pt-0">
        <div className="editorial-container">
          <div className="skeuo-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-fg">Explore Commercial Ventures &amp; Products</h3>
              <p className="text-xs sm:text-sm text-muted">
                Discover technology ventures, digital products, and independent studios founded by Amani.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link to="/ventures" className="skeuo-btn-secondary">
                <span>Ventures &amp; Studios</span>
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

      {/* INTERACTIVE INITIATIVE DISCOVER MORE MODAL (Full Description + Images Taken During Initiative) */}
      {activeInitiativeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeInitiativeModal.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveInitiativeModal(null)}
        >
          <div
            className="skeuo-card max-w-3xl w-full p-5 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                  {activeInitiativeModal.distinction} · {activeInitiativeModal.currentStatus}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-fg">
                  {activeInitiativeModal.name}
                </h2>
                <p className="text-xs text-muted font-bold">
                  Role: <span className="text-fg">{activeInitiativeModal.myRole}</span> · Community: <span className="text-fg">{activeInitiativeModal.targetCommunity}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveInitiativeModal(null)}
                className="skeuo-btn-secondary cursor-pointer"
                aria-label="Close modal"
              >
                <span>Close ✕</span>
              </button>
            </div>

            {/* Full Expanded Description */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-muted">
                Mission &amp; Community Impact
              </h3>
              <p className="text-xs sm:text-sm text-fg leading-relaxed">
                {activeInitiativeModal.fullDescription || activeInitiativeModal.purpose}
              </p>
            </div>

            {/* Photo Gallery of Images Taken During Initiative */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-bold text-muted">
                  Images Taken During Initiative
                </h3>
                <span className="text-[11px] text-muted">
                  Workshop &amp; Mentorship Moments
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(activeInitiativeModal.galleryImages || [activeInitiativeModal.imageUrl || '/ACC.png']).map(
                  (imgSrc, i) => (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedGalleryImg(imgSrc)}
                      className="cursor-pointer group relative aspect-4/3 rounded-xl overflow-hidden border border-border bg-surface"
                      aria-label="Enlarge initiative photo"
                    >
                      <img
                        src={imgSrc}
                        alt={`Initiative moment ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                        <span>Enlarge ⤢</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Activities & Key Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="skeuo-inset p-4 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                  Core Activities
                </span>
                {activeInitiativeModal.activities.map((act, i) => (
                  <p key={i} className="text-xs text-fg flex items-start gap-1.5">
                    <span className="text-muted font-bold">▪</span>
                    <span>{act}</span>
                  </p>
                ))}
              </div>

              <div className="skeuo-inset p-4 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                  Verified Achievements
                </span>
                {activeInitiativeModal.achievements.map((ach, i) => (
                  <p key={i} className="text-xs text-fg flex items-start gap-1.5">
                    <span className="text-muted font-bold">▪</span>
                    <span>{ach}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-btn"
              >
                <span>Support or Collaborate</span>
                <span>↗</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveInitiativeModal(null)}
                className="skeuo-btn-secondary cursor-pointer"
              >
                <span>Back to Initiatives</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Lightbox for Enlarge Photo */}
      {selectedGalleryImg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedGalleryImg}
              alt="Enlarged moment"
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <button
              type="button"
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-3 right-3 skeuo-btn-secondary px-3 py-1 text-xs cursor-pointer"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InitiativesPage;
