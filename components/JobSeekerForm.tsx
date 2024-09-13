// app/components/JobSeekerForm.tsx

'use client';

import React, { useState } from 'react';

const JobSeekerForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setResumeFile(e.target.files[0]);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resumeFile) {
            alert('Please upload your resume.');
            return;
        }

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('resumeFile', resumeFile);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                body: formData,
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
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
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
            <button type="submit" className="bg-blue-500 text-white rounded p-2">
                Submit
            </button>
        </form>
    );
};

export default JobSeekerForm;
