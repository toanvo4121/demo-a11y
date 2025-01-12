import React, { createContext, useCallback, useState } from 'react';

interface A11yContextType {
  announce: (message: string, priority?: 'polite' | 'assertive') => void;
  isReducedMotion: boolean;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

export const A11yContext = createContext<A11yContextType | null>(null);

export const A11yProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.setAttribute('class', 'sr-only');
    document.body.appendChild(announcer);

    // Ensure DOM update
    setTimeout(() => {
      announcer.textContent = message;
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }, 100);
  }, []);

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  return (
    <A11yContext.Provider
      value={{
        announce,
        isReducedMotion,
        highContrast,
        toggleHighContrast
      }}
    >
      {children}
    </A11yContext.Provider>
  );
};