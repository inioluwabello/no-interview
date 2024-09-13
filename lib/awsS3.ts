// lib/awsS3.ts

import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadResume = async (file: File) => {
  const fileKey = `${uuidv4()}_${file.name}`;
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileKey,
    Body: file,
    ContentType: file.type,
  };

  try {
    const { Location } = await s3.upload(params).promise();
    return Location; // Returns the URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file.');
  }
};
