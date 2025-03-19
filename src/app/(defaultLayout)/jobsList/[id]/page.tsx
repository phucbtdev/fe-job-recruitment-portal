"use client";
import { useState } from "react";
import {
  MapPinIcon,
  ClockIcon,
  BriefcaseIcon,
  BuildingIcon,
  CalendarIcon,
  ShareIcon,
  BookmarkIcon,
  ChevronLeftIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { JobCard } from "@/app/components/JobCard";

export default function JobDetail() {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Job Header */}
      <div className="bg-blue-600 pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/danh-sach-viec-lam"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-2" />
            Back to all jobs
          </Link>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="relative w-16 h-16 mr-6">
                <Image
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="TechCorp logo"
                  fill
                  className="rounded-lg object-cover "
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    New
                  </span>
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    Full-time
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white mt-2">
                  Senior Frontend Developer
                </h1>
                <div className="flex items-center gap-4 mt-3 text-blue-100">
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 mr-2" />
                    TechCorp
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="h-5 w-5 mr-2" />
                    5+ years experience
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md"
                onClick={() => setIsSaved(!isSaved)}
              >
                <BookmarkIcon
                  className="h-5 w-5"
                  fill={isSaved ? "currentColor" : "none"}
                />
                {isSaved ? "Saved" : "Save Job"}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md">
                <ShareIcon className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Posted 2 days ago</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Apply by Aug 30, 2023</span>
                  </div>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  $120K - $150K
                </span>
              </div>
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Overview
                </h2>
                <p className="text-gray-600">
                  We are seeking a Senior Frontend Developer to join our growing
                  team. In this role, you&apos;ll work on cutting-edge web
                  applications, collaborate with cross-functional teams, and
                  help shape our technical direction.
                </p>
              </div>
              {/* Responsibilities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Lead the development of complex frontend applications using
                    React and TypeScript
                  </li>
                  <li>Mentor junior developers and conduct code reviews</li>
                  <li>
                    Collaborate with designers to implement pixel-perfect UI
                    components
                  </li>
                  <li>
                    Optimize application performance and implement best
                    practices
                  </li>
                  <li>Contribute to technical architecture decisions</li>
                </ul>
              </div>
              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    5+ years of experience with React and modern JavaScript
                  </li>
                  <li>
                    Strong understanding of TypeScript and state management
                  </li>
                  <li>
                    Experience with responsive design and cross-browser
                    compatibility
                  </li>
                  <li>
                    Knowledge of frontend testing frameworks and CI/CD practices
                  </li>
                  <li>Excellent communication and collaboration skills</li>
                </ul>
              </div>
              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Benefits
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Competitive salary and equity package</li>
                  <li>Health, dental, and vision insurance</li>
                  <li>Flexible work hours and remote work options</li>
                  <li>Professional development budget</li>
                  <li>Generous vacation policy</li>
                </ul>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
                Apply Now
              </button>
            </div>
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About TechCorp
              </h2>
              <p className="text-gray-600 mb-6">
                TechCorp is a leading technology company specializing in
                innovative solutions for enterprise clients. With over 1000
                employees worldwide, we\&apos;re committed to creating
                cutting-edge products that transform how businesses operate.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">1000+ employees</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View company profile
                </a>
              </div>
            </div>
          </div>
          {/* Similar Jobs */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Similar Jobs
            </h2>
            <div className="space-y-4">
              <JobCard
                id={1}
                title="Frontend Developer"
                company="InnovateCo"
                location="New York, NY"
                salary="$100K - $130K"
                type="Full-time"
                logo="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                tags={["React", "JavaScript", "CSS"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
