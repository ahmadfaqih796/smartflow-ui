import { Snackbar } from "@/components/alert/Snackbar";
import React from "react";

type Props = {
   open: boolean;
   message: string;
   severity: "success" | "info" | "warning" | "error";
   onClose?: () => void;
};

export const AlertContext = React.createContext({
  alert: {
    open: false,
    severity: "success",
    message: "",
  },
  showAlert: (_message = "", _severity = "success") => {},
});

export const AlertProvider = ({ children }: any) => {
  const [alert, setAlert] = React.useState<Props>({
    open: false,
    severity: "success",
    message: "",
  });

  const showAlert = (message = "", severity = "success") => {
    setAlert({
      open: true,
      severity : severity as "success" | "info" | "warning" | "error",
      message,
    });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, open: false }));
    }, 2000);
  };

  const handleClose = () => {
    setAlert({
      open: false,
      severity: "success",
      message: "",
    });
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
      <Snackbar open={alert.open} message={alert.message} severity={alert.severity} onClose={handleClose} />
    </AlertContext.Provider>
  );
};

export const useAlert = () => React.useContext(AlertContext);
