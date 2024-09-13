// app/hr/page.tsx

import React, { useState } from 'react';

const HRForm: React.FC = () => {
  const [hrAdminName, setHRAdminName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Perform form submission logic (e.g., sending data to backend)
      console.log({ hrAdminName, companyName, annualRevenue });

      // Redirect to the Coming Soon page after successful submission
      window.location.href = '/coming-soon';
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">HR Admin Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">HR Admin Name</label>
          <input 
            type="text" 
            value={hrAdminName} 
            onChange={(e) => setHRAdminName(e.target.value)} 
            className="border rounded-lg py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Company Name</label>
          <input 
            type="text" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
            className="border rounded-lg py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Annual Revenue</label>
          <input 
            type="text" 
            value={annualRevenue} 
            onChange={(e) => setAnnualRevenue(e.target.value)} 
            className="border rounded-lg py-2 px-4 w-full"
          />
        </div>
        <button 
          type="submit" 
          className={`bg-blue-600 text-white py-2 px-4 rounded-lg w-full ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default HRForm;
