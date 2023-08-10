"use client";
import styles from "../../styles/Home.module.css";
import { useApp } from "./hook";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";
import Button from "../../components/Button/Button";
import CustomModal from "../../components/CustomModal/CustomModal";
import FormAddOrEdit from "../../components/FormAddOrEdit/FormAddOrEdit";

export default function Home() {
  const {
    employees,
    openAddEdit,
    setOpenAddEdit,
    employeeToEdit,
    setEmployeeToEdit,
  } = useApp();
  return (
    <div className={styles.container}>
      <div className="my-5">
        <h1 className="text-primary mt-5">Payroll software</h1>
        <div className="mt-3 d-flex justify-content-between">
          <p>This is the information about employees</p>
          <Button
            text={"Add new employee"}
            variant="btn-primary"
            onClick={() => setOpenAddEdit(true)}
          />
        </div>
      </div>
      <div className={styles.table_container}>
        <div style={{ minWidth: "800px" }}>
          <EmployeesTable
            data={employees}
            onEdit={(employee) => {
              setOpenAddEdit(true);
              setEmployeeToEdit(employee);
            }}
          />
        </div>
      </div>
      <CustomModal
        title={"Edit"}
        isOpen={openAddEdit}
        onClose={() => {
          setOpenAddEdit(false);
          setEmployeeToEdit(null);
        }}
      >
        <FormAddOrEdit
          employeeToEdit={employeeToEdit}
          onCancel={() => {
            setOpenAddEdit(false);
            setEmployeeToEdit(null);
          }}
        />
      </CustomModal>
    </div>
  );
}
