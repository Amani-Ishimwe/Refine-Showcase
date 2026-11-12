import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SERVICE_CATEGORIES,
  SERVICE_PACKAGES,
  CURRENCY_CONFIG,
  PROFILE_CONFIG,
} from '../constants';

type CurrencyCode = keyof typeof CURRENCY_CONFIG.rates;

interface ServicesProps {
  showFullComparison?: boolean;
}

const Services: React.FC<ServicesProps> = () => {
  const [currency, setCurrency] = useState<CurrencyCode>(CURRENCY_CONFIG.default);

  const formatPrice = (usdAmount: number, billingPeriod?: string) => {
    const rateObj = CURRENCY_CONFIG.rates[currency];
    const converted = Math.round(usdAmount * rateObj.rate);
    const formatted =
      currency === 'RWF'
        ? `RWF ${converted.toLocaleString()}`
        : `${rateObj.symbol}${converted.toLocaleString()}`;
    return billingPeriod ? `${formatted}${billingPeriod}` : formatted;
  };

  return (
    <section id="services" className="section-padding">
      <div className="editorial-container space-y-16">
        {/* Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">05 · Services & Pricing</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Capabilities and transparent pricing.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              From targeted UI/UX design sprints to full-stack product engineering, select an engagement model tailored to your stage.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link to="/services" className="skeuo-btn-secondary">
              <span>All Services</span>
              <span>→</span>
            </Link>
            <Link to="/pricing" className="skeuo-btn">
              <span>Compare Packages</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* PART 1: 7 SERVICE CATEGORIES (Equal Height Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <h3 className="text-lg sm:text-xl font-bold text-fg">
              What you can hire me to do.
            </h3>
            <span className="text-xs text-muted font-bold">
              7 Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/services/${category.id}`}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-muted font-bold">
                    <span>{category.number}</span>
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg">
                      {category.estimatedTimeline}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-fg line-clamp-1">
                    {category.title}
                  </h4>
                  <p className="text-xs text-muted leading-snug line-clamp-2">
                    {category.shortSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-fg">
                  <span>{category.startingPriceNote}</span>
                  <span>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PART 2: 6 PACKAGES & PRICING (Equal Height Cards + Sky Blue Flagship Highlight) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-border">
            <h3 className="text-lg sm:text-xl font-bold text-fg">
              Clear packages for every stage.
            </h3>

            {/* Tactile Currency Switcher (Navigation Button Height) */}
            <div className="skeuo-inset p-1 inline-flex items-center gap-1 self-start sm:self-auto">
              {(Object.keys(CURRENCY_CONFIG.rates) as CurrencyCode[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={`cursor-pointer ${
                    currency === code
                      ? 'skeuo-btn'
                      : 'h-9 px-3 text-xs text-muted hover:text-fg font-bold rounded-lg'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`skeuo-card sky-gradient-subtle p-6 h-full flex flex-col justify-between space-y-6 ${
                  pkg.isFlagship ? 'ring-2 ring-[#42b4e6]' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-muted font-bold">
                      {pkg.number} · {pkg.tagline}
                    </span>
                    {pkg.isFlagship && (
                      <span className="px-2.5 py-0.5 rounded-md bg-[#42b4e6] text-[#071924] text-[10px] uppercase font-bold">
                        Flagship
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-fg">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-fg mt-1">
                      {formatPrice(pkg.priceUSD, pkg.billingPeriod)}
                    </div>
                    <span className="text-[11px] text-muted block mt-0.5 line-clamp-1">
                      {pkg.bestFor} · {pkg.estimatedDuration}
                    </span>
                  </div>

                  <ul className="skeuo-inset p-3.5 space-y-1.5 min-h-[138px]">
                    {pkg.includes.map((item) => (
                      <li key={item} className="text-xs text-fg flex items-center gap-2">
                        <span className="text-[#42b4e6] font-bold">✓</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={PROFILE_CONFIG.contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${
                      pkg.isFlagship ? 'sky-btn' : 'skeuo-btn-secondary'
                    }`}
                  >
                    <span>Book a Call</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
