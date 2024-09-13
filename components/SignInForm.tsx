// components/SignInForm.tsx

import React from 'react';
import { signIn } from 'next-auth/react';

const SignInForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4">Sign Up or Sign In</h2>
      <button 
        onClick={() => signIn('google')}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mb-4"
      >
        Sign in with Google
      </button>
      <button 
        onClick={() => signIn('linkedin')}
        className="bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
      >
        Sign in with LinkedIn
      </button>
    </div>
  );
};

export default SignInForm;
