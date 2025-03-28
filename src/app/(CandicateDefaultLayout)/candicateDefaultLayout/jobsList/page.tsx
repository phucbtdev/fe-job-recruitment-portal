"use client";
import { useState } from "react";
import { SearchIcon, BuildingIcon, SlidersIcon } from "lucide-react";
import { JobCard } from "@/app/components/candicate/listJobs/JobCard";
export default function JobsList() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  return (
    <div>
      {/* Search Section */}
      <section className="bg-blue-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Find Your Perfect Job
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <BuildingIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Search Jobs
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
            >
              <SlidersIcon className="h-5 w-5" />
              Filters
            </button>
            <p className="text-gray-600">Showing 1,123 jobs</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most relevant</option>
              <option>Newest</option>
              <option>Highest paid</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`md:w-1/4 ${showFilters ? "block" : "hidden md:block"}`}
          >
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Job Type Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Job Type</h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Remote"].map(
                    (type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedJobTypes.includes(type)}
                          onChange={() => {
                            if (selectedJobTypes.includes(type)) {
                              setSelectedJobTypes(
                                selectedJobTypes.filter((t) => t !== type)
                              );
                            } else {
                              setSelectedJobTypes([...selectedJobTypes, type]);
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600">{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              {/* Experience Level Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Experience Level
                </h3>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior Level", "Director"].map(
                    (level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedExperience.includes(level)}
                          onChange={() => {
                            if (selectedExperience.includes(level)) {
                              setSelectedExperience(
                                selectedExperience.filter((l) => l !== level)
                              );
                            } else {
                              setSelectedExperience([
                                ...selectedExperience,
                                level,
                              ]);
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600">{level}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              {/* Salary Range Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Salary Range
                </h3>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$0</span>
                  <span>$200k+</span>
                </div>
              </div>
              {/* Location Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
                <div className="space-y-2">
                  {["Remote", "San Francisco", "New York", "London"].map(
                    (location) => (
                      <label key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location)}
                          onChange={() => {
                            if (selectedLocations.includes(location)) {
                              setSelectedLocations(
                                selectedLocations.filter((l) => l !== location)
                              );
                            } else {
                              setSelectedLocations([
                                ...selectedLocations,
                                location,
                              ]);
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600">{location}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <button className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-300">
                Clear All Filters
              </button>
            </div>
          </div>
          {/* Job Listings */}
          <div className="flex-1">
            <div className="space-y-4">
              {Array.from({
                length: 10,
              }).map((_, index) => (
                <JobCard
                  key={index}
                  id={index}
                  title={
                    index === 0
                      ? "Senior Frontend Developer"
                      : index === 1
                      ? "Product Manager"
                      : "UX Designer"
                  }
                  company={
                    index === 0
                      ? "TechCorp"
                      : index === 1
                      ? "InnovateCo"
                      : "DesignHub"
                  }
                  location={
                    index === 0
                      ? "San Francisco, CA"
                      : index === 1
                      ? "New York, NY"
                      : "Remote"
                  }
                  salary={
                    index === 0
                      ? "$120K - $150K"
                      : index === 1
                      ? "$110K - $140K"
                      : "$90K - $120K"
                  }
                  type="Full-time"
                  logo={`https://images.unsplash.com/photo-${
                    index + 1
                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                  tags={
                    index === 0
                      ? ["React", "TypeScript", "Tailwind"]
                      : index === 1
                      ? ["Product", "Agile", "B2B"]
                      : ["UI/UX", "Figma", "Design Systems"]
                  }
                  isNew={index < 3}
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span className="px-3 py-2 text-gray-600">...</span>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  12
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
