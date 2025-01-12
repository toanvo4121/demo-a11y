import React from 'react';
import { CartItem } from '../components/features/ShoppingCart/CartItem';
import { CartSummary } from '../components/features/ShoppingCart/CartSummary';
import { useA11y } from '../hooks/useA11y';

export const Cart: React.FC = () => {
  const { announce } = useA11y();
  const [cartItems, setCartItems] = React.useState([
    // Mock data
    {
      id: '1',
      name: 'Product 1',
      price: 99.99,
      quantity: 1,
      imageUrl: '/images/product1.jpg'
    }
  ]);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    announce('Processing checkout...');
    // Checkout logic
  };

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
    <main id="main-content">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p role="alert">Your cart is empty</p>
      ) : (
        <div className="cart-layout">
          <section aria-label="Cart items">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </section>

          <aside>
            <CartSummary
              {...calculateTotals()}
              onCheckout={handleCheckout}
            />
          </aside>
        </div>
      )}
    </main>
  );
};