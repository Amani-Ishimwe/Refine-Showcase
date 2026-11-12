import React from 'react';
import { Link } from 'react-router-dom';
import SelectedWork from '../components/SelectedWork';
import SEOHead from '../components/SEOHead';

const WorkPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Selected Work & Case Studies"
        description="Selected product design, UI/UX systems, and full-stack software engineering projects by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Projects</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Projects & Case Studies
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Product design, UI/UX systems, and full-stack software engineering.
          </p>
        </div>
      </div>

      <SelectedWork showHeaderLink={false} />
    </>
  );
};

export default WorkPage;
