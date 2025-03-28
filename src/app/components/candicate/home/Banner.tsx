"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
const bannerData = [
  {
    id: 1,
    title: "Find Your Dream Job Today",
    description:
      "Access thousands of job listings from top companies worldwide",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    title: "Connect With Top Employers",
    description: "Build your professional network and advance your career",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "Personalized Job Recommendations",
    description:
      "Get matched with positions that fit your skills and experience",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    color: "from-green-600 to-teal-600",
  },
];
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[500px] overflow-hidden">
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-70 z-10`}
          ></div>
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {banner.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                {banner.description}
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-30 hover:bg-white/50 transition-colors"
        onClick={prevSlide}
      >
        <ArrowLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-30 hover:bg-white/50 transition-colors"
        onClick={nextSlide}
      >
        <ArrowRightIcon className="h-6 w-6 text-white" />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default Banner;
