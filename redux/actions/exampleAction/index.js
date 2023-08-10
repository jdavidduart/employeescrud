import {
  addEmployed,
  employeeEdited,
  setTest,
} from "../../slices/exampleSlice";

export const useUserActions = () => {
  const createUser =
    ({ data }) =>
    async (dispatch) => {
      try {
        dispatch(addEmployed({ data }));
      } catch (e) {
        console.log(e);
      }
    };
  const updateAnUser = (data) => async (dispatch) => {
    try {
      dispatch(employeeEdited(data));
    } catch (e) {
      console.log(e);
    }
  };
  return { createUser, updateAnUser };
};
