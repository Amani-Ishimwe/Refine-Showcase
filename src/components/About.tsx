import React from 'react';
import { PHILOSOPHIES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="memo-container section-padding border-t border-border/40">
      <div className="flex flex-col gap-16">
        <div>
          <span className="label">Focus / 07</span>
          <h2 className="text-3xl font-medium mb-8 font-serif-italic">Professional Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-8">
            {PHILOSOPHIES.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider !my-0" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <span className="label text-foreground/40 mb-4 block uppercase tracking-[0.2em] font-mono text-[10px]">Approach & Mindset</span>
            <div className="space-y-6">
              <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                I operate at the intersection of aesthetic precision and technical rigor. My career is built on the belief that a product's success is defined by its clarity, long-term health, and the disciplined habits of those who build it.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                Based in Kigali, Rwanda, I partner with companies that value technical precision and structured communication. I don't just "build features"—I build systems that solve problems for real people while remaining maintainable for engineers.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 shrink-0">
            <div className="aspect-[1/1] bg-muted/5 overflow-hidden border border-border/40 grayscale opacity-90 rounded-sm">
              <img
                src="/about_profile_photo_placeholder.png"
                alt="Samuel Amani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
