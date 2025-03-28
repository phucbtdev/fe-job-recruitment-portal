"use client";
import { useState } from "react";
import {
  BellIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  LogOutIcon,
  MenuIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const notifications = [
  {
    id: 1,
    type: "application",
    message: "Your application for Senior Frontend Developer was viewed",
    time: "5 minutes ago",
    status: "unread",
  },
  {
    id: 2,
    type: "match",
    message: "New job match: UX Designer at Creative Tech",
    time: "2 hours ago",
    status: "unread",
  },
  {
    id: 3,
    type: "update",
    message: "Your profile strength has increased to 85%",
    time: "1 day ago",
    status: "read",
  },
];
const messages = [
  {
    id: 1,
    sender: "Sarah Miller",
    role: "HR Manager at TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "Thanks for your application. Are you available for an interview?",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    sender: "John Davis",
    role: "Tech Lead at InnovateTech",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "I'd like to discuss a potential opportunity with you",
    time: "1 hour ago",
    unread: true,
  },
];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loggedIn, setLoggedIn] = useState(true);
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
            <div className="relative group">
              <Link
                className="text-gray-700 hover:text-blue-600 font-medium"
                href="/viec-lam"
              >
                Việc làm
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-52">
                <Link
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  href="/cam-nang-nghe-nghiep"
                >
                  Cẩm nang nghề nghiệp
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  href="/viec-lam-da-luu"
                >
                  Công việc đã lưu
                </Link>

                <Link
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  href="/viec-lam-da-ung-tuyen"
                >
                  Việc làm đã ứng tuyển
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link
                className="text-gray-700 hover:text-blue-600 font-medium"
                href="/danh-sach-mau-cv"
              >
                Hồ sơ & CV
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-52">
                <Link
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  href="/danh-sach-mau-cv"
                >
                  Tạo CV
                </Link>
              </div>
            </div>

            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/danh-sach-nha-tuyen-dung"
            >
              Danh sách nhà tuyển dụng
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 font-medium"
              href="/nang-cap-goi"
            >
              Nâng cấp gói
            </Link>
          </nav>
          {loggedIn ? (
            <div className="flex items-center space-x-4">
              <div
                className="relative"
                onMouseEnter={() => setIsNotificationsOpen(true)}
                onMouseLeave={() => setIsNotificationsOpen(false)}
              >
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">
                          Notifications
                        </h3>
                        <span className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer">
                          Mark all as read
                        </span>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                            notification.status === "unread" ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              {notification.type === "application" ? (
                                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                              ) : notification.type === "match" ? (
                                <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                              ) : (
                                <ClockIcon className="h-6 w-6 text-yellow-500" />
                              )}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-sm text-gray-900">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm text-blue-600 hover:text-blue-800 w-full text-center">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsMessagesOpen(true)}
                onMouseLeave={() => setIsMessagesOpen(false)}
              >
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                  <MessageSquareIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    2
                  </span>
                </button>
                {isMessagesOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">
                          Messages
                        </h3>
                        <Link
                          href="/messages"
                          className="text-xs text-blue-600 hover:text-blue-800"
                        >
                          View all
                        </Link>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                            message.unread ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex items-start ">
                            <Image
                              src={message.avatar}
                              alt={message.sender}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />

                            <div className="ml-3 flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                  {message.sender}
                                </p>
                                <span className="text-xs text-gray-500">
                                  {message.time}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {message.role}
                              </p>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <Link
                        href="/messages"
                        className="text-sm text-blue-600 hover:text-blue-800 w-full text-center block"
                      >
                        Open Messages
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-500">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User profile"
                      width={40}
                      height={40}
                      className=" object-cover"
                    />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-700">
                      Alex Johnson
                    </p>
                    <p className="text-xs text-gray-500">Software Developer</p>
                  </div>
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <UserIcon className="h-4 w-4 mr-2" />
                      Your Profile
                    </Link>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <BriefcaseIcon className="h-4 w-4 mr-2" />
                      My Applications
                    </a>
                    <Link
                      href="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <SettingsIcon className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOutIcon className="h-4 w-4 mr-2" />
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/tuyen-dung"
                className="text-gray-400 hover:text-blue-600 font-medium"
              >
                Nhà tuyển dụng
              </Link>
              <Link
                href="/dang-nhap"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Đăng nhập
              </Link>
              <Link
                href="/dang-ky"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Đăng ký
              </Link>
            </div>
          )}

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
