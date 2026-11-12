import React from 'react';
import { Link } from 'react-router-dom';
import VenturesSection from '../components/VenturesSection';
import StudiosSection from '../components/StudiosSection';
import SEOHead from '../components/SEOHead';

const VenturesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Ventures, Studios & Agencies"
        description="Ventures, initiatives, and digital studios founded and led by Ishimwe Amani Samuel: GuraRwanda, Mwizerwa, PASSE, Lintel, Rapix, and Wattfor."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Ventures & Studios</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Ventures, Studios & Agencies
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Technology initiatives and digital studios founded to turn ideas into real-world products.
          </p>
        </div>
      </div>

      <VenturesSection compact={false} />
      <StudiosSection showHeaderLink={false} />
    </>
  );
};

export default VenturesPage;
