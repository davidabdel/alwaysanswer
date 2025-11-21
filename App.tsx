import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FounderStory } from './components/FounderStory';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { QuizPage } from './components/QuizPage';
import { ResultsPage } from './components/ResultsPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ContactPage } from './components/ContactPage';

type ViewState = 'home' | 'quiz' | 'results' | 'privacy' | 'terms' | 'contact';

const App: React.FC = () => {
  // Set to 'home' for production
  const [view, setView] = useState<ViewState>('home');

  const handleNavigate = (section?: string) => {
    if (section === 'privacy') {
      setView('privacy');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'terms') {
      setView('terms');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'contact') {
      setView('contact');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'home') {
        setView('home');
        window.scrollTo(0, 0);
        return;
    }

    // Normal internal navigation handling (features/story)
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
        ) : view === 'quiz' ? (
          <QuizPage />
        ) : view === 'results' ? (
          <ResultsPage />
        ) : view === 'privacy' ? (
          <PrivacyPolicy />
        ) : view === 'terms' ? (
          <TermsOfService />
        ) : (
          <ContactPage />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;