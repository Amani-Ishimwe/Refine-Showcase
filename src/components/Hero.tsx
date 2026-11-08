import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_CONFIG, CREDIBILITY_HIGHLIGHTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="editorial-container pt-6 pb-12 sm:pt-10 sm:pb-16 space-y-6 sm:space-y-8">
      {/* Main Tactile Glass/Skeuomorphic Hero Card */}
      <div className="skeuo-card p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Identity & Action Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Status & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="skeuo-inset px-3.5 py-1.5 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fg animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider text-fg font-bold">
                  {PROFILE_CONFIG.availability.statusText}
                </span>
              </div>
              <div className="skeuo-inset px-3.5 py-1.5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted font-bold">
                <span>{PROFILE_CONFIG.location.city}, {PROFILE_CONFIG.location.country}</span>
              </div>
            </div>

            {/* Eyebrow & Headlines */}
            <div className="space-y-3">
              <span className="eyebrow block">
                {PROFILE_CONFIG.hero.eyebrow}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-fg leading-[1.08]">
                {PROFILE_CONFIG.hero.mainHeadline}
              </h1>

              <p className="text-sm sm:text-lg text-muted max-w-xl leading-relaxed">
                {PROFILE_CONFIG.hero.supportingHeadline}
              </p>
            </div>

            {/* Only Two Buttons on Hero Section (Standardized Navigation Height) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Link to="/work" className="skeuo-btn">
                <span>{PROFILE_CONFIG.hero.primaryCta}</span>
                <span>→</span>
              </Link>
              <a
                href={PROFILE_CONFIG.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-btn-secondary"
              >
                <span>{PROFILE_CONFIG.hero.secondaryCta}</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Portrait Bezel */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="skeuo-inset p-3.5 space-y-3.5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white border border-black/10 p-0.5 flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-fg">
                    {PROFILE_CONFIG.personalIdentity}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">
                  RW · CAT
                </span>
              </div>

              {/* Portrait Frame */}
              <div className="relative aspect-4/4 sm:aspect-4/5 rounded-xl overflow-hidden border border-border bg-surface">
                <img
                  src={PROFILE_CONFIG.portraitUrl}
                  alt={PROFILE_CONFIG.fullName}
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>

              <div className="px-1 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-fg truncate">
                  {PROFILE_CONFIG.fullName}
                </span>
                <span className="text-[11px] text-muted shrink-0">
                  Design · Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equal-Height 4-Pillar Credibility Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {CREDIBILITY_HIGHLIGHTS.map((item) => (
          <div key={item.id} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-2">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-muted font-bold block">
                {item.label}
              </span>
              <h2 className="text-sm font-bold text-fg">
                {item.title}
              </h2>
            </div>
            <p className="text-xs text-muted leading-snug line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
