/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost"]
  },
  env: {
    NEXT_EMAIL_ADMIN: process.env.NEXT_EMAIL_ADMIN || "",
    API_URL: process.env.API_URL || ""
  }
};

module.exports = nextConfig;
