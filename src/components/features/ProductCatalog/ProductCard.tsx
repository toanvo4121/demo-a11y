import React from 'react';
import { Button } from '../../common/Button/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  // id,
  name,
  price,
  description,
  imageUrl,
  onAddToCart
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </span>
          <Button
            onClick={onAddToCart}
            variant="primary"
            className="text-sm"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};