/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define your custom colors
        'primary': {
          DEFAULT: '#0066cc',
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fb',
          400: '#36aaf4',
          500: '#0c90e4',
          600: '#0072c2',
          700: '#005a9e',
          800: '#004d84',
          900: '#00396d',
        },
        'secondary': {
          DEFAULT: '#64748b',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}