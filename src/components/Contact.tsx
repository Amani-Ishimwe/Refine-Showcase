import React from 'react';
import { PROFILE_CONFIG } from '../constants';
import SocialLinks from './SocialLinks';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="editorial-container space-y-8">
        <div className="skeuo-card p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="skeuo-inset px-3.5 py-1.5 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fg animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider text-fg font-bold">
                {PROFILE_CONFIG.availability.statusText}
              </span>
            </div>
            <div className="skeuo-inset px-3.5 py-1.5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted font-bold">
              <span>{PROFILE_CONFIG.location.city}, {PROFILE_CONFIG.location.country} · {PROFILE_CONFIG.location.timezone}</span>
            </div>
          </div>

          <div className="space-y-3 max-w-2xl">
            <span className="label">08 · Contact & Availability</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg leading-tight">
              Ready to build your next product?
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Schedule a 15-minute discovery call to discuss your product, UI/UX design, or software engineering needs directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={PROFILE_CONFIG.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn"
            >
              <span>Book a Call</span>
              <span>↗</span>
            </a>
            <a
              href={`mailto:${PROFILE_CONFIG.contact.email}`}
              className="skeuo-btn-secondary"
            >
              <span>{PROFILE_CONFIG.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Unwrapped Social Media Links */}
        <div className="pt-2">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
