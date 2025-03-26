import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      //(candicate)
      { source: "/viec-lam",                     destination: "/candicateDefaultLayout/jobsList"         },
      { source: "/viec-lam/:id",                 destination: "/candicateDefaultLayout/jobsList/:id"     },
      { source: "/danh-sach-nha-tuyen-dung",     destination: "/candicateDefaultLayout/employerList"     }, 
      { source: "/danh-sach-nha-tuyen-dung/:id", destination: "/candicateDefaultLayout/employerList/:id" },
      { source: "/cam-nang-nghe-nghiep",         destination: "/candicateDefaultLayout/careerAdvice"     },
      { source: "/viec-lam-da-luu",              destination: "/candicateDefaultLayout/savedJobs"        },
      { source: "/viec-lam-da-ung-tuyen",        destination: "/candicateDefaultLayout/appliedJobs"      },
      { source: "/danh-sach-mau-cv",             destination: "/candicateDefaultLayout/cvList"           },
      { source: "/nang-cap-goi",                 destination: "/candicateDefaultLayout/upgrade"          },
      { source: "/nang-cap-goi/checkout /:id",        destination: "/candicateDefaultLayout/upgrade/checkout/:id"     },
      { source: "/nang-cap-goi/checkout/:id/success", destination: "/candicateDefaultLayout/upgrade/checkout/success" },
      { source: "/forgot-password",                   destination: "/candicateDefaultLayout/forgotPassword"           },
       
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
