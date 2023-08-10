import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../../utils/DummyData/data";

const initialState = {
  employees: dummyData,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload.data;
    },
    addEmployed: (state, action) => {
      state.employees = [...state.employees, action.payload.data];
    },
    employeeEdited: (state, action) => {
      const indexObj = state.employees.findIndex(
        (e) => e.id === action.payload.id
      );
      if (indexObj !== -1) {
        const updatedArray = [...state.employees];
        updatedArray[indexObj] = action.payload;
        state.employees = updatedArray;
      }
    },
  },
});

export const { setTest, addEmployed, employeeEdited } = employeesSlice.actions;
export const exampleReducer = employeesSlice.reducer;
