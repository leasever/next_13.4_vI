import { toast } from "react-toastify";

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

export const notifyError = (message: string) => {
  return toast.error(`${message}`, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
