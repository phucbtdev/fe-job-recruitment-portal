import { MapPinIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
interface CompanyCardProps {
  idCompany: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  openings: number;
}
export function CompanyCard({
  idCompany,
  name,
  logo,
  industry,
  location,
  openings,
}: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-md object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{industry}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center text-gray-500 text-sm">
        <MapPinIcon className="h-4 w-4 mr-1" />
        <span>{location}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center text-gray-600">
          <BriefcaseIcon className="h-4 w-4 mr-1" />
          <span>{openings} open positions</span>
        </div>
        <Link
          href={`/nha-tuyen-dung/${idCompany}`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          View Jobs
        </Link>
      </div>
    </div>
  );
}
