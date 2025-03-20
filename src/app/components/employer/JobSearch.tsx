import React from "react";
import { SearchIcon, MapPinIcon, BriefcaseIcon } from "lucide-react";
export default function JobSearch() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Your Perfect Job
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPinIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <select className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All job types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div className="flex-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium">
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-500">Popular searches:</span>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Remote
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Software Engineer
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Marketing
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Data Analyst
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Project Manager
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
