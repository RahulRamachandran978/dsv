import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "../../components/ui/table/DataTable";
import { tableData , tableColumns  } from "../../utils/tableConfig";

const ExampleTableView = () => {
  const data = useMemo(() => tableData, []);
  const columns = useMemo(() => tableColumns, []);
    
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-amber-50 mb-6">Data Table Example</h1>
      <DataTable
        data={data}
        columns={columns}
        showFooter={false}
        enablePagination={true}
      />
    </div>
  );
};

export default ExampleTableView;
