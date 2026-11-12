import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, PROFILE_CONFIG } from '../constants';
import ProjectVisual from '../components/ProjectVisual';
import SEOHead from '../components/SEOHead';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="editorial-container py-16">
        <SEOHead title="Product Not Found" />
        <div className="skeuo-card p-8 space-y-4 max-w-lg">
          <h1 className="text-2xl font-bold text-fg">Product not found.</h1>
          <Link to="/products" className="skeuo-btn">
            <span>← Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`${product.name} — Product`} description={product.tagline} />
      <article className="editorial-container pt-6 pb-16 space-y-6 sm:space-y-8">
        <header className="skeuo-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-muted font-bold">
              <Link to="/" className="hover:text-fg">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-fg">Products</Link>
              <span>/</span>
              <span className="text-fg">{product.name}</span>
            </div>
            <span className="skeuo-inset px-3 py-1 text-xs font-bold text-fg">
              {product.status} · {product.ownershipCategory}
            </span>
          </div>

          <div className="space-y-1">
            <span className="eyebrow block">{product.category}</span>
            <h1 className="text-2xl sm:text-4xl font-bold text-fg">{product.name}</h1>
            <p className="text-xs sm:text-sm text-muted">{product.tagline}</p>
          </div>

          {/* Unwrapped Stack & Tools */}
          <div className="pt-2 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-fg">
            <span className="text-muted uppercase tracking-wider text-[10px]">Tech Stack:</span>
            {product.technologyStack.map((t, idx) => (
              <React.Fragment key={t.name}>
                {idx > 0 && <span className="text-muted opacity-40">·</span>}
                <span>{t.name}</span>
              </React.Fragment>
            ))}
          </div>
        </header>

        <ProjectVisual
          id={`product-${product.id}`}
          imageUrl={product.imageUrl}
          title={product.name}
          category={product.category}
          schematicType={product.schematicType}
          status={product.status}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {product.mainFeatures.map((feat, idx) => (
            <div key={feat.title} className="skeuo-card p-5 h-full flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <span className="label">0{idx + 1} · Feature</span>
                <h2 className="text-base font-bold text-fg">{feat.title}</h2>
              </div>
              <p className="text-xs text-muted">{feat.description}</p>
            </div>
          ))}
        </div>

        <div className="skeuo-card p-6 space-y-3">
          <span className="label">Problem Solved & Architecture</span>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {product.problemSolved}
          </p>
          <p className="text-xs sm:text-sm text-fg font-bold">
            {product.plainLanguageArchitecture}
          </p>
        </div>

        <div className="skeuo-card p-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold text-fg">Role: {product.myRole}</span>
          <div className="flex flex-wrap gap-2.5">
            <Link to={product.caseStudyPath} className="skeuo-btn">
              <span>Read Case Study</span>
              <span>→</span>
            </Link>
            <a
              href={PROFILE_CONFIG.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn-secondary"
            >
              <span>Discover More</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
