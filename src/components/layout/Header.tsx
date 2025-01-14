// src/components/layout/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              A11y Store
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`h-16 flex items-center px-4 border-b-2 text-sm font-medium transition-colors ${isActive('/')
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`h-16 flex items-center px-4 border-b-2 text-sm font-medium transition-colors ${isActive('/products')
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'
                  }`}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className={`h-16 flex items-center px-4 border-b-2 text-sm font-medium transition-colors ${isActive('/cart')
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'
                  }`}
              >
                Cart
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Add functionality as needed */}
      {/* <div className="md:hidden">
        Mobile menu content
      </div> */}
    </header>
  );
};