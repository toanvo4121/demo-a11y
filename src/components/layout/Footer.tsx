// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-alt border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-text-light">
              We are committed to making our store accessible to everyone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/accessibility"
                    className="text-text-light hover:text-text transition-colors"
                  >
                    Accessibility Statement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-text-light hover:text-text transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-text-light hover:text-text transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <address className="not-italic text-text-light">
              <p>Email: support@a11ystore.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-text-light">
          <p>&copy; {new Date().getFullYear()} A11y Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};