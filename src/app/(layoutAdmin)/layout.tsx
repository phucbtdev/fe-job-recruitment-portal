import "../globals.css";
import React from "react";
import Sidebar from "../components/admin/Sidebar";
export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <main className="flex-grow">
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 overflow-auto">
                <div className="p-8">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
