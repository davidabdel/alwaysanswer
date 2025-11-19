import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-primary text-white p-2 rounded-lg">
            <PhoneCall size={20} />
          </div>
          AlwaysAnswer
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="text-neutral-500 hover:text-primary font-medium transition-colors cursor-pointer"
          >
            Features
          </a>
          <a 
            href="#story" 
            onClick={(e) => scrollToSection(e, 'story')}
            className="text-neutral-500 hover:text-primary font-medium transition-colors cursor-pointer"
          >
            Our Story
          </a>
          <Button variant="secondary" size="sm" href="https://app.uconnect.com.au">Log in</Button>
        </nav>
      </div>
    </header>
  );
};