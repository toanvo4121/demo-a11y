// src/App.tsx (updated with classes)
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useA11y } from './hooks/useA11y';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

const App: React.FC = () => {
  const location = useLocation();
  const { announce } = useA11y();

  useEffect(() => {
    const pageTitle = document.title;
    announce(`Navigated to ${pageTitle}`);
  }, [location, announce]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main
        id="main-content"
        className="flex-grow container mx-auto px-4 pt-header-height"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <div className="py-8" role="alert">
                <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;