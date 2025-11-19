import React from 'react';
import { PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg">
          <PhoneCall size={20} className="text-primary" />
          AlwaysAnswer
        </div>
        
        <div className="flex gap-8 text-sm text-neutral-500">
           <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} AlwaysAnswer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};