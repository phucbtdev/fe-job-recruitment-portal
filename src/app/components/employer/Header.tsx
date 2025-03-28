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
              <Link
                href="/tuyen-dung/trang-chu"
                className="ml-2 text-xl font-bold text-gray-900"
              >
                JobPortal
              </Link>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <div className="relative flex justify-center group">
                <Link
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Giới thiệu
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-52 top-8">
                  <Link
                    href="/tuyen-dung/viec-da-dang-tuyen"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Tin đã đăng
                  </Link>
                </div>
              </div>

              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Dịch vụ
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Báo giá
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Hổ trợ
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                BLog tuyển dụng
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Tư vấn tuyển dụng
            </Link>
            <Link
              href="/tuyen-dung/dang-nhap"
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Đăng nhập
            </Link>
            <Link
              href="/tuyen-dung/dang-tin"
              className="ml-2 px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Đăng tin
            </Link>
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
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Find Jobs
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Companies
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Career Resources
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Salary Guide
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              For Employers
            </Link>
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
              <Link
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
