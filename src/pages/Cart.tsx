import React, { useState } from 'react';
import { CartItem } from '../components/features/ShoppingCart/CartItem';
import { CartSummary } from '../components/features/ShoppingCart/CartSummary';
import { useA11y } from '../hooks/useA11y';

export const Cart: React.FC = () => {
  const { announce } = useA11y();

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Product 1',
      price: 99.99,
      quantity: 1,
      imageUrl: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg',
    },
    // Add more items
  ]);

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 100 ? 0 : 10;
    return { subtotal, tax, shipping, total: subtotal + tax + shipping };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>
        </header>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Add some items to your cart to continue shopping
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onQuantityChange={(id, quantity) => {
                      setCartItems(items =>
                        items.map(item =>
                          item.id === id ? { ...item, quantity } : item
                        )
                      );
                    }}
                    onRemove={(id) => {
                      setCartItems(items => items.filter(item => item.id !== id));
                      announce('Item removed from cart');
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <CartSummary
                  {...calculateTotals()}
                  onCheckout={() => {
                    announce('Processing checkout...');
                    // Checkout logic
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};