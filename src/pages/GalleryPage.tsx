import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_DESIGNS, GalleryDesignItem, BOOKING_URL } from '../constants';
import SEOHead from '../components/SEOHead';
import ProjectVisual, { buildMockupThumbnailDataUri } from '../components/ProjectVisual';

type GalleryFilter =
  | 'All'
  | 'App Design'
  | 'Branding & Identity'
  | 'Web Design'
  | 'Design Systems'
  | 'Interface Concepts';

const FILTER_CATEGORIES: GalleryFilter[] = [
  'All',
  'App Design',
  'Branding & Identity',
  'Web Design',
  'Design Systems',
  'Interface Concepts',
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryDesignItem | null>(null);

  const filteredItems = GALLERY_DESIGNS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // Keyboard navigation for gallery lightbox
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

  const getImageSrc = (item: GalleryDesignItem) =>
    item.imageUrl || buildMockupThumbnailDataUri(item.title, item.category, item.schematicType);

  return (
    <>
      <SEOHead
        title="Design Gallery — Apps, Branding & Visual Systems"
        description="Curated gallery of app designs, brand identities, design systems, and interface concepts by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Design Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Apps, Branding &amp; Visual Systems
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            A dedicated visual gallery showcasing mobile apps, branding identities, design token systems, and interface craft.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-10">
          {/* Category Filter Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border"
            role="tablist"
            aria-label="Filter designs"
          >
            {FILTER_CATEGORIES.map((cat) => {
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

          {/* Design Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredItems.map((design) => (
              <article
                key={design.id}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-4">
                  {/* Clickable Image Preview */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxItem(design)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightboxItem(design);
                      }
                    }}
                    aria-label={`Inspect ${design.title}`}
                    className="cursor-pointer group relative aspect-16/10 rounded-xl overflow-hidden border border-border bg-surface"
                  >
                    <ProjectVisual
                      imageUrl={design.imageUrl}
                      title={design.title}
                      category={design.category}
                      schematicType={design.schematicType}
                      status={design.year}
                    />
                    <div className="absolute bottom-2.5 right-2.5 glass-pill px-2.5 py-1 rounded-md text-[10px] font-bold text-fg opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Inspect Design</span>
                      <span>⤢</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-fg">
                      {design.category}
                    </span>
                    <span className="text-xs text-muted font-bold">
                      {design.year}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-fg tracking-tight">
                      {design.title}
                    </h2>
                    <p className="text-xs font-bold text-fg/80">
                      {design.subtitle}
                    </p>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3 pt-1">
                      {design.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="skeuo-inset p-3 space-y-1">
                    {design.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-[11px] text-fg flex items-start gap-2">
                        <span className="text-muted font-bold">▪</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Unwrapped Tools */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {design.tools.map((tool, idx) => (
                      <React.Fragment key={tool}>
                        {idx > 0 && <span className="opacity-40">·</span>}
                        <span>{tool}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                  <span className="text-[11px] text-muted font-bold">
                    Visual Craft
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(design)}
                    className="skeuo-btn shrink-0 cursor-pointer"
                  >
                    <span>Inspect</span>
                    <span>⤢</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="skeuo-card max-w-4xl w-full p-4 sm:p-7 space-y-5 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                  {lightboxItem.category} · {lightboxItem.year}
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

            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-fg leading-relaxed">
                {lightboxItem.description}
              </p>

              <div className="skeuo-inset p-3.5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                  Craft &amp; Architecture Decisions
                </span>
                {lightboxItem.highlights.map((h, i) => (
                  <p key={i} className="text-xs text-fg flex items-start gap-2">
                    <span className="text-muted font-bold">▪</span>
                    <span>{h}</span>
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-muted font-bold pt-1">
                <span className="text-fg">Tools &amp; Methods:</span>
                {lightboxItem.tools.map((tool, idx) => (
                  <React.Fragment key={tool}>
                    {idx > 0 && <span>·</span>}
                    <span>{tool}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-btn"
              >
                <span>Inquire About Design Systems</span>
                <span>↗</span>
              </a>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="skeuo-btn-secondary cursor-pointer"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
