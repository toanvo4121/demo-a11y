import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="text-primary-600 dark:text-primary-400">
              A11y Store
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your accessible shopping destination. We make online shopping easy and enjoyable for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as='link'
              to="/products"
              variant="primary"
              className="text-lg px-8 py-3"
            >
              Shop Now
            </Button>
            <Button
              as='link'
              to="/about"
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="group bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img
                  src="/images.jpg"
                  alt="Electronics category"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Electronics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover our range of accessible electronic devices.
                </p>
                <Link
                  to="/products?category=electronics"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Browse Electronics →
                </Link>
              </div>
            </div>

            {/* Add more category cards similarly */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest products and accessibility features.
            </p>
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="px-6 py-3 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                We care about your privacy and never share your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                  {/* Add SVG path for accessibility icon */}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Accessible Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is designed to be accessible to everyone.
              </p>
            </div>

            {/* Add more features similarly */}
          </div>
        </div>
      </section>
    </div>
  );
};