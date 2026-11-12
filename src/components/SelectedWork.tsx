import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SELECTED_WORK_ITEMS, BOOKING_URL } from '../constants';
import { SelectedWorkCategory, SelectedWorkItem } from '../types';
import ProjectVisual, { buildMockupThumbnailDataUri } from './ProjectVisual';

const WORK_CATEGORIES: SelectedWorkCategory[] = [
  'All',
  'Client Systems',
  'Design Systems',
  'UI/UX Design',
  'Website Design',
  'Interface Concepts',
];

interface SelectedWorkProps {
  showHeaderLink?: boolean;
  limit?: number;
}

const SelectedWork: React.FC<SelectedWorkProps> = ({
  showHeaderLink = true,
  limit,
}) => {
  const [activeCategory, setActiveCategory] = useState<SelectedWorkCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<SelectedWorkItem | null>(null);

  const filteredItems = SELECTED_WORK_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory || item.secondaryCategory === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  // Keyboard navigation for the interactive Lightbox
  useEffect(() => {
    if (!lightboxItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        if (currentIndex >= 0) {
          setLightboxItem(filteredItems[(currentIndex + 1) % filteredItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        if (currentIndex >= 0) {
          setLightboxItem(
            filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length]
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, filteredItems]);

  const getImageSrc = (item: SelectedWorkItem) =>
    item.imageUrl || buildMockupThumbnailDataUri(item.title, item.category, item.schematicType);

  return (
    <section id="work" className="section-padding">
      <div className="editorial-container space-y-10">
        {/* Unified Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">04 · Selected Work & Design Gallery</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Work built through collaboration, craft, and systems.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              A curated selection of production platforms, design systems, and digital product explorations built with technical precision.
            </p>
          </div>

          {showHeaderLink && (
            <Link to="/work" className="skeuo-btn-secondary self-start lg:self-auto shrink-0">
              <span>Full Archive</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-border"
          role="tablist"
          aria-label="Filter selected work"
        >
          {WORK_CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer shrink-0 ${
                  active ? 'skeuo-btn' : 'skeuo-btn-secondary text-muted'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Unified Equal-Height Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail with Click to Lightbox */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightboxItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxItem(item);
                    }
                  }}
                  aria-label={`Inspect ${item.title}`}
                  className="cursor-pointer group relative overflow-hidden rounded-xl"
                >
                  <ProjectVisual
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    category={item.category}
                    schematicType={item.schematicType}
                    status={item.year}
                  />
                  <div className="absolute bottom-2.5 right-2.5 glass-pill px-2.5 py-1 rounded-md text-[10px] font-bold text-fg opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>Inspect</span>
                    <span>⤢</span>
                  </div>
                </div>

                {/* Organization & Category Tag Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="skeuo-inset px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-fg">
                    {item.organization}
                  </span>
                  <span className="text-xs text-muted font-bold">
                    {item.category} · {item.year}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-fg">
                    {item.caseStudyPath ? (
                      <Link to={item.caseStudyPath} className="hover:underline underline-offset-4">
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Contribution / Role Callout */}
                <div className="skeuo-inset p-3 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                    Role & Contribution
                  </span>
                  <p className="text-xs text-fg font-bold leading-snug line-clamp-2">
                    {item.roleOrContribution}
                  </p>
                </div>

                {/* Unwrapped Technologies / Disciplines */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                  {item.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      {idx > 0 && <span className="opacity-40">·</span>}
                      <span>{tech}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Row with View Work */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                <a
                  href={item.externalUrl || item.caseStudyPath || BOOKING_URL}
                  target={item.externalUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="skeuo-btn"
                >
                  <span>View Work</span>
                  <span>↗</span>
                </a>

                <div className="flex items-center gap-2">
                  {item.caseStudyPath && (
                    <Link to={item.caseStudyPath} className="skeuo-btn-secondary">
                      <span>Case Study</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="skeuo-card max-w-4xl w-full p-4 sm:p-6 space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                  {lightboxItem.organization} · {lightboxItem.category} · {lightboxItem.year}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-fg">
                  {lightboxItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="skeuo-btn-secondary cursor-pointer"
                aria-label="Close preview"
              >
                <span>Close ✕</span>
              </button>
            </div>

            <div className="skeuo-inset p-2 sm:p-3">
              <div className="aspect-16/10 rounded-xl overflow-hidden border border-border bg-surface">
                <img
                  src={getImageSrc(lightboxItem)}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain bg-black/20"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="space-y-1.5 max-w-2xl">
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {lightboxItem.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-fg font-bold">
                  {lightboxItem.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      {i > 0 && <span className="text-muted opacity-40">·</span>}
                      <span>{tech}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {lightboxItem.caseStudyPath && (
                  <Link to={lightboxItem.caseStudyPath} className="skeuo-btn-secondary">
                    <span>Case Study</span>
                    <span>→</span>
                  </Link>
                )}
                <a
                  href={lightboxItem.externalUrl || lightboxItem.caseStudyPath || BOOKING_URL}
                  target={lightboxItem.externalUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="skeuo-btn"
                >
                  <span>View Work</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedWork;
