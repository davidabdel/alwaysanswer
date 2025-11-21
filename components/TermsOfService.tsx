import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-surface-subtle min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
        <p className="text-neutral-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AlwaysAnswer website and services operated by AlwaysAnswer ("us", "we", or "our").
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on AlwaysAnswer's website for personal, non-commercial transitory viewing only.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">3. Disclaimer</h3>
          <p>
            The materials on AlwaysAnswer's website are provided on an 'as is' basis. AlwaysAnswer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">4. Limitations</h3>
          <p>
            In no event shall AlwaysAnswer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AlwaysAnswer's website.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mt-8">5. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </div>
    </section>
  );
};