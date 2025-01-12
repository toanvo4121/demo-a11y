import React from 'react';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  filters: {
    category: string;
    priceRange: string;
    sortBy: string;
  };
}

export const ProductList: React.FC<ProductListProps> = () => {
  // Mock data - in real app, this would come from an API
  const products = [
    {
      id: '1',
      name: 'Product 1',
      price: 99.99,
      description: 'A great product description',
      imageUrl: '/images/product1.jpg',
    },
    // TODO: Add more products with different descriptions and prices
    {
      id: '2',
      name: 'Product 2',
      price: 49.99,
      description: 'A great product description',
      imageUrl: '/images/product2.jpg',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 149.99,
      description: 'A great product description',
      imageUrl: '/images/product3.jpg',
    }
  ];

  return (
    <div
      className="product-grid"
      role="grid"
      aria-label="Products grid"
    >
      {products.map((product) => (
        <div key={product.id} role="gridcell">
          <ProductCard {...product} />
        </div>
      ))}

      {products.length === 0 && (
        <p role="alert">No products found matching your criteria.</p>
      )}
    </div>
  );
};