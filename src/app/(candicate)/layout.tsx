"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const excludedRoutes = ["/login", "/register", "/forgot-password"];

  if (excludedRoutes.includes(pathname)) {
    return (
      <html>
        <body>
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
                Welcome back
              </h1>
              <p className="text-center text-sm text-gray-600 max-w">
                Sign in to access your account
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
