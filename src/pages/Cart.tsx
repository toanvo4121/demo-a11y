import React, { useState } from 'react';
import { CartItem } from '../components/features/ShoppingCart/CartItem';
import { CartSummary } from '../components/features/ShoppingCart/CartSummary';
import { useA11y } from '../hooks/useA11y';

export const Cart: React.FC = () => {
  const { announce } = useA11y();
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Product 1',
      price: 99.99,
      quantity: 1,
      imageUrl: '/placeholder.jpg'
    }
    // Add more items...
  ]);

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10;
    return {
      subtotal,
      tax,
      shipping,
      total: subtotal + tax + shipping
    };
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-light">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
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
                  }}
                />
              ))}
            </div>

            <aside>
              <CartSummary
                {...calculateTotals()}
                onCheckout={() => {
                  announce('Processing checkout...');
                  // Checkout logic
                }}
              />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};