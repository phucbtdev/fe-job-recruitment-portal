"use client";
import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  ArrowRightIcon,
  ClockIcon,
  BookmarkIcon,
} from "lucide-react";
interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
}
export default function CareerAdvice() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    {
      id: "all",
      name: "All Topics",
    },
    {
      id: "interview",
      name: "Interview Tips",
    },
    {
      id: "resume",
      name: "Resume Writing",
    },
    {
      id: "career-growth",
      name: "Career Growth",
    },
    {
      id: "workplace",
      name: "Workplace",
    },
    {
      id: "industry",
      name: "Industry Insights",
    },
  ];
  const articles: Article[] = [
    {
      title: "The Ultimate Guide to Remote Job Interviews",
      excerpt:
        "Master the art of virtual interviews with these proven strategies and tips for success in the remote work era.",
      category: "interview",
      readTime: "8 min read",
      date: "Aug 15, 2023",
      author: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      },
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true,
    },
    {
      title: "10 Resume Tips That Will Get You Noticed",
      excerpt:
        "Stand out from the crowd with these expert resume writing tips and examples from hiring managers.",
      category: "resume",
      readTime: "6 min read",
      date: "Aug 12, 2023",
      author: {
        name: "Michael Chen",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      },
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Navigating Career Changes in Tech",
      excerpt:
        "Learn how to successfully transition into tech roles with insights from industry professionals.",
      category: "career-growth",
      readTime: "10 min read",
      date: "Aug 10, 2023",
      author: {
        name: "Emily Parker",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      },
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Career Advice & Resources
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert insights and guidance to help you navigate your career path
            and achieve your professional goals.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchIcon className="absolute left-4 top-3.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Article */}
        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <div className="h-full w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="inset-0 object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Featured
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{article.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {article.author.name}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read article
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter((article) => !article.featured)
            .map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600">
                      {categories.find((c) => c.id === article.category)?.name}
                    </span>
                    <button className="text-gray-400 hover:text-blue-600">
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        width={32}
                        height={32}
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {article.author.name}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Newsletter Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Career Tips in Your Inbox
          </h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest career advice, industry
            insights, and job search tips.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
