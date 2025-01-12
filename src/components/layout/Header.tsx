import React from 'react';
import { Link } from 'react-router-dom';
import { useA11y } from '../../hooks/useA11y';

export const Header: React.FC = () => {
  const { highContrast, toggleHighContrast } = useA11y();

  return (
    <header className="fixed top-0 left-0 right-0 h-header-height bg-background border-b border-border z-40">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          A11y Store
        </Link>

        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          <Link
            to="/"
            className="text-text-light hover:text-text transition-colors min-h-[44px] flex items-center"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-text-light hover:text-text transition-colors min-h-[44px] flex items-center"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-text-light hover:text-text transition-colors min-h-[44px] flex items-center"
          >
            Cart
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleHighContrast}
            className="btn btn-secondary"
            aria-pressed={highContrast}
          >
            {highContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
        </div>
      </div>
    </header>
  );
};