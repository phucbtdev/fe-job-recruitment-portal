import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      //(candicate)
      { source: "/viec-lam",                     destination: "/jobsList"         },
      { source: "/viec-lam/:id",                 destination: "/jobsList/:id"     },
      { source: "/danh-sach-nha-tuyen-dung",     destination: "/employerList"     }, 
      { source: "/danh-sach-nha-tuyen-dung/:id", destination: "/employerList/:id" },
      { source: "/cam-nang-nghe-nghiep",         destination: "/careerAdvice"     },
      { source: "/viec-lam-da-luu",              destination: "/savedJobs"        },
      { source: "/viec-lam-da-ung-tuyen",        destination: "/appliedJobs"      },
      { source: "/danh-sach-mau-cv",             destination: "/cvList"           },
      { source: "/nang-cap-goi",                 destination: "/upgrade"          },
      { source: "/nang-cap-goi/checkout /:id",        destination: "/upgrade/checkout/:id"     },
      { source: "/nang-cap-goi/checkout/:id/success", destination: "/upgrade/checkout/success" },
      { source: "/forgot-password",                   destination: "/forgotPassword"           },
       
      //employer
      { source: "/tuyen-dung/dang-ky",            destination: "/employerAuthLayout/register"    },
      { source: "/tuyen-dung/dang-nhap",          destination: "/employerAuthLayout/login"       },
      { source: "/tuyen-dung/trang-chu",          destination: "/employerDefaultLayout/home" },
      { source: "/tuyen-dung",                    destination: "/employerDefaultLayout/home"     },
      { source: "/tuyen-dung/viec-da-dang-tuyen", destination: "/employer/postedJobs"            },
      
      //admin
      { source: "/admin/user-management",         destination: "/admin/userManagement"       },
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
