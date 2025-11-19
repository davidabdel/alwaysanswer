import React from 'react';
import { Card } from './ui/Card';
import { PhoneIncoming, Target, Clock } from 'lucide-react';

const features = [
  {
    icon: <PhoneIncoming className="w-6 h-6 text-primary" />,
    title: "First Call Experience",
    description: "60% of customers call a competitor if you don't pick up. We ensure every caller gets a premium, branded experience instantly."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Lead Capture Rate",
    description: "Stop filtering leads through a leaky funnel. Capture contact info, service needs, and urgency level automatically."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "24/7 Operational Efficiency",
    description: "Your business shouldn't sleep when you do. Handle bookings, queries, and emergencies round the clock without hiring more staff."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-surface-subtle scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Never Miss a Call Again?
          </h2>
          <p className="text-lg text-neutral-500">
            Answer 15 simple questions so we can measure your current setup and show you exactly how to improve these three core metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};