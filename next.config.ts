import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      //(candicate)
      { source: "/",                             destination: "/candicateDefaultLayout/home"             },
      { source: "/trang-chu",                    destination: "/candicateDefaultLayout/home"             },
      { source: "/viec-lam",                     destination: "/candicateDefaultLayout/jobsList"         },
      { source: "/viec-lam/:id",                 destination: "/candicateDefaultLayout/jobsList/:id"     },
      { source: "/danh-sach-nha-tuyen-dung",     destination: "/candicateDefaultLayout/employerList"     }, 
      { source: "/danh-sach-nha-tuyen-dung/:id", destination: "/candicateDefaultLayout/employerList/:id" },
      { source: "/cam-nang-nghe-nghiep",         destination: "/candicateDefaultLayout/careerAdvice"     },
      { source: "/viec-lam-da-luu",              destination: "/candicateDefaultLayout/savedJobs"        },
      { source: "/viec-lam-da-ung-tuyen",        destination: "/candicateDefaultLayout/appliedJobs"      },
      { source: "/danh-sach-mau-cv",             destination: "/candicateDefaultLayout/cvList"           },
      { source: "/nang-cap-goi",                 destination: "/candicateDefaultLayout/upgrade"          },
      { source: "/nang-cap-goi/checkout/:id",         destination: "/candicateDefaultLayout/upgrade/checkout/:id"     },
      { source: "/nang-cap-goi/checkout/:id/success", destination: "/candicateDefaultLayout/upgrade/checkout/success" },
      { source: "/dang-nhap",                         destination: "/candicateAuthLayout/login" },
      { source: "/dang-ky",                           destination: "/candicateAuthLayout/register" },
      { source: "/quen-mat-khau",                     destination: "/candicateAuthLayout/forgotPassword" },
       
      //employer - default layout
      { source: "/tuyen-dung",                    destination: "/employerDefaultLayout/home"},
      { source: "/tuyen-dung/trang-chu",          destination: "/employerDefaultLayout/home"},
      //employer - auth layout
      { source: "/tuyen-dung/dang-ky",            destination: "/employerAuthLayout/register"},
      { source: "/tuyen-dung/dang-nhap",          destination: "/employerAuthLayout/login"},
      //employer - management layout
      { source: "/tuyen-dung/thong-ke",           destination: "/employerManagementLayout/dashboard"},
      { source: "/tuyen-dung/viec-da-dang-tuyen", destination: "/employerManagementLayout/postedJobs"},
      
      //admin
      { source: "/admin/login",                   destination: "/adminAuthLayout/login"},
      { source: "/admin/dashboard",               destination: "/adminManagementLayout/dashboard"},
      { source: "/admin/user-management",         destination: "/adminManagementLayout/userManagement"},
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
