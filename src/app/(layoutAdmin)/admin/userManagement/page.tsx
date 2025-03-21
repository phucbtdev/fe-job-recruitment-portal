import React from "react";
import { PlusIcon } from "lucide-react";
import UserFilters from "@/app/components/admin/userManagemnent/UserFilters";
import UsersTable from "@/app/components/admin/userManagemnent/UsersTable";
export default function UserManagementPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor user accounts
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add User
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg">
        <UserFilters />
        <UsersTable />
      </div>
    </div>
  );
}
