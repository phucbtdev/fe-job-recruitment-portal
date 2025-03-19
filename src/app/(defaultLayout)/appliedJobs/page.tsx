"use client";
import { useState } from "react";
import {
  SearchIcon,
  FilterIcon,
  BriefcaseIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";
import Image from "next/image";
import PaginationBar from "@/app/components/PaginationBar";
// Mock data for applied jobs
const mockAppliedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    location: "San Francisco, CA",
    type: "Full-time",
    appliedDate: "2023-05-20",
    status: "Review",
    salary: "$120,000 - $150,000",
    applicationId: "APP-001",
  },
  {
    id: 2,
    title: "React Developer",
    company: "StartupCo",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    location: "Remote",
    type: "Full-time",
    appliedDate: "2023-05-18",
    status: "Interview",
    salary: "$90,000 - $120,000",
    applicationId: "APP-002",
  },
];

// const statusColors = {
//   Review: "bg-blue-100 text-blue-800",
//   Interview: "bg-purple-100 text-purple-800",
//   Shortlisted: "bg-green-100 text-green-800",
//   Rejected: "bg-red-100 text-red-800",
// };

export default function AppliedJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("recent");
  const jobsPerPage = 5;
  const filteredJobs = mockAppliedJobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) =>
      selectedStatus === "All" ? true : job.status === selectedStatus
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return (
          new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
        );
      }
      return 0;
    });
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Applied Jobs</h1>
            </div>
            <div className="text-sm text-gray-600">
              {filteredJobs.length} applications
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Filters */}
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
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FilterIcon size={18} className="text-gray-500" />
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="All">All Status</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Interview Scheduled">
                        Interview Scheduled
                      </option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Applications List */}
          <div className="space-y-4">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={job.companyLogo}
                          alt={`${job.company} logo`}
                          className=" rounded-lg object-contain bg-gray-50"
                          fill
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium `}
                          >
                            {job.status}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="flex items-center gap-1 text-gray-500">
                            <ClockIcon size={16} />
                            <span className="text-sm">{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <CalendarIcon size={16} />
                            <span className="text-sm">
                              Applied on{" "}
                              {new Date(job.appliedDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <span className="text-sm">
                              Application ID: {job.applicationId}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-blue-600 font-medium">
                            {job.salary}
                          </span>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                              View Application
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200">
                              Withdraw Application
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No applications found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm
                    ? "No applications match your search criteria"
                    : "You haven't applied to any jobs yet"}
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
}
