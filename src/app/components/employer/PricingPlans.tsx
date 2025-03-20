import React from "react";
import { CheckIcon } from "lucide-react";
export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 job postings",
        "Basic candidate matching",
        "30-day job listings",
        "Email support",
        "Basic analytics",
      ],
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Best for growing companies",
      features: [
        "Up to 15 job postings",
        "Advanced candidate matching",
        "60-day job listings",
        "Priority support",
        "Advanced analytics",
        "Custom company page",
        "Featured job listings",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "AI-powered matching",
        "90-day job listings",
        "24/7 priority support",
        "Advanced analytics & reporting",
        "Custom branding",
        "API access",
        "Dedicated account manager",
      ],
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best fits your hiring needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-xl"
                  : "border border-gray-200"
              } p-8`}
            >
              {plan.popular && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-600">{plan.period}</span>
              </div>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-md font-medium ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                } transition-colors`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
