
import React, { useState, useEffect } from 'react';
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
  // Initialize state based on URL parameter '?page='
  const [view, setView] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const validViews: ViewState[] = ['home', 'quiz', 'results', 'privacy', 'terms', 'contact'];
      if (page && validViews.includes(page as ViewState)) {
        return page as ViewState;
      }
    }
    return 'home';
  });

  // Google Tag Manager - Page View Trigger
  // Only update the URL when the view is changed by the user,
// NOT on initial load when the URL defines the view.
useEffect(() => {
  if (typeof window === 'undefined') return;

  const currentParams = new URLSearchParams(window.location.search);
  const incomingPage = currentParams.get('page');

  // If the incoming URL ALREADY defined the view, do NOT overwrite it
  if (incomingPage === view) {
    return;
  }

  // Now update URL only if view changed internally
  const url = new URL(window.location.href);

  if (view === 'home') {
    url.searchParams.delete('page');
  } else {
    url.searchParams.set('page', view);
  }

  window.history.replaceState({}, '', url);
}, [view]);

  // Optional: Update URL when view changes without reloading
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (view === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', view);
      }
      window.history.pushState({}, '', url);
    }
  }, [view]);

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
