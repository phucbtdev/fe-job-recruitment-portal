"use client";
import { useState } from "react";
import { SearchIcon, SlidersIcon, MapPinIcon } from "lucide-react";
import EmpployerCard from "@/app/components/employer/EmployerCard";

export default function EmployerList() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Media",
    "Consulting",
  ];
  const companySizes = [
    "1-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];
  const locations = [
    "San Francisco",
    "New York",
    "London",
    "Remote",
    "Berlin",
    "Singapore",
  ];

  return (
    <div>
      {/* Search Section */}
      <section className="bg-blue-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Discover Great Places to Work
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore top companies hiring now and find your dream workplace
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Company name or keyword"
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
                <MapPinIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Search Companies
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter and Sort Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
            >
              <SlidersIcon className="h-5 w-5" />
              Filters
            </button>
            <p className="text-gray-600">Showing 235 companies</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most relevant</option>
              <option>Company size</option>
              <option>Alphabetical</option>
              <option>Most jobs</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`md:w-1/4 ${showFilters ? "block" : "hidden md:block"}`}
          >
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Industry Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Industry</h3>
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <label key={industry} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedIndustries.includes(industry)}
                        onChange={() => {
                          if (selectedIndustries.includes(industry)) {
                            setSelectedIndustries(
                              selectedIndustries.filter((i) => i !== industry)
                            );
                          } else {
                            setSelectedIndustries([
                              ...selectedIndustries,
                              industry,
                            ]);
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Company Size Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Company Size
                </h3>
                <div className="space-y-2">
                  {companySizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => {
                          if (selectedSizes.includes(size)) {
                            setSelectedSizes(
                              selectedSizes.filter((s) => s !== size)
                            );
                          } else {
                            setSelectedSizes([...selectedSizes, size]);
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-600">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Location Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
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
                  ))}
                </div>
              </div>
              <button className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-300">
                Clear All Filters
              </button>
            </div>
          </div>
          {/* Company Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmpployerCard
                idCompany={1}
                name="TechCorp"
                logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                industry="Technology"
                location="San Francisco, CA"
                openings={24}
              />
              <EmpployerCard
                idCompany={2}
                name="HealthPlus"
                logo="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                industry="Healthcare"
                location="Boston, MA"
                openings={18}
              />
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
