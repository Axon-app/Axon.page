import React from 'react';
import { Button } from '../components';
import { useTheme } from '../hooks';

export const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Axon.page</h1>
        <p>A modern React + TypeScript + Vite application</p>
        <Button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </Button>
      </header>

      <main className="main-content">
        <section className="features">
          <div className="feature-card">
            <h3>⚡ Fast Development</h3>
            <p>Built with Vite for lightning-fast development experience</p>
          </div>
          
          <div className="feature-card">
            <h3>🔷 TypeScript</h3>
            <p>Fully typed codebase for better development experience</p>
          </div>
          
          <div className="feature-card">
            <h3>⚛️ React</h3>
            <p>Modern React with hooks and functional components</p>
          </div>
        </section>
      </main>
    </div>
  );
};
