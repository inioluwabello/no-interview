'use client';

import React, { useState } from 'react';
import HRForm from '@/components/HRForm';
import JobSeekerForm from '@/components/JobSeekerForm';

const GetStarted: React.FC = () => {
  const [role, setRole] = useState<'hr' | 'jobSeeker' | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-black">Welcome to No Interview</h1>
      <div className="space-x-4">
        <button onClick={() => setRole('hr')} className="bg-blue-500 text-white rounded p-2">
          HR Sign Up
        </button>
        <button onClick={() => setRole('jobSeeker')} className="bg-green-500 text-white rounded p-2">
          Job Seeker Sign Up
        </button>
      </div>
      <div className="mt-8 w-full max-w-md">
        {role === 'hr' && <HRForm />}
        {role === 'jobSeeker' && <JobSeekerForm />}
      </div>
    </div>
  );
};

export default GetStarted;
