import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />

      <a href="#main-content" className="sr-only focus:not-sr-only fixed left-4 top-4 z-50 bg-white text-black px-4 py-2 rounded">
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