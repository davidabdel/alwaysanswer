
import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white via-surface-subtle to-white"></div>
      <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-success/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Don't let another lead slip away
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
              Frustrated About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Missed Calls?
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-neutral-800 leading-tight">
              Even Though You Call Customers Back Right Away?
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-lg pt-2">
            85% of customers never call back if you miss them. Take our 3-minute diagnostic to find out exactly where you're losing revenue and how to fix it instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" icon onClick={onStartQuiz}>Start the Assessment</Button>
          </div>

          <div className="pt-6 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-success w-5 h-5" />
              <span>Data Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-success w-5 h-5" />
              <span>Free Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="text-success w-5 h-5" />
              <span>Instant Results</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10">
             {/* Abstract UI composition representing missed calls vs captured leads */}
             <div className="bg-white p-6 rounded-3xl shadow-2xl border border-neutral-100 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                   <div>
                      <div className="text-sm text-neutral-400 font-medium">Today's Performance</div>
                      <div className="text-3xl font-bold text-neutral-800">100% Answered</div>
                   </div>
                   <div className="bg-success/10 p-2 rounded-full text-success">
                      <ArrowUpRight size={24} />
                   </div>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                            <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary font-bold">
                                {["JD", "AS", "MK"][i]}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-neutral-800">New Lead Captured</div>
                                <div className="text-xs text-neutral-400">Just now • Website Inquiry</div>
                            </div>
                            <div className="text-success font-medium text-sm">Active</div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Potential Revenue Saved</span>
                    <span className="font-bold text-primary">+$12,450</span>
                </div>
             </div>
             
             {/* Floating decorative elements */}
             <div className="absolute -right-12 top-10 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="font-medium text-neutral-700">Operational Efficiency Up</span>
                </div>
             </div>
          </div>
          
          {/* Decorative blob behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-primary-light/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};
