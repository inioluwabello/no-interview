import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="https://placehold.co/600x400" alt="Step 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">1. Upload Resume</h3>
            <p>Candidates upload their resume and complete skills challenges to verify their expertise.</p>
          </div>
          <div>
            <img src="https://placehold.co/600x400" alt="Step 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">2. HR Verification</h3>
            <p>HRs and colleagues verify job details to ensure accurate work experience is listed.</p>
          </div>
          <div>
            <img src="https://placehold.co/600x400" alt="Step 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">3. Hire with Confidence</h3>
            <p>Hire top talent based on verified skills and job history without needing an interview.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
