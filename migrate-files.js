require("dotenv").config();
const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

// Load environment variables
const SPACE_NAME = process.env.DO_SPACE_NAME;
const SPACE_REGION = process.env.DO_SPACE_ENDPOINT.replace("https://", "").split(".")[0];
const SPACE_ACCESS_KEY = process.env.DO_SPACE_ACCESS_KEY;
const SPACE_SECRET_KEY = process.env.DO_SPACE_SECRET_KEY;

// Configure AWS S3 Client for DigitalOcean Spaces
const s3 = new AWS.S3({
  endpoint: process.env.DO_SPACE_ENDPOINT,
  accessKeyId: SPACE_ACCESS_KEY,
  secretAccessKey: SPACE_SECRET_KEY,
  region: SPACE_REGION,
});

// Define the local upload directory
const UPLOADS_DIR = path.join(__dirname, "public/uploads");

// Function to upload a file to DigitalOcean Spaces
async function uploadFile(filePath, fileName) {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: SPACE_NAME,
    Key: `uploads/${fileName}`, // Store files inside an "uploads" folder in DigitalOcean Spaces
    Body: fileContent,
    ACL: "public-read",
    ContentType: getContentType(fileName),
  };

  return s3.upload(params).promise();
}

// Function to determine file MIME type
function getContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const mimeTypes = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".pdf": "application/pdf",
    ".mp4": "video/mp4",
  };
  return mimeTypes[ext] || "application/octet-stream";
}

// Function to migrate files
async function migrateFiles() {
  try {
    const files = fs.readdirSync(UPLOADS_DIR);

    for (const file of files) {
      const filePath = path.join(UPLOADS_DIR, file);
      console.log(`Uploading: ${file}`);

      try {
        await uploadFile(filePath, file);
        console.log(`✅ Successfully uploaded: ${file}`);
      } catch (error) {
        console.error(`❌ Failed to upload ${file}:`, error);
      }
    }
  } catch (err) {
    console.error("❌ Error reading files:", err);
  }
}

// Run the migration
migrateFiles();

