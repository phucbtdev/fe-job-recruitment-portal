"use client";
import React, { useState } from "react";
import {
  LayoutDashboardIcon,
  UsersIcon,
  BriefcaseIcon,
  FileTextIcon,
  SettingsIcon,
  BarChart3Icon,
  MessageSquareIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      icon: LayoutDashboardIcon,
      label: "Dashboard",
      path: "/admin",
    },
    {
      icon: UsersIcon,
      label: "Users",
      path: "/admin/user-management",
    },
    {
      icon: BriefcaseIcon,
      label: "Jobs",
      path: "/admin/jobs",
    },
    {
      icon: FileTextIcon,
      label: "Applications",
      path: "/admin/applications",
    },
    {
      icon: BarChart3Icon,
      label: "Reports",
      path: "/admin/reports",
    },
    {
      icon: MessageSquareIcon,
      label: "Messages",
      path: "/admin/messages",
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden fixed top-4 right-4 p-2 bg-white border border-gray-200 rounded-lg shadow-md z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative w-64 bg-white border-r border-gray-200 min-h-screen transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <span className="text-xl font-bold text-gray-800">Admin Portal</span>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="px-8 mt-8">
            <button className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg">
              <LogOutIcon className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
