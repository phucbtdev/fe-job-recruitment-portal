import React from "react";

import data from "./data.json";
import { SectionCards } from "@/components/employer/dashboard/section-cards";
import { ChartAreaInteractive } from "@/components/employer/dashboard/chart-area-interactive";
import { DataTable } from "@/components/employer/dashboard/data-table";
export default function AdminDashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
