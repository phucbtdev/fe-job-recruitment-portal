"use client";
import { useState } from "react";
import {
  MapPinIcon,
  GlobeIcon,
  UsersIcon,
  BuildingIcon,
  SearchIcon,
  BriefcaseIcon,
  ChevronLeftIcon,
} from "lucide-react";
import Link from "next/link";
import { JobCard } from "@/app/components/JobCard";
import Image from "next/image";
export default function EmployerDetail() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const departments = [
    {
      id: "all",
      name: "All Departments",
    },
    {
      id: "engineering",
      name: "Engineering",
    },
    {
      id: "design",
      name: "Design",
    },
    {
      id: "product",
      name: "Product",
    },
    {
      id: "marketing",
      name: "Marketing",
    },
    {
      id: "sales",
      name: "Sales",
    },
  ];
  return (
    <div>
      {/* Company Header */}
      <div className="bg-blue-600 pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/nha-tuyen-dung"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-2" />
            Back to companies
          </Link>
          <div className="flex items-start gap-8">
            <Image
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              alt="TechCorp logo"
              className="rounded-lg object-cover bg-white p-2"
              width={96}
              height={96}
            />
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">TechCorp</h1>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2" />
                  Technology
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2" />
                  1000+ employees
                </div>
                <a
                  href="https://techcorp.com"
                  className="flex items-center hover:text-white"
                >
                  <GlobeIcon className="h-5 w-5 mr-2" />
                  techcorp.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About TechCorp
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  TechCorp is a leading technology company specializing in
                  innovative solutions for enterprise clients. With over 1000
                  employees worldwide, we&apos;re committed to creating
                  cutting-edge products that transform how businesses operate.
                </p>
                <p className="mb-4">
                  Founded in 2010, we\&apos;ve grown from a small startup to a
                  global technology leader, serving thousands of customers
                  worldwide. Our mission is to make advanced technology
                  accessible to businesses of all sizes.
                </p>
                <p>
                  We believe in fostering a culture of innovation,
                  collaboration, and continuous learning. Our diverse team
                  brings together talent from various backgrounds, creating an
                  inclusive environment where great ideas can flourish.
                </p>
              </div>
            </div>
            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600">Employees Worldwide</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-sm text-gray-600">Global Offices</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
                <div className="text-sm text-gray-600">Open Positions</div>
              </div>
            </div>
            {/* Job Openings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Open Positions
                </h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search positions..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <SearchIcon className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                </div>
              </div>
              {/* Department Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedDepartment === dept.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <JobCard
                  id={1}
                  title="Senior Frontend Developer"
                  company="TechCorp"
                  location="San Francisco, CA"
                  salary="$120K - $150K"
                  type="Full-time"
                  logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  tags={["React", "TypeScript", "Tailwind"]}
                  isNew={true}
                />
                <JobCard
                  id={2}
                  title="Product Manager"
                  company="TechCorp"
                  location="New York, NY"
                  salary="$110K - $140K"
                  type="Full-time"
                  logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  tags={["Product Strategy", "Agile", "B2B"]}
                />
                <JobCard
                  id={3}
                  title="UX Designer"
                  company="TechCorp"
                  location="Remote"
                  salary="$90K - $120K"
                  type="Full-time"
                  logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  tags={["UI/UX", "Figma", "Design Systems"]}
                  isNew={true}
                />
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Culture */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company Culture
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BriefcaseIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Work-Life Balance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Flexible hours and remote work options
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <UsersIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Diverse & Inclusive
                    </h4>
                    <p className="text-sm text-gray-600">
                      Equal opportunities for all
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BuildingIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Growth & Learning
                    </h4>
                    <p className="text-sm text-gray-600">
                      Professional development programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Office Locations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">San Francisco</h4>
                    <p className="text-sm text-gray-600">Headquarters</p>
                    <p className="text-sm text-gray-600">
                      123 Market Street, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">New York</h4>
                    <p className="text-sm text-gray-600">East Coast Hub</p>
                    <p className="text-sm text-gray-600">
                      456 Madison Ave, NY 10022
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">London</h4>
                    <p className="text-sm text-gray-600">European Office</p>
                    <p className="text-sm text-gray-600">
                      789 Oxford Street, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Benefits & Perks
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Competitive salary & equity
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Health, dental & vision insurance
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited PTO policy
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  401(k) with company match
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional development budget
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
