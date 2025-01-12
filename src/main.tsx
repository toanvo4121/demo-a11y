import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { A11yProvider } from './context/A11yContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <A11yProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </A11yProvider>
    </BrowserRouter>
  </React.StrictMode>
);