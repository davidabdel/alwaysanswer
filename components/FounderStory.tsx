import React from 'react';
import { Card } from './ui/Card';
import { Quote, TrendingDown, DollarSign } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h4 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Meet the Founder</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">David Abdel</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="prose prose-lg text-neutral-500 leading-relaxed">
              <p>
                I’ve spent the last two decades building businesses — from local service operations to tech products. One pattern kept showing up, and frankly, it shocked me.
              </p>
              <p className="font-medium text-neutral-800">
                Businesses are losing a massive amount of money simply because they’re too busy to answer the phone.
              </p>
              <p>
                When I dug into the data, it was worse than expected. 60% of people call a business directly after finding it online. If you don't pick up, they don't leave a voicemail—they call your competitor.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-neutral-700 my-8">
                "I didn't need a spreadsheet to tell me this was true. I'd seen it firsthand. Tradies losing jobs they deserved. Clinics losing bookings. All because they were busy serving customers."
              </blockquote>

              <p>
                That's why I built <strong>AlwaysAnswer</strong>. I love building tools that make business easier—tools that save time, reduce stress, and help good people grow without burning out.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
               <div className="bg-surface-highlight px-4 py-2 rounded-lg text-primary font-medium text-sm">Built for Service Businesses</div>
               <div className="bg-surface-highlight px-4 py-2 rounded-lg text-primary font-medium text-sm">Automated Growth</div>
               <div className="bg-surface-highlight px-4 py-2 rounded-lg text-primary font-medium text-sm">Zero Missed Calls</div>
            </div>
          </div>

          {/* Right Column: Visuals & Stats */}
          <div className="lg:col-span-5 space-y-8 mt-8 lg:mt-0">
            <div className="relative">
               {/* Photo Card */}
               <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-neutral-100 rotate-2 hover:rotate-0 transition-all duration-500">
                 <img 
                   src="/founder.jpg" 
                   alt="David Abdel" 
                   className="w-full h-auto rounded-[1.5rem] object-cover aspect-[4/5] bg-neutral-200"
                   onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Fallback placeholder if founder.jpg is not found
                      target.src = "https://storage.googleapis.com/msgsndr/YaalPPYLvgFNpGoyTfuq/media/691d0453c2cf86e28bf0aacc.png?auto=format&fit=crop&q=80&w=800";
                   }}
                 />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
                   <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-neutral-900">David Abdel</div>
                        <div className="text-xs text-neutral-500">Founder & CEO</div>
                      </div>
                      <Quote className="text-primary/20 fill-current w-8 h-8" />
                   </div>
                 </div>
               </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 !shadow-sm bg-surface-subtle border-none">
                <div className="flex items-center gap-2 text-red-500 mb-2">
                   <TrendingDown size={20} />
                   <span className="font-bold text-sm">The Problem</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900">85%</div>
                <div className="text-xs text-neutral-500 mt-1">of customers never call back if you miss them.</div>
              </Card>

              <Card className="p-5 !shadow-sm bg-surface-subtle border-none">
                 <div className="flex items-center gap-2 text-success mb-2">
                   <DollarSign size={20} />
                   <span className="font-bold text-sm">The Cost</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900">$120k+</div>
                <div className="text-xs text-neutral-500 mt-1">Average annual revenue lost by small businesses.</div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};