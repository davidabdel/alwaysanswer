
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Google Tag Manager - Page View Trigger
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-HRWZJ84WQ3');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/YaalPPYLvgFNpGoyTfuq/webhook-trigger/491bc184-e6a6-4dc6-a2fb-925a8fcc726d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="pt-32 pb-24 px-6 bg-surface-subtle min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-neutral-500">We'd love to hear from you. Our team is always here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Email</p>
                  <a href="mailto:support@alwaysanswer.com.au" className="text-lg font-semibold hover:underline">support@alwaysanswer.com.au</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Phone</p>
                  <a href="tel:0468072223" className="text-lg font-semibold hover:underline">0468 072 223</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Office</p>
                  <p className="text-lg font-semibold">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-card border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h3>
            
            {status === 'success' ? (
              <div className="bg-success/10 text-success p-6 rounded-xl flex flex-col items-center text-center animate-fade-in-up">
                <CheckCircle size={48} className="mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="mt-6" 
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
