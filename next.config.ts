import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/viec-lam",
        destination: "/jobsList",
      },
      {
        source: "/viec-lam/:id",
        destination: "/jobsList/:id",
      },
      {
        source: "/nha-tuyen-dung",
        destination: "/employer",
      },
      {
        source: "/nha-tuyen-dung/:id",
        destination: "/employer/:id",
      },
      {
        source: "/cam-nang-nghe-nghiep",
        destination: "/careerAdvice",
      },
      {
        source: "/forgot-password",
        destination: "/forgotPassword",
      },
      
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
