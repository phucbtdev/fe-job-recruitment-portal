import React from "react";
import { PlusIcon } from "lucide-react";
export default function JobsHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track all your job postings in one place
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            Post New Job
          </button>
        </div>
      </div>
    </div>
  );
}
