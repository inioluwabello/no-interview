import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
            <p>Our AI determines the rating and market value of candidates based on their verified experience.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Profile Comparison</h3>
            <p>Easily compare resumes and profiles to find the perfect candidate for the role.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Bookmark Profiles</h3>
            <p>Save and view profiles of candidates you&apos;re interested in hiring.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
