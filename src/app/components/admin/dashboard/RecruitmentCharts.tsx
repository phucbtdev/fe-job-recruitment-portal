"use client";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RecruitmentCharts() {
  const applicationData = [
    {
      name: "Jan",
      applications: 4000,
    },
    {
      name: "Feb",
      applications: 3000,
    },
    {
      name: "Mar",
      applications: 2000,
    },
    {
      name: "Apr",
      applications: 2780,
    },
    {
      name: "May",
      applications: 1890,
    },
    {
      name: "Jun",
      applications: 2390,
    },
    {
      name: "Jul",
      applications: 3490,
    },
  ];
  const categoryData = [
    {
      name: "Technology",
      jobs: 1234,
    },
    {
      name: "Marketing",
      jobs: 876,
    },
    {
      name: "Design",
      jobs: 654,
    },
    {
      name: "Sales",
      jobs: 543,
    },
    {
      name: "Finance",
      jobs: 432,
    },
    {
      name: "HR",
      jobs: 321,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Application Trends
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={applicationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="applications"
                stroke="#3B82F6"
                fill="#93C5FD"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Jobs by Category
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jobs" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
