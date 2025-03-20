import JobsHeader from "@/app/components/employer/JobsHeader";
import JobsTable from "@/app/components/employer/JobsTable";
import StatsOverview from "@/app/components/employer/StatsOverview";
import React from "react";
export function PostedJobs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <JobsHeader />
        <StatsOverview />
        <JobsTable />
      </div>
    </div>
  );
}
