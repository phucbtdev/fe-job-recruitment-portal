import React, { cloneElement, ReactNode } from "react";
interface CategoryCardProps {
  icon: ReactNode;
  name: string;
  count: number;
}
export function CategoryCard({ icon, name, count }: CategoryCardProps) {
  return (
    <a href="#" className="block">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          {cloneElement(icon as React.ReactElement, {
            className: "h-6 w-6",
          })}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500">{count} jobs</p>
      </div>
    </a>
  );
}
