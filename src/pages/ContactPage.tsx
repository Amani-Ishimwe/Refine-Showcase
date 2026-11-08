import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Book a Call — Contact"
        description="Book a 15-minute discovery call with Ishimwe Amani Samuel in Kigali, Rwanda to discuss product design, UI/UX, or full-stack software engineering."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Book a Call
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Schedule a 15-minute discovery call or reach out directly via email.
          </p>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
