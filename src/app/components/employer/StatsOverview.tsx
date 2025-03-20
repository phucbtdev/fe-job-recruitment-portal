import React from "react";
import { Users2Icon, EyeIcon, CheckCircleIcon, ClockIcon } from "lucide-react";
export default function StatsOverview() {
  const stats = [
    {
      name: "Active Jobs",
      stat: "12",
      icon: CheckCircleIcon,
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Total Applications",
      stat: "245",
      icon: Users2Icon,
      change: "+35",
      changeType: "increase",
    },
    {
      name: "Total Views",
      stat: "1.2k",
      icon: EyeIcon,
      change: "+201",
      changeType: "increase",
    },
    {
      name: "Average Time to Hire",
      stat: "18 days",
      icon: ClockIcon,
      change: "-2 days",
      changeType: "decrease",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((item) => (
        <div
          key={item.name}
          className="bg-white px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <item.icon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {item.stat}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      item.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.change}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
