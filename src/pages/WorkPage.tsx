import React from 'react';
import { Link } from 'react-router-dom';
import SelectedWork from '../components/SelectedWork';
import SEOHead from '../components/SEOHead';

const WorkPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Work I Contributed To — Systems & Platforms"
        description="Client systems, institutional platforms, and collaborative engineering and product design contributions by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Work</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Work I Contributed To
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Client systems, institutional portals, and collaborative software engineering contributions built with high-trust organizations.
          </p>
        </div>
      </div>

      <SelectedWork showHeaderLink={false} />
    </>
  );
};

export default WorkPage;
