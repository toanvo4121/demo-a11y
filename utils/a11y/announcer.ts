export const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';

  document.body.appendChild(announcer);

  // Ensure DOM update
  setTimeout(() => {
    announcer.textContent = message;
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 3000);
  }, 100);
};