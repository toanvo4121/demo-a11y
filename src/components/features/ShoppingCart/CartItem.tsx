// src/components/features/ShoppingCart/CartItem.tsx
import React from 'react';
import { useA11y } from '../../../hooks/useA11y';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  onQuantityChange,
  onRemove,
}) => {
  const { announce } = useA11y();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      onQuantityChange(id, newQuantity);
      announce(`Updated ${name} quantity to ${newQuantity}`);
    }
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Product Image */}
          <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Unit Price: ${price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => quantity > 1 && onQuantityChange(id, quantity - 1)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  disabled={quantity <= 1}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>

                <input
                  type="number"
                  id={`quantity-${id}`}
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-16 text-center px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400"
                />

                <button
                  type="button"
                  onClick={() => onQuantityChange(id, quantity + 1)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Total: ${(price * quantity).toFixed(2)}
              </p>
              <button
                onClick={() => onRemove(id)}
                className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};