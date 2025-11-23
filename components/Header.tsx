
import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onNavigate?: (section?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, section?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2.5 cursor-pointer select-none group"
          onClick={(e) => handleNavClick(e)}
        >
          <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-200">
            <PhoneCall size={22} strokeWidth={2.5} />
          </div>
          <div className="text-2xl font-bold tracking-tight flex items-baseline">
            <span className="text-neutral-900">Always</span>
            <span className="text-primary">Answer</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-neutral-500 hover:text-primary font-medium transition-colors cursor-pointer"
          >
            Features
          </a>
          <a 
            href="#story" 
            onClick={(e) => handleNavClick(e, 'story')}
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
