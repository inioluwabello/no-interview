// app/api/parse-resume/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { parseResume } from '@/lib/resumeParser';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const parsedData = await parseResume(file);
    return NextResponse.json(parsedData);
  } catch (error) {
    console.error('Resume parsing failed:', error);
    return NextResponse.json({ error: 'Failed to parse resume' }, { status: 500 });
  }
}
