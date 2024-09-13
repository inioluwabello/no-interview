// app/jobseeker/page.tsx
'use client'
import React, { useState } from 'react';
import { parseResume } from '@/lib/resumeParser';
import { uploadResume } from '@/lib/awsS3';

const JobSeekerForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) return;

    setIsLoading(true);

    try {
      // Upload the resume to S3
      const fileUrl = await uploadResume(resumeFile);

      // Parse the resume
      const parsedData = await parseResume(resumeFile);

      // Save to database (placeholder logic for backend call)
      console.log({
        fullName,
        resumeFile: fileUrl,
        parsedData, // Parsed resume details
      });

      // Redirect to the Coming Soon page
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
        <h2 className="text-2xl font-semibold mb-4">Job Seeker Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            className="border rounded-lg py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Resume (PDF/DOCX)</label>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)} 
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

export default JobSeekerForm;
