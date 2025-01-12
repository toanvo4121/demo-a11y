import React from 'react';
import { Button } from '../../common/Button/Button';
import { TextField } from '../../common/Form/TextField/TextField';
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
  onRemove
}) => {
  const { announce } = useA11y();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      onQuantityChange(id, newQuantity);
      announce(`Updated ${name} quantity to ${newQuantity}`);
    }
  };

  const handleRemove = () => {
    onRemove(id);
    announce(`${name} removed from cart`);
  };

  return (
    <div className="cart-item" aria-label={`Cart item: ${name}`}>
      <img src={imageUrl} alt={name} className="cart-item-image" />

      <div className="cart-item-details">
        <h3>{name}</h3>
        <p className="cart-item-price" aria-label={`Price: ${price} dollars`}>
          ${price}
        </p>

        <TextField
          type="number"
          label="Quantity"
          value={quantity.toString()}
          onChange={handleQuantityChange}
          min="0"
          aria-label={`Quantity of ${name}`}
        />

        <Button
          onClick={handleRemove}
          variant="secondary"
          aria-label={`Remove ${name} from cart`}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};