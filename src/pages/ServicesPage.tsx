import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import SEOHead from '../components/SEOHead';
import { FLEXIBLE_ENGAGEMENT_MODELS, PRICING_FAQS, PROFILE_CONFIG } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services — Product Design & Software Engineering"
        description="Professional services by Ishimwe Amani Samuel: Strategy, UI/UX Design, Web Dev, Full-Stack Engineering, SaaS, Documentation, and Advisory."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Services & Capabilities
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            From product discovery and UI/UX design to full-stack engineering.
          </p>
        </div>
      </div>

      <Services showFullComparison />

      <section className="editorial-container pb-16 space-y-12">
        <div className="space-y-6">
          <span className="label">Flexible Engagements</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {FLEXIBLE_ENGAGEMENT_MODELS.map((model) => (
              <div key={model.id} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg font-bold inline-block">
                    {model.pricingLabel}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-fg">{model.title}</h3>
                  <p className="text-xs text-muted">{model.description}</p>
                </div>
                <a
                  href={PROFILE_CONFIG.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skeuo-btn-secondary self-start"
                >
                  <span>Book a Call</span>
                  <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <span className="label">FAQ</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {PRICING_FAQS.map((faq) => (
              <div key={faq.question} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-1.5">
                <h3 className="text-sm font-bold text-fg">{faq.question}</h3>
                <p className="text-xs text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
