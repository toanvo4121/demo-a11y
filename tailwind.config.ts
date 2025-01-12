// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
        border: 'var(--color-border)',
      },
      spacing: {
        'header-height': 'var(--header-height)',
        'footer-height': 'var(--footer-height)',
      },
    },
  },
  plugins: [],
}