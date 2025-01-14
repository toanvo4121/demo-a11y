import React, { useState } from 'react';
import { ProductCard } from '../components/features/ProductCatalog/ProductCard';
import { ProductFilters } from '../components/features/ProductCatalog/ProductFilters';
import { useA11y } from '../hooks/useA11y';

export const Products: React.FC = () => {
  const { announce } = useA11y();
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sortBy: 'name'
  });

  // Mock products data
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is a product description',
      price: 99.99,
      imageUrl: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg',
    },
    // Add more products here
    {
      id: '2',
      name: 'Product 2',
      description: 'This is a product description',
      price: 49.99,
      imageUrl: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'This is a product description',
      price: 149.99,
      imageUrl: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Products
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Browse our collection of amazing products
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <ProductFilters
                filters={filters}
                onChange={(newFilters) => {
                  setFilters(newFilters);
                  announce('Product list updated');
                }}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => {
                    announce(`${product.name} added to cart`);
                  }}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};