
import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    // Google Tag Manager - Page View Trigger
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-HRWZJ84WQ3');
    }
  }, []);

  return (
    <section className="pt-32 pb-24 px-6 bg-surface-subtle min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
        <p className="text-neutral-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6">
          <p>
            At AlwaysAnswer, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, take our diagnostic quiz, or request a demo. This may include your name, email address, phone number, and business details.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our website.</li>
            <li>To understand and analyze how you use our website.</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, updates, and marketing purposes.</li>
          </ul>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">3. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect the personal data we process against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">4. Third-Party Services</h3>
          <p>
            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us via our Contact page.
          </p>
        </div>
      </div>
    </section>
  );
};
