import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_CONFIG, PHILOSOPHIES } from '../constants';
import SocialLinks from '../components/SocialLinks';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Ishimwe Amani Samuel"
        description="Ishimwe Amani Samuel — Product Designer & Software Engineer based in Kigali, Rwanda."
      />
      <div className="editorial-container pt-6 pb-16 space-y-8">
        <div className="skeuo-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="skeuo-inset p-3 space-y-3">
                <div className="aspect-4/5 rounded-lg overflow-hidden border border-border bg-surface">
                  <img
                    src={PROFILE_CONFIG.portraitUrl}
                    alt={PROFILE_CONFIG.fullName}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-fg">{PROFILE_CONFIG.shortName}</span>
                  <span className="text-[11px] text-muted font-bold">Kigali, RW</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs text-muted font-bold">
                <Link to="/" className="hover:text-fg">Home</Link>
                <span>/</span>
                <span className="text-fg">About</span>
              </div>

              <span className="eyebrow block">{PROFILE_CONFIG.personalIdentity}</span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
                {PROFILE_CONFIG.fullName}
              </h1>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Based in Kigali, Rwanda, I work at the intersection of product design, software engineering, and entrepreneurship. Trained at <strong className="text-fg">Rwanda Coding Academy</strong>, I combine interface precision in Figma with full-stack engineering so ideas move cleanly from concept to production.
              </p>

              <div className="skeuo-inset p-4">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
                  Motto
                </span>
                <p className="text-base font-bold text-fg mt-0.5">
                  &ldquo;{PROFILE_CONFIG.motto}&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={PROFILE_CONFIG.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skeuo-btn"
                >
                  <span>Book a Call</span>
                  <span>↗</span>
                </a>
                <Link to="/work" className="skeuo-btn-secondary">
                  <span>Explore Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Equal-Height 4 Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PHILOSOPHIES.map((p) => (
            <div key={p.id} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-2">
              <div className="space-y-1.5">
                <span className="skeuo-inset px-2.5 py-0.5 text-[10px] font-bold text-fg inline-block">
                  {p.number}
                </span>
                <h2 className="text-base font-bold text-fg">{p.title}</h2>
              </div>
              <p className="text-xs text-muted leading-snug">{p.shortSummary}</p>
            </div>
          ))}
        </div>

        <SocialLinks />
      </div>
    </>
  );
};

export default AboutPage;
