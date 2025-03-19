"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-xl">
              JobBoarb
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/viec-lam"
            >
              Việc làm
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/cam-nang-nghe-nghiep"
            >
              Cẩm nang nghề nghiệp
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/nha-tuyen-dung"
            >
              Nhà tuyển dụng
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/viec-lam-da-luu"
            >
              Công việc đã lưu
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/viec-lam-da-ung-tuyen"
            >
              Việc làm đã ứng tuyển
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/nha-tuyen-dung"
              className="text-gray-400 hover:text-blue-600 font-medium"
            >
              Nhà tuyển dụng
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Đăng nhập
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Đăng ký
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/danh-sach-viec-lam"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Việc làm
            </Link>
            <Link
              href="/nha-tuyen-dung"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Nhà tuyền dụng
            </Link>
            <Link
              href="/cam-nang"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Cẩm nang nghê nghiệp
            </Link>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Salary Tools
            </a>
            <Link
              href="/dang-nhap"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Đăng nhập
            </Link>
            <Link
              href="/dang-tuyen"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md font-medium text-center"
            >
              Đăng tuyển
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
