import React from 'react';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import ProductsSection from '../components/ProductsSection';
import VenturesSection from '../components/VenturesSection';
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
      <SelectedWork showHeaderLink />
      <ProductsSection showViewAll />
      <VenturesSection compact />
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
