import { MapPinIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface JobCardProps {
  id: string | number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  logo: string;
  tags: string[];
  isNew?: boolean;
}
export function JobCard({
  id,
  title,
  company,
  location,
  salary,
  type,
  logo,
  tags,
  isNew = false,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={logo}
            alt={`${company} logo`}
            className="rounded-md object-cover"
            fill
          />
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {isNew && (
              <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
          <p className="text-gray-600 mt-1">{company}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center text-gray-500 text-sm">
        <MapPinIcon className="h-4 w-4 mr-1" />
        <span>{location}</span>
        <span className="mx-2">•</span>
        <ClockIcon className="h-4 w-4 mr-1" />
        <span>{type}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="font-semibold text-gray-800">{salary}</span>
        <div>
          <Link
            href={`/viec-lam/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm mr-2"
          >
            Xem chi tiết
          </Link>
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Ứng tuyển
          </Link>
        </div>
      </div>
    </div>
  );
}
