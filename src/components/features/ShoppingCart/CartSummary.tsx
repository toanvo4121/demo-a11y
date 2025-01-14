import React from 'react';
import { Button } from '../../common/Button/Button';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  tax,
  shipping,
  total,
  onCheckout
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
          <span className="text-gray-900 dark:text-white font-medium">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Tax</span>
          <span className="text-gray-900 dark:text-white font-medium">
            ${tax.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-300">Shipping</span>
          <span className="text-gray-900 dark:text-white font-medium">
            ${shipping === 0 ? 'Free' : shipping.toFixed(2)}
          </span>
        </div>

        <div className="my-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Total
            </span>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={onCheckout}
          className="w-full justify-center py-3 text-base font-medium"
        >
          Proceed to Checkout
        </Button>

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Shipping and taxes calculated at checkout
        </p>
      </div>
    </div>
  );
};