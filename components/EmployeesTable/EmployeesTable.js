import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { useEmployeesTable } from "./useEmployeesTable";

export default function EmployeesTable({ data, onEdit = () => null }) {
  const { columns } = useEmployeesTable(onEdit);
  return (
    <>
      <BootstrapTable
        wrapperClasses="table-responsive"
        classes="table table-head-custom table-vertical-center overflow-hidden"
        bordered={false}
        remote={{
          sort: true,
          pagination: true,
        }}
        defaultSortDirection="asc"
        keyField="id"
        data={data || []}
        columns={columns}
        onTableChange={() => null}
      ></BootstrapTable>
    </>
  );
}
