import React from 'react';
import { SERVICE_PACKAGES } from '../constants';

const Services: React.FC = () => {
  const CAL_LINK = "https://cal.com/ishimwe-amani-samuel-odxmcv/15min?user=ishimwe-amani-samuel-odxmcv&overlayCalendar=true";

  return (
    <section id="services" className="memo-container section-padding border-t border-border/40">
      <div className="mb-12">
        <span className="label">Provisioning / 05</span>
        <h2 className="text-3xl font-medium font-serif-italic">Service Packages</h2>
        <p className="text-sm text-foreground/60 mt-2 max-w-sm">
          Professional engagement models with transparent, fixed pricing.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {SERVICE_PACKAGES.map((pkg) => (
          <div key={pkg.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 group">
            <div className="flex flex-col">
              <span className="label text-accent mb-2">{pkg.tagline}</span>
              <h3 className="text-2xl font-medium">{pkg.name}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mt-4 max-w-md">
                {pkg.outcome}
              </p>
              <div className="mt-8">
                <span className="text-[10px] font-mono text-muted/60 uppercase tracking-widest block mb-2">Investment</span>
                <p className="text-2xl font-semibold text-foreground">{pkg.pricing}</p>
              </div>
              <div className="mt-10">
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-[0.25em] underline underline-offset-8 decoration-border/60 hover:decoration-foreground transition-all"
                >
                  Request Briefing
                </a>
              </div>
            </div>

            <div>
              <span className="label mb-6">Inclusions</span>
              <ul className="space-y-3">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex gap-4">
                    <span className="text-muted/30 font-mono text-[10px] pt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/20">
                <span className="text-[10px] font-mono text-muted/60 uppercase tracking-widest">Target Selection</span>
                <p className="text-xs text-muted block mt-1 italic">{pkg.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
