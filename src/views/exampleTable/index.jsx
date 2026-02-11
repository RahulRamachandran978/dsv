import React, { useMemo } from "react";
import DataTable from "../../components/ui/table/DataTable";
import { tableData, tableColumns } from "../../utils/tableConfig";
import { Database } from "lucide-react";

const   ExampleTableView = () => {
  const data = useMemo(() => tableData, []);
  const columns = useMemo(() => tableColumns, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 py-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
            <Database size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Users List
            </h1>
            
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Records
            </h2>

            {/* Placeholder for future actions */}
            {/* <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                Live
              </span> 
            </div> */}
          </div>

          {/* Table */}
          <div className="p-4">
            <DataTable
              data={data}
              columns={columns}
              showFooter={false}
              enablePagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleTableView;
