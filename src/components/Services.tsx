import React from 'react';
import { SERVICE_PACKAGES } from '../constants';

const Services: React.FC = () => {
  const CAL_LINK = "https://cal.com/ishimwe-amani-samuel-odxmcv/15min?user=ishimwe-amani-samuel-odxmcv&overlayCalendar=true";

  return (
    <section id="services" className="memo-container section-padding border-t border-border">
      <div className="mb-16">
        <span className="label">Provisioning / Pricing</span>
        <h2 className="max-w-md">
          Engagement models for <span className="font-serif italic text-muted">technical clarity</span>.
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {SERVICE_PACKAGES.map((pkg) => (
          <div key={pkg.id} className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-fg/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-fg/5 rounded-full text-muted group-hover:bg-fg/10 transition-colors">{pkg.tagline}</span>
                  <h3 className="text-base font-medium m-0">{pkg.name}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed max-w-sm m-0">
                  {pkg.outcome} Dedicated to <span className="text-fg/80">{pkg.bestFor}</span>.
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="text-[10px] text-muted flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-border rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                <div className="text-lg font-medium">{pkg.pricing}</div>
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold uppercase tracking-widest border-b border-muted/30 hover:border-fg transition-all py-1"
                >
                  Briefing →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] text-muted uppercase tracking-widest italic">Custom retainers available upon request.</p>
      </div>
    </section>
  );
};

export default Services;
