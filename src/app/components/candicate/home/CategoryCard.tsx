import React, { ReactNode } from "react";
interface CategoryCardProps {
  icon: ReactNode;
  name: string;
  color: string;
  jobCount: number;
}
export function CategoryCard({
  icon,
  name,
  color,
  jobCount,
}: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div
        className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-1">{name}</h3>
      <p className="text-blue-600 text-sm">{jobCount} Jobs Available</p>
    </div>
  );
}
