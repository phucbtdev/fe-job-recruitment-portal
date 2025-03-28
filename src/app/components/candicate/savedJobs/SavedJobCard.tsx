import {
  MapPinIcon,
  CalendarIcon,
  BookmarkIcon,
  BriefcaseIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  savedDate: string;
  status: string;
  salary: string;
  description: string;
  companyLogo: string;
}
interface SavedJobCardProps {
  job: SavedJob;
  onUnsave: () => void;
}
export default function SavedJobCard({ job, onUnsave }: SavedJobCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12">
            <Image
              src={job.companyLogo}
              alt={`${job.company} logo`}
              className=" rounded-full object-contain bg-gray-50"
              fill
              onError={(e) => {
                e.currentTarget.src =
                  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
              }}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href={`/job/${job.id}`} className="hover:text-blue-600">
                    {job.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {job.status}
                </span>
                <button
                  onClick={onUnsave}
                  className="text-gray-400 hover:text-red-500"
                  title="Remove from saved"
                >
                  <BookmarkIcon className="h-5 w-5 fill-current" />
                </button>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <MapPinIcon size={16} />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BriefcaseIcon size={16} />
                <span className="text-sm">{job.type}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <CalendarIcon size={16} />
                <span className="text-sm">
                  Posted {formatDate(job.postedDate)}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                {job.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 font-medium">{job.salary}</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Quick Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
