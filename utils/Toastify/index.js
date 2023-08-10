import { toast } from "react-toastify";

export const createToast = (type = "default", msg, closedTime = 3000) => {
  toast[type](msg, {
    position: "bottom-right",
    autoClose: closedTime,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
