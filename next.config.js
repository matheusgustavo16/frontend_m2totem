/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost"]
  },
  env: {
    NEXT_EMAIL_ADMIN: process.env.NEXT_EMAIL_ADMIN || ""
  }
};

module.exports = nextConfig;
