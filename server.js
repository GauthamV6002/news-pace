import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { pipeline } from "stream/promises";

import fs from "fs";

// AWS S3 Configuration
const REGION = "us-east-1"; // e.g., "us-west-2"
const BUCKET_NAME = "testbucket-d70a"; // Replace with your bucket name

// Initialize the S3 client
const s3Client = new S3Client({ region: REGION });

async function uploadTextToS3(key, textContent) {
  try {
    // Set up the parameters for the S3 upload
    const params = {
      Bucket: BUCKET_NAME,
      Key: key, // The name of the file in the S3 bucket
      Body: textContent, // The text content to upload
      ContentType: "text/plain", // Optional: MIME type
    };

    // Upload the text to S3
    const command = new PutObjectCommand(params);
    const response = await s3Client.send(command);

    console.log("Successfully uploaded to S3:", response);
  } catch (error) {
    console.error("Error uploading to S3:", error);
  }
}

// uploadTextToS3("example-file.txt", "Hello, this is some text content to store in S3!");

async function readTextFromS3(key, outputFilePath) {
  try {
    // Set up the parameters for the S3 get operation
    const params = {
      Bucket: BUCKET_NAME,
      Key: key, // The name of the file in the S3 bucket
    };

    // Fetch the object from S3
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);

    // Read the object's body (stream)
    const stream = response.Body;

    // Convert the stream to a string
    await pipeline(stream, fs.createWriteStream(outputFilePath));
    // console.log("File content:", text);
  } catch (error) {
    console.error("Error reading from S3:", error);
  }
}

// Utility function to convert a readable stream to a string
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

// Usage
const key = "LHC.jpg"; // S3 key (path inside the bucket)
readTextFromS3(key, 'LHC.jpg');
