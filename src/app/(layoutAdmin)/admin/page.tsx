import DashboardStats from "@/app/components/admin/dashboard/DashboardStats";
import RecentActivities from "@/app/components/admin/dashboard/RecentActivities";
import RecruitmentCharts from "@/app/components/admin/dashboard/RecruitmentCharts";
import React from "react";
export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Dashboard Overview
      </h1>
      <DashboardStats />
      <div className="mt-8">
        <RecruitmentCharts />
      </div>
      <div className="mt-8">
        <RecentActivities />
      </div>
    </div>
  );
}
