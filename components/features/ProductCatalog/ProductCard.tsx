import React from 'react';
import { Button } from '../../common/Button/Button';
import { useA11y } from '../../../hooks/useA11y';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl
}) => {
  const { announce } = useA11y();

  const handleAddToCart = () => {
    announce(`${name} added to cart`);
    // Add to cart logic
  };

  return (
    <article
      className="product-card"
      aria-labelledby={`product-name-${id}`}
    >
      <img
        src={imageUrl}
        alt={`Product ${name}`}
        className="product-image"
      />
      <div className="product-info">
        <h3 id={`product-name-${id}`}>{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price" aria-label={`Price: ${price} dollars`}>
          ${price}
        </p>
        <Button
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
};