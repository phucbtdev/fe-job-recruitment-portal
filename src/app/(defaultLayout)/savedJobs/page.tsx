"use client";
import { useState } from "react";
import { SearchIcon, BookmarkIcon, BriefcaseIcon } from "lucide-react";
import SavedJobCard from "@/app/components/SavedJobCard";
import PaginationBar from "@/app/components/PaginationBar";
// Mock data for saved jobs
const mockSavedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "2023-05-15",
    savedDate: "2023-05-16",
    status: "Active",
    salary: "$120,000 - $150,000",
    description: "We are looking for an experienced frontend developer...",
    category: "Engineering",
    companyLogo: "https://logo.clearbit.com/techcorp.com",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Full-time",
    postedDate: "2023-05-14",
    savedDate: "2023-05-15",
    status: "Active",
    salary: "$90,000 - $120,000",
    description: "Join our creative team as a product designer...",
    category: "Design",
    companyLogo: "https://logo.clearbit.com/designstudio.com",
  },
  // Add more mock data as needed
].concat(
  Array.from(
    {
      length: 8,
    },
    (_, i) => ({
      id: i + 3,
      title: `Software Engineer ${i + 1}`,
      company: "Tech Company",
      location: "Remote",
      type: "Full-time",
      postedDate: "2023-05-01",
      savedDate: "2023-05-02",
      status: i < 6 ? "Active" : "Closed",
      salary: "$100,000 - $130,000",
      description: "Join our engineering team...",
      category: "Engineering",
      companyLogo: `https://logo.clearbit.com/techcompany${i}.com`,
    })
  )
);
const categories = [
  {
    id: "all",
    name: "All Categories",
  },
  {
    id: "engineering",
    name: "Engineering",
  },
  {
    id: "design",
    name: "Design",
  },
  {
    id: "marketing",
    name: "Marketing",
  },
  {
    id: "product",
    name: "Product",
  },
  {
    id: "sales",
    name: "Sales",
  },
];
export const SavedJobsPage = () => {
  const [savedJobs, setSavedJobs] = useState(mockSavedJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showClosedJobs, setShowClosedJobs] = useState(true);
  const [sortBy, setSortBy] = useState("savedDate");
  const jobsPerPage = 5;
  const filteredJobs = savedJobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) =>
      selectedCategory === "all"
        ? true
        : job.category.toLowerCase() === selectedCategory
    )
    .filter((job) => (showClosedJobs ? true : job.status === "Active"))
    .sort((a, b) => {
      if (sortBy === "savedDate") {
        return (
          new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime()
        );
      }
      return (
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      );
    });
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  const handleUnsaveJob = (jobId: number) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookmarkIcon className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
            </div>
            <div className="text-sm text-gray-600">
              {filteredJobs.length} jobs saved
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search saved jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="savedDate">Sort by Save Date</option>
                    <option value="postedDate">Sort by Post Date</option>
                  </select>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={showClosedJobs}
                      onChange={(e) => setShowClosedJobs(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Show closed jobs
                  </label>
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="p-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          {/* Job List */}
          <div className="space-y-4">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
                <SavedJobCard
                  key={job.id}
                  job={job}
                  onUnsave={() => handleUnsaveJob(job.id)}
                />
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No saved jobs
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm
                    ? "No saved jobs match your search criteria"
                    : "Start saving jobs you're interested in"}
                </p>
              </div>
            )}
          </div>
          {/* Pagination */}
          {filteredJobs.length > jobsPerPage && (
            <div className="mt-6">
              <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
