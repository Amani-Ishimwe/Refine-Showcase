import React from 'react';
import { Link } from 'react-router-dom';
import VenturesSection from '../components/VenturesSection';
import SEOHead from '../components/SEOHead';

const VenturesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Businesses & Ventures"
        description="Businesses, studio practice, and B2B SaaS ventures by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Ventures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Businesses & Ventures
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Organizations and ventures through which value is created and delivered.
          </p>
        </div>
      </div>

      <VenturesSection compact={false} />
    </>
  );
};

export default VenturesPage;
