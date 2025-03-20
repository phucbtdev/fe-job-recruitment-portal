import Image from "next/image";
import React from "react";
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Find Your Dream Job Today
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Connect with top employers and discover opportunities that match
              your skills and ambitions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                Search Jobs
              </button>
              <button className="px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-blue-700">
                Upload Resume
              </button>
            </div>
          </div>
          <div className="hidden  relative lg:block">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="People in a meeting"
              fill
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Advertising Banner */}
      <div className="bg-yellow-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex-1">
              <p className="font-medium text-center sm:text-left">
                <span className="font-bold">Premium Employer:</span> Tech
                Solutions Inc. is hiring Senior Developers. 50+ positions
                available!
              </p>
            </div>
            <div className="mt-2 sm:mt-0">
              <button className="px-4 py-1 bg-white text-yellow-600 rounded-md text-sm font-medium hover:bg-yellow-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
