import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      { source: "/viec-lam",                  destination: "/jobsList"         },
      { source: "/viec-lam/:id",              destination: "/jobsList/:id"     },
      { source: "/nha-tuyen-dung",            destination: "/employer"         }, 
      { source: "/nha-tuyen-dung/:id",        destination: "/employer/:id"     },
      { source: "/cam-nang-nghe-nghiep",      destination: "/careerAdvice"     },
      { source: "/viec-lam-da-luu",           destination: "/savedJobs"        },
      { source: "/viec-lam-da-ung-tuyen",     destination: "/appliedJobs"      },
      { source: "/danh-sach-mau-cv",          destination: "/cvList"           },
      { source: "/nang-cap-goi",              destination: "/upgrade"          },
      { source: "/nang-cap-goi/checkout/:id", destination: "/upgrade/:id"      },
      { source: "/forgot-password",           destination: "/forgotPassword"   },
      
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
         pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
