import React, { useEffect } from 'react';
import { Button } from './ui/Button';
import { CheckCircle, Quote, Clock, ShieldCheck, MapPin, Play, Star } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  const bookingLink = "https://api.uconnect.com.au/widget/bookings/missed-call-text-back-6661d7e6-3159-4759-80e9-4b48da821897-c2f4fc94-a6b9-49e6-bc67-1d7ce966c0fe";

  const trades = [
    { name: "Plumber", image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=300&q=80" },
    { name: "Electrician", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=300&q=80" },
    { name: "Solar Installer", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80" },
    { name: "Florist", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=300&q=80" },
    { name: "Beautician", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80" },
    { name: "Hairdresser", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=300&q=80" },
    { name: "Lawn Maintenance", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=300&q=80" }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes("page=results")) {
      const fbq = (window as any).fbq;
      if (typeof fbq === 'function') {
        fbq('trackCustom', 'WatchedDemo');
      }
    }
  }, []);
 <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HRWZJ84WQ3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-HRWZJ84WQ3');
    </script>
  return (
    <div className="min-h-screen bg-surface-subtle font-sans">
      {/* Header/Hero Section */}
      <section className="pt-32 pb-12 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          BUSINESS OWNERS: <br className="hidden md:block" />
          <span className="text-primary">Missed calls are costing you sales</span>
        </h1>
        <p className="text-xl text-neutral-600 italic mb-8 max-w-2xl mx-auto">
          This AI answers every call & secures new business even when you're closed.
          <span className="block text-sm font-bold text-primary mt-3 not-italic uppercase tracking-widest">Watch the 3-minute demo below</span>
        </p>

        {/* Video Embed */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden mb-12 border-4 border-white">
           <iframe 
             className="absolute inset-0 w-full h-full" 
             src="https://www.youtube.com/embed/-fvaRbVmp4w?rel=0&modestbranding=1"
             title="AlwaysAnswer Demo" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowFullScreen
             referrerPolicy="strict-origin-when-cross-origin"
           ></iframe>
        </div>

        {/* Primary CTA with Social Proof */}
        <div className="flex flex-col items-center justify-center mb-16">
           <Button 
             size="lg" 
             href={bookingLink}
             className="bg-success hover:bg-success/90 text-white px-8 py-4 text-lg md:text-xl font-bold shadow-xl shadow-success/20 hover:shadow-success/30 transition-all transform hover:-translate-y-1 rounded-md"
           >
              Yes, Show Me How to Capture Every Lead
           </Button>

           {/* Social Proof */}
           <div className="flex items-center gap-5 mt-8 animate-fade-in-up">
              <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-surface-subtle object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Business Owner 1" />
                  <img className="w-12 h-12 rounded-full border-2 border-surface-subtle object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Business Owner 2" />
                  <img className="w-12 h-12 rounded-full border-2 border-surface-subtle object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Business Owner 3" />
              </div>
              <div className="flex flex-col items-start">
                  <span className="font-bold text-neutral-900 text-lg leading-none mb-1">Over 500+ Businesses Grown</span>
                  <div className="flex gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Features Strip (The Blue Box Replacement) */}
      <section className="bg-white py-16 border-y border-neutral-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-8 md:p-10 shadow-lg text-white">
               <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Answers calls instantly 24/7",
                    "Qualifies leads & books appointments",
                    "Recovers revenue you're losing",
                    "Less than $99/week"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-lg font-medium">
                       <div className="bg-white/20 p-1 rounded-md">
                         <CheckCircle className="text-white w-5 h-5 flex-shrink-0" />
                       </div>
                       {feature}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
         <h3 className="text-neutral-400 uppercase tracking-widest font-semibold text-sm mb-10">Already working in businesses just like yours</h3>
         
         {/* Thumbnails Row */}
         <div className="flex flex-wrap justify-center gap-4 mb-16">
            {trades.map((trade, i) => (
               <div key={i} className="w-28 h-20 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200 shadow-sm grayscale hover:grayscale-0 transition-all duration-300 relative group">
                  <img 
                    src={trade.image} 
                    className="w-full h-full object-cover" 
                    alt={trade.name}
                    title={trade.name}
                  />
               </div>
            ))}
         </div>

         {/* Testimonial */}
         <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-neutral-100 relative">
            <Quote className="absolute top-8 left-8 w-8 h-8 text-primary/20" />
            <p className="text-2xl font-medium text-neutral-800 leading-relaxed mb-6 relative z-10">
               "Our first weekend & our agent booked 22 jobs we'd probably have missed most of."
            </p>
            <div className="text-neutral-500 border-t border-neutral-100 pt-6">
               <span className="font-bold text-neutral-900 block text-lg">Apex Services</span>
               <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm font-medium">
                  <span className="flex items-center gap-1 text-success"><CheckCircle size={14} /> 24/7</span>
                  <span className="flex items-center gap-1 text-success"><CheckCircle size={14} /> Sounds human</span>
                  <span className="flex items-center gap-1 text-success"><CheckCircle size={14} /> No new system to learn</span>
               </div>
            </div>
         </div>
      </section>

      {/* Detailed Benefits List */}
      <section className="py-16 bg-white border-t border-neutral-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center mb-12">
                <Button size="lg" href={bookingLink} className="bg-success hover:bg-success/90 text-white w-full sm:w-auto font-bold rounded-md">Yes, Show Me How to Capture Every Lead</Button>
            </div>
            
            <div className="bg-surface-subtle rounded-2xl p-8 border border-neutral-200">
                <div className="space-y-4">
                {[
                    "Turns missed calls into booked jobs/appointments",
                    "Answers every call instantly — even when your team is busy",
                    "No extra staff, no extra wages just more revenue",
                    "Works 24/7 so you never lose another enquiry",
                    "Takes bookings, answers common questions, and filters time-wasters",
                    "Sounds like a real person, not a robot",
                    "Speaks politely, handles accents, and adapts to your business",
                    "Already used by businesses across the country to recover lost revenue",
                    "Starts paying for itself within days in most cases"
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 mt-2.5 flex-shrink-0"></div>
                        <span className="text-lg text-neutral-700 font-medium">{item}</span>
                    </div>
                ))}
                </div>
            </div>

            <div className="mt-12 text-center">
               <Button size="lg" href={bookingLink} className="bg-success hover:bg-success/90 text-white font-bold rounded-md px-8">Yes, Show Me How to Capture Every Lead</Button>
               <p className="mt-6 text-primary font-bold italic text-lg">
                  If you're missing 10 calls a day how much would this be worth to you?
               </p>
            </div>
         </div>
      </section>

      {/* Urgency Footer */}
      <section className="bg-primary-dark py-20 px-6 text-center text-white relative overflow-hidden">
         {/* Background pattern effect */}
         <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>

         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Demo slots are limited.</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 opacity-90">
               We only take on a handful of new partners each month.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Book your live demo now to see if it's a fit for your business
                </h3>

                <div className="flex flex-col gap-4 items-center text-lg font-medium mb-8">
                    <div className="flex items-center gap-2 text-white">
                        <CheckCircle className="text-success fill-white/10" size={20} /> 
                        <span>No contracts. Cancel anytime.</span>
                    </div>
                    <div className="w-12 h-px bg-white/20 my-1"></div>
                    <p className="text-blue-100">Works alongside your current system</p>
                    <p className="text-blue-100">Designed for service businesses by industry experts</p>
                    <p className="text-blue-100">Dedicated support team</p>
                </div>
            </div>

            <Button size="lg" href={bookingLink} className="bg-success hover:bg-success/90 text-white font-bold text-xl px-10 py-4 shadow-2xl border-none rounded-md">
               Yes, Show Me How to Capture Every Lead
            </Button>
         </div>
      </section>
    </div>
  );
};
