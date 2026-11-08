import React from 'react';
import { Link } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import SEOHead from '../components/SEOHead';

const ProductsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Products & Software Platforms"
        description="Digital products and software platforms co-built, engineered, and designed by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Products & Platforms
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Software systems I have co-built, engineered, or designed.
          </p>
        </div>
      </div>

      <ProductsSection showViewAll={false} />
    </>
  );
};

export default ProductsPage;
