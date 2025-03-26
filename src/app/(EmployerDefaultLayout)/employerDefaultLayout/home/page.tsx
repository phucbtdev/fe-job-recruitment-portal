import React from "react";
import { TrophyIcon, BoxIcon } from "lucide-react";
import Benefits from "@/app/components/employer/Benefits";
import PricingPlans from "@/app/components/employer/PricingPlans";
import Testimonials from "@/app/components/employer/Testimonials";
import SalesForm from "@/app/components/employer/SalesForm";
export default function Employer() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Hire the Best Talent for Your Team
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access our pool of qualified candidates and streamline your
              recruitment process with our powerful hiring solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                Post a Job Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: BoxIcon,
                stat: "200K+",
                label: "Active Job Seekers",
              },
              {
                icon: BoxIcon,
                stat: "50K+",
                label: "Companies Trust Us",
              },
              {
                icon: BoxIcon,
                stat: "72hrs",
                label: "Average Time to Hire",
              },
              {
                icon: TrophyIcon,
                stat: "92%",
                label: "Client Satisfaction",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Benefits />
      <PricingPlans />
      <Testimonials />
      <SalesForm />
    </>
  );
}
