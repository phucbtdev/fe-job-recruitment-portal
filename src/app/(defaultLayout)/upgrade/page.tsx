"use client";
import { useState } from "react";
import { CheckIcon, CreditCardIcon } from "lucide-react";
import { useRouter } from "next/navigation";
const pricingPlans = {
  basic: {
    id: "basic",
    name: "Basic",
    description: "Everything you need to get started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    features: [
      "10 job applications per month",
      "Basic CV templates",
      "Email support",
      "Job alerts",
      "Basic job search filters",
    ],
    limitations: [
      "No priority applications",
      "Limited CV templates",
      "Basic analytics",
    ],
    badge: "",
  },
  pro: {
    id: "pro",
    name: "Pro",
    description: "Best for active job seekers",
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    popular: true,
    features: [
      "Unlimited job applications",
      "All CV templates",
      "Priority support",
      "Advanced job search filters",
      "Application tracking",
      "Priority application status",
      "Profile highlighting",
      "Custom job alerts",
    ],
    limitations: [],
    badge: "",
  },
  premium: {
    id: "premium",
    name: "Premium",
    description: "For professionals seeking career growth",
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    popular: false,
    features: [
      "Everything in Pro",
      "Career coaching session",
      "Resume review service",
      "Interview preparation",
      "Salary negotiation tools",
      "Industry insights",
      "Network events access",
      "Personal career advisor",
    ],
    limitations: [],
    badge: "",
  },
  education: {
    id: "education",
    name: "Education",
    description: "Special plan for students",
    monthlyPrice: 4.99,
    yearlyPrice: 49,
    popular: false,
    features: [
      "50 job applications per month",
      "Student-focused CV templates",
      "Email support",
      "Internship alerts",
      "Campus event notifications",
      "Student community access",
      "Learning resources",
    ],
    limitations: [],
    badge: "Student ID Required",
  },
};
export default function PricingPage() {
  const [annual, setAnnual] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Upgrade Your Plan
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center p-1 bg-gray-100 rounded-full">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                !annual ? "bg-white text-gray-900 shadow" : "text-gray-500"
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly billing
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                annual ? "bg-white text-gray-900 shadow" : "text-gray-500"
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual billing
              <span className="ml-1 text-blue-600">(Save 20%)</span>
            </button>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {Object.values(pricingPlans).map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-lg"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-bl">
                  Most Popular
                </div>
              )}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-bl">
                  {plan.badge}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">
                    {annual ? "/year" : "/month"}
                  </span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-sm text-gray-500">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.limitations?.map((limitation, index) => (
                    <li key={index} className="flex items-start text-gray-400">
                      <span className="ml-8 text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push(`/checkout/${plan.id}`)}
                  className={`mt-8 w-full py-3 px-4 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {plan.monthlyPrice === 0
                    ? "Current Plan"
                    : "Upgrade to " + plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* FAQ or Additional Info */}
        <div className="mt-12 text-center">
          <h2 className="text-lg font-medium text-gray-900">
            Need help choosing a plan?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Contact our support team for assistance
          </p>
          <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
            Contact Support →
          </button>
        </div>
      </main>
    </div>
  );
}
