import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message: string) => {
  return toast.success(`${message}`, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifyWarning = (message: string) => {
  return toast.warning(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
