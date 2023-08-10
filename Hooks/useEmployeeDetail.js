import { useSelector } from "react-redux";

export const useEmployeeDetail = (id) => {
  const { employees } = useSelector((store) => store.test);
  const currentEmployee = employees.find((e) => e.id.toString() === id);

  return {
    currentEmployee,
  };
};
