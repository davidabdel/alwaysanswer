import React from 'react';
import { PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
          <PhoneCall size={20} className="text-primary" />
          AlwaysAnswer
        </div>
        
        <div className="flex gap-8 text-sm text-neutral-500">
           <a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-primary transition-colors">Privacy Policy</a>
           <a href="#" onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-primary transition-colors">Terms of Service</a>
           <a href="#" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} AlwaysAnswer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};