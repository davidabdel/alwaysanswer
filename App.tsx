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

  // -----------------------------------------
  // 1. INITIAL VIEW BASED ON ?page= PARAM
  // -----------------------------------------
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

  // -----------------------------------------
  // 2. UPDATE URL ONLY WHEN INTERNAL VIEW CHANGES
  // -----------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const incoming = params.get('page');

    // Do NOT overwrite the URL on initial load
    if (incoming === view) return;

    const url = new URL(window.location.href);

    if (view === 'home') {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', view);
    }

    window.history.replaceState({}, '', url.toString());
  }, [view]);

  // -----------------------------------------
  // 3. SEND GA4 PAGE VIEW EVENT
  // -----------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gtag = (window as any).gtag;
    if (!gtag) return;

    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
    });
  }, [view]);

  // -----------------------------------------
  // 4. HANDLE NAVIGATION
  // -----------------------------------------
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

    // Scroll within home
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const target = section ? document.getElementById(section) : null;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = section ? document.getElementById(section) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // -----------------------------------------
  // 5. RENDER PAGE
  // -----------------------------------------
  return (
    <div className="min-h-screen font-sans text-neutral-900 selection:bg-primary/20 selection:text-primary-dark">
      <Header onNavigate={handleNavigate} />

      <main>
        {view === 'home' && (
          <>
            <Hero onStartQuiz={() => { setView('quiz'); window.scrollTo(0, 0); }} />
            <Features />
            <FounderStory />
            <CallToAction onStartQuiz={() => { setView('quiz'); window.scrollTo(0, 0); }} />
          </>
        )}

        {view === 'quiz' && <QuizPage />}
        {view === 'results' && <ResultsPage />}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfService />}
        {view === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
