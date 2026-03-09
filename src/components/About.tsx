import React from 'react';
import { PHILOSOPHIES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="memo-container section-padding border-t border-border">
      <div className="flex flex-col gap-24">
        {/* Core Philosophy Section */}
        <div>
          <span className="label">Core Philosophy</span>
          <h2 className="max-w-md leading-[1.2] mb-12">
            Building digital systems with <span className="font-serif italic text-muted">intentionality</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {PHILOSOPHIES.map((item, index) => (
              <div key={index} className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-1 h-1 bg-fg rounded-full" />
                <h3 className="text-sm md:text-base font-medium text-fg mb-3 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Biography Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center border-t border-border pt-24">
          <div className="flex-1 space-y-8">
            <span className="label">Background</span>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-fg leading-relaxed font-light">
                I operate at the intersection of aesthetic precision and technical rigor.
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed font-light">
                Based in Kigali, Rwanda, I partner with companies that value technical precision and structured communication.
              </p>
            </div>

            <div className="pt-4">
              <a href="mailto:hello@amani.dev" className="text-[11px] font-semibold uppercase tracking-widest text-fg hover:translate-x-2 transition-all flex items-center gap-3">
                <span className="w-8 h-px bg-border" />
                Reach Out
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 shrink-0 order-first md:order-last">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src="/about_profile_photo_placeholder.png"
                alt="Samuel Amani"
                className="w-full h-full object-cover scale-[1.01] hover:grayscale-0 transition-all duration-1000 grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
