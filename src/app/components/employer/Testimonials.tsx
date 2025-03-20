import React from "react";
import { StarIcon } from "lucide-react";
import Image from "next/image";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "Tech Innovators Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote:
        "JobPortal has transformed our hiring process. We've reduced our time-to-hire by 60% and found amazing talent.",
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition Manager",
      company: "Growth Labs",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote:
        "The quality of candidates we get through JobPortal is consistently high. Their AI matching system is a game-changer.",
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "Startup Success",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote:
        "As a fast-growing startup, we needed a reliable way to scale our team. JobPortal delivered beyond our expectations.",
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what other companies are saying about our recruitment solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className=" rounded-full object-cover"
                    fill
                  />
                </div>

                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
