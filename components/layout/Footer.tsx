import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="main-footer">
      <div className="footer-content">
        <nav aria-label="Footer navigation">
          <h2 className="sr-only">Footer Links</h2>
          <ul className="footer-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility Statement</a>
            </li>
          </ul>
        </nav>

        <div className="social-links" aria-label="Social media links">
          <a href="https://twitter.com" aria-label="Follow us on Twitter">
            <span className="sr-only">Twitter</span>
            {/* <TwitterIcon aria-hidden="true" /> */}
          </a>
          {/* Add more social links */}
        </div>
      </div>
    </footer>
  );
};