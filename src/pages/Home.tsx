import React from 'react';
import Hero from '../components/Hero';
import VenturesSection from '../components/VenturesSection';
import ProductsSection from '../components/ProductsSection';
import StudiosSection from '../components/StudiosSection';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import ToolsSection from '../components/ToolsSection';
import ExperiencePreview from '../components/ExperiencePreview';
import About from '../components/About';
import Writing from '../components/Writing';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      {/* SECTION 01 — Ventures & Initiatives */}
      <VenturesSection compact />
      {/* SECTION 02 — Products & Experiments (Curated Selection on Home) */}
      <ProductsSection showViewAll limit={3} />
      {/* SECTION 03 — Studios & Agencies */}
      <StudiosSection showHeaderLink />
      {/* SECTION 04 — Selected Work (Curated Selection on Home) */}
      <SelectedWork showHeaderLink limit={3} />
      <Services />
      <ToolsSection />
      <ExperiencePreview />
      <About showFullLink />
      <Writing />
      <Contact />
    </>
  );
};

export default Home;
