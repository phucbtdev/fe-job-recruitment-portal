"use client";
import { useState } from "react";
import { ArrowLeftIcon, CreditCardIcon, LockIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { id } = useParams();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const handleCompletePurchase = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/nang-cap-goi/checkout/success");
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <button
              onClick={() => router.push("/pricing")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon size={20} />
              <span>Back to Plans</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Complete Your Purchase
            </h1>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Plan</span>
                <span className="font-medium">
                  {id}
                  {/* {planId?.charAt(0).toUpperCase() + planId?.slice(1)} */}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Billing</span>
                <span className="font-medium">Monthly</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">$9.99/month</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <CreditCardIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on card
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                onClick={handleCompletePurchase}
                disabled={isProcessing}
                className="mt-6 w-full flex items-center justify-center py-3 px-4 rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LockIcon className="h-4 w-4 mr-2" />
                {isProcessing ? "Processing..." : "Complete Purchase"}
              </button>
              <p className="mt-4 text-center text-sm text-gray-500">
                Your payment is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
