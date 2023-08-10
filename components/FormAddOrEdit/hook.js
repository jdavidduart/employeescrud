import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useUserActions } from "../../redux/actions/exampleAction";
import { createToast } from "../../utils/Toastify";
export const useFormAddOrEdit = (employeeToEdit, onCloseModal) => {
  const { createUser, updateAnUser } = useUserActions();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (employeeToEdit) {
      dispatch(updateAnUser(data));
      createToast("success", "Successfully updated");
    } else {
      let newUser = { ...data, id: v4() };
      dispatch(createUser({ data: newUser }));
      createToast("success", "Successfully added");
    }
    onCloseModal();
  };
  return {
    onSubmit,
  };
};
