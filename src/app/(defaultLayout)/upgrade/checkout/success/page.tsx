"use client";
import {
  CheckCircleIcon,
  DownloadIcon,
  CreditCardIcon,
  UserIcon,
  ArrowRightIcon,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planId = searchParams.get("planId") || "unknown";
  const orderId = searchParams.get("orderId") || "unknown";

  const getPlanDetails = (id: string) => {
    const plans = {
      basic: {
        name: "Basic",
        price: "0",
      },
      pro: {
        name: "Pro",
        price: "9.99",
      },
      premium: {
        name: "Premium",
        price: "19.99",
      },
      education: {
        name: "Education",
        price: "4.99",
      },
    };
    return (
      plans[id as keyof typeof plans] || {
        name: "Unknown Plan",
        price: "0",
      }
    );
  };
  const planDetails = getPlanDetails(planId);
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto pt-16 sm:pt-24 px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <CheckCircleIcon className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Payment successful!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Thank you for upgrading to {planDetails.name}. Your account has been
            successfully updated.
          </p>
        </div>
        <div className="mt-12 bg-white shadow rounded-lg">
          <div className="px-6 py-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {planDetails.name} Plan
                </p>
                <p className="text-sm text-gray-500">Monthly billing</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${planDetails.price}/month
              </p>
            </div>
            <div className="flex justify-between items-center py-3">
              <p className="text-sm text-gray-500">Order number</p>
              <p className="text-sm font-medium text-gray-900">{orderId}</p>
            </div>
            <div className="mt-6 space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Invoice
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4">
          <button
            onClick={() => router.push("/my-cv")}
            className="w-full flex items-center justify-between px-4 py-3 bg-white shadow rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Complete your profile
                </p>
                <p className="text-sm text-gray-500">
                  Update your CV to attract more employers
                </p>
              </div>
            </div>
            <ArrowRightIcon className="h-5 w-5 text-gray-400" />
          </button>
          <button
            onClick={() => router.push("/account/billing")}
            className="w-full flex items-center justify-between px-4 py-3 bg-white shadow rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center">
              <CreditCardIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Manage billing
                </p>
                <p className="text-sm text-gray-500">
                  View billing history and update payment method
                </p>
              </div>
            </div>
            <ArrowRightIcon className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Return to dashboard
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </main>
    </div>
  );
}
