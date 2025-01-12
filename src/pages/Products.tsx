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

  // Mock data - replace with actual data
  const products = [
    {
      id: '1',
      name: 'Product 1',
      price: 99.99,
      description: 'This is a product description',
      imageUrl: '/placeholder.jpg'
    },
    // Add more products...
    {
      id: '2',
      name: 'Product 2',
      price: 49.99,
      description: 'This is a product description',
      imageUrl: '/placeholder.jpg'
    },
    // Add more products...
    {
      id: '3',
      name: 'Product 3',
      price: 149.99,
      description: 'This is a product description',
      imageUrl: '/placeholder.jpg'
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <aside>
            <ProductFilters
              filters={filters}
              onChange={(newFilters) => {
                setFilters(newFilters);
                announce('Product list updated with new filters');
              }}
            />
          </aside>

          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                // onAddToCart={() => {
                //   // Add to cart logic
                // }}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};