import Button from "../Button/Button";
import Link from "next/link";

export const useEmployeesTable = (onEdit) => {
  const columns = [
    {
      dataField: "firstName",
      text: "First Name",
    },
    {
      dataField: "lastName",
      text: "Last name",
    },
    {
      dataField: "positionTitle",
      text: "Position title",
    },
    {
      dataField: "hireDate",
      text: "Date arrival ",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cell, row) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "4px",
            }}
          >
            <a href={`/employeedetail/${row.id}`}>
              <Button
                icon={"bi bi-eye"}
                variant="btn-outline-primary"
                size="btn-sm"
              />
            </a>
            <Button
              icon={"bi bi-pencil"}
              variant="btn-outline-secondary"
              size="btn-sm"
              onClick={() => {
                onEdit(row);
              }}
            />
          </div>
        );
      },
    },
  ];
  return {
    columns,
  };
};
