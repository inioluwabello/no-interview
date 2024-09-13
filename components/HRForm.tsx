// app/components/HRForm.tsx

'use client';

import React, { useState } from 'react';

const HRForm: React.FC = () => {
  const [hrAdminName, setHrAdminName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [annualRevenue, setAnnualRevenue] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { hrAdminName, companyName, annualRevenue };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      const result = await response.json();
      if (result.success) {
        window.location.href = '/coming-soon';
      } else {
        console.error('Submission failed:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={hrAdminName}
        onChange={(e) => setHrAdminName(e.target.value)}
        placeholder="HR Admin Name"
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="number"
        value={annualRevenue}
        onChange={(e) => setAnnualRevenue(e.target.value)}
        placeholder="Annual Revenue"
        className="border rounded p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Submit
      </button>
    </form>
  );
};

export default HRForm;
