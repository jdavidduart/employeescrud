"use client";
import Button from "../../../../components/Button/Button";
import CustomCard from "../../../../components/Card/Card";
import styles from "../employeedetail.module.css";
import Link from "next/link";
import { useEmployeeDetail } from "../../../../Hooks/useEmployeeDetail";
import InfoSection from "../../../../components/InfoSection/InfoSection.js";

export default function EmployeeDetailView({ params }) {
  const { currentEmployee } = useEmployeeDetail(params.employeeId);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a href="/">
          <Button
            icon={"bi bi-arrow-left"}
            variant="btn-outline-primary"
            size="btn-sm"
          />
        </a>

        <h3 className="text-primary">Employee detail</h3>
      </div>
      <div className="mt-5">
        <CustomCard headerTitle={"Employee section"}>
          <div className={styles.info_sections_container}>
            <InfoSection
              title={"First name:"}
              description={currentEmployee?.firstName}
            />
            <InfoSection
              title={"Middle name:"}
              description={currentEmployee?.middleName}
            />
            <InfoSection
              title={"Last name:"}
              description={currentEmployee?.lastName}
            />
            <InfoSection
              title={"Location city:"}
              description={currentEmployee?.locationCity}
            />
            <InfoSection
              title={"Address:"}
              description={currentEmployee?.address}
            />
            <InfoSection
              title={"Date birth:"}
              description={currentEmployee?.dateBirth}
            />
            <InfoSection
              title={"Telephone:"}
              description={currentEmployee?.telephone}
            />
          </div>
        </CustomCard>
        <CustomCard headerTitle={"Position section"}>
          <div className={styles.info_sections_container}>
            <InfoSection
              title={"Position title:"}
              description={currentEmployee?.positionTitle}
            />
            <InfoSection
              title={"Hire Date:"}
              description={currentEmployee?.hireDate}
            />
            <InfoSection
              title={"Email:"}
              description={currentEmployee?.email}
            />
            <InfoSection
              title={"Salary:"}
              description={currentEmployee?.salary}
            />
            <InfoSection
              title={"Time in position:"}
              description={currentEmployee?.timeInPosition}
            />
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
