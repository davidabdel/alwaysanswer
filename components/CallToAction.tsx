
import React from 'react';
import { Button } from './ui/Button';

interface CallToActionProps {
  onStartQuiz?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onStartQuiz }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/5 to-surface-highlight rounded-[3rem] p-10 md:p-16 text-center border border-primary/10 relative overflow-hidden">
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Ready to plug the leaks <br /> in your business?
            </h2>
            
            <div className="space-y-2">
              <p className="text-xl text-neutral-600">
                Takes 3 minutes • Completely Free • Immediate Recommendations
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] text-lg shadow-xl shadow-primary/20"
                onClick={onStartQuiz}
              >
                Start the Assessment
              </Button>
            </div>
            
            <p className="text-sm text-neutral-400 pt-4">
              Join 500+ business owners optimizing their call flow this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
