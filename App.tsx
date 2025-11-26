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

  // -------------------------------
  // 1. INITIAL VIEW FROM URL
  // -------------------------------
  const [view, setView] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const valid: ViewState[] = ['home', 'quiz', 'results', 'privacy', 'terms', 'contact'];

      if (page && valid.includes(page as ViewState)) {
        return page as ViewState;
      }
    }
    return 'home';
  });


  // -------------------------------
  // 2. UPDATE URL WHEN VIEW CHANGES
  // (Only when changed internally)
  // -------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentParams = new URLSearchParams(window.location.search);
    const incomingPage = currentParams.get('page');

    // I
