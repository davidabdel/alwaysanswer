
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FounderStory } from './components/FounderStory';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { QuizPage } from './components/QuizPage';

type ViewState = 'home' | 'quiz';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const handleNavigate = (section?: string) => {
    if (view !== 'home') {
      setView('home');
      // Wait for render then scroll
      setTimeout(() => {
        if (section) {
          const element = document.getElementById(section);
          element?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (section) {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-neutral-900 selection:bg-primary/20 selection:text-primary-dark">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero onStartQuiz={() => {
              setView('quiz');
              window.scrollTo(0, 0);
            }} />
            <Features />
            <FounderStory />
            <CallToAction onStartQuiz={() => {
              setView('quiz');
              window.scrollTo(0, 0);
            }} />
          </>
        ) : (
          <QuizPage />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
