import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead title="404 — Page Not Found" />
      <section className="editorial-container py-16">
        <div className="skeuo-card p-8 sm:p-10 max-w-xl space-y-5">
          <span className="label">404</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-fg">
            Page not found.
          </h1>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/" className="skeuo-btn">
              <span>Home</span>
              <span>→</span>
            </Link>
            <Link to="/work" className="skeuo-btn-secondary">
              <span>Work</span>
            </Link>
            <Link to="/contact" className="skeuo-btn-secondary">
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
