import React from 'react';
import { Navigation } from '../common/Navigation/Navigation';
import { useA11y } from '../../hooks/useA11y';
import { Button } from '../common/Button/Button';

export const Header: React.FC = () => {
  const { highContrast, toggleHighContrast } = useA11y();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'cart', label: 'Shopping Cart', href: '/cart' }
  ];

  return (
    <header role="banner" className="main-header">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <div className="header-content">
        <div className="logo-container">
          <a href="/" aria-label="Home">
            <img src="/logo.svg" alt="Company Logo" />
          </a>
        </div>

        <Navigation items={navItems} />

        <div className="header-actions">
          <Button
            onClick={toggleHighContrast}
            aria-pressed={highContrast}
            variant="secondary"
          >
            {highContrast ? 'Disable' : 'Enable'} High Contrast
          </Button>
        </div>
      </div>
    </header>
  );
};