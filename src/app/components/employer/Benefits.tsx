import React from "react";
import {
  SearchIcon,
  UsersIcon,
  BarChartIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  BoxIcon,
} from "lucide-react";
export default function Benefits() {
  const benefits = [
    {
      icon: SearchIcon,
      title: "Smart Candidate Matching",
      description:
        "Our AI-powered system matches your job posts with the most qualified candidates automatically.",
    },
    {
      icon: UsersIcon,
      title: "Large Talent Pool",
      description:
        "Access our database of millions of verified professionals across various industries.",
    },
    {
      icon: BoxIcon,
      title: "Quick Hiring",
      description:
        "Streamlined process helps you find and hire the right candidates faster than ever.",
    },
    {
      icon: BarChartIcon,
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your hiring process and optimize your recruitment strategy.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Verified Candidates",
      description:
        "All candidates are pre-screened and their credentials are verified.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Our team of recruitment experts is here to help you 24/7.",
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose JobPortal?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to help you find the perfect candidates
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
