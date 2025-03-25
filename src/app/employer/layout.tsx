"use client";
import "../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "../components/employer/Header";
import Footer from "../components/employer/Footer";
import { usePathname } from "next/navigation";
const AUTH_ROUTES = new Set(["/tuyen-dung/dang-nhap", "/tuyen-dung/dang-ky"]);
const EMPLOYER_ROUTES_PREFIX = "/tuyen-dung";

export default function LayoutEmployer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (AUTH_ROUTES.has(pathname)) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  if (pathname.startsWith(EMPLOYER_ROUTES_PREFIX)) {
    return <EmployerLayout>{children}</EmployerLayout>;
  }

  return <ManagementLayout>{children}</ManagementLayout>;
}

// Tách thành các component con để dễ quản lý
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

function EmployerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset>
            <SiteHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
