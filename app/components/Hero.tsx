import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Hire With Confidence</h1>
        <p className="text-xl mb-8">
          The platform where companies hire without interviews and job seekers land jobs based on their verified skills.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
