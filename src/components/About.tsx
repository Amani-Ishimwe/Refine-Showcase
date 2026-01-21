import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container-custom section-padding bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">05 / About</span>
          <h2 className="text-3xl font-medium mb-8">Professional focus, grounded execution.</h2>
          <div className="space-y-6 text-background/80 leading-relaxed font-light">
            <p>
              I bridge the gap between abstract design concepts and robust, production-ready implementation.
              My approach is rooted in the belief that great products are built with equal parts empathy, technical precision, and structured communication.
            </p>
            <p>
              I value long-term codebase health, accessibility by default, and documentation that empowers teams.
              Efficiency is my goal; clarity is my method.
            </p>
          </div>
        </div>
        <div className="aspect-[4/5] bg-muted/20 overflow-hidden border border-background/10">
          <img
            src="public/about_profile_photo_placeholder.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
