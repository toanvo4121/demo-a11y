import React from 'react';
import { ProductList } from '../components/features/ProductCatalog/ProductList';
import { ProductFilters } from '../components/features/ProductCatalog/ProductFilters';
import { useA11y } from '../hooks/useA11y';

export const Products: React.FC = () => {
  const { announce } = useA11y();
  const [filters, setFilters] = React.useState({
    category: '',
    priceRange: '',
    sortBy: 'name',
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    announce('Product list updated with new filters');
  };

  return (
    <main id="main-content">
      <h1>Our Products</h1>

      {/* Skip link target */}
      <a href="#product-list" className="sr-only focus:not-sr-only">
        Skip to product list
      </a>

      <div className="products-layout">
        <aside>
          <ProductFilters
            filters={filters}
            onChange={handleFilterChange}
          />
        </aside>

        <section id="product-list" aria-label="Product list">
          <ProductList filters={filters} />
        </section>
      </div>
    </main>
  );
};