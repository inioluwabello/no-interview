// app/coming-soon/page.tsx

import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-lg mb-4">
          Thank you for your submission. We are currently processing your information and will be in touch shortly.
        </p>
        <p className="text-gray-600">
          You can expect to hear from us within the next 180 days.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
