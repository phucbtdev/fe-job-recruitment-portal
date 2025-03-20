"use client";
import React, { useState } from "react";
import { MenuIcon, XIcon, UserIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                JobPortal
              </span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Companies
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Career Resources
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Salary Guide
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/employers"
              className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              For Employers
            </Link>
            <button className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Sign In
            </button>
            <button className="ml-2 px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
              Register
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Companies
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Career Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Salary Guide
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              For Employers
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <UserIcon className="h-10 w-10 rounded-full text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Account
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
