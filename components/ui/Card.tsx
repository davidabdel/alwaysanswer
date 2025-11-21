import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      bg-white rounded-2xl border border-neutral-100 shadow-card p-6 md:p-8
      ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};