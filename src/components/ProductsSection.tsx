import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProjectVisual from './ProjectVisual';

interface ProductsSectionProps {
  showViewAll?: boolean;
  limit?: number;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  showViewAll = true,
  limit,
}) => {
  const displayedProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <section id="products" className="section-padding">
      <div className="editorial-container space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="label">02 · Products & Experiments</span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-fg leading-[1.12]">
              Small ideas. Useful products. Real problems.
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Exploring opportunities, building software products, and turning everyday problems into useful digital tools.
            </p>
          </div>

          {showViewAll && (
            <Link to="/products" className="skeuo-btn-secondary self-start lg:self-auto shrink-0">
              <span>All Products ({PRODUCTS.length})</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Varied-Span Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 items-stretch">
          {displayedProducts.map((product) => {
            const isHalf = product.featuredSpan === 'half';
            const colSpanClass = isHalf
              ? 'md:col-span-3 lg:col-span-6'
              : 'md:col-span-3 lg:col-span-4';

            return (
              <article
                key={product.id}
                className={`${colSpanClass} skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5 hover:-translate-y-0.5 transition-transform duration-200`}
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
                    <span className="skeuo-inset px-2.5 py-1 text-[10px] uppercase tracking-wider text-fg font-bold">
                      {product.category}
                    </span>
                    <span className="text-[11px] text-muted font-bold shrink-0">
                      {product.monogram}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-fg tracking-tight">
                      <Link to={`/products/${product.id}`} className="hover:underline underline-offset-4">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Unwrapped Tech Stack */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {product.technologyStack.map((tech, idx) => (
                      <React.Fragment key={tech.name}>
                        {idx > 0 && <span className="opacity-40">·</span>}
                        <span>{tech.name}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Exactly one button: View Product */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-2.5">
                  <span className="text-[11px] text-muted font-bold">
                    {product.myRole}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className="skeuo-btn shrink-0"
                  >
                    <span>View Product</span>
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
