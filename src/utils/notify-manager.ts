import { toast } from "react-toastify";

export const notifySuccess = (message: string) => {
  return toast.success(`Éxito. ${message}`, {
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