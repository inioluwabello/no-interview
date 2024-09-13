// app/api/submit-form/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { parseResume } from '@/lib/resumeParser';
import { uploadResume } from '@/lib/awsS3';

export async function POST(request: Request) {
  const { formData, resumeFile } = await request.json();
  const db = await connectToDatabase();

  try {
    // Handle form data
    const { fullName, resume } = formData;

    // Upload resume to S3
    const fileUrl = await uploadResume(resumeFile);

    // Parse resume
    const parsedData = await parseResume(resumeFile);

    // Save to database (example for job seekers)
    const collection = db.collection('jobSeekers');
    await collection.insertOne({
      fullName,
      resumeFileUrl: fileUrl,
      parsedData,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
