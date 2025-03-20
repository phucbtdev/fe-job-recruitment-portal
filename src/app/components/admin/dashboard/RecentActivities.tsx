import React from "react";
import { CheckCircleIcon, XCircleIcon, ClockIcon } from "lucide-react";
export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: "John Smith",
      action: "Applied for",
      target: "Senior Frontend Developer",
      status: "pending",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Tech Solutions Inc.",
      action: "Posted new job",
      target: "Full Stack Developer",
      status: "completed",
      time: "4 hours ago",
    },
    {
      id: 3,
      user: "Sarah Johnson",
      action: "Application rejected for",
      target: "UX Designer",
      status: "rejected",
      time: "5 hours ago",
    },
    {
      id: 4,
      user: "Michael Brown",
      action: "Updated profile",
      status: "completed",
      time: "6 hours ago",
    },
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case "rejected":
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
      default:
        return <ClockIcon className="h-5 w-5 text-yellow-600" />;
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <StatusIcon status={activity.status} />
                <div>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    {activity.target && (
                      <span className="font-medium">{activity.target}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              <span
                className={`text-sm font-medium capitalize ${
                  activity.status === "completed"
                    ? "text-green-600"
                    : activity.status === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Activities
        </button>
      </div>
    </div>
  );
}
