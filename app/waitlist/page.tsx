// app/waitlist/page.tsx

import React from 'react';
import SignInForm from '../../components/SignInForm';

const WaitlistPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Join the Waitlist</h1>
      <SignInForm />
    </div>
  );
};

export default WaitlistPage;
