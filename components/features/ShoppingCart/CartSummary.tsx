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
    <div
      className="cart-summary"
      aria-label="Order summary"
    >
      <h2>Order Summary</h2>

      <dl className="summary-list">
        <div className="summary-item">
          <dt>Subtotal:</dt>
          <dd aria-label={`Subtotal: ${subtotal} dollars`}>${subtotal}</dd>
        </div>

        <div className="summary-item">
          <dt>Tax:</dt>
          <dd aria-label={`Tax: ${tax} dollars`}>${tax}</dd>
        </div>

        <div className="summary-item">
          <dt>Shipping:</dt>
          <dd aria-label={`Shipping: ${shipping} dollars`}>${shipping}</dd>
        </div>

        <div className="summary-item total">
          <dt>Total:</dt>
          <dd aria-label={`Total: ${total} dollars`}>${total}</dd>
        </div>
      </dl>

      <Button
        onClick={onCheckout}
        variant="primary"
        aria-label="Proceed to checkout"
      >
        Checkout
      </Button>
    </div>
  );
};