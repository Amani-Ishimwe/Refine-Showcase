import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_DESIGNS, GalleryDesignItem, BOOKING_URL } from '../constants';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import { buildMockupThumbnailDataUri } from '../components/ProjectVisual';

const GalleryPage: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryDesignItem | null>(null);

  // Keyboard navigation for gallery lightbox
  useEffect(() => {
    if (!lightboxItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = GALLERY_DESIGNS.findIndex((i) => i.id === lightboxItem.id);
        if (currentIndex >= 0) {
          setLightboxItem(GALLERY_DESIGNS[(currentIndex + 1) % GALLERY_DESIGNS.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = GALLERY_DESIGNS.findIndex((i) => i.id === lightboxItem.id);
        if (currentIndex >= 0) {
          setLightboxItem(
            GALLERY_DESIGNS[(currentIndex - 1 + GALLERY_DESIGNS.length) % GALLERY_DESIGNS.length]
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem]);

  const getImageSrc = (item: GalleryDesignItem) =>
    item.imageUrl || buildMockupThumbnailDataUri(item.title, item.category, item.schematicType);

  return (
    <>
      <SEOHead
        title="Design Gallery — Visual Craft & Interfaces"
        description="Visual gallery of app designs, dashboards, mobile interfaces, and brand identities by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Design Gallery
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            A curated visual showcase of application interfaces, SaaS analytics dashboards, mobile experiences, and brand identity systems.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container">
          {/* Visual 2-Column Grid Matching Photo 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {GALLERY_DESIGNS.map((item, idx) => (
              <ScrollReveal key={item.id} delayMs={idx % 2 === 0 ? 0 : 80}>
                <article
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
                  className="group relative cursor-pointer aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-surface shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Full-Bleed Artwork Image */}
                  <img
                    src={getImageSrc(item)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Bottom Dark Gradient Scrim matching Photo 1 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Bottom-Left Caption Overlay matching Photo 1 */}
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-7 right-5 sm:right-7 z-10 space-y-1">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70 font-bold block">
                      {item.categoryTag}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                      {item.title}
                    </h2>
                  </div>

                  {/* Top-Right Inspect Cue */}
                  <div className="absolute top-4 right-4 z-10 glass-pill px-2.5 py-1 rounded-lg text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                    <span>Inspect</span>
                    <span>⤢</span>
                  </div>
                </article>
              </ScrollReveal>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="skeuo-card max-w-4xl w-full p-4 sm:p-7 space-y-5 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                  {lightboxItem.categoryTag} · {lightboxItem.year}
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

              {lightboxItem.highlights && (
                <div className="skeuo-inset p-3.5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                    Design &amp; Architecture Highlights
                  </span>
                  {lightboxItem.highlights.map((h, i) => (
                    <p key={i} className="text-xs text-fg flex items-start gap-2">
                      <span className="text-muted font-bold">▪</span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              )}

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
