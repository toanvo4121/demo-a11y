import React from 'react';
import { useKeyboard } from '../../../hooks/useKeyboard';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [expanded, setExpanded] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  useKeyboard([
    {
      key: 'Escape',
      callback: () => setExpanded(false),
    },
  ]);

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
    >
      <button
        aria-expanded={expanded}
        aria-controls="nav-menu"
        onClick={() => setExpanded(!expanded)}
        className="nav-toggle"
      >
        <span className="sr-only">Toggle navigation</span>
        <span aria-hidden="true">☰</span>
      </button>

      <ul
        id="nav-menu"
        className={`nav-menu ${expanded ? 'expanded' : ''}`}
        role="menubar"
      >
        {items.map((item) => (
          <li key={item.id} role="none">
            <a
              href={item.href}
              role="menuitem"
              className="nav-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};