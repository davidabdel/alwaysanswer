
import React, { useEffect } from 'react';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const QuizPage: React.FC = () => {
  useEffect(() => {
    // Dynamically load the resize script for the iframe
    const script = document.createElement('script');
    script.src = "https://api.uconnect.com.au/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 min-h-screen bg-surface-subtle overflow-hidden">
      {/* Background Atmosphere (Consistent with Hero) */}
      <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-success/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Premium Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-primary text-xs font-bold tracking-wide uppercase border border-primary/10">
             <Sparkles size={12} />
             <span>Diagnostic Tool</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Let's Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Hidden Revenue</span>
          </h1>
          
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
             We'll analyze your current call handling setup and show you exactly where leads are slipping through the cracks.
          </p>

          {/* Trust/Info Badges */}
          <div className="flex items-center justify-center gap-6 text-sm text-neutral-400 pt-2">
              <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-neutral-200/50">
                  <Clock size={14} className="text-primary" /> <span>3 Minutes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-neutral-200/50">
                  <ShieldCheck size={14} className="text-success" /> <span>100% Confidential</span>
              </div>
          </div>
        </div>

        {/* Clean Form Container - Removed the "box in a box" padding/borders */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
          <div className="w-full relative min-h-[600px]">
            <iframe 
              src="https://api.uconnect.com.au/widget/quiz/cZ8oSvbb9ccEdd8mJNzF" 
              style={{ border: 'none', width: '100%', minHeight: '600px' }} 
              scrolling="no" 
              id="cZ8oSvbb9ccEdd8mJNzF" 
              title="quiz"
            ></iframe>
          </div>
        </div>

        {/* Footer reassurance */}
        <div className="text-center mt-8 text-neutral-400 text-sm">
          Trusted by 500+ service businesses to improve efficiency.
        </div>
      </div>
    </section>
  );
};
