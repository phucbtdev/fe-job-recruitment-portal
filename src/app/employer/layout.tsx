"use client";
import "../globals.css";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function LayoutEmployer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const excludedRoutes = ["/tuyen-dung/dang-nhap", "/tuyen-dung/dang-ky"];

  if (excludedRoutes.includes(pathname)) {
    console.log(pathname);
    return (
      <html>
        <body>{children}</body>
      </html>
    );
  }

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
