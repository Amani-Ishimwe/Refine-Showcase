import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { OwnershipDistinction } from '../types';
import ProjectVisual from './ProjectVisual';

const OWNERSHIP_FILTERS: ('All' | OwnershipDistinction)[] = [
  'All',
  'Products I Co-Built',
  'Products I Engineered',
  'Products I Designed',
  'Experimental Concepts',
];

interface ProductsSectionProps {
  showViewAll?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ showViewAll = true }) => {
  const [selectedOwnership, setSelectedOwnership] = useState<'All' | OwnershipDistinction>('All');

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedOwnership === 'All' || p.ownershipCategory === selectedOwnership
  );

  return (
    <section id="products" className="section-padding">
      <div className="editorial-container space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="label">02 · Products & Platforms</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
              Software platforms I build.
            </h2>
          </div>

          {showViewAll && (
            <Link to="/products" className="skeuo-btn-secondary self-start sm:self-auto">
              <span>All Products</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Scrollable Filter Row (Standardized Height) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2" role="tablist">
          {OWNERSHIP_FILTERS.map((filter) => {
            const active = selectedOwnership === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedOwnership(filter)}
                className={`cursor-pointer shrink-0 ${
                  active ? 'skeuo-btn' : 'skeuo-btn-secondary text-muted'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Equal-Height Products Grid with Visual Image Thumbnails & Logo Upload Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <Link to={`/products/${product.id}`} className="block">
                  <ProjectVisual
                    id={`product-${product.id}`}
                    imageUrl={product.imageUrl}
                    title={product.name}
                    category={product.category}
                    schematicType={product.schematicType}
                    status={product.status}
                  />
                </Link>

                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-fg">
                      <Link to={`/products/${product.id}`} className="hover:underline">
                        {product.name}
                      </Link>
                    </h3>
                    <span className="text-xs text-muted block">{product.category}</span>
                  </div>
                  <span className="skeuo-inset px-2.5 py-1 text-[10px] text-fg font-bold shrink-0">
                    {product.ownershipCategory}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-snug line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                  {product.technologyStack.map((tech, idx) => (
                    <React.Fragment key={tech.name}>
                      {idx > 0 && <span className="opacity-40">·</span>}
                      <span>{tech.name}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-muted font-bold truncate">{product.myRole}</span>
                <div className="flex items-center gap-2 shrink-0">
                  <Link to={`/products/${product.id}`} className="skeuo-btn">
                    <span>Details</span>
                    <span>→</span>
                  </Link>
                  <Link to={product.caseStudyPath} className="skeuo-btn-secondary">
                    <span>Case Study</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
