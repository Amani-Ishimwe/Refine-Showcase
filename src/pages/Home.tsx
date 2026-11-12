import React from 'react';
import Hero from '../components/Hero';
import ToolsSection from '../components/ToolsSection';
import VenturesSection from '../components/VenturesSection';
import ProductsSection from '../components/ProductsSection';
import StudiosSection from '../components/StudiosSection';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import ExperiencePreview from '../components/ExperiencePreview';
import About from '../components/About';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      {/* Tools I Use Daily — Infinite Sliding Logo Marquee */}
      <ScrollReveal>
        <ToolsSection />
      </ScrollReveal>
      {/* SECTION 01 — Ventures & Initiatives */}
      <ScrollReveal>
        <VenturesSection compact />
      </ScrollReveal>
      {/* SECTION 02 — Products & Experiments (2 Selected SaaS Projects on Home) */}
      <ScrollReveal>
        <ProductsSection showViewAll limit={2} />
      </ScrollReveal>
      {/* SECTION 03 — Studios & Agencies */}
      <ScrollReveal>
        <StudiosSection showHeaderLink />
      </ScrollReveal>
      {/* SECTION 04 — Selected Work (Curated Selection on Home) */}
      <ScrollReveal>
        <SelectedWork showHeaderLink limit={3} />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <ExperiencePreview />
      </ScrollReveal>
      <ScrollReveal>
        <About showFullLink />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
};

export default Home;
