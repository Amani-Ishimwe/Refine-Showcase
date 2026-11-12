import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { VENTURES_INITIATIVES, BOOKING_URL } from '../constants';
import { VentureInitiativeItem } from '../types';

interface VenturesSectionProps {
  compact?: boolean;
}

const VenturesSection: React.FC<VenturesSectionProps> = ({ compact = false }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = VENTURES_INITIATIVES.length;

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : container.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < totalItems && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const targetElement = container.children[index] as HTMLElement | undefined;
    if (targetElement) {
      const scrollPosition = targetElement.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeIndex - 1);
    scrollToIndex(prev);
  };

  const handleNext = () => {
    const next = Math.min(totalItems - 1, activeIndex + 1);
    scrollToIndex(next);
  };

  return (
    <section id="ventures" className="section-padding overflow-hidden">
      <div className="editorial-container space-y-8 sm:space-y-10">
        {/* Section Header with Carousel Arrows and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-2xl">
            <span className="label">01 · Ventures & Initiatives</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Building things that move ideas into reality.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Ambitious initiatives designed to solve meaningful problems through technology, thoughtful design, and practical innovation.
            </p>
          </div>

          {/* Right Header Navigation & Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto">
            {compact && (
              <Link to="/initiatives" className="skeuo-btn-secondary">
                <span>All Initiatives</span>
                <span>→</span>
              </Link>
            )}

            {/* Slide Index Counter */}
            <div className="skeuo-inset h-9 px-3 flex items-center justify-center text-xs text-muted font-bold">
              <span className="text-fg">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-1 opacity-40">/</span>
              <span>{String(totalItems).padStart(2, '0')}</span>
            </div>

            {/* Navigation Buttons (Uniform h-9 button height, no shadows) */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="skeuo-btn-secondary h-9 w-9 p-0 flex items-center justify-center cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
                aria-label="Previous venture"
                title="Previous slide"
              >
                <span>←</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === totalItems - 1}
                className="skeuo-btn-secondary h-9 w-9 p-0 flex items-center justify-center cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
                aria-label="Next venture"
                title="Next slide"
              >
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track matching the Reference Photo */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-1 no-scrollbar"
        >
          {VENTURES_INITIATIVES.map((venture, idx) => (
            <VentureCarouselCard
              key={venture.id}
              venture={venture}
              isActive={activeIndex === idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface VentureCarouselCardProps {
  venture: VentureInitiativeItem;
  isActive: boolean;
}

const VentureCarouselCard: React.FC<VentureCarouselCardProps> = ({ venture }) => {
  // Select pastel themes matching the uploaded reference photo
  const getThemeStyles = () => {
    switch (venture.id) {
      case 'mwizerwa':
        // Soft royal purple / lavender
        return {
          bgCanvas: 'bg-[#ede9fe] dark:bg-[#1e1538] border border-[#ddd6fe]/50 dark:border-[#382760]/50',
          badgeText: 'text-[#5b21b6] dark:text-[#c4b5fd]',
        };
      case 'passe':
        // Soft emerald / mint
        return {
          bgCanvas: 'bg-[#dcfce7] dark:bg-[#0e281b] border border-[#bbf7d0]/50 dark:border-[#1b4b32]/50',
          badgeText: 'text-[#166534] dark:text-[#86efac]',
        };
      case 'gurarwanda':
      default:
        // Soft sky / ice-blue (matching Strettch/RP in reference photo)
        return {
          bgCanvas: 'bg-[#dff1fd] dark:bg-[#0c2436] border border-[#bfe1f8]/50 dark:border-[#1e4663]/50',
          badgeText: 'text-[#075985] dark:text-[#7dd3fc]',
        };
    }
  };

  const theme = getThemeStyles();
  const destinationUrl = venture.liveUrl || BOOKING_URL;

  return (
    <article
      className="w-[88vw] sm:w-[680px] lg:w-[840px] xl:w-[920px] shrink-0 snap-center rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 skeuo-card transition-all duration-300 flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Pastel Canvas with Laptop Screen Device Frame */}
        <div className="lg:col-span-7">
          <div
            className={`w-full rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:py-8 flex items-center justify-center relative overflow-hidden transition-colors ${theme.bgCanvas}`}
          >
            {/* Realistic Laptop Device Mockup */}
            <div className="w-full max-w-[480px]">
              {/* MacBook Screen Bezel */}
              <div className="relative rounded-t-xl sm:rounded-t-2xl bg-[#111113] border-[5px] sm:border-[7px] border-[#18181b] shadow-2xl overflow-hidden aspect-16/10">
                {/* Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#18181b] rounded-b-md z-30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27272a] border border-white/10" />
                </div>

                {/* Inner Device Screen Render */}
                <LaptopScreenContent venture={venture} />
              </div>

              {/* Laptop Hinge / Base */}
              <div className="relative h-2 sm:h-2.5 bg-[#27272a] rounded-b-md border-t border-white/10 flex items-center justify-center">
                <div className="w-16 sm:w-20 h-1 bg-[#3f3f46] rounded-b-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy, Details & CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="skeuo-inset px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-fg">
                {venture.number} · {venture.category}
              </span>
              <span className="text-[11px] text-muted font-bold">
                {venture.role}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                {venture.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-fg/90">
                {venture.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
              {venture.description}
            </p>

            {/* Key Highlights */}
            <ul className="skeuo-inset p-3 space-y-1">
              {venture.highlights.slice(0, 2).map((item) => (
                <li key={item} className="text-[11px] sm:text-xs text-fg flex items-start gap-2">
                  <span className="text-muted font-bold">▪</span>
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>

            {/* Unwrapped Technologies */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold pt-0.5">
              {venture.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  {idx > 0 && <span className="opacity-40">·</span>}
                  <span>{tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action Row matching "Visit Website ↗" in Photo */}
          <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn shrink-0"
            >
              <span>Visit Website</span>
              <span>↗</span>
            </a>

            {venture.caseStudyPath && (
              <Link to={venture.caseStudyPath} className="skeuo-btn-secondary shrink-0">
                <span>Case Study</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

/**
 * Screen renderer for the laptop device frame inside each carousel card
 */
const LaptopScreenContent: React.FC<{ venture: VentureInitiativeItem }> = ({ venture }) => {
  if (venture.id === 'gurarwanda') {
    return (
      <div className="w-full h-full bg-[#f8fafc] text-[#0f172a] p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Browser Top Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-md bg-[#0284c7] flex items-center justify-center text-white text-[9px] font-bold">
              G
            </div>
            <span className="text-[11px] font-bold tracking-tight">GuraRwanda</span>
          </div>
          <div className="flex items-center gap-3 text-[9px] text-slate-500 font-bold">
            <span>Artisans</span>
            <span>Producers</span>
            <span>Made in Rwanda</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-slate-100 text-[8px] font-bold text-slate-700">
            Cart (0)
          </div>
        </div>

        {/* Hero Banner inside Laptop Screen */}
        <div className="space-y-1.5 py-1">
          <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
            Official Marketplace
          </span>
          <h4 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 leading-tight">
            Discover Rwanda's Next Innovators &amp; Producers
          </h4>
          <p className="text-[9px] text-slate-500 leading-tight line-clamp-2">
            Connecting Rwandan coffee, ceramics, textiles, and design directly with customers worldwide.
          </p>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-600 text-white text-[9px] font-bold">
            <span>Explore Store</span>
            <span>→</span>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-slate-200">
          <div className="bg-white p-1.5 rounded border border-slate-200 space-y-0.5">
            <div className="h-6 rounded bg-slate-100 flex items-center justify-center text-[9px]">☕</div>
            <p className="text-[8px] font-bold text-slate-800 truncate">Huye Bourbon</p>
            <p className="text-[7px] text-slate-500 font-bold">RWF 14,000</p>
          </div>
          <div className="bg-white p-1.5 rounded border border-slate-200 space-y-0.5">
            <div className="h-6 rounded bg-slate-100 flex items-center justify-center text-[9px]">🏺</div>
            <p className="text-[8px] font-bold text-slate-800 truncate">Gatagara Clay</p>
            <p className="text-[7px] text-slate-500 font-bold">RWF 28,000</p>
          </div>
          <div className="bg-white p-1.5 rounded border border-slate-200 space-y-0.5">
            <div className="h-6 rounded bg-slate-100 flex items-center justify-center text-[9px]">🧺</div>
            <p className="text-[8px] font-bold text-slate-800 truncate">Agaseke Basket</p>
            <p className="text-[7px] text-slate-500 font-bold">RWF 35,000</p>
          </div>
        </div>
      </div>
    );
  }

  if (venture.id === 'mwizerwa') {
    return (
      <div className="w-full h-full bg-[#18181b] text-white p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-violet-500 flex items-center justify-center text-[8px] font-bold">
              M
            </div>
            <span className="text-[11px] font-bold">Mwizerwa Companion</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 text-[8px] font-bold border border-violet-800/50">
            Private &amp; Safe
          </span>
        </div>

        {/* Hero Content */}
        <div className="space-y-1.5 py-1">
          <h4 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-100 leading-tight">
            A Safe Space for Daily Emotional Clarity
          </h4>
          <p className="text-[9px] text-zinc-400 leading-tight line-clamp-2">
            Deconstruct complex life challenges with empathetic guided reflection and practical steps.
          </p>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-600 text-white text-[9px] font-bold">
            <span>Begin Session</span>
            <span>→</span>
          </div>
        </div>

        {/* Interactive Reflection Cards */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800">
          <div className="bg-zinc-900 p-2 rounded-md border border-zinc-800 space-y-1">
            <p className="text-[8px] font-bold text-violet-400">Mindful Check-in</p>
            <p className="text-[7px] text-zinc-400 leading-tight">"What is occupying most of your energy today?"</p>
          </div>
          <div className="bg-zinc-900 p-2 rounded-md border border-zinc-800 space-y-1">
            <p className="text-[8px] font-bold text-violet-400">Action Step</p>
            <p className="text-[7px] text-zinc-400 leading-tight">"Break down the next 30 minutes into one small action."</p>
          </div>
        </div>
      </div>
    );
  }

  // PASSE Access Control Console
  return (
    <div className="w-full h-full bg-[#09090b] text-white p-3 sm:p-4 flex flex-col justify-between font-sans select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded bg-emerald-500 flex items-center justify-center text-black text-[8px] font-bold">
            P
          </div>
          <span className="text-[11px] font-bold">PASSE Security OS</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8px] font-bold text-emerald-400">Gate Alpha · Live</span>
        </div>
      </div>

      {/* Main Console View */}
      <div className="space-y-1.5 py-1">
        <h4 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-100 leading-tight">
          Sub-Second Identity &amp; Vehicle Verification
        </h4>
        <p className="text-[9px] text-zinc-400 leading-tight line-clamp-2">
          AI OCR badge recognition and automated gate controls for campuses and enterprise facilities.
        </p>
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[9px] font-bold">
          <span>Open Terminal</span>
          <span>↗</span>
        </div>
      </div>

      {/* Real-Time Log Indicators */}
      <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-zinc-800">
        <div className="bg-zinc-900 p-1.5 rounded border border-zinc-800">
          <span className="text-[7px] text-zinc-500 font-bold block">NATIONAL ID</span>
          <p className="text-[8px] font-bold text-emerald-400">Verified ✓</p>
        </div>
        <div className="bg-zinc-900 p-1.5 rounded border border-zinc-800">
          <span className="text-[7px] text-zinc-500 font-bold block">VEHICLE PLATE</span>
          <p className="text-[8px] font-bold text-zinc-200">RAB 482B</p>
        </div>
        <div className="bg-zinc-900 p-1.5 rounded border border-zinc-800">
          <span className="text-[7px] text-zinc-500 font-bold block">AUDIT LOG</span>
          <p className="text-[8px] font-bold text-zinc-200">1,420 Entries</p>
        </div>
      </div>
    </div>
  );
};

export default VenturesSection;
