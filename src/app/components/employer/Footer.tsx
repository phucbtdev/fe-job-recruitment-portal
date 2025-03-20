import React from "react";
import {
  BriefcaseIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">
                JobPortal
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Connecting talented professionals with top employers. Find your
              dream job or the perfect candidate with our powerful job portal.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              For Job Seekers
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Create Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Job Alerts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              For Employers
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Search Resumes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Recruiting Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 JobPortal. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-400 text-sm py-2 px-3 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
