"use client";
import React, { useState } from "react";
import {
  DollarSignIcon,
  CheckCircleIcon,
  ImageIcon,
  AlertCircleIcon,
} from "lucide-react";
const steps = [
  {
    id: 1,
    name: "Công ty",
  },
  {
    id: 2,
    name: "Công việc",
  },
  {
    id: 3,
    name: "Yêu cầu",
  },
  {
    id: 4,
    name: "Xem lại",
  },
];
export default function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [jobType, setJobType] = useState("full-time");
  return (
    <div className="">
      <div className="bg-white border-b pb-2">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
          <p className="mt-2 text-gray-600">
            Reach thousands of qualified candidates.
          </p>
          {/* Progress Steps */}
          <div className="mt-8">
            <nav aria-label="Progress">
              <ol className="flex items-center">
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className={`relative pr-15 sm:pr-25`}>
                    {currentStep > step.id ? (
                      <>
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-blue-600" />
                        </div>
                        <button className="relative w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-900">
                          <CheckCircleIcon
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </>
                    ) : currentStep === step.id ? (
                      <>
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          {stepIdx !== steps.length - 1 ? (
                            <div className="h-0.5 w-full bg-gray-200" />
                          ) : null}
                        </div>
                        <button
                          className="relative w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full"
                          aria-current="step"
                        >
                          <span className="h-2.5 w-2.5 bg-white rounded-full" />
                        </button>
                      </>
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          {stepIdx !== steps.length - 1 ? (
                            <div className="h-0.5 w-full bg-gray-200" />
                          ) : null}
                        </div>
                        <button className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </button>
                      </>
                    )}
                    <span className="absolute top-10 text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === 4 ? "Post Job" : "Next"}
              </button>
            </div>
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Company Details
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Logo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Website
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="website"
                      id="website"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About Company
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Write a brief description about your company"
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Job Details
                </h2>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. Senior Frontend Developer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Type
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {["full-time", "part-time", "contract", "internship"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setJobType(type)}
                          className={`${
                            jobType === type
                              ? "bg-blue-50 border-blue-200 text-blue-600"
                              : "bg-white border-gray-200 text-gray-600"
                          } border rounded-md py-2 px-3 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="salary-min"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Minimum Salary
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSignIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="salary-min"
                        id="salary-min"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="salary-max"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Maximum Salary
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSignIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="salary-max"
                        id="salary-max"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. San Francisco, CA (or Remote)"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={8}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Describe the role and responsibilities"
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Requirements & Benefits
                </h2>
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Requirements & Qualifications
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={6}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="List the required skills, experience, and qualifications"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="benefits"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Benefits & Perks
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="benefits"
                      name="benefits"
                      rows={6}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="List the benefits and perks offered with this position"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Required Skills
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Add skills (comma separated)"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add relevant skills that will help candidates find your job
                    posting
                  </p>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Preview & Post
                </h2>
                {/* Add job preview content here */}
                <div className="rounded-md bg-yellow-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircleIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Please review your job posting
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Make sure all the information is correct before
                          posting. You can go back to previous steps to make
                          changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add job preview here */}
              </div>
            )}
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === 4 ? "Post Job" : "Next"}
              </button>
            </div>
          </div>
          {/* Pricing Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Job Posting Summary
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Standard Job Posting
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    $299
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Featured Listing
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    +$99
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-900">
                      Total
                    </span>
                    <span className="text-base font-medium text-gray-900">
                      $398
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">
                  What&apos;s included:
                </h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">
                      30-day listing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">
                      Featured in newsletter
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">
                      Social media promotion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">
                      Dashboard access
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
