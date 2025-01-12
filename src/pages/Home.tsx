// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <section className="py-12 md:py-24 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Welcome to A11y Store
          </h1>
          <p className="text-xl text-text-light mb-8">
            Your accessible shopping destination.
          </p>
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Cards */}
            <div className="bg-background-alt rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Electronics</h3>
              <p className="text-text-light mb-4">
                Discover our range of accessible electronic devices.
              </p>
              <Link to="/products" className="text-primary hover:underline">
                Browse Electronics
              </Link>
            </div>
            {/* Add more category cards */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8">Stay Updated</h2>
          <form className="max-w-md mx-auto">
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                required
                aria-required="true"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};