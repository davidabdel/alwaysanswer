import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FounderStory } from './components/FounderStory';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-neutral-900 selection:bg-primary/20 selection:text-primary-dark">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <FounderStory />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;