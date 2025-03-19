import "../globals.css";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
