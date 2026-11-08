import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import SEOHead from '../components/SEOHead';
import { PRICING_FAQS } from '../constants';

const PricingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Packages & Pricing"
        description="Transparent service packages by Ishimwe Amani Samuel: Foundation ($400), Experience ($1,000), Build ($2,500), End-to-End ($5,000), Documentation ($700), and Advisory ($400/mo)."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Packages & Pricing
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Transparent baseline packages. Final scope and timeline confirmed after discussion.
          </p>
        </div>
      </div>

      <Services showFullComparison />

      <section className="editorial-container pb-16 space-y-6">
        <span className="label">Pricing FAQ</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {PRICING_FAQS.map((faq) => (
            <div key={faq.question} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-1.5">
              <h2 className="text-sm font-bold text-fg">{faq.question}</h2>
              <p className="text-xs text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingPage;
