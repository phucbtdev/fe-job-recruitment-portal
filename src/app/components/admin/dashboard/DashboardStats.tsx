import React from "react";
import {
  TrendingUpIcon,
  UsersIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from "lucide-react";
export default function DashboardStats() {
  const stats = [
    {
      label: "Total Applications",
      value: "12,789",
      change: "+14%",
      changeType: "increase",
      icon: TrendingUpIcon,
    },
    {
      label: "Active Jobs",
      value: "1,429",
      change: "+28",
      changeType: "increase",
      icon: BriefcaseIcon,
    },
    {
      label: "Total Users",
      value: "45,231",
      change: "+2.4%",
      changeType: "increase",
      icon: UsersIcon,
    },
    {
      label: "Placement Rate",
      value: "84%",
      change: "+3.2%",
      changeType: "increase",
      icon: CheckCircleIcon,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${
                stat.changeType === "increase"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
