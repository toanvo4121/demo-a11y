import React from 'react';
import { Button } from '../components/common/Button/Button';

export const Home: React.FC = () => {
  return (
    <main id="main-content">
      <h1>Welcome to Our Store</h1>

      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured Products</h2>
        {/* Featured products content */}
      </section>

      <section aria-labelledby="categories-heading">
        <h2 id="categories-heading">Shop by Category</h2>
        <div className="category-grid" role="grid">
          {/* Category cards */}
        </div>
      </section>

      <section aria-labelledby="newsletter-heading">
        <h2 id="newsletter-heading">Stay Updated</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Newsletter signup logic
          }}
          className="newsletter-form"
        >
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              required
              aria-required="true"
              aria-describedby="email-help"
            />
            <p id="email-help" className="help-text">
              We'll never share your email with anyone else.
            </p>
          </div>
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </main>
  );
};