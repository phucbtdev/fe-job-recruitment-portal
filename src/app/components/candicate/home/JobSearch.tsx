"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  SearchIcon,
  MapPinIcon,
  BriefcaseIcon,
  SlidersIcon,
  XIcon,
  ChevronDownIcon,
  SearchIcon as SearchIconMini,
} from "lucide-react";
const locations = [
  {
    id: "ny",
    name: "New York",
    region: "Northeast",
  },
  {
    id: "ca",
    name: "California",
    region: "West",
  },
  {
    id: "tx",
    name: "Texas",
    region: "South",
  },
  {
    id: "fl",
    name: "Florida",
    region: "South",
  },
  {
    id: "il",
    name: "Illinois",
    region: "Midwest",
  },
  {
    id: "pa",
    name: "Pennsylvania",
    region: "Northeast",
  },
  {
    id: "oh",
    name: "Ohio",
    region: "Midwest",
  },
  {
    id: "ga",
    name: "Georgia",
    region: "South",
  },
  {
    id: "nc",
    name: "North Carolina",
    region: "South",
  },
  {
    id: "mi",
    name: "Michigan",
    region: "Midwest",
  },
  {
    id: "nj",
    name: "New Jersey",
    region: "Northeast",
  },
  {
    id: "va",
    name: "Virginia",
    region: "South",
  },
  {
    id: "wa",
    name: "Washington",
    region: "West",
  },
  {
    id: "az",
    name: "Arizona",
    region: "West",
  },
  {
    id: "ma",
    name: "Massachusetts",
    region: "Northeast",
  },
].sort((a, b) => a.name.localeCompare(b.name));
const regions = ["Northeast", "South", "Midwest", "West"];
const JobSearch = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [salaryRange, setSalaryRange] = useState<string>("0");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [locationSearch, setLocationSearch] = useState("");
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const locationInputRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationDropdownRef.current &&
        locationInputRef.current &&
        !locationDropdownRef.current.contains(event.target as Node) &&
        !locationInputRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Temporary",
    "Internship",
  ];
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Director",
    "Executive",
  ];
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
  ];
  const toggleJobType = (type: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };
  const toggleLocation = (locationId: string) => {
    setSelectedLocations((prev) =>
      prev.includes(locationId)
        ? prev.filter((id) => id !== locationId)
        : [...prev, locationId]
    );
  };
  const getSelectedLocationsText = () => {
    if (selectedLocations.length === 0) return "";
    if (selectedLocations.length === 1) {
      return locations.find((loc) => loc.id === selectedLocations[0])?.name;
    }
    return `${selectedLocations.length} locations selected`;
  };
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(locationSearch.toLowerCase())
  );
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 -mt-24 relative z-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Find Your Perfect Job
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-4 relative" ref={locationInputRef}>
              <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <div
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors flex items-center"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <span
                  className={`block truncate ${
                    selectedLocations.length ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {getSelectedLocationsText() || "Location"}
                </span>
                <ChevronDownIcon className="h-4 w-4 ml-auto text-gray-400" />
              </div>
              {showLocationDropdown && (
                <div
                  ref={locationDropdownRef}
                  className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <div className="p-3 border-b border-gray-200">
                    <div className="relative">
                      <SearchIconMini className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search locations..."
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {regions.map((region) => {
                      const regionLocations = filteredLocations.filter(
                        (loc) => loc.region === region
                      );
                      if (regionLocations.length === 0) return null;
                      return (
                        <div key={region} className="px-3 py-2">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            {region}
                          </h3>
                          <div className="space-y-1">
                            {regionLocations.map((location) => (
                              <label
                                key={location.id}
                                className="flex items-center px-2 py-1.5 hover:bg-gray-50 rounded-md cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  checked={selectedLocations.includes(
                                    location.id
                                  )}
                                  onChange={() => toggleLocation(location.id)}
                                />
                                <span className="ml-3 text-sm text-gray-700">
                                  {location.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    {filteredLocations.length === 0 && (
                      <div className="px-3 py-4 text-sm text-gray-500 text-center">
                        No locations found
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {selectedLocations.length} selected
                      </span>
                      <div className="space-x-2">
                        <button
                          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                          onClick={() => setSelectedLocations([])}
                        >
                          Clear all
                        </button>
                        <button
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                          onClick={() => setShowLocationDropdown(false)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                <SearchIcon className="h-5 w-5 mr-2" />
                Search Jobs
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2 md:mb-0">
              <button className="flex items-center hover:text-blue-600">
                <BriefcaseIcon className="h-4 w-4 mr-1" />
                <span>Remote Jobs</span>
              </button>
              <button className="flex items-center hover:text-blue-600">
                <BriefcaseIcon className="h-4 w-4 mr-1" />
                <span>Full Time</span>
              </button>
              <button className="flex items-center hover:text-blue-600">
                <BriefcaseIcon className="h-4 w-4 mr-1" />
                <span>Part Time</span>
              </button>
            </div>
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              {showAdvancedFilters ? (
                <XIcon className="h-4 w-4 mr-1" />
              ) : (
                <SlidersIcon className="h-4 w-4 mr-1" />
              )}
              <span>
                {showAdvancedFilters ? "Close Filters" : "Advanced Filters"}
              </span>
            </button>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showAdvancedFilters ? "max-h-[800px] mt-6" : "max-h-0"
            }`}
          >
            <div className="border-t border-gray-200 pt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Salary Range
                </h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 min-w-[100px]">
                    Up to ${parseInt(salaryRange).toLocaleString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Experience Level
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {experienceLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setSelectedExperience(
                          level === selectedExperience ? "" : level
                        )
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedExperience === level
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      } border transition-colors`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Job Type
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleJobType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedJobTypes.includes(type)
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      } border transition-colors`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Industry
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => toggleIndustry(industry)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedIndustries.includes(industry)
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      } border transition-colors`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Date Posted
                </h3>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg">
                  <option>Any time</option>
                  <option>Past 24 hours</option>
                  <option>Past week</option>
                  <option>Past month</option>
                  <option>Past 3 months</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedJobTypes([]);
                    setSelectedExperience("");
                    setSalaryRange("0");
                    setSelectedIndustries([]);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  Clear all
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobSearch;
